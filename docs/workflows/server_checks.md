# Server checks workflow job

```yaml
runs-on: ubuntu-latest

    env:
      DJANGO_DATABASE_NAME: ${{ vars.DJANGO_DATABASE_NAME }}
      DJANGO_DATABASE_USER: ${{ vars.DJANGO_DATABASE_USER }}
      DJANGO_DATABASE_PASSWORD: ${{ vars.DJANGO_DATABASE_PASSWORD }}
      DJANGO_KEY: ${{ vars.DJANGO_KEY }}

    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Build
        run: |
          docker build -t server:latest --build-arg KEY=${{vars.DJANGO_KEY}} .
```

## What is this workflow job?

This workflow job is used to build the server. Its primary jobs are to:

- Build the server

## Building

We use docker to build our code. As far as possible we try and keep the entire build process in the `Dockerfile`. Removing the responsibility to remember to run commands like building the frontend.

This checks that the server builds successfully.