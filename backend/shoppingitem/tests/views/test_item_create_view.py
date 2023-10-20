"""Contains tests for the item create view."""

import pytest

from shoppingitem.models import ShoppingStore
from ..helpers import TestCase, DjangoClient, create_test_user, does_match_base_criteria

ITEMS_CREATE_VIEW = "/items/create"


class TestItemCreateView(TestCase):
    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Set up the tests."""
        self.client = DjangoClient()
        self.user = create_test_user()
        self.client.force_login(self.user)
        self.store = ShoppingStore.objects.create(
            name="Test Store",
            description="Test Description",
            store_type=1,
            user=self.user,
        )
        self.store.save()
        self.response = self.client.get(ITEMS_CREATE_VIEW)

    def test_response(self) -> None:
        """Test that the response matches all criteria."""
        does_match_base_criteria(self, self.response)

        # Template used is items/item_create.html
        self.assertTemplateUsed(self.response, "items/item_create.html")

        # Contains navbar heading
        self.assertContains(self.response, "<h2>Create Item</h2>")

        # Contains form heading
        self.assertContains(
            self.response, '<h2 id="form-heading">Create Shopping Item</h2>'
        )

        # Contains form
        self.assertContains(
            self.response,
            '<form class="form-bottom" action="/items/create/item/action" method="post">',
        )

        # Contains legend
        self.assertContains(self.response, "<legend>Shopping Item Details</legend>")

        # Contains name label
        self.assertContains(self.response, '<label for="item-input">Item:</label>')

        # Contains name input
        self.assertContains(
            self.response,
            '<input class="text-input" type="text" name="item-input" id="item-input">',
        )

        # Contains store label
        self.assertContains(self.response, '<label for="store-input">Store:</label>')

        # Contains store input
        self.assertContains(
            self.response,
            '<select class="text-input" name="store-input" id="store-input">',
        )

        # Contains store option
        self.assertContains(
            self.response,
            '<option value="Test Store">Test Store</option>',
        )

        # Contains price label
        self.assertContains(self.response, '<label for="price-input">Price:</label>')

        # Contains price input
        self.assertContains(
            self.response,
            '<input class="text-input" type="number" name="price-input" id="price-input">',
        )

        # Contains submit button
        self.assertContains(
            self.response,
            '<input class="submit-input" type="submit" value="Create Item">',
        )
