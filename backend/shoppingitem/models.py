"""Contains the shoppingitem app models."""

from django.contrib.auth.models import User
from django.db import models


class ShoppingStore(models.Model): # Name, store_type, number_of_items, updated_at, user, created_at
    """Model for a shopping store."""

    name = models.CharField(max_length=100, unique=True)
    store_type = models.IntegerField(
        choices=((1, "Online"), (2, "In-Store"), (3, "Both"))
    )
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        """Return a string representation of the shopping store."""
        return f"{self.name}"


class ShoppingItem(models.Model):
    """Model for a shopping item."""

    name = models.CharField(max_length=100)
    store = models.ForeignKey(ShoppingStore, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        """Return a string representation of the shopping item."""
        return f"{self.name}@{self.store}"
