"""Contains tests for the ShoppingStore model."""

import pytest

from shoppingitem.models import ShoppingStore
from ..helpers import TestCase, create_test_user, create_test_user_client


class TestStoreModel(TestCase):
    """Test the ShoppingStore model."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Set up the tests."""
        self.user = create_test_user()
        self.user_client = create_test_user_client(self.user)
        return super().setUp()

    def test_store_model(self):
        """Test the store model."""
        store = ShoppingStore(
            name="Test Store",
            store_type=1,
            description="Test Description",
            user=self.user,
        )
        store.save()

        self.assertEqual(store.name, "Test Store")
        self.assertEqual(store.store_type, 1)
        self.assertEqual(store.description, "Test Description")
        self.assertEqual(store.user, self.user)

    def test_store_model_str(self):
        """Test the store model string representation."""
        store = ShoppingStore(
            name="Test Store",
            store_type=1,
            description="Test Description",
            user=self.user,
        )
        store.save()

        self.assertEqual(str(store), "Test Store")
