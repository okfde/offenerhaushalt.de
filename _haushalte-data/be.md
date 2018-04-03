---
_id: 253dc880-371f-11e8-ad1f-8d4eb113e003
state: BE
name: BE
level: land
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:berlin-aktuell",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplan",
        "label": "Einzelplan"
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "gruppen",
        "label": "Gruppen"
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
        "number": "3500000",
        "description": ""
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
            "value": 2014,
            "label": 2014
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
          },
          {
            "value": 2019,
            "label": 2019
          }
        ]
      },
      "Titelart": {
        "name": "direction_2.Titelart",
        "label_ref": "direction_2.Titelart",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ausgaben",
        "defaultLabel": "All",
        "label": "Typ",
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
      "Typ": {
        "name": "expenditure_type_2.Typ",
        "label_ref": "expenditure_type_2.Bezeichnung",
        "ref": "expenditure_type_2",
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
            "value": "1",
            "label": "Senatsverwaltungen"
          },
          {
            "value": "2",
            "label": "Verfassungsorgane"
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
      "BetragTyp": {
        "name": "phase_2.BetragTyp",
        "label_ref": "phase_2.BetragTyp",
        "ref": "phase_2",
        "type": "string",
        "default": true,
        "defaultValue": "Soll",
        "defaultLabel": "All",
        "label": "Soll/Ist",
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
            "value": "Soll",
            "label": "Soll"
          }
        ]
      }
    },
    "level": "land",
    "state": "BE",
    "text": "Test das ist der Haushalt für das Land der Berlin",
    "name": "BE"
  }
slug: be
---
Test das ist der Haushalt für das Land der Berlin
