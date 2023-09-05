"""Contains the ShoppinglistConfig class."""

from django.apps import AppConfig


class ShoppinglistConfig(AppConfig):
    """Configures the shoppinglist app."""

    default_auto_field = "django.db.models.BigAutoField"
    name = "shoppinglist"
