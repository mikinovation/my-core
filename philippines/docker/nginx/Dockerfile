FROM nginx:1.23

RUN rm -f /etc/nginx/conf.d/*

COPY docker/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf