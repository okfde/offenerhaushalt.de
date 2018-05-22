---
_id: 0d5e0f20-5dd7-11e8-a999-596b9e5044d6
state: NW
name: Arnsberg
level: kommune
config: |-
  {
    "datapackage": "d80622bc12990bd7693cc92853bc6bc6:arnsberg410",
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
        "label": "pro Einwohner (73.990 Stand 31.12.2016)",
        "number": "73990",
        "description": "pro EW"
      }
    ],
    "filters": {
      "Jahr": {
        "name": "jahr.jahr",
        "label_ref": "jahr.jahr",
        "ref": "jahr",
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
      "Betrag Typ": {
        "name": "betrag_typ.betrag_typ",
        "label_ref": "betrag_typ.betrag_typ",
        "ref": "betrag_typ",
        "default": true,
        "defaultValue": "Plan",
        "defaultLabel": "All",
        "label": "Betrag Typ",
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
      },
      "Budget Richtung": {
        "name": "budget_richtung.budget_richtung",
        "label_ref": "budget_richtung.budget_richtung",
        "ref": "budget_richtung",
        "default": true,
        "defaultValue": "Aufwendung",
        "defaultLabel": "All",
        "label": "Budget Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Aufwendung",
            "label": "Aufwendung"
          },
          {
            "value": "Ertrag",
            "label": "Ertrag"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "NW",
    "name": "Arnsberg",
    "text": "Stadt Arnsberg Haushalt 2018"
  }
slug: arnsberg
---
Stadt Arnsberg Haushalt 2018
