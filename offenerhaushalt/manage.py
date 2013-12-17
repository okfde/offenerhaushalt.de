from flask.ext.script import Manager

from offenerhaushalt.web import app
from offenerhaushalt.core import freezer

manager = Manager(app)


@manager.command
def freeze():
    """ Freeze the entire site to static HTML. """
    freezer.freeze()

if __name__ == '__main__':
    manager.run()

