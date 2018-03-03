---
_id: 51822a30-e50d-11e7-bde9-99b7584a705b
state: NW
name: Wuppertal
level: kommune
config: |-
  {
    "datapackage": "c06abbc1b9141b233de84e14f5ab0a75:haushaltsplan-entwurf-2018-2019",
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
        "label": "pro Einwohner",
        "number": "359661",
        "description": "p.E."
      }
    ],
    "filters": {
      "Year": {
        "name": "date_2.Year",
        "label_ref": "date_2.Year",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2018,
        "defaultLabel": "All",
        "label": "Year",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": 2018,
            "label": 2018
          },
          {
            "value": 2019,
            "label": 2019
          }
        ]
      },
      "Typ": {
        "name": "direction_2.Typ",
        "label_ref": "direction_2.Typ",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Aufwendung",
        "defaultLabel": "All",
        "label": "Typ",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Aufwendung",
            "label": "Aufwendung"
          },
          {
            "value": "Ertrag",
            "label": "Ertrag"
          }
        ]
      },
      "Art": {
        "name": "value_kind_2.Art",
        "label_ref": "value_kind_2.Art",
        "ref": "value_kind_2",
        "type": "string",
        "default": true,
        "defaultValue": "Plan",
        "defaultLabel": "All",
        "label": "Art",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Plan",
            "label": "Plan"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "NW",
    "name": "Wuppertal",
    "text": "Haushaltsplan-Entwurf 2018 und 2019 (Ergebnisplan).\n\nDie Aufstellung des städtischen Haushalts erfolgt nach den Vorgaben des Neuen Kommunalen Finanzmanagements (NKF).\n\nDie Darstellung der Ergebnisplanung ist in Stufen aufgeteilt:\n-  Stufe 1 - Gesamtergebnis\n-  Stufe 2 - Produktbereiche\n-  Stufe 3 - Produktgruppen\n-  Stufe 4 - Produkte\n\nhttps://www.offenedaten-wuppertal.de/dataset/haushaltsplan-entwurf-20182019"
  }
slug: wuppertal
---
Haushaltsplan-Entwurf 2018 und 2019 (Ergebnisplan).

Die Aufstellung des städtischen Haushalts erfolgt nach den Vorgaben des Neuen Kommunalen Finanzmanagements (NKF).

Die Darstellung der Ergebnisplanung ist in Stufen aufgeteilt:
-  Stufe 1 - Gesamtergebnis
-  Stufe 2 - Produktbereiche
-  Stufe 3 - Produktgruppen
-  Stufe 4 - Produkte

https://www.offenedaten-wuppertal.de/dataset/haushaltsplan-entwurf-20182019
