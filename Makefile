.PHONY: build js

all: build

assets: js/all.js

js/all.js: js/app.js
	uglifyjs --mangle --screw-ie8 --output js/all.js \
		bower_components/d3/d3.js \
		bower_components/topojson/topojson.js \
		bower_components/angular/angular.js \
		bower_components/angular-animate/angular-animate.js \
		js/app.js \

build: assets
	jekyll build

web:
	jekyll build --watch

upload:
	#s3cmd sync --delete-removed --acl-public -M --add-header='Cache-Control: public, max-age=84600' --reduced-redundancy --exclude 'static/.webassets-cache/*'  build/* s3://beta.offenerhaushalt.de/
	aws s3 sync --cache-control 84600 --acl public-read --exclude 'static/.webassets-cache/*' --delete build/ s3://offenerhaushalt.de/
