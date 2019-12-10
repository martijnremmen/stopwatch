FROM nginx:alpine

RUN rm -r /usr/share/nginx/html/*

ADD ./index.html /usr/share/nginx/html
ADD js /usr/share/nginx/html/js
ADD css /usr/share/nginx/html/css

EXPOSE 80