# Backend Checks Workflow Job

```yaml
Backend-Checks:
    runs-on: ubuntu-latest

    # Vars set in Github should not be used in any PROD environment
    env:
      DJANGO_DATABASE_NAME: ${{ vars.DJANGO_DATABASE_NAME }}
      DJANGO_DATABASE_USER: ${{ vars.DJANGO_DATABASE_USER }}
      DJANGO_DATABASE_PASSWORD: ${{ vars.DJANGO_DATABASE_PASSWORD }}
      DJANGO_KEY: ${{ vars.DJANGO_KEY }}

    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Set up Python 3.10
        uses: actions/setup-python@v3
        with:
          python-version: "3.10"
      - name: Setup
        working-directory: ./backend
        run: |
          pip install --upgrade pip
          pip install pipenv
          pipenv install --dev
      - name: Lint and Docs Styling
        working-directory: ./backend
        run: |
          pipenv run black . --check
          pipenv run flake8 . --max-line-length=100
          pipenv run pydocstyle .
      - name: Docker build
        working-directory: ./backend
        run: |
          docker build -t backend:latest .
      - name: Start Prod Server
        run: |
          docker compose up -d
      - name: Make Migrations and Migrate
        working-directory: ./backend
        run: |
          pipenv run python manage.py makemigrations --settings=shoppingapp.settings.test_settings
          pipenv run python manage.py migrate --settings=shoppingapp.settings.test_settings
      - name: Run Django Tests
        working-directory: ./backend
        run: |
          pipenv run pytest -v --cov=. --cov-report term-missing
          pipenv run coverage xml
      - name: SonarCloud Scan - Backend
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # Needed to get PR information, if any
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
        with:
          projectBaseDir: backend/
```


## What is this workflow job?

This workflow job is used to run all the backend checks. Its primary jobs are to:

- Lint the code
- Test the code
- Check that the build works

## Python version

We use Python 3.10 for this project. 

Why python 3.10? No specific reason, except that is the version that was installed on my machine when I started this project.

## Pipenv - Dependency management

We use pipenv to mangage dependencies for the backend, therefore we also use pipenv to install dependencies for this workflow job and run all the commands inside of the pipenv environment.

## Linting

The first thing we do after checking out the code, setting up python and installing pipenv is to lint the code. We use black and flake8 to lint the code.

As part of this step we also use pydocstyle to check that the docstrings are correct.

How do I check this locally?

```bash
make lint
```

## Docker build

The next step is to build the docker image. This is done to make sure that the docker image can be built and that the docker image is working. Want to know about the Dockerfile? Check out the [Dockerfile docs](../backend/Docker.md).

## Start the Prod Server

Now you may be asking why would we start the prod server? Well that is because our tests are run against the prod server as it relies off of the database.

As this is created on the Github actions runner, there is no need to worry about your database being affected as this is a new database that is created for each run and is not at all related to your database.

## Make Migrations and Migrate

Now that we have the prod server running, we need to make sure that the migrations are up to date. This is done by running the `makemigrations` and `migrate` commands.

### What is migrations?

Migrations are Django’s way of propagating changes you make to your models (adding a field, deleting a model, etc.) into your database schema. They’re designed to be mostly automatic, but you’ll need to know when to make migrations, when to run them, and the common problems you might run into.

## Run Django Tests

Now that we have the prod server running and the migrations are up to date, we can run the tests. We use pytest to run the tests and we also use coverage to check that we have good test coverage.

We use django test cases to test the code. We also use pytest to run the tests.

We also generate a coverage report that is used by SonarCloud to check the test coverage.

## SonarCloud Scan - Backend

The last step is to run the SonarCloud scan. This is done to check the code quality and test coverage. This is done by using the SonarCloud Github action.

Learn more about SonarCloud here: [SonarCloud](https://sonarcloud.io/)