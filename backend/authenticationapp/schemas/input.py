"""Contains schemas that are used for incoming requests."""

from ..types import Schema


class NewUser(Schema):
    """
    Schema representing a new user.

    attributes:
        username: str
        password: str
        email: str
        first_name: str
        last_name: str
    """

    username: str
    password: str
    email: str
    first_name: str
    last_name: str


class UserCredentials(Schema):
    """
    Schema representing user credentials.

    attributes:
        username: str
        password: str
    """

    username: str
    password: str
