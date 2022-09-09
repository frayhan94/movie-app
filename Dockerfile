FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN npm run build

ENV NPM_CONFIG_LOGLEVEL warn

EXPOSE 80

CMD [ "npm", "start" ]