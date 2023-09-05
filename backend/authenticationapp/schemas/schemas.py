"""Contains schemas for the authentication app."""

from ninja import Schema


class RegisterSchema(Schema):
    """Schema for the register endpoint."""

    username: str
    password: str
    email: str
    first_name: str
    last_name: str


class ErrorSchema(Schema):
    """Schema for the error response."""

    detail: str


class SuccessSchema(Schema):
    """Schema for the success response."""

    message: str
