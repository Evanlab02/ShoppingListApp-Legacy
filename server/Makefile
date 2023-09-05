run:
	sudo ./bin/caddy run Caddyfile

up:
	sudo ./bin/caddy start Caddyfile

down:
	sudo ./bin/caddy stop

files: clean
	mkdir -p static
	mkdir -p site
	cd ../backend/ && pipenv run make static
	cd ../frontend/ && make build

clean:
	rm -rf static site
