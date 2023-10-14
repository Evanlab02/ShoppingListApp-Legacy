"""Contains tests for the Client model."""

import pytest

from ..helpers import TestCase, create_test_user, create_test_user_client, timezone


class TestClient(TestCase):
    """Test the Client model."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Set up the tests."""
        self.user = create_test_user()
        self.user_client = create_test_user_client(self.user)
        return super().setUp()

    def test_client(self):
        """Test the Client model."""
        assert self.user_client.user == self.user
        assert self.user_client.token == ""
        assert self.user_client.token_expiration is None

    def test_client_str(self):
        """Test the client __str__ method."""
        assert str(self.user_client) == f"{self.user.username} ({self.user.email})"

    def test_client_generate_token(self):
        """Test the client generate_token method."""
        self.user_client.generate_token()
        assert self.user_client.token != ""
        assert self.user_client.token_expiration is not None
        assert self.user_client.token_expiration > timezone.now()
