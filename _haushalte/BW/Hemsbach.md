---
_id: 1a258240-04ce-11e8-86e6-dd2a0f61d6b6
state: BW
name: Hemsbach
text: |-
  Der Haushalt der Jahre 2011 - 2018
  Das Original kann hier eingesehen werden:
  https://fragdenstaat.de/files/foi/81784/SKMBT_C554e18012212250.pdf
level: kommune
config: |-
  {
    "datapackage": "43e5d118e2bf86baa752c96593d98dfc:hemsbach_2011-2018",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "teilhaushalt",
        "label": "Teilhaushalt"
      },
      {
        "datapackageHierarchy": "date",
        "url": "date",
        "label": "Date"
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
      },
      "Status": {
        "name": "value_kind_2.Status",
        "label_ref": "value_kind_2.Status",
        "ref": "value_kind_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Status",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Haushaltsansatz",
            "label": "Haushaltsansatz"
          },
          {
            "value": "Rechnungsergebnis",
            "label": "Rechnungsergebnis"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "BW",
    "name": "Hemsbach",
    "text": "Der Haushalt der Jahre 2011 - 2018\nDas Original kann hier eingesehen werden:\nhttps://fragdenstaat.de/files/foi/81784/SKMBT_C554e18012212250.pdf"
  }
date: '2018-01-29T08:26:28.533Z'
slug: hemsbach
---
undefined
