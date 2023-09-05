"""Contains endpoints for the authentication app."""

from django.http import HttpRequest
from ninja import Router

from ..auth.app_auth import register_user
from ..schemas.schemas import RegisterSchema, ErrorSchema, SuccessSchema

auth_router = Router()


@auth_router.post("/register", response={201: SuccessSchema, 400: ErrorSchema})
def register(request: HttpRequest, payload: RegisterSchema):
    """Register a user."""
    if request.user.is_authenticated:
        return 400, ErrorSchema(detail="User is already authenticated.")
    user = register_user(payload)
    user.save()
    return 201, SuccessSchema(message="User successfully registered.")
