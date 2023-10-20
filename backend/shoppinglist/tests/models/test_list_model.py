"""Contains unit tests for the ShoppingItem and ShoppingStore models."""

from datetime import date, timedelta

# Django imports
from django.contrib.auth.models import User
from django.test import TestCase

from shoppinglist.models import ShoppingList

LIST_NAME = "Test List"
LIST_DESCRIPTION = "Test Description"


class TestShoppingListModel(TestCase):
    """Test the ShoppingList model"""

    def test_list_to_string(self):
        """Test that the __str__ method returns the correct string"""
        user = User.objects.create(username="testuser")
        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2020-01-01",
            end_date="2020-01-02",
            user=user,
        )
        self.assertEqual(str(shopping_list), LIST_NAME)

    def test_is_current(self):
        """Test that the is_current method returns the correct boolean"""
        user = User.objects.create(username="testuser")
        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date=date.today() - timedelta(days=1),
            end_date=date.today() + timedelta(days=1),
            user=user,
        )
        self.assertTrue(shopping_list.is_current())

    def test_is_not_current(self):
        """Test that the is_current method returns the correct boolean"""
        user = User.objects.create(username="testuser")
        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date=date.today() - timedelta(days=2),
            end_date=date.today() - timedelta(days=1),
            user=user,
        )
        self.assertFalse(shopping_list.is_current())
