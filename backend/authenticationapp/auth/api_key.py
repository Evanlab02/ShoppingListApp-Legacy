"""Contains the API key authentication helper class."""

from ..constants import API_KEY_PARAM
from ..database import ClientRepository, UserRepository
from ..models import Client
from ..types import APIKeyHeader, HttpRequest

CLIENT_REPO = ClientRepository()
USER_REPO = UserRepository()


class ApiKey(APIKeyHeader):
    """
    API key authentication helper class.

    Attributes:
        param_name (str): The name of the header parameter.

    Methods:
        authenticate(request: HttpRequest, key: str) -> Client | None
    """

    param_name = API_KEY_PARAM

    def authenticate(self, request: HttpRequest, key: str) -> Client | None:
        """
        Authenticate a user.

        Args:
            request (HttpRequest): The request to authenticate.
            key (str): The key to authenticate with.

        Returns:
            Client | None: The client if the authentication was successful, otherwise None.
        """
        if not USER_REPO.is_authenticated(request.user):
            return None

        client: Client = CLIENT_REPO.get_client(request.user)

        if client is None or key == "":
            return None
        elif key == client.token:
            return client
