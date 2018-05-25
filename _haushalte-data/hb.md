---
_id: 94f34990-6012-11e8-a999-596b9e5044d6
state: HB
name: HB
level: land
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:bremen-os",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produktbereich",
        "label": "Produktbereich"
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
        "label": "Pro Einwohner (565.719) in 2016",
        "number": "565719",
        "description": "p. E."
      }
    ],
    "filters": {
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
      },
      "Budget_Richtung": {
        "name": "budget_richtung.budget_richtung",
        "label_ref": "budget_richtung.budget_richtung",
        "ref": "budget_richtung",
        "default": true,
        "defaultValue": "Ausgaben",
        "defaultLabel": "All",
        "label": "Richtung",
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
      "Betrag_Typ": {
        "name": "betrag_typ.betrag_typ",
        "label_ref": "betrag_typ.betrag_typ",
        "ref": "betrag_typ",
        "default": true,
        "defaultValue": "Plan",
        "defaultLabel": "All",
        "label": "Typ",
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
      "Haushalt": {
        "name": "haushalt.haushalt",
        "label_ref": "haushalt.haushalt",
        "ref": "haushalt",
        "default": true,
        "defaultValue": "Stadt",
        "defaultLabel": "All",
        "label": "Stadt / Land",
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
      }
    },
    "level": "land",
    "state": "HB",
    "text": "ladida",
    "name": "HB"
  }
slug: hb
---
ladida
