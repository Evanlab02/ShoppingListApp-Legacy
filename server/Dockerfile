FROM ubuntu:22.04

COPY . /server

WORKDIR /server

EXPOSE 80

CMD ["./bin/caddy", "run" ,"Caddyfile"]