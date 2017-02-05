---
name: Stadt Laatzen
slug: laatzen
tagline: "Haushaltsplan 2014/2015 der Stadt Laatzen bei Hannover."
level: kommune
state: NI
budget:
  source: Birgit Fehners
  source_url: http://www.laatzen.de/
  data_url: http://opendatalabs.org/de/haushalt

  dataset: laatzen2014
  default: produkte

  filters:
    - field: 'year'
      name: 'Jahr'
      default: 2014
    - field: 'art'
      name: 'Art'
      default: 'Aufwendungen'

  hierarchies:
    produkte:
      name: Teilhaushalt/Produkte
      drilldowns:
        - teilhaushalt
        - produkt
---
