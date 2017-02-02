---
# name: Stadt Bonn (Planung 2015-2019)
# slug: bonn-planung
# tagline: "Haushaltsplanung 2015-2019 der Stadt Bonn."
# source: OpenData Bonn
# source_url: http://opendata.bonn.de/
# data_url: http://opendatalabs.org/misc/Haushaltsdaten-2015-2019-xlsx%20%282%29.csv
# state: NW
# level: kommune
# dataset: de-bonn-planung
# default: produkte

# filters:
#   - field: 'year'
#     name: 'Jahr'
#     default: 2015
#   - field: 'kontotyp'
#     name: 'Art'
#     default: 'Aufwendung'

# hierarchies:
#     produkte:
#         name: Produkte
#         drilldowns:
#             - produktbereich
#             - produktgruppe

name: Stadt Bonn Haushalt 2017-2024
slug: bonn-planung
tagline: "Haushaltsplanung 2017-2024 der Stadt Bonn."
source: OpenData Bonn
source_url: http://opendata.bonn.de/
state: NW
level: kommune
dataset: haushaltbonn20172024updated
default: produkte

filters:
  - field: 'jahr'
    name: 'Jahr'
    default: 2017
  - field: 'fluss'
    name: 'Kostenart'
    default: 'Aufwendungen'

hierarchies:
    produkte:
        name: Produkte
        drilldowns:
            - produktbereich
            - produkt
---
