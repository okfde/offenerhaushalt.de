---
_id: 174ab790-1890-11e8-baa8-9788832e013f
state: RP
name: Verbandsgemeinde Sprendlingen-Gensingen
text: >-
  Haushaltsansätze der Verbandsgemeinde Sprendlingen-Gensingen für das Jahr 2018
  (Aufwand / Ertrag)
level: kommune
config: |-
  {
    "datapackage": "6151bbfc6dacfa0e18c929ec0392c652:hhpvgsg201801",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "fachbereiche_stabsstellen",
        "label": "Fachbereiche / Stabsstellen"
      }
    ],
    "value": [
      {
        "field": "Ansatz.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ".",
          "thousand": ",",
          "precision": "0",
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Ansatz"
      }
    ],
    "scale": [],
    "filters": {
      "Budgetrichtung": {
        "name": "direction_2.Budgetrichtung",
        "label_ref": "direction_2.Budgetrichtung",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Aufwand",
        "defaultLabel": "All",
        "label": "Budgetrichtung",
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
      },
      "Haushaltsjahr": {
        "name": "date_2.Haushaltsjahr",
        "label_ref": "date_2.Haushaltsjahr",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2018,
        "defaultLabel": "All",
        "label": "Haushaltsjahr",
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
    "text": "Haushaltsansätze der Verbandsgemeinde Sprendlingen-Gensingen für das Jahr 2018 (Aufwand / Ertrag)",
    "level": "kommune",
    "state": "RP",
    "name": "Verbandsgemeinde Sprendlingen-Gensingen"
  }
date: '2018-02-23T11:52:58.207Z'
slug: verbandsgemeinde-sprendlingen-gensingen
---

