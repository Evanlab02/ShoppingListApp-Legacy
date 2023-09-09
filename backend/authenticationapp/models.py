"""Contains models for the authentication app."""

from uuid import uuid4

from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

class Client(models.Model):
    """Model for a client."""

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=100, blank=True, null=True)
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
