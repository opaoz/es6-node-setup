FROM ubuntu
WORKDIR /var/dev/es6
ADD . /var/dev/es6

RUN apt-get update

RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential

RUN npm install
# RUN npm install -g grunt-cli
RUN npm install -g apidoc
RUN npm install -g mocha
RUN npm install -g forever

EXPOSE 3000

ENV NODE_ENV production

CMD ["npm","test"]
CMD ["npm", "apidoc"]
CMD ["node", "bin/www"]
