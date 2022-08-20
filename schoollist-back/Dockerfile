FROM node 

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY . .

EXPOSE 4000
CMD ["node", "./build/index.js"]