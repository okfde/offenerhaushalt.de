from flask import render_template

from offenerhaushalt.core import app

@app.route('/')
def index():
	return render_template('index.html')
