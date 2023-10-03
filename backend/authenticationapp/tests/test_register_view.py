"""Contains tests for the register view."""

import pytest

from django.contrib.auth.models import User
from django.test import Client, TestCase

from ..models import Client as ClientModel

TEST_EMAIL = "user@test.com"
FONT = '<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">'
REGISTER_ACTION_ROUTE = "/register/action"
DASHBOARD_ROUTE = "/shopping/dashboard/"
USERNAME_ERROR_ROUTE = "/register/error/username-already-exists"


class TestRegisterView(TestCase):
    """Test the register view."""

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

    def test_get_register_page(self):
        """Should render the register page."""
        response = self.client.get("/register")
        self.assertEqual(response.status_code, 200)

        self.assertTemplateUsed(response, "auth/register.html")

        self.assertContains(response, FONT)
        self.assertContains(response, "<title>Shopping App</title>")
        self.assertContains(
            response, '<link rel="stylesheet" href="/static/auth/auth.css">'
        )
        self.assertContains(
            response, '<link rel="stylesheet" href="/static/auth/base.css">'
        )
        self.assertContains(
            response, '<h2 id="login-heading">Shopping App Register</h2>'
        )
        self.assertContains(
            response,
            '<form class="login-bottom" action="/register/action" method="post">',
        )
        self.assertContains(response, "<legend>User Details</legend>")
        self.assertContains(response, '<label for="username-input">Username:</label>')
        self.assertContains(
            response,
            '<input class="text-input" type="text" name="username-input" id="username-input"',
        )
        self.assertContains(response, '<label for="password-input">Password:</label>')
        self.assertContains(
            response,
            '<input class="text-input" type="password" name="password-input" id="password-input"',
        )
        self.assertContains(
            response, '<label for="confirm-password-input">Confirm Password:</label>'
        )
        self.assertContains(
            response, '<label for="email-input">Email (Optional):</label>'
        )
        self.assertContains(
            response,
            '<input class="text-input" type="email" name="email-input" id="email-input">',
        )
        self.assertContains(
            response, '<label for="first-name-input">First Name (Optional):</label>'
        )
        self.assertContains(
            response,
            '<input class="text-input" type="text" name="first-name-input" id="first-name-input">',
        )
        self.assertContains(
            response, '<label for="last-name-input">Last Name (Optional):</label>'
        )
        self.assertContains(
            response,
            '<input class="text-input" type="text" name="last-name-input" id="last-name-input">',
        )
        self.assertContains(
            response,
            ' <input class="submit-input" type="submit" value="Create Account">',
        )

    def test_get_register_page_logged_in(self):
        """Should redirect to the dashboard."""
        self.client.login(username="testuser", password="testpassword")
        response = self.client.get("/register")
        self.assertRedirects(
            response, DASHBOARD_ROUTE, 301, 404, fetch_redirect_response=False
        )

    def test_register_action_when_logged_in(self):
        """Should redirect to the dashboard."""
        self.client.login(username="testuser", password="testpassword")
        response = self.client.post(REGISTER_ACTION_ROUTE)
        self.assertRedirects(
            response, DASHBOARD_ROUTE, 301, 404, fetch_redirect_response=False
        )

    def test_register_action_valid_credentials(self):
        """Should redirect to the dashboard."""
        response = self.client.post(
            REGISTER_ACTION_ROUTE,
            {
                "username-input": "newuser",
                "password-input": "newpassword",
                "confirm-password-input": "newpassword",
                "email-input": "test@test2.com",
                "first-name-input": "new",
                "last-name-input": "user",
            },
        )

        self.assertRedirects(response, "/", 301, 200, fetch_redirect_response=False)

    def test_register_action_invalid_username(self):
        """Should redirect to the register page."""
        response = self.client.post(
            REGISTER_ACTION_ROUTE,
            {
                "username-input": "testuser",
                "password-input": "newpassword",
                "confirm-password-input": "newpassword",
                "email-input": "tester@test.com",
                "first-name-input": "new",
                "last-name-input": "user",
            },
        )

        self.assertRedirects(
            response,
            USERNAME_ERROR_ROUTE,
            301,
            200,
            fetch_redirect_response=False,
        )

    def test_register_action_invalid_email(self):
        """Should redirect to the register page."""
        response = self.client.post(
            REGISTER_ACTION_ROUTE,
            {
                "username-input": "newuser",
                "password-input": "newpassword",
                "confirm-password-input": "newpassword",
                "email-input": TEST_EMAIL,
                "first-name-input": "new",
                "last-name-input": "user",
            },
        )

        self.assertRedirects(
            response,
            "/register/error/email-already-exists",
            301,
            200,
            fetch_redirect_response=False,
        )

    def test_register_action_invalid_passwords(self):
        """Should redirect to the register page."""
        response = self.client.post(
            REGISTER_ACTION_ROUTE,
            {
                "username-input": "newuser",
                "password-input": "newpassword",
                "confirm-password-input": "newpassword2",
                "email-input": "tester@gmail.com",
                "first-name-input": "new",
                "last-name-input": "user",
            },
        )

        self.assertRedirects(
            response,
            "/register/error/non-matching-passwords",
            301,
            200,
            fetch_redirect_response=False,
        )

    def test_get_register_error_page_when_already_logged_in(self):
        """Should redirect to the dashboard."""
        self.client.login(username="testuser", password="testpassword")
        response = self.client.get(USERNAME_ERROR_ROUTE)
        self.assertRedirects(
            response, DASHBOARD_ROUTE, 301, 404, fetch_redirect_response=False
        )

    def test_get_register_error_page_with_invalid_password_error(self):
        """Should display the invalid password error page."""
        response = self.client.get("/register/error/non-matching-passwords")
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, FONT)
        self.assertContains(response, "Passwords do not match.")

    def test_get_register_error_page_with_invalid_username_error(self):
        """Should display the invalid username error page."""
        response = self.client.get(USERNAME_ERROR_ROUTE)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, FONT)
        self.assertContains(response, "Username already exists.")

    def test_get_register_error_page_with_invalid_email_error(self):
        """Should display the invalid email error page."""
        response = self.client.get("/register/error/email-already-exists")
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, FONT)
        self.assertContains(response, "Email already exists.")

    def test_get_register_error_page_with_unexpected_error(self):
        """Should display the invalid email error page."""
        response = self.client.get("/register/error/api-error")
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, FONT)
        self.assertContains(response, "Unexpected error.")
