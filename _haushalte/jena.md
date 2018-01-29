---
_id: 9af6fd00-e4de-11e7-bde9-99b7584a705b
state: TH
name: Jena
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:jena",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "teilhaushalte",
        "label": "Teilhaushalte"
      }
    ],
    "value": [
      {
        "field": "Betrag.sum",
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
        "label": "Pro Einwohner (109.527 in 2015)",
        "number": "109527",
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
            "value": 2011,
            "label": 2011
          },
          {
            "value": 2012,
            "label": 2012
          },
          {
            "value": 2013,
            "label": 2013
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
          }
        ]
      },
      "Plan_Erg": {
        "name": "value_kind_2.Plan_Erg",
        "label_ref": "value_kind_2.Plan_Erg",
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
            "value": "Ergebnis",
            "label": "Ergebnis"
          },
          {
            "value": "Plan",
            "label": "Plan"
          }
        ]
      },
      "Budget-Richtung": {
        "name": "direction_2.Budget_Richtung",
        "label_ref": "direction_2.Budget_Richtung",
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
      }
    },
    "level": "kommune",
    "state": "TH",
    "name": "Jena",
    "text": "https://opendata.jena.de/dataset/offener-haushalt/resource/0d040bf5-2e2f-4ffc-b14b-c9ac13f8d978"
  }
slug: jena
---
https://opendata.jena.de/dataset/offener-haushalt/resource/0d040bf5-2e2f-4ffc-b14b-c9ac13f8d978
