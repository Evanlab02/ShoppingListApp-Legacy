# Backend documentation

This is the backend of the project. It is a REST API written in Python using the django framework.

We use django along with django-ninja to create a REST API. The API is documented using OpenAPI and the documentation is available at [http://localhost:8000/docs](http://localhost:8000/docs) when running the backend locally.

## Running the backend

### Setup

You require python 3.10 to run the backend. You can install the dependencies using pip:

```bash
pip install -r requirements.txt
```

I recommend using a virtual environment to install the dependencies. You can create a virtual environment using:

```bash
python -m venv venv
```

or you can use [pipenv](https://pipenv.pypa.io/en/latest/).

```bash
pipenv install --dev
```

### Copy the .env file

You need to copy the `.env` you created when starting the server to the backend folder. You can do this using the following command:

```bash
cp ../server/.env .env
```

### Running the api

You need to have a postgres database running. I recommend starting the entire apps server, you can find a guide to do this in the [Server README](../server/README.md).

To run a development api server, you can use the following command:

```bash
python manage.py runserver
```

This will start a development server at [http://localhost:8000](http://localhost:8000).

### Running tests

You can run the tests using the following command:

```bash
make test
```

### Developer documentation

Please read the [Developer documentation](./docs/README.md) for more information on how to contribute to the backend.
