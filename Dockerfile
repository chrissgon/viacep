FROM node:16.13.1-alpine AS BUILD

WORKDIR /app
COPY . .

RUN npm i 
RUN npm run build

FROM nginx:1.21-alpine

WORKDIR /usr/share/nginx/html

COPY --from=BUILD /app/dist .
