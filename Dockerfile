FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --no-optional && npm install quasar-cli -g

COPY . .
HEALTHCHECK CMD curl --fail http://localhost:8081/ || exit 1
EXPOSE 8081
ENTRYPOINT [ "npm", "start" ]
CMD ["dev"]
