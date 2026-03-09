FROM node:23-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm i

EXPOSE 3000

CMD ["npm", "run", "dev"]
