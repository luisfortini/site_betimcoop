# Etapa de build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de produção
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Configuração para SPA React
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80