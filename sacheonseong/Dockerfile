# install NODE
FROM node:lts-alpine

# install simple http server
RUN npm install -g http-server

# copy 'package.json' and 'package-lock.json'
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the working directory (WORKDIR)
COPY . .

# build
RUN npm run build

# use 8080 port
EXPOSE 8080

# execute 'http-server'. params 'dist'
CMD [ "http-server", "dist" ]