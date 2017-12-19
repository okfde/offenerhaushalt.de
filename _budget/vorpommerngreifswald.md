---
name: Landkreis Vorpommern Greifswald
slug: vorpommerngreifswald
tagline: "Haushalt nach Teilhaushalten und Produkten"
level: bezirk
state: MV
budget:
  source: Martin Banduch
  data_url: "http://db.offenerhaushalt.de/api/3/datasets/lkvg_haushaltsentwurf-2016/serve/lkvk-aa.csv"

  dataset: "lkvg_haushaltsentwurf-2016"
  default: produkte

  filters:
    - field: 'jahr'
      name: 'Jahr'
      default: 2016
    - field: 'fluss'
      name: 'Aufwand/Ergebnis'
      default: 'Aufwand'

  hierarchies:
    produkte:
      name: Haushalt
      drilldowns:
        - teilhaushalt
        - produkt
---
