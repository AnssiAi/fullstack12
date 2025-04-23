FROM node:20 AS base

WORKDIR /usr/src/app

FROM base AS test-stage

COPY . .

RUN npm ci

RUN npm run test:front

FROM test-stage AS build-stage

RUN REACT_APP_PRODUCTION_URL=http://localhost:8080 npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
