all:
	rm _haushalte
	ln -s _haushalte-data _haushalte
	cp Gemfile.bck Gemfile

dev:
	rm _haushalte
	cp Gemfile Gemfile.bck
	cp Gemfile.local Gemfile
	./copy_data.sh
	ln -s _haushalte-dev _haushalte

run-dev:
	bundle exec jekyll serve
