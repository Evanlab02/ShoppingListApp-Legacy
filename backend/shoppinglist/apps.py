"""Contains configuration for the shoppinglist app."""

from django.apps import AppConfig


class ShoppinglistConfig(AppConfig):
    """Config for the shoppinglist app."""

    default_auto_field = "django.db.models.BigAutoField"
    name = "shoppinglist"
