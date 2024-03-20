FROM node:iron-alpine AS app_build
WORKDIR /app
COPY package.json ./
RUN npm install -g npm && npm install
COPY ./ ./
RUN npm run build

FROM node:iron-alpine
WORKDIR /app
COPY --from=app_build /app/dist ./dist
COPY --from=app_build /app/node_modules ./node_modules
CMD [ "node", "dist/main" ]
