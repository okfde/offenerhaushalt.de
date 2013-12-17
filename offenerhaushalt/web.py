from flask import render_template

from offenerhaushalt.core import app, sites

@app.route('/')
def index():
	return render_template('index.html', sites=sites)
