"""Contains utility functions for the shoppingitem app."""

from ..models import ShoppingItem


def get_recent_items():
    """
    Get the 5 most recent shopping items.

    Returns:
        list[ShoppingItem]: The 5 most recent shopping items.
    """
    items = ShoppingItem.objects.all().order_by("-created_at")
    recent_items = [items[i] for i in range(0, 5) if i < len(items)]
    return recent_items
