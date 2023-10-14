"""Contains the user repository for the authentication app."""

from ..helpers import authenticate, login, logout, render
from ..schemas.input import NewUser, UserCredentials
from ..types import HttpRequest, User, HttpResponse, HttpResponsePermanentRedirect


class UserRepository:
    """
    User repository for the authentication app.

    Methods:
        is_authenticated(user: User) -> bool
        create_user(payload: NewUser) -> User
        login_user(request: HttpRequest, payload: UserCredentials) -> (int, str)
        logout_user(request: HttpRequest) -> (int, str)
        render_or_redirect(Please view function for more information)
    """

    def is_authenticated(self, user: User) -> bool:
        """
        Check if a user is authenticated.

        Args:
            user (User): The user to check.

        Returns:
            bool: True if the user is authenticated, otherwise False.
        """
        return user.is_authenticated

    def create_user(self, payload: NewUser) -> User:
        """
        Register a user.

        Create a new user with the given credentials without saving them to the database.

        Args:
            payload (NewUser): The payload containing the credentials.

        Returns:
            (User): The created user.

        Raises:
            ValueError: If the username or email already exists or the passwords do not match.
        """
        if User.objects.filter(username=payload.username).exists():
            raise ValueError("Username already exists.")
        elif User.objects.filter(email=payload.email).exists():
            raise ValueError("Email already exists.")

        user = User.objects.create_user(
            payload.username,
            payload.email,
            payload.password,
            first_name=payload.first_name,
            last_name=payload.last_name,
        )

        return user

    def login_user(
        self, request: HttpRequest, payload: UserCredentials
    ) -> tuple[int, str]:
        """
        Login a user with the given credentials.

        Args:
            request (HttpRequest): The request object.
            payload (UserCredentials): The payload containing the credentials.

        Returns:
            (int, str): The status code and the response as a string.
        """
        user = authenticate(
            request=request, username=payload.username, password=payload.password
        )

        if user is None:
            return 401, "Invalid credentials."

        login(request, user)

        return 200, "User successfully logged in."

    def logout_user(self, request: HttpRequest) -> tuple[int, str]:
        """
        Logout a user.

        Args:
            request (HttpRequest): The request object.

        Returns:
            (int, str): The status code and the response as a string.
        """
        if not self.is_authenticated(request.user):
            return 400, "User is not authenticated."

        logout(request)

        return 200, "User successfully logged out."

    def render_or_redirect(
        self,
        request: HttpRequest,
        redirect_url: str,
        template_to_render: str,
        context: dict | None = None,
        auth: bool = True,
    ) -> HttpResponse:
        """
        Render a template or redirect to a url.

        Will redirect if the user is already authenticated. Will render the template otherwise.

        You can change the auth bool to false, to redirect the user if they the user
        is not authenticated and render the template otherwise.

        Args:
            req (HttpRequest): The request object.
            url (str): The url to redirect to.
            temp (str): The template to render.
            ctx (dict): The context to render the template with.

        Returns:
            HttpResponse | HttpResponsePermanentRedirect: The rendered template or the redirect.
        """
        if self.is_authenticated(request.user) and auth:
            return HttpResponsePermanentRedirect(redirect_url)
        elif not self.is_authenticated(request.user) and not auth:
            return HttpResponsePermanentRedirect(redirect_url)

        return render(request, template_to_render, context)
