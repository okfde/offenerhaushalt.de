---
name: Wesel 
real_name: Wesel
slug: Wesel 
url: /haushalt/wesel
tagline: "Haushalt der Stadt Wesel für 2015 - 2020."
level: kommune
state: NW
config: |-
  {
      "datapackage": "a6a16b964a7e784f99adecc47f26318a:wesel",
      "hierarchies": [
          {
              "datapackageHierarchy": "administrative_classification",
              "url": "einzelplan",
              "label": "Einzelplan"
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
              "label": "pro Einwohner (60.595)",
              "number": "60595",
              "description": "p. E."
          }
      ],
      "filters": {
          "Art": {
              "name": "direction_2.Art",
              "label_ref": "direction_2.Art",
              "ref": "direction_2",
              "type": "string",
              "default": true,
              "hasAll": false,
              "defaultValue": "Aufwendungen",
              "defaultLabel": "All",
              "label": "Budget Richtung",
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
              "hasAll": false,
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
                  },
                  {
                      "value": 2019,
                      "label": 2019
                  },
                  {
                      "value": 2020,
                      "label": 2020
                  }
              ]
          }
      },
      "name": "Wesel",
      "state": "NW",
      "level": "kommune",
      "text": ""
  }

---
Die Quelle für den visualisierten Datensatz findet sich auf dieser [Webseite](https://www.offenesdatenportal.de/dataset/haushaltsplan-entwurf-2017-stadt-wesel). Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die Validität nicht zu 100% garantieren.
