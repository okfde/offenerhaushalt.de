---
name: Stadt Hof
slug: hof
tagline: "Haushalt der Stadt Hof"
level: kommune
state: BY
coordinates:
  lat: 50.3219015
  lng: 11.9178807
budget:
  source: David Krcek
  source_url: https://piratenpartei-bayern.de/2015/03/10/open-haushalt-bayern/
  data_url: http://www.krcek.de/wp-content/uploads/2015/06/hof.csv

  dataset: open_hof
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
