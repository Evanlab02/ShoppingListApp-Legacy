"""Contains the Django Ninja routes for the shoppingitem app."""

from django.http import HttpRequest
from ninja import Router

from authenticationapp.auth.app_auth import ApiKey
from ..models import ShoppingStore as Store, ShoppingItem as Item
from ..schemas.schemas import SuccessSchema, ErrorSchema, StoreSchema, ItemSchema
from ..validation.validation import validate_store, validate_item

api_key = ApiKey()

shop_router = Router(auth=api_key, tags=["Shopping Stores"])
item_router = Router(auth=api_key, tags=["Shopping Items"])

@shop_router.post(
    "/create", response={201: SuccessSchema, 400: ErrorSchema}
)
def create_store(request: HttpRequest, payload: StoreSchema):
    """
    Create a new store.

    Args:
        request (HttpRequest): The request object.
        payload (StoreSchema): The store data.

    Returns:
        (int, SuccessSchema | ErrorSchema): The status code and the response schema.
    """
    try:
        validate_store(payload)
    except ValueError as err:
        return 400, ErrorSchema(detail=str(err))

    store = Store.objects.create(**payload.dict(), user=request.user)
    store.save()
    return 201, SuccessSchema(message="Store created successfully")

@shop_router.get(
    "", response={200: list[StoreSchema]}
)
def get_stores(request: HttpRequest):
    """
    Get all the stores.

    Args:
        request (HttpRequest): The request object.

    Returns:
        (int, [StoreSchema] | ErrorSchema): The status code and the response schema.
    """
    stores = Store.objects.all()
    return 200, [StoreSchema.from_orm(store) for store in stores]


@item_router.post(
    "/create", response={201: SuccessSchema, 400: ErrorSchema}
)
def create_item(request: HttpRequest, payload: ItemSchema):
    """
    Create a new item.

    Args:
        request (HttpRequest): The request object.
        payload (ItemSchema): The item data.

    Returns:
        (int, SuccessSchema | ErrorSchema): The status code and the response schema.
    """
    try:
        store = validate_item(payload)
        item = Item.objects.create(
            name=payload.name, price=payload.price, store=store, user=request.user
        )
        item.save()
        return 201, SuccessSchema(message="Item created successfully")
    except ValueError as err:
        return 400, ErrorSchema(detail=str(err))
