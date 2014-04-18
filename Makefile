build:
	git checkout master
	node build

unbuild:
	git reset --hard HEAD

publish:
	make build
	npm publish
	make unbuild
