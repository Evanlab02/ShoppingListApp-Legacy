"""Contains the urls for the shoppingitem app."""

from django.urls import path

from . import views

urlpatterns = [
    path("me", views.item_user_overview_page, name="item_user_overview_page"),
    path("", views.item_overview_page, name="item_overview_page"),
]
