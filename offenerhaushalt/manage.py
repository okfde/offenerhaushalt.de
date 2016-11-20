from flask.ext.script import Manager
from flask_assets import ManageAssets

from offenerhaushalt.web import app, assets
from offenerhaushalt.generators import freezer

manager = Manager(app)
manager.add_command("assets", ManageAssets(assets))


@manager.command
def freeze():
    """ Freeze the entire site to static HTML. """
    app.config['DEBUG'] = False
    app.config['ASSETS_DEBUG'] = False
    freezer.freeze()


if __name__ == '__main__':
    manager.run()
