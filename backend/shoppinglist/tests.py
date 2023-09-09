"""Contains tests for the shoppinglist app."""

from datetime import date, timedelta

import pytest
from django.contrib.auth.models import User
from django.test import TestCase, Client

from authenticationapp.models import Client as AuthClient
from .models import ShoppingList
from .schemas.schemas import ShoppingListSchema
from .validation.validation import validate_shoppinglist

LIST_NAME = "test shopping list"
LIST_DESCRIPTION = "test description"

CONTENT_TYPE = "application/json"


class TestShoppingList(TestCase):
    """Tests for the shoppinglist app."""

    def test_validate_shopping_list_end_date_before_start_date(self):
        """Test the validate_shoppinglist function."""
        shopping_list = ShoppingListSchema(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-01",
            end_date="2020-01-01",
        )

        with pytest.raises(ValueError):
            validate_shoppinglist(shopping_list)

    def test_validate_shopping_list_case_1(self):
        """Test the validate_shoppinglist function."""
        user = User.objects.create_user(
            username="testuser", email="test@user.com", password="testpassword"
        )

        ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-05",
            end_date="2021-01-08",
            user=user,
        )

        shopping_list = ShoppingListSchema(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-04",
            end_date="2021-01-06",
        )

        with pytest.raises(ValueError):
            validate_shoppinglist(shopping_list)

    def test_validate_shopping_list_case_2(self):
        """Test the validate_shoppinglist function."""
        user = User.objects.create_user(
            username="testuser", email="test@user.com", password="testpassword"
        )

        ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-02-05",
            end_date="2021-02-08",
            user=user,
        )

        shopping_list = ShoppingListSchema(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-02-07",
            end_date="2021-02-10",
        )

        with pytest.raises(ValueError):
            validate_shoppinglist(shopping_list)

    def test_validate_shopping_list_case_3(self):
        """Test the validate_shoppinglist function."""
        user = User.objects.create_user(
            username="testuser", email="test@user.com", password="testpassword"
        )

        ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-03-04",
            end_date="2021-03-09",
            user=user,
        )

        shopping_list = ShoppingListSchema(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-03-05",
            end_date="2021-03-08",
        )

        with pytest.raises(ValueError):
            validate_shoppinglist(shopping_list)

    def test_create_shopping_list_not_logged_in(self):
        """Test the create shopping list endpoint without being logged in."""
        client = Client()

        AuthClient.objects.create(
            user=User.objects.create_user(
                username="testuser", email="test@test.com", password="testpassword"
            ),
        )

        response = client.post(
            "/api/list/create",
            {
                "name": LIST_NAME,
                "description": LIST_DESCRIPTION,
                "start_date": "2021-01-01",
                "end_date": "2021-01-02",
            },
            content_type=CONTENT_TYPE,
        )

        assert response.status_code == 401
        assert response.json()["detail"] == "Unauthorized"

    def test_create_shopping_list_no_token(self):
        """Test the create shopping list endpoint without a token."""
        client = Client()

        AuthClient.objects.create(
            user=User.objects.create_user(
                username="testuser", email="test@test.com", password="testpassword"
            ),
        )

        response = client.post(
            "/api/list/create",
            {
                "name": LIST_NAME,
                "description": LIST_DESCRIPTION,
                "start_date": "2021-01-01",
                "end_date": "2021-01-02",
            },
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": ""},
        )

        assert response.status_code == 401
        assert response.json()["detail"] == "Unauthorized"


    def test_create_shopping_list_invalid_payload(self):
        """Test the create shopping list endpoint with an invalid payload."""
        client = Client()

        AuthClient.objects.create(
            user=User.objects.create_user(
                username="testuser", email="test@test.com", password="testpassword"
            ),
        )

        client.login(username="testuser", password="testpassword")

        response = client.get("/api/auth/token")

        token = response.json()["message"]

        response = client.post(
            "/api/list/create",
            {
                "name": LIST_NAME,
                "description": LIST_DESCRIPTION,
                "start_date": "2021-01-01",
                "end_date": "2020-01-02",
            },
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": token},
        )

        assert response.status_code == 400
        assert response.json()["detail"] == "The shopping list's start date must be before its end date."

    def test_create_shopping_list_valid_payload(self):
        """Test the create shopping list endpoint with a valid payload."""
        client = Client()

        AuthClient.objects.create(
            user=User.objects.create_user(
                username="testuser", email="test@test.com", password="testpassword"
            ),
        )

        client.login(username="testuser", password="testpassword")

        response = client.get("/api/auth/token")

        token = response.json()["message"]

        response = client.post(
            "/api/list/create",
            {
                "name": LIST_NAME,
                "description": LIST_DESCRIPTION,
                "start_date": "2021-01-01",
                "end_date": "2022-01-02",
            },
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": token},
        )

        assert response.status_code == 201
        assert response.json()["message"] == "Shopping list created successfully"

    def test_shopping_list_to_string(self):
        """Test the __str__ method of the ShoppingList model."""
        user = User.objects.create_user(
            username="testuser", email="test@test.com", password="testpassword"
        )

        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date=date.today() - timedelta(days=1),
            end_date=date.today() + timedelta(days=1),
            user=user,
        )

        assert str(shopping_list) == LIST_NAME


    def test_shopping_list_is_current(self):
        """Test the is_current method of the ShoppingList model."""
        user = User.objects.create_user(
            username="testuser", email="test@test.com", password="testpassword"
        )

        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date=date.today() - timedelta(days=1),
            end_date=date.today() + timedelta(days=1),
            user=user,
        )

        assert shopping_list.is_current() is True

    def test_shopping_list_is_not_current(self):
        """Test the is_current method of the ShoppingList model."""
        user = User.objects.create_user(
            username="testuser", email="test@test.com", password="testpassword"
        )

        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date=date.today() - timedelta(days=2),
            end_date=date.today() - timedelta(days=1),
            user=user,
        )

        assert shopping_list.is_current() is False
