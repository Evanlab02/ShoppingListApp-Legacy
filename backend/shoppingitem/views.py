"""Contains the shoppingitem app views."""

from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods

from .database import ItemRepository, StoreRepository
from .helpers import RenderHelper
from .types import HttpRequest, HttpResponse, HttpResponsePermanentRedirect

RENDER_HELPER = RenderHelper()
ITEM_REPO = ItemRepository()
STORE_REPO = StoreRepository()


@login_required(login_url="/")
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


@login_required(login_url="/")
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


@login_required(login_url="/")
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


@login_required(login_url="/")
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


@login_required(login_url="/")
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


@login_required(login_url="/")
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


@login_required(login_url="/")
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


@login_required(login_url="/")
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


@login_required(login_url="/")
@require_http_methods(["POST"])
def create_item(request: HttpRequest) -> HttpResponse:
    """
    Create an item.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: Redirect to the item detail page or the item create page with an error.
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


@login_required(login_url="/")
@require_http_methods(["GET"])
def get_store_create_page(request: HttpRequest) -> HttpResponse:
    """
    Render the store create page.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered store create page.
    """
    return RENDER_HELPER.render_store_create_page(request)


@login_required(login_url="/")
@require_http_methods(["POST"])
def create_store(request: HttpRequest) -> HttpResponse:
    """
    Create a store.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: Redirect to the store detail page or the store create page with an error.
    """
    user = request.user
    name = request.POST.get("store-input")
    store_type = request.POST.get("store-type-input")
    description = request.POST.get("description-input") or ""

    try:
        store_type = int(store_type)
    except ValueError:
        return HttpResponsePermanentRedirect(
            "/items/stores/create?error=Store type must be a number."
        )

    if store_type not in [1, 2, 3]:
        return HttpResponsePermanentRedirect(
            "/items/stores/create?error=Invalid store type."
        )

    try:
        store = STORE_REPO.create_store(name, store_type, description, user)
    except ValueError as error:
        return HttpResponsePermanentRedirect(f"/items/stores/create?error={error}")

    return HttpResponsePermanentRedirect(f"/items/stores/detail/{store.id}")
