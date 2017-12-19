OffenerHaushalt 3.0
===================

This repository will contain the third edition of OffenerHaushalt, a
front-end to OpenSpending Next with a focus on budgets from different levels
of the German government.

### Building the site

OffenerHaushalt is now based on [jekyll](https://jekyllrb.com/).

Except from the embed pages, which get created by `_plugins/embed.rb`, it should be complete buildable by GitHub Pages.

The [typical commands](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) for jekyll based sites apply here too:

Install Dependencies with `bundle install`.

Build the site with `bundle exec jekyll serve`.


### Adding a new budget

Simply create a new file in `_budget`. Look at the other files already existing to see which fields are needed.

It gets its Data from the new [OpenSpending](http://openspending.org).
