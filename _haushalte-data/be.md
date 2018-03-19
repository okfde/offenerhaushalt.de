---
_id: fd1f4c00-2b68-11e8-ad1f-8d4eb113e003
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
        "label": "Pro Einwohner",
        "number": "3600000",
        "description": "p. E."
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
        "defaultValue": "",
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
      "Bereich": {
        "name": "fin_source_2.Bereich",
        "label_ref": "fin_source_2.Bereichsbezeichnung",
        "ref": "fin_source_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Bereich",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "30",
            "label": "Hauptverwaltung"
          },
          {
            "value": "31",
            "label": "Mitte"
          },
          {
            "value": "32",
            "label": "Friedrichshain-Kreuzberg"
          },
          {
            "value": "33",
            "label": "Pankow"
          },
          {
            "value": "34",
            "label": "Charlottenburg-Wilmersdorf"
          },
          {
            "value": "35",
            "label": "Spandau"
          },
          {
            "value": "36",
            "label": "Steglitz-Zehlendorf"
          },
          {
            "value": "37",
            "label": "Tempelhof-Schöneberg"
          },
          {
            "value": "38",
            "label": "Neukölln"
          },
          {
            "value": "39",
            "label": "Treptow-Köpenick"
          },
          {
            "value": "40",
            "label": "Marzahn-Hellersdorf"
          },
          {
            "value": "41",
            "label": "Lichtenberg"
          },
          {
            "value": "42",
            "label": "Reinickendorf"
          }
        ]
      },
      "Titelart": {
        "name": "direction_2.Titelart",
        "label_ref": "direction_2.Titelart",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Einnahmen/Ausgaben",
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
    "text": "Dies ist eine Testvisualisierung für Berliner Landeshaushalt",
    "name": "BE"
  }
slug: be
---
Dies ist eine Testvisualisierung für Berliner Landeshaushalt
