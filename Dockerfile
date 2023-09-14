FROM ubuntu:22.04 as base-image

COPY ./server/ /server

FROM python:3.10.0-slim-buster as backend-layer

RUN apt-get update
RUN apt-get install libpq-dev -y

COPY --from=base-image /server/ /server
COPY ./backend /backend

WORKDIR /backend

RUN pip install -r requirements.txt
RUN python manage.py collectstatic --noinput --settings=shoppingapp.settings.local_settings

FROM node:18 as frontend-layer

COPY --from=backend-layer /server/ /server
COPY ./frontend /frontend

WORKDIR /frontend

RUN npm install
RUN npm run build
RUN mkdir -p ../server/site/
RUN cp -r dist/* ../server/site/

FROM ubuntu:22.04 as final-image

COPY --from=frontend-layer /server/ /server

WORKDIR /server

EXPOSE 80

CMD ["./bin/caddy", "run" ,"Caddyfile"]
