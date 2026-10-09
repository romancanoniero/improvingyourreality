#!/usr/bin/env python3
"""Local evidence service. Never executes repository code, agents or deployment scripts."""
import argparse, base64, datetime, hashlib, io, json, os, re, subprocess, sys, time
from PIL import Image
from pathlib import Path
ROOT=Path(os.environ.get('IYR_SOURCE_ROOT','/Volumes/DEV_MAC')).resolve()
SKIP={'node_modules','.git','.gradle','build','dist','Pods','DerivedData','storage','.venv','venv','.codex','.agents','.cache','.e2e-artifacts'}
REMOTE=['/usr/bin/ssh','-o','BatchMode=yes','-o','ConnectTimeout=12','iankmp-vps','docker','exec','-i','improvingyourreality-site-1','node','worker-bridge.mjs']
def bridge(action,payload=None):
    r=subprocess.run(REMOTE+[action],input=json.dumps(payload or {}),text=True,capture_output=True,timeout=210)
    if r.returncode: raise RuntimeError('No se pudo contactar al agente de la VPS.')
    return json.loads(r.stdout)
def repositories():
    result={}
    for directory,dirs,files in os.walk(ROOT,followlinks=False):
        path=Path(directory); depth=len(path.relative_to(ROOT).parts)
        if '.git' in dirs or '.git' in files:
            try:
                r=subprocess.run(['/usr/bin/git','-C',str(path),'config','--get','remote.origin.url'],capture_output=True,text=True,timeout=5)
                match=re.search(r'github\.com[:/]([\w.-]+/[\w.-]+?)(?:\.git)?$',r.stdout.strip())
                if match: result.setdefault(match.group(1).lower(),{'repository':match.group(1),'path':path})
            except subprocess.TimeoutExpired: pass
            dirs[:]=[]
        else: dirs[:]=[d for d in dirs if d not in SKIP and not d.startswith('.') and depth<4 and not (path/d).is_symlink()]
    return result

def safe_file(path,root):
    return path.is_file() and not path.is_symlink() and path.resolve().is_relative_to(root.resolve())
def redact(text):
    text=re.sub(r'(?im)^.*(?:password|contrase[ñn]a|api[_ -]?key|secret|private[_ -]?key|bearer\s|access[_ -]?token|BEGIN .*KEY).*$','[dato sensible omitido]',text)
    text=re.sub(r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}','[email omitido]',text)
    text=re.sub(r'https?://[^\s)<>]+','[enlace omitido]',text)
    return text

def docs(root,limit=50000):
    candidates=list(root.glob('README*'))
    for rel in ['docs/marketing','docs/product','docs/producto','documentation/marketing']:
        folder=root/rel
        if folder.is_dir() and not folder.is_symlink():candidates+=sorted(folder.glob('*.md'))[:12]
    parts=[]
    for path in candidates:
        if safe_file(path,root) and path.stat().st_size<250000:
            parts.append('SOURCE: '+str(path.relative_to(root))+'\n'+redact(path.read_text(errors='replace')[:limit]))
    return '\n\n'.join(parts)[:limit]

def evidence(repo,catalog):
    root=repo['path'];document=docs(root)
    related=[]
    for r in catalog.values():
        if r['repository']==repo['repository']:continue
        # Sibling checkouts are candidates only; the model must verify the relationship.
        if r['path'].parent==root.parent:
            related.append({'repository':r['repository'],'summary':docs(r['path'],2000)})
    images=[];candidates=[]
    for rel in ['docs/screenshots','maestro/screenshots','.e2e-artifacts/visual-audit','screenshots','docs/marketing/screenshots']:
        folder=root/rel
        if folder.is_dir() and not folder.is_symlink():
            candidates += [p for p in folder.glob('*.png') if safe_file(p,root) and p.stat().st_size<2000000]
    rejected=re.compile(r'login|password|otp|auth|credential|first-frame|splash|error|failure|fail-|contact|chat|map|location',re.I)
    candidates=[p for p in candidates if not rejected.search(p.name)]
    def score(p):
        name=p.name.lower()
        preferred=['event-type','devices','subscription','home-with','onboarding','home','network']
        return next((i for i,t in enumerate(preferred) if t in name),20),-p.stat().st_mtime,p.name
    seen=set();categories=set()
    for path in sorted(candidates,key=score):
        category=score(path)[0]
        if category<20 and category in categories:continue
        content=path.read_bytes(); digest=hashlib.sha256(content).hexdigest()
        if digest in seen:continue
        seen.add(digest);categories.add(category)
        if not content.startswith(b'\x89PNG\r\n\x1a\n'):continue
        preview=Image.open(io.BytesIO(content));preview.thumbnail((512,1120));encoded=io.BytesIO();preview.save(encoded,format='PNG')
        images.append({'previewBase64':base64.b64encode(encoded.getvalue()).decode(),'id':'screen-'+str(len(images)+1),'path':str(path.relative_to(root)),'base64':base64.b64encode(content).decode(),'capturedAt':datetime.datetime.fromtimestamp(path.stat().st_mtime,datetime.timezone.utc).isoformat()})
        if len(images)==3:break
    return {'documents':document,'images':images,'related':related[:30]}

_catalog_at=0
_catalog={}
def run_once():
    global _catalog_at,_catalog
    if not ROOT.is_dir():return
    if time.time()-_catalog_at>300:
        _catalog=repositories();bridge('catalog',{'repositories':[{'full_name':r['repository']} for r in _catalog.values()]});_catalog_at=time.time()
    response=bridge('claim');job=response.get('job')
    if not job:return
    print('Procesando '+job['repository'],flush=True)
    try:
        catalog=_catalog;repo=catalog.get(job['repository'].lower())
        if not repo:raise RuntimeError('El repositorio no está disponible en DEV_MAC. Clonalo en esa unidad y reintentá la generación.')
        result=bridge('evidence',{**job,'evidence':evidence(repo,catalog)})
        print('Tarea completada' if result.get('ok') else 'La tarea requiere atención en la administración',flush=True)
    except Exception as exc:
        # Never echo commands, file contents, credentials or provider response bodies.
        message=str(exc) if isinstance(exc,RuntimeError) else 'No se pudo leer la evidencia local. Revisá el repositorio y reintentá.'
        bridge('fail',{**job,'message':message[:500]})
if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--once',action='store_true');args=parser.parse_args()
    while True:
        try:run_once()
        except Exception: print('VPS no disponible; se reintentará la conexión.',flush=True)
        if args.once:break
        time.sleep(25)
