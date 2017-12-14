---
_id: da246490-e0b5-11e7-9d16-ed20949b8d27
state: NW
name: Moers
text: >-
  Hier sind die Haushalte für Moers. Ist-Daten für 2015-2016 und soll Daten
  2017-2021
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:moers-all",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplan",
        "label": "Einzelplan"
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "institutionen",
        "label": "Institutionen"
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
        "label": "Pro Einwohner (104.529 in 2015)",
        "number": "104529",
        "description": "p. E. "
      },
      {
        "label": "Pro Arbeitnehmer (34.356 in 2016)",
        "number": "34356",
        "description": "p. A. "
      },
      {
        "label": "pro 6-18 Jähriger (11.014 in 2015)",
        "number": "11014",
        "description": ""
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
        "defaultLabel": "Aufwendungen",
        "label": "Jahr",
        "values": [
          {
            "value": 2015,
            "label": 2015
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
          },
          {
            "value": 2021,
            "label": 2021
          }
        ]
      },
      "Betrag_Typ": {
        "name": "value_kind_2.Betrag_Typ",
        "label_ref": "value_kind_2.Betrag_Typ",
        "ref": "value_kind_2",
        "type": "string",
        "default": true,
        "defaultValue": "Plan",
        "defaultLabel": "All",
        "label": "Haushalt Art",
        "values": [
          {
            "value": "Ist",
            "label": "Ist"
          },
          {
            "value": "Plan",
            "label": "Plan"
          }
        ]
      },
      "HH Art": {
        "name": "direction_2.HH_Art",
        "label_ref": "direction_2.HH_Art",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "Aufwendungen",
        "label": "HH Art",
        "values": [
          {
            "value": "Aufwendungen",
            "label": "Aufwendungen"
          },
          {
            "value": "Erträge",
            "label": "Erträge"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "NW",
    "name": "Moers",
    "text": "Hier sind die Haushalte für Moers. Ist-Daten für 2015-2016 und soll Daten 2017-2021"
  }
date: '2017-12-14T10:02:11.427Z'
slug: moers
---
undefined
