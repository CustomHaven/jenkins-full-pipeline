FROM node:18
WORKDIR /app
COPY package*.json /app/
RUN npm install
ENV DB_USER=postgres
ENV DB_HOST=pokemon-db
ENV DB_NAME=pokemon
ENV DB_PASSWORD=docker
ENV DB_PORT=5432
COPY . /app/
EXPOSE 3000
CMD ["npm", "start"]