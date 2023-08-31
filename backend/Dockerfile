FROM python:3.10.0-slim-buster

RUN apt-get update
RUN apt-get install libpq-dev -y

COPY . /app
WORKDIR /app

RUN pip install -r requirements.txt

RUN python manage.py collectstatic --noinput

EXPOSE 8000

CMD ["python", "-m", "uvicorn", "shoppingapp.configs.asgi:application", "--host", "0.0.0.0"]