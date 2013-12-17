from flask.ext.script import Manager

from offenerhaushalt.web import app
#from offenerhaushalt.model import *

manager = Manager(app)

if __name__ == '__main__':
    manager.run()

