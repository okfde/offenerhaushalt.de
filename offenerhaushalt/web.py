from flask import render_template, redirect

from offenerhaushalt.core import app, pages
from offenerhaushalt.util import JSONEncoder
from offenerhaushalt.sites import load_sites

sites = load_sites()


@app.route('/haushalt/<slug>/')
def site(slug, template='site.html'):
    site = sites.get(slug)
    site_json = JSONEncoder().encode(site)
    return render_template(template, site=site, site_json=site_json)


@app.route('/haushalt/<slug>/embed/')
def embed_site(slug):
    return site(slug, template='embed.html')


@app.route('/page/<path:path>.html')
def page(path):
    page = pages.get_or_404(path)
    template = page.meta.get('template', 'page.html')
    return render_template(template, page=page,
                           framed=page.meta.get('framed', True))


@app.route('/')
def index():
    return redirect('/haushalt/wuppertal/')

