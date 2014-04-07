import os
import json
from hashlib import sha1
import itertools
import requests

from offenerhaushalt.core import app, sites


def api_get(query):
    res = requests.get('https://openspending.org/api/2/aggregate', params=query)
    return res.json()



class AggregatorClient(object):
    
    def __init__(self, site):
        self.site = site

    @property
    def drilldowns(self):
        for hierarchy in self.site.data.get('hierarchies').values():
            drilldowns = hierarchy.get('drilldowns')
            for i in range(1, len(drilldowns)+1):
                yield drilldowns[:i]

    @property
    def dataset(self):
        return self.site.dataset

    @property
    def filters(self):
        fields = []
        for filter_ in self.site.filters:
            field = filter_.data.get('field')
            f = [(field, v) for v in filter_.values]
            fields.append(f)
        return itertools.product(*fields)

    @property
    def queries(self):
        for filt in self.filters:
            f = ['%s:%s' % (k,v) for (k,v) in filt]
            filt_text = '|'.join(sorted(f))
            for drilldown in self.drilldowns:
                dd = '|'.join(sorted(drilldown))
                key = '%s@%s' % (filt_text, dd)
                yield key, {
                    'dataset': self.site.dataset,
                    'cut': filt_text,
                    'drilldown': dd
                    }

    def freeze(self):
        path = os.path.join(app.static_folder, 'aggregates/%s' % self.site.dataset)
        if not os.path.isdir(path):
            os.makedirs(path)

        for key, query in self.queries:
            hash_ = sha1(key.encode('utf-8')).hexdigest()
            file_name = os.path.join(path, hash_ + '.json')
            if os.path.isfile(file_name):
                continue
            query_data = api_get(query)
            with open(file_name, 'wb') as fh:
                fh.write(json.dumps(query_data))
