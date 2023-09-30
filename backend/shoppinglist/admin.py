"""Configures the admin interface for the shoppinglist app."""

from django.contrib import admin

from .models import ShoppingList, ShoppingBudget


class ShoppingListAdmin(admin.ModelAdmin):
    """Configures the admin interface for the ShoppingList model."""

    list_display = ("name", "user", "updated_at", "is_current")
    list_filter = ("updated_at",)
    search_fields = ("name", "description")
    list_per_page = 25


admin.site.register(ShoppingList, ShoppingListAdmin)
admin.site.register(ShoppingBudget)
