import yaml
import requests
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


class Filter(_DataObject):

	def __init__(self, site, data):
		self.site = site
		self.data = data
		self.default = unicode(data.get('default'))
		self._values = None

	@property
	def values(self):
		if self._values is None:
			field = self.data.get('field')
			dimension, attribute = field, None
			if '.' in dimension:
				dimension, attribute = dimension.split('.', 2)

			res = requests.get('https://openspending.org/api/2/aggregate',
				params={'dataset': self.site.dataset, 'drilldown': field})
			
			self._values = []
			for drilldown in res.json().get('drilldown'):
				v = drilldown.get(dimension)
				if isinstance(v, dict):
					if not attribute:
						self.data['field'] = field + '.label'
					v = v.get(attribute or 'label')
				self._values.append(v)
			self._values = list(sorted(self._values))
		return self._values

	@property
	def class_name(self):
		_ = self.values
		return self.field.replace('.', ' ')

	def to_dict(self):
		values = self.values
		data = self.data.copy()
		data['slug'] = self.slug
		data['values'] = values
		return data

class Site(_DataObject):

	def __init__(self, data):
		self.data = data
		self.slug = slugify(data.get('slug', data.get('name')))
		self.filters = [Filter(self, d) for d in data.get('filters', [])]

	def to_dict(self):
		data = self.data.copy()
		data['slug'] = self.slug
		data['filters'] = self.filters
		return data


def load_sites(app):
	with open(app.config['SITES_FILE'], 'rb') as fh:
		data = yaml.load(fh)
		return SiteCollection(data)