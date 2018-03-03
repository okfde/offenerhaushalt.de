---
_id: bea98150-1a6c-11e8-baa8-9788832e013f
state: BW
name: Ettlingen
text: >-
  Das Original findet sich auf dieser
  [Website](http://www.ettlingen.de/site/Ettlingen/get/documents_E2016244378/ettlingen/Dokumente/K%C3%A4mmerei/KAE_Haushaltsplan_2018_Druckversion.pdf).
  Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die
  Validität nicht zu 100% garantieren.
level: kommune
config: |-
  {
    "datapackage": "43e5d118e2bf86baa752c96593d98dfc:haushalt_ettlingen_2018",
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
        "label": "Pro Einwohner",
        "number": "38982",
        "description": "p.E. (38.982 in 2015)"
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
            "value": 2018,
            "label": 2018
          }
        ]
      }
    },
    "level": "kommune",
    "state": "BW",
    "name": "Ettlingen",
    "text": "Das Original findet sich auf dieser [Website](http://www.ettlingen.de/site/Ettlingen/get/documents_E2016244378/ettlingen/Dokumente/K%C3%A4mmerei/KAE_Haushaltsplan_2018_Druckversion.pdf). Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die Validität nicht zu 100% garantieren."
  }
date: '2018-02-25T20:44:59.459Z'
slug: ettlingen
---
undefined
