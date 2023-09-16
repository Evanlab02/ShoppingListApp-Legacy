# Miscellanous documentation

A place for all documentation that does not warrant its own file.

## Requirements

We have two requirements files. One for production and one for development. The production requirements file is called `requirements.txt` and the development requirements file is called `dev-requirements.txt`. The production requirements file is used to install the dependencies for the project when it is deployed. The development requirements file is used to install the dependencies for the project when it is being developed.

Preferably you would not use the `dev-requirments.txt` file and would use pipenv instead. This is because pipenv is a much better tool for managing dependencies. However, all developers should have the freedom to choose what they want to use. Please try your best to keep the Pipfile and Pipfile.lock up to date if you use another tool.

Please also ensure that you keep the requirements files up to date.