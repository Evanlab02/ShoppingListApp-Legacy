"""Contains Django Ninja Schema objects for the shoppingitem app."""

from ninja import Schema, ModelSchema

from ..models import ShoppingStore, ShoppingItem


class StoreSchema(ModelSchema):
    """Schema for the Store model."""

    class Config:
        """Config for the StoreSchema."""

        model = ShoppingStore
        model_fields = ["name", "store_type"]


class ItemSchema(ModelSchema):
    """Schema for the Item model."""

    class Config:
        """Config for the ItemSchema."""

        model = ShoppingItem
        model_fields = ["name", "price", "store"]


class SuccessSchema(Schema):
    """Schema for the Upload model."""

    message: str


class ErrorSchema(Schema):
    """Schema for the Error model."""

    detail: str
