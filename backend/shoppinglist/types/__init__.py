"""Contains types used by the shopping list app."""

from django.contrib.auth.models import User
from django.db.models import (
    Model,
    CharField,
    IntegerField,
    ForeignKey,
    ManyToManyField,
    DateField,
    DateTimeField,
    DecimalField,
    TextField,
    CASCADE,
)
from django.http import HttpRequest
from ninja import Schema, Router

__all__ = [
    "User",
    "Model",
    "CharField",
    "IntegerField",
    "ForeignKey",
    "ManyToManyField",
    "DateField",
    "DateTimeField",
    "DecimalField",
    "TextField",
    "CASCADE",
    "Schema",
    "HttpRequest",
    "Router",
]
