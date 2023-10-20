"""Contains the store repository for the shoppingitem app."""

from ..models import ShoppingStore
from ..types import User


class StoreRepository:
    """The store repository class."""

    def get_all_stores_for_user(self, user: User):
        """
        Get all stores for a user.

        Args:
            user (User): The user to get the stores for.

        Returns:
            list[ShoppingStore]: The stores for the user.
        """
        return ShoppingStore.objects.filter(user=user).order_by("-updated_at")

    def get_all_stores(self):
        """
        Get all stores.

        Returns:
            list[ShoppingStore]: All stores.
        """
        return ShoppingStore.objects.all().order_by("-updated_at")

    def count_stores_by_type(self, store_type: int):
        """
        Count the number of stores by type.

        Args:
            store_type (int): The type of store to count.

        Returns:
            int: The number of stores by type.
        """
        return ShoppingStore.objects.filter(store_type=store_type).count()

    def count_stores_by_type_for_user(self, store_type: int, user: User):
        """
        Count the number of stores by type for a user.

        Args:
            store_type (int): The type of store to count.
            user (User): The user to count the stores for.

        Returns:
            int: The number of stores by type for a user.
        """
        return ShoppingStore.objects.filter(store_type=store_type, user=user).count()

    def get_store_by_id(self, store_id: int):
        """
        Get a store by id.

        Args:
            store_id (int): The id of the store to get.

        Returns:
            ShoppingStore: The store with the id.
        """
        return ShoppingStore.objects.get(id=store_id)

    def get_store_by_name(self, name: str):
        """
        Get a store by name.

        Args:
            name (str): The name of the store to get.

        Returns:
            ShoppingStore: The store with the name.
        """
        return ShoppingStore.objects.get(name=name)

    def does_store_exist(self, name: str):
        """
        Check if a store exists.

        Args:
            name (str): The name of the store to check.

        Returns:
            bool: True if the store exists, False otherwise.
        """
        return ShoppingStore.objects.filter(name=name).exists()

    def create_store(self, name: str, store_type: int, description: str, user: User):
        """
        Create a store.

        Args:
            name (str): The name of the store to create.
            store_type (int): The type of store to create.
            description (str): The description of the store to create.
            user (User): The user to create the store for.

        Returns:
            ShoppingStore: The created store.
        """
        if self.does_store_exist(name):
            raise ValueError(f"Store with name '{name}' already exists.")
        elif not isinstance(store_type, int):
            raise TypeError(f"Store type '{store_type}' is not an integer.")
        elif store_type not in [1, 2, 3]:
            raise ValueError(f"Store type '{store_type}' is invalid.")

        store = ShoppingStore(
            name=name, store_type=store_type, description=description, user=user
        )
        store.save()
        return store
