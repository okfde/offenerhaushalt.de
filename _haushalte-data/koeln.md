---
_id: c5d11280-7b7a-11e8-a999-596b9e5044d6
state: NW
name: Koeln
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:cologne-test18",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produkt",
        "label": "Produkt"
      }
    ],
    "value": [
      {
        "field": "amount.sum",
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
        "label": "",
        "number": 1,
        "description": ""
      }
    ],
    "filters": {
      "time_year": {
        "name": "time_year.time_year",
        "label_ref": "time_year.time_year",
        "ref": "time_year",
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
      "art_label": {
        "name": "art_label.art_label",
        "label_ref": "art_label.art_label",
        "ref": "art_label",
        "default": true,
        "defaultValue": "Aufwand",
        "defaultLabel": "All",
        "label": "Budget Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Aufwand",
            "label": "Aufwand"
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
    "name": "Koeln",
    "text": "Ladida"
  }
slug: koeln
---
Ladida
