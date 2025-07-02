FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
RUN rm -rf /etc/nginx/conf.d/*

COPY app-demo-ui/dist/app-demo-ui/ ./
COPY app-demo-ui/conf/proxy_nginx.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
