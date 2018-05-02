---
_id: 09f06ee0-4ded-11e8-ad1f-8d4eb113e003
state: BE
name: BE
level: land
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:berlin_test_test",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplane",
        "label": "Einzelpläne"
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
        "field": "betrag.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": "0",
          "format": "%s%v",
          "postfix": " €"
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
        "label": "Pro Einwohner (3 574 830 in 2016)",
        "number": "3574830",
        "description": "p.E."
      }
    ],
    "filters": {
      "Typ": {
        "name": "typ.typ",
        "label_ref": "typ.bezeichnung",
        "ref": "typ",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Bereich",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "1",
            "label": "Senatsverwaltungen"
          },
          {
            "value": "2",
            "label": "Verfassungsorgane"
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
            "label": "Tempelhof-Schöneberg"
          },
          {
            "value": "38",
            "label": "Neukölln"
          },
          {
            "value": "39",
            "label": "Treptow-Köpenick"
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
      "Jahr": {
        "name": "jahr.jahr",
        "label_ref": "jahr.jahr",
        "ref": "jahr",
        "default": true,
        "defaultValue": 2018,
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
          {
            "value": "",
            "label": "All"
          },
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
          }
        ]
      },
      "BetragTyp": {
        "name": "betragtyp.betragtyp",
        "label_ref": "betragtyp.betragtyp",
        "ref": "betragtyp",
        "default": true,
        "defaultValue": "Soll",
        "defaultLabel": "All",
        "label": "Soll/Ist",
        "values": [
          {
            "value": "",
            "label": "All"
          },
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
        "defaultValue": "Ausgaben",
        "defaultLabel": "All",
        "label": "Typ",
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
    "level": "land",
    "state": "BE",
    "text": "Der Haushaltsplan dient der Feststellung und Deckung des Finanzbedarfs, der zur Erfüllung der Aufgaben Berlins im jeweiligen Zeitraum notwendig ist. Er bildet die Zweistufigkeit der Berliner Verwaltung ab. Der Haushaltsplan besteht deshalb aus den Einzelplänen der Senatsverwaltungen (Einzelpläne 03 bis 15) und den Bezirkshaushaltsplänen (jeweils Einzelpläne 31 bis 45). Darüber hinaus beinhaltet er die Einnahmen und Ausgaben der durch die Verfassung von Berlin bestimmten Organe:\n- Abgeordnetenhaus (Einzelplan 01), \n- Verfassungsgerichtshof (Einzelplan 02), \n- Rechnungshof (Einzelplan 20) und\n- Beauftragten für Datenschutz und Informationsfreiheit (Einzelplan 21). \nDie landesweiten Maßnahmen des E-Governments werden in Einzelplan 25 dargestellt. Zuweisungen an und Programme für die Bezirke sowie landesweite Personal- und Finanzangelegenheiten werden zentral in den Einzelplänen 27 und 29 abgebildet.\n\nVergleichbarkeit der Daten unterschiedlicher Haushaltsjahre:\nDer Berliner Haushalt wird vorwiegend im Zwei-Jahres-Rhythmus aufgestellt (Doppelhaushalt). Beim Vergleich von zwei Haushaltsplänen kann es Unterschiede in den Strukturen geben. So können zum Beispiel durch Wegfall oder Beendigung einer Maßnahme einzelne oder mehrere Titel entfallen oder im umgekehrten Fall neu entstehen. Auch Änderungen der Ressortzuständigkeiten oder neue haushaltstechnische Vorgaben können zu größeren Veränderungen innerhalb der Einzelpläne (z. B. Neueinrichtung oder Umsetzung von Kapiteln) führen. Es kann deshalb dazu kommen, dass eine 1:1-Vergleichbarkeit auf Titelebene nicht in jedem Fall gewährleistet ist.\n\n\nVergleichbarkeit von Soll- und Istwerten:\nIn dieser Anwendung können die Ist-Einnahmen und -Ausgaben aufgerufen und den Soll-Ansätzen des Haushaltsplans gegenübergestellt werden. \nDie Istwerte entstammen der Haushaltsrechnung des Landes. Bei einem Soll-Ist-Vergleich ist zu beachten, dass durch Ausgabereste und Vorgriffe sowie durch Regelungen des Haushaltsgesetzes oder Haushaltsvermerke (z. B. Deckungs- und Verstärkungsmöglichkeiten, Sperren, über-/außerplanmäßige Ausgaben) das Ist erheblich vom Soll abweichen und dieses teilweise auch überschreiten kann. \nIm Fall von außerplanmäßigen Ausgaben führt das z. B. sogar dazu, dass die Haushaltsrechnung Titel mit einem Ist ausweist, die im Haushaltsplan noch gar nicht vorgesehen waren.",
    "name": "BE"
  }
slug: be
---
Der Haushaltsplan dient der Feststellung und Deckung des Finanzbedarfs, der zur Erfüllung der Aufgaben Berlins im jeweiligen Zeitraum notwendig ist. Er bildet die Zweistufigkeit der Berliner Verwaltung ab. Der Haushaltsplan besteht deshalb aus den Einzelplänen der Senatsverwaltungen (Einzelpläne 03 bis 15) und den Bezirkshaushaltsplänen (jeweils Einzelpläne 31 bis 45). Darüber hinaus beinhaltet er die Einnahmen und Ausgaben der durch die Verfassung von Berlin bestimmten Organe:
- Abgeordnetenhaus (Einzelplan 01), 
- Verfassungsgerichtshof (Einzelplan 02), 
- Rechnungshof (Einzelplan 20) und
- Beauftragten für Datenschutz und Informationsfreiheit (Einzelplan 21). 
Die landesweiten Maßnahmen des E-Governments werden in Einzelplan 25 dargestellt. Zuweisungen an und Programme für die Bezirke sowie landesweite Personal- und Finanzangelegenheiten werden zentral in den Einzelplänen 27 und 29 abgebildet.

Vergleichbarkeit der Daten unterschiedlicher Haushaltsjahre:
Der Berliner Haushalt wird vorwiegend im Zwei-Jahres-Rhythmus aufgestellt (Doppelhaushalt). Beim Vergleich von zwei Haushaltsplänen kann es Unterschiede in den Strukturen geben. So können zum Beispiel durch Wegfall oder Beendigung einer Maßnahme einzelne oder mehrere Titel entfallen oder im umgekehrten Fall neu entstehen. Auch Änderungen der Ressortzuständigkeiten oder neue haushaltstechnische Vorgaben können zu größeren Veränderungen innerhalb der Einzelpläne (z. B. Neueinrichtung oder Umsetzung von Kapiteln) führen. Es kann deshalb dazu kommen, dass eine 1:1-Vergleichbarkeit auf Titelebene nicht in jedem Fall gewährleistet ist.


Vergleichbarkeit von Soll- und Istwerten:
In dieser Anwendung können die Ist-Einnahmen und -Ausgaben aufgerufen und den Soll-Ansätzen des Haushaltsplans gegenübergestellt werden. 
Die Istwerte entstammen der Haushaltsrechnung des Landes. Bei einem Soll-Ist-Vergleich ist zu beachten, dass durch Ausgabereste und Vorgriffe sowie durch Regelungen des Haushaltsgesetzes oder Haushaltsvermerke (z. B. Deckungs- und Verstärkungsmöglichkeiten, Sperren, über-/außerplanmäßige Ausgaben) das Ist erheblich vom Soll abweichen und dieses teilweise auch überschreiten kann. 
Im Fall von außerplanmäßigen Ausgaben führt das z. B. sogar dazu, dass die Haushaltsrechnung Titel mit einem Ist ausweist, die im Haushaltsplan noch gar nicht vorgesehen waren.
