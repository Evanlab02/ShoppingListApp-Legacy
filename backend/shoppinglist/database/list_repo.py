"""Contains the shopping list repository."""

from shoppingitem.models import ShoppingItem

from ..models import ShoppingList, ShoppingItemQuantity
from ..helpers import timezone
from ..types import User


class ShoppingListRepository:
    """The shopping list repository."""

    def get_current(self, user: User) -> ShoppingList:
        """
        Return the current shopping list.

        Args:
            user (User): The user.

        Returns:
            ShoppingList: The current shopping list.
        """
        return (
            ShoppingList.objects.filter(user=user)
            .filter(start_date__lte=timezone.now().date())
            .filter(end_date__gte=timezone.now().date())
            .first()
        )

    def get_number_of_items_on_shopping_list(self, list_id: int) -> int:
        """
        Return the number of items in the shopping list.

        Args:
            list_id (int): The shopping list ID.

        Returns:
            int: The number of items in the shopping list.
        """
        list_items = ShoppingItemQuantity.objects.filter(shopping_list=list_id)
        return sum([item.quantity for item in list_items])

    def get_total_price_of_items_on_shopping_list(self, list_id: int) -> float:
        """
        Return the total price of items in the shopping list.

        Args:
            list_id (int): The shopping list ID.

        Returns:
            float: The total price of items in the shopping list.
        """
        list_items = ShoppingItemQuantity.objects.filter(shopping_list=list_id)
        return sum([item.shopping_item.price * item.quantity for item in list_items])

    def get_average_price_of_items_on_shopping_list(self, list_id: int) -> float:
        """
        Return the average price of items in the shopping list.

        Args:
            list_id (int): The shopping list ID.

        Returns:
            float: The average price of items in the shopping list.
        """
        total_items = self.get_number_of_items_on_shopping_list(list_id)
        total_price = self.get_total_price_of_items_on_shopping_list(list_id)
        average_item_price = 0

        if total_items != 0:
            average_item_price = total_price / total_items
            average_item_price = round(average_item_price, 2)

        return average_item_price

    def get_number_of_shopping_lists_linked_to_item(self, item: ShoppingItem) -> int:
        """
        Return the number of shopping lists that an item is linked to.

        Args:
            item (ShoppingItem): The shopping item.

        Returns:
            int: The number of shopping lists that an item is linked to.
        """
        return ShoppingList.objects.filter(
            shoppingitemquantity__shopping_item=item
        ).count()

    def get_lists_created_in_year_for_user(
        self, year: int, user: User
    ) -> list[ShoppingList]:
        """
        Return the shopping lists created in a year for a user.

        Args:
            year (int): The year.

        Returns:
            list[ShoppingList]: The shopping lists created in a year.
        """
        return ShoppingList.objects.filter(user=user, created_at__year=year)
