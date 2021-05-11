---
_id: 9a9b9b10-e103-11e7-bde9-99b7584a705b
name: Bundeshaushalt
slug: bund
url: /haushalt/bund
level: bund
state: DE
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:bundeshaushalt",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplane",
        "label": "Einzelpläne"
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "gruppen",
        "label": "Gruppen"
      },
      {
        "datapackageHierarchy": "functional_classification",
        "url": "funktionen",
        "label": "Funktionen"
      }
    ],
    "value": [
      {
        "field": "soll.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": "",
          "format": "%s%v",
          "postfix": " €",
          "grouping": 3
        },
        "label": "Betrag"
      }
    ],
    "scale": [
      {
        "label": "Total",
        "number": 1,
        "description": ""
      },
      {
        "label": "pro Einwohner (82.457.000 in 2016)",
        "number": "82457000",
        "description": "p. E."
      }
    ],
    "filters": {
      "einnahmen-ausgaben": {
        "name": "direction_2.einnahmen_ausgaben",
        "label_ref": "direction_2.einnahmen_ausgaben",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ausgaben",
        "defaultLabel": "All",
        "label": "Budget Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Ausgaben",
            "label": "Ausgaben"
          },
          {
            "value": "Einnahmen ",
            "label": "Einnahmen "
          }
        ]
      },
      "date": {
        "name": "date_2.date",
        "label_ref": "date_2.date",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2017,
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": 2017,
            "label": 2017
          }
        ]
      }
    },
    "name": "Bundeshaushalt",
    "state": "DE",
    "level": "bund",
    "text": "Test Test Test"
  }
---
Die Quelle für den visualisierten Datensatz findet sich auf dieser [Webseite](https://www.bundeshaushalt-info.de/download.html). Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die Validität nicht zu 100% garantieren.
