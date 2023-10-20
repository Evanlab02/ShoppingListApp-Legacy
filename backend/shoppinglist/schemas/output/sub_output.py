"""Contains output sub-schemas for the shopping list app."""

from shoppinglist.types import Schema


class BarChartDataset(Schema):
    """Schema for the bar chart dataset."""

    label: str
    data: list[int]
