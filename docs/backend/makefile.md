# The makefile

Here you will find all the rules specified in the makefile, and descriptions of what they do.

## What is a makefile?

A makefile is a file that contains rules that can be run using the `make` command.

## Why do we have a makefile?

The makefile is used to make it easier to run commands that are used often. It is also used to make it easier for developers to get started with the project.

## How do I use the makefile?

You can run the makefile using the `make` command. You can also run a specific rule by running `make <rule>`.

## Rules

### `make requirements`

This rule is used to generate the requirements.txt file using pipenv.

### `make dev-requirements`

This rule is used to generate the dev-requirements.txt file using pipenv.

### `make format`

This rule is used to format the code using black.

### `make lint`

This rule is used to lint the code using flake8. We also check that black has formatted the code and there are no changes it would make. 

Finally we run pydocstyle to make sure the docstrings are formatted correctly.

### `make test`

This rule is used to run the tests using pytest.

Before running the tests we make the migrations files, this is a limitation right now as the tests will fail if you don't have the migrations files.
Migrations are not kept as part of the version control, so you will need to generate them yourself.

### `make static`

This rule is used to create the static files using django. This is used on the server as django does not host the static files in a live environment. Instead we use caddy to host the static files.

### `make dev`

Start the api in development mode using manage.py and the local settings file.

### `make migrate`

This rule is used to create the migrations and then migrate to the database.

### `make clean`

Deletes the coverage.xml file and the .coverage file.