FROM node:14
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY dist/ ./

EXPOSE 3000

ENV PORT=3000
ENV DB_HOST=127.0.0.1
ENV DB_PORT=3606
ENV DB_USER=mysql
ENV DB_PASSWORD=
ENV DB_NAME=zeus

CMD [ "node", "main.js" ]