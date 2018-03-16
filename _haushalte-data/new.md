---
_id: 76689970-2927-11e8-ad1f-8d4eb113e003
state: BE
name: new
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:berlin_16_17_clean",
    "hierarchies": [
      {
        "datapackageHierarchy": "functional_classification",
        "url": "functional_classification",
        "label": "Functional Classification"
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "economic_classification",
        "label": "Economic Classification"
      },
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "administrative_classification",
        "label": "Administrative Classification"
      }
    ],
    "value": [
      {
        "field": "Betrag.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ".",
          "thousand": ",",
          "precision": 2,
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Betrag"
      }
    ],
    "scale": [],
    "filters": {
      "Jahr": {
        "name": "date_2.Jahr",
        "label_ref": "date_2.Jahr",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": "",
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
      "Bereich": {
        "name": "fin_source_Bereich.Bereich",
        "label_ref": "fin_source_Bereich.Bereichsbezeichnung",
        "ref": "fin_source_Bereich",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Bereichsbezeichnung",
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
      },
      "Typ": {
        "name": "fin_source_Typ.Typ",
        "label_ref": "fin_source_Typ.Bezeichnung",
        "ref": "fin_source_Typ",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Bezeichnung",
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
            "value": "3",
            "label": "Bezirke"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "BE",
    "name": "new",
    "text": "last test"
  }
slug: new
---
last test
