---
_id: e370b380-469b-11e9-b7d3-3fda73ba1258
state: BW
name: Hemsbach
level: kommune
config: |-
  {
    "datapackage": "43e5d118e2bf86baa752c96593d98dfc:hemsbach_2011-2019",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "teilhaushalt",
        "label": "Teilhaushalt"
      }
    ],
    "value": [
      {
        "field": "betrag.sum",
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
    "scale": [],
    "filters": {
      "Jahr": {
        "name": "jahr.jahr",
        "label_ref": "jahr.jahr",
        "ref": "jahr",
        "default": true,
        "defaultValue": 2019,
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
          },
          {
            "value": 2019,
            "label": 2019
          }
        ]
      },
      "Richtung": {
        "name": "richtung.richtung",
        "label_ref": "richtung.richtung",
        "ref": "richtung",
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
      "Status": {
        "name": "status.status",
        "label_ref": "status.status",
        "ref": "status",
        "default": true,
        "defaultValue": "Haushaltsansatz",
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
    "text": "Die Daten wurden aus gescannten Haushaltsdokumenten entnommen, die Richtigkeit kann nicht garantiert werden.\nhttps://fragdenstaat.de/anfrage/haushalt-2013-2017/81784/anhang/SKMBT_C554e18012212250.pdf\nhttps://fragdenstaat.de/anfrage/stadtischer-haushalt-2019/141086/anhang/SKM_C55819013011300.pdf"
  }
slug: hemsbach
---
Die Daten wurden aus gescannten Haushaltsdokumenten entnommen, die Richtigkeit kann nicht garantiert werden.
https://fragdenstaat.de/anfrage/haushalt-2013-2017/81784/anhang/SKMBT_C554e18012212250.pdf
https://fragdenstaat.de/anfrage/stadtischer-haushalt-2019/141086/anhang/SKM_C55819013011300.pdf
