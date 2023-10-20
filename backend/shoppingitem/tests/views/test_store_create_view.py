"""Contains tests for the item create view."""

import pytest

from ..helpers import TestCase, DjangoClient, create_test_user, does_match_base_criteria

STORE_CREATE_VIEW = "/items/stores/create"


class TestItemCreateView(TestCase):
    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Set up the tests."""
        self.client = DjangoClient()
        self.user = create_test_user()
        self.client.force_login(self.user)
        self.response = self.client.get(STORE_CREATE_VIEW)

    def test_response(self) -> None:
        """Test that the response matches all criteria."""
        does_match_base_criteria(self, self.response)
        self.assertTemplateUsed(self.response, "items/store_create.html")

        self.assertContains(self.response, "<h2>Create Store</h2>")

        self.assertContains(
            self.response, '<h2 id="form-heading">Create Store</h2>'
        )

        self.assertContains(
            self.response,
            '<form class="form-bottom" action="/items/create/store/action" method="post">',
        )

        self.assertContains(self.response, "<legend>Store Details</legend>")

        self.assertContains(self.response, '<label for="store-input">Store:</label>')

        self.assertContains(
            self.response,
            '<input class="text-input" type="text" name="store-input" id="store-input">',
        )

        self.assertContains(self.response, '<label for="store-type-input">Store Type:</label>')

        self.assertContains(
            self.response,
            '<select class="text-input" name="store-type-input" id="store-type-input">',
        )

        self.assertContains(
            self.response,
            '<option value="1">Online</option>',
        )

        self.assertContains(
            self.response,
            '<option value="2">In-Store</option>',
        )

        self.assertContains(
            self.response,
            '<option value="3">Both</option>',
        )

        self.assertContains(self.response, '<label for="description-input">Description:</label>')

        self.assertContains(
            self.response,
            '<input class="text-input" type="text" name="description-input" id="description-input">',
        )

        self.assertContains(
            self.response,
            '<input class="submit-input" type="submit" value="Create Store">',
        )
