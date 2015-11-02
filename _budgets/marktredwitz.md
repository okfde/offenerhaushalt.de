---
title: Stadt Marktredwitz
slug: marktredwitz
tagline: "Haushalt der Stadt Marktredwitz"
source: David Krcek
source_url: https://piratenpartei-bayern.de/2015/03/10/open-haushalt-bayern/
data_url: http://db.offenerhaushalt.de/api/3/datasets/stadt-marktredwitz/serve/mkt.csv
state: BY
level: kommune
dataset: stadt-marktredwitz
default: kameral

filters:
  - field: 'jahr'
    name: 'Jahr'
    default: 2015
  - field: 'einnahme_ausgabe'
    name: 'Ein/Aus'
    default: 'Ausgabe'
  # - field: 'haushalt'
  #   name: 'Haushalt'
  #   default: 'A'

hierarchies:
  kameral:
    name: Haushalt
    drilldowns:
      - einzelplan
      - unterabschnitt
      - haushaltstelle
---
