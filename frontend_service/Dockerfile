FROM node:18-alpine

WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./
RUN npm install

COPY ./public ./public
COPY ./src ./src

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]