# Nginx Configuation:

Running on Ubuntu 18.04, Nginx server block configuartion:

    server {

      server_name sampledomain.com www.sampledomain.com;
      access_log /var/log/nginx/yourdomain.com.log;


          location /proxyapi/ {
            limit_req zone=mylimit burst=20 nodelay;
            proxy_pass http://localhost:4000/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
          }

          location / {
            proxy_pass http://localhost:3001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
          }
     ... + Certbot HTTPS automatic code from LetsEncrypt

In main http block, for [rate limiting:](https://www.nginx.com/blog/rate-limiting-nginx/):

        limit_req_zone $binary_remote_addr zone=mylimit:10m rate=5r/s;
