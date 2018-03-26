---
_id: 03066b80-2dd0-11e8-ad1f-8d4eb113e003
state: NW
name: Stadt Krefeld
level: kommune
config: |-
  {
    "datapackage": "bd9050e78e972a6eefddc36edbe9522b:kkha18",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produkt",
        "label": "Produkt"
      }
    ],
    "value": [
      {
        "field": "Amount.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": "0",
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Amount"
      }
    ],
    "scale": [],
    "filters": {
      "Budget Direction": {
        "name": "direction_2.Budget_Direction",
        "label_ref": "direction_2.Budget_Direction",
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
          },
          {
            "value": "Erträge",
            "label": "Erträge"
          }
        ]
      },
      "Date": {
        "name": "date_2.Date",
        "label_ref": "date_2.Date",
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
      "Amount Kind": {
        "name": "value_kind_2.Amount_Kind",
        "label_ref": "value_kind_2.Amount_Kind",
        "ref": "value_kind_2",
        "type": "string",
        "default": true,
        "defaultValue": "PLAN",
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
      }
    },
    "level": "kommune",
    "state": "NW",
    "name": "Stadt Krefeld",
    "text": "Zur Information:\n\nFür den offenen Haushalt wurden die Werte aus den Feldern Ordentliche Erträge, Finanzerträge und Erträge aus internen Leistungsbeziehungen im Gegensatz zum Haushalt in PDF-Form zusammengerechnet."
  }
slug: stadt-krefeld
---
Zur Information:

Für den offenen Haushalt wurden die Werte aus den Feldern Ordentliche Erträge, Finanzerträge und Erträge aus internen Leistungsbeziehungen im Gegensatz zum Haushalt in PDF-Form zusammengerechnet.
