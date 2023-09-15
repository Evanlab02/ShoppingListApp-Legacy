# Project structure

## Shopping app

The main folder for our project is the `shopping_app` folder. This contains our ASGI and WSGI applications, our settings and our urls.

### ASGI

ASGI stands for Asynchronous Server Gateway Interface. It is a standard for Python asynchronous web servers to communicate with asynchronous applications. Please refer to the [ASGI documentation](https://asgi.readthedocs.io/en/latest/) for more information.

We use ASGI to run our application in production.

## Authentication app

The `authentication` app contains all the code related to authentication. This includes the models, views and tests.

### Models

We use the django auth user model to manage users. We also have a Client wrapper model that has a user as a foreign key. This is used to users tokens and other information.


## Shopping item app

The `shopping_item` app contains all the code related to shopping items. This includes the models, views and tests.

### Models

We use the django model to manage shopping items. We also have a Store object that is a foreign key to the shopping item. This is used to manage the stores that the shopping items are from.

## Shopping list app

The `shopping_list` app contains all the code related to shopping lists. This includes the models, views and tests.

### Models

We use the django model to manage shopping lists. Users can have multiple shopping lists and shopping lists can have multiple shopping items.


