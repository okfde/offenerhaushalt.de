---
_id: e7896730-2f7d-11e9-b7d3-3fda73ba1258
state: NW
name: Stadt Krefeld
level: kommune
config: |-
  {
    "datapackage": "bd9050e78e972a6eefddc36edbe9522b:hhkrefeld2019",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produkt",
        "label": "Produkt"
      }
    ],
    "value": [
      {
        "field": "amount.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": 2,
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Amount"
      }
    ],
    "scale": [
      {
        "label": "Total",
        "number": 1,
        "description": ""
      },
      {
        "label": "",
        "number": 1,
        "description": ""
      }
    ],
    "filters": {
      "Amount Kind": {
        "name": "amount_kind.amount_kind",
        "label_ref": "amount_kind.amount_kind",
        "ref": "amount_kind",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "HH-Art",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "IST",
            "label": "IST"
          },
          {
            "value": "PLAN",
            "label": "PLAN"
          }
        ]
      },
      "Date": {
        "name": "date.date",
        "label_ref": "date.date",
        "ref": "date",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Date",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": 2017,
            "label": 2017
          },
          {
            "value": 2019,
            "label": 2019
          }
        ]
      },
      "Budget Direction": {
        "name": "budget_direction.budget_direction",
        "label_ref": "budget_direction.budget_direction",
        "ref": "budget_direction",
        "default": true,
        "defaultValue": "",
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
      }
    },
    "text": "Zur Information:\n\nFür den offenen Haushalt wurden die Werte aus den Feldern Ordentliche Erträge, Finanzerträge und Erträge aus internen Leistungsbeziehungen im Gegensatz zum Haushalt in PDF-Form zusammengerechnet.",
    "level": "kommune",
    "state": "NW",
    "name": "Stadt Krefeld"
  }
slug: stadt-krefeld
---
Zur Information:

Für den offenen Haushalt wurden die Werte aus den Feldern Ordentliche Erträge, Finanzerträge und Erträge aus internen Leistungsbeziehungen im Gegensatz zum Haushalt in PDF-Form zusammengerechnet.
