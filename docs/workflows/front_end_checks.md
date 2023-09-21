# Front end checks workflow job

This workflow job is used to run all the front end checks. Its primary jobs are to:

- Lint the code
- Test that the code builds

```yaml
Frontend-Checks:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18.16"
      - name: Setup
        working-directory: ./frontend
        run: |
          npm ci
      - name: Lint and Docs Styling
        working-directory: ./frontend
        run: |
          npm run lint
      - name: Build
        working-directory: ./frontend
        run: |
          npm run build
```

## Node version

We use Node 18.16 for this project.

### Why Node 18.16?

It was the version installed on my machine when I started this project.

## Linting

We use ESLint to lint our code. You can find the configuration in the `.eslintrc.cjs` file.

## Building

We use vite to build our code. You can find the configuration in the `vite.config.js` file.