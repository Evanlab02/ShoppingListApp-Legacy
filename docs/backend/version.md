# Why is there a version.txt file in the backend?

We use the [release-please](https://github.com/googleapis/release-please) to automate our releases. We use the manifest strategy to determine the version number as this is a monorepo, so that we keep versioning seperate for each part.

The version.txt file is a place where we keep the version number for the backend. This is used by release-please to determine the version number for the backend and is also for own reference.

Please feel free to read up on [release-please here](https://github.com/googleapis/release-please).