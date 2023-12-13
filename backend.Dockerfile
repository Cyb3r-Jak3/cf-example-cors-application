FROM node:slim

# Declaring env
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /express-docker

# Copying all the files in our project
COPY ./backend .

# Installing dependencies
RUN npm install

# Starting our application
CMD [ "node", "index.js" ]

# Exposing server port
EXPOSE 3000