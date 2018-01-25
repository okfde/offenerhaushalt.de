---
_id: e9db1030-0141-11e8-86e6-dd2a0f61d6b6
state: NW
name: Ahaus
text: >-
  Haushaltsentwurf der Stadt Ahaus. 

  Der Haushaltsentwurf ist in der Ratssitzung am 13. Dezember 2017 eingebracht
  worden.


  Es sind nur ordentliche Erträge und ordentliche Aufwendungen dargestellt. 

  Aufrufbar sind das Ergebnis 2016, die Ansätze für 2017 und 2018 sowie die
  Planungen für 2019, 2020 und 2021.


  Quelle für die Daten und weitere Informationen auf ahaus.de:

  https://www.ahaus.de/rathaus/zahlendatenstatistik/finanzen-steuern/haushaltsplaene.html 

  (Haushaltspläne - Rathaus - Stadt Ahaus)


  Bürgerinfosystem der Stadt Ahaus: 

  https://secure.ahaus.de/sessionnet/bi/to0040.php?__ksinr=646 

  (Rat 13.12.2017)


  Extrahieren der Daten aus der Haushaltsdatei (PDF):

  https://thesing.net/2018/01/offener-haushalt
level: kommune
config: |-
  {
    "datapackage": "dc0213bb72807d3b187a6c20e98589fa:stadtahaus_haushaltsentwurf_ratssitzung_20171213",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produkt",
        "label": "Produkt"
      },
      {
        "datapackageHierarchy": "direction",
        "url": "ertrag_oder_aufwand",
        "label": "Ertrag oder Aufwand"
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
        "label": "pro Einwohner (Hauptwohnsitz am 31.12.2017)",
        "number": "39574",
        "description": "pE"
      }
    ],
    "filters": {
      "Jahr": {
        "name": "date_2.Jahr",
        "label_ref": "date_2.Jahr",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2018,
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
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
          },
          {
            "value": 2021,
            "label": 2021
          }
        ]
      },
      "Richtung": {
        "name": "direction_2.Richtung",
        "label_ref": "direction_2.Richtung",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ord. Aufwendungen",
        "defaultLabel": "All",
        "label": "Richtung",
        "values": [
          {
            "value": "Ord. Aufwendungen",
            "label": "Ord. Aufwendungen"
          },
          {
            "value": "Ord. Erträge",
            "label": "Ord. Erträge"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "NW",
    "name": "Ahaus",
    "text": "Haushaltsentwurf der Stadt Ahaus. \nDer Haushaltsentwurf ist in der Ratssitzung am 13. Dezember 2017 eingebracht worden.\n\nEs sind nur ordentliche Erträge und ordentliche Aufwendungen dargestellt. \nAufrufbar sind das Ergebnis 2016, die Ansätze für 2017 und 2018 sowie die Planungen für 2019, 2020 und 2021.\n\nQuelle für die Daten und weitere Informationen auf ahaus.de:\nhttps://www.ahaus.de/rathaus/zahlendatenstatistik/finanzen-steuern/haushaltsplaene.html \n(Haushaltspläne - Rathaus - Stadt Ahaus)\n\nBürgerinfosystem der Stadt Ahaus: \nhttps://secure.ahaus.de/sessionnet/bi/to0040.php?__ksinr=646 \n(Rat 13.12.2017)\n\nExtrahieren der Daten aus der Haushaltsdatei (PDF):\nhttps://thesing.net/2018/01/offener-haushalt\n"
  }
date: '2018-01-24T20:05:24.481Z'
slug: ahaus
---
undefined
