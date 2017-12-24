#docker run -v ~/Sites/payment-manager-frontend:/usr/src/app -p 3000:3000 pm-frontend
FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
# install and cache app dependencies
RUN npm install

COPY . .

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/local/lib/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install
RUN npm install react-scripts@1.0.17 -g

# start app
CMD npm start