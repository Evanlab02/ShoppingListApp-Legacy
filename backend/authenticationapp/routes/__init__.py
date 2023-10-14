"""Contains routes for the authentication app."""

from ..database import UserRepository, ClientRepository
from ..schemas.input import NewUser, UserCredentials
from ..schemas.output import ErrorSchema, SuccessSchema
from ..types import HttpRequest, Router

auth_router = Router(tags=["Authentication"])

USER_REPO = UserRepository()
CLIENT_REPO = ClientRepository()


@auth_router.post("/register", response={201: SuccessSchema, 400: ErrorSchema})
def register(request: HttpRequest, payload: NewUser):
    """
    Register a user/create a new user.

    Create a new user with the given credentials.

    Args:
        request (HttpRequest): The request object.
        payload (NewUser): The payload containing the credentials.

    Returns:
        (int, SuccessSchema | ErrorSchema): The status code and the response as a schema.
    """
    if USER_REPO.is_authenticated(request.user):
        return 400, ErrorSchema(detail="User is already authenticated.")

    try:
        user = USER_REPO.create_user(payload)
        user.save()
    except ValueError as e:
        return 400, ErrorSchema(detail=str(e))

    return 201, SuccessSchema(message="User successfully registered.")


@auth_router.post(
    "/login", response={200: SuccessSchema, 400: ErrorSchema, 401: ErrorSchema}
)
def login(request: HttpRequest, payload: UserCredentials):
    """
    Login a user.

    Login a user with the given credentials.

    Args:
        request (HttpRequest): The request object.
        payload (LoginSchema): The payload containing the credentials.

    Returns:
        (int, SuccessSchema | ErrorSchema): The status code and the response as a schema.
    """
    if USER_REPO.is_authenticated(request.user):
        return 400, ErrorSchema(detail="User is already authenticated.")

    status_code, response = USER_REPO.login_user(request, payload)

    if status_code == 200:
        response = SuccessSchema(message=response)
    else:
        response = ErrorSchema(detail=response)

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
    status_code, response = USER_REPO.logout_user(request)

    if status_code == 200:
        response = SuccessSchema(message=response)
    else:
        response = ErrorSchema(detail=response)

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
    if not USER_REPO.is_authenticated(request.user):
        return 400, ErrorSchema(detail="User is not authenticated.")

    user_api_token = CLIENT_REPO.generate_token(request.user)
    return 200, SuccessSchema(message=user_api_token)
