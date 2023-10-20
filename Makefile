IMAGE_NAME = shopping-django-server
VERSION := $(shell cat server/version.txt)

BE_NAME = shopping-django-app
BE_VERSION := $(shell cat backend/version.txt)

up:
	docker compose -f server/production/docker-compose.yml up -d --build

down:
	docker compose -f server/production/docker-compose.yml down

dev:
	docker compose watch

dev-down:
	docker compose down

dev-clear:
	docker compose down -v

build:
	docker build -t $(BE_NAME):$(BE_VERSION) ./backend
	docker build -t $(IMAGE_NAME):$(VERSION) .
