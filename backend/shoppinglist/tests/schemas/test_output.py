"""
Contains test class for the output schemas.
"""

from django.test import TestCase

from shoppingitem.schemas.shared import ShoppingItemModelSchema
from shoppinglist.schemas.output import (
    DashboardCurrentSchema,
    DashboardRecentSchema,
    DashboardHistorySchema,
)
from shoppinglist.schemas.output.sub_output import BarChartDataset


class TestOutputSchemas(TestCase):
    """Contains tests for the output schemas."""

    def test_dashboard_current_schema(self):
        """Tests the dashboard current schema."""
        dashboard = DashboardCurrentSchema(
            total=1,
            total_price=100,
            budget_remaining=100,
            average_item_price=100,
        )

        self.assertEqual(dashboard.total, 1)
        self.assertEqual(dashboard.total_price, 100)
        self.assertEqual(dashboard.budget_remaining, 100)
        self.assertEqual(dashboard.average_item_price, 100)

    def test_dashboard_recent_schema(self):
        """Tests the dashboard recent schema."""
        items = [
            ShoppingItemModelSchema(
                name="test",
                price=100,
            )
        ]
        dashboard = DashboardRecentSchema(recent_items=items)

        self.assertEqual(dashboard.recent_items, items)

    def test_dashboard_history_schema(self):
        """Tests the dashboard history schema."""
        labels = ["test"]
        datasets = [
            BarChartDataset(
                label="test",
                data=[1, 2, 3],
            )
        ]
        dashboard = DashboardHistorySchema(labels=labels, datasets=datasets)

        self.assertEqual(dashboard.labels, labels)
        self.assertEqual(dashboard.datasets, datasets)
