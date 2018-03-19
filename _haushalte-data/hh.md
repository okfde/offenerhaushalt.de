---
_id: a3d49570-2b7b-11e8-ad1f-8d4eb113e003
state: HH
name: HH
level: land
config: |-
  {
    "datapackage": "979a04af3ee49595c1881cffe7554549:budget_germany_hamburg_test",
    "hierarchies": [
      {
        "datapackageHierarchy": "functional_classification",
        "url": "einzelplan",
        "label": "Einzelplan"
      }
    ],
    "value": [
      {
        "field": "Betrag.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ".",
          "thousand": ",",
          "precision": "",
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Betrag "
      }
    ],
    "scale": [
      {
        "label": "Total",
        "number": 1,
        "description": ""
      },
      {
        "label": "Pro Einwohner",
        "number": "1807551",
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
        "defaultValue": 2018,
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": 2014,
            "label": 2014
          },
          {
            "value": 2015,
            "label": 2015
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
      "Soll/Ist": {
        "name": "phase_2.Soll_Ist",
        "label_ref": "phase_2.Soll_Ist",
        "ref": "phase_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ist",
        "defaultLabel": "All",
        "label": "Soll/Ist",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Ist",
            "label": "Ist"
          },
          {
            "value": "Soll",
            "label": "Soll"
          }
        ]
      },
      "E/A": {
        "name": "direction_2.E_A",
        "label_ref": "direction_2.E_A",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "A",
        "defaultLabel": "All",
        "label": "Ertrag/Aufwendung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "A",
            "label": "A"
          },
          {
            "value": "E",
            "label": "E"
          }
        ]
      }
    },
    "level": "land",
    "state": "HH",
    "name": "HH",
    "text": "Haushalt"
  }
slug: hh
---
Haushalt
