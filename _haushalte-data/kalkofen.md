---
_id: 1532b390-2c45-11e8-ad1f-8d4eb113e003
state: RP
name: Kalkofen
level: kommune
config: |-
  {
    "datapackage": "bb11bf9b2732d6d1e5f7ec850554780a:haushaltsplan",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "teilhaushalte",
        "label": "Teilhaushalte"
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
    "scale": [],
    "filters": {
      "Haushaltsjahr": {
        "name": "date_2.Haushaltsjahr",
        "label_ref": "date_2.Haushaltsjahr",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Haushaltsjahr",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": 2017,
            "label": 2017
          },
          {
            "value": 2018,
            "label": 2018
          }
        ]
      },
      "Budgetrichtung": {
        "name": "direction_2.Budgetrichtung",
        "label_ref": "direction_2.Budgetrichtung",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Budgetrichtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Aufwand",
            "label": "Aufwand"
          },
          {
            "value": "Ertrag",
            "label": "Ertrag"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "RP",
    "name": "Kalkofen",
    "text": "Haushaltsplan 2017 und 2018"
  }
slug: kalkofen
---
Haushaltsplan 2017 und 2018
