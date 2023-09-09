"""Contains validation functions for shoppinglist app."""

from django.contrib.auth.models import User

from ..models import ShoppingList


def validate_shoppinglist(shoppinglist: ShoppingList, user: User):
    """
    Validate the shoppinglist object.

    Args:
        shoppinglist (ShoppingList): The shopping list object.

    Raises:
        ValueError: If the shopping list's is invalid.
    """
    if shoppinglist.start_date > shoppinglist.end_date:
        raise ValueError("The shopping list's start date must be before its end date.")

    valid_shopping_list = True

    lists = ShoppingList.objects.filter(user=user)
    for shopping_list in lists:
        flag_one = (
            shoppinglist.start_date <= shopping_list.start_date <= shoppinglist.end_date
        )
        flag_two = (
            shoppinglist.start_date <= shopping_list.end_date <= shoppinglist.end_date
        )
        flag_three = (
            shopping_list.start_date
            <= shoppinglist.start_date
            <= shopping_list.end_date
        )

        if flag_one or flag_two or flag_three:
            valid_shopping_list = False
            break

    if not valid_shopping_list:
        raise ValueError("A shopping list already exists for this date range.")
