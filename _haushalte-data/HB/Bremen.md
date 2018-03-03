---
_id: 2e38b930-0287-11e8-86e6-dd2a0f61d6b6
state: HB
name: Bremen
text: Bremer Haushalt Land (L) und Stadt (S)
level: land
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:bremen-testdaten",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplane",
        "label": "Einzelpläne"
      },
      {
        "datapackageHierarchy": "functional_classification",
        "url": "funktionen",
        "label": "Funktionen"
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "gruppen",
        "label": "Gruppen"
      }
    ],
    "value": [
      {
        "field": "Betrag.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": "",
          "format": "%s%v",
          "postfix": "€",
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
        "label": "pro Einwohner (Stadt) 557.464 in 2015",
        "number": "557464",
        "description": "p.E."
      }
    ],
    "filters": {
      "year": {
        "name": "date_2.year",
        "label_ref": "date_2.year",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2016,
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
          {
            "value": 2016,
            "label": 2016
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
        "label": "Budget Richtung",
        "values": [
          {
            "value": "Ausgaben",
            "label": "Ausgaben"
          },
          {
            "value": "Einnahmen",
            "label": "Einnahmen"
          }
        ]
      }
    },
    "level": "land",
    "state": "HB",
    "text": "Bremer Haushalt Land (L) und Stadt (S)",
    "name": "Bremen"
  }
date: '2018-01-26T10:53:45.641Z'
slug: hb
---
Bremer Haushalt Land (L) und Stadt (S)
