FROM node
WORKDIR /app
COPY ./src /app
RUN npm install
RUN npm install mysql2@3.0.0

CMD [ "npm" , "start" ]