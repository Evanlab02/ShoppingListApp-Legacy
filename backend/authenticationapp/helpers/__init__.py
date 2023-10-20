"""Contains helper functions for the authentication app."""

from uuid import uuid4

from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.utils import timezone

__all__ = [
    "authenticate",
    "login",
    "logout",
    "uuid4",
    "timezone",
    "render",
]
