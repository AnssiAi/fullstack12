FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node package.json .

RUN npm install

USER node

CMD ["npm", "run", "dev", "--", "--host"]
