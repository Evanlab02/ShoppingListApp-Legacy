"""Contains tests for the login view."""

import pytest

from django.contrib.auth.models import User
from django.test import Client, TestCase

from authenticationapp.models import Client as ClientModel

TEST_EMAIL = "user@test.com"
FONT = '<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">'
DASHBOARD_ROUTE = "/shopping/dashboard/"
ERROR_ROUTE = "/error"
LOGIN_ACTION_ROUTE = "/login/action"


class TestLoginView(TestCase):
    """Test the login view."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self):
        """Set up the test environment."""
        self.client = Client()
        self.user = User.objects.create_user(
            username="testuser",
            email=TEST_EMAIL,
            password="testpassword",
            first_name="test",
            last_name="user",
        )
        self.user.save()

        self.client_model = ClientModel.objects.create(user=self.user)

    def test_get_login_page(self):
        """Test the login page."""
        response = self.client.get("")
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "auth/index.html")

        self.assertContains(response, "<title>Shopping App</title>")
        self.assertContains(
            response, '<link rel="stylesheet" href="/static/auth/base.css">'
        )
        self.assertContains(
            response,
            FONT,
        )
        self.assertContains(response, '<h2 id="auth-heading">Shopping App Login</h2>')
        self.assertContains(
            response,
            f'<form class="auth-bottom" action="{LOGIN_ACTION_ROUTE}" method="post">',
        )
        self.assertContains(response, '<label for="username-input">Username:</label>')
        self.assertContains(
            response,
            '<input class="text-input" type="text" name="username-input" id="username-input">',
        )
        self.assertContains(response, '<label for="password-input">Password:</label>')
        self.assertContains(
            response,
            '<input class="text-input" type="password" name="password-input" id="password-input">',
        )
        self.assertContains(
            response, '<input class="submit-input" type="submit" value="Login">'
        )
        self.assertContains(response, "<legend>Login Details</legend>")

    def test_login_redirects_when_logged_in(self):
        """Test that the login page redirects to the home page when the user is logged in."""
        self.client.login(username="testuser", password="testpassword")
        response = self.client.get("")
        self.assertRedirects(
            response, DASHBOARD_ROUTE, 301, 404, fetch_redirect_response=False
        )

    def test_get_login_page_with_error(self):
        """Test the login page with an error message."""
        response = self.client.get(ERROR_ROUTE)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "auth/index.html")

        self.assertContains(response, "<title>Shopping App</title>")
        self.assertContains(
            response, '<link rel="stylesheet" href="/static/auth/base.css">'
        )
        self.assertContains(
            response,
            FONT,
        )
        self.assertContains(response, '<h2 id="auth-heading">Shopping App Login</h2>')
        self.assertContains(
            response,
            f'<form class="auth-bottom" action="{LOGIN_ACTION_ROUTE}" method="post">',
        )
        self.assertContains(response, '<label for="username-input">Username:</label>')
        self.assertContains(
            response,
            '<input class="text-input" type="text" name="username-input" id="username-input">',
        )
        self.assertContains(response, '<label for="password-input">Password:</label>')
        self.assertContains(
            response,
            '<input class="text-input" type="password" name="password-input" id="password-input">',
        )
        self.assertContains(
            response, '<input class="submit-input" type="submit" value="Login">'
        )
        self.assertContains(response, "<legend>Login Details</legend>")

        self.assertContains(response, "<p>Invalid username or password.</p>")
        self.assertEqual(response.context["error"], "Invalid username or password.")

    def test_get_login_page_with_error_redirects_when_logged_in(self):
        """Test the login page redirects to the dashboard when the user is logged in."""
        self.client.login(username="testuser", password="testpassword")
        response = self.client.get(ERROR_ROUTE)
        self.assertRedirects(
            response, DASHBOARD_ROUTE, 301, 404, fetch_redirect_response=False
        )

    def test_login_action_endpoint_when_logged_in(self):
        """Test the login action endpoint redirects to the dashboard when user is logged in."""
        self.client.login(username="testuser", password="testpassword")
        response = self.client.post(
            LOGIN_ACTION_ROUTE, {"username-input": "", "password-input": ""}
        )
        self.assertRedirects(
            response, DASHBOARD_ROUTE, 301, 404, fetch_redirect_response=False
        )

    def test_login_action_endpoint_when_not_logged_in(self):
        """Test the login action endpoint redirects when the user logs in."""
        response = self.client.post(
            LOGIN_ACTION_ROUTE,
            {"username-input": "testuser", "password-input": "testpassword"},
        )
        self.assertRedirects(
            response, DASHBOARD_ROUTE, 301, 404, fetch_redirect_response=False
        )

    def test_login_action_endpoint_invalid_username(self):
        """Test the login action endpoint redirects to the dashboard when the user is logged in."""
        response = self.client.post(
            LOGIN_ACTION_ROUTE,
            {"username-input": "invalid", "password-input": "testpassword"},
        )
        self.assertRedirects(
            response, ERROR_ROUTE, 301, 200, fetch_redirect_response=False
        )
