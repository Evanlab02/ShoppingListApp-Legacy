"""Contains constants for the authentication app."""

from jproperties import Properties

properties = Properties()

with open("application.properties", "rb") as properties_file:
    properties.load(properties_file)

API_KEY_PARAM = properties.get("API_KEY_PARAM").data

__all__ = ["API_KEY_PARAM"]
