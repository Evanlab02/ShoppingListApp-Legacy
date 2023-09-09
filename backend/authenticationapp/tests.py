"""Contains tests for the authentication app."""
from django.contrib.auth.models import User
from django.test import TestCase, Client

from .models import Client as ClientModel

CONTENT_TYPE = "application/json"


class TestAuthentication(TestCase):
    """Tests for the authentication app."""

    def test_register(self):
        """Test the register endpoint."""
        client = Client()

        response = client.post(
            "/api/auth/register",
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
        self.assertEqual(response.json(), {"message": "User successfully registered."})

    def test_login(self):
        """Test the login endpoint."""
        client = Client()

        response = client.post(
            "/api/auth/register",
            {
                "username": "test-login",
                "email": "test@login.com",
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json(), {"message": "User successfully registered."})

        response = client.post(
            "/api/auth/login",
            {"username": "test-login", "password": "testpass"},
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.json(), {"detail": "Invalid credentials."})

        response = client.post(
            "/api/auth/login",
            {"username": "test-login", "password": "testpassword"},
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "User successfully logged in."})

        response = client.post(
            "/api/auth/login",
            {"username": "test-login", "password": "testpassword"},
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {"detail": "User is already authenticated."})

        response = client.post(
            "/api/auth/register",
            {
                "username": "test-login",
                "email": "test@login.com",
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
        client.get("/api/auth/logout")

        response = client.post(
            "/api/auth/register",
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
        self.assertEqual(response.json(), {"message": "User successfully registered."})

        response = client.post(
            "/api/auth/login",
            {"username": "test-logout", "password": "testpassword"},
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "User successfully logged in."})

        response = client.get("/api/auth/logout")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "User successfully logged out."})

        response = client.get("/api/auth/logout")

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {"detail": "User is not authenticated."})

    def test_get_token(self):
        """Test the get_token endpoint."""
        client = Client()

        response = client.post(
            "/api/auth/register",
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
        self.assertEqual(response.json(), {"message": "User successfully registered."})

        response = client.post(
            "/api/auth/login",
            {"username": "test-token", "password": "testpassword"},
            content_type=CONTENT_TYPE,
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "User successfully logged in."})

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
