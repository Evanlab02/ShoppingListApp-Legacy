# Shopping App

This is the primary django project for the shopping app.

## Table of Contents

- [Configs](#configs)
- [Settings](#settings)
- [Urls](#urls)

## Configs

This folder contains the configs for the project. The configs being the asgi.py and wsgi.py files. These files are used to run the app using ASGI or WSGI.

### Asgi.py

This file is used to run the app using ASGI.

```python
"""
ASGI config for shoppingapp project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shoppingapp.settings.settings")

application = get_asgi_application()
```

Similiar to the manage.py file we set the DJANGO_SETTINGS_MODULE environment variable to shoppingapp.settings.settings. This is the settings file we use when running the app. We use the ASGI application in the Dockerfile currently, for the asynchoronous server.

### Wsgi.py

This file is used to run the app using WSGI. We do not use this file currently.

## Settings

This folder contains the settings files for the project. The settings files are used to configure the project.

There are three settings files:

- local_settings.py [For local development]
- settings.py [For production]
- test_settings.py [For testing]

Please familiarize yourself with the settings files on [django's website.](https://docs.djangoproject.com/en/4.2/topics/settings/)

## Urls

The urls are managed in the urls.py file in the shoppingapp folder. This file is used to manage the urls for the project.

```python
"""
URL configuration for shoppingapp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from ninja import NinjaAPI

from authenticationapp.routes.routes import auth_router
from shoppingitem.routes.routes import shop_router, item_router
from shoppinglist.routes.routes import list_router

api = NinjaAPI()

api.add_router("/auth", auth_router)
api.add_router("/items", item_router)
api.add_router("/lists", list_router)
api.add_router("/stores", shop_router)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", api.urls),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

### Imports

We import the following:

- django.conf.settings [To get the static URL and ROOT]
- django.conf.urls.static [To add the static urls to the urlpatterns]
- django.contrib.admin [To add the admin urls to the urlpatterns]
- django.urls.path [Use to create URLS/path for the urlpatterns]
- ninja.NinjaAPI [To create the API]
- authenticationapp.routes.routes.auth_router [To add the auth router to the API]
- shoppingitem.routes.routes.item_router [To add the item router to the API]
- shoppinglist.routes.routes.list_router [To add the list router to the API]
- shoppingitem.routes.routes.shop_router [To add the shop router to the API]


### Django ninja

Please familiarize yourself with [django ninja](https://django-ninja.rest-framework.com/tutorial/introduction/).