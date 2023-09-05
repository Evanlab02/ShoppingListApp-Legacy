"""Contains authentication logic for the application."""

from django.contrib.auth.models import User

from ..schemas.schemas import RegisterSchema


def register_user(payload: RegisterSchema):
    """Register a user."""
    user = User.objects.create_user(
        payload.username,
        payload.email,
        payload.password,
        first_name=payload.first_name,
        last_name=payload.last_name,
    )
    return user
