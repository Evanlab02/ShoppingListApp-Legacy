"""Configures the admin interface for the shoppinglist app."""

from django.contrib import admin

from .models import ShoppingList


class ShoppingListAdmin(admin.ModelAdmin):
    """Configures the admin interface for the ShoppingList model."""

    list_display = ("name", "user", "updated_at", "is_current")
    list_filter = ("updated_at",)
    search_fields = ("name", "description")


admin.site.register(ShoppingList, ShoppingListAdmin)
