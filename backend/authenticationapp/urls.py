"""Contains the urls for the authentication app."""

from django.urls import path

from . import views

urlpatterns = [
    path("", views.login_page, name="login_page"),
    path("error", views.login_page_with_error, name="login_page_with_error"),
    path("login/action", views.login_action, name="login_action"),
]
