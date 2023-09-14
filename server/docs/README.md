# Server Developer Documentation

## Table of Contents

- [Caddy](#caddy)
- [Frontend with React](#frontend)
- [Backend with Django](#backend)
- [Database with Postgres](#database)
- [Docker using docker compose](#docker)
- [The caddyfile](#caddyfile)
- [CHANGELOG](#changelog)

## Caddy

Caddy is a web server that can be configured with a Caddyfile. Caddy is similiar to nginx, but it is easier to configure and it has a lot of features built in. You can read more about Caddy [here](https://caddyserver.com/).

We use caddy to host the static files used across the website and to reverse proxy to the backend.

## Frontend

The frontend is built with React. You can read more about React [here](https://reactjs.org/).
You can read more about the frontend in the [frontend README](../../frontend/README.md).

We do not create all our pages with React, we currently use React only for the dashboard page. We use Django templates for the other pages.

## Backend

The backend is built with Django. You can read more about Django [here](https://www.djangoproject.com/).
You can read more about the backend in the [backend README](../../backend/README.md).

## Database

We use a Postgres database. You can read more about Postgres [here](https://www.postgresql.org/).

The reason we use postgres is because it is a very powerful database and it is very easy to use with Django. Django has a lot of built in features for postgres, like ORM and migrations.

## Docker

We use docker and docker compose to run the server. You can read more about docker [here](https://www.docker.com/).

We use docker compose to run the server because it is very easy to use and it is very easy to configure. You can read more about docker compose [here](https://docs.docker.com/compose/).

## Caddyfile

The Caddyfile is the configuration file for Caddy. You can read more about the Caddyfile [here](https://caddyserver.com/docs/caddyfile).
You can also find more documentation about the Caddyfile used in this project [here](./caddy.md).

## Find the CHANGELOG [here](../CHANGELOG.md)