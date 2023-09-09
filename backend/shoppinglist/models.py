"""Contains the shopping list app's models."""

from django.db import models
from django.utils import timezone

from django.contrib.auth.models import User


class ShoppingList(models.Model):
    """Represents a shopping list."""

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    start_date = models.DateField()
    end_date = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        """Return a string representation of the shopping list."""
        return self.name

    def is_current(self):
        """Return True if the shopping list is current."""
        return self.start_date <= timezone.now().date() <= self.end_date
