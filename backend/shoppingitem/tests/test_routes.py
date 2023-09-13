"""Test the ShoppingItem and ShoppingStore routes."""

# Django imports
from django.contrib.auth.models import User
from django.test import TestCase, Client as DjangoClient

import pytest

from authenticationapp.models import Client
from shoppingitem.models import ShoppingStore

CONTENT_TYPE = "application/json"


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
            {"name": "", "store_type": 1, "description": "Test Description"},
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
            {"name": "Test Store", "store_type": 1, "description": "Test Description"},
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
            "/api/stores/1",
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
            username="test2", email="test@2.com", password="test"
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
            "/api/stores/1",
            {"name": "Test Store", "store_type": 1, "description": "Test Description"},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json()["detail"], "Store not found, or store does not belong to you")

    def test_update_store_that_does_not_belong_to_user(self):
        """Test the update_store route with invalid store id."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        user = User.objects.create_user(
            username="test2", email="test@2.com", password="test"
        )

        store = ShoppingStore.objects.create(
            name="Amazon", store_type=1, user=user
        )

        response = django_client.put(
            f"/api/stores/{store.id}",
            {"name": "Test Store", "store_type": 1, "description": "Test Description"},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json()["detail"], "Store not found, or store does not belong to you")

    def test_update_store_invalid_payload(self):
        """Test the update_store route with invalid payload."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        store = ShoppingStore.objects.create(
            name="Amazon", store_type=1, user=self.user
        )

        response = django_client.put(
            f"/api/stores/{store.id}",
            {"name": "", "store_type": 1, "description": "Test Description"},
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
            {"name": "Test Store", "store_type": 1, "description": "Test Description"},
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
            "/api/stores/1",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json()["detail"], "Store not found, or store does not belong to you")

    def test_delete_store_that_does_not_belong_to_user(self):
        """Test the delete_store route with invalid store id."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        user = User.objects.create_user(
            username="test2", email="test@2.com", password="test"
        )

        store = ShoppingStore.objects.create(
            name="Amazon", store_type=1, user=user
        )

        response = django_client.delete(
            f"/api/stores/{store.id}",
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json()["detail"], "Store not found, or store does not belong to you")

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
            {"name": "Test Item", "price": 10.00, "store_id": self.store.id},
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json()["message"], "Item created successfully")
