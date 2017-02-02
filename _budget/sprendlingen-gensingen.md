---
name: Verbandsgemeinde Sprendlingen Gensingen
slug: sprendlingen-gensingen
tagline: "Haushalt-2016-Sprendlingen-Gensingen"
source: Nico Heinz
source_url: http://db.offenerhaushalt.de/api/3/datasets/sprendlingen-gensingen/serve/aufstellungoffenerhaushalt.csv
level: kommune
state: RP
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
