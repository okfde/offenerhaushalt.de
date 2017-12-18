---
name: Rheinland Pfalz 
slug: rheinland-pfalz
url: /haushalt/rheinland-pfalz
tagline: "Landeshaushalt für Rheinland-Pfalz"
level: land
state: RP
config: |-
  {
      "datapackage": "a6a16b964a7e784f99adecc47f26318a:rp_hh_16_17_18",
      "hierarchies": [
          {
              "datapackageHierarchy": "administrative_classification",
              "url": "einzelplaene",
              "label": "Einzelpläne"
          },
          {
              "datapackageHierarchy": "economic_classification",
              "url": "funktionen",
              "label": "Funktionen"
          },
          {
              "datapackageHierarchy": "functional_classification",
              "url": "gruppen",
              "label": "Gruppen"
          }
      ],
      "value": [
          {
              "field": "Ansatz_2018.sum",
              "formatOptions": {
                  "symbol": "",
                  "decimal": ",",
                  "thousand": ".",
                  "precision": "0",
                  "format": "%s%v",
                  "postfix": "\u20ac",
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
              "label": "pro Einwohner (4.073.280 in 2016)",
              "number": "4073280",
              "description": "p. E."
          }
      ],
      "filters": {
          "EinnahmeAusgabe": {
              "name": "direction_2.EinnahmeAusgabe",
              "label_ref": "direction_2.EinnahmeAusgabe",
              "ref": "direction_2",
              "type": "string",
              "default": true,
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
      "name": "Rheinland Pfalz",
      "state": "RP",
      "level": "land",
      "text": "\n"
  }

---


