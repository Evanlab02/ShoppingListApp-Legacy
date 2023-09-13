"""Test the ShoppingItem and ShoppingStore routes."""

# Django imports
from django.contrib.auth.models import User
from django.test import TestCase, Client as DjangoClient

import pytest

from authenticationapp.models import Client
from shoppingitem.models import ShoppingStore


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
            "/api/store/create",
            {"name": "", "store_type": 1},
            content_type="application/json",
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json()["detail"], "Store name cannot be empty")

    def test_create_store_case_2(self):
        """Test the create_store route with a valid request."""
        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        response = django_client.post(
            "/api/store/create",
            {"name": "Test Store", "store_type": 1},
            content_type="application/json",
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json()["message"], "Store created successfully")


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
            "/api/item/create",
            {"name": "", "price": 10.00, "store_id": self.store.id},
            content_type="application/json",
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json()["detail"], "Item name cannot be empty")

    def test_create_item_case_2(self):
        """Test create item route with valid request."""

        django_client = DjangoClient()
        django_client.login(username="test", password="test")

        response = django_client.post(
            "/api/item/create",
            {"name": "Test Item", "price": 10.00, "store_id": self.store.id},
            content_type="application/json",
            headers={"X-API-Key": self.token},
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json()["message"], "Item created successfully")
