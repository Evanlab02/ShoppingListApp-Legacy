"""Contains the shoppingitem app."""

from .types import (
    User,
    Model,
    CharField,
    IntegerField,
    TextField,
    DateTimeField,
    ForeignKey,
    DecimalField,
    CASCADE,
)


class ShoppingStore(Model):
    """Model for a shopping store."""

    name = CharField(max_length=100, unique=True)
    store_type = IntegerField(choices=((1, "Online"), (2, "In-Store"), (3, "Both")))
    description = TextField(blank=True)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)
    user = ForeignKey(User, on_delete=CASCADE)

    def __str__(self):
        """Return a string representation of the shopping store."""
        return f"{self.name}"


class ShoppingItem(Model):
    """Model for a shopping item."""

    name = CharField(max_length=100)
    store = ForeignKey(ShoppingStore, on_delete=CASCADE)
    price = DecimalField(max_digits=10, decimal_places=2)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)
    user = ForeignKey(User, on_delete=CASCADE)

    def __str__(self):
        """Return a string representation of the shopping item."""
        return f"{self.name}@{self.store}"
