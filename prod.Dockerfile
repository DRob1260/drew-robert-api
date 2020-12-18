FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8080

ENV DOCKER=true
ENV FlICKR_API_KEY=$FlICKR_API_KEY
ENV FLICKR_API_SECRET=$FLICKR_API_SECRET

CMD ["npm", "run", "prod"]
