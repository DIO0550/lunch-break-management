FROM ubuntu:18.04 AS dev

RUN apt-get update 
RUN apt-get install -y yarn curl
RUN apt-get install -y nodejs npm && npm install n -g && n 12.0.0


RUN mkdir src
WORKDIR /src

ADD src/ /src

RUN npm install -D
RUN npm rebuild node-sass

EXPOSE 3035


FROM node:12 AS Prod

RUN mkdir public
WORKDIR /public
COPY product/ /public
RUN npm install --only=production


EXPOSE 8080
CMD [ "node", "server.js" ]