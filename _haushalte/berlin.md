---
name: Land Berlin
slug: berlin
url: /haushalt/berlin
tagline: "Landeshaushalt für Berlin, verabschiedet durch den Senat der Stadt Berlin."
level: land
state: BE
config: |-
  {
      "datapackage": "a6a16b964a7e784f99adecc47f26318a:berlin_16_17_clean",
      "hierarchies": [
          {
              "datapackageHierarchy": "administrative_classification",
              "url": "einzelplan",
              "label": "Einzelplan"
          },
          {
              "datapackageHierarchy": "functional_classification",
              "url": "politikfelder",
              "label": "Politikfelder"
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
                  "precision": "0",
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
              "label": "pro Einwohner",
              "number": "3520031",
              "description": "p. P."
          }
      ],
      "filters": {
          "Bereich": {
              "name": "fin_source_Bereich.Bereich",
              "label_ref": "fin_source_Bereich.Bereichsbezeichnung",
              "ref": "fin_source_Bereich",
              "type": "string",
              "default": true,
              "defaultValue": "All",
              "defaultLabel": "All",
              "label": "Bezirke",
              "values": [
                  {
                      "value": "",
                      "label": "All"
                  },
                  {
                      "value": "30",
                      "label": "Hauptverwaltung"
                  },
                  {
                      "value": "31",
                      "label": "Mitte"
                  },
                  {
                      "value": "32",
                      "label": "Friedrichshain-Kreuzberg"
                  },
                  {
                      "value": "33",
                      "label": "Pankow"
                  },
                  {
                      "value": "34",
                      "label": "Charlottenburg-Wilmersdorf"
                  },
                  {
                      "value": "35",
                      "label": "Spandau"
                  },
                  {
                      "value": "36",
                      "label": "Steglitz-Zehlendorf"
                  },
                  {
                      "value": "37",
                      "label": "Tempelhof-Sch\u00f6neberg"
                  },
                  {
                      "value": "38",
                      "label": "Neuk\u00f6lln"
                  },
                  {
                      "value": "39",
                      "label": "Treptow-K\u00f6penick"
                  },
                  {
                      "value": "40",
                      "label": "Marzahn-Hellersdorf"
                  },
                  {
                      "value": "41",
                      "label": "Lichtenberg"
                  },
                  {
                      "value": "42",
                      "label": "Reinickendorf"
                  }
              ]
          },
          "Titelart": {
              "name": "direction_2.Titelart",
              "label_ref": "direction_2.Titelart",
              "ref": "direction_2",
              "type": "string",
              "default": true,
              "defaultValue": "Ausgabetitel",
              "defaultLabel": "All",
              "label": "Budget Richtung",
              "values": [
                  {
                      "value": "",
                      "label": "All"
                  },
                  {
                      "value": "Ausgabetitel",
                      "label": "Ausgabetitel"
                  },
                  {
                      "value": "Einnahmetitel",
                      "label": "Einnahmetitel"
                  }
              ]
          },
          "Jahr": {
              "name": "date_2.Jahr",
              "label_ref": "date_2.Jahr",
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
                  }
              ]
          }
      },
      "name": "Land Berlin",
      "state": "BE",
      "level": "land",
      "text": "\n# \u00dcber den Haushalt der Stadt Berlin \n\nDer Haushaltsplan dient der Feststellung und Deckung des Finanzbedarfs, der zur Erf\u00fcllung der Aufgaben Berlins im jeweiligen Zeitraum notwendig ist. Er bildet die Zweistufigkeit der Berliner Verwaltung ab. Der Haushaltsplan besteht deshalb aus den Einzelpl\u00e4nen der Senatsverwaltungen (Einzelpl\u00e4ne 03 bis 15) und der Bezirkshaushaltspl\u00e4ne (jeweils Einzelpl\u00e4ne 31 bis 59). Dar\u00fcber hinaus beinhaltet er die Einnahmen und Ausgaben der durch die Verfassung von Berlin bestimmten Organe Abgeordnetenhaus (Einzelplan 01), Verfassungsgerichtshof (Einzelplan 02), Rechnungshof (Einzelplan 20) und des Beauftragten f\u00fcr Datenschutz und Informationsfreiheit (Einzelplan 21). Zuweisungen an und Programme f\u00fcr die Bezirke sowie Landesweite Personal- und Finanzangelegenheiten werden zentral in den Einzelpl\u00e4ne 27 und 29 abgebildet.\n"
  }



