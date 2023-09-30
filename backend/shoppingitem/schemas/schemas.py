"""Contains schemas for shopping item app."""

from ninja import ModelSchema

from ..models import ShoppingItem


class ShoppingItemModelSchema(ModelSchema):
    """Schema for the shopping item model."""

    class Config:
        """Configuration for the schema."""

        model = ShoppingItem
        model_fields = ["name", "price"]
