"""Contains tests for the budget repository."""

import pytest
from django.contrib.auth.models import User
from django.test import TestCase

from shoppingitem.models import ShoppingItem, ShoppingStore
from shoppinglist.database import BudgetRepository
from shoppinglist.models import ShoppingList, ShoppingBudget, ShoppingItemQuantity

class TestBudgetRepository(TestCase):
    """Contains tests for the budget repository."""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        self.user = User.objects.create_user(
            username="test",
            email="test@test.com",
            password="test",
        )

        self.store = ShoppingStore.objects.create(
            name="test",
            store_type=1,
            description="test",
            user=self.user,
        )

        self.item = ShoppingItem.objects.create(
            name="test",
            store=self.store,
            price=25,
            user=self.user,
        )

        self.shopping_list = ShoppingList.objects.create(
            name="test",
            start_date="2021-01-01",
            end_date="2021-12-31",
            user=self.user,
            description="test",
        )

        self.shopping_item_quantity = ShoppingItemQuantity.objects.create(
            quantity=1,
            shopping_item=self.item,
            shopping_list=self.shopping_list,
        )

        self.shopping_budget = ShoppingBudget.objects.create(
            amount=100,
            shopping_list=self.shopping_list,
            user=self.user,
        )

        self.budget_repo = BudgetRepository()

        return super().setUp()

    def test_get_total_budget_of_shopping_list(self):
        """Tests the get_total_budget_of_shopping_list method."""
        total_budget = self.budget_repo.get_total_budget_of_shopping_list(
            self.shopping_list.id
        )

        self.assertEqual(total_budget, self.shopping_budget.amount)

    def test_get_budget_remaining_of_shopping_list(self):
        """Tests the get_budget_remaining_of_shopping_list method."""
        budget_remaining = self.budget_repo.get_budget_remaining_of_shopping_list(
            self.shopping_list.id
        )

        self.assertEqual(budget_remaining, 75)

    def test_get_budget_remaining_of_shopping_list_with_less_than_zero(self):
        """Tests the get_budget_remaining_of_shopping_list method with a negative value."""
        self.shopping_budget.amount = 10
        self.shopping_budget.save()

        budget_remaining = self.budget_repo.get_budget_remaining_of_shopping_list(
            self.shopping_list.id
        )

        self.assertEqual(budget_remaining, 0)

