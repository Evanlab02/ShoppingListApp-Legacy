"""Contains schemas for the authentication app."""

from ninja import Schema


class RegisterSchema(Schema):
    """
    Schema for the register endpoint.

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


class LoginSchema(Schema):
    """
    Schema for the login endpoint.

    attributes:
        username: str
        password: str
    """

    username: str
    password: str


class ErrorSchema(Schema):
    """
    Schema for the error response.

    attributes:
        detail: str
    """

    detail: str


class SuccessSchema(Schema):
    """
    Schema for the success response.

    attributes:
        message: str
    """

    message: str
