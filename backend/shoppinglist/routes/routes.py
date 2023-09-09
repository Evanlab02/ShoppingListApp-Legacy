"""Contains the Django Ninja routes for the shoppinglist app."""

from django.http import HttpRequest
from ninja import Router

from authenticationapp.auth.app_auth import ApiKey

from ..models import ShoppingList
from ..schemas.schemas import ShoppingListSchema, SuccessSchema, ErrorSchema
from ..validation.validation import validate_shoppinglist

api_key = ApiKey()
list_router = Router(auth=api_key)


@list_router.post(
    "/create", response={201: SuccessSchema, 400: ErrorSchema, 401: ErrorSchema}
)
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
        validate_shoppinglist(payload)
    except ValueError as err:
        return 400, ErrorSchema(detail=str(err))

    shopping_list = ShoppingList.objects.create(
        **payload.dict(), user=request.auth.user
    )
    shopping_list.save()
    return 201, SuccessSchema(message="Shopping list created successfully")
