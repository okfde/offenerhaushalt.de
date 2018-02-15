---
_id: 230f56c0-1233-11e8-baa8-9788832e013f
state: RP
name: Sprendlingen-Gensingen
text: >-
  Der Plan Haushalt für die Verbandsgemeinde Sprendlingen-Gensingen 2018. Dieser
  Haushalt zeigt nur die Ausgabenseite der Gemeinde.
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:sprendlingen-gensingen",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produkt",
        "label": "Produkt"
      }
    ],
    "value": [
      {
        "field": "AufwandAnsatz.sum",
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
        "label": "Pro Einwohner (14.276 in 2015)",
        "number": "14276",
        "description": "p. E. "
      }
    ],
    "filters": {
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
      },
      "Budget Richtung": {
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
          }
        ]
      }
    },
    "level": "kommune",
    "state": "RP",
    "name": "Sprendlingen-Gensingen",
    "text": "Der Plan Haushalt für die Verbandsgemeinde Sprendlingen-Gensingen 2018. Dieser Haushalt zeigt nur die Ausgabenseite der Gemeinde."
  }
date: '2018-02-15T09:32:27.792Z'
slug: sprendlingen-gensingen
---
  Der Plan Haushalt für die Verbandsgemeinde Sprendlingen-Gensingen 2018. Dieser
  Haushalt zeigt nur die Ausgabenseite der Gemeinde.
