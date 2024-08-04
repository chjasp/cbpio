FROM node:20-alpine

WORKDIR /app
COPY 01-nextjs/package*.json ./
RUN npm ci

COPY 01-nextjs .
RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]