---
_id: 9adc1c20-1e30-11e8-baa8-9788832e013f
state: BE
name: Berlin
text: Haushalt
level: land
config: |-
  {
    'colors': [
        '#CF3D1E', '#F15623', '#F68B1F', '#FFC60B', '#DFCE21',
        '#BCD631', '#95C93D', '#48B85C', '#00833D', '#00B48D',
        '#60C4B1', '#27C4F4', '#478DCB', '#3E67B1', '#4251A3',
        '#59449B', '#6E3F7C', '#6A246D', '#8A4873', '#EB0080',
        '#EF58A0', '#C05A89' ],
    "datapackage": "99030977d67877e4fc4e5b7306c9f4b1:berlin-2014-2021",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "administrative_classification",
        'label': 'Einzelpläne'
      },
      {
        "datapackageHierarchy": "functional_classification",
        "url": "functional_classification",
        'label': 'Politikfelder'
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "economic_classification",
        'label': 'Gruppen'
      }
    ],
    "value": [
      {
        "field": "betrag.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": '',
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Betrag"
      }
    ],
    "scale": [
        {
      'label': 'Gesamtsumme',
      'number': 1,
      'description': ''
    },
    {
      'label': 'Pro Einwohner (3.769.495 in 2019)',
      'number': '3769495',
      'description': ''
    }
 
    ],
    "filters": {
      "Bereich": {
        "name": "bereich.bereich",
        "label_ref": "bereich.bereichsbezeichnung",
        "ref": "bereich",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "Alle",
        "label": "Bereich",
        'values': [
          {
            'value': '',
            'label': 'Berlin Gesamt'
          },
          {
            'value': '30',
            'label': 'Hauptverwaltung',
            'isTop': true
          },
          {
            'value': '1',
            'label': 'Senatsverwaltungen',
            'isSub': true
          },
          {
            'value': '2',
            'label': 'Verfassungsorgane',
            'isSub': true
          },
          {
            'value': '"31";"32";"33";"34";"35";"36";"37";"38";"39";"40";"41";"42"',
            'label': 'Alle Bezirke',
            'isTop': true
          },
          {
            'value': '31',
            'label': 'Mitte',
            'isSub': true
          },
          {
            'value': '32',
            'label': 'Friedrichshain-Kreuzberg',
            'isSub': true
          },
          {
            'value': '33',
            'label': 'Pankow',
            'isSub': true
          },
          {
            'value': '34',
            'label': 'Charlottenburg-Wilmersdorf',
            'isSub': true
          },
          {
            'value': '35',
            'label': 'Spandau',
            'isSub': true
          },
          {
            'value': '36',
            'label': 'Steglitz-Zehlendorf',
            'isSub': true
          },
          {
            'value': '37',
            'label': 'Tempelhof-Schöneberg',
            'isSub': true
          },
          {
            'value': '38',
            'label': 'Neukölln',
            'isSub': true
          },
          {
            'value': '39',
            'label': 'Treptow-Köpenick',
            'isSub': true
          },
          {
            'value': '40',
            'label': 'Marzahn-Hellersdorf',
            'isSub': true
          },
          {
            'value': '41',
            'label': 'Lichtenberg',
            'isSub': true
          },
          {
            'value': '42',
            'label': 'Reinickendorf',
            'isSub': true
          }
        ]
      },
      "BetragTyp": {
        "name": "betragtyp.betragtyp",
        "label_ref": "betragtyp.betragtyp",
        "ref": "betragtyp",
        "default": true,
        "defaultValue": "Soll",
        "defaultLabel": "Soll",
        "label": "Soll/Ist",
        "values": [
          {
            "value": "Ist",
            "label": "Ist"
          },
          {
            "value": "Soll",
            "label": "Soll"
          }
        ]
      },
      "Titelart": {
        "name": "titelart.titelart",
        "label_ref": "titelart.titelart",
        "ref": "titelart",
        "default": true,
        "defaultValue": "Ausgabetitel",
        "defaultLabel": "Ausgaben",
        "type": "string",
        "label": "Typ",
        "values": [
          {
            "value": "Ausgabetitel",
            "label": "Ausgaben"
          },
          {
            "value": "Einnahmetitel",
            "label": "Einnahme"
          }
        ]
      },
      "Jahr": {
        "name": "jahr.jahr",
        "label_ref": "jahr.jahr",
        "ref": "jahr",
        "default": true,
        "defaultValue": "2020",
        "defaultLabel": "2020",
        "label": "Jahr",
        "values": [
          {
            "value": 2014,
            "label": 2014
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
          },
          {
            "value": 2021,
            "label": 2021
          }
        ]
      },

    },
  'text': 'Haushalt',
  'hasBarChart': true,
  'date': 'jahr.jahr',
  'dateFilter': 'Jahr',
  'budgetType': 'betragtyp.betragtyp',
  'budgetTypeFilter': 'BetragTyp',
  'betragIst': 'Ist',
  'betragSoll': 'Soll',
  'valueHeader': 'BetragTyp'
  }
date: '2018-03-02T15:44:34.274Z'
slug: be
---
