"""Contains tests for the store repository."""

import pytest

from shoppingitem.database import StoreRepository
from shoppingitem.models import ShoppingStore
from ..helpers import (
    TestCase,
    create_test_user,
    create_secondary_test_user,
    create_test_user_client,
)


class TestStoreRepo(TestCase):
    """Tests for the store repository."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Set up the tests."""
        self.repo = StoreRepository()
        self.user = create_test_user()
        self.secondary_user = create_secondary_test_user()
        self.user_client = create_test_user_client(self.user)
        return super().setUp()

    def test_get_stores_for_user(self):
        """Test getting stores for a user."""
        user_store = ShoppingStore.objects.create(
            name="Test Store",
            user=self.user,
            description="Test Description",
            store_type=1,
        )
        user_store.save()

        secondary_user_store = ShoppingStore.objects.create(
            name="Test Store 2",
            user=self.secondary_user,
            description="Test Description 2",
            store_type=1,
        )
        secondary_user_store.save()

        stores = self.repo.get_all_stores_for_user(self.user)
        self.assertEqual(len(stores), 1)
        self.assertEqual(stores[0].name, "Test Store")
        self.assertEqual(stores[0].user, self.user)
        self.assertEqual(stores[0].description, "Test Description")
        self.assertEqual(stores[0].store_type, 1)

    def test_get_all_stores(self):
        """Test getting all stores."""
        user_store = ShoppingStore.objects.create(
            name="Test Store",
            user=self.user,
            description="Test Description",
            store_type=1,
        )
        user_store.save()

        secondary_user_store = ShoppingStore.objects.create(
            name="Test Store 2",
            user=self.secondary_user,
            description="Test Description 2",
            store_type=2,
        )
        secondary_user_store.save()

        stores = self.repo.get_all_stores()
        self.assertEqual(len(stores), 2)
        self.assertEqual(stores[0].name, "Test Store 2")
        self.assertEqual(stores[0].user, self.secondary_user)
        self.assertEqual(stores[0].description, "Test Description 2")
        self.assertEqual(stores[0].store_type, 2)
        self.assertEqual(stores[1].name, "Test Store")
        self.assertEqual(stores[1].user, self.user)
        self.assertEqual(stores[1].description, "Test Description")
        self.assertEqual(stores[1].store_type, 1)

    def test_count_stores_by_type(self):
        """Test counting stores by type."""
        user_store = ShoppingStore.objects.create(
            name="Test Store",
            user=self.user,
            description="Test Description",
            store_type=1,
        )
        user_store.save()

        for i in range(2, 4):
            secondary_user_store = ShoppingStore.objects.create(
                name=f"Test Store {i}",
                user=self.secondary_user,
                description=f"Test Description {i}",
                store_type=2,
            )
            secondary_user_store.save()

        for i in range(4, 7):
            secondary_user_store = ShoppingStore.objects.create(
                name=f"Test Store {i}",
                user=self.secondary_user,
                description=f"Test Description {i}",
                store_type=3,
            )
            secondary_user_store.save()

        count = self.repo.count_stores_by_type(1)
        self.assertEqual(count, 1)

        count = self.repo.count_stores_by_type(2)
        self.assertEqual(count, 2)

        count = self.repo.count_stores_by_type(3)
        self.assertEqual(count, 3)

    def test_count_stores_by_type_for_user(self):
        """Test counting stores by type for a user."""
        user_store = ShoppingStore.objects.create(
            name="Test Store",
            user=self.user,
            description="Test Description",
            store_type=1,
        )
        user_store.save()

        for i in range(2, 4):
            secondary_user_store = ShoppingStore.objects.create(
                name=f"Test Store {i}",
                user=self.secondary_user,
                description=f"Test Description {i}",
                store_type=2,
            )
            secondary_user_store.save()

        for i in range(4, 7):
            secondary_user_store = ShoppingStore.objects.create(
                name=f"Test Store {i}",
                user=self.secondary_user,
                description=f"Test Description {i}",
                store_type=3,
            )
            secondary_user_store.save()

        count = self.repo.count_stores_by_type_for_user(1, self.user)
        self.assertEqual(count, 1)

        count = self.repo.count_stores_by_type_for_user(2, self.user)
        self.assertEqual(count, 0)

        count = self.repo.count_stores_by_type_for_user(3, self.user)
        self.assertEqual(count, 0)

        count = self.repo.count_stores_by_type_for_user(1, self.secondary_user)
        self.assertEqual(count, 0)

        count = self.repo.count_stores_by_type_for_user(2, self.secondary_user)
        self.assertEqual(count, 2)

        count = self.repo.count_stores_by_type_for_user(3, self.secondary_user)
        self.assertEqual(count, 3)

    def test_get_store_by_id(self):
        """Test getting a store by id."""
        user_store = ShoppingStore.objects.create(
            name="Test Store",
            user=self.user,
            description="Test Description",
            store_type=1,
        )
        user_store.save()

        secondary_user_store = ShoppingStore.objects.create(
            name="Test Store 2",
            user=self.secondary_user,
            description="Test Description 2",
            store_type=2,
        )
        secondary_user_store.save()

        store = self.repo.get_store_by_id(user_store.id)
        self.assertEqual(store.name, "Test Store")
        self.assertEqual(store.user, self.user)
        self.assertEqual(store.description, "Test Description")
        self.assertEqual(store.store_type, 1)

        store = self.repo.get_store_by_id(secondary_user_store.id)
        self.assertEqual(store.name, "Test Store 2")
        self.assertEqual(store.user, self.secondary_user)
        self.assertEqual(store.description, "Test Description 2")
        self.assertEqual(store.store_type, 2)

    def test_get_store_by_name(self):
        """Test getting a store by name."""
        user_store = ShoppingStore.objects.create(
            name="Test Store",
            user=self.user,
            description="Test Description",
            store_type=1,
        )
        user_store.save()

        secondary_user_store = ShoppingStore.objects.create(
            name="Test Store 2",
            user=self.secondary_user,
            description="Test Description 2",
            store_type=2,
        )
        secondary_user_store.save()

        store = self.repo.get_store_by_name("Test Store")
        self.assertEqual(store.name, "Test Store")
        self.assertEqual(store.user, self.user)
        self.assertEqual(store.description, "Test Description")
        self.assertEqual(store.store_type, 1)

        store = self.repo.get_store_by_name("Test Store 2")
        self.assertEqual(store.name, "Test Store 2")
        self.assertEqual(store.user, self.secondary_user)
        self.assertEqual(store.description, "Test Description 2")
        self.assertEqual(store.store_type, 2)
