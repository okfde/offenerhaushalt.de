---
_id: f3b1cce0-4866-11e8-ad1f-8d4eb113e003
state: BY
name: München
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:munich",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplan",
        "label": "Einzelplan"
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
        "label": "pro Einwohner (1.545.105 in 2017)",
        "number": "1545105",
        "description": "p. E."
      }
    ],
    "filters": {
      "jahr": {
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
            "label": "All"
          },
          {
            "value": 2018,
            "label": 2018
          }
        ]
      },
      "sollist": {
        "name": "sollist.sollist",
        "label_ref": "sollist.sollist",
        "ref": "sollist",
        "default": true,
        "defaultValue": "Soll",
        "defaultLabel": "All",
        "label": "Typ",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Soll",
            "label": "Soll"
          }
        ]
      },
      "art": {
        "name": "art.art",
        "label_ref": "art.art",
        "ref": "art",
        "default": true,
        "defaultValue": "Aufwendungen",
        "defaultLabel": "All",
        "label": "Richtung",
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
      }
    },
    "level": "kommune",
    "state": "BY",
    "name": "München",
    "text": "Haushalt der Landeshauptstadt München für 2018"
  }
slug: munchen
---
Haushalt der Landeshauptstadt München für 2018
