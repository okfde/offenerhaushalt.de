---
name: Stadt Kassel
slug: kassel
tagline: "Haushaltsplan 2014-2016 der Stadt Kassel."
source: Volker Berkout
data_url: http://db.offenerhaushalt.de/api/3/datasets/stadt-kassel---haushalt-2016/serve/haushalt-kassel-2016.ods
state: HE
level: kommune
dataset: stadt-kassel---haushalt-2016
default: kosten

filters:
  - field: 'jahr'
    name: 'Jahr'
    default: 2015
  - field: 'einnahme_ausgabe'
    name: 'Einnahme/Ausgabe'
    default: 'Ausgabe'

hierarchies:
    kosten:
        name: Haushalt
        drilldowns:
            - dezernat
            - amt
            - kostenart
---
