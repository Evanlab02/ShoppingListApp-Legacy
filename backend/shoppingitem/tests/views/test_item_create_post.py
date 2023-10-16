"""Test item create post view."""

import pytest

from shoppingitem.models import ShoppingItem, ShoppingStore
from ..helpers import TestCase, DjangoClient, create_test_user

CREATE_POST_URL = "/items/create/item/action"


class TestCreatePostView(TestCase):
    """Test the create post view."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Set up the test environment."""
        self.client = DjangoClient()
        self.user = create_test_user()
        self.client.force_login(self.user)
        return super().setUp()

    def test_that_redirects_when_no_data_given(self):
        """Should redirect to the create page with an error."""
        response = self.client.post(CREATE_POST_URL)
        self.assertRedirects(
            response,
            "/items/create/error?error=Please+fill+in+all+fields.",
            301,
            200,
            fetch_redirect_response=False,
        )

    def test_that_redirects_when_no_name_given(self):
        """Should redirect to the create page with an error."""
        response = self.client.post(CREATE_POST_URL, {"item-input": ""})
        self.assertRedirects(
            response,
            "/items/create/error?error=Please+fill+in+all+fields.",
            301,
            200,
            fetch_redirect_response=False,
        )

    def test_that_redirects_when_no_store_given(self):
        """Should redirect to the create page with an error."""
        response = self.client.post(CREATE_POST_URL, {"item-input": "test"})
        self.assertRedirects(
            response,
            "/items/create/error?error=Please+fill+in+all+fields.",
            301,
            200,
            fetch_redirect_response=False,
        )

    def test_that_redirects_when_no_price_given(self):
        """Should redirect to the create page with an error."""
        response = self.client.post(
            CREATE_POST_URL, {"item-input": "test", "store-input": "test"}
        )
        self.assertRedirects(
            response,
            "/items/create/error?error=Please+fill+in+all+fields.",
            301,
            200,
            fetch_redirect_response=False,
        )

    def test_that_redirects_if_item_already_exists(self):
        """Should redirect to the create page with an error."""
        store = ShoppingStore.objects.create(
            name="test-store",
            description="test-description",
            store_type=1,
            user=self.user,
        )
        store.save()

        item = ShoppingItem.objects.create(
            name="test-item",
            store=store,
            price=1,
            user=self.user,
        )
        item.save()

        response = self.client.post(
            CREATE_POST_URL,
            {"item-input": "test-item", "store-input": "test-store", "price-input": 10},
        )
        self.assertRedirects(
            response,
            "/items/create/error?error=Item+already+exists.",
            301,
            200,
            fetch_redirect_response=False,
        )

    def test_that_redirects_if_price_is_not_numeric(self):
        """Should redirect to the create error page when the price is not numeric."""
        store = ShoppingStore.objects.create(
            name="test-store",
            description="test-description",
            store_type=1,
            user=self.user,
        )
        store.save()

        item = ShoppingItem.objects.create(
            name="test-item",
            store=store,
            price=1,
            user=self.user,
        )
        item.save()

        response = self.client.post(
            CREATE_POST_URL,
            {"item-input": "test-item-two", "store-input": "test-store", "price-input": "a"},
        )

        self.assertRedirects(
            response,
            "/items/create/error?error=Price+must+be+a+number.",
            301,
            200,
            fetch_redirect_response=False,
        )

    def test_that_redirects_if_price_is_less_than_zero(self):
        """Should redirect to the create error page when the price is less than zero."""
        store = ShoppingStore.objects.create(
            name="test-store",
            description="test-description",
            store_type=1,
            user=self.user,
        )
        store.save()

        item = ShoppingItem.objects.create(
            name="test-item",
            store=store,
            price=1,
            user=self.user,
        )
        item.save()

        response = self.client.post(
            CREATE_POST_URL,
            {"item-input": "test-item-two", "store-input": "test-store", "price-input": -5},
        )

        self.assertRedirects(
            response,
            "/items/create/error?error=Price+must+be+a+number.",
            301,
            200,
            fetch_redirect_response=False,
        )

    def test_that_redirects_if_price_is_zero(self):
        """Should redirect to the create error page when the price is zero."""
        store = ShoppingStore.objects.create(
            name="test-store",
            description="test-description",
            store_type=1,
            user=self.user,
        )
        store.save()

        item = ShoppingItem.objects.create(
            name="test-item",
            store=store,
            price=1,
            user=self.user,
        )
        item.save()

        response = self.client.post(
            CREATE_POST_URL,
            {"item-input": "test-item-two", "store-input": "test-store", "price-input": 0},
        )

        self.assertRedirects(
            response,
            "/items/create/error?error=Price+cannot+be+negative+and+must+be+greater+than+0.",
            301,
            200,
            fetch_redirect_response=False,
        )

    def test_that_item_gets_created(self):
        """Should redirect to the create error page when the price is zero."""
        store = ShoppingStore.objects.create(
            name="test-store",
            description="test-description",
            store_type=1,
            user=self.user,
        )
        store.save()

        item = ShoppingItem.objects.create(
            name="test-item",
            store=store,
            price=1,
            user=self.user,
        )
        item.save()

        response = self.client.post(
            CREATE_POST_URL,
            {"item-input": "test-item-two", "store-input": "test-store", "price-input": 50},
        )

        item = ShoppingItem.objects.get(name="test-item-two")

        self.assertRedirects(
            response,
            f"/items/detail/{item.id}",
            301,
            200,
            fetch_redirect_response=False,
        )

        self.assertEqual(item.name, "test-item-two")
        self.assertEqual(item.store.name, "test-store")
        self.assertEqual(item.price, 50)
        self.assertEqual(item.user, self.user)
