FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
# This repository intentionally keeps generated lockfiles out of the dummy-data seed.
RUN npm install --omit=dev --no-audit --no-fund
FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
RUN addgroup -S crm && adduser -S crm -G crm
COPY --from=deps /app/node_modules ./node_modules
COPY src ./src
USER crm
EXPOSE 3000
CMD ["node","src/server.js"]