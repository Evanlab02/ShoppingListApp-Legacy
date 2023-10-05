"""Contains utility functions for the shopping list app."""

from django.contrib.auth.models import User

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
