"""Contains schemas for shopping item app."""

from ..models import ShoppingItem
from ..types import ModelSchema


class ShoppingItemModelSchema(ModelSchema):
    """Schema for the shopping item model."""

    class Config:
        """Configuration for the schema."""

        model = ShoppingItem
        model_fields = ["name", "price"]
