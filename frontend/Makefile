build:
	rm -rf ../server/site/*
	npm run build
	cp -r dist/* ../server/site/

up:
	npm run dev

fresh:
	rm -rf node_modules/ package-lock.json
	npm install
	npm run dev

lint:
	npm run lint

clean:
	rm -rf dist/
