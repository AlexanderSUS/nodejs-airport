FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci 

COPY . .

USER node

CMD ["npm", "run", "start:dev"]
