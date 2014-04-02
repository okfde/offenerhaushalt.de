from flask.ext.script import Manager

from offenerhaushalt.web import app, sites
from offenerhaushalt.generators import freezer
from offenerhaushalt.aggregator import AggregatorClient

manager = Manager(app)


@manager.command
def freeze():
    """ Freeze the entire site to static HTML. """
    app.config['DEBUG'] = False
    app.config['ASSETS_DEBUG'] = False
    for site in sites:
        AggregatorClient(site).freeze()
    freezer.freeze()

if __name__ == '__main__':
    manager.run()

