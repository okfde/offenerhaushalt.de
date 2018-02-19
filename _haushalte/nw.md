---
_id: 7f5bf0b0-1557-11e8-baa8-9788832e013f
state: NW
name: NW
text: Dies ist der Planhaushalt 2018 für die Gemeinde Stadtlohn.
level: land
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:stadtlohn-neu",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produkt",
        "label": "Produkt"
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
        "label": "pro Einwohner (20.411 in 2015)",
        "number": "20411",
        "description": "p. E. "
      }
    ],
    "filters": {
      "Jahr": {
        "name": "date_2.Jahr",
        "label_ref": "date_2.Jahr",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2018,
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": 2018,
            "label": 2018
          }
        ]
      },
      "Budget Richtung": {
        "name": "direction_2.Budget_Richtung",
        "label_ref": "direction_2.Budget_Richtung",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ausgabe",
        "defaultLabel": "All",
        "label": "Budget Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Ausgabe",
            "label": "Ausgabe"
          },
          {
            "value": "Einnahme",
            "label": "Einnahme"
          }
        ]
      }
    },
    "level": "land",
    "state": "NW",
    "text": "Dies ist der Planhaushalt 2018 für die Gemeinde Stadtlohn. ",
    "name": "NW"
  }
date: '2018-02-19T09:30:17.998Z'
slug: nw
---
undefined
