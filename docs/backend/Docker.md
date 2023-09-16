# Dockerfile

We use python:3.10.0-slim-buster as our base image. This is the official python image.

```Dockerfile
FROM python:3.10.0-slim-buster

RUN apt-get update
RUN apt-get install libpq-dev -y

COPY . /app
WORKDIR /app

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "-m", "uvicorn", "shoppingapp.configs.asgi:application", "--host", "0.0.0.0"]
```

## APT

We use apt to install the libpq-dev package. This is needed for us to be able to use psycopg with postgres.

Before installing libpq-dev we need to run apt-get update to update the package list, otherwise it will fail to download libpq-dev.

## COPY

We copy the entire project into the /app folder in the container. This will not copy files that are specified in the .dockerignore file.

## WORKDIR

We set the working directory to /app. This means that any commands we run will be run from the /app folder.

## RUN

We run pip install -r requirements.txt to install the dependencies. This will install the dependencies specified in the requirements.txt file. It is important we keep the requirements.txt file up to date using pipenv or any other tool as this is what is used to install the dependencies.

## EXPOSE

We expose port 8000. This is the port that uvicorn will run on.

## CMD

We run the following command to start the server:

```bash
python -m uvicorn shoppingapp.configs.asgi:application --host 0.0.0.0
```

This will start the api on port 8000 on host 0.0.0.0, this way we can access the api from outside the container if we map the port to the host.