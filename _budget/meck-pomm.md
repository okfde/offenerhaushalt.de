---
name: Land Mecklenburg-Vorpommern
slug: meck-pomm
tagline: "Landeshaushalt Mecklenburg-Vorpommern, HH Jahr 2015."
level: land
state: MV
budget:
  source: Erik Lohse
  source_url: http://db.offenerhaushalt.de/datasets/haushalt-mv-2015/about

  dataset: haushalt-mv-2015
  default: einzelplan

  filters:
    - field: 'einnahme_ausgabe'
      name: 'Einnahme/Ausgabe'
      default: 'Ausgabe'

  hierarchies:
    einzelplan:
      name: Einzelpläne
      drilldowns:
        - einzelplan
        - kapitel
        - haushaltstitel

    funktion:
      name: Funktionen
      drilldowns:
        - funktion
---
