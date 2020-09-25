FROM node:12.2.0 as build
COPY package*json package-lock.json .npmrc ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app
COPY . .
# you need to use `--` to pass params to npm scripts
RUN npm run ng build -- --prod --output-path=dist/ 
## Actual dist 
FROM registry.gitlab.com/1000kit/infra/docker-images/spa-base-image:master

COPY nginx/default.conf /opt/bitnami/nginx/conf/app.conf

COPY --from=build --chown=101:0 /ng-app/dist /opt/bitnami/nginx/html
USER 0
RUN chmod -R g=u /opt/bitnami/nginx/html/
USER 1001
