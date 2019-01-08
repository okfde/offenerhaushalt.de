---
_id: c58aa850-2b65-11e8-ad1f-8d4eb113e003
state: BB
name: Potsdam
level: kommune
config: |-
  {
    "colors": [
        "#CF3D1E", "#F15623", "#F68B1F", "#FFC60B", "#DFCE21",
        "#BCD631", "#95C93D", "#48B85C", "#00833D", "#00B48D",
        "#60C4B1", "#27C4F4", "#478DCB", "#3E67B1", "#4251A3",
        "#59449B", "#6E3F7C", "#6A246D", "#8A4873", "#EB0080",
        "#EF58A0", "#C05A89"
    ],
    "datapackage": "57ea7e534f0e322bcd24827e854cf172:potsdam-haushalt-2018-entwurf",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "administrative_classification",
        "label": "Administrative Einteilung"
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "economic_classification",
        "label": "Wirtschaftliche Einteilung"
      }
    ],
    "value": [
      {
        "field": "Amount.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ".",
          "thousand": ",",
          "precision": 2,
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Betrag"
      }
    ],
    "scale": [],
    "filters": {
      "Year": {
        "name": "date_2.Year",
        "label_ref": "date_2.Year",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2018,
        "defaultLabel": "2018",
        "label": "Jahr",
        "values": [
          {
            "value": 2016,
            "label": 2016
          },
          {
            "value": 2017,
            "label": 2017
          },
          {
            "value": 2018,
            "label": 2018
          },
          {
            "value": 2019,
            "label": 2019
          },
          {
            "value": 2020,
            "label": 2020
          }
        ]
      },
      "Category": {
        "name": "phase_2.Category",
        "label_ref": "phase_2.Category",
        "ref": "phase_2",
        "type": "string",
        "default": true,
        "defaultValue": "FP",
        "defaultLabel": "FP",
        "label": "Kategorie",
        "values": [
          {
            "value": "Ansatz",
            "label": "Ansatz"
          },
          {
            "value": "Diff",
            "label": "Diff"
          },
          {
            "value": "FP",
            "label": "FP"
          },
          {
            "value": "Mifi",
            "label": "Mifi"
          }
        ]
      },
      "Direction": {
        "name": "direction_2.Direction",
        "label_ref": "direction_2.Direction",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "expenditure",
        "defaultLabel": "Ausgaben",
        "label": "Richtung",
        "values": [
          {
            "value": "expenditure",
            "label": "Ausgaben"
          },
          {
            "value": "revenue",
            "label": "Einnahmen"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "BB",
    "name": "Potsdam",
    "text": "Haushalt 2018 Entwurf",
    "valueHeader": "Category",
    "hasBarChart": false,
    "date": "date_2.Year",
    "dateFilter": "Jahr",
    "budgetType": "phase_2.Category",
    "budgetTypeFilter": "Category"
  }
slug: potsdam
---
Haushalt 2018 Entwurf
