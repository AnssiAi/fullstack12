FROM node:20 AS base

WORKDIR /usr/src/app

FROM base AS test-stage

COPY --chown=node:node . .

RUN npm ci

RUN npm run test:back

FROM test-stage AS start

USER node

CMD ["npm", "start"]
