.PHONY: build

all: build upload

build:
	python offenerhaushalt/manage.py freeze

web:
	python offenerhaushalt/manage.py runserver

upload:
	#s3cmd sync --delete-removed --acl-public -M --add-header='Cache-Control: public, max-age=84600' --reduced-redundancy --exclude 'static/.webassets-cache/*'  build/* s3://beta.offenerhaushalt.de/
	aws s3 sync --cache-control 84600 --acl public-read --exclude 'static/.webassets-cache/*' --delete build/ s3://offenerhaushalt.de/
