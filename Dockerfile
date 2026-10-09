FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --omit=dev
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3180 DATA_DIR=/data
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY server.mjs presentation-agent.mjs worker-bridge.mjs package.json ./
COPY data/*.seed.json ./data/
USER node
EXPOSE 3180
CMD ["node","server.mjs"]
