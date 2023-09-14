"""Contains the Django Ninja routes for the shoppingitem app."""

from django.http import HttpRequest
from ninja import Router

from authenticationapp.auth.app_auth import ApiKey
from ..models import ShoppingStore as Store, ShoppingItem as Item
from ..schemas.schemas import (
    SuccessSchema,
    ErrorSchema,
    StoreSchema,
    SingleItemSchema,
    ItemSchema,
    SingleStoreSchema,
)
from ..validation.validation import validate_store, validate_item

api_key = ApiKey()

shop_router = Router(auth=api_key, tags=["Shopping Stores"])
item_router = Router(auth=api_key, tags=["Shopping Items"])


@shop_router.post("/create", response={201: SuccessSchema, 400: ErrorSchema})
def create_store(request: HttpRequest, payload: SingleStoreSchema):
    """
    Create a new store.

    Args:
        request (HttpRequest): The request object.
        payload (SingleStoreSchema): The store data.

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


@shop_router.get("", response={200: list[StoreSchema]})
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


@shop_router.get("/me", response={200: list[StoreSchema]})
def get_my_stores(request: HttpRequest):
    """
    Get all the stores of the current user.

    Args:
        request (HttpRequest): The request object.

    Returns:
        (int, [StoreSchema] | ErrorSchema): The status code and the response schema.
    """
    stores = Store.objects.filter(user=request.user)
    return 200, [StoreSchema.from_orm(store) for store in stores]


@shop_router.get("/{store_id}", response={200: SingleStoreSchema, 404: ErrorSchema})
def get_details_of_store(request: HttpRequest, store_id: int):
    """
    Get the details of a store.

    Args:
        request (HttpRequest): The request object.
        store_id (int): The id of the store.

    Returns:
        (int, SingleStoreSchema | ErrorSchema): The status code and the response schema.
    """
    try:
        store = Store.objects.get(id=store_id)
        return 200, SingleStoreSchema.from_orm(store)
    except Store.DoesNotExist:
        return 404, ErrorSchema(detail="Store not found")


@shop_router.put(
    "/{store_id}", response={200: SuccessSchema, 400: ErrorSchema, 404: ErrorSchema}
)
def update_store(request: HttpRequest, store_id: int, payload: SingleStoreSchema):
    """
    Update the details of a store.

    Args:
        request (HttpRequest): The request object.
        store_id (int): The id of the store.
        payload (SingleStoreSchema): The store data.

    Returns:
        (int, SuccessSchema | ErrorSchema): The status code and the response schema.
    """
    try:
        validate_store(payload)
        store = Store.objects.get(id=store_id, user=request.user)
        store.name = payload.name
        store.store_type = payload.store_type
        store.description = payload.description
        store.save()
        return 200, SuccessSchema(message="Store updated successfully")
    except Store.DoesNotExist:
        return 404, ErrorSchema(
            detail="Store not found, or store does not belong to you"
        )
    except ValueError as err:
        return 400, ErrorSchema(detail=str(err))


@shop_router.delete("/{store_id}", response={200: SuccessSchema, 404: ErrorSchema})
def delete_store(request: HttpRequest, store_id: int):
    """
    Delete a store.

    Args:
        request (HttpRequest): The request object.
        store_id (int): The id of the store.

    Returns:
        (int, SuccessSchema | ErrorSchema): The status code and the response schema.
    """
    try:
        store = Store.objects.get(id=store_id, user=request.user)
        store.delete()
        return 200, SuccessSchema(message="Store deleted successfully")
    except Store.DoesNotExist:
        return 404, ErrorSchema(
            detail="Store not found, or store does not belong to you"
        )


@item_router.post("/create", response={201: SuccessSchema, 400: ErrorSchema})
def create_item(request: HttpRequest, payload: SingleItemSchema):
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

@item_router.get("", response={200: list[ItemSchema]})
def get_items(request: HttpRequest):
    """
    Get all the items.

    Args:
        request (HttpRequest): The request object.

    Returns:
        (int, [ItemSchema] | ErrorSchema): The status code and the response schema.
    """
    items = Item.objects.all()
    return 200, [ItemSchema.from_orm(item) for item in items]
