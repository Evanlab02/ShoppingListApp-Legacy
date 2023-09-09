"""Contains endpoints for the authentication app."""

from django.http import HttpRequest
from ninja import Router

from ..auth.app_auth import create_user, login_user, logout_user, generate_token
from ..schemas.schemas import RegisterSchema, ErrorSchema, SuccessSchema, LoginSchema

auth_router = Router()


@auth_router.post("/register", response={201: SuccessSchema, 400: ErrorSchema})
def register(request: HttpRequest, payload: RegisterSchema):
    """
    Register a user.

    Create a new user with the given credentials.

    Args:
        request (HttpRequest): The request object.
        payload (RegisterSchema): The payload containing the credentials.

    Returns:
        (int, SuccessSchema | ErrorSchema): The status code and the response as a schema.
    """
    if request.user.is_authenticated:
        return 400, ErrorSchema(detail="User is already authenticated.")
    user = create_user(payload)
    user.save()
    return 201, SuccessSchema(message="User successfully registered.")


@auth_router.post(
    "/login", response={200: SuccessSchema, 400: ErrorSchema, 401: ErrorSchema}
)
def login(request: HttpRequest, payload: LoginSchema):
    """
    Login a user.

    Login a user with the given credentials.

    Args:
        request (HttpRequest): The request object.
        payload (LoginSchema): The payload containing the credentials.

    Returns:
        (int, SuccessSchema | ErrorSchema): The status code and the response as a schema.
    """
    if request.user.is_authenticated:
        return 400, ErrorSchema(detail="User is already authenticated.")
    status_code, response = login_user(request, payload)
    return status_code, response


@auth_router.get("/logout", response={200: SuccessSchema, 400: ErrorSchema})
def logout(request: HttpRequest):
    """
    Logout a user.

    Args:
        request (HttpRequest): The request object.

    Returns:
        (int, SuccessSchema | ErrorSchema): The status code and the response as a schema.
    """
    status_code, response = logout_user(request)
    return status_code, response


@auth_router.get("/token", response={200: SuccessSchema, 400: ErrorSchema})
def token(request: HttpRequest):
    """
    Get token of a user.

    Args:
        request (HttpRequest): The request object.

    Returns:
        (int, SuccessSchema | ErrorSchema): The status code and the response as a schema.
    """
    if not request.user.is_authenticated:
        return 400, ErrorSchema(detail="User is not authenticated.")
    return 200, SuccessSchema(message=generate_token(request.user))
