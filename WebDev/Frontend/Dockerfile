# The first stage
# Build React static files
FROM node:16-alpine as build

WORKDIR /app/frontend

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm ci  --silent


CMD ["yarn",  "start"]
