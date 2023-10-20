"""Contains unit tests for the Shopping Budget model."""

import pytest

# Django imports
from django.contrib.auth.models import User
from django.test import TestCase

from shoppinglist.models import ShoppingList, ShoppingBudget

LIST_NAME = "Test List"
LIST_DESCRIPTION = "Test Description"


class TestShoppingBudgetModel(TestCase):
    """Test the ShoppingBudget model"""

    @pytest.mark.django_db(transaction=True)
    def setUp(self) -> None:
        """Set up the test case"""
        self.user = User.objects.create_user(
            username="testuser",
            email="test@test.com",
            password="testpassword",
        )
        self.user.save()

        self.shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            user=self.user,
            start_date="2021-01-01",
            end_date="2022-01-01",
        )
        self.shopping_list.save()

        return super().setUp()

    def test_shopping_budget_to_string(self):
        """Test that the __str__ method returns the correct string"""
        shopping_budget = ShoppingBudget.objects.create(
            amount=100.00,
            shopping_list=self.shopping_list,
            user=self.user,
        )
        self.assertEqual(str(shopping_budget), "100.0 @ Test List for testuser")
