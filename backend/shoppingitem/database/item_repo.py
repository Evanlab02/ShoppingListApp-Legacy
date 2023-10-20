"""Contains the item repository for the shoppingitem app."""

from shoppinglist.database import ShoppingListRepository

from ..models import ShoppingItem, ShoppingStore
from ..types import User


class ItemRepository:
    """The item repository class."""

    def __init__(self) -> None:
        """Initialise the item repository."""
        self.list_repo = ShoppingListRepository()

    def get_recent_items(self) -> list[ShoppingItem]:
        """
        Get the 5 most recently updated shopping items.

        Returns:
            list[ShoppingItem]: The 5 most recently updated shopping items.
        """
        items = ShoppingItem.objects.all().order_by("-updated_at")
        recent_items = [items[i] for i in range(0, 5) if i < len(items)]
        return recent_items

    def get_all_items_for_user(self, user: User) -> list[ShoppingItem]:
        """
        Get all shopping items for a user.

        Args:
            user (User): The user to get the shopping items for.

        Returns:
            list[ShoppingItem]: The shopping items for the user.
        """
        return ShoppingItem.objects.filter(user=user).order_by("-updated_at")

    def get_all_items(self) -> list[ShoppingItem]:
        """
        Get all shopping items.

        Returns:
            list[ShoppingItem]: All shopping items.
        """
        return ShoppingItem.objects.all().order_by("-updated_at")

    def get_item_by_id(self, item_id: int) -> ShoppingItem:
        """
        Get a shopping item by id.

        Args:
            item_id (int): The id of the shopping item to get.

        Returns:
            ShoppingItem: The shopping item with the id.
        """
        return ShoppingItem.objects.get(id=item_id)

    def get_number_of_lists_linked_to_item(self, item: ShoppingItem) -> int:
        """
        Get the number of shopping lists linked to an item.

        Args:
            item (ShoppingItem): The item to get the number of shopping lists for.

        Returns:
            int: The number of shopping lists linked to the item.
        """
        return self.list_repo.get_number_of_shopping_lists_linked_to_item(item)

    def count_items_from_store(self, store: ShoppingStore) -> int:
        """
        Count the number of items from a store.

        Args:
            store_id (ShoppingStore): The store to count the items from.

        Returns:
            int: The number of items from the store.
        """
        return ShoppingItem.objects.filter(store=store).count()

    def get_items_from_store(self, store: ShoppingStore):
        """
        Get all items from a store.

        Args:
            store (ShoppingStore): The store to get the items from.

        Returns:
            list[ShoppingItem]: The items from the store.
        """
        return ShoppingItem.objects.filter(store=store).order_by("-updated_at")

    def does_item_exist(self, name: str, store: ShoppingStore) -> bool:
        """
        Check if a shopping item exists.

        Args:
            name (str): The name of the item to check.
            store (ShoppingStore): The store to check.

        Returns:
            bool: Whether the item exists.
        """
        return ShoppingItem.objects.filter(name=name, store=store).exists()

    def create_item(
        self, name: str, store: ShoppingStore, price: float, user: User
    ) -> ShoppingItem:
        """
        Create a shopping item.

        Args:
            name (str): The name of the item to create.
            store (ShoppingStore): The store to create the item for.
            price (float): The price of the item to create.
            user (User): The user to create the item for.
        """
        item = ShoppingItem.objects.create(
            name=name,
            store=store,
            price=price,
            user=user,
        )
        item.save()
        return item
