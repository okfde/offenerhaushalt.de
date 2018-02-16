---
_id: 31a72fb0-1264-11e8-baa8-9788832e013f
state: RP
name: Verbandsgemeinde Sprendlingen-Gensingen
url: /haushalt/RP/Verbandsgemeinde-Sprendlingen-Gensingen
text: >-
  Haushaltsansätze der Verbandsgemeinde Sprendlingen-Gensingen. Dieser Haushalt
  zeigt die Aufwendungen und Erträge des Haushaltsjahres.
level: kommune
config: |-
  {
    "datapackage": "6151bbfc6dacfa0e18c929ec0392c652:hhvhsg2346",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "fachbereiche_produkte_konten",
        "label": "Fachbereiche / Produkte / Konten"
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
        "label": "Aufwand / Ertrag",
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
    "state": "RP",
    "name": "Verbandsgemeinde Sprendlingen-Gensingen",
    "text": "Haushaltsansätze der Verbandsgemeinde Sprendlingen-Gensingen. Dieser Haushalt zeigt die Aufwendungen und Erträge des Haushaltsjahres."
  }
date: '2018-02-15T15:23:37.609Z'
slug: verbandsgemeinde-sprendlingen-gensingen
---
undefined
