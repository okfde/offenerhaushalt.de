---
name: Bezirk Schwaben
slug: schwaben
tagline: "Haushalt des Bezirks Schwaben."
level: bezirk
state: BY
budget:
    source: David Krcek
    source_url: https://openspending.org/open_bzswa/meta
    data_url: http://www.krcek.de/wp-content/uploads/2014/12/bzschw.csv

    dataset: open_bzswa
    default: kameral

    filters:
      - field: 'year'
        name: 'Jahr'
        default: 2014
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
