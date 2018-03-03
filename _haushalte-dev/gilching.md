---
_id: 791aacc0-18a2-11e8-baa8-9788832e013f
state: BY
name: Gilching
text: >-
  Das ist der Haushalt der Kommune Gilching. In Bayern wird die kommunale
  Haushaltsführung noch kameralistisch abgewickelt, was dazu führt, dass der
  Haushalt aus einem Vermögenshaushalt und einem Verwaltungshaushalt besteht
  (siehe Filter).
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:gilching-2018",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
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
        "label": "pro Einwohner (18.650 in 2016)",
        "number": "18650",
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
        "defaultValue": 2018,
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
          {
            "value": "",
            "label": "All"
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
      "Budget Richtung": {
        "name": "direction_2.Budget_Richtung",
        "label_ref": "direction_2.Budget_Richtung",
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
      },
      "Ansatz/Rechnung": {
        "name": "phase_2.Ansatz_Rechnung",
        "label_ref": "phase_2.Ansatz_Rechnung",
        "ref": "phase_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ansatz",
        "defaultLabel": "All",
        "label": "Ansatz/Rechnung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Ansatz",
            "label": "Ansatz"
          },
          {
            "value": "Rechnung",
            "label": "Rechnung"
          }
        ]
      },
      "Haushalt Art": {
        "name": "fin_source_2.Haushalt_Art",
        "label_ref": "fin_source_2.Haushalt_Art",
        "ref": "fin_source_2",
        "type": "string",
        "default": true,
        "defaultValue": "Verwaltungshaushalt",
        "defaultLabel": "All",
        "label": "Haushalt Art",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Vermögenshaushalt",
            "label": "Vermögenshaushalt"
          },
          {
            "value": "Verwaltungshaushalt",
            "label": "Verwaltungshaushalt"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "BY",
    "name": "Gilching",
    "text": "Das ist der Haushalt der Kommune Gilching. In Bayern wird die kommunale Haushaltsführung noch kameralistisch abgewickelt, was dazu führt, dass der Haushalt aus einem Vermögenshaushalt und einem Verwaltungshaushalt besteht (siehe Filter)."
  }
date: '2018-02-23T14:04:33.267Z'
slug: gilching
---
undefined
