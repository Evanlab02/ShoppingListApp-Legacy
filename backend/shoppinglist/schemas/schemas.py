"""Contains Django Ninja Schema objects for the shoppinglist app."""

from ninja import ModelSchema, Schema

from ..models import ShoppingList


class ShoppingListSchema(ModelSchema):
    """Schema for the ShoppingList model."""

    class Config:
        """Config for the ShoppingListSchema."""

        model = ShoppingList
        model_fields = ["id", "name", "description", "start_date", "end_date"]


class SingleShoppingListSchema(ModelSchema):
    """Schema for the ShoppingList model."""

    class Config:
        """Config for the ShoppingListSchema."""

        model = ShoppingList
        model_fields = ["name", "description", "start_date", "end_date", "items"]


class InputShoppingListSchema(ModelSchema):
    """Schema for the ShoppingList model."""

    class Config:
        """Config for the ShoppingListSchema."""

        model = ShoppingList
        model_fields = ["name", "description", "start_date", "end_date"]


class SuccessSchema(Schema):
    """Schema for the Upload model."""

    message: str


class ErrorSchema(Schema):
    """Schema for the Error model."""

    detail: str
