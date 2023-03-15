#  write a dockerfile to build a container with the blog-em app

# base image
FROM node:alpine

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./

RUN npm install

# add app
COPY . .

# start app
CMD ["npm", "start"]

# Path: docker-compose.yml
#  docker-compose file to build and run the blog-em app
