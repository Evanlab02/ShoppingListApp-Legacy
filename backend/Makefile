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

static:
	python manage.py collectstatic --noinput --settings=shoppingapp.settings.local_settings