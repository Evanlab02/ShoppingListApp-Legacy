"""Contains utility functions for the shopping list app."""

from django.contrib.auth.models import User

from shoppingitem.models import ShoppingItem
from ..models import ShoppingList, ShoppingItemQuantity, ShoppingBudget


def get_price_info_of_list(shopping_list: ShoppingList):
    """
    Return the total items, total price, and average item price of a shopping list.

    Args:
        shopping_list (ShoppingList): The shopping list.

    Returns:
        tuple: The total items, total price, and average item price of a shopping list.
    """
    list_items = ShoppingItemQuantity.objects.filter(shopping_list=shopping_list.id)

    total_items = sum([item.quantity for item in list_items])
    total_price = sum([item.shopping_item.price * item.quantity for item in list_items])
    average_item_price = 0

    if total_items != 0:
        average_item_price = total_price / total_items
        average_item_price = round(average_item_price, 2)

    return total_items, total_price, average_item_price


def get_budget_remaining_of_shopping_list(user: User, shopping_list: ShoppingList):
    """
    Return the budget remaining of a shopping list.

    Args:
        user (User): The user.
        shopping_list (ShoppingList): The shopping list.

    Returns:
        float: The budget remaining of a shopping list.
    """
    list_items = ShoppingItemQuantity.objects.filter(shopping_list=shopping_list.id)
    budget: ShoppingBudget = ShoppingBudget.objects.get(
        user=user, shopping_list=shopping_list.id
    )

    total_price = sum([item.shopping_item.price * item.quantity for item in list_items])
    budget_remaining = 0

    if budget is not None:
        budget_remaining = budget.amount - total_price

    if budget_remaining < 0:
        budget_remaining = 0

    return budget_remaining


def get_number_of_shopping_lists_linked_to_item(item: ShoppingItem):
    """
    Return the number of shopping lists that an item is linked to.

    Args:
        item (ShoppingItem): The shopping item.

    Returns:
        int: The number of shopping lists that an item is linked to.
    """
    number_of_lists = ShoppingList.objects.filter(
        shoppingitemquantity__shopping_item=item
    ).count()
    return number_of_lists
