# Dockerfile para una aplicación Next.js

# --- Dependencias ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# --- Build ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# --- Producción ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN apk update && apk upgrade && apk add --no-cache dumb-init

# Copia los artefactos de la build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]
