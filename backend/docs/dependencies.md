# Dependencies

We use pipenv to manage dependencies. You can install the dependencies using:

```bash
pipenv install --dev
```

## What dependencies are used?

- [django](https://www.djangoproject.com/)
- [django-ninja](https://django-ninja.rest-framework.com/)
- [uvicorn](https://www.uvicorn.org/)
- [python-dotenv](https://pypi.org/project/python-dotenv/)
- [psycopg](https://www.psycopg.org/)

### Django

Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. Please refer to the [Django documentation](https://docs.djangoproject.com/en/4.2/) for more information.

We use django to manage users, create models for the database and manage views that are not part of the Frontend React app.

### Django-ninja

django-ninja is a web framework for building APIs with Django and Python 3.6+ type hints. Please refer to the [django-ninja documentation](https://django-ninja.rest-framework.com/) for more information.

We use django ninja to create a REST API. The API is documented using OpenAPI and the documentation is available at [http://localhost:8000/docs](http://localhost:8000/docs) when running the backend locally.

### Uvicorn

Uvicorn is a lightning-fast ASGI server implementation, using uvloop and httptools. Please refer to the [Uvicorn documentation](https://www.uvicorn.org/) for more information.

We use uvicorn to run the server in our containers(production).

### Python-dotenv

python-dotenv reads key-value pairs from a .env file and can set them as environment variables. Please refer to the [python-dotenv documentation](https://pypi.org/project/python-dotenv/) for more information.

We use this to load our credentials from a .env file in a non-production environment.

### Psycopg

Psycopg is the most popular PostgreSQL database adapter for the Python programming language. Please refer to the [Psycopg documentation](https://www.psycopg.org/docs/) for more information.

We use psycopg to connect to our postgres database. Please note you will also need to install libpq-dev to use psycopg on Ubuntu.

There might be other restrictions on other platforms, please refer to the [Psycopg documentation](https://www.psycopg.org/docs/install.html) for more information.

## What dev dependencies are used?

- [black](https://black.readthedocs.io/en/stable/)
- [flake8](https://flake8.pycqa.org/en/latest/)
- [pydocstyle](https://www.pydocstyle.org/en/stable/)
- [pytest](https://docs.pytest.org/en/6.2.x/)
- [pytest-django](https://pytest-django.readthedocs.io/en/latest/)
- [pytest-cov](https://pytest-cov.readthedocs.io/en/latest/)
- [coverage](https://coverage.readthedocs.io/en/coverage-5.5/)

### Black

Please refer to the [Black documentation](https://black.readthedocs.io/en/stable/) for more information.

We use black to format our code and make it more readable. If your code is not formatted correctly, the CI will fail.

### Flake8

Please refer to the [Flake8 documentation](https://flake8.pycqa.org/en/latest/) for more information.

We use flake8 to lint our code and make sure it follows the PEP8 style guide. If your code is not linted correctly, the CI will fail.

### Pydocstyle

Please refer to the [Pydocstyle documentation](https://www.pydocstyle.org/en/stable/) for more information.

We use pydocstyle to lint our docstrings and make sure they follow the PEP257 style guide. If your docstrings are not linted correctly, the CI will fail.

### Pytest

Please refer to the [Pytest documentation](https://docs.pytest.org/en/6.2.x/) for more information.

We use pytest to run our tests. If your tests fail, the CI will fail. You are also required to have at least 80% test coverage. This is managed using [SonarCloud](https://sonarcloud.io/).

### Pytest-django

Please refer to the [Pytest-django documentation](https://pytest-django.readthedocs.io/en/latest/) for more information.

### Pytest-cov

Please refer to the [Pytest-cov documentation](https://pytest-cov.readthedocs.io/en/latest/) for more information.

### Coverage

Please refer to the [Coverage documentation](https://coverage.readthedocs.io/en/coverage-5.5/) for more information.

We use coverage to measure test coverage. If your test coverage is below 80%, the CI will fail. This is managed using [SonarCloud](https://sonarcloud.io/).