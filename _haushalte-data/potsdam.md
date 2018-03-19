---
_id: c58aa850-2b65-11e8-ad1f-8d4eb113e003
state: BB
name: Potsdam
level: kommune
config: |-
  {
    "datapackage": "57ea7e534f0e322bcd24827e854cf172:potsdam-haushalt-2018-entwurf",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "administrative_classification",
        "label": "Administrative Classification"
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
        "label": "Amount"
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
        "defaultLabel": "All",
        "label": "Year",
        "values": [
          {
            "value": "",
            "label": "All"
          },
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
        "defaultLabel": "All",
        "label": "Category",
        "values": [
          {
            "value": "",
            "label": "All"
          },
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
        "defaultLabel": "All",
        "label": "Direction",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "expenditure",
            "label": "expenditure"
          },
          {
            "value": "revenue",
            "label": "revenue"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "BB",
    "name": "Potsdam",
    "text": "Haushalt 2018 Entwurf"
  }
slug: potsdam
---
Haushalt 2018 Entwurf
