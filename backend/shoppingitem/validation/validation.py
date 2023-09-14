"""Contains validation functions for shoppingitem app."""

from ..models import ShoppingStore, ShoppingItem


def validate_store(store: ShoppingStore):
    """Validate a store.

    Args:
        store (ShoppingStore): The store to validate.

    Raises:
        ValueError: If the store is invalid.
    """
    if store.name == "":
        raise ValueError("Store name cannot be empty")
    elif store.store_type < 1 or store.store_type > 3:
        raise ValueError("Invalid store type")
    elif ShoppingStore.objects.filter(name=store.name).exists():
        raise ValueError("Store already exists")


def validate_item(item: ShoppingItem, is_update: bool = False) -> ShoppingStore:
    """Validate an item.

    Args:
        item (ShoppingItem): The item to validate.
        is_update (bool, optional): Whether the item is being updated. Defaults to False.

    Raises:
        ValueError: If the item is invalid.
    """
    if item.name == "":
        raise ValueError("Item name cannot be empty")
    elif (
        ShoppingItem.objects.filter(name=item.name, store=item.store).exists()
        and not is_update
    ):
        raise ValueError("Item already exists in this store")
    elif item.price <= 0:
        raise ValueError("Item price must be greater than 0")
    elif not ShoppingStore.objects.filter(id=item.store).exists():
        raise ValueError("Store does not exist")

    return ShoppingStore.objects.get(id=item.store)
