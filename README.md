## OffenerHaushalt 2.0

This repository will contain the second edition of OffenerHaushalt, a front-end to OpenSpending with a focus on budgets from different levels of the German government. 

### Building the site

OffenerHaushalt is a simple Flask application that will be frozen to static HTML documents. The rendered (and statically saved) site can be downloaded to Amazon S3 and served from there. The following dependencies are required to build the site: 

* Python 2.x, virtualenv
* node.js with npm, and global installs of: uglify-js, less, bower

When you have OffenerHaushalt checked out, follow these steps: 

    bower install
    virtualenv pyenv
    source pyenv/bin/activate
    pip install -r requirements.txt
    python setup.py develop

You can then run the site like a normal Flask application: 

	python offenerhaushalt/manage.py runserver


### License

Copyright (c) 2013: Friedrich Lindenberg, Stefan Wehrmeyer

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

