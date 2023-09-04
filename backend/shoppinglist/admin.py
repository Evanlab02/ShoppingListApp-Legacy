"""Contains admin configuration for the shoppinglist app."""

from django.contrib import admin

from .models import ShoppingList


class ShoppingListAdmin(admin.ModelAdmin):
    """This class defines the admin behavior for the shoppinglist model."""

    list_display = ("name", "date_created", "date_modified", "is_current")
    search_fields = ("name", "date_created", "date_modified")
    readonly_fields = ("date_created", "date_modified")


admin.site.register(ShoppingList, ShoppingListAdmin)
