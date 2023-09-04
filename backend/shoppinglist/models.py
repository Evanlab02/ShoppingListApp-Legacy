"""This contains the shoppinglist models."""

from django.db import models


class ShoppingList(models.Model):
    """This class represents the shoppinglist model."""

    name = models.CharField(
        "Shopping list name", max_length=255, blank=False, unique=True
    )
    date_created = models.DateTimeField("Date created", auto_now_add=True)
    date_modified = models.DateTimeField("Date modified", auto_now=True)
    startYear = models.IntegerField("Start year", blank=False)
    startMonth = models.IntegerField("Start month", blank=False)
    startDay = models.IntegerField("Start day", blank=False)
    endYear = models.IntegerField("End year", blank=False)
    endMonth = models.IntegerField("End month", blank=False)
    endDay = models.IntegerField("End day", blank=False)
    current = models.BooleanField("Current shopping list", default=True)

    def __str__(self):
        """Return a human readable representation of the model instance."""
        return self.name

    def is_current(self):
        """Return whether the list is current."""
        return self.current
