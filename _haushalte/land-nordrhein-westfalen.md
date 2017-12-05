---
_id: 2ad51690-d9dc-11e7-9b6f-a1ddb64fd07d
state: NW
name: Land Nordrhein-Westfalen
level: land
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:hh-nrw",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplan",
        "label": "Einzelplan"
      },
      {
        "datapackageHierarchy": "functional_classification",
        "url": "politikfelder",
        "label": "Politikfelder"
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "gruppen",
        "label": "Gruppen"
      }
    ],
    "value": [
      {
        "field": "value.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": "",
          "format": "%s%v",
          "postfix": " €",
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
        "number": "17865516",
        "description": "p. E. "
      }
    ],
    "filters": {
      "Budget_Richtung": {
        "name": "direction_2.Budget_Richtung",
        "label_ref": "direction_2.Budget_Richtung",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "hasAll": false,
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
      "year": {
        "name": "date_2.year",
        "label_ref": "date_2.year",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "hasAll": false,
        "defaultValue": 2017,
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
          }
        ]
      }
    },
    "name": "Land Nordrhein-Westfalen",
    "state": "NW",
    "level": "land",
    "text": "...\n\n"
  }
slug: land-nordrhein-westfalen
---
...
