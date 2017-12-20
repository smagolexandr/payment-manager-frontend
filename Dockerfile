#docker run -v ~/Sites/payment-manager-frontend:/usr/src/app -p 3000:3000 pm-frontend
FROM node:latest

# set working directory
RUN mkdir /usr/src/app
VOLUME /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install --silent
RUN npm install react-scripts@1.0.17 -g --silent

# start app
CMD ["npm", "start"]
