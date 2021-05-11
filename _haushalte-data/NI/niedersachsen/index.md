---
name: Land Niedersachsen
slug: niedersachsen
url: /haushalt/niedersachsen
tagline: "Landeshaushalt für Niedersachsen."
level: land
state: NI
config: |-
  {
      "datapackage": "a6a16b964a7e784f99adecc47f26318a:niedersachsen",
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
              "field": "value.sum",
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
              "label": "pro Einwohner (7.948.507)",
              "number": "7948507",
              "description": "p. E. "
          }
      ],
      "filters": {
          "E/A": {
              "name": "direction_2.E_A",
              "label_ref": "direction_2.E_A",
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
          "year": {
              "name": "date_2.year",
              "label_ref": "date_2.year",
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
      "name": "Land Niedersachsen",
      "state": "NI",
      "level": "land",
      "text": ""
  }

---
Die Quelle für den visualisierten Datensatz stammt aus einer Informationsfreiheitsanfrage und ist hier zu [finden](https://fragdenstaat.de/anfrage/haushaltsplane-maschinenlesbare-form-4/?anfrage-gestellt). Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die Validität nicht zu 100% garantieren.
