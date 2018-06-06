---
_id: 206879e0-67cb-11e8-a999-596b9e5044d6
state: NW
name: Düsseldorf
level: kommune
config: |-
  {
    "datapackage": "2f29cf9be3f750901265649797d008b6:duesseldorf2018",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "administrative_classification",
        "label": "Ergebnisplan"
      }
    ],
    "value": [
      {
        "field": "betrag.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": 2,
          "format": "%s%v",
          "postfix": " €",
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
        "label": "Pro Einwohner (639.407 Stand 31.12.2017)",
        "number": "639407",
        "description": "p.E."
      }
    ],
    "filters": {
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
        "name": "richtung.richtung",
        "label_ref": "richtung.richtung",
        "ref": "richtung",
        "default": true,
        "defaultValue": "Aufwand",
        "defaultLabel": "All",
        "label": "Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Aufwand",
            "label": "Aufwand"
          },
          {
            "value": "Ertrag",
            "label": "Ertrag"
          }
        ]
      },
      "HH-Art": {
        "name": "hh_art.hh_art",
        "label_ref": "hh_art.hh_art",
        "ref": "hh_art",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "HH-Art",
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
            "value": "Plan",
            "label": "Plan"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "NW",
    "name": "Düsseldorf",
    "text": ""
  }
slug: dusseldorf
---
**Haushalt der Landeshauptstadt Düsseldorf**

Es handelt sich hierbei um die Ergebnispläne der Landeshauptstadt Düsseldorf von 2016 – 2021.

Die Aufstellung des städtischen Haushalts erfolgt nach den Vorgaben des Neuen Kommunalen Finanzmanagements (NKF).

Die Darstellung der Ergebnisplanung ist in folgenden Stufen gegliedert:

Stufe 1 - Produktbereiche,
Stufe 2 - Produkte,
Stufe 3 - Position.

Die Quelle für den visualisierten Datensatz findet sich auf [https://www.duesseldorf.de/finanzen/haushaltsplaene/2018.html](https://www.duesseldorf.de/finanzen/haushaltsplaene/2018.html).

Bei dem Haushaltsplan für das HH-Jahr 2018 handelt es sich bis zur Genehmigung durch die Aufsichtsbehörde um einen Entwurf.

Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die Validität nicht zu 100% garantieren.
