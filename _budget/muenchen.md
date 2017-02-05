---
name: Landeshauptstadt München
slug: muenchen
tagline: "Ergebnishaushalt der Landeshauptstadt München 2015"
level: kommune
state: BY
# skip: true
budget:
  source: Frank Börger
  # source_url: http://
  data_url: http://sfbg.de/lhm/150414_Baum_Ertrag_Aufwand_bearb.csv

  dataset: 'lhm_20150415'
  default: produkte

  filters:
    - field: 'jahr'
      name: 'Jahr'
      default: 2015
    - field: 'art'
      name: 'Art'
      default: 'Ordentliche Aufwendungen LHM'

  hierarchies:
    produkte:
      name: Produkte nach Referat
      drilldowns:
        - referat
        - produkt
---
