# Pipenv

Read more about Pipenv [here](https://pipenv.readthedocs.io/en/latest/).

## Install dependencies

I recommend installing the depenendencies using pipenv. You can install pipenv using pip.

```bash
pip install pipenv
```

Once you have pipenv installed, you can install the dependencies using the Pipfile.lock file.

```bash
pipenv install --dev
```

## What is the Pipfile?

The Pipfile is a file that contains all the dependencies for the project. It is used by pipenv to install the dependencies.

This is similiar to the requirements.txt file, but the Pipfile is pipenv specific and you can still generate a requirements.txt file from the Pipfile.

Please read more about pipenv [here](https://pipenv.readthedocs.io/en/latest/).
