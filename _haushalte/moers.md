---
_id: 4c268390-e0be-11e7-9d16-ed20949b8d27
state: NW
name: Moers
text: Das ist der Haushalt für Moers
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:moers-all",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplane",
        "label": "Einzelpläne"
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
        "label": "Pro Einwohner (104.259 in 2015)",
        "number": "104529",
        "description": "p. E. "
      },
      {
        "label": "Pro Arbeitnehmer (34.356 in 2016)",
        "number": "34.356",
        "description": "p. A."
      },
      {
        "label": "Pro 6-18 Jährige (11.014 in 2015)",
        "number": "11014",
        "description": "p. J."
      }
    ],
    "filters": {
      "Betrag_Typ": {
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
        "defaultValue": "Aufwendungen",
        "defaultLabel": "All",
        "label": "Budget Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Aufwendungen",
            "label": "Aufwendungen"
          },
          {
            "value": "Erträge",
            "label": "Erträge"
          }
        ]
      },
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
      }
    },
    "level": "kommune",
    "state": "NW",
    "name": "Moers",
    "text": "Das ist der Haushalt für Moers"
  }
date: '2017-12-14T11:02:38.643Z'
slug: moers
---
undefined
