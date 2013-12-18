.PHONY: build

all: build upload

build:
	python offenerhaushalt/manage.py freeze

upload:
	s3cmd sync --delete-removed --acl-public -M --add-header='Cache-Control: public, max-age=84600' --reduced-redundancy --exclude 'static/vendor/*' --exclude 'static/.webassets-cache/*'  build/* s3://beta.offenerhaushalt.de/