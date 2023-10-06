"""Contains tests for the store detail view."""

import pytest

from django.contrib.auth.models import User
from django.test import Client, TestCase

from ..models import ShoppingItem, ShoppingStore

TEST_EMAIL = "user@test.com"
FONT = '<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">'
STORE_DETAIL_URL = "/items/stores/detail"


class TestStoreDetailView(TestCase):
    """Test the store detail view."""

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

    def test_view(self):
        """Test the user items view with no items."""
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

        response = self.client.get(f"{STORE_DETAIL_URL}/{store.id}")

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "items/store_detail.html")

        # Contains font link
        self.assertContains(response, FONT)

        # Contains page title
        self.assertContains(response, "<title>Shopping App</title>")

        # Contains correct page header
        self.assertContains(response, f"<h2>Store - {store.name}</h2>")

        # Contains links to relevant pages
        self.assertContains(response, "/shopping/dashboard/")
        self.assertContains(response, "/items/me")
        self.assertContains(response, "/stores/me")

        # Contains info on item name
        self.assertContains(response, '<p class="value">Store</p>')
        self.assertContains(
            response, f'<p id="store-name-sub-value" class="sub-value">{store.name}</p>'
        )

        # Contains info on item store
        self.assertContains(response, '<p class="value">Store Type</p>')
        self.assertContains(
            response, '<p id="store-type-sub-value" class="sub-value">Online</p>'
        )

        # Contains info on item price
        self.assertContains(response, '<p class="value">Number of items</p>')
        self.assertContains(
            response, '<p id="number-of-items-sub-value" class="sub-value">1</p>'
        )

        # Contains info on number of lists this item is in
        self.assertContains(response, '<p class="value">Created on</p>')

        # Contains info on item owner
        self.assertContains(response, '<p class="value">Created by</p>')
        self.assertContains(
            response,
            f'<p id="user-sub-value" class="sub-value">{item.user.username}</p>',
        )

        # Contains info on item last updated date
        self.assertContains(response, '<p class="value">Last updated</p>')
