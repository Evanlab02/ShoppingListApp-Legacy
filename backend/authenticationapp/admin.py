"""Contains admin configuration for the authentication app."""

from django.contrib import admin

from .models import Client

admin.site.register(Client)
