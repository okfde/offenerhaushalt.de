---
_id: 6a23f280-1893-11e8-baa8-9788832e013f
state: NW
name: Roetgen
text: Das ist der Haushalt der Gemeinde Roetgen!
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:roetgen",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produkt",
        "label": "Produkt"
      }
    ],
    "value": [
      {
        "field": "Ansatz.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": "",
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Ansatz"
      }
    ],
    "scale": [
      {
        "label": "Total",
        "number": 1,
        "description": ""
      },
      {
        "label": "pro Einwohner (8.527 in 2015)",
        "number": "8527",
        "description": "p. E."
      }
    ],
    "filters": {
      "Jahr": {
        "name": "date_2.Jahr",
        "label_ref": "date_2.Jahr",
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
      "Art": {
        "name": "direction_2.Art",
        "label_ref": "direction_2.Art",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ausgaben",
        "defaultLabel": "All",
        "label": "Art",
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
            "value": "Einnahmen",
            "label": "Einnahmen"
          }
        ]
      },
      "Haushalt": {
        "name": "phase_2.Haushalt",
        "label_ref": "phase_2.Haushalt",
        "ref": "phase_2",
        "type": "string",
        "default": true,
        "defaultValue": "Plan",
        "defaultLabel": "All",
        "label": "Haushalt",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Plan",
            "label": "Plan"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "NW",
    "name": "Roetgen",
    "text": "Das ist der Haushalt der Gemeinde Roetgen!"
  }
date: '2018-02-23T12:16:45.717Z'
slug: roetgen
---
undefined
