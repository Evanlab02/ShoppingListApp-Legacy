"""Contains tests for the item repository."""

import pytest

from shoppingitem.database import ItemRepository
from shoppingitem.models import ShoppingStore, ShoppingItem
from shoppinglist.models import ShoppingList, ShoppingItemQuantity
from ..helpers import (
    TestCase,
    create_test_user,
    create_secondary_test_user,
    create_test_user_client,
)


class TestItemRepo(TestCase):
    """Tests for the item repository."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Set up the tests."""
        self.repo = ItemRepository()
        self.user = create_test_user()
        self.secondary_user = create_secondary_test_user()
        self.user_client = create_test_user_client(self.user)
        self.store = ShoppingStore(
            name="Test Store",
            store_type=1,
            description="Test Description",
            user=self.user,
        )
        self.store.save()
        return super().setUp()

    def test_get_recent_items(self):
        """Test the get recent items method."""
        for iterable in range(0, 6):
            item = ShoppingItem(
                name=f"Test Item {iterable}",
                store=self.store,
                price=10,
                user=self.user,
            )
            item.save()

        recent_items = self.repo.get_recent_items()

        self.assertEqual(len(recent_items), 5)

        for iterable in range(0, 5):
            self.assertEqual(recent_items[iterable].name, f"Test Item {5 - iterable}")

    def test_get_all_items_for_user(self):
        """Test the get all items for user method."""
        for iterable in range(0, 6):
            item = ShoppingItem(
                name=f"Test Item {iterable}",
                store=self.store,
                price=10,
                user=self.user,
            )
            item.save()

        for iterable in range(6, 12):
            item = ShoppingItem(
                name=f"Test Item {iterable}",
                store=self.store,
                price=10,
                user=self.secondary_user,
            )
            item.save()

        items = self.repo.get_all_items_for_user(self.user)

        self.assertEqual(len(items), 6)

        for iterable in range(0, 6):
            self.assertEqual(items[iterable].name, f"Test Item {5 - iterable}")

    def test_get_all_items(self):
        """Test the get all items method."""
        for iterable in range(0, 6):
            item = ShoppingItem(
                name=f"Test Item {iterable}",
                store=self.store,
                price=10,
                user=self.user,
            )
            item.save()

        for iterable in range(6, 12):
            item = ShoppingItem(
                name=f"Test Item {iterable}",
                store=self.store,
                price=10,
                user=self.secondary_user,
            )
            item.save()

        items = self.repo.get_all_items()

        self.assertEqual(len(items), 12)

        for iterable in range(0, 12):
            self.assertEqual(items[iterable].name, f"Test Item {11 - iterable}")

    def test_get_item_by_id(self):
        """Test the get item by id method."""
        item = ShoppingItem(
            name="Test Item",
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        item_from_repo = self.repo.get_item_by_id(item.id)

        self.assertEqual(item_from_repo.name, "Test Item")
        self.assertEqual(item_from_repo.store, self.store)
        self.assertEqual(item_from_repo.price, 10)
        self.assertEqual(item_from_repo.user, self.user)

    def test_get_another_user_item_by_id(self):
        """Test the get item by id method for another user's item."""
        item = ShoppingItem(
            name="Test Item",
            store=self.store,
            price=10,
            user=self.secondary_user,
        )
        item.save()

        item_from_repo = self.repo.get_item_by_id(item.id)

        self.assertEqual(item_from_repo.name, "Test Item")
        self.assertEqual(item_from_repo.store, self.store)
        self.assertEqual(item_from_repo.price, 10)
        self.assertEqual(item_from_repo.user, self.secondary_user)

    def test_get_number_of_lists_linked_to_item_zero_results(self):
        """Test the get number of lists linked to item method with zero results."""
        shopping_list = ShoppingList(
            name="Test Shopping List",
            description="Test Description",
            start_date="2021-01-01",
            end_date="2021-01-02",
            user=self.user,
        )
        shopping_list.save()

        item = ShoppingItem(
            name="Test Item",
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        number_of_items = self.repo.get_number_of_lists_linked_to_item(item)
        self.assertEqual(number_of_items, 0)

    def test_get_number_of_lists_linked_to_item_one_result(self):
        """Test the get number of lists linked to item method with one result."""
        shopping_list = ShoppingList(
            name="Test Shopping List",
            description="Test Description",
            start_date="2021-01-01",
            end_date="2021-01-02",
            user=self.user,
        )
        shopping_list.save()

        item = ShoppingItem(
            name="Test Item",
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        ShoppingItemQuantity(
            quantity=1,
            shopping_item=item,
            shopping_list=shopping_list,
        ).save()

        number_of_items = self.repo.get_number_of_lists_linked_to_item(item)
        self.assertEqual(number_of_items, 1)

    def test_get_number_of_lists_linked_to_item_with_quantity(self):
        """Test the get number of lists linked to item method with quantity."""
        shopping_list = ShoppingList(
            name="Test Shopping List",
            description="Test Description",
            start_date="2021-01-01",
            end_date="2021-01-02",
            user=self.user,
        )
        shopping_list.save()

        item = ShoppingItem(
            name="Test Item",
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        ShoppingItemQuantity(
            quantity=2,
            shopping_item=item,
            shopping_list=shopping_list,
        ).save()

        number_of_items = self.repo.get_number_of_lists_linked_to_item(item)
        self.assertEqual(number_of_items, 1)

    def test_count_items_from_store_zero_results(self):
        """Test the count items from store method with zero results."""
        number_of_items = self.repo.count_items_from_store(self.store)
        self.assertEqual(number_of_items, 0)

    def test_count_items_from_store_single_result(self):
        """Test the count items from store method with one result."""
        item = ShoppingItem(
            name="Test Item",
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        number_of_items = self.repo.count_items_from_store(self.store)
        self.assertEqual(number_of_items, 1)

    def test_count_items_from_store_multiple_results(self):
        """Test the count items from store method with multiple results."""
        for iterable in range(0, 6):
            item = ShoppingItem(
                name=f"Test Item {iterable}",
                store=self.store,
                price=10,
                user=self.user,
            )
            item.save()

        for iterable in range(6, 12):
            item = ShoppingItem(
                name=f"Test Item {iterable}",
                store=self.store,
                price=10,
                user=self.secondary_user,
            )
            item.save()

        number_of_items = self.repo.count_items_from_store(self.store)
        self.assertEqual(number_of_items, 12)

    def test_get_items_from_store_zero_results(self):
        """Test the get items from store method with zero results."""
        items = self.repo.get_items_from_store(self.store)
        self.assertEqual(len(items), 0)

    def test_get_items_from_store_single_result(self):
        """Test the get items from store method with one result."""
        item = ShoppingItem(
            name="Test Item",
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        items = self.repo.get_items_from_store(self.store)
        self.assertEqual(len(items), 1)
        self.assertEqual(items[0].name, "Test Item")
        self.assertEqual(items[0].store, self.store)
        self.assertEqual(items[0].price, 10)
        self.assertEqual(items[0].user, self.user)

    def test_get_items_from_store_multiple_results(self):
        """Test the get items from store method with multiple results."""
        for iterable in range(0, 6):
            item = ShoppingItem(
                name=f"Test Item {iterable}",
                store=self.store,
                price=10,
                user=self.user,
            )
            item.save()

        for iterable in range(6, 12):
            item = ShoppingItem(
                name=f"Test Item {iterable}",
                store=self.store,
                price=10,
                user=self.secondary_user,
            )
            item.save()

        items = self.repo.get_items_from_store(self.store)
        self.assertEqual(len(items), 12)

        for iterable in range(0, 12):
            self.assertEqual(items[iterable].name, f"Test Item {11 - iterable}")
            self.assertEqual(items[iterable].store, self.store)
            self.assertEqual(items[iterable].price, 10)
            if iterable > 5:
                self.assertEqual(items[iterable].user, self.user)
            else:
                self.assertEqual(items[iterable].user, self.secondary_user)

    def test_does_item_exist_should_be_false_nothing_matches(self):
        """Test the does item exist method when nothing matches."""
        item = ShoppingItem(
            name="Test Item",
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        new_store = ShoppingStore(
            name="New Store",
            store_type=1,
            description="Test Description",
            user=self.user,
        )
        new_store.save()

        self.assertFalse(self.repo.does_item_exist("Test Item 2", new_store))

    def test_does_item_exist_should_be_false_name_matches_but_store_does_not(self):
        """Test the does item exist method when the name matches but the store does not."""
        item = ShoppingItem(
            name="Test Item",
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        new_store = ShoppingStore(
            name="New Store",
            store_type=1,
            description="Test Description",
            user=self.user,
        )
        new_store.save()

        self.assertFalse(self.repo.does_item_exist("Test Item", new_store))

    def test_does_item_exist_should_be_false_when_name_does_not_match_but_store_does(
        self,
    ):
        """Test the does item exist method when the name does not match but the store does."""
        item = ShoppingItem(
            name="Test Item",
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        self.assertFalse(self.repo.does_item_exist("Test Item 2", self.store))

    def test_does_item_exist_should_be_true_when_name_and_store_match(self):
        """Test the does item exist method when the name and store match."""
        item = ShoppingItem(
            name="Test Item",
            store=self.store,
            price=10,
            user=self.user,
        )
        item.save()

        self.assertTrue(self.repo.does_item_exist("Test Item", self.store))

    def test_create_item_should_create_item(self):
        """Test the create item method."""
        item = self.repo.create_item("Test Item", self.store, 10, self.user)
        self.assertEqual(item.name, "Test Item")
        self.assertEqual(item.store, self.store)
        self.assertEqual(item.price, 10)
        self.assertEqual(item.user, self.user)
