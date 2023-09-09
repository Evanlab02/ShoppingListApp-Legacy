"""Contains tests for the routes in the shoppinglist app."""

from django.contrib.auth.models import User
from django.test import TestCase, Client

from authenticationapp.models import Client as AuthClient

LIST_NAME = "test shopping list"
LIST_DESCRIPTION = "test description"
TEST_EMAIL = "test@test.com"
CONTENT_TYPE = "application/json"
CREATE_ENDPOINT = "/api/list/create"
TOKEN_ENDPOINT = "/api/auth/token"
SUCESS_CREATE_MESSAGE = "Shopping list created successfully"


class TestShoppingListEndpoints(TestCase):
    """Contains tests for the shoppinglist app's endpoints."""

    def test_create_shopping_list_not_logged_in(self):
        """Test the create shopping list endpoint without being logged in."""
        client = Client()

        AuthClient.objects.create(
            user=User.objects.create_user(
                username="testuser", email=TEST_EMAIL, password="testpassword"
            ),
        )

        response = client.post(
            CREATE_ENDPOINT,
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
                username="testuser", email=TEST_EMAIL, password="testpassword"
            ),
        )

        response = client.post(
            CREATE_ENDPOINT,
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
                username="testuser", email=TEST_EMAIL, password="testpassword"
            ),
        )

        client.login(username="testuser", password="testpassword")

        response = client.get(TOKEN_ENDPOINT)

        token = response.json()["message"]

        response = client.post(
            CREATE_ENDPOINT,
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
        assert (
            response.json()["detail"]
            == "The shopping list's start date must be before its end date."
        )

    def test_create_shopping_list_valid_payload(self):
        """Test the create shopping list endpoint with a valid payload."""
        client = Client()

        AuthClient.objects.create(
            user=User.objects.create_user(
                username="testuser", email=TEST_EMAIL, password="testpassword"
            ),
        )

        client.login(username="testuser", password="testpassword")

        response = client.get(TOKEN_ENDPOINT)

        token = response.json()["message"]

        response = client.post(
            CREATE_ENDPOINT,
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
        assert response.json()["message"] == SUCESS_CREATE_MESSAGE

    def test_different_user_shopping_list_do_not_clash(self):
        """
        Tests that different users' shopping lists do not clash.
        """

        client = Client()

        AuthClient.objects.create(
            user=User.objects.create_user(
                username="testuser", email=TEST_EMAIL, password="testpassword"
            ),
        )

        AuthClient.objects.create(
            user=User.objects.create_user(
                username="testuser2",
                email="testuser2@test.com",
                password="testpassword",
            ),
        )

        client.login(username="testuser", password="testpassword")

        response = client.get(TOKEN_ENDPOINT)

        token = response.json()["message"]

        response = client.post(
            CREATE_ENDPOINT,
            {
                "name": LIST_NAME,
                "description": LIST_DESCRIPTION,
                "start_date": "2021-01-01",
                "end_date": "2022-01-30",
            },
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": token},
        )

        assert response.status_code == 201
        assert response.json()["message"] == SUCESS_CREATE_MESSAGE

        client.logout()

        client.login(username="testuser2", password="testpassword")

        response = client.get(TOKEN_ENDPOINT)

        token = response.json()["message"]

        response = client.post(
            CREATE_ENDPOINT,
            {
                "name": LIST_NAME,
                "description": LIST_DESCRIPTION,
                "start_date": "2021-01-15",
                "end_date": "2022-02-15",
            },
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": token},
        )

        assert response.status_code == 201
        assert response.json()["message"] == SUCESS_CREATE_MESSAGE