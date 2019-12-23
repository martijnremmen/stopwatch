FROM nginx:alpine

RUN rm -r /usr/share/nginx/html/*

ADD ./dist/ /usr/share/nginx/html

EXPOSE 80