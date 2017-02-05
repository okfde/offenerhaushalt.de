---
name: Stadt Krefeld
slug: krefeld
tagline: "Haushalt Krefeld 2015-2019."
level: kommune
state: NW
coordinates:
  lat: 51.3331205
  lng: 6.5623343
budget:
  source: Heinz-Georg van Moelken - Stadt Krefeld
  data_url: http://db.offenerhaushalt.de/api/3/datasets/krefeld20152019descriptors/serve/2016-11-18-krefeld-plan-mit-beschreibung-2016-11-18-krefeld-plan-mit-bes.csv

  dataset: krefeld20152019descriptors
  default: produkte

  filters:
    - field: 'jahr'
      name: 'Jahr'
      default: '2016'
    # - field: 'plan'
    #   name: 'Plan'
    #   default: 'Plan'

  hierarchies:
    arten:
      name: Profitcenter
      drilldowns:
        - profitcenter
        - kostenarten
        - auftrag

    produkte:
      name: Produkte
      drilldowns:
        - gb
        - fachbereich
        - im_hh
---
