import logging

from flask import Flask
from flask.ext.assets import Environment

from offenerhaushalt import default_settings

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.config.from_object(default_settings)
app.config.from_envvar('OFFENERHAUSHALT_SETTINGS', silent=True)

assets = Environment(app)
