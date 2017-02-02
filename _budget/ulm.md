---
name: Stadt Ulm
slug: ulm
tagline: "Inoffizielle Datenbasis zum Haushalt der Stadt Ulm"
level: kommune
state: BW
budget:
    source: Stefan T Kaufmann
    _source_url: http://www.laatzen.de/
    data_url: http://beta.shutterworks.org/hh/out.csv

    dataset: haushalt_ulm
    default: produktbereiche

    filters:
      - field: 'year'
        name: 'Jahr'
        default: 2012
      - field: 'buchungsart'
        name: 'Art'
        default: 'Aufwendung'

    hierarchies:
        produktbereiche:
            name: Produktbereiche
            drilldowns:
                - produktbereich
                - vwv_kontenbeschreibung
---
