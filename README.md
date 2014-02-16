## OffenerHaushalt 2.0

This repository will contain the second edition of OffenerHaushalt, a front-end to OpenSpending with a focus on budgets from different levels of the German government.

### Building the site

OffenerHaushalt is a simple Flask application that will be frozen to static HTML documents. The rendered (and statically saved) site can be downloaded to Amazon S3 and served from there. The following dependencies are required to build the site:

* Python 2.x, virtualenv
* node.js with npm, and global installs of: uglify-js, less, bower

When you have OffenerHaushalt checked out, follow these steps:
```bash
bower install
virtualenv pyenv
source pyenv/bin/activate
pip install -r requirements.txt
python setup.py develop
```

You can then run the site like a normal Flask application:
```bash
python offenerhaushalt/manage.py runserver
```

Having verified that the application work, you can build a frozen version of all the contents in this database by running:
```bash
python offenerhaushalt/manage.py freeze
```

This will make a plain HTML version of the visualizations, ready to be deployed to S3 or another file hosting platform.
