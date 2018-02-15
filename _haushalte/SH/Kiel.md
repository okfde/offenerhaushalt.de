---
_id: 491e5c50-1245-11e8-baa8-9788832e013f
state: SH
name: Kiel
text: >-
  Das ist der Haushalt der Stadt Kiel für die Jahre 2014-2018, angezeigt werden
  die geplanten Erträge/Aufwendungen. Die Daten entstammen dem Portal:
  https://www.kiel.de/de/politik_verwaltung/finanzen/haushaltsplanung.php
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:kiel",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produkt",
        "label": "Produkt"
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
        "label": "pro Einwohner (247.441 in 2016)",
        "number": "247441",
        "description": "p. E."
      }
    ],
    "filters": {
      "Datum": {
        "name": "date_2.Datum",
        "label_ref": "date_2.Datum",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2018,
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
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
      "Aufwand/Ertrag": {
        "name": "direction_2.Aufwand_Ertrag",
        "label_ref": "direction_2.Aufwand_Ertrag",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Aufwand",
        "defaultLabel": "All",
        "label": "Budget Richtung",
        "values": [
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
      "Haushalt": {
        "name": "phase_2.Haushalt",
        "label_ref": "phase_2.Haushalt",
        "ref": "phase_2",
        "type": "string",
        "default": true,
        "defaultValue": "Plan",
        "defaultLabel": "All",
        "label": "HH Art",
        "values": [
          {
            "value": "Plan",
            "label": "Plan"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "SH",
    "name": "Kiel",
    "text": "Das ist der Haushalt der Stadt Kiel für die Jahre 2014-2018, angezeigt werden die geplanten Erträge/Aufwendungen. Die Daten entstammen dem Portal: https://www.kiel.de/de/politik_verwaltung/finanzen/haushaltsplanung.php "
  }
date: '2018-02-15T11:42:22.589Z'
slug: kiel
---
Das ist der Haushalt der Stadt Kiel für die Jahre 2014-2018, angezeigt werden
  die geplanten Erträge/Aufwendungen. Die Daten entstammen dem Portal:
  [https://www.kiel.de/de/politik_verwaltung/finanzen/haushaltsplanung.php](https://www.kiel.de/de/politik_verwaltung/finanzen/haushaltsplanung.php)
