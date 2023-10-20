"""Contains tests for the schemas."""

from authenticationapp.schemas.input import NewUser, UserCredentials

from ..helpers import TestCase


class TestInputSchemas(TestCase):
    """Test the input schemas."""

    def test_new_user_schema(self):
        """Test the NewUser schema."""
        new_user = NewUser(
            username="test",
            password="test",
            email="test@gmail.com",
            first_name="test",
            last_name="user",
        )

        assert new_user.username == "test"
        assert new_user.password == "test"
        assert new_user.email == "test@gmail.com"
        assert new_user.first_name == "test"
        assert new_user.last_name == "user"

    def test_user_credentials_schema(self):
        """Test the UserCredentials schema."""
        user_credentials = UserCredentials(
            username="test",
            password="test",
        )

        assert user_credentials.username == "test"
        assert user_credentials.password == "test"
