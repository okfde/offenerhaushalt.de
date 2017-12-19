---
name: Staatshaushalt Bayern
slug: bayern
tagline: "Der Staatshaushalt enthält Angaben zu den Ausgaben und Einnahmen der Staatsregierung."
level: land
state: BY
budget:
  source: David Krcek
  source_url: https://openspending.org/open_by/meta
  data_url: http://www.krcek.de/wp-content/uploads/2015/02/bayern.csv

  dataset: open_by
  default: einzelplan

  filters:
    - field: 'year'
      name: 'Jahr'
      default: 2015
    - field: 'einnahme_ausgabe'
      name: 'E/A'
      default: 'Ausgaben'

  hierarchies:
    einzelplan:
      name: "Einzelpläne"
      drilldowns:
        - einzelplan
        - kapitel
        - titel
---
