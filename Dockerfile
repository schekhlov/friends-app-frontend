FROM node:9.5.0 AS build
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.13.8
COPY --from=build /app/dist /usr/share/nginx/html

