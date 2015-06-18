import yaml
import requests
import os
from slugify import slugify

from offenerhaushalt.core import app


def urlpath(*a):
    a = [p.strip('/') for p in a]
    return '/'.join(a)


class _DataObject(object):

    def __getattr__(self, k):
        return self.data.get(k)


class SiteCollection(object):

    def __init__(self, directory):
        self.sites = []
        for site_file in os.listdir(directory):
            with open(os.path.join(directory, site_file), 'rb') as fh:
                site = Site(yaml.load(fh))
                self.sites.append(site)

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

            url = urlpath(self.site.api_base, 'members', dimension)
            res = requests.get(url)

            self._values = []
            for value in res.json().get('data'):
                if field in value:
                    value = value.get(field)
                elif dimension in value:
                    value = value.get(dimension)
                else:
                    for dim in self.site.model.get('dimensions'):
                        if dim['name'] != dimension:
                            continue
                        if not len(dim['levels']):
                            continue
                        for lvl in dim['levels']:
                            label = lvl.get('label_attribute')
                            key = '%s.%s' % (dimension, label)
                            value = value.get(key)
                self._values.append(value)
            self._values = list(sorted(self._values))
        return self._values

    @property
    def class_name(self):
        _ = self.values  # noqa
        return self.field.replace('.', ' ')

    def to_dict(self):
        values = self.values
        data = self.data.copy()
        data['values'] = values
        return data


class Site(_DataObject):

    def __init__(self, data):
        self.data = data
        self.slug = slugify(data.get('slug', data.get('name')))
        self.filters = [Filter(self, d) for d in data.get('filters', [])]
        self.api_base = urlpath(app.config['SLICER_URL'], 'cube',
                                self.data.get('dataset'))
        self._model = None

    @property
    def model(self):
        if self._model is None:
            res = requests.get(os.path.join(self.api_base, 'model'))
            self._model = res.json
        return self._model

    def to_dict(self):
        data = self.data.copy()
        data['slug'] = self.slug
        data['api'] = self.api_base
        data['filters'] = self.filters
        return data


def load_sites():
    return SiteCollection(app.config['SITES_FOLDER'])
