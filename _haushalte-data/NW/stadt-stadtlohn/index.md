---
_id: 175ebea0-3bd8-11e8-ad1f-8d4eb113e003
state: NW
name: Stadt Stadtlohn
level: kommune
config: |-
  {
    "datapackage": "4ecdc5a1489808709bf7cd7b5d35bffa:stadtlohn",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "teilhaushalte",
        "label": "Teilhaushalte"
      }
    ],
    "value": [
      {
        "field": "Ansatz_laufendes_Jahr.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": "0",
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Ansatz laufendes Jahr"
      }
    ],
    "scale": [
      {
        "label": "Total",
        "number": 1,
        "description": ""
      },
      {
        "label": "Pro Einwohner (20.826 in 2016)",
        "number": "20826",
        "description": "p.E."
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
      "Betrag-Typ": {
        "name": "value_kind_2.Betrag_Typ",
        "label_ref": "value_kind_2.Betrag_Typ",
        "ref": "value_kind_2",
        "type": "string",
        "default": true,
        "defaultValue": "Plan",
        "defaultLabel": "All",
        "label": "HH Art",
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
    "level": "kommune",
    "state": "NW",
    "name": "Stadt Stadtlohn",
    "text": "Das ist der endgültige Haushaltsplan 2018 der Stadt Stadtlohn."
  }
slug: stadt-stadtlohn
---
Das ist der endgültige Haushaltsplan 2018 der Stadt Stadtlohn.
