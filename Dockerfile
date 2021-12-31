FROM alpine
RUN apk add --update nodejs npm
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 3500
ENTRYPOINT ["node", "./app.js"]