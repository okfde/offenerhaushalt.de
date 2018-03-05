OffenerHaushalt 3.0
===================

This repository will contain the third edition of OffenerHaushalt, a
front-end to OpenSpending Next with a focus on budgets from different levels
of the German government.

### Building the site

OffenerHaushalt is now based on [jekyll](https://jekyllrb.com/).

Building all the `_haushalte` files takes quite long. For local development you might want to temporary remove most of those files and just keep a few to work with.

ATM the `_plugins/embed.rb` builds the `_haushalte`-collection three times which results in special cases for the collection-array.

The [typical commands](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) for jekyll based sites apply here too:

Install Dependencies with `bundle install`.

Build the site with `bundle exec jekyll serve`.

The page '[Liquid for designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)' is a good reference to look up the template language. [Debugging variables](https://stackoverflow.com/a/34049498) is also helpful.

### Adding a new budget

Simply create a new file in `_budget`. Look at the other files already existing to see which fields are needed.

It gets its Data from the new [OpenSpending](http://openspending.org).
