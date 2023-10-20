"""Contains helper functions for tests."""

from django.contrib.auth.models import User
from django.test import TestCase, Client as DjangoClient
from django.utils import timezone

from authenticationapp.models import Client as UserClient


def create_test_user():
    """Create a test user."""
    user = User.objects.create_user(
        username="test",
        password="test",
        email="test@gmail.com",
    )
    user.save()
    return user


def create_secondary_test_user():
    """Create a test user."""
    user = User.objects.create_user(
        username="test2",
        password="test2",
        email="testsecondary@gmail.com",
    )
    user.save()
    return user


def create_test_user_client(user: User):
    """Create a test user client."""
    client = UserClient(user=user)
    client.save()
    return client


__all__ = [
    "DjangoClient",
    "TestCase",
    "User",
    "create_test_user",
    "create_test_user_client",
    "timezone",
    "create_secondary_test_user",
]
