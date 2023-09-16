# Sonarcloud

We use sonarcloud to check the quality of our code. This is done by running a sonarcloud scan on the codebase. This is as part of the checks workflow.

## Sonarcloud project properties

This is the sonarcloud project properties file. This is used to configure the sonarcloud scan. This file is located in the root of the backend folder.

```
sonar.projectKey=evanlab02_ShoppingListApp-BE
sonar.organization=evanlab02
sonar.projectName=ShoppingListApp-BE
sonar.projectVersion=1.0
sonar.python.coverage.reportPaths=coverage.xml
sonar.python.version=3.10
sonar.source.exclusions=shoppingapp/settings/*
```

Here is a breakdown of the properties:

- `sonar.projectKey` - This is the key for the project. This is used to identify the project in sonarcloud.
- `sonar.organization` - This is the organization that the project belongs to.
- `sonar.projectName` - This is the name of the project.
- `sonar.projectVersion` - This is the version of the project. (We never update this as we use release-please to determine the version number)
- `sonar.python.coverage.reportPaths` - This is the path to the coverage report. This is used to determine the coverage of the project.
- `sonar.python.version` - This is the version of python that the project uses.
- `sonar.source.exclusions` - This is the files that we want to exclude from the scan.

Read more about sonarcloud [here](https://sonarcloud.io/documentation).