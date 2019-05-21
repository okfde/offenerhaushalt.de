---
_id: d21a7a80-7bf7-11e9-b7d3-3fda73ba1258
state: NW
name: Münster
level: kommune
config: |-
  {
    "datapackage": "7f037f45d2f473af5e754509a5bc9667:muenster-haushalt",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produkt",
        "label": "Produkt"
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
      },
      {
        "label": "Pro Einwohner (313.559 in 2017)",
        "number": "313559",
        "description": "p.E."
      }
    ],
    "filters": {
      "Jahr": {
        "name": "jahr.jahr",
        "label_ref": "jahr.jahr",
        "ref": "jahr",
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
            "value": 2007,
            "label": 2007
          },
          {
            "value": 2008,
            "label": 2008
          },
          {
            "value": 2009,
            "label": 2009
          },
          {
            "value": 2010,
            "label": 2010
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
          }
        ]
      },
      "Richtung": {
        "name": "richtung.richtung",
        "label_ref": "richtung.richtung",
        "ref": "richtung",
        "default": true,
        "defaultValue": "Aufwendungen",
        "defaultLabel": "All",
        "label": "Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Aufwendungen",
            "label": "Aufwendungen"
          },
          {
            "value": "Erträge",
            "label": "Erträge"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "NW",
    "text": "Haushalt der Stadt Münster von 2007 - 2016\n\nDatenquelle ist die Stadt Münster: https://www.stadt-muenster.de/finanzen/muensters-haushalt/der-haushaltsplan.html\n\nMehr Informationen zur Datenaufbereitung befinden sich im Github Repository von Code for Münster: https://github.com/codeformuenster/haushalt-muenster",
    "name": "Münster"
  }
slug: munster
---
Haushalt der Stadt Münster von 2007 - 2016

Datenquelle ist die Stadt Münster: https://www.stadt-muenster.de/finanzen/muensters-haushalt/der-haushaltsplan.html

Mehr Informationen zur Datenaufbereitung befinden sich im Github Repository von Code for Münster: https://github.com/codeformuenster/haushalt-muenster
