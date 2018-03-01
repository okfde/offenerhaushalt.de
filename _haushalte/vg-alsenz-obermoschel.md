---
_id: 598cef30-1d39-11e8-baa8-9788832e013f
state: RP
name: VG Alsenz-Obermoschel
text: Haushaltsplan 2018
level: kommune
config: |-
  {
    "datapackage": "bb11bf9b2732d6d1e5f7ec850554780a:sylvia",
    "hierarchies": [
      {
        "datapackageHierarchy": "budget_line_id",
        "url": "teilhaushalt",
        "label": "Teilhaushalt"
      },
      {
        "datapackageHierarchy": "date",
        "url": "haushaltsjahr",
        "label": "Haushaltsjahr"
      },
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produkt",
        "label": "Produkt"
      },
      {
        "datapackageHierarchy": "direction",
        "url": "budgetrichtung",
        "label": "Budgetrichtung"
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
      "id": {
        "name": "budget_line_id_2.id",
        "label_ref": "budget_line_id_2.id",
        "ref": "budget_line_id_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "id",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "1",
            "label": "1"
          },
          {
            "value": "2",
            "label": "2"
          },
          {
            "value": "3",
            "label": "3"
          }
        ]
      },
      "Haushaltsjahr": {
        "name": "date_2.Haushaltsjahr",
        "label_ref": "date_2.Haushaltsjahr",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": "",
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
      "Fachbereich": {
        "name": "administrative_classification_2.Fachbereich",
        "label_ref": "administrative_classification_2.Fachbereich",
        "ref": "administrative_classification_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Fachbereich",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Bürgerservice",
            "label": "Bürgerservice"
          },
          {
            "value": "Finanzen",
            "label": "Finanzen"
          }
        ]
      },
      "Produkt": {
        "name": "administrative_classification_3.Produkt",
        "label_ref": "administrative_classification_3.Produkt",
        "ref": "administrative_classification_3",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Produkt",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Bürgerservice - Schule A",
            "label": "Bürgerservice - Schule A"
          },
          {
            "value": "Bürgerservice - Schule B",
            "label": "Bürgerservice - Schule B"
          },
          {
            "value": "Finanzen - Steuern",
            "label": "Finanzen - Steuern"
          }
        ]
      },
      "Konto": {
        "name": "administrative_classification_4.Konto",
        "label_ref": "administrative_classification_4.Konto",
        "ref": "administrative_classification_4",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Konto",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Bürgerservice - Schule A - Versicherungen",
            "label": "Bürgerservice - Schule A - Versicherungen"
          },
          {
            "value": "Bürgerservice - Schule B - Büromaterial",
            "label": "Bürgerservice - Schule B - Büromaterial"
          },
          {
            "value": "Finanzen - Steuern - Grundsteuer A",
            "label": "Finanzen - Steuern - Grundsteuer A"
          }
        ]
      },
      "Budgetrichtung": {
        "name": "direction_2.Budgetrichtung",
        "label_ref": "direction_2.Budgetrichtung",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Budgetrichtung",
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
    "name": "VG Alsenz-Obermoschel",
    "text": "Haushaltsplan 2018"
  }
date: '2018-03-01T10:14:38.977Z'
slug: vg-alsenz-obermoschel
---
undefined
