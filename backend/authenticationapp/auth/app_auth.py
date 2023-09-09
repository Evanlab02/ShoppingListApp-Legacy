"""Contains authentication logic for the application."""

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import HttpRequest
from ninja.security import APIKeyHeader

from ..models import Client
from ..schemas.schemas import RegisterSchema, LoginSchema, ErrorSchema, SuccessSchema


class ApiKey(APIKeyHeader):
    """API key authentication helper class."""

    param_name = "X-API-Key"

    def authenticate(self, request, key):
        """Authenticate a user."""
        client = Client.objects.get(user=request.user)
        if key == client.token:
            return client


def create_user(payload: RegisterSchema):
    """
    Register a user.

    Create a new user with the given credentials without saving them to the database.

    Args:
        payload (RegisterSchema): The payload containing the credentials.

    Returns:
        (User): The created user.
    """
    user = User.objects.create_user(
        payload.username,
        payload.email,
        payload.password,
        first_name=payload.first_name,
        last_name=payload.last_name,
    )
    return user


def login_user(request: HttpRequest, payload: LoginSchema):
    """
    Login a user.

    Login a user with the given credentials.

    Args:
        request (HttpRequest): The request object.

    Returns:
        (int, SuccessSchema | ErrorSchema): The status code and the response as a schema.
    """
    user = authenticate(
        request=request, username=payload.username, password=payload.password
    )
    if user is None:
        return 401, ErrorSchema(detail="Invalid credentials.")
    login(request, user)
    return 200, SuccessSchema(message="User successfully logged in.")


def logout_user(request: HttpRequest):
    """Logout a user."""
    if not request.user.is_authenticated:
        return 400, ErrorSchema(detail="User is not authenticated.")
    logout(request)
    return 200, SuccessSchema(message="User successfully logged out.")


def generate_token(user: User):
    """Generate a token for a user."""
    client = None
    try:
        client = Client.objects.filter(user=user).get()
    except Client.DoesNotExist:
        client = None

    if client is None:
        client = Client.objects.create(user=user)

    client.generate_token()
    return client.token
