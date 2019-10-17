---
_id: 04858f50-f0a6-11e9-a0a8-b55fea34c7b7
state: BY
name: Stadt Fuerth
level: kommune
config: |-
  {
    "datapackage": "857dd0a7fcced9c11423b05f3ba2caed:stadt_fuerth_2019_test",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplane",
        "label": "Einzelpläne"
      }
    ],
    "value": [
      {
        "field": "betrag.sum",
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
        "label": "Pro Einwohner (127748 in 2019)",
        "number": "127748",
        "description": "p.E."
      }
    ],
    "filters": {
      "Haushalt Art": {
        "name": "haushalt_art.haushalt_art",
        "label_ref": "haushalt_art.haushalt_art",
        "ref": "haushalt_art",
        "default": true,
        "defaultValue": "Verwaltung",
        "defaultLabel": "All",
        "label": "Haushalt Art",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Vermögen",
            "label": "Vermögen"
          },
          {
            "value": "Verwaltung",
            "label": "Verwaltung"
          }
        ]
      },
      "Ansatz/Rechnung": {
        "name": "ansatz_rechnung.ansatz_rechnung",
        "label_ref": "ansatz_rechnung.ansatz_rechnung",
        "ref": "ansatz_rechnung",
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
          }
        ]
      },
      "Budget Richtung": {
        "name": "budget_richtung.budget_richtung",
        "label_ref": "budget_richtung.budget_richtung",
        "ref": "budget_richtung",
        "default": true,
        "defaultValue": "Ausgabe",
        "defaultLabel": "All",
        "label": "Budget Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Ausgabe",
            "label": "Ausgabe"
          },
          {
            "value": "Einnahme",
            "label": "Einnahme"
          }
        ]
      },
      "Jahr": {
        "name": "jahr.jahr",
        "label_ref": "jahr.jahr",
        "ref": "jahr",
        "default": true,
        "defaultValue": 2019,
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": 2019,
            "label": 2019
          }
        ]
      }
    },
    "level": "kommune",
    "state": "BY",
    "name": "Stadt Fuerth",
    "text": "Das ist der Haushalt der Stadt Fürth"
  }
slug: stadt-fuerth
---
Das ist der Haushalt der Stadt Fürth
