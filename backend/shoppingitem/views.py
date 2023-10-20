"""Contains the shoppingitem app views."""

from .database import ItemRepository, StoreRepository
from .helpers import require_http_methods, RenderHelper
from .types import HttpRequest, HttpResponse, HttpResponsePermanentRedirect

RENDER_HELPER = RenderHelper()
ITEM_REPO = ItemRepository()
STORE_REPO = StoreRepository()


@require_http_methods(["GET"])
def item_user_overview_page(request: HttpRequest) -> HttpResponse:
    """
    Render the item user overview page.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered item user overview page.
    """
    return RENDER_HELPER.render_item_overview_page(request, True)


@require_http_methods(["GET"])
def item_overview_page(request: HttpRequest) -> HttpResponse:
    """
    Render the item overview page.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered item overview page.
    """
    return RENDER_HELPER.render_item_overview_page(request)


@require_http_methods(["GET"])
def get_user_store_view(request: HttpRequest) -> HttpRequest:
    """
    Render the user store view.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered user store view.
    """
    return RENDER_HELPER.render_store_overview_page(request, True)


@require_http_methods(["GET"])
def get_store_view(request: HttpRequest) -> HttpRequest:
    """
    Render the store view.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered store view.
    """
    return RENDER_HELPER.render_store_overview_page(request)


@require_http_methods(["GET"])
def get_item_detail_view(request: HttpRequest, item_id: int) -> HttpResponse:
    """
    Render the item detail view.

    Args:
        request(HttpRequest): The request object.
        item_id(int): The id of the item to render.

    Returns:
        HttpResponse: The rendered item detail view.
    """
    return RENDER_HELPER.render_item_detail_view(request, item_id)


@require_http_methods(["GET"])
def get_store_detail_view(request: HttpRequest, store_id: int) -> HttpResponse:
    """
    Render the store detail view.

    Args:
        request(HttpRequest): The request object.
        store_id(int): The id of the store to render.

    Returns:
        HttpResponse: The rendered store detail view.
    """
    return RENDER_HELPER.render_store_detail_view(request, store_id)


@require_http_methods(["GET"])
def get_item_create_page(request: HttpRequest) -> HttpResponse:
    """
    Render the item create page.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered item create page.
    """
    return RENDER_HELPER.render_item_create_page(request)


@require_http_methods(["GET"])
def get_item_create_page_with_error(request: HttpRequest) -> HttpResponse:
    """
    Render the item create page with an error.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered item create page with an error.
    """
    return RENDER_HELPER.render_item_create_page(request)


@require_http_methods(["POST"])
def create_item(request: HttpRequest) -> HttpResponse:
    """
    Create an item.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered item create page.
    """
    name = request.POST.get("item-input")
    store_name = request.POST.get("store-input")
    price = request.POST.get("price-input")

    if not name or not store_name or not price:
        return HttpResponsePermanentRedirect(
            "/items/create/error?error=Please fill in all fields."
        )

    store = STORE_REPO.get_store_by_name(store_name)
    clone_exists = ITEM_REPO.does_item_exist(name, store)

    if clone_exists:
        return HttpResponsePermanentRedirect(
            "/items/create/error?error=Item already exists."
        )

    if not price.isnumeric():
        return HttpResponsePermanentRedirect(
            "/items/create/error?error=Price must be a number."
        )

    if float(price) <= 0:
        return HttpResponsePermanentRedirect(
            "/items/create/error?error=Price cannot be negative and must be greater than 0."
        )

    item = ITEM_REPO.create_item(name, store, float(price), request.user)
    return HttpResponsePermanentRedirect(f"/items/detail/{item.id}")
