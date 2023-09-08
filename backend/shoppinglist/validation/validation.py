"""Contains validation functions for shoppinglist app."""

from ..models import ShoppingList


def validate_shoppinglist(shoppinglist: ShoppingList):
    """
    Validate the shoppinglist object.

    Args:
        shoppinglist (ShoppingList): The shopping list object.

    Raises:
        ValueError: If the shopping list's is invalid.
    """
    if shoppinglist.start_date > shoppinglist.end_date:
        raise ValueError("The shopping list's start date must be before its end date.")

    lists = ShoppingList.objects.all()
    for shopping_list in lists:
        if shoppinglist.start_date <= shopping_list.start_date <= shoppinglist.end_date:
            raise ValueError("A shopping list already exists for this date range.")
        if shoppinglist.start_date <= shopping_list.end_date <= shoppinglist.end_date:
            raise ValueError("A shopping list already exists for this date range.")
        if (
            shopping_list.start_date
            <= shoppinglist.start_date
            <= shopping_list.end_date
        ):
            raise ValueError("A shopping list already exists for this date range.")
