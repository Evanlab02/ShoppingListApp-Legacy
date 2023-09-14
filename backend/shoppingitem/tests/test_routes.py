"""Test the ShoppingItem and ShoppingStore routes."""

# Django imports
from django.contrib.auth.models import User
from django.test import TestCase, Client as DjangoClient

import pytest

from authenticationapp.models import Client
from shoppingitem.models import ShoppingStore, ShoppingItem

CONTENT_TYPE = "application/json"
TEST_DESCRIPTION = "Test Description"
TEST_NAME = "Test Store"
API_STORE_ID_URL = "/api/stores/1"
SECONDARY_TEST_EMAIL = "test@2.com"
ID_ERROR = "Store not found, or store does not belong to you"
TEST_ITEM_NAME = "Test Item"


class TestStoreRoutes(TestCase):
    """Test the ShoppingStore routes."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self):
        """Set up the test case."""
        self.user = User.objects.create_user(
            username="test", email="test@test.com", password="test"
        )

        self.client = Client.objects.create(user=self.user)

        self.client.generate_token()

        self.token = self.client.token

    def test_create_store_case_1(self):
        """Test the create_store route with empty name."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        response = django_client.post(
            "/api/stores/create",
            {"name": "", "store_type": 1, "description": TEST_DESCRIPTION},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json()["detail"], "Store name cannot be empty")

    def test_create_store_case_2(self):
        """Test the create_store route with a valid request."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        response = django_client.post(
            "/api/stores/create",
            {"name": TEST_NAME, "store_type": 1, "description": TEST_DESCRIPTION},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json()["message"], "Store created successfully")

    def test_get_stores_case_1(self):
        """Test the get_stores route with no stores."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        response = django_client.get(
            "/api/stores",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), [])

    def test_get_stores_case_2(self):
        """Test the get_stores route with stores."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        ShoppingStore.objects.create(name="Amazon", store_type=1, user=self.user).save()

        response = django_client.get(
            "/api/stores",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)

    def test_get_details_store_case_1(self):
        """Test the get_details_store route with invalid store id."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        response = django_client.get(
            API_STORE_ID_URL,
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json()["detail"], "Store not found")

    def test_get_details_store_case_2(self):
        """Test the get_details_store route with valid store id."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        store = ShoppingStore.objects.create(
            name="Amazon", store_type=1, user=self.user
        )
        store.save()

        response = django_client.get(
            f"/api/stores/{store.id}",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["name"], "Amazon")
        self.assertEqual(response.json()["store_type"], 1)
        self.assertEqual(response.json()["description"], "")

    def test_get_my_stores_case_1(self):
        """Test the get_my_stores route with no stores."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        response = django_client.get(
            "/api/stores/me",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), [])

    def test_get_my_stores_case_2(self):
        """Test the get_my_stores route with stores."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        ShoppingStore.objects.create(name="Amazon", store_type=1, user=self.user).save()

        user = User.objects.create_user(
            username="test2", email=SECONDARY_TEST_EMAIL, password="test"
        )

        ShoppingStore.objects.create(name="Apple", store_type=1, user=user).save()

        response = django_client.get(
            "/api/stores/me",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)
        self.assertEqual(response.json()[0]["name"], "Amazon")
        self.assertEqual(response.json()[0]["store_type"], 1)

    def test_update_store_that_does_not_exist(self):
        """Test the update_store route with invalid store id."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        response = django_client.put(
            API_STORE_ID_URL,
            {"name": TEST_NAME, "store_type": 1, "description": TEST_DESCRIPTION},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(
            response.json()["detail"],
            ID_ERROR,
        )

    def test_update_store_that_does_not_belong_to_user(self):
        """Test the update_store route with invalid store id."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        user = User.objects.create_user(
            username="test2", email=SECONDARY_TEST_EMAIL, password="test"
        )

        store = ShoppingStore.objects.create(name="Amazon", store_type=1, user=user)

        response = django_client.put(
            f"/api/stores/{store.id}",
            {"name": TEST_NAME, "store_type": 1, "description": TEST_DESCRIPTION},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(
            response.json()["detail"],
            ID_ERROR,
        )

    def test_update_store_invalid_payload(self):
        """Test the update_store route with invalid payload."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        store = ShoppingStore.objects.create(
            name="Amazon", store_type=1, user=self.user
        )

        response = django_client.put(
            f"/api/stores/{store.id}",
            {"name": "", "store_type": 1, "description": TEST_DESCRIPTION},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json()["detail"], "Store name cannot be empty")

    def test_update_store_valid_payload(self):
        """Test the update_store route with valid payload."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        store = ShoppingStore.objects.create(
            name="Amazon", store_type=1, user=self.user
        )

        response = django_client.put(
            f"/api/stores/{store.id}",
            {"name": TEST_NAME, "store_type": 1, "description": TEST_DESCRIPTION},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["message"], "Store updated successfully")

    def test_delete_store_that_does_not_exist(self):
        """Test the delete_store route with invalid store id."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        response = django_client.delete(
            API_STORE_ID_URL,
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(
            response.json()["detail"],
            ID_ERROR,
        )

    def test_delete_store_that_does_not_belong_to_user(self):
        """Test the delete_store route with invalid store id."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        user = User.objects.create_user(
            username="test2", email=SECONDARY_TEST_EMAIL, password="test"
        )

        store = ShoppingStore.objects.create(name="Amazon", store_type=1, user=user)

        response = django_client.delete(
            f"/api/stores/{store.id}",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(
            response.json()["detail"],
            ID_ERROR,
        )

    def test_delete_store_valid_payload(self):
        """Test the delete_store route with valid payload."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        store = ShoppingStore.objects.create(
            name="Amazon", store_type=1, user=self.user
        )

        response = django_client.delete(
            f"/api/stores/{store.id}",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["message"], "Store deleted successfully")


