---
_id: 643ef4a0-034e-11e8-86e6-dd2a0f61d6b6
state: BW
name: Hemsbach
text: Der Haushalt der Stadt Hemsbach an der Bergstraße.
level: kommune
config: |-
  {
    "datapackage": "43e5d118e2bf86baa752c96593d98dfc:hemsbach_test",
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
        "label": "Pro Einwohner (12.050 in 2015)",
        "number": "12050",
        "description": "p.E."
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
        "label": "Budget Richtung",
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
      }
    },
    "level": "kommune",
    "state": "BW",
    "name": "Hemsbach",
    "text": "Der Haushalt der Stadt Hemsbach an der Bergstraße."
  }
date: '2018-01-27T10:39:46.124Z'
slug: hemsbach
---
undefined
