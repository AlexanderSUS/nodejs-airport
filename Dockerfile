FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci 

EXPOSE 4000

COPY . .

CMD [ "node", "index.js" ]