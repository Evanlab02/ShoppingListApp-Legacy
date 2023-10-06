"""Contains the shoppingitem app views."""

from django.core.paginator import Paginator
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods

from shoppinglist.helpers.utilities import get_number_of_shopping_lists_linked_to_item
from .models import ShoppingItem, ShoppingStore


@require_http_methods(["GET"])
def item_user_overview_page(request: HttpRequest) -> HttpResponse:
    """
    Render the item user overview page.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered item user overview page.
    """
    items = ShoppingItem.objects.filter(user=request.user).order_by("-updated_at")
    return render_item_overview_page(request, items, True)


@require_http_methods(["GET"])
def item_overview_page(request: HttpRequest) -> HttpResponse:
    """
    Render the item overview page.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered item overview page.
    """
    items = ShoppingItem.objects.all().order_by("-updated_at")
    return render_item_overview_page(request, items)


def render_item_overview_page(
    req: HttpRequest, items: list[ShoppingItem], is_user_page: bool = False
) -> HttpResponse:
    """
    Render the overview page based on the values passed in.

    Args:
        req(HttpRequest): The request object.
        items(list[ShoppingItem]): The items to render.

    Returns:
        HttpResponse: The rendered item overview page.
    """
    total_items = items.count()
    total_price = sum([item.price for item in items])
    average_price = 0

    if total_items > 0:
        average_price = total_price / total_items
        average_price = round(average_price, 2)

    page_no = req.GET.get("page", 1)
    paginator = Paginator(items, 10)
    page = paginator.get_page(page_no)
    items = page.object_list

    page_title = "Your Shopping Items" if is_user_page else "All Shopping Items"
    table_caption = f"{req.user.username}'s Items" if is_user_page else "All Items"
    add_user_col = not is_user_page
    return render(
        req,
        "items/items_list_view.html",
        context={
            "items": items,
            "total": total_items,
            "total_price": total_price,
            "average_price": average_price,
            "page_title": page_title,
            "page_no": page_no,
            "total_pages": paginator.num_pages,
            "has_next": page.has_next(),
            "has_previous": page.has_previous(),
            "previous_page_no": page.previous_page_number()
            if page.has_previous()
            else None,
            "next_page_no": page.next_page_number() if page.has_next() else None,
            "table_caption": table_caption,
            "add_user_col": add_user_col,
        },
    )


@require_http_methods(["GET"])
def get_user_store_view(request: HttpRequest) -> HttpRequest:
    """
    Render the user store view.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered user store view.
    """
    stores = ShoppingStore.objects.filter(user=request.user).order_by("-updated_at")
    return render_store_overview_page(request, stores, True)


@require_http_methods(["GET"])
def get_store_view(request: HttpRequest) -> HttpRequest:
    """
    Render the store view.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered store view.
    """
    stores = ShoppingStore.objects.all().order_by("-updated_at")
    return render_store_overview_page(request, stores)


def render_store_overview_page(
    req: HttpRequest, stores: list[ShoppingStore], is_user_page: bool = False
) -> HttpResponse:
    """
    Render the store overview page based on the values passed in.

    Args:
        req(HttpRequest): The request object.
        stores(list[ShoppingStore]): The stores to render.

    Returns:
        HttpResponse: The rendered store overview page.
    """
    total_stores = stores.count()

    page_no = req.GET.get("page", 1)
    paginator = Paginator(stores, 10)
    page = paginator.get_page(page_no)
    stores = page.object_list

    page_title = "Your Stores" if is_user_page else "All Stores"
    table_caption = f"{req.user.username}'s Stores" if is_user_page else "All Stores"
    add_user_col = not is_user_page

    in_store_stores = 0
    online_stores = 0

    if add_user_col:
        in_store_stores = ShoppingStore.objects.filter(store_type=2).count()
        online_stores = ShoppingStore.objects.filter(store_type=1).count()
        in_store_stores += ShoppingStore.objects.filter(store_type=3).count()
        online_stores += ShoppingStore.objects.filter(store_type=3).count()
    else:
        in_store_stores = ShoppingStore.objects.filter(
            store_type=2, user=req.user
        ).count()
        online_stores = ShoppingStore.objects.filter(
            store_type=1, user=req.user
        ).count()
        in_store_stores += ShoppingStore.objects.filter(
            store_type=3, user=req.user
        ).count()
        online_stores += ShoppingStore.objects.filter(
            store_type=3, user=req.user
        ).count()

    return render(
        req,
        "items/store_list_view.html",
        context={
            "stores": stores,
            "total": total_stores,
            "page_title": page_title,
            "page_no": page_no,
            "total_pages": paginator.num_pages,
            "has_next": page.has_next(),
            "has_previous": page.has_previous(),
            "previous_page_no": page.previous_page_number()
            if page.has_previous()
            else None,
            "next_page_no": page.next_page_number() if page.has_next() else None,
            "table_caption": table_caption,
            "add_user_col": add_user_col,
            "in_store_stores": in_store_stores,
            "online_stores": online_stores,
        },
    )


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
    item = ShoppingItem.objects.get(id=item_id)
    number_of_lists = get_number_of_shopping_lists_linked_to_item(item)

    return render(
        request,
        "items/item_detail.html",
        context={
            "item": item,
            "number_of_lists": number_of_lists,
        },
    )


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
    store = ShoppingStore.objects.get(id=store_id)
    number_of_items = ShoppingItem.objects.filter(store=store).count()
    items = ShoppingItem.objects.filter(store=store).order_by("-updated_at")

    page_no = request.GET.get("page", 1)
    paginator = Paginator(items, 10)
    page = paginator.get_page(page_no)
    items = page.object_list

    return render(
        request,
        "items/store_detail.html",
        context={
            "store": store,
            "number_of_items": number_of_items,
            "items": items,
            "page_no": page_no,
            "total_pages": paginator.num_pages,
            "has_next": page.has_next(),
            "has_previous": page.has_previous(),
            "previous_page_no": page.previous_page_number()
            if page.has_previous()
            else None,
            "next_page_no": page.next_page_number() if page.has_next() else None,
        },
    )
