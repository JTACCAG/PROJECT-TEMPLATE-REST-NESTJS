FROM node:18.17 as base
WORKDIR /app

ADD ./api-nest-js .

RUN npm install

ADD ./.env .

FROM base as development
EXPOSE 80

EXPOSE 9000

CMD npm run start:dev
