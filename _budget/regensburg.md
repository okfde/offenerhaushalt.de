---
name: Stadt Regensburg
slug: regensburg
tagline: "Haushaltsplan 2015 der Stadt Regensburg."
level: kommune
state: BY
coordinates:
  lat: 49.0215974
  lng: 12.1010870
budget:
  source: David Krcek
  source_url: https://openspending.org/open_rgb/meta
  data_url: http://www.krcek.de/wp-content/uploads/2014/12/rgb_2013_b.csv

  dataset: open_rgb
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
