# Server documentation

Welcome to the shopping list app server documentation. Here you can find all the information you need to get started with the server without diving through any developer documentation and code. 

In this document you will find only information about how to start this server and how to access it. For more information about the server itself, please refer to the developer documentation.

## Getting started

### Prerequisites

To run this server you need to have the following software installed on your machine:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

and thats it! You don't need to install any other software or dependencies. Docker will take care of everything else for you. 

Please note that while it is possible to run this server without Docker, it is not recommended and not supported.

Also note that while alot of measures have been taken to make this server as secure as possible, it is still not recommended to run this server on a public network. If you want to do this, please make sure you know what you are doing and that you have taken all the necessary security measures. This will most likely require you to change some of the configuration files, and dive into the code so please if that is your intention, read the [developer documentation](docs/README.md). first.

### Creating a .env file

Before you can start the server, you need to create a `.env` in the `server/production/` folder. This file will contain all the environment variables that the server needs to run.

It should look something like this:

```env
DJANGO_DATABASE_USER="django-postgres-admin"
DJANGO_DATABASE_PASSWORD="django-postgres-password"
DJANGO_DATABASE_NAME="django-postgres"
DJANGO_KEY="django-admin-secret-key"

DEV_DJANGO_DATABASE_USER="django-postgres-admin"
DEV_DJANGO_DATABASE_PASSWORD="django-postgres-password"
DEV_DJANGO_DATABASE_NAME="django-postgres"
DEV_DJANGO_KEY="django-admin-secret-key"

PGADMIN_DEFAULT_EMAIL="example@gmail.com"
PGADMIN_DEFAULT_PASSWORD="example-password"

BACKEND_VERSION="0.9.1" # Make sure to change this to the latest version
SERVER_VERSION="0.4.0" # Make sure to change this to the latest version
```

Please do not copy the above, make your credentials unique and secure.

### Starting the server

You will first need to build the images for the server. To do this, run the following command in the root of the repository:

```bash
make build
```

You will need your port 80 to be available to start the server. If you have any other services running on port 80, please stop them before continuing or change the port in the `server/production/docker-compose.yml` file.

You will also need port 5432, 8000 and 5050 to be available. If you have any other services running on these ports, please stop them before continuing or change the ports in the `server/production/docker-compose.yml` file.

To start the server, run the following command in the root of the repository:

```bash
docker compose -f server/production/docker-compose.yml up -d
```

### Doing migrations

After you have started the server, you will need to do the migrations for the POSTGRES database. To do this, run the following command in the shopping-django-app container:

```bash
python manage.py makemigrations
python manage.py migrate
```

You can run these very easily using [Docker Desktop](https://www.docker.com/products/docker-desktop) by going to the container and running the commands in the terminal. Which is what I recommend.

### Creating a superuser

After you have done the migrations, you will need to create a superuser to be able to access the admin panel. To do this, run the following command in the shopping-django-app container:

```bash
python manage.py createsuperuser
```

You can run this very easily using [Docker Desktop](https://www.docker.com/products/docker-desktop) by going to the container and running the command in the terminal. Which is what I recommend.

### Accessing the server

After you have done all of the above, you should be able to access the server on `http://localhost`. If you want to access the admin panel, you can do so on `http://localhost/admin`.

Here are a few links to get you started:

- [Admin page](http://localhost/admin)
- [API documentation](http://localhost/api/docs)
- [Shopping Dashboard](http://localhost/shopping/dashboard/)

### Stopping the server

To stop the server, run the following command in the root of the repository:

```bash
docker-compose -f server/production/docker-compose.yml down
```

This will still keep the database and the data in the database. If you want to remove the database and the data in the database, run the following command in the root of the repository:

```bash
docker-compose -f server/production/docker-compose.yml down -v
```

### Updating your release?

To update your release, you will need to do the following:

1. Stop the server
2. Update .env file with the new versions in the new release
3. Run make build in the new release directory
4. Run docker-compose up -d (start the server) in the new release directory
5. You are done!

### Developer documentation

For more information about the server itself, please refer to the [developer documentation](docs/README.md).
