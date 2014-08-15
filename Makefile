SRC = index.js spec/simple-cipher-spec.js

test: $(SRC)
	@node_modules/.bin/jshint $^
	@node_modules/.bin/mocha spec \
		--require should \
		--reporter spec
