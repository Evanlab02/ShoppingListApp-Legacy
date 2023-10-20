"""Contains views for the authentication app."""

from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods

from .database import UserRepository
from .helpers import authenticate, login, logout, render
from .types import User, HttpRequest, HttpResponsePermanentRedirect, HttpResponse

USER_REPOSITORY = UserRepository()
DASHBOARD_ROUTE = "/shopping/dashboard/"


@require_http_methods(["GET"])
def login_page(request: HttpRequest) -> HttpResponsePermanentRedirect | HttpResponse:
    """
    Render the login page.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponsePermanentRedirect: Redirects the user to the dashboard.
        HttpResponse: The rendered login page.
    """
    return USER_REPOSITORY.render_or_redirect(
        request, DASHBOARD_ROUTE, "auth/index.html"
    )


@require_http_methods(["GET"])
def login_page_with_error(
    request: HttpRequest,
) -> HttpResponsePermanentRedirect | HttpResponse:
    """
    Render the login page with an error message.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponsePermanentRedirect: Redirects the user to the dashboard.
        HttpResponse: The rendered login page with an error message.
    """
    return USER_REPOSITORY.render_or_redirect(
        request,
        DASHBOARD_ROUTE,
        "auth/index.html",
        {"error": "Invalid username or password."},
    )


@require_http_methods(["POST"])
def login_action(request: HttpRequest) -> HttpResponsePermanentRedirect:
    """
    Log the user in.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponsePermanentRedirect: Redirects the user to the dashboard or the error page.
    """
    if USER_REPOSITORY.is_authenticated(request.user):
        return HttpResponsePermanentRedirect(DASHBOARD_ROUTE)

    username = request.POST.get("username-input")
    password = request.POST.get("password-input")
    authenticated_user = authenticate(request, username=username, password=password)

    if authenticated_user is not None:
        login(request, authenticated_user)
        return HttpResponsePermanentRedirect(DASHBOARD_ROUTE)

    return HttpResponsePermanentRedirect("/error")

@login_required(login_url="/", redirect_field_name=None)
@require_http_methods(["GET"])
def logout_page(request: HttpRequest) -> HttpResponsePermanentRedirect | HttpResponse:
    """
    Log the user out.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered logout page.
    """
    return USER_REPOSITORY.render_or_redirect(
        request, "/", "auth/logout.html", auth=False
    )

@login_required(login_url="/", redirect_field_name=None)
@require_http_methods(["POST"])
def logout_action(request: HttpRequest):
    """
    Log the user out.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponsePermanentRedirect: Redirects the user to the login page.
    """
    if not USER_REPOSITORY.is_authenticated(request.user):
        return HttpResponsePermanentRedirect("/")

    logout(request)
    return HttpResponsePermanentRedirect("/")


@require_http_methods(["GET"])
def register_page(request: HttpRequest):
    """
    Render the register page.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponsePermanentRedirect: Redirects the user to the dashboard.
        HttpResponse: The rendered register page.
    """
    return USER_REPOSITORY.render_or_redirect(
        request, DASHBOARD_ROUTE, "auth/register.html"
    )


@require_http_methods(["POST"])
def register_action(request: HttpRequest):
    """
    Register a new user.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponsePermanentRedirect: Redirects the user to the login or error page.
    """
    if USER_REPOSITORY.is_authenticated(request.user):
        return HttpResponsePermanentRedirect(DASHBOARD_ROUTE)

    username = request.POST.get("username-input")
    password = request.POST.get("password-input")
    confirm_password = request.POST.get("confirm-password-input")
    email = request.POST.get("email-input")
    first_name = request.POST.get("first-name-input")
    last_name = request.POST.get("last-name-input")

    if password != confirm_password:
        return HttpResponsePermanentRedirect("/register/error/non-matching-passwords")
    elif User.objects.filter(username=username).exists():
        return HttpResponsePermanentRedirect("/register/error/username-already-exists")
    elif User.objects.filter(email=email).exists():
        return HttpResponsePermanentRedirect("/register/error/email-already-exists")

    user = User.objects.create_user(
        username=username,
        password=password,
        email=email,
        first_name=first_name,
        last_name=last_name,
    )
    user.save()

    return HttpResponsePermanentRedirect("/")


@require_http_methods(["GET"])
def register_page_error(request: HttpRequest, error: str):
    """
    Render the register page with an error message.

    Args:
        request(HttpRequest): The request object.
        error(str): The error message.

    Returns:
        HttpResponsePermanentRedirect: Redirects the user to the dashboard.
        HttpResponse: The rendered register page with an error message.
    """
    if USER_REPOSITORY.is_authenticated(request.user):
        return HttpResponsePermanentRedirect(DASHBOARD_ROUTE)

    if (error) == "non-matching-passwords":
        error = "Passwords do not match."
    elif (error) == "username-already-exists":
        error = "Username already exists."
    elif (error) == "email-already-exists":
        error = "Email already exists."
    else:
        error = "Unexpected error."

    return render(request, "auth/register.html", {"error": error})
