install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js

test-coverage:
	npm test -- --coverage --coverageProvider=v8