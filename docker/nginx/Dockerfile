ARG NGINX_IMAGE=nginx_angular
FROM nginx:latest as base

# Add our nginx default config
COPY templates/ /etc/nginx/templates/

COPY . /user/share/nginx/html

# Where our terminal will launch from when we connect to the container
WORKDIR /user/share/nginx/html

# Install NodeJS and NPM
RUN apt update; \ 
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash -; \
    apt install nodejs -y; \
    npm install -g @angular/cli