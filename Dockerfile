# Dockerfile
# syntax = docker/dockerfile:1
FROM nginx

COPY ./_site /usr/share/nginx/html

EXPOSE 80