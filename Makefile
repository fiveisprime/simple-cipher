SRC = index.js spec/simple-cipher-spec.js

test: $(SRC)
	@node_modules/.bin/jshint $^
	@node node_modules/.bin/istanbul cover node_modules/.bin/_mocha \
		-R spec -- \
		--require should \
		--reporter spec
