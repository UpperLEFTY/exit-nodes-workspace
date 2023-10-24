
FROM node:18-alpine

WORKDIR /app

COPY package.json /app

COPY package-lock.json /app

RUN npm install --production

COPY . /app

CMD ["npm", "start"]

EXPOSE 3000
