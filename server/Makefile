run:
	sudo ./bin/caddy run Caddyfile

up:
	sudo ./bin/caddy start Caddyfile

down:
	sudo ./bin/caddy stop

clean:
	rm -rf ./site/*
	rm -rf ./static/*

files: clean
	cd ../backend/ && make static
	cd ../frontend/ && make build