class TestItemRoutes(TestCase):
    """Test the ShoppingItem routes."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self):
        """Set up the test case."""
        self.user = User.objects.create_user(
            username="test", email="test@test.com", password="test"
        )

        self.client = Client.objects.create(user=self.user)

        self.client.generate_token()

        self.token = self.client.token

        self.store = ShoppingStore.objects.create(
            name="Amazon", store_type=1, user=self.user
        )
        self.store.save()

    def test_create_item_case_1(self):
        """Test create item route with empty name."""

        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        response = django_client.post(
            "/api/items/create",
            {"name": "", "price": 10.00, "store_id": self.store.id},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json()["detail"], "Item name cannot be empty")

    def test_create_item_case_2(self):
        """Test create item route with valid request."""

        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        response = django_client.post(
            "/api/items/create",
            {"name": TEST_ITEM_NAME, "price": 10.00, "store_id": self.store.id},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json()["message"], "Item created successfully")

    def test_get_items_empty(self):
        """Test get items route with no items."""

        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        response = django_client.get(
            "/api/items",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), [])

    def test_get_items(self):
        """Test get items route with items."""

        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        ShoppingItem.objects.create(
            name=TEST_ITEM_NAME, price=10.00, store=self.store, user=self.user
        ).save()

        response = django_client.get(
            "/api/items",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)
        self.assertEqual(response.json()[0]["name"], TEST_ITEM_NAME)
        self.assertEqual(response.json()[0]["price"], "10.00")

    def test_get_my_items_empty(self):
        """Test get my items route with no items."""

        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        user = User.objects.create_user(
            username="test2", email=SECONDARY_TEST_EMAIL, password="test"
        )

        ShoppingItem.objects.create(
            name=TEST_ITEM_NAME, price=10.00, store=self.store, user=user
        ).save()

        response = django_client.get(
            "/api/items/me",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), [])

    def test_get_my_items(self):
        """Test get my items route with items."""

        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        ShoppingItem.objects.create(
            name=TEST_ITEM_NAME, price=10.00, store=self.store, user=self.user
        ).save()

        response = django_client.get(
            "/api/items/me",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)
        self.assertEqual(response.json()[0]["name"], TEST_ITEM_NAME)
        self.assertEqual(response.json()[0]["price"], "10.00")

    def test_update_item_invalid_payload(self):
        """Test update item route with invalid payload."""

        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        item = ShoppingItem.objects.create(
            name=TEST_ITEM_NAME, price=10.00, store=self.store, user=self.user
        )

        response = django_client.put(
            f"/api/items/{item.id}",
            {"name": "", "price": 10.00, "store_id": self.store.id},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json()["detail"], "Item name cannot be empty")

    def test_update_item_that_does_not_belong_to_user(self):
        """Test update item route with invalid payload."""

        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        user = User.objects.create_user(
            username="test2", email=SECONDARY_TEST_EMAIL, password="test"
        )

        item = ShoppingItem.objects.create(
            name=TEST_ITEM_NAME, price=10.00, store=self.store, user=user
        )

        response = django_client.put(
            f"/api/items/{item.id}",
            {"name": TEST_ITEM_NAME, "price": 10.00, "store_id": self.store.id},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(
            response.json()["detail"], "Item not found, or item does not belong to you"
        )

    def test_update_item_valid_payload(self):
        """Test update item route with valid payload."""

        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        item = ShoppingItem.objects.create(
            name=TEST_ITEM_NAME, price=10.00, store=self.store, user=self.user
        )

        response = django_client.put(
            f"/api/items/{item.id}",
            {"name": TEST_ITEM_NAME, "price": 10.00, "store_id": self.store.id},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["message"], "Item updated successfully")

    def test_delete_item_that_does_not_belong_to_user(self):
        """Test delete item route with invalid payload."""

        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        user = User.objects.create_user(
            username="test2", email=SECONDARY_TEST_EMAIL, password="test"
        )

        item = ShoppingItem.objects.create(
            name=TEST_ITEM_NAME, price=10.00, store=self.store, user=user
        )

        response = django_client.delete(
            f"/api/items/{item.id}",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(
            response.json()["detail"], "Item not found, or item does not belong to you"
        )

    def test_delete_item_valid_payload(self):
        """Test delete item route with valid payload."""

        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        item = ShoppingItem.objects.create(
            name=TEST_ITEM_NAME, price=10.00, store=self.store, user=self.user
        )

        response = django_client.delete(
            f"/api/items/{item.id}",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["message"], "Item deleted successfully")
