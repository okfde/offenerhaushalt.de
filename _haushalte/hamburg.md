---
_id: 05d95420-e3ee-11e7-bde9-99b7584a705b
state: HH
name: Hamburg
level: kommune
config: |-
  {
    "datapackage": "979a04af3ee49595c1881cffe7554549:budget_germany_hamburg_test",
    "hierarchies": [
      {
        "datapackageHierarchy": "functional_classification",
        "url": "einzelplane",
        "label": "Einzelpläne"
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
        "label": "pro Einwohner (1.807.551 in 2016)",
        "number": "1807551",
        "description": "p. E."
      }
    ],
    "filters": {
      "Soll/Ist": {
        "name": "phase_2.Soll_Ist",
        "label_ref": "phase_2.Soll_Ist",
        "ref": "phase_2",
        "type": "string",
        "default": true,
        "defaultValue": "Soll",
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
        "label": "Budget Richtung ",
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
      }
    },
    "level": "kommune",
    "state": "HH",
    "name": "Hamburg",
    "text": "Dies ist der Datensatz für das Land Hamburg, es wird doppisch gebucht. "
  }
slug: hamburg
---
Die Quelle für den visualisierten Datensatz findet sich auf dieser Webseite:
[http://www.hamburg.de/fb/doppelhaushalt-2017-2018/](http://www.hamburg.de/fb/doppelhaushalt-2017-2018/). Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die Validität nicht zu 100% garantieren.
