"""Contains tests for cross-app schemas."""

import pytest

from shoppingitem.models import ShoppingItem, ShoppingStore
from shoppingitem.schemas import ShoppingItemModelSchema

from ..helpers import TestCase, create_test_user, create_test_user_client


class TestSharedSchemas(TestCase):
    """Test the shared schemas."""

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

    def test_shopping_item_model_schema(self):
        """Test that shopping item models convert to schemas correctly."""
        item = ShoppingItem(
            name="Test Item",
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        schema = ShoppingItemModelSchema.from_orm(item)

        self.assertEqual(schema.name, "Test Item")
        self.assertEqual(schema.price, 10)
