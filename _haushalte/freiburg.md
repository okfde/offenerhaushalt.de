---
layout: budget2
name: Stadt Freiburg 
real_name: Freiburg
slug: Freiburg 
url: /haushalt/freiburg
tagline: "Haushalt der Stadt Freiburg 2015 - 2018."
level: kommune
state: BW
config: |-
  {
      "datapackage": "a6a16b964a7e784f99adecc47f26318a:freiburg-neu",
      "hierarchies": [
          {
              "datapackageHierarchy": "administrative_classification",
              "url": "produkte",
              "label": "Produkte"
          },
          {
              "datapackageHierarchy": "economic_classification",
              "url": "teilhaushalte",
              "label": "Teilhaushalte"
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
                  "postfix": " \u20ac",
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
              "label": "Pro Einwohner (226.393 in 2015)",
              "number": "226393 ",
              "description": "p. E. "
          }
      ],
      "filters": {
          "Art": {
              "name": "direction_2.Art",
              "label_ref": "direction_2.Art",
              "ref": "direction_2",
              "type": "string",
              "default": true,
              "hasAll": true,
              "defaultValue": "Aufwendungen",
              "defaultLabel": "All",
              "label": "Budget-Richtung",
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
                      "value": "Ertr\u00e4ge",
                      "label": "Ertr\u00e4ge"
                  }
              ]
          },
          "Jahr": {
              "name": "date_2.Jahr",
              "label_ref": "date_2.Jahr",
              "ref": "date_2",
              "type": "integer",
              "default": true,
              "hasAll": true,
              "defaultValue": 2017,
              "defaultLabel": "All",
              "label": "Jahr",
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
                  }
              ]
          }
      },
      "name": "Freiburg",
      "state": "BW",
      "level": "kommune",
      "text": ""
  }

---

