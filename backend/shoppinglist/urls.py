"""Contains the URL patterns for the shoppinglist app."""

from django.urls import path

from .routes.routes import list_api as api

urlpatterns = [
    path("api/", api.urls),
]
