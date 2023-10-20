FROM python:3.10.0-slim-buster

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install libpq-dev -y

COPY . /app
WORKDIR /app

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "-m", "uvicorn", "shoppingapp.configs.asgi:application", "--host", "0.0.0.0"]