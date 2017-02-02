---
name: Stadt Hildesheim
slug: hildesheim
tagline: "Ergebnishaushalt 2015."
source:  Stadt Hildesheim
data_url: http://db.offenerhaushalt.de/api/3/datasets/nachtragshaushaltsplan-2015/serve/2015-haushalt-nachtrag.txt
state: NI
level: kommune
dataset: nachtragshaushaltsplan-2015
default: produkte

filters:
  # - field: 'jahr'
  #   name: 'Jahr'
  #   default: '2015'
  - field: 'haushalt'
    name: 'Haushalt'
    default: 'Ergebnishaushalt'
  - field: 'e_a'
    name: 'Ertrag/Aufwand'
    default: 'Aufwand'

hierarchies:
    produkte:
        name: Produkte
        drilldowns:
            - produktrahmen
            - produktbereich
            - produktgruppe
            - produkt
---
