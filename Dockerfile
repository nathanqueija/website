FROM node:latest
WORKDIR /app
ADD package.json .npmrc ./
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install
ADD pages ./pages
RUN NODE_ENV=production npm run build
CMD npm run start