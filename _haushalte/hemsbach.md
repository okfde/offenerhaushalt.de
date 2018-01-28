---
_id: 42107dc0-0472-11e8-86e6-dd2a0f61d6b6
state: BW
name: Hemsbach
text: >-
  Der Haushalt der Stadt Hemsbach in den Jahren 2011-2013.

  Auf Grund von OCR und PDF-Umwandlung können die Daten Fehler aufweisen, sind
  jedoch auf Plausibilität geprüft.
level: kommune
config: |-
  {
    "datapackage": "43e5d118e2bf86baa752c96593d98dfc:hemsbach_2011-2013",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "bezeichnung",
        "label": "Bezeichnung"
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
        "number": "12050",
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
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": 2011,
            "label": 2011
          },
          {
            "value": 2012,
            "label": 2012
          },
          {
            "value": 2013,
            "label": 2013
          }
        ]
      },
      "Richtung": {
        "name": "direction_2.Richtung",
        "label_ref": "direction_2.Richtung",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
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
      }
    },
    "level": "kommune",
    "state": "BW",
    "name": "Hemsbach",
    "text": "Der Haushalt der Stadt Hemsbach in den Jahren 2011-2013.\nAuf Grund von OCR und PDF-Umwandlung können die Daten Fehler aufweisen, sind jedoch auf Plausibilität geprüft."
  }
date: '2018-01-28T21:29:01.862Z'
slug: hemsbach
---
undefined
