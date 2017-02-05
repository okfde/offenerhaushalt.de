---
name: Bezirk Oberbayern
slug: oberbayern
tagline: "Haushalt des Bezirks Oberbayern."
level: bezirk
state: BY
budget:
  source: David Krcek
  source_url: https://openspending.org/open_bzobb/meta
  data_url: http://www.krcek.de/wp-content/uploads/2014/12/bzobb.csv

  dataset: open_bzobb
  default: kameral

  filters:
    - field: 'year'
      name: 'Jahr'
      default: 2015
    - field: 'einnahme_ausgabe'
      name: 'Ein/Aus'
      default: 'Ausgabe'

  hierarchies:
    kameral:
      name: Haushalt
      drilldowns:
        - einzelplan
        - unterabschnitt
        - haushaltstelle
---
