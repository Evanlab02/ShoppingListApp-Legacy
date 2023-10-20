# Backend

Before trying to get the backend running, please make sure you have gone through: [Get the server running locally](../server/README.md). You do not need to follow the steps here, just familiarize yourself with the steps.

When you have read that, you can follow the steps below to get the backend running locally.

## Copy .env file

As part of the server setup, you need to create .env file in the `server/production/` folder. You can copy that .env file and put it in the root of the backend folder and the root of the repository.

Make sure the credentials between the two .env files match as this is needed to connect to postgres. Please note that when running locally, you should be using the dev database.

## Start dev resources

To start the dev resources, run the following command in the root of the repository:

```bash
make dev
```

or

```bash
docker compose -f compose.yml watch
```

When doing this the compose file will try to auto reload files when changes are made. This is very useful when developing. However you can still follow the steps below to get the backend running on your machine and not in docker.

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
python manage.py runserver localhost:7000 --settings=shoppingapp.settings.local_settings
```

If you are using pipenv, you can run the backend using the following command:

```bash
pipenv run python manage.py runserver localhost:7000 --settings=shoppingapp.settings.local_settings
```

## Accessing the API

Once you have the backend running, you can access the API by going to the following url:

```bash
http://localhost:7000/api/docs#
```
