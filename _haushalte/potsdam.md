---
_id: 263812d0-e103-11e7-bde9-99b7584a705b
state: BB
name: Potsdam
level: bund
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
      },
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
      }
    },
    "level": "bund",
    "text": "Test Test Test",
    "state": "BB",
    "name": "Potsdam"
  }
slug: potsdam
---
Test Test Test
