FROM node:10
WORKDIR /app
ADD package.json ./
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install
COPY . .
RUN npm run build
CMD npm run start