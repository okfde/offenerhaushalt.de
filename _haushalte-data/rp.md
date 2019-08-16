---
_id: 4b81ba30-c015-11e9-a0a8-b55fea34c7b7
state: RP
name: RP
level: land
config: |-
  {
    "colors": [
      '#DFCE21',
      '#BCD631', '#95C93D', '#48B85C', '#00833D', '#00B48D',
      '#60C4B1', '#27C4F4', '#478DCB', '#3E67B1', '#4251A3',
      '#59449B', '#6E3F7C', '#6A246D', '#8A4873', '#EB0080',
      '#EF58A0', '#C05A89' 
    ],
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:rp1920",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "administrative_classification",
        "label": "Einzelpläne"
      },
      {
        "datapackageHierarchy": "functional_classification",
        "url": "functional_classification",
        "label": "Gruppen"
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "economic_classification",
        "label": "Politikfelder"
      }
    ],
    "value": [
      {
        "field": "ansatz_2019.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ".",
          "thousand": ",",
          "precision": "",
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Ansatz 2019"
      }
    ],
    "scale": [],
    "filters": {
      "EinnahmeAusgabe": {
        "name": "einnahmeausgabe.einnahmeausgabe",
        "label_ref": "einnahmeausgabe.einnahmeausgabe",
        "ref": "einnahmeausgabe",
        "default": true,
        "defaultValue": "Ausgabe",
        "defaultLabel": "All",
        "label": "EinnahmeAusgabe",
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
        "name": "jahr.jahr",
        "label_ref": "jahr.jahr",
        "ref": "jahr",
        "default": true,
        "defaultValue": 2019,
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": 2019,
            "label": 2019
          },
          {
            "value": 2020,
            "label": 2020
          }
        ]
      }
    },
    "level": "land",
    "state": "RP",
    "text": "lalala",
    "name": "RP"
  }
slug: rp
---

