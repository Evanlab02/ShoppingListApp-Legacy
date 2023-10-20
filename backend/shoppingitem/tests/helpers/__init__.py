"""Contains helper functions for tests."""

from django.contrib.auth.models import User
from django.http import HttpResponse
from django.test import TestCase, Client as DjangoClient
from django.utils import timezone

from authenticationapp.models import Client as UserClient

FONT = '<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">'


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


def does_match_base_criteria(test_case: TestCase, response: HttpResponse):
    """Test that the response matches all criteria."""
    # Status code is 200
    test_case.assertEqual(response.status_code, 200)

    # Contains font link
    test_case.assertContains(response, FONT)

    # Contains title
    test_case.assertContains(response, "<title>Shopping App</title>")

    # Contains base.css
    test_case.assertContains(
        response, '<link rel="stylesheet" href="/static/items/base.css">'
    )


__all__ = [
    "DjangoClient",
    "TestCase",
    "User",
    "create_test_user",
    "create_test_user_client",
    "timezone",
    "create_secondary_test_user",
]
