"""Contains tests for the authentication app."""
from django.contrib.auth.models import User
from django.test import TestCase, Client

from .models import Client as ClientModel

TEST_EMAIL = "test@login.com"
CONTENT_TYPE = "application/json"
LOGIN_SUCCESS_MESSAGE = "User successfully logged in."
REGISTER_ENDPOINT = "/api/auth/register"
LOGIN_ENDPOINT = "/api/auth/login"
LOGOUT_ENDPOINT = "/api/auth/logout"
SUCCESS_REGISTER_MESSAGE = "User successfully registered."


class TestAuthentication(TestCase):
    """Tests for the authentication app."""

    def test_register(self):
        """Test the register endpoint."""
        client = Client()

        response = client.post(
            REGISTER_ENDPOINT,
            {
                "username": "test",
                "email": "test@testuser.com",
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json(), {"message": SUCCESS_REGISTER_MESSAGE})

    def test_login_invalid_credentials(self):
        """Test the login endpoint."""
        client = Client()

        response = client.post(
            REGISTER_ENDPOINT,
            {
                "username": "test-login",
                "email": TEST_EMAIL,
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json(), {"message": SUCCESS_REGISTER_MESSAGE})

        response = client.post(
            LOGIN_ENDPOINT,
            {"username": "test-login", "password": "testpass"},
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.json(), {"detail": "Invalid credentials."})

    def test_login_valid_credentials(self):
        """Test the login endpoint."""
        client = Client()

        response = client.post(
            REGISTER_ENDPOINT,
            {
                "username": "test-login",
                "email": TEST_EMAIL,
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json(), {"message": SUCCESS_REGISTER_MESSAGE})

        response = client.post(
            LOGIN_ENDPOINT,
            {"username": "test-login", "password": "testpassword"},
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": LOGIN_SUCCESS_MESSAGE})

    def test_login_after_already_being_authenticated(self):
        """Test the login endpoint."""
        client = Client()

        response = client.post(
            REGISTER_ENDPOINT,
            {
                "username": "test-login",
                "email": TEST_EMAIL,
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json(), {"message": SUCCESS_REGISTER_MESSAGE})

        response = client.post(
            LOGIN_ENDPOINT,
            {"username": "test-login", "password": "testpassword"},
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": LOGIN_SUCCESS_MESSAGE})

        response = client.post(
            LOGIN_ENDPOINT,
            {"username": "test-login", "password": "testpassword"},
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {"detail": "User is already authenticated."})

    def test_login_and_try_to_register_while_logged_in(self):
        """Test the login endpoint."""
        client = Client()

        response = client.post(
            REGISTER_ENDPOINT,
            {
                "username": "test-login",
                "email": TEST_EMAIL,
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json(), {"message": SUCCESS_REGISTER_MESSAGE})

        response = client.post(
            LOGIN_ENDPOINT,
            {"username": "test-login", "password": "testpassword"},
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": LOGIN_SUCCESS_MESSAGE})

        response = client.post(
            REGISTER_ENDPOINT,
            {
                "username": "test-login",
                "email": TEST_EMAIL,
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {"detail": "User is already authenticated."})

    def test_logout(self):
        """Test the logout endpoint."""
        client = Client()
        client.get(LOGOUT_ENDPOINT)

        response = client.post(
            REGISTER_ENDPOINT,
            {
                "username": "test-logout",
                "email": "test@logout.com",
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json(), {"message": SUCCESS_REGISTER_MESSAGE})

        response = client.post(
            LOGIN_ENDPOINT,
            {"username": "test-logout", "password": "testpassword"},
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": LOGIN_SUCCESS_MESSAGE})

        response = client.get(LOGOUT_ENDPOINT)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "User successfully logged out."})

        response = client.get(LOGOUT_ENDPOINT)

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {"detail": "User is not authenticated."})

    def test_get_token(self):
        """Test the get_token endpoint."""
        client = Client()

        response = client.post(
            REGISTER_ENDPOINT,
            {
                "username": "test-token",
                "email": "test@token.com",
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json(), {"message": SUCCESS_REGISTER_MESSAGE})

        response = client.post(
            LOGIN_ENDPOINT,
            {"username": "test-token", "password": "testpassword"},
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": LOGIN_SUCCESS_MESSAGE})

        response = client.get("/api/auth/token")

        self.assertEqual(response.status_code, 200)

    def test_get_token_no_login(self):
        """Test the get_token endpoint."""
        client = Client()

        response = client.get("/api/auth/token")

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {"detail": "User is not authenticated."})

    def test_client_to_string(self):
        """Test the __str__ method of the Client model."""
        user = User.objects.create_user(
            username="test", email="test@test.com", password="testpassword"
        )
        client = ClientModel.objects.create(user=user)
        client_string = str(client)
        self.assertEqual(client_string, "test (test@test.com)")
