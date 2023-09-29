"""Contains the Django Ninja routes for the shoppinglist app."""

from django.http import HttpRequest
from ninja import Router

from authenticationapp.auth.app_auth import ApiKey

from ..models import ShoppingList
from ..schemas.schemas import (
    ShoppingListSchema,
    SuccessSchema,
    ErrorSchema,
    SingleShoppingListSchema,
)
from ..validation.validation import validate_shoppinglist

api_key = ApiKey()
list_router = Router(auth=api_key, tags=["Shopping Lists"])


@list_router.post("/create", response={201: SuccessSchema, 400: ErrorSchema})
def create_list(request: HttpRequest, payload: ShoppingListSchema):
    """
    Create a new shopping list.

    Args:
        request (HttpRequest): The request object.
        payload (ShoppingListSchema): The shopping list data.

    Returns:
        (int, UploadSchema | ErrorSchema): The status code and the response schema.
    """
    try:
        validate_shoppinglist(payload, request.user)
    except ValueError as err:
        return 400, ErrorSchema(detail=str(err))

    shopping_list = ShoppingList.objects.create(
        **payload.dict(), user=request.auth.user
    )
    shopping_list.save()
    return 201, SuccessSchema(message="Shopping list created successfully")


@list_router.get("", response={200: list[ShoppingListSchema]})
def get_lists(request: HttpRequest):
    """
    Get all the shopping lists for the user.

    Args:
        request (HttpRequest): The request object.

    Returns:
        (int, ShoppingListSchema | ErrorSchema): The status code and the response schema.
    """
    shopping_lists = ShoppingList.objects.filter(user=request.auth.user)
    return 200, [ShoppingListSchema.from_orm(list) for list in shopping_lists]


@list_router.get(
    "/{list_id}", response={200: SingleShoppingListSchema, 404: ErrorSchema}
)
def get_list_details(request: HttpRequest, list_id: int):
    """
    Get the details of a shopping list.

    Args:
        request (HttpRequest): The request object.
        list_id (int): The id of the shopping list.

    Returns:
        (int, ShoppingListSchema | ErrorSchema): The status code and the response schema.
    """
    try:
        user = request.user
        shopping_list = ShoppingList.objects.get(id=list_id, user=user)
    except ShoppingList.DoesNotExist:
        return 404, ErrorSchema(detail="Shopping list not found")

    return 200, SingleShoppingListSchema.from_orm(shopping_list)
