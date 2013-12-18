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
		return self.sites.__iter__()

	def to_dict(self):
		return {'sites': self.sites}


class Site(_DataObject):

	def __init__(self, data):
		self.data = data
		self.slug = slugify(data.get('slug', data.get('name')))

	def to_dict(self):
		data = self.data.copy()
		data['slug'] = self.slug
		return data


def load_sites(app):
	with open(app.config['SITES_FILE'], 'rb') as fh:
		data = yaml.load(fh)
		return SiteCollection(data)