---
_id: 9adc1c20-1e30-11e8-baa8-9788832e013f
state: BE
name: Berlin
text: Haushalt
level: land
config: |-
  {'colors': [
    '#CF3D1E', '#F15623', '#F68B1F', '#FFC60B', '#DFCE21',
    '#BCD631', '#95C93D', '#48B85C', '#00833D', '#00B48D',
    '#60C4B1', '#27C4F4', '#478DCB', '#3E67B1', '#4251A3',
    '#59449B', '#6E3F7C', '#6A246D', '#8A4873', '#EB0080',
    '#EF58A0', '#C05A89' ],
  'datapackage': 'a6a16b964a7e784f99adecc47f26318a:be_mp_ez',
  'datapackageURL': 'https://s3.amazonaws.com/datastore.openspending.org/a6a16b964a7e784f99adecc47f26318a/be_mp_ez/final/datapackage.json',
  'hierarchies': [
    {
      'datapackageHierarchy': 'administrative_classification',
      'url': 'einzelplane',
      'label': 'Einzelpläne'
    },
    {
      'datapackageHierarchy': 'functional_classification',
      'url': 'politikfelder',
      'label': 'Politikfelder'
    },
    {
      'datapackageHierarchy': 'economic_classification',
      'url': 'gruppen',
      'label': 'Gruppen'
    }
  ],
  'value': [
    {
      'field': 'betrag.sum',
      'formatOptions': {
        'symbol': '',
        'decimal': ',',
        'thousand': '.',
        'precision': '',
        'format': '%s%v',
        'postfix': ' €',
        'grouping': 3
      },
      'label': 'Betrag'
    }
  ],
  'scale': [
    {
      'label': 'Gesamtsumme',
      'number': 1,
      'description': ''
    },
    {
      'label': 'Pro Einwohner (3.574.830 in 2016)',
      'number': '3574830',
      'description': ''
    }
  ],
  'filters': {
    'Typ': {
      'name': 'typ.typ',
      'label_ref': 'typ.bezeichnung',
      'ref': 'typ',
      'type': 'string',
      'default': true,
      'defaultValue': '',
      'defaultLabel': 'Alle',
      'label': 'Bereich',
      'values': [
        {
          'value': '',
          'label': 'Berlin Gesamt'
        },
        {
          'value': '"1";"2"',
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
    'BetragTyp': {
      'name': 'betragtyp.betragtyp',
      'label_ref': 'betragtyp.betragtyp',
      'ref': 'betragtyp',
      'type': 'string',
      'default': true,
      'defaultValue': 'Soll',
      'defaultLabel': 'All',
      'label': 'Soll/Ist',
      'values': [
        {
          'value': 'Ist',
          'label': 'Ist'
        },
        {
          'value': 'Soll',
          'label': 'Soll'
        }
      ]
    },
    'Titelart': {
      'name': 'titelart.titelart',
      'label_ref': 'titelart.titelart',
      'ref': 'titelart',
      'type': 'string',
      'default': true,
      'defaultValue': 'Ausgaben',
      'defaultLabel': 'All',
      'label': 'Typ',
      'values': [
        {
          'value': 'Ausgaben',
          'label': 'Ausgaben'
        },
        {
          'value': 'Einnahmen',
          'label': 'Einnahmen'
        }
      ]
    },
    'Jahr': {
      'name': 'jahr.jahr',
      'label_ref': 'jahr.jahr',
      'ref': 'jahr',
      'type': 'integer',
      'default': true,
      'defaultValue': 2018,
      'defaultLabel': 'All',
      'label': 'Jahr',
      'values': [
        {
          'value': 2014,
          'label': 2014
        },
        {
          'value': 2015,
          'label': 2015
        },
        {
          'value': 2016,
          'label': 2016
        },
        {
          'value': 2017,
          'label': 2017
        },
        {
          'value': 2018,
          'label': 2018
        },
        {
          'value': 2019,
          'label': 2019
        }
      ]
    }
  },
  'valueHeader': 'BetragTyp',
  'level': 'land',
  'state': 'BE',
  'name': 'Berlin',
  'text': 'Haushalt',
  'hasBarChart': true,
  'date': 'jahr.jahr',
  'dateFilter': 'Jahr',
  'budgetType': 'betragtyp.betragtyp',
  'budgetTypeFilter': 'BetragTyp',
  'betragIst': 'Ist',
  'betragSoll': 'Soll'
  }
date: '2018-03-02T15:44:34.274Z'
slug: be
---
