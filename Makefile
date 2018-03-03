all:
	rm _haushalte
	ln -s _haushalte-data _haushalte

dev:
	rm _haushalte
	./copy_data.sh
	ln -s _haushalte-dev _haushalte

run-dev:
	bundle exec jekyll serve
