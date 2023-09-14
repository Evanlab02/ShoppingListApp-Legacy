# Caddyfile

This is the Caddyfile used to configure Caddy. You can read more about the Caddyfile [here](https://caddyserver.com/docs/caddyfile).

```Caddyfile
:80 {
  handle_path /* {
    reverse_proxy shopping-django-app:8000
  }

  handle_path /static/* {
    root * ./static/
    file_server
  }

  handle_path /shopping/dashboard/* {
    root * ./site/
    file_server
  }

  handle_path /assets/* {
    root * ./site/assets/
    file_server
  }
}
```

<hr>

So lets go through this Caddyfile line by line.

```Caddyfile
:80 {
```

This is the start of the Caddyfile. This is where we define the port we want to listen on. In this case we want to listen on port 80.

<hr>

```Caddyfile
  handle_path /* {
    reverse_proxy shopping-django-app:8000
  }
```

This is the first handler. This handler will handle all requests to the root path. This handler will reverse proxy all requests to the backend. This is how we connect the frontend to the backend.

<hr>

```Caddyfile
  handle_path /static/* {
    root * ./static/
    file_server
  }
```

This is the second handler. This handler will handle all requests to the `/static/` path. This handler will serve all files in the `./static/` directory. This is how we serve the static files used across the website.

<hr>

```Caddyfile
  handle_path /shopping/dashboard/* {
    root * ./site/
    file_server
  }
```

This is the third handler. This handler will handle all requests to the `/shopping/dashboard/` path. This handler will serve all files in the `./site/` directory. This is how we serve the dashboard page.

<hr>

```Caddyfile
  handle_path /assets/* {
    root * ./site/assets/
    file_server
  }
```

This is the fourth handler. This handler will handle all requests to the `/assets/` path. This handler will serve all files in the `./site/assets/` directory. This is how we serve the assets used across the website.

<hr>

```Caddyfile
}
```

This is the end of the Caddyfile.