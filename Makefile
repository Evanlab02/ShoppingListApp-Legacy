IMAGE_NAME = shopping-django-server
VERSION := $(shell cat server/version.txt)

BE_NAME = shopping-django-app
BE_VERSION := $(shell cat backend/version.txt)

up:
	docker compose -f server/production/docker-compose.yml up -d --build

dev:
	docker compose -f compose.yml watch

down:
	docker compose down

clear:
	docker compose down -v

fresh: clear up
	@echo "Fresh done!"

build:
	docker build -t $(BE_NAME):$(BE_VERSION) ./backend
	docker build -t $(IMAGE_NAME):$(VERSION) .
