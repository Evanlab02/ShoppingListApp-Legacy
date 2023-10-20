"""Contains a render helper class for the shoppingitem app."""

from ..database import ItemRepository, StoreRepository
from ..helpers import Paginator, render
from ..types import HttpRequest, HttpResponse


class RenderHelper:
    """The render helper class."""

    def __init__(self) -> None:
        """Set up the render helper class."""
        self.item_repo = ItemRepository()
        self.store_repo = StoreRepository()

    def render_item_overview_page(
        self, req: HttpRequest, is_user_page: bool = False
    ) -> HttpResponse:
        """
        Render the overview page based on the values passed in.

        Args:
            req(HttpRequest): The request object.
            items(list[ShoppingItem]): The items to render.

        Returns:
            HttpResponse: The rendered item overview page.
        """
        if is_user_page:
            items = self.item_repo.get_all_items_for_user(req.user)
        else:
            items = self.item_repo.get_all_items()

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

    def render_store_overview_page(
        self, req: HttpRequest, is_user_page: bool = False
    ) -> HttpResponse:
        """
        Render the store overview page based on the values passed in.

        Args:
            req(HttpRequest): The request object.
            stores(list[ShoppingStore]): The stores to render.

        Returns:
            HttpResponse: The rendered store overview page.
        """
        if is_user_page:
            stores = self.store_repo.get_all_stores_for_user(req.user)
        else:
            stores = self.store_repo.get_all_stores()

        total_stores = stores.count()

        page_no = req.GET.get("page", 1)
        paginator = Paginator(stores, 10)
        page = paginator.get_page(page_no)
        stores = page.object_list

        page_title = "Your Stores" if is_user_page else "All Stores"
        table_caption = (
            f"{req.user.username}'s Stores" if is_user_page else "All Stores"
        )
        add_user_col = not is_user_page

        in_store_stores = 0
        online_stores = 0

        if add_user_col:
            in_store_stores = self.store_repo.count_stores_by_type(2)
            online_stores = self.store_repo.count_stores_by_type(1)
            in_store_stores += self.store_repo.count_stores_by_type(3)
            online_stores += self.store_repo.count_stores_by_type(3)
        else:
            user = req.user
            in_store_stores = self.store_repo.count_stores_by_type_for_user(2, user)
            online_stores = self.store_repo.count_stores_by_type_for_user(1, user)
            in_store_stores += self.store_repo.count_stores_by_type_for_user(3, user)
            online_stores += self.store_repo.count_stores_by_type_for_user(3, user)

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

    def render_item_detail_view(self, req: HttpRequest, item_id: int) -> HttpResponse:
        """
        Render the item detail view.

        Args:
            req(HttpRequest): The request object.
            item_id(int): The id of the item to render.

        Returns:
            HttpResponse: The rendered item detail view.
        """
        item = self.item_repo.get_item_by_id(item_id)
        number_of_lists = self.item_repo.get_number_of_lists_linked_to_item(item)

        return render(
            req,
            "items/item_detail.html",
            context={
                "item": item,
                "number_of_lists": number_of_lists,
            },
        )

    def render_store_detail_view(
        self, request: HttpRequest, store_id: int
    ) -> HttpResponse:
        """
        Render the store detail view.

        Args:
            request(HttpRequest): The request object.
            store_id(int): The id of the store to render.

        Returns:
            HttpResponse: The rendered store detail view.
        """
        store = self.store_repo.get_store_by_id(store_id)
        number_of_items = self.item_repo.count_items_from_store(store)
        items = self.item_repo.get_items_from_store(store)

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

    def render_item_create_page(self, req: HttpRequest) -> HttpResponse:
        """
        Render the item create page.

        Args:
            req(HttpRequest): The request object.

        Returns:
            HttpResponse: The rendered item create page.
        """
        error = req.GET.get("error")
        stores = self.store_repo.get_all_stores()
        return render(
            req,
            "items/item_create.html",
            context={
                "stores": stores,
                "error": error,
            },
        )

    def render_store_create_page(self, req: HttpRequest) -> HttpResponse:
        """
        Render the store create page.

        Args:
            req(HttpRequest): The request object.

        Returns:
            HttpResponse: The rendered store create page.
        """
        error = req.GET.get("error")
        return render(
            req,
            "items/store_create.html",
            context={
                "error": error,
            },
        )
