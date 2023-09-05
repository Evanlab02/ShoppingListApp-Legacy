"""Contains the Django Ninja routes for the shoppinglist app."""

from ninja import NinjaAPI

from ..models import ShoppingList
from ..schemas.schemas import ShoppingListSchema, UploadSchema, ErrorSchema
from ..validation.validation import validate_shoppinglist

list_api = NinjaAPI()


@list_api.post("/create", response={201: UploadSchema, 400: ErrorSchema})
def create_list(request, payload: ShoppingListSchema):
    """Create a new shopping list."""
    try:
        validate_shoppinglist(payload)
    except ValueError as err:
        return 400, ErrorSchema(message=str(err))

    shopping_list = ShoppingList.objects.create(**payload.dict())
    shopping_list.save()
    return 201, UploadSchema(message="Shopping list created successfully")
