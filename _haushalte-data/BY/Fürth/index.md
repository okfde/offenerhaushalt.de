---
layout: budget2
name: Fürth
level: kommune
state: BY
slug: Fürth
config: |-
    {
      "datapackage": "857dd0a7fcced9c11423b05f3ba2caed:stadt_fuerth_2018",
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
            "precision": 2,
            "format": "%s%v",
            "postfix": "€",
            "grouping": 3
          },
          "label": "Betrag"
        }
      ],
      "scale": [
        {
          "label": "Gesamt",
          "number": 1,
          "description": ""
        },
        {
          "label": "Pro Einwohner (126.526 in 2018)",
          "number": "126526",
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
              "label": "Alle"
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
              "label": "Alle"
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
        "Einnahme/Ausgabe": {
          "name": "einnahme_ausgabe.einnahme_ausgabe",
          "label_ref": "einnahme_ausgabe.einnahme_ausgabe",
          "ref": "einnahme_ausgabe",
          "default": true,
          "defaultValue": "Ausgabe",
          "defaultLabel": "All",
          "label": "Einnahme/Ausgabe",
          "values": [
            {
              "value": "",
              "label": "Alle"
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
          "defaultValue": 2018,
          "defaultLabel": "All",
          "label": "Jahr",
          "values": [
            {
              "value": "",
              "label": "Alle"
            },
            {
              "value": 2018,
              "label": 2018
            }
          ]
        }
      }
    }

---


Haushalt der Stadt Fürth 2018 
