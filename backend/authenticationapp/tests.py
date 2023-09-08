"""Contains tests for the authentication app."""
from django.test import TestCase, Client

class TestAuthentication(TestCase):
    """Tests for the authentication app."""

    def test_register(self):
        """Test the register endpoint."""
        client = Client()
        client.get("/api/auth/logout")

        response = client.post(
            "/api/auth/register",
            {
                "username": "test",
                "email": "test@testuser.com",
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json(), {"message": "User successfully registered."})        

    def test_login(self):
        """Test the login endpoint."""
        client = Client()
        client.get("/api/auth/logout")

        response = client.post(
            "/api/auth/register",
            {
                "username": "test-login",
                "email": "test@login.com",
                "password": "testpassword",
                "first_name": "test",
                "last_name": "user",
            },
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json(), {"message": "User successfully registered."})

        response = client.post(
            "/api/auth/login",
            {"username": "test-login", "password": "testpass"},
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.json(), {"detail": "Invalid credentials."})

        response = client.post(
            "/api/auth/login",
            {"username": "test-login", "password": "testpassword"},
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "User successfully logged in."})
        
        response = client.post(
            "/api/auth/login",
            {"username": "test-login", "password": "testpassword"},
            content_type="application/json",
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
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json(), {"message": "User successfully registered."})

        response = client.post(
            "/api/auth/login",
            {"username": "test-logout", "password": "testpassword"},
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "User successfully logged in."})

        response = client.get("/api/auth/logout")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "User successfully logged out."})

        response = client.get("/api/auth/logout")

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), {"detail": "User is not authenticated."})
