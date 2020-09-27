FROM node:12.18.3
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
EXPOSE 4000
CMD ["yarn", "dev"]
