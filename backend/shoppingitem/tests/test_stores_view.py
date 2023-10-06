"""Contains tests for the stores view."""

import pytest

from django.contrib.auth.models import User
from django.test import Client, TestCase

from ..models import ShoppingItem, ShoppingStore

TEST_EMAIL = "user@test.com"
FONT = '<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">'
STORES_URL = "/items/stores"


class TestStoreView(TestCase):
    """Test the user items view."""

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

    def test_view_with_no_stores(self):
        """Test the user stores view with no stores."""
        response = self.client.get(STORES_URL)

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "items/store_list_view.html")

        # Contains font link
        self.assertContains(response, FONT)

        # Contains page title
        self.assertContains(response, "<title>Shopping App</title>")

        # Contains correct page header
        self.assertContains(response, "<h2>All Stores</h2>")

        # Contains links to relevant pages
        self.assertContains(response, "/shopping/dashboard/")
        self.assertContains(response, "/items/stores/me")
        self.assertContains(response, "/items/me")

        # Contains info on total stores
        self.assertContains(response, '<p class="value">Total stores</p>')
        self.assertContains(
            response, '<p id="total-items-sub-value" class="sub-value">0</p>'
        )

        # Contains info on total price
        self.assertContains(response, '<p class="value">Total in-store stores</p>')
        self.assertContains(
            response, '<p id="total-price-sub-value" class="sub-value">0</p>'
        )

        # Contains info on average price
        self.assertContains(response, '<p class="value">Total online stores</p>')
        self.assertContains(
            response, '<p id="average-price-sub-value" class="sub-value">0</p>'
        )

        # Contains caption for table
        self.assertContains(response, "<caption>All Stores</caption>")

        # Contains table headers
        self.assertContains(response, "<th>Name</th>")
        self.assertContains(response, "<th>Store Type</th>")
        self.assertContains(response, "<th>Description</th>")
        self.assertContains(response, "<th>Owner</th>")

    def test_store_view_with_stores(self):
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

        response = self.client.get(STORES_URL)

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "items/store_list_view.html")

        # Contains data for item
        self.assertContains(
            response,
            f'<td><a href="/items/stores/detail/{store.id}">{store.name}</a></td>',
        )
        self.assertContains(
            response,
            "<td>Online</td>",
        )
        self.assertContains(response, "<td>Test Description</td>")
        self.assertContains(response, "<td>testuser</td>")
