---
name: Land Schleswig-Holstein
slug: schleswig-holstein
url: /haushalt/schleswig-holstein
tagline: "Landeshaushalt für Schleswig-Holstein."
level: land
state: SH
config: |-
  {
      "datapackage": "a6a16b964a7e784f99adecc47f26318a:schleswig-holstein",
      "hierarchies": [
          {
              "datapackageHierarchy": "administrative_classification",
              "url": "einzelplan",
              "label": "Einzelplan"
          },
          {
              "datapackageHierarchy": "functional_classification",
              "url": "funktion",
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
              "field": "Wert.sum",
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
              "label": "Pro Einwohner (2.881.737 in 2016)",
              "number": "2881737",
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
                  }
              ]
          }
      },
      "name": "Land Schleswig-Holstein",
      "state": "SH",
      "level": "land",
      "text": ""
  }

---
Die Quelle für den visualisierten Datensatz findet sich auf dieser [Webseite](https://www.schleswig-holstein.de/DE/Landesregierung/VI/Service/downloads/_functions/haushaltsplaene2017_table.html). Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die Validität nicht zu 100% garantieren.
