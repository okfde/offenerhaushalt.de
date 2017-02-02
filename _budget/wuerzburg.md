---
name: Stadt Würzburg
slug: wuerzburg
tagline: "Haushalt der Stadt Würzburg kameralistisch 2013 Ergebnis 2014 Ansatz 2015 Ansatz aus einem PDF"
level: kommune
state: BY
budget:
    source: David Krcek
    source_url: https://piratenpartei-bayern.de/2015/03/10/open-haushalt-bayern/
    dataset: stadt-wuerzburg
    default: einzelplan

    filters:
      - field: 'einnahme_ausgabe'
        name: 'Einnahme/Ausgabe'
        default: 'Ausgabe'
      - field: 'soll_ist'
        name: 'Ansatz/Ergebnis'
        default: 'Soll'
      - field: 'jahr'
        name: 'Jahr'
        default: '2015'

    hierarchies:
        einzelplan:
            name: Einzelpläne
            drilldowns:
                - einzelplan
                - unterabschnitt
                - haushaltstelle
---
