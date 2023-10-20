"""Contains tests for the item create error view."""

from .test_item_create_view import TestItemCreateView

ITEMS_CREATE_VIEW = "/items/create/error?error=This+is+a+test+error."


class TestItemErrorView(TestItemCreateView):
    """Contains tests for the item create error view."""

    def test_response_extended(self) -> None:
        """Test that the response matches all criteria."""

        self.response = self.client.get(ITEMS_CREATE_VIEW)
        self.test_response()

        # Contains error message
        self.assertContains(
            self.response, '<p class="error-message">This is a test error.</p>'
        )
