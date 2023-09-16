# The Authentication App

- [Models File Documentation](./models.md)
- [Admin File Documentation](./admin.md)
- [Schema Folder Documentation](./schema.md)
- [Routes Folder Documentation](./routes.md)
- [Auth Folder Documentation](./auth.md)
- [Tests file Documentation](./tests.md)
- [Views File Documentation](./views.md)

## What is the Authentication App?

The Authentication App is used to manage the authentication of users. It is used to create users, login users, logout users and get the token of users.

The authentication app is by no means a complete nor entirely secure authentication app. It is a simple authentication app that is used to create some seperation from users and their data. As this project is meant to be run on a secure home network, the authentication is not up to par for a public facing website or network.

## How does the Authentication App work?

The authentication app uses the Django Auth User model, along with an API from Django Ninja and a custom Client model that wraps the Django Auth User model.

The user model is something that comes included with Django, it is a model that stores a users username, password, email, first name, last name, and a few other fields. The user model is used to store the data of a user, and is used to authenticate a user.

The client model builds on top of the user model, and adds a few more fields. A token and a token expiration date. The token is used to authenticate a user, and the token expiration date is used to determine if the token is still valid.

The authentication app uses the Django Ninja API to create the API endpoints for the authentication app. The API endpoints are used to create users, login users, logout users, and get the token of users.
