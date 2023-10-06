requirements:
	pipenv requirements > requirements.txt

dev-requirements:
	pipenv requirements --dev > dev-requirements.txt

format:
	black .

lint: clean
	black --check .
	flake8 . --max-line-length=100
	pydocstyle .

test:
	python manage.py makemigrations --settings=shoppingapp.settings.test_settings
	pytest -v --cov=. --cov-report term-missing

static:
	python manage.py collectstatic --noinput --settings=shoppingapp.settings.local_settings

dev:
	python manage.py runserver localhost:7000 --settings=shoppingapp.settings.local_settings

migrate:
	python manage.py makemigrations --settings=shoppingapp.settings.local_settings
	python manage.py migrate --settings=shoppingapp.settings.local_settings

clean:
	rm -rf .coverage coverage.xml .pytest_cache
	rm -rf **/migrations/0*.py
