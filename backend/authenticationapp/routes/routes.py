"""Contains endpoints for the authentication app."""

from django.http import HttpRequest
from ninja import Router

from ..auth.app_auth import create_user, login_user
from ..schemas.schemas import RegisterSchema, ErrorSchema, SuccessSchema, LoginSchema

auth_router = Router()


@auth_router.post("/register", response={201: SuccessSchema, 400: ErrorSchema})
def register(request: HttpRequest, payload: RegisterSchema):
    """Register a user."""
    if request.user.is_authenticated:
        return 400, ErrorSchema(detail="User is already authenticated.")
    user = create_user(payload)
    user.save()
    return 201, SuccessSchema(message="User successfully registered.")


@auth_router.post(
    "/login", response={200: SuccessSchema, 400: ErrorSchema, 401: ErrorSchema}
)
def login(request: HttpRequest, payload: LoginSchema):
    """Login a user."""
    if request.user.is_authenticated:
        return 400, ErrorSchema(detail="User is already authenticated.")
    status_code, response = login_user(request, payload)
    return status_code, response
