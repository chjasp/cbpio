FROM node:20-alpine

WORKDIR /app
COPY 01-nextjs/package*.json ./
RUN npm ci

COPY 01-nextjs .
RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]

# docker buildx build --platform linux/amd64  -t europe-west3-docker.pkg.dev/main-dev-431619/cbpio-web/poc:latest .