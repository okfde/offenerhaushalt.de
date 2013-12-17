from flask import render_template

from offenerhaushalt.core import app, sites, pages


@app.route('/haushalt/<slug>/')
def site(slug):
    site = sites.get(slug)
    return render_template('site.html', site=site)


@app.route('/page/<path:path>.html')
def page(path):
    page = pages.get_or_404(path)
    template = page.meta.get('template', 'page.html')
    return render_template(template, page=page)


@app.route('/')
def index():
    return render_template('index.html', sites=sites)
