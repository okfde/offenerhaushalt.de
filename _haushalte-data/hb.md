---
_id: 5305d5e0-6d76-11e8-a999-596b9e5044d6
state: HB
name: Bremen
level: land
config: |-
  {
    "datapackage": "c06abbc1b9141b233de84e14f5ab0a75:bremen-data-2016-2017",
    "datapackageURL": "https://s3.amazonaws.com/datastore.openspending.org/a6a16b964a7e784f99adecc47f26318a/be_mp_ez/final/datapackage.json",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produktebene",
        "label": "Produktebene"
      }
    ],
    "value": [
      {
        "field": "betrag.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": "",
          "format": "%s%v",
          "postfix": "€"
        },
        "label": "Betrag"
      }
    ],
    "scale": [],
    "filters": {
      "Haushalt": {
        "name": "haushalt.haushalt",
        "label_ref": "haushalt.haushalt",
        "ref": "haushalt",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Haushalt",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Land",
            "label": "Land"
          },
          {
            "value": "Stadt",
            "label": "Stadt"
          }
        ]
      },
      "Betrag_Typ": {
        "name": "betrag_typ.betrag_typ",
        "label_ref": "betrag_typ.betrag_typ",
        "ref": "betrag_typ",
        "default": true,
        "defaultValue": "Plan",
        "defaultLabel": "All",
        "label": "Betrag_Typ",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Ist",
            "label": "Ist"
          },
          {
            "value": "Plan",
            "label": "Plan"
          },
          {
            "value": "Soll",
            "label": "Soll"
          }
        ]
      },
      "Budget Richtung": {
        "name": "budget_richtung.budget_richtung",
        "label_ref": "budget_richtung.budget_richtung",
        "ref": "budget_richtung",
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
      "Jahr": {
        "name": "jahr.jahr",
        "label_ref": "jahr.jahr",
        "ref": "jahr",
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
            "value": 2016,
            "label": 2016
          },
          {
            "value": 2017,
            "label": 2017
          }
        ]
      }
    },
    "level": "land",
    "state": "HB",
    "text": "test test",
    "name": "Bremen"
  }
slug: hb
---
Zur Verfügung gestellt werden die kameralen Haushaltsdaten der Freien Hansestadt Bremen, genauer des Landes und der Stadtgemeinde Bremen, für die Haushaltsjahre 2016 und 2017. Die Stadt Bremerhaven erstellt einen eigenen Haushaltsplan, der von der Stadtverordnetenversammlung beschlossen wird. Weitere Informationen zu den einzelnen Haushaltsplänen der Hansestadt Bremen finden sich im Transparenzportal Bremen unter  [https://www.transparenz.bremen.de/](https://www.transparenz.bremen.de/).
