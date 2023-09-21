"""Contains tests for the shoppinglist app."""

from datetime import date, timedelta

import pytest
from django.contrib.auth.models import User
from django.test import TestCase

from ..models import ShoppingList
from ..schemas.schemas import ShoppingListSchema
from ..validation.validation import validate_shoppinglist

LIST_NAME = "test shopping list"
LIST_DESCRIPTION = "test description"
TEST_EMAIL = "test@test.com"


class TestShoppingList(TestCase):
    """Tests for the shoppinglist app."""

    def test_validate_shopping_list_end_date_before_start_date(self):
        """Test the validate_shoppinglist function."""
        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        shopping_list = ShoppingListSchema(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-01",
            end_date="2020-01-01",
        )

        with pytest.raises(ValueError):
            validate_shoppinglist(shopping_list, user)

    def test_validate_shopping_list_case_1(self):
        """Test the validate_shoppinglist function."""
        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
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
            validate_shoppinglist(shopping_list, user)

    def test_validate_shopping_list_case_2(self):
        """Test the validate_shoppinglist function."""
        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
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
            validate_shoppinglist(shopping_list, user)

    def test_validate_shopping_list_case_3(self):
        """Test the validate_shoppinglist function."""
        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
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
            validate_shoppinglist(shopping_list, user)

    def test_shopping_list_to_string(self):
        """Test the __str__ method of the ShoppingList model."""
        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date=date.today() - timedelta(days=1),
            end_date=date.today() + timedelta(days=1),
            user=user,
        )

        assert str(shopping_list) == LIST_NAME

    def test_shopping_list_is_current(self):
        """Test the is_current method of the ShoppingList model."""
        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date=date.today() - timedelta(days=1),
            end_date=date.today() + timedelta(days=1),
            user=user,
        )

        assert shopping_list.is_current() is True

    def test_shopping_list_is_not_current(self):
        """Test the is_current method of the ShoppingList model."""
        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date=date.today() - timedelta(days=2),
            end_date=date.today() - timedelta(days=1),
            user=user,
        )

        assert shopping_list.is_current() is False
