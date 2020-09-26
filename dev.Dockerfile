FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENV DOCKER=true

CMD ["npm", "run", "watch:dev"]
