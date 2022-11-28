FROM node:18-alpine3.16 AS provider-ui

RUN apk update && apk add --no-cache libc6-compat
RUN npm install -g pnpm turbo

WORKDIR /app
COPY . .
RUN turbo prune --scope=nexus-provider-ui --docker

FROM node:alpine AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=provider-ui /app/out/json ./
COPY --from=provider-ui /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install

COPY --from=provider-ui /app/out/full .
COPY turbo.json turbo.json
RUN pnpm turbo run build --filter=nexus-provider-ui

FROM node:alpine AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs