FROM node:20.14.0-alpine3.20
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
# CMD ["npm", "run", "dev"]