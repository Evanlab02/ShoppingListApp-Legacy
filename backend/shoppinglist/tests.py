"""Contains tests for the shoppinglist app."""

import pytest
from django.contrib.auth.models import User
from django.test import TestCase

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
        user = User.objects.create_user(
            username="testuser", email="test@user.com", password="testpassword"
        )

        ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-05",
            end_date="2021-01-08",
            user=user,
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
        user = User.objects.create_user(
            username="testuser", email="test@user.com", password="testpassword"
        )

        ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-02-05",
            end_date="2021-02-08",
            user=user,
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
        user = User.objects.create_user(
            username="testuser", email="test@user.com", password="testpassword"
        )

        ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-03-04",
            end_date="2021-03-09",
            user=user,
        )

        shopping_list = ShoppingListSchema(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-03-05",
            end_date="2021-03-08",
        )

        with pytest.raises(ValueError):
            validate_shoppinglist(shopping_list)
