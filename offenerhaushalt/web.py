from flask import render_template

from offenerhaushalt.core import app, sites

@app.route('/haushalt/<slug>/')
def site(slug):
	site = sites.get(slug)
	return render_template('site.html', site=site)

@app.route('/')
def index():
	return render_template('index.html', sites=sites)
