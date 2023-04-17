FROM ghcr.io/onecx/docker-spa-base:v1

# Copy applicaiton build
COPY nginx/locations.conf $DIR_LOCATION/locations.conf
# Copy applicaiton build
COPY dist/ping-angular $DIR_HTML

RUN chmod 775 -R $DIR_HTML/assets
USER 1001
