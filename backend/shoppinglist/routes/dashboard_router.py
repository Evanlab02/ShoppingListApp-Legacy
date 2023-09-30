"""Contains all the shopping list app's routes for dashboard pages."""

from datetime import datetime

from django.contrib.auth.models import User
from django.http import HttpRequest
from ninja import Router

from authenticationapp.auth.app_auth import ApiKey
from shoppingitem.helpers.utilities import get_recent_items

from ..helpers.constants import MONTH_MAPPING
from ..models import ShoppingList, ShoppingBudget
from ..schemas.schemas import (
    DashboardCurrentSchema,
    DashboardRecentSchema,
    DashboardHistorySchema,
)

dashboard_router = Router(tags=["Dashboard Routes"], auth=ApiKey())


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
    shopping_list: ShoppingList = ShoppingList.get_current(user)

    if shopping_list is None:
        return DashboardCurrentSchema()

    budget: ShoppingBudget = ShoppingBudget.objects.get(
        user=user, shopping_list=shopping_list.id
    )
    list_items = shopping_list.items.all()
    total = len(list_items)
    total_price = sum([item.price for item in list_items])
    budget_remaining = None

    if budget is not None:
        budget_remaining = budget.amount - total_price

    average_item_price = 0

    if total != 0:
        average_item_price = total_price / total

    return DashboardCurrentSchema(
        total=total,
        total_price=total_price,
        budget_remaining=budget_remaining,
        average_item_price=average_item_price,
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
    recent_items = get_recent_items()
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
    current_month = datetime.now().month
    labels = [MONTH_MAPPING[month] for month in range(1, current_month + 1)]
    list_data = [0 for _ in range(1, current_month + 1)]
    budget_data = [0 for _ in range(1, current_month + 1)]

    shopping_lists = ShoppingList.objects.filter(
        user=user, created_at__year=datetime.now().year
    )
    list_ids = []

    for shopping_list in shopping_lists:
        end_date = shopping_list.end_date
        month = end_date.month
        shopping_list_items = shopping_list.items.all()
        total_price = sum([item.price for item in shopping_list_items])
        list_data[month - 1] += total_price
        list_ids.append(shopping_list.id)

    shopping_budgets = ShoppingBudget.objects.filter(shopping_list__in=list_ids)

    for shopping_budget in shopping_budgets:
        end_date = shopping_budget.shopping_list.end_date
        month = end_date.month
        budget_data[month - 1] += shopping_budget.amount

    return DashboardHistorySchema(
        labels=labels,
        datasets=[
            {"label": "Price", "data": list_data},
            {"label": "Budget", "data": budget_data},
        ],
    )
