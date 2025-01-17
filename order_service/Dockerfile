FROM node:18-alpine

WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm install
COPY ./src ./src
RUN npx tsc  # Compile TypeScript to JavaScript
CMD ["node", "dist/index.js"]