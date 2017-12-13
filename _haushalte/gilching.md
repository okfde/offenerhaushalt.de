---
_id: 4845cc50-de60-11e7-9d16-ed20949b8d27
state: BY
name: Gilching
text: Der Haushalt (Vermögens- & Verwaltungshaushalt) der Gemeinde Gilching!
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:gilching-gesamt",
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
          "postfix": " €",
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
        "label": "Pro Einwohner (18.340 in 2015)",
        "number": "18340",
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
          }
        ]
      },
      "Einnahmen Ausgaben": {
        "name": "direction_2.Einnahmen_Ausgaben",
        "label_ref": "direction_2.Einnahmen_Ausgaben",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ausgaben",
        "defaultLabel": "All",
        "label": "Budget-Richtung",
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
      "Art": {
        "name": "fin_source_2.Art",
        "label_ref": "fin_source_2.Art",
        "ref": "fin_source_2",
        "type": "string",
        "default": true,
        "defaultValue": "Verwaltungshaushalt",
        "defaultLabel": "All",
        "label": "Haushalt",
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
    "text": "Der Haushalt (Vermögens- & Verwaltungshaushalt) der Gemeinde Gilching!"
  }
date: '2017-12-11T10:44:37.103Z'
slug: gilching
---
undefined
