"""Test item create post view."""

import pytest

from shoppingitem.models import ShoppingStore
from ..helpers import TestCase, DjangoClient, create_test_user

CREATE_POST_URL = "/items/create/store/action"
TEST_STORE_NAME = "test-store-name"
TEST_DESCRIPTION = "test"

class TestStoreCreatePostView(TestCase):
    """Test the create post view."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Set up the test environment."""
        self.client = DjangoClient()
        self.user = create_test_user()
        self.client.force_login(self.user)
        return super().setUp()

    def test_create_store(self):
        """Should create a store."""
        response = self.client.post(
            CREATE_POST_URL,
            {
                "store-input": TEST_STORE_NAME,
                "store-type-input": "1",
                "description-input": TEST_DESCRIPTION,
            },
        )

        store = ShoppingStore.objects.get(
            name=TEST_STORE_NAME,
            store_type=1,
            description=TEST_DESCRIPTION,
        )

        self.assertRedirects(
            response,
            f"/items/stores/detail/{store.id}",
            301,
            200,
            fetch_redirect_response=False,
        )
        self.assertEqual(store.name, TEST_STORE_NAME)
        self.assertEqual(store.store_type, 1)

    def test_create_store_string_as_store_type(self):
        """Should not create a store."""
        response = self.client.post(
            CREATE_POST_URL,
            {
                "store-input": TEST_STORE_NAME,
                "store-type-input": "abcd",
                "description-input": TEST_DESCRIPTION,
            },
        )

        self.assertRedirects(
            response,
            "/items/stores/create?error=Store type must be a number.",
            301,
            404,
            fetch_redirect_response=False,
        )

    def test_create_store_invalid_store_type(self):
        """Should not create a store."""
        response = self.client.post(
            CREATE_POST_URL,
            {
                "store-input": TEST_STORE_NAME,
                "store-type-input": "4",
                "description-input": TEST_DESCRIPTION,
            },
        )

        self.assertRedirects(
            response,
            "/items/stores/create?error=Invalid store type.",
            301,
            404,
            fetch_redirect_response=False,
        )

    def test_create_duplicate_store(self):
        """Should not create a store."""
        store = ShoppingStore.objects.create(
            name=TEST_STORE_NAME,
            store_type=1,
            description=TEST_DESCRIPTION,
            user=self.user,
        )
        store.save()

        response = self.client.post(
            CREATE_POST_URL,
            {
                "store-input": TEST_STORE_NAME,
                "store-type-input": "1",
                "description-input": TEST_DESCRIPTION,
            },
        )

        self.assertRedirects(
            response,
            "/items/stores/create?error=Store with name 'test-store-name' already exists.",
            301,
            404,
            fetch_redirect_response=False,
        )
