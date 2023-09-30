"""Contains the shopping list app's models."""

from django.db import models
from django.utils import timezone

from django.contrib.auth.models import User

from shoppingitem.models import ShoppingItem


class ShoppingList(models.Model):
    """Represents a shopping list."""

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    start_date = models.DateField()
    end_date = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    items = models.ManyToManyField(ShoppingItem, blank=True)

    def __str__(self):
        """Return a string representation of the shopping list."""
        return self.name

    def is_current(self):
        """Return True if the shopping list is current."""
        return self.start_date <= timezone.now().date() <= self.end_date

    @classmethod
    def get_current(cls, user):
        """Return the current shopping list."""
        return (
            ShoppingList.objects.filter(user=user)
            .filter(start_date__lte=timezone.now().date())
            .filter(end_date__gte=timezone.now().date())
            .first()
        )


class ShoppingBudget(models.Model):
    """Represents a shopping budget."""

    amount = models.DecimalField(max_digits=10, decimal_places=2)
    shopping_list = models.ForeignKey(ShoppingList, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
