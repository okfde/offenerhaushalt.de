---
name: Gemeinde Merzenich
slug: merzenich
tagline: "Haushalt Merzenich 2015"
level: kommune
state: NW
coordinates:
  lat: 50.8281277
  lng: 6.5245079
budget:
  source: Sebastian Schmitz - kdvz-frechen
  source_url: http://db.offenerhaushalt.de/api/3/datasets/hp-2015-merzenich/serve/haushalt-2015-final.ods

  dataset: hp-2015-merzenich
  default: produkte

  filters:
    - field: 'art'
      name: 'Art'
      default: 'Ausgaben'
    - field: 'jahr'
      name: 'Jahr'
      default: '2015'

  hierarchies:
    produkte:
      name: Produkt
      drilldowns:
        - bereich
        - gruppe
        - produkt
        - konto
---
