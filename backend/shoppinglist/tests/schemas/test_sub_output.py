"""Contains test class for the sub-output schemas."""

from django.test import TestCase
from shoppinglist.schemas.output.sub_output import BarChartDataset

class TestSubOutputSchemas(TestCase):
    """Contains tests for the sub-output schemas."""

    def test_bar_chart_dataset_schema(self):
        """Tests the bar chart dataset schema."""
        dataset = BarChartDataset(
            label="test",
            data=[1, 2, 3],
        )
        self.assertEqual(dataset.label, "test")
        self.assertEqual(dataset.data, [1, 2, 3])
