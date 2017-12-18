---
name: Land Bremen
slug: bremen
url: /haushalt/bremen
tagline: "Landeshaushalt für Bremen, verabschiedet durch den Senat der Stadt Bremen."
level: land
state: HB
config: |-
  {
      "datapackage": "b847ea2743b1084c724a5cd449e1adbc:bremen",
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
              "label": "Pro Einwohner (557.464 in 2015)",
              "number": "557464",
              "description": "p. E."
          }
      ],
      "filters": {
          "year": {
              "name": "date_2.year",
              "label_ref": "date_2.year",
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
                      "value": 2016,
                      "label": 2016
                  },
                  {
                      "value": 2017,
                      "label": 2017
                  }
              ]
          },
          "Art": {
              "name": "value_kind_2.Art",
              "label_ref": "value_kind_2.Art",
              "ref": "value_kind_2",
              "type": "string",
              "default": true,
              "hasAll": true,
              "defaultValue": "Ausgaben",
              "defaultLabel": "All",
              "label": "Budget Richtung",
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
      "name": "Land Bremen",
      "state": "HB",
      "level": "land",
      "text": "\n# \u00dcber den Haushalt der Stadt Bremen \n\nDer Haushalt der Hansestadt Bremen ist nach Stadt (S) und Land (L) aufgeteilt, dies zeigt sich in der Visualisierung durch die jeweiligen abk\u00fcrzungen.\n"
  }

---

# Über den Haushalt der Stadt Bremen 

Der Haushalt der Hansestadt Bremen ist nach Stadt (S) und Land (L) aufgeteilt, dies zeigt sich in der Visualisierung durch die jeweiligen abkürzungen.

