---
_id: 5e10a7d0-e43c-11e7-bde9-99b7584a705b
state: NW
name: Bonn
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:bonn2017",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produktbereich",
        "label": "Produktbereich"
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
        "label": "Pro Einwohner (318.809 in 2016)",
        "number": "318809",
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
            "value": 2017,
            "label": 2017
          }
        ]
      },
      "Plan_Ist": {
        "name": "value_kind_2.Plan_Ist",
        "label_ref": "value_kind_2.Plan_Ist",
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
            "value": "Plan",
            "label": "Plan"
          }
        ]
      },
      "Budget_Richtung": {
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
    "state": "NW",
    "name": "Bonn",
    "text": "Test Test "
  }
slug: bonn
---
Die Quelle für den visualisierten Datensatz findet sich auf dieser [Webseite](https://opendata.bonn.de/dataset/haushaltspl%C3%A4ne-finanzplandaten). Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die Validität nicht zu 100% garantieren.
