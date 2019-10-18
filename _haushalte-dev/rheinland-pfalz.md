---
name: Rheinland Pfalz 
slug: rheinland-pfalz
url: /haushalt/rheinland-pfalz
tagline: "Landeshaushalt für Rheinland-Pfalz"
level: land
state: RP
config: |-
  {
      "colors": [
        '#DFCE21',
        '#BCD631', '#95C93D', '#48B85C', '#00833D', '#00B48D',
        '#60C4B1', '#27C4F4', '#478DCB', '#3E67B1', '#4251A3',
        '#59449B', '#6E3F7C', '#6A246D', '#8A4873', '#EB0080',
        '#EF58A0', '#C05A89' 
      ],
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
              'label': 'Politikfelder'
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
                  "format": "%s%v ",
                  "postfix": "\u20ac",
                  "grouping": 3
              },
              "label": "Betrag"
          }
      ],
      "scale": [
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
              "defaultValue": 2018,
              "defaultLabel": "All",
              "label": "Jahr",
              "values": [
                  {
                      "value": 2018,
                      "label": 2018
                  },
                  {
                      "value": 2017,
                      "label": 2017
                  },
                  {
                      "value": 2016,
                      "label": 2016
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
Die Quelle für den visualisierten Datensatz findet sich auf dieser [Webseite](https://fm.rlp.de/de/themen/finanzen/landeshaushalt/haushalt-20172018/). Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die Validität nicht zu 100% garantieren.
