"""Contains tests for the ShoppingItem app."""

import pytest

from shoppingitem.models import ShoppingItem, ShoppingStore
from ..helpers import TestCase, create_test_user, create_test_user_client

TEST_ITEM = "Test Item"


class TestItemModel(TestCase):
    """Test the ShoppingItem model."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Set up the tests."""
        self.user = create_test_user()
        self.user_client = create_test_user_client(self.user)
        self.store = ShoppingStore(
            name="Test Store",
            store_type=1,
            description="Test Description",
            user=self.user,
        )
        self.store.save()
        return super().setUp()

    def test_item_model(self):
        """Test the item model."""
        item = ShoppingItem(
            name=TEST_ITEM,
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        self.assertEqual(item.name, TEST_ITEM)
        self.assertEqual(item.store, self.store)
        self.assertEqual(item.price, 10)
        self.assertEqual(item.user, self.user)

    def test_item_model_str(self):
        """Test the item model string representation."""
        item = ShoppingItem(
            name=TEST_ITEM,
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        self.assertEqual(str(item), "Test Item@Test Store")
