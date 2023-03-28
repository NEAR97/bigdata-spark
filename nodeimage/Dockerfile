FROM debian:bullseye

# refresh apt get
RUN apt-get update

# install some utilities
RUN apt-get install -y curl make g++

# install node 
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# install required npm packages
ADD package.json /package.json
RUN npm install

WORKDIR /src

EXPOSE 8080

CMD [ "node","/src/server.js"]

