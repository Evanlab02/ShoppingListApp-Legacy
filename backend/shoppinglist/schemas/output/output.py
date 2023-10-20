"""Contains output schemas for the shopping list app."""

from shoppingitem.schemas import ShoppingItemModelSchema
from shoppinglist.types import Schema
from .sub_output import BarChartDataset


class DashboardCurrentSchema(Schema):
    """Schema for the current dashboard route."""

    total: int | None
    total_price: float | None
    budget_remaining: float | None
    average_item_price: float | None


class DashboardRecentSchema(Schema):
    """Schema for the recent dashboard route."""

    recent_items: list[ShoppingItemModelSchema]


class DashboardHistorySchema(Schema):
    """Schema for the history dashboard route."""

    labels: list[str]
    datasets: list[BarChartDataset]
