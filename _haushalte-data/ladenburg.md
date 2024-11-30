---
_id: ec12d020-4698-11e9-b7d3-3fda73ba1258
state: BW
name: Ladenburg
level: kommune
config: |-
  {
    "datapackage": "43e5d118e2bf86baa752c96593d98dfc:ladenburg_vh_2014-16",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "administrative_classification",
        "label": "Administrative Classification"
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
        "label": "Pro Einwohner (11.532 in 2017)",
        "number": "11532",
        "description": "p.P."
      }
    ],
    "filters": {
      "Richtung": {
        "name": "direction_2.Richtung",
        "label_ref": "direction_2.Richtung",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ausgaben",
        "defaultLabel": "All",
        "label": "Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Ausgaben",
            "label": "Ausgaben"
          },
          {
            "value": "Einnahmen",
            "label": "Einnahmen"
          }
        ]
      },
      "Jahr": {
        "name": "date_2.Jahr",
        "label_ref": "date_2.Jahr",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2016,
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
            "value": 2016,
            "label": 2016
          }
        ]
      }
    },
    "text": "Der Verwaltungshaushalt der Stadt Ladenburg, extrahiert aus diesen Daten: https://ladenburg.de/fileadmin/user_upload/Haushaltsplaene/Haushaltsplan_2016.pdf",
    "name": "Ladenburg",
    "level": "kommune",
    "state": "BW"
  }
slug: ladenburg
---
Der Verwaltungshaushalt der Stadt Ladenburg, extrahiert aus diesen Daten: https://ladenburg.de/fileadmin/user_upload/Haushaltsplaene/Haushaltsplan_2016.pdf
