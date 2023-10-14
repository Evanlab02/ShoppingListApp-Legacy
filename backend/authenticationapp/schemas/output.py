"""Contains schemas that are used for outgoing responses."""

from ..types import Schema


class ErrorSchema(Schema):
    """
    Schema for when an error occurs.

    attributes:
        detail: str
    """

    detail: str


class SuccessSchema(Schema):
    """
    Schema for when the request was successful.

    attributes:
        message: str
    """

    message: str
