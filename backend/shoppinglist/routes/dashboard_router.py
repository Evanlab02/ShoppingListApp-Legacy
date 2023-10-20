"""Contains all the shopping list app's routes for dashboard pages."""

from authenticationapp.auth import ApiKey
from shoppingitem.database import ItemRepository

from ..database import ShoppingListRepository, BudgetRepository
from ..models import ShoppingList
from ..schemas.output import (
    DashboardCurrentSchema,
    DashboardRecentSchema,
    DashboardHistorySchema,
)
from ..types import User, HttpRequest, Router

dashboard_router = Router(tags=["Dashboard Routes"], auth=ApiKey())

ITEM_REPO = ItemRepository()
LIST_REPOSITORY = ShoppingListRepository()
BUDGET_REPOSITORY = BudgetRepository()


@dashboard_router.get("current", response={200: DashboardCurrentSchema})
def get_current_shopping_list_dashboard_data(request: HttpRequest):
    """
    Return the current shopping list dashboard data.

    Args:
        request (HttpRequest): The request object.

    Returns:
        DashboardCurrentSchema: The current shopping list dashboard data.
    """
    user: User = request.user
    shopping_list: ShoppingList = LIST_REPOSITORY.get_current(user)

    if shopping_list is None:
        return DashboardCurrentSchema()

    total_items = LIST_REPOSITORY.get_number_of_items_on_shopping_list(shopping_list.id)
    total_price = LIST_REPOSITORY.get_total_price_of_items_on_shopping_list(
        shopping_list.id
    )
    average_price = LIST_REPOSITORY.get_average_price_of_items_on_shopping_list(
        shopping_list.id
    )
    budget_remaining = BUDGET_REPOSITORY.get_budget_remaining_of_shopping_list(
        shopping_list.id
    )

    return DashboardCurrentSchema(
        total=total_items,
        total_price=total_price,
        budget_remaining=budget_remaining,
        average_item_price=average_price,
    )


@dashboard_router.get("recent", response={200: DashboardRecentSchema})
def get_recent_5_items(request: HttpRequest):
    """
    Return the 5 most recent shopping items.

    Args:
        request (HttpRequest): The request object.

    Returns:
        DashboardRecentSchema: The 5 most recent shopping items.
    """
    recent_items = ITEM_REPO.get_recent_items()
    return DashboardRecentSchema(recent_items=recent_items)


@dashboard_router.get("history", response={200: DashboardHistorySchema})
def get_shopping_list_history(request: HttpRequest):
    """
    Return the shopping list history.

    Args:
        request (HttpRequest): The request object.

    Returns:
        DashboardHistorySchema: The shopping list history.
    """
    user: User = request.user

    history = BUDGET_REPOSITORY.get_price_history_current_year_for_user(user=user)

    return DashboardHistorySchema(
        labels=history.get("months", []),
        datasets=[
            {"label": "Price", "data": history.get("list_data", [])},
            {"label": "Budget", "data": history.get("budget_data", [])},
        ],
    )
