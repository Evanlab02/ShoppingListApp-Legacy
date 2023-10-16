"""Contains tests for the ShoppingStore model."""

import pytest

from shoppingitem.models import ShoppingStore
from ..helpers import TestCase, create_test_user, create_test_user_client

TEST_STORE = "Test Store"
TEST_DESCRIPTION = "Test Description"

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
            name=TEST_STORE,
            store_type=1,
            description=TEST_DESCRIPTION,
            user=self.user,
        )
        store.save()

        self.assertEqual(store.name, TEST_STORE)
        self.assertEqual(store.store_type, 1)
        self.assertEqual(store.description, TEST_DESCRIPTION)
        self.assertEqual(store.user, self.user)

    def test_store_model_str(self):
        """Test the store model string representation."""
        store = ShoppingStore(
            name=TEST_STORE,
            store_type=1,
            description=TEST_DESCRIPTION,
            user=self.user,
        )
        store.save()

        self.assertEqual(str(store), TEST_STORE)
