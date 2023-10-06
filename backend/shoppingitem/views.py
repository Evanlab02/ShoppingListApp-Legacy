"""Contains the shoppingitem app views."""

from django.core.paginator import Paginator
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods

from .models import ShoppingItem


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
    

def render_item_overview_page(req: HttpRequest, items: list[ShoppingItem], is_user_page: bool = False) -> HttpResponse:
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
