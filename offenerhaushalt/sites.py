import yaml
from slugify import slugify


class _DataObject(object):

	def __getattr__(self, k):
		return self.data.get(k)


class SiteCollection(object):

	def __init__(self, data):
		self.sites = [Site(d) for d in data.get('sites', [])]

	def get(self, slug):
		for site in self.sites:
			if site.slug == slug:
				return site

	def __iter__(self):
		return self.sites


class Site(_DataObject):

	def __init__(self, data):
		self.data = data
		self.slug = slugify(data.get('slug', data.get('name')))


def load_sites(app):
	with open(app.config['SITES_FILE'], 'rb') as fh:
		data = yaml.load(fh)
		return [Site(d) for d in data.get('sites', [])]