# Manage.py

```python
#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

from django.core.management import execute_from_command_line


def main():
    """Run administrative tasks."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shoppingapp.settings.settings")
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
```

## Imports

We import the following packages:

- os -> Used to set the DJANGO_SETTINGS_MODULE environment variable.
- sys -> Used to get the arguments passed to the script.
- django.core.management.execute_from_command_line -> Used to run the django app with the arguments passed to the script.

## Function - main

We set the DJANGO_SETTINGS_MODULE environment variable to shoppingapp.settings.settings. This is the settings file we use when running the app.

We can also set the DJANGO_SETTINGS_MODULE environment variable to shoppingapp.settings.local_settings to run the app in development mode.

You can do that by running the following command:

```bash
python manage.py runserver --settings=shoppingapp.settings.local_settings
```

We then run the django app using the arguments passed to the script.
