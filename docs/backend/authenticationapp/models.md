# The authentication app models

Something to note is while this model is not in the code itself, a very important model is the Django Auth User model. This model is used to store the data of a user, and is used to authenticate a user. 

## Models.py

```python
"""Contains models for the authentication app."""

from uuid import uuid4

from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone


class Client(models.Model):
    """Model for a client."""

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=100, blank=True)
    token_expiration = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        """Return the string representation of the client."""
        return f"{self.user.username} ({self.user.email})"

    def generate_token(self):
        """Generate a token for the client."""
        if self.token_expiration is None or self.token_expiration < timezone.now():
            self.token = uuid4().hex
            self.token_expiration = timezone.now() + timezone.timedelta(days=1)
            self.save()
```

### Imports

- uuid.uuid4 [To generate a token for the client]
- django.contrib.auth.models.User [To get the Django Auth User model]
- django.db.models [To create the models]
- django.utils.timezone [To get the timezone, used for token expiration]

### Client Model

The client model is responsible for storing Users tokens and token expiration dates. It also has a method to generate a token for the client.

#### Attributes

- user [OneToOneField] [The Django Auth User model]
- token [CharField] [The token of the client]
- token_expiration [DateTimeField] [The token expiration date of the client]

#### Methods - generate_token [Generates a token for the client]
 
If the token expiration is None or the token expiration is less than the current time, generate a token for the client, set the token expiration to 1 day from now, and save the client. What if a user is not logged in and tries to refresh the token? This logic gets handled outside of the model.

How do we generate a token? We use the uuid4 function from the uuid module. This function generates a random uuid, and we use the hex method to get the hex representation of the uuid. We then insert that into the token field of the client, and then generate a token expiration date of 1 day from now using the timezone module. We then save the client which will update the database.

#### Methods - \_\_str\_\_ [Returns the string representation of the client]

Combines the username and email of the user to create a string representation of the client.

Example -> "Fisher (fisher@gmail.com)"