.PHONY: build js

all: build

assets: assets/build assets/build/deps.js assets/build/app.js assets/build/style.css

assets/build:
	mkdir -p assets/build

assets/build/deps.js:
	uglifyjs --mangle --screw-ie8 --output assets/build/deps.js \
		bower_components/d3/d3.js \
		bower_components/topojson/topojson.js \
		bower_components/angular/angular.js \
		bower_components/angular-animate/angular-animate.js

assets/build/app.js: assets/build/deps.js assets/js/app.js assets/js/home.js assets/js/budget.js
	uglifyjs --mangle --screw-ie8 --output assets/build/app.js \
		assets/js/app.js \
		assets/js/home.js \
		assets/js/budget.js

assets/build/style.css: assets/style.scss 
	scss -t compressed assets/style.scss >assets/build/style.css

build: assets
	jekyll build

web:
	jekyll build --watch

upload:
	#s3cmd sync --delete-removed --acl-public -M --add-header='Cache-Control: public, max-age=84600' --reduced-redundancy --exclude 'static/.webassets-cache/*'  build/* s3://beta.offenerhaushalt.de/
	aws s3 sync --cache-control 84600 --acl public-read --exclude 'static/.webassets-cache/*' --delete build/ s3://offenerhaushalt.de/

clean:
	rm -rf assets/build/*
