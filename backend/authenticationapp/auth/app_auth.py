"""Contains authentication logic for the application."""

from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http import HttpRequest

from ..schemas.schemas import RegisterSchema, LoginSchema, ErrorSchema, SuccessSchema


def create_user(payload: RegisterSchema):
    """Register a user."""
    user = User.objects.create_user(
        payload.username,
        payload.email,
        payload.password,
        first_name=payload.first_name,
        last_name=payload.last_name,
    )
    return user


def login_user(request: HttpRequest, payload: LoginSchema):
    """Login a user."""
    user = authenticate(
        request=request, username=payload.username, password=payload.password
    )
    if user is None:
        return 401, ErrorSchema(detail="Invalid credentials.")
    login(request, user)
    return 200, SuccessSchema(message="User successfully logged in.")
