---
name: Stadt Kelkheim am Taunus
slug: kelkheim
tagline: "Haushalt 2011-2016 der Stadt Kelkheim am Taunus"
level: kommune
state: HE
budget:
    source: Ines Albani
    source_url: http://db.offenerhaushalt.de/api/3/datasets/kelkheim-2011-bis-entwurf-2017/serve/kelkheimamtaunus2011bis2017.xlsx
    dataset: kelkheimamtaunus2011bis2016
    default: produkte

    filters:
      - field: 'position'
        name: 'position'
        default: 'Aufwand'
      - field: 'jahr'
        name: 'Jahr'
        default: '2017'

    hierarchies:
        produkte:
            name: Produkt
            drilldowns:
                - amt
                - produkt
                - kostenart
---
