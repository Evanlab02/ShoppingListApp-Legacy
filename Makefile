up:
	docker compose up -d --build

down:
	docker compose down

clear:
	docker compose down -v

fresh: clear up
	@echo "Fresh done!"