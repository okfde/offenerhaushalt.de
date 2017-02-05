---
name: Land Berlin
slug: berlin
tagline: "Landeshaushalt für Berlin, verabschiedet durch den Senat der Stadt Berlin."
level: land
state: BE
budget:
  source: Stadt Berlin
  source_url: http://daten.berlin.de
  data_url: http://opendatalabs.org/de/haushalt

  dataset: berlin_de
  default: einzelplan

  filters:
    - field: 'year'
      name: 'Jahr'
      default: 2013
    - field: 'typ'
      name: 'Typ'
      default: ''
      nullable: true
    - field: 'titelart'
      name: 'Art'
      default: 'Ausgabetitel'

  hierarchies:
    einzelplan:
      name: Einzelpläne
      drilldowns:
        - einzelplan
        - to
        - titel

    funktion:
      name: Funktionen
      drilldowns:
        - hauptfunktion
        - oberfunktion
        - funktion
---
