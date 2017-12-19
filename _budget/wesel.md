---
name: Stadt Wesel
slug: wesel
tagline: "Haushaltsplan der Stadt Wesel."
level: kommune
skip: true
state: NW
coordinates:
  lat: 51.6576909
  lng: 6.617087
budget:
  source: Markus Scholten
  data_url: https://www.offenesdatenportal.de/dataset/haushaltsplan-2015-stadt-wesel-aufwand-und-ertrag/

  dataset: wesel
  default: profitcenter

  filters:
    - field: 'jahr'
      name: 'Jahr'
      default: 2015
    - field: 'art'
      name: 'Art'
      default: 'Plan'
    - field: 'einnahme_ausgabe'
      name: 'Einnahme/Ausgabe'
      default: 'Ausgabe'

  hierarchies:
    profitcenter:
      name: Profitcenter
      drilldowns:
        - profitcenter
        - kostenart
---
