---
_id: 62eb8570-0dc9-11e8-baa8-9788832e013f
state: HE
name: Frankfurt am Main
text: >-
  Es findet sich der Haushaltsplan der Stadt Frankfurt am Main, basierend auf
  den Daten hier:
  http://offenedaten.frankfurt.de/dataset/daten-des-haushaltsplans-2017-der-stadt-frankfurt-am-main
level: kommune
config: |-
  {
    "datapackage": "446674d02a1cdff9229f73129714e152:frankfurt_a_m",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "teilhaushalte",
        "label": "Teilhaushalte"
      }
    ],
    "value": [
      {
        "field": "value.sum",
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
        "label": "pro Einwohner (736.222 in 2017)",
        "number": "736222",
        "description": "p.E."
      }
    ],
    "filters": {
      "Haushaltsjahr": {
        "name": "date_2.Haushaltsjahr",
        "label_ref": "date_2.Haushaltsjahr",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2017,
        "defaultLabel": "All",
        "label": "Haushaltsjahr",
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
            "value": null,
            "label": null
          }
        ]
      },
      "Ertrag / Aufwand": {
        "name": "direction_2.Ertrag_Aufwand",
        "label_ref": "direction_2.Ertrag_Aufwand",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "A",
        "defaultLabel": "All",
        "label": "Budget - Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "A",
            "label": "A"
          },
          {
            "value": "E",
            "label": "E"
          },
          {
            "value": null,
            "label": null
          }
        ]
      }
    },
    "level": "kommune",
    "state": "HE",
    "name": "Frankfurt am Main",
    "text": "Es findet sich der Haushaltsplan der Stadt Frankfurt am Main, basierend auf den Daten hier: http://offenedaten.frankfurt.de/dataset/daten-des-haushaltsplans-2017-der-stadt-frankfurt-am-main"
  }
date: '2018-02-09T18:45:23.622Z'
slug: frankfurt-am-main
---
Es findet sich der Haushaltsplan der Stadt Frankfurt am Main, basierend auf den Daten hier: [http://offenedaten.frankfurt.de/dataset/daten-des-haushaltsplans-2017-der-stadt-frankfurt-am-main](http://offenedaten.frankfurt.de/dataset/daten-des-haushaltsplans-2017-der-stadt-frankfurt-am-main)
