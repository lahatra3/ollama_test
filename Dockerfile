# ======== nodejs docker image
FROM node:iron-alpine

# ======== Working directory
WORKDIR /app

# ======== Installing dependencies
COPY package.json ./
RUN npm install -g npm && npm install
COPY ./ /

# ======== Run app
RUN npm run build
ENTRYPOINT [ "npm", "run", "start" ]
