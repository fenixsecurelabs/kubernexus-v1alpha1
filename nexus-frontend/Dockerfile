FROM node:18

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

COPY apps/nexus-provider-ui/package.json ./apps/nexus-provider-ui/package.json

RUN npm install -g pnpm && pnpm install

COPY . .