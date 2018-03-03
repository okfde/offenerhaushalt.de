---
_id: 0fe36f30-1ba4-11e8-baa8-9788832e013f
state: NW
name: Krefeld
text: Haushalt
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:krefeldzwei",
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
        "label": "pro Einwohner (226.812 in 2016)",
        "number": "226812 ",
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
            "value": 2017,
            "label": 2017
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
      },
      "Betrag-Typ": {
        "name": "phase_2.Betrag_Typ",
        "label_ref": "phase_2.Betrag_Typ",
        "ref": "phase_2",
        "type": "string",
        "default": true,
        "defaultValue": "PLAN",
        "defaultLabel": "All",
        "label": "HH-Art",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "IST",
            "label": "IST"
          },
          {
            "value": "PLAN",
            "label": "PLAN"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "NW",
    "name": "Krefeld",
    "text": "Haushalt"
  }
date: '2018-02-27T09:53:29.268Z'
slug: krefeld
---
undefined
