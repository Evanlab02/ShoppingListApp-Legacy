"""Test the ShoppingItem and ShoppingStore validators."""

# Django imports
from django.contrib.auth.models import User
from django.test import TestCase

import pytest

from shoppingitem.models import ShoppingItem, ShoppingStore
from shoppingitem.schemas.schemas import ItemSchema
from shoppingitem.validation.validation import validate_item, validate_store


TEST_ITEM_NAME = "Test Item"
TEST_EMAIL = "test@test.com"

class TestStoreValidators(TestCase):
    """Test the ShoppingStore validators."""

    def test_validate_store_case_1(self):
        """Test the validate_store function with empty name."""
        user = User.objects.create_user(
            username="test", email=TEST_EMAIL, password="test"
        )

        store = ShoppingStore(name="", store_type=1, user=user)

        with pytest.raises(ValueError):
            validate_store(store)

    def test_validate_store_case_2(self):
        """Test the validate_store function with invalid store type."""
        user = User.objects.create_user(
            username="test", email=TEST_EMAIL, password="test"
        )

        store = ShoppingStore(name="Amazon", store_type=4, user=user)

        with pytest.raises(ValueError):
            validate_store(store)

    def test_validate_store_case_3(self):
        """Test the validate_store function with invalid store type."""
        user = User.objects.create_user(
            username="test", email=TEST_EMAIL, password="test"
        )

        store = ShoppingStore.objects.create(name="Amazon", store_type=0, user=user)

        with pytest.raises(ValueError):
            validate_store(store)

    def test_validate_store_case_4(self):
        """Test the validate_store function with existing store name."""
        user = User.objects.create_user(
            username="test", email=TEST_EMAIL, password="test"
        )

        store = ShoppingStore.objects.create(name="Amazon", store_type=1, user=user)

        store.save()

        duplicate_store = ShoppingStore(name="Amazon", store_type=1, user=user)

        with pytest.raises(ValueError):
            validate_store(duplicate_store)


class TestItemValidators(TestCase):
    """Test the ShoppingItem validators."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Initialize the TestItemValidators class."""
        self.test_user = User.objects.create_user(
            username="test", email=TEST_EMAIL, password="test"
        )

        self.test_store = ShoppingStore.objects.create(
            name="Amazon", store_type=1, user=self.test_user
        )

    def test_validate_item_case_1(self):
        """Test the validate_item function with empty name."""

        item = ShoppingItem(
            name="", price=10.00, store=self.test_store, user=self.test_user
        )

        with pytest.raises(ValueError):
            validate_item(item)

    def test_validate_item_case_2(self):
        """Test the validate_item function with existing item name for store."""

        item = ShoppingItem.objects.create(
            name=TEST_ITEM_NAME, price=10.00, store=self.test_store, user=self.test_user
        )

        item.save()

        duplicate_item = ShoppingItem(
            name=TEST_ITEM_NAME, price=10.00, store=self.test_store, user=self.test_user
        )

        with pytest.raises(ValueError):
            validate_item(duplicate_item)

    def test_validate_item_case_3(self):
        """Test the validate_item function with invalid price."""

        item = ShoppingItem(
            name=TEST_ITEM_NAME, price=-10.00, store=self.test_store, user=self.test_user
        )

        with pytest.raises(ValueError):
            validate_item(item)

    def test_validate_item_case_4(self):
        """Test the validate_item function with invalid store."""

        item = ItemSchema(
            name=TEST_ITEM_NAME, price=10.00, store_id=100, user=self.test_user
        )

        with pytest.raises(ValueError):
            validate_item(item)

    def test_validate_item_case_5(self):
        """Test the validate_item function with valid item."""

        item = ItemSchema(
            name=TEST_ITEM_NAME,
            price=10.00,
            store_id=self.test_store.id,
            user=self.test_user,
        )

        store = validate_item(item)

        self.assertEqual(store.name, self.test_store.name)
