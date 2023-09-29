"""Contains tests for the routes in the shoppinglist app."""

from django.contrib.auth.models import User
from django.test import TestCase, Client

from authenticationapp.models import Client as AuthClient
from ..models import ShoppingList

LIST_NAME = "test shopping list"
LIST_DESCRIPTION = "test description"
TEST_EMAIL = "test@test.com"
CONTENT_TYPE = "application/json"
CREATE_ENDPOINT = "/api/lists/create"
TOKEN_ENDPOINT = "/api/auth/token"
LISTS_ENDPOINT = "/api/lists"
SUCESS_CREATE_MESSAGE = "Shopping list created successfully"
NOT_FOUND_MESSAGE = "Shopping list not found"


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

    def test_get_shopping_lists_unauthorized(self):
        """Test the get shopping lists endpoint without being logged in."""
        client = Client()

        response = client.get(LISTS_ENDPOINT)

        assert response.status_code == 401
        assert response.json()["detail"] == "Unauthorized"

    def test_get_shopping_lists_no_token(self):
        """Test the get shopping lists endpoint without a token."""
        client = Client()

        AuthClient.objects.create(
            user=User.objects.create_user(
                username="testuser", email=TEST_EMAIL, password="testpassword"
            ),
        )

        client.post(
            "/api/auth/login", {"username": "testuser", "password": "testpassword"}
        )

        response = client.get(LISTS_ENDPOINT, headers={"X-API-Key": ""})

        assert response.status_code == 401
        assert response.json()["detail"] == "Unauthorized"

    def test_get_shopping_lists_no_lists(self):
        """Test the get shopping lists endpoint with no lists."""
        client = Client()

        AuthClient.objects.create(
            user=User.objects.create_user(
                username="testuser", email=TEST_EMAIL, password="testpassword"
            ),
        )

        client.login(username="testuser", password="testpassword")
        response = client.get(TOKEN_ENDPOINT)
        token = response.json()["message"]

        response = client.get(LISTS_ENDPOINT, headers={"X-API-Key": token})

        assert response.status_code == 200
        assert response.json() == []

    def test_get_shopping_lists_with_lists(self):
        client = Client()

        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-01",
            end_date="2021-01-02",
            user=user,
        )

        AuthClient.objects.create(user=user)
        client.login(username="testuser", password="testpassword")
        response = client.get(TOKEN_ENDPOINT)
        token = response.json()["message"]

        response = client.get(LISTS_ENDPOINT, headers={"X-API-Key": token})

        assert response.status_code == 200
        assert len(response.json()) == 1
        assert response.json()[0]["name"] == LIST_NAME
        assert response.json()[0]["description"] == LIST_DESCRIPTION
        assert response.json()[0]["start_date"] == "2021-01-01"
        assert response.json()[0]["end_date"] == "2021-01-02"

    def test_get_shopping_list_detail_does_not_exist(self):
        """Test the get shopping list detail endpoint with a list that does not exist."""
        client = Client()

        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        AuthClient.objects.create(user=user)
        client.login(username="testuser", password="testpassword")
        response = client.get(TOKEN_ENDPOINT)
        token = response.json()["message"]

        response = client.get(f"{LISTS_ENDPOINT}/1", headers={"X-API-Key": token})

        assert response.status_code == 404
        assert response.json()["detail"] == NOT_FOUND_MESSAGE

    def test_get_shopping_list_detail_exists(self):
        """Test the get shopping list detail endpoint with a list that exists."""

        client = Client()

        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-01",
            end_date="2021-01-02",
            user=user,
        )

        AuthClient.objects.create(user=user)
        client.login(username="testuser", password="testpassword")
        response = client.get(TOKEN_ENDPOINT)
        token = response.json()["message"]

        response = client.get(
            f"{LISTS_ENDPOINT}/{shopping_list.id}", headers={"X-API-Key": token}
        )

        assert response.status_code == 200
        assert response.json()["name"] == LIST_NAME
        assert response.json()["description"] == LIST_DESCRIPTION
        assert response.json()["start_date"] == "2021-01-01"
        assert response.json()["end_date"] == "2021-01-02"
        assert response.json()["items"] == []

    def test_get_shopping_list_that_does_not_belong_to_user(self):
        """Test the get list detail endpoint with a list that does not belong to the user."""
        client = Client()

        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        user2 = User.objects.create_user(
            username="testuser2", email=TEST_EMAIL, password="testpassword"
        )

        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-01",
            end_date="2021-01-02",
            user=user2,
        )

        AuthClient.objects.create(user=user)
        client.login(username="testuser", password="testpassword")
        response = client.get(TOKEN_ENDPOINT)
        token = response.json()["message"]

        response = client.get(
            f"{LISTS_ENDPOINT}/{shopping_list.id}", headers={"X-API-Key": token}
        )

        assert response.status_code == 404
        assert response.json()["detail"] == NOT_FOUND_MESSAGE

    def test_update_shopping_list_that_does_not_exist(self):
        """Test the update shopping list endpoint with a list that does not exist."""
        client = Client()

        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        AuthClient.objects.create(user=user)
        client.login(username="testuser", password="testpassword")
        response = client.get(TOKEN_ENDPOINT)
        token = response.json()["message"]

        response = client.put(
            f"{LISTS_ENDPOINT}/1",
            {
                "name": LIST_NAME,
                "description": LIST_DESCRIPTION,
                "start_date": "2021-01-01",
                "end_date": "2021-01-02",
            },
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": token},
        )

        assert response.status_code == 404
        assert response.json()["detail"] == NOT_FOUND_MESSAGE

    def test_update_shopping_list_that_does_not_belong_to_user(self):
        """Test the update shopping list endpoint with a list that does not belong to the user."""
        client = Client()

        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        user2 = User.objects.create_user(
            username="testuser2", email=TEST_EMAIL, password="testpassword"
        )

        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-01",
            end_date="2021-01-02",
            user=user2,
        )

        AuthClient.objects.create(user=user)
        client.login(username="testuser", password="testpassword")
        response = client.get(TOKEN_ENDPOINT)
        token = response.json()["message"]

        response = client.put(
            f"{LISTS_ENDPOINT}/{shopping_list.id}",
            {
                "name": LIST_NAME,
                "description": LIST_DESCRIPTION,
                "start_date": "2021-01-01",
                "end_date": "2021-01-02",
            },
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": token},
        )

        assert response.status_code == 404
        assert response.json()["detail"] == NOT_FOUND_MESSAGE

    def test_update_shopping_list_invalid_payload(self):
        """Test the update shopping list endpoint with an invalid payload."""
        client = Client()

        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-01",
            end_date="2021-01-02",
            user=user,
        )

        AuthClient.objects.create(user=user)
        client.login(username="testuser", password="testpassword")
        response = client.get(TOKEN_ENDPOINT)
        token = response.json()["message"]

        response = client.put(
            f"{LISTS_ENDPOINT}/{shopping_list.id}",
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

    def test_update_shopping_list_that_clashes(self):
        """Test the update shopping list endpoint with a list that clashes with another list."""
        client = Client()

        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-01",
            end_date="2021-01-02",
            user=user,
        )

        ShoppingList.objects.create(
            name="test shopping list 2",
            description="test description 2",
            start_date="2021-01-03",
            end_date="2021-01-04",
            user=user,
        )

        AuthClient.objects.create(user=user)
        client.login(username="testuser", password="testpassword")
        response = client.get(TOKEN_ENDPOINT)
        token = response.json()["message"]

        response = client.put(
            f"{LISTS_ENDPOINT}/{shopping_list.id}",
            {
                "name": LIST_NAME,
                "description": LIST_DESCRIPTION,
                "start_date": "2021-01-01",
                "end_date": "2021-01-03",
            },
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": token},
        )

        assert response.status_code == 400
        assert (
            response.json()["detail"]
            == "A shopping list already exists for this date range."
        )

    def test_update_shopping_list_valid_payload(self):
        """Test the update shopping list endpoint with a valid payload."""
        client = Client()

        user = User.objects.create_user(
            username="testuser", email=TEST_EMAIL, password="testpassword"
        )

        shopping_list = ShoppingList.objects.create(
            name=LIST_NAME,
            description=LIST_DESCRIPTION,
            start_date="2021-01-01",
            end_date="2021-01-02",
            user=user,
        )

        AuthClient.objects.create(user=user)
        client.login(username="testuser", password="testpassword")
        response = client.get(TOKEN_ENDPOINT)
        token = response.json()["message"]

        response = client.put(
            f"{LISTS_ENDPOINT}/{shopping_list.id}",
            {
                "name": LIST_NAME,
                "description": LIST_DESCRIPTION,
                "start_date": "2021-01-01",
                "end_date": "2021-01-03",
            },
            content_type=CONTENT_TYPE,
            headers={"X-API-Key": token},
        )

        assert response.status_code == 200
        assert response.json()["message"] == "Shopping list updated successfully"
