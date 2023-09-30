"""Contains schemas for the shoppinglist app."""

from ninja import Schema

from shoppingitem.schemas.schemas import ShoppingItemModelSchema


class DashboardCurrentSchema(Schema):
    """Schema for the current dashboard route."""

    total: int | None
    total_price: float | None
    budget_remaining: float | None
    average_item_price: float | None


class DashboardRecentSchema(Schema):
    """Schema for the recent dashboard route."""

    recent_items: list[ShoppingItemModelSchema]


class BarChartDataset(Schema):
    """Schema for the bar chart dataset."""

    label: str
    data: list[int]


class DashboardHistorySchema(Schema):
    """Schema for the history dashboard route."""

    labels: list[str]
    datasets: list[BarChartDataset]
