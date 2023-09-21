# Backend

Before trying to get the backend running, please make sure you have gotten the postgres database running. You can do this easily by starting the server with `docker-compose up` in the root of the project.

Here is a step by step guide to get the server running locally: [Get the server running locally](../server/README.md)

Below you will find a step by step guide to get the backend running locally.

## Copy .env file

As part of the server setup, you need to create .env file in the root of the project. You can copy that .env file and put it in the root of the backend folder.

Make sure the credentials between the two .env files match as this is needed to connect to postgres.

## Install dependencies

I recommend installing the depenendencies using pipenv. You can install pipenv using pip.

```bash
pip install pipenv
```

Once you have pipenv installed, you can install the dependencies using the Pipfile.lock file.

```bash
pipenv install --dev
```

You are also welcome to create your own virtual environment and install the dependencies using the requirements.txt file. If you do this and are planning to contribute to the project, please make sure to update the requirements.txt file with any new dependencies you install as well as the Pipfile.

```bash
pip install -r dev-requirements.txt
```

## Run the backend

Once you have the dependencies installed, you can run the backend using the following command:

```bash
python manage.py runserver
```

If you are using pipenv, you can run the backend using the following command:

```bash
pipenv run python manage.py runserver
```

Want to run the server as if it was in production? You can do that by running the following command:

```bash
python -m uvicorn shoppingapp.configs.asgi:application --host 0.0.0.0 --port 8000
```

## Accessing the API

Once you have the backend running, you can access the API by going to the following url:

```bash
http://localhost:8000/api/docs#
```
