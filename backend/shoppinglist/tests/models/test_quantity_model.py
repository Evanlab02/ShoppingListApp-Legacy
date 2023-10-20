"""Contains unit tests for the shopping item quantity model."""

import pytest

# Django imports
from django.contrib.auth.models import User
from django.test import TestCase

from shoppingitem.models import ShoppingItem, ShoppingStore
from shoppinglist.models import ShoppingItemQuantity, ShoppingList

LIST_NAME = "Test List"
LIST_DESCRIPTION = "Test Description"


class TestShoppingItemQuantityModel(TestCase):
    """Test the ShoppingItemQuantity model"""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Set up the test case"""
        self.user = User.objects.create_user(
            username="testuser",
            email="test@test.com",
            password="testpassword",
        )
        self.user.save()

        self.store = ShoppingStore.objects.create(
            name="Test Store",
            description="Test Description",
            store_type=1,
            user=self.user,
        )
        self.store.save()

        self.item = ShoppingItem.objects.create(
            name="Test Item", price=1.00, store=self.store, user=self.user
        )
        self.item.save()

        self.shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            user=self.user,
            start_date="2021-01-01",
            end_date="2022-01-01",
        )
        self.shopping_list.save()

        return super().setUp()

    def test_shopping_item_quantity_to_string(self):
        """Test that the __str__ method returns the correct string"""
        shopping_quantity = ShoppingItemQuantity.objects.create(
            quantity=1,
            shopping_item=self.item,
            shopping_list=self.shopping_list,
        )
        self.assertEqual(str(shopping_quantity), "1 Test Item @ Test List")
