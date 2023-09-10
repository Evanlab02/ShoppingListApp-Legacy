"""Contains the shoppingitem app models."""

from django.db import models

class ShoppingItem(models.Model):
    """Model for a shopping item."""

    name = models.CharField(max_length=100)
    store = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Return a string representation of the shopping item."""
        return f"{self.name}@{self.store}"
