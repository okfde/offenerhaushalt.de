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
  'datapackage': 'a6a16b964a7e784f99adecc47f26318a:berlin-aktuell',
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
      'field': 'Betrag.sum',
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
      'label': 'Pro Einwohner',
      'number': '3574830',
      'description': ''
    }
  ],
  'filters': {
    'Typ': {
      'name': 'expenditure_type_2.Typ',
      'label_ref': 'expenditure_type_2.Bezeichnung',
      'ref': 'expenditure_type_2',
      'type': 'string',
      'default': true,
      'defaultValue': '',
      'defaultLabel': 'Alle',
      'label': 'Bereich',
      'values': [
        {
          'value': '',
          'label': 'Alle'
        },
        {
          'value': '"1";"2"',
          'label': 'Hauptverwaltung (gesamt)',
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
      'name': 'phase_2.BetragTyp',
      'label_ref': 'phase_2.BetragTyp',
      'ref': 'phase_2',
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
      'name': 'direction_2.Titelart',
      'label_ref': 'direction_2.Titelart',
      'ref': 'direction_2',
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
      'name': 'date_2.Jahr',
      'label_ref': 'date_2.Jahr',
      'ref': 'date_2',
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
    },    
  },
    "level": "land",
    "state": "BE",
    "name": "Berlin",
    "text": "Haushalt",
    "hasBarChart": true
  }
date: '2018-03-02T15:44:34.274Z'
slug: be
---
Der Haushaltsplan dient der Feststellung und Deckung des Finanzbedarfs, der zur Erfüllung der
Aufgaben Berlins im jeweiligen Zeitraum notwendig ist. Er bildet die Zweistufigkeit der Berliner
Verwaltung ab. Der Haushaltsplan besteht deshalb aus den Einzelplänen der Senatsverwaltungen
(Einzelpläne 03 bis 15) und den Bezirkshaushaltsplänen (jeweils Einzelpläne 31 bis 45). Darüber
hinaus beinhaltet er die Einnahmen und Ausgaben der durch die Verfassung von Berlin bestimmten
Organe:
- Abgeordnetenhaus (Einzelplan 01),
- Verfassungsgerichtshof (Einzelplan 02),
- Rechnungshof (Einzelplan 20) und
- Beauftragten für Datenschutz und Informationsfreiheit (Einzelplan 21).
Die landesweiten Maßnahmen des E-Governments werden in Einzelplan 25 dargestellt. Zuweisungen
an und Programme für die Bezirke sowie landesweite Personal- und Finanzangelegenheiten werden
zentral in den Einzelplänen 27 und 29 abgebildet.
Vergleichbarkeit der Daten unterschiedlicher Haushaltsjahre
Der Berliner Haushalt wird vorwiegend im Zwei-Jahres- Rhythmus aufgestellt (Doppelhaushalt). Beim
Vergleich von zwei Haushaltsplänen kann es Unterschiede in den Strukturen geben. So können zum
Beispiel durch Wegfall oder Beendigung einer Maßnahme einzelne oder mehrere Titel entfallen oder
im umgekehrten Fall neu entstehen. Auch Änderungen der Ressortzuständigkeiten oder neue
haushaltstechnische Vorgaben können zu größeren Veränderungen innerhalb der Einzelpläne (z. B.
Neueinrichtung oder Umsetzung von Kapiteln) führen. Es kann deshalb dazu kommen, dass eine 1:1-
Vergleichbarkeit auf Titelebene nicht in jedem Fall gewährleistet ist.

Vergleichbarkeit von Soll- und Istwerten
In dieser Anwendung können die Ist-Einnahmen und -Ausgaben aufgerufen und den Soll-Ansätzen
des Haushaltsplans gegenübergestellt werden.
Die Istwerte entstammen der Haushaltsrechnung des Landes. Bei einem Soll-Ist- Vergleich ist zu
beachten, dass durch Ausgabereste und Vorgriffe sowie durch Regelungen des Haushaltsgesetzes
oder Haushaltsvermerke (z. B. Deckungs- und Verstärkungsmöglichkeiten, Sperren, über-
/außerplanmäßige Ausgaben) das Ist erheblich vom Soll abweichen und dieses teilweise auch
überschreiten kann.
Im Fall von außerplanmäßigen Ausgaben führt das z. B. sogar dazu, dass die Haushaltsrechnung Titel
mit einem Ist ausweist, die im Haushaltsplan noch gar nicht vorgesehen waren.
