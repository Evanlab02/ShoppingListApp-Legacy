"""Configures the admin interface for the shoppinglist app."""

from django.contrib import admin

from .models import ShoppingList


class ShoppingListAdmin(admin.ModelAdmin):
    """Configures the admin interface for the ShoppingList model."""

    list_display = ("name", "created_at", "updated_at", "is_current")
    list_filter = ("created_at", "updated_at")
    search_fields = ("name", "description")


admin.site.register(ShoppingList, ShoppingListAdmin)
