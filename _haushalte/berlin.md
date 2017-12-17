---
_id: d7a76060-e357-11e7-bde9-99b7584a705b
state: BE
name: Berlin
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:berlin_16_17_clean",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplane",
        "label": "Einzelpläne"
      },
      {
        "datapackageHierarchy": "functional_classification",
        "url": "funktionen",
        "label": "Funktionen"
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "gruppen",
        "label": "Gruppen"
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
        "label": "pro Einwohner (3.520.031 in 2015)",
        "number": "3520031",
        "description": "p. E. "
      }
    ],
    "filters": {
      "Jahr": {
        "name": "date_2.Jahr",
        "label_ref": "date_2.Jahr",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2016,
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
      "Titelart": {
        "name": "direction_2.Titelart",
        "label_ref": "direction_2.Titelart",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ausgabetitel",
        "defaultLabel": "All",
        "label": "Budget Richtung",
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
      },
      "Bereich": {
        "name": "fin_source_Bereich.Bereich",
        "label_ref": "fin_source_Bereich.Bereichsbezeichnung",
        "ref": "fin_source_Bereich",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Bezirk",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "1 - 30",
            "label": "Hauptverwaltung"
          },
          {
            "value": "2 - 30",
            "label": "Hauptverwaltung"
          },
          {
            "value": "3 - 31",
            "label": "Mitte"
          },
          {
            "value": "3 - 32",
            "label": "Friedrichshain-Kreuzberg"
          },
          {
            "value": "3 - 33",
            "label": "Pankow"
          },
          {
            "value": "3 - 34",
            "label": "Charlottenburg-Wilmersdorf"
          },
          {
            "value": "3 - 35",
            "label": "Spandau"
          },
          {
            "value": "3 - 36",
            "label": "Steglitz-Zehlendorf"
          },
          {
            "value": "3 - 37",
            "label": "Tempelhof-Schöneberg"
          },
          {
            "value": "3 - 38",
            "label": "Neukölln"
          },
          {
            "value": "3 - 39",
            "label": "Treptow-Köpenick"
          },
          {
            "value": "3 - 40",
            "label": "Marzahn-Hellersdorf"
          },
          {
            "value": "3 - 41",
            "label": "Lichtenberg"
          },
          {
            "value": "3 - 42",
            "label": "Reinickendorf"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "BE",
    "text": "Das ist der neue Datensatz für Berlin",
    "name": "Berlin"
  }
slug: berlin
---
Das ist der neue Datensatz für Berlin
