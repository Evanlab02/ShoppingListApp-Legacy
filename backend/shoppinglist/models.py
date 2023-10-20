"""Contains the shopping list app's models."""

from .helpers import timezone
from .types import (
    User,
    Model,
    DecimalField,
    DateTimeField,
    CharField,
    DateField,
    ForeignKey,
    IntegerField,
    ManyToManyField,
    TextField,
    CASCADE,
)

from shoppingitem.models import ShoppingItem


class ShoppingList(Model):
    """Represents a shopping list."""

    name = CharField(max_length=100)
    description = TextField(blank=True)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)
    start_date = DateField()
    end_date = DateField()
    user = ForeignKey(User, on_delete=CASCADE)
    items = ManyToManyField(ShoppingItem, blank=True, through="ShoppingItemQuantity")

    def __str__(self):
        """Return a string representation of the shopping list."""
        return self.name

    def is_current(self):
        """Return True if the shopping list is current."""
        return self.start_date <= timezone.now().date() <= self.end_date


class ShoppingItemQuantity(Model):
    """Represents a shopping item quantity."""

    quantity = IntegerField()
    shopping_item = ForeignKey(ShoppingItem, on_delete=CASCADE)
    shopping_list = ForeignKey(ShoppingList, on_delete=CASCADE)

    def __str__(self):
        """Return a string representation of the shopping item quantity."""
        return f"{self.quantity} {self.shopping_item.name} @ {self.shopping_list.name}"


class ShoppingBudget(Model):
    """Represents a shopping budget."""

    amount = DecimalField(max_digits=10, decimal_places=2)
    shopping_list = ForeignKey(ShoppingList, on_delete=CASCADE)
    user = ForeignKey(User, on_delete=CASCADE)

    def __str__(self):
        """Return a string representation of the shopping budget."""
        return f"{self.amount} @ {self.shopping_list.name} for {self.user.username}"
