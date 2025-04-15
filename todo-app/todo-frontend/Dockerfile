FROM node:20 AS base

WORKDIR /usr/src/app

FROM base AS test-stage

COPY . .

RUN npm ci

RUN npm run test

FROM test-stage AS build-stage

RUN VITE_BACKEND_URL=http://localhost:3000 npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html




