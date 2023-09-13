"""Contains unit tests for the ShoppingItem and ShoppingStore models."""

# Django imports
from django.contrib.auth.models import User
from django.test import TestCase

from shoppingitem.models import ShoppingItem, ShoppingStore


class TestShoppingItemModels(TestCase):
    """Test the ShoppingItem model."""

    def test_shopping_item_str(self):
        """Test the ShoppingItem model's __str__ method."""
        user = User.objects.create_user(
            username="test", email="test@test.com", password="test"
        )

        store = ShoppingStore.objects.create(name="Amazon", store_type=1, user=user)

        item = ShoppingItem.objects.create(
            name="Test Item", price=10.00, store=store, user=user
        )

        self.assertEqual(str(item), "Test Item@Amazon")


class TestShoppingStoreModels(TestCase):
    """Test the ShoppingStore model."""

    def test_shopping_store_str(self):
        """Test the ShoppingStore model's __str__ method."""
        user = User.objects.create_user(
            username="test", email="test@test.com", password="test"
        )

        store = ShoppingStore.objects.create(name="Amazon", store_type=1, user=user)

        self.assertEqual(str(store), "Amazon")
