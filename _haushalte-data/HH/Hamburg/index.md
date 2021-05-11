---
_id: 0b06e2c0-35ee-11e9-b7d3-3fda73ba1258
state: HH
name: Hamburg
level: land
config: |-
  {
    "datapackage": "c06abbc1b9141b233de84e14f5ab0a75:hamburger_haushalt_hhp_19_20",
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
      }
    ],
    "filters": {
      "Berichtsjahr": {
        "name": "berichtsjahr.berichtsjahr",
        "label_ref": "berichtsjahr.berichtsjahr",
        "ref": "berichtsjahr",
        "default": true,
        "defaultValue": "2019",
        "defaultLabel": "All",
        "label": "Berichtsjahr",
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
          },
          {
            "value": 2018,
            "label": 2018
          },
          {
            "value": 2019,
            "label": 2019
          },
          {
            "value": 2020,
            "label": 2020
          },
          {
            "value": 2021,
            "label": 2021
          },
          {
            "value": 2022,
            "label": 2022
          }
        ]
      },
      "Werttyp": {
        "name": "werttyp.werttyp",
        "label_ref": "werttyp.werttyp",
        "ref": "werttyp",
        "default": true,
        "defaultValue": "Plan",
        "defaultLabel": "All",
        "label": "Werttyp",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Fortgeschriebener Plan",
            "label": "Fortgeschriebener Plan"
          },
          {
            "value": "Ist",
            "label": "Ist"
          },
          {
            "value": "Plan",
            "label": "Plan"
          }
        ]
      },
      "Erlöse_Kosten": {
        "name": "erlose_kosten.erlose_kosten",
        "label_ref": "erlose_kosten.erlose_kosten",
        "ref": "erlose_kosten",
        "default": true,
        "defaultValue": "Erlöse",
        "defaultLabel": "All",
        "label": "Budget Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Erlöse",
            "label": "Erlöse"
          },
          {
            "value": "Kosten",
            "label": "Kosten"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "HH",
    "text": "Die abgebildeten Daten basieren auf dem von der \n\n Bürgerschaft in ihrer Sitzung vom 11. bis 13. Dezember 2018 beschlossenen Haushaltsplan 2019/2020 der Freien und Hansestadt Hamburg einschließlich der beiden Finanzplanjahre 2021 und 2022.",
    "name": "Hamburg"
  }
slug: hh
---
Die abgebildeten Daten basieren auf dem von der Bürgerschaft in ihrer Sitzung vom 11. bis 13. Dezember 2018 beschlossenen Haushaltsplan 2019/2020 der Freien und Hansestadt Hamburg einschließlich der beiden Finanzplanjahre 2021 und 2022.
