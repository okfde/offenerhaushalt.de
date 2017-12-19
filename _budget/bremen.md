---
name: Stadt und Land Bremen
slug: bremen
tagline: "Haushalts- und Stellenpläne, getrennt nach Land und Stadtgemeinde Bremen."
level: land
state: HB
budget:
  source: Datenportal Bremen
  source_url: "http://www.daten.bremen.de/sixcms/detail.php?gsid=bremen236.c.3624.de&asl=bremen02.c.736.de"
  data_url: http://opendatalabs.org/misc/Bremen-Haushaltsdaten-2011.csv

  dataset: de-bremen
  default: einzelplan

  filters:
    - field: 'year'
      name: 'Jahr'
      default: 2011
    - field: 'richtung'
      name: 'Art'
      default: 'A'
  #  - field: 'from'
  #    name: 'Teilhaushalt'
  #    default: 'land'
  #  - field: 'financial_type'
  #    name: 'Angabe'
  #    default: 'Ist'

  hierarchies:
    einzelplan:
      name: Einzelpläne
      drilldowns:
        - einzelplan
        - kapitel
        - description

    funktionen:
      name: Funktionen
      drilldowns:
        - hauptfunktion
        - oberfunktion
        - funktion

    gruppen:
      name: Gruppen
      drilldowns:
        - hauptgruppe
        - obergruppe
        - gruppe
---
