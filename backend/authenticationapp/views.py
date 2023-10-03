"""Contains views for the authentication app."""

from django.contrib.auth import authenticate, login
from django.http import HttpRequest, HttpResponsePermanentRedirect
from django.shortcuts import render
from django.views.decorators.http import require_http_methods

DASHBOARD_ROUTE = "/shopping/dashboard/"


@require_http_methods(["GET"])
def login_page(request: HttpRequest):
    """
    Render the login page.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponsePermanentRedirect: Redirects the user to the dashboard.
        HttpResponse: The rendered login page.
    """
    if request.user.is_authenticated:
        return HttpResponsePermanentRedirect(DASHBOARD_ROUTE)

    return render(request, "auth/index.html")


@require_http_methods(["GET"])
def login_page_with_error(request: HttpRequest):
    """
    Render the login page with an error message.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponsePermanentRedirect: Redirects the user to the dashboard.
        HttpResponse: The rendered login page with an error message.
    """
    if request.user.is_authenticated:
        return HttpResponsePermanentRedirect(DASHBOARD_ROUTE)

    return render(
        request, "auth/index.html", {"error": "Invalid username or password."}
    )


@require_http_methods(["POST"])
def login_action(request: HttpRequest):
    """
    Log the user in.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponsePermanentRedirect: Redirects the user to the dashboard or the error page.
    """
    if request.user.is_authenticated:
        return HttpResponsePermanentRedirect(DASHBOARD_ROUTE)

    username = request.POST.get("username-input")
    password = request.POST.get("password-input")
    authenticated_user = authenticate(request, username=username, password=password)

    if authenticated_user is not None:
        login(request, authenticated_user)
        return HttpResponsePermanentRedirect(DASHBOARD_ROUTE)

    return HttpResponsePermanentRedirect("/error")
