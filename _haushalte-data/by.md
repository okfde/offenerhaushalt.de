---
_id: 7c42eca0-4214-11e8-ad1f-8d4eb113e003
state: BY
name: BY
level: land
config: |-
  {
    "datapackage": "edd02e0c9f52514a5fc91089639095b4:muenchen",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "teilhaushalte",
        "label": "Teilhaushalte"
      }
    ],
    "value": [
      {
        "field": "betrag.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": "0",
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "B"
      }
    ],
    "scale": [
      {
        "label": "Total",
        "number": 1,
        "description": ""
      },
      {
        "label": "pro Einwohner (1545105 in 2017)",
        "number": "1545105",
        "description": "p.E."
      }
    ],
    "filters": {
      "art": {
        "name": "direction_2.art",
        "label_ref": "direction_2.art",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ordentliche Aufwendungen der LHM",
        "defaultLabel": "All",
        "label": "Budget Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Ordentliche Aufwendungen der LHM",
            "label": "Ordentliche Aufwendungen der LHM"
          },
          {
            "value": "Ordentliche Erträge LHM",
            "label": "Ordentliche Erträge LHM"
          }
        ]
      },
      "referat": {
        "name": "administrative_classification_2.referat",
        "label_ref": "administrative_classification_2.referat",
        "ref": "administrative_classification_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Referat",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Baureferat",
            "label": "Baureferat"
          },
          {
            "value": "Direktorium",
            "label": "Direktorium"
          },
          {
            "value": "Kommunalreferat",
            "label": "Kommunalreferat"
          },
          {
            "value": "Kreisverwaltungsreferat",
            "label": "Kreisverwaltungsreferat"
          },
          {
            "value": "Kulturreferat",
            "label": "Kulturreferat"
          },
          {
            "value": "Personal- und Organisationsreferat",
            "label": "Personal- und Organisationsreferat"
          },
          {
            "value": "Planungsreferat",
            "label": "Planungsreferat"
          },
          {
            "value": "Referat für Arbeit und Wirtschaft",
            "label": "Referat für Arbeit und Wirtschaft"
          },
          {
            "value": "Referat für Bildung und Sport",
            "label": "Referat für Bildung und Sport"
          },
          {
            "value": "Referat für Gesundheit und Umwelt",
            "label": "Referat für Gesundheit und Umwelt"
          },
          {
            "value": "Referat für Informations- und Telekommunikationstechnik",
            "label": "Referat für Informations- und Telekommunikationstechnik"
          },
          {
            "value": "Revisionsamt",
            "label": "Revisionsamt"
          },
          {
            "value": "Sozialreferat",
            "label": "Sozialreferat"
          },
          {
            "value": "Stadtkämmerei",
            "label": "Stadtkämmerei"
          },
          {
            "value": "Stiftungen ohne eigene Rechtspersönlichkeit",
            "label": "Stiftungen ohne eigene Rechtspersönlichkeit"
          },
          {
            "value": "Zentrale Ansätze",
            "label": "Zentrale Ansätze"
          }
        ]
      }
    },
    "text": "Während die Finanzrechnung die zahlungswirksamen Ein- und Auszahlungen aufweist, enthält die Ergebnisrechnung daneben auch die nicht zahlungswirksamen Aufwendungen (beispielsweise Abschreibungen und Rückstellungen für Pensionen und Beihilfe) und gibt damit Auskunft über das Ressourcenaufkommen und den Ressourcenverbrauch im Haushaltsjahr.\n\nDie Ergebnisrechnung besteht aus den Erträgen und den Aufwendungen.\n\nMit der Haushaltsplanung 2018 wurden die ehemaligen Produkte zu neuen Profit Centern zusammengefasst. Daher sind die aktuellen mit den vorherigen Daten nicht vergleichbar.\n",
    "level": "land",
    "state": "BY",
    "name": "BY"
  }
slug: by
---
Während die Finanzrechnung die zahlungswirksamen Ein- und Auszahlungen aufweist, enthält die Ergebnisrechnung daneben auch die nicht zahlungswirksamen Aufwendungen (beispielsweise Abschreibungen und Rückstellungen für Pensionen und Beihilfe) und gibt damit Auskunft über das Ressourcenaufkommen und den Ressourcenverbrauch im Haushaltsjahr.

Die Ergebnisrechnung besteht aus den Erträgen und den Aufwendungen.

Mit der Haushaltsplanung 2018 wurden die ehemaligen Produkte zu neuen Profit Centern zusammengefasst. Daher sind die aktuellen mit den vorherigen Daten nicht vergleichbar.
