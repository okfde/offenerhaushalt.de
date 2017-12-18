---
name: Land Brandenburg
slug: brandenburg
url: /haushalt/brandenburg
tagline: "Landeshaushalt für Brandenburg."
level: land
state: BB
config: |-
  {
      "datapackage": "a6a16b964a7e784f99adecc47f26318a:brandenburg",
      "hierarchies": [
          {
              "datapackageHierarchy": "administrative_classification",
              "url": "einzelplan",
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
              "field": "Ansatz.sum",
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
              "label": "Pro Einwohner (2.489.005 in 2016)",
              "number": "2489005",
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
              "hasAll": false,
              "defaultValue": "Ausgabe",
              "defaultLabel": "All",
              "label": "Budget Richtung",
              "values": [
                  {
                      "value": "",
                      "label": "All"
                  },
                  {
                      "value": "Ausgabe",
                      "label": "Ausgabe"
                  },
                  {
                      "value": "Einnahme",
                      "label": "Einnahme"
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
      "name": "Land Brandenburg",
      "state": "BB",
      "level": "land",
      "text": ""
  }

---

