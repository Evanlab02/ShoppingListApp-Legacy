"""Contains the client repository."""

from ..models import Client
from ..types import User


class ClientRepository:
    """
    Client repository.

    Methods:
        get_client(user: User) -> Client | None
    """

    def get_client(self, user: User) -> Client | None:
        """
        Get a client if it exists, otherwise return None.

        Args:
            user (User): The user to get the client for.

        Returns:
            Client | None: The client if it exists, otherwise None.
        """
        try:
            client = Client.objects.get(user=user)
        except Client.DoesNotExist:
            client = None
        return client

    def generate_token(self, user: User):
        """
        Generate a token for a user.

        Args:
            user (User): The user to generate the token for.

        Returns:
            str: The generated token.
        """
        client = None

        try:
            client = Client.objects.filter(user=user).get()
        except Client.DoesNotExist:
            client = None

        if client is None:
            client = Client.objects.create(user=user)
            client.save()

        client.generate_token()

        return client.token
