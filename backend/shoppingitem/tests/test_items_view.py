"""Contains tests for the items view."""

import pytest

from django.contrib.auth.models import User
from django.test import Client, TestCase

from ..models import ShoppingItem, ShoppingStore

TEST_EMAIL = "user@test.com"
FONT = '<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">'
ITEMS_URL = "/items/"


class TestItemView(TestCase):
    """Test the items view."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self):
        """Set up the test environment."""
        self.client = Client()
        self.user = User.objects.create_user(
            username="testuser",
            email=TEST_EMAIL,
            password="testpassword",
            first_name="test",
            last_name="user",
        )
        self.user.save()
        self.client.login(username="testuser", password="testpassword")

    def test_view_with_no_items(self):
        """Test the user items view with no items."""
        response = self.client.get(ITEMS_URL)

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "items/items_list_view.html")

        # Contains font link
        self.assertContains(response, FONT)

        # Contains page title
        self.assertContains(response, "<title>Shopping App</title>")

        # Contains correct page header
        self.assertContains(response, "<h2>All Shopping Items</h2>")

        # Contains links to relevant pages
        self.assertContains(response, "/shopping/dashboard/")
        self.assertContains(response, "/items/")
        self.assertContains(response, "/stores/me")

        # Contains info on total items
        self.assertContains(response, '<p class="value">Total items</p>')
        self.assertContains(
            response, '<p id="total-items-sub-value" class="sub-value">0</p>'
        )

        # Contains info on total price
        self.assertContains(response, '<p class="value">Total price of items</p>')
        self.assertContains(
            response, '<p id="total-price-sub-value" class="sub-value">0</p>'
        )

        # Contains info on average price
        self.assertContains(response, '<p class="value">Average price of items</p>')
        self.assertContains(
            response, '<p id="average-price-sub-value" class="sub-value">0</p>'
        )

        # Contains caption for table
        self.assertContains(response, "<caption>All Items</caption>")

        # Contains table headers
        self.assertContains(response, "<th>Name</th>")
        self.assertContains(response, "<th>Store</th>")
        self.assertContains(response, "<th>Price</th>")
        self.assertContains(response, "<th>Owner</th>")

    def test_item_view_with_items(self):
        """Tests the user items view with items."""
        store = ShoppingStore.objects.create(
            name="Test Store",
            store_type=1,
            description="Test Description",
            user=self.user,
        )
        store.save()

        item = ShoppingItem.objects.create(
            name="Test Item",
            store=store,
            price=10,
            user=self.user,
        )
        item.save()

        response = self.client.get(ITEMS_URL)

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "items/items_list_view.html")

        # Contains data for item
        self.assertContains(
            response, f'<td><a href="/items/detail/{item.id}">{item.name}</a></td>'
        )
        self.assertContains(
            response,
            f'<td><a href="/items/stores/detail/{ item.store.id }">{item.store}</a></td>',
        )
        self.assertContains(response, f"<td>{item.price}.00</td>")
        self.assertContains(response, f"<td>{item.user.username}</td>")
