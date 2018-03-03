---
_id: 0060c6c0-1541-11e8-baa8-9788832e013f
state: BW
name: Weinheim
text: >-
  Das Original findet sich auf dieser
  [Website](http://www.weinheim.de/,Lde/Startseite/Buergerservice/Staedtische+Finanzen+_+Haushalt.html).
  Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die
  Validität nicht zu 100% garantieren.
level: kommune
config: |-
  {
    "datapackage": "43e5d118e2bf86baa752c96593d98dfc:haushalt_weinheim_2018",
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
          "decimal": ".",
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
        "label": "pro Einwohner (45.311 - Stand 31.12.2017)",
        "number": "45311",
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
        "defaultValue": "Aufwendungen",
        "defaultLabel": "All",
        "label": "Richtung",
        "values": [
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
      "Art": {
        "name": "value_kind_2.Art",
        "label_ref": "value_kind_2.Art",
        "ref": "value_kind_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Art",
        "values": [
          {
            "value": "Plan",
            "label": "Plan"
          }
        ]
      },
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
            "value": 2018,
            "label": 2018
          }
        ]
      }
    },
    "level": "kommune",
    "state": "BW",
    "name": "Weinheim",
    "text": "Das Original findet sich auf dieser [Website](http://www.weinheim.de/,Lde/Startseite/Buergerservice/Staedtische+Finanzen+_+Haushalt.html). Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die Validität nicht zu 100% garantieren."
  }
date: '2018-02-19T06:49:16.052Z'
slug: weinheim
---
  Das Original findet sich auf dieser
  [Website](http://www.weinheim.de/,Lde/Startseite/Buergerservice/Staedtische+Finanzen+_+Haushalt.html).
  Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die
  Validität nicht zu 100% garantieren.
