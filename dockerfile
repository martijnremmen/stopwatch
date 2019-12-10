FROM nginx:alpine

RUN rm -r /usr/share/nginx/html/*

ADD ./ /usr/share/nginx/html

EXPOSE 80