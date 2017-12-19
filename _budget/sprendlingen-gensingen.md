---
name: Verbandsgemeinde Sprendlingen Gensingen
slug: sprendlingen-gensingen
tagline: "Haushalt-2016-Sprendlingen-Gensingen"
level: kommune
state: RP
coordinates:
  lat: 49.87561055
  lng: 8.005124899
budget:
  source: Nico Heinz
  source_url: http://db.offenerhaushalt.de/api/3/datasets/sprendlingen-gensingen/serve/aufstellungoffenerhaushalt.csv

  dataset: sprendlingen-gensingen
  default: fachbereich

  filters:
    - field: kz
      name: 'KZ'
      default: 'ES'

  hierarchies:
    fachbereich:
      name: Fachbereich
      drilldowns:
        - fachbereich
        - leistung
        - bezeichnung
---
