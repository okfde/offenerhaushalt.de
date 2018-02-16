---
_id: 4d28ef90-132b-11e8-baa8-9788832e013f
state: HE
name: Frankfurt
text: la la la
level: kommune
config: |-
  {
    "datapackage": "99030977d67877e4fc4e5b7306c9f4b1:frankfurt-new",
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
        "label": "pro Einwohner (736.414 in 2016)",
        "number": "736414",
        "description": "p. E."
      }
    ],
    "filters": {
      "Haushaltsjahr": {
        "name": "date_2.Haushaltsjahr",
        "label_ref": "date_2.Haushaltsjahr",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2018,
        "defaultLabel": "All",
        "label": "Haushaltsjahr",
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
          }
        ]
      },
      "Ertrag / Aufwand": {
        "name": "direction_2.Ertrag_Aufwand",
        "label_ref": "direction_2.Ertrag_Aufwand",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Aufwendungen",
        "defaultLabel": "All",
        "label": "Ertrag / Aufwand",
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
      "Haushalt": {
        "name": "phase_2.Haushalt",
        "label_ref": "phase_2.Haushalt",
        "ref": "phase_2",
        "type": "string",
        "default": true,
        "defaultValue": "Plan",
        "defaultLabel": "All",
        "label": "Haushalt",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Plan",
            "label": "Plan"
          },
          {
            "value": "Soll",
            "label": "Soll"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "HE",
    "name": "Frankfurt",
    "text": "la la la"
  }
date: '2018-02-16T15:08:53.608Z'
slug: frankfurt
---
undefined
