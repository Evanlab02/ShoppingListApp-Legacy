"""Contains tests for the shoppinglist app."""
from datetime import date, timedelta

import pytest
from django.test import TestCase, Client

from .models import ShoppingList
from .schemas.schemas import ShoppingListSchema
from .validation.validation import validate_shoppinglist

LIST_NAME = "test shopping list"
LIST_DESCRIPTION = "test description"

CONTENT_TYPE = "application/json"


class TestShoppingList(TestCase):
    """Tests for the shoppinglist app."""

    def test_validate_shopping_list_end_date_before_start_date(self):
        """Test the validate_shoppinglist function."""
        shopping_list = ShoppingListSchema(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-01",
            end_date="2020-01-01",
        )

        with pytest.raises(ValueError):
            validate_shoppinglist(shopping_list)

    def test_validate_shopping_list_case_1(self):
        """Test the validate_shoppinglist function."""
        ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-05",
            end_date="2021-01-08",
        )

        shopping_list = ShoppingListSchema(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-04",
            end_date="2021-01-06",
        )

        with pytest.raises(ValueError):
            validate_shoppinglist(shopping_list)

    def test_validate_shopping_list_case_2(self):
        """Test the validate_shoppinglist function."""
        ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-02-05",
            end_date="2021-02-08",
        )

        shopping_list = ShoppingListSchema(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-02-07",
            end_date="2021-02-10",
        )

        with pytest.raises(ValueError):
            validate_shoppinglist(shopping_list)

    def test_validate_shopping_list_case_3(self):
        """Test the validate_shoppinglist function."""
        ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-03-04",
            end_date="2021-03-09",
        )

        shopping_list = ShoppingListSchema(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-03-05",
            end_date="2021-03-08",
        )

        with pytest.raises(ValueError):
            validate_shoppinglist(shopping_list)

    def test_create_invalid_shopping_list(self):
        """Create an invalid shopping list."""
        client = Client()
        client.post(
            "/api/auth/register",
            {
                "username": "test-shopping-list-user",
                "email": "user@shoppinglist.com",
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type=CONTENT_TYPE,
        )

        client.post(
            "/api/auth/login",
            {"username": "test-shopping-list-user", "password": "testpassword"},
            content_type=CONTENT_TYPE,
        )

        response = client.post(
            "/api/list/create",
            {
                "name": LIST_NAME,
                "description": LIST_DESCRIPTION,
                "start_date": "2021-01-02",
                "end_date": "2020-01-01",
            },
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(
            response.json(),
            {"detail": "The shopping list's start date must be before its end date."},
        )
        self.assertEqual(response.status_code, 400)

    def test_create_shopping_list(self):
        """Create a shopping list."""
        client = Client()
        client.post(
            "/api/auth/register",
            {
                "username": "test-shopping-list-user",
                "email": "user@shoppinglist.com",
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type=CONTENT_TYPE,
        )

        client.post(
            "/api/auth/login",
            {"username": "test-shopping-list-user", "password": "testpassword"},
            content_type=CONTENT_TYPE,
        )

        response = client.post(
            "/api/list/create",
            {
                "name": LIST_NAME,
                "description": LIST_DESCRIPTION,
                "start_date": "2021-06-01",
                "end_date": "2021-06-30",
            },
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(
            response.json(), {"message": "Shopping list created successfully"}
        )
        self.assertEqual(response.status_code, 201)

    def test_shopping_list_to_string(self):
        """Test the __str__ method of the ShoppingList model."""
        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-06-01",
            end_date="2021-06-30",
        )

        self.assertEqual(str(shopping_list), LIST_NAME)

    def test_shopping_list_is_current(self):
        """Test the is_current method of the ShoppingList model."""
        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date=date.today() - timedelta(days=1),
            end_date=date.today() + timedelta(days=1),
        )

        self.assertTrue(shopping_list.is_current())

    def test_shopping_list_is_not_current(self):
        """Test the is_current method of the ShoppingList model."""
        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date=date.today() - timedelta(days=5),
            end_date=date.today() - timedelta(days=3),
        )

        self.assertFalse(shopping_list.is_current())
