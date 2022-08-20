FROM node

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn run build

FROM nginx:1.16.0-alpine

COPY ./dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY ./deploy/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]

