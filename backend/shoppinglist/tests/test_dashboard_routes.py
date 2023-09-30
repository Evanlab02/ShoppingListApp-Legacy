"""Contains tests for the shopping list app's dashboard routes."""

from datetime import date, timedelta

import pytest
from django.contrib.auth.models import User
from django.test import TestCase, Client as DjangoClient

from authenticationapp.models import Client as AuthClient
from shoppingitem.models import ShoppingItem, ShoppingStore
from shoppinglist.models import ShoppingList, ShoppingBudget


class TestDashboardEndpoints(TestCase):
    """Contains tests for the shopping list app's dashboard routes."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Sets up the tests."""
        self.client = DjangoClient()
        self.user: User = User.objects.create_user(
            username="testuser", password="testpassword"
        )
        self.auth_client: AuthClient = AuthClient.objects.create(user=self.user)
        self.client.force_login(self.user)
        self.auth_client.generate_token()
        self.token = self.auth_client.token
        self.headers = {"X-API-Key": self.token}

        self.store = ShoppingStore.objects.create(
            user=self.user,
            name="Test Store",
            description="Test Store Description",
            store_type=3,
        )
        self.store.save()

        self.item = ShoppingItem.objects.create(
            name="Test Item 1", price=100, store=self.store, user=self.user
        )
        self.item.save()

    def test_get_current_shopping_list_dashboard_data(self):
        """Tests the get_current_shopping_list_dashboard_data endpoint."""
        shopping_list = ShoppingList.objects.create(
            user=self.user,
            name="Test Shopping List",
            description="Test Shopping List Description",
            start_date=date.today() - timedelta(days=1),
            end_date=date.today() + timedelta(days=1),
        )
        shopping_list.items.add(self.item)
        shopping_list.save()

        budget = ShoppingBudget.objects.create(
            user=self.user, shopping_list=shopping_list, amount=1000
        )
        budget.save()

        response = self.client.get("/api/dashboard/current", headers=self.headers)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["total"], 1)
        self.assertEqual(response.json()["total_price"], 100)
        self.assertEqual(response.json()["budget_remaining"], 900)
        self.assertEqual(response.json()["average_item_price"], 100)

    def test_get_current_shopping_list_dashboard_data_no_shopping_list(self):
        """Tests the endpoint when there is no shopping list."""
        response = self.client.get("/api/dashboard/current", headers=self.headers)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["total"], None)
        self.assertEqual(response.json()["total_price"], None)
        self.assertEqual(response.json()["budget_remaining"], None)
        self.assertEqual(response.json()["average_item_price"], None)

    def test_get_recent_items(self):
        """Tests the get_recent_items endpoint."""
        response = self.client.get("/api/dashboard/recent", headers=self.headers)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()["recent_items"]), 1)

    def test_get_shopping_list_history(self):
        """Tests the get_shopping_list_history endpoint."""
        shopping_list = ShoppingList.objects.create(
            user=self.user,
            name="Test Shopping List",
            description="Test Shopping List Description",
            start_date=f"{date.today().year}-01-01",
            end_date=f"{date.today().year}-01-02",
        )
        shopping_list.items.add(self.item)
        shopping_list.save()

        budget = ShoppingBudget.objects.create(
            user=self.user, shopping_list=shopping_list, amount=1000
        )
        budget.save()

        response = self.client.get("/api/dashboard/history", headers=self.headers)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()["labels"]), date.today().month)
        self.assertEqual(response.json()["datasets"][0]["label"], "Price")
        self.assertEqual(response.json()["datasets"][0]["data"][0], 100)
        self.assertEqual(response.json()["datasets"][1]["label"], "Budget")
        self.assertEqual(response.json()["datasets"][1]["data"][0], 1000)
