---
_id: f9bd5c50-2b68-11e8-ad1f-8d4eb113e003
state: BE
name: BE
level: land
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:berlin1819",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplan",
        "label": "Einzelplan"
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "gruppierung",
        "label": "Gruppierung"
      },
      {
        "datapackageHierarchy": "functional_classification",
        "url": "politikfelder",
        "label": "Politikfelder"
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
        "label": "Pro Einwohner",
        "number": "3500000",
        "description": "p.E."
      }
    ],
    "filters": {
      "Jahr": {
        "name": "date_2.Jahr",
        "label_ref": "date_2.Jahr",
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
            "value": 2018,
            "label": 2018
          },
          {
            "value": 2019,
            "label": 2019
          }
        ]
      },
      "Soll/Ist": {
        "name": "phase_2.Soll_Ist",
        "label_ref": "phase_2.Soll_Ist",
        "ref": "phase_2",
        "type": "string",
        "default": true,
        "defaultValue": "Plan",
        "defaultLabel": "All",
        "label": "Soll/Ist",
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
      },
      "Titelart": {
        "name": "direction_2.Titelart",
        "label_ref": "direction_2.Titelart",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Einnahmetitel",
        "defaultLabel": "All",
        "label": "Titelart",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Ausgabetitel",
            "label": "Ausgabetitel"
          },
          {
            "value": "Einnahmetitel",
            "label": "Einnahmetitel"
          }
        ]
      }
    },
    "level": "land",
    "state": "BE",
    "name": "BE",
    "text": "Haushalt"
  }
slug: be
---
Haushalt
