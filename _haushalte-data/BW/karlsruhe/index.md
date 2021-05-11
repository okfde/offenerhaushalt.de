---
_id: 0db77830-31da-11e9-b7d3-3fda73ba1258
state: BW
name: Karlsruhe
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:karlsruhe_2017_2018",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "administrative_classification",
        "label": "Administrative Classification"
      },
      {
        "datapackageHierarchy": "expenditure_type",
        "url": "expenditure_type",
        "label": "Expenditure Type"
      }
    ],
    "value": [
      {
        "field": "BETRAG.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ".",
          "thousand": ",",
          "precision": 2,
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "BETRAG"
      }
    ],
    "scale": [],
    "filters": {
      "JAHR": {
        "name": "date_2.JAHR",
        "label_ref": "date_2.JAHR",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": "2019",
        "defaultLabel": "All",
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
      "Einnahme / Ausgabe": {
        "name": "direction_2.Einnahme_Ausgabe",
        "label_ref": "direction_2.Einnahme_Ausgabe",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Einnahme / Ausgabe",
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
    "state": "BW",
    "name": "Karlsruhe",
    "text": "Haushalt"
  }
slug: karlsruhe
---
Haushalt
