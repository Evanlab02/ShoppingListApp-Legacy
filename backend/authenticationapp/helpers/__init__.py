"""Contains helper functions for the authentication app."""

from uuid import uuid4

from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.utils import timezone
from django.views.decorators.http import require_http_methods

__all__ = [
    "authenticate",
    "login",
    "logout",
    "uuid4",
    "timezone",
    "render",
    "require_http_methods",
]
