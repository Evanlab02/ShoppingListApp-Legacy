"""Contains tests for the client repository."""

import pytest

from authenticationapp.database import ClientRepository
from ..helpers import (
    TestCase,
    create_test_user,
    create_test_user_client,
    create_secondary_test_user,
)


class TestClientRepo(TestCase):
    """Test the Client repository."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Set up the tests."""
        self.client_repo = ClientRepository()
        self.user = create_test_user()
        self.user_client = create_test_user_client(self.user)
        return super().setUp()

    def test_get_client(self):
        """Test the get_client method."""
        client = self.client_repo.get_client(self.user)
        assert client == self.user_client

    def test_get_client_that_does_not_exist(self):
        """Test the get_client method with a client that does not exist."""
        secondary_user = create_secondary_test_user()
        client = self.client_repo.get_client(secondary_user)
        assert client is None

    def test_generate_token(self):
        """Test the generate_token method."""
        token = self.client_repo.generate_token(self.user)
        self.user_client.refresh_from_db()

        assert token == self.user_client.token
        assert self.user_client.token_expiration is not None

    def test_generate_token_for_secondary_user(self):
        """Test the generate_token method for a secondary user."""
        secondary_user = create_secondary_test_user()
        token = self.client_repo.generate_token(secondary_user)
        secondary_user_client = self.client_repo.get_client(secondary_user)

        assert token == secondary_user_client.token
        assert secondary_user_client.token_expiration is not None
