FROM node:12.7.0-alpine as build-host
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
FROM nginx:1.17.2-alpine as prod
COPY --from=build-host /usr/src/app/build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]