"""Contains the urls for the shoppingitem app."""

from django.urls import path

from . import views

urlpatterns = [
    path("me", views.item_user_overview_page, name="item_user_overview_page"),
    path("", views.item_overview_page, name="item_overview_page"),
    path("stores/me", views.get_user_store_view, name="user_store_overview_page"),
    path("stores", views.get_store_view, name="store_overview_page"),
]
