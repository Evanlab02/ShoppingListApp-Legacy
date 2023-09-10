"""Contains admin configuration for the shoppingitem app."""

from django.contrib import admin

from .models import ShoppingItem

class ShoppingItemAdmin(admin.ModelAdmin):
    """Admin configuration for the shoppingitem app."""
    list_display = ('name', 'store', 'price', 'created_at', 'updated_at')
    list_display_links = ('name',)
    search_fields = ('name', 'store')
    list_per_page = 25

admin.site.register(ShoppingItem, ShoppingItemAdmin)
