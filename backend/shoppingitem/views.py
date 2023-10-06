"""Contains the shoppingitem app views."""

from django.core.paginator import Paginator
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render

from .models import ShoppingItem


def item_user_overview_page(request: HttpRequest) -> HttpResponse:
    """
    Render the item user overview page.

    Args:
        request(HttpRequest): The request object.

    Returns:
        HttpResponse: The rendered item user overview page.
    """
    items = ShoppingItem.objects.filter(user=request.user)
    total_items = items.count()
    total_price = sum([item.price for item in items])
    average_price = 0

    if total_items > 0:
        average_price = total_price / total_items
        average_price = round(average_price, 2)

    page_no = request.GET.get("page", 1)
    paginator = Paginator(items, 10)
    page = paginator.get_page(page_no)
    items = page.object_list

    return render(
        request,
        "items/items_list_view.html",
        context={
            "items": items,
            "total": total_items,
            "total_price": total_price,
            "average_price": average_price,
            "page_title": "Your Shopping Items",
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
