requirements:
	pipenv requirements > requirements.txt

dev-requirements:
	pipenv requirements --dev > dev-requirements.txt

format:
	black .

lint:
	black --check .
	flake8 . --max-line-length=100
	pydocstyle .

django-test:
	python manage.py test --settings=shoppingapp.settings.local_settings

static:
	python manage.py collectstatic --noinput --settings=shoppingapp.settings.local_settings

dev:
	python manage.py runserver localhost:7000 --settings=shoppingapp.settings.local_settings

migrate:
	python manage.py migrate --settings=shoppingapp.settings.local_settings