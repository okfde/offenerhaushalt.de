---
name: Stadt Hückeswagen
slug: hueckeswagen
tagline: "Haushalt Hueckeswagen 2016."
level: kommune
state: NW
budget:
  source: Joerg Tillmans
  data_url: http://db.offenerhaushalt.de/api/3/datasets/haushalt-hueckeswagen-2016/serve/2016-09-30-huckeswagen-daten-offener-haushalt-hp-2016-final.txt

  dataset: haushalt-hueckeswagen-2016
  default: produkte

  filters:
    # - field: 'jahr'
    #   name: 'Jahr'
    #   default: '2016'
    - field: 'fluss'
      name: 'Fluss'
      default: 'Aufwendung '

  hierarchies:
    arten:
      name: Kostenarten
      drilldowns:
        - kostenarten

    produkte:
      name: Produkte
      drilldowns:
        - produktbereich
        - produktgruppe
---
