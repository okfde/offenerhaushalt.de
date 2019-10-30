---
_id: a6bbe0a0-de3e-11e9-a0a8-b55fea34c7b7
state: TH
name: Ilmenau
level: kommune
config: |-
  {
    "datapackage": "3e3d2e20fa249a5300c883e16c4179fe:hh_il_2019",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplaene",
        "label": "Einzelplaene"
      }
    ],
    "value": [
      {
        "field": "betrag.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ".",
          "thousand": ",",
          "precision": 2,
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
        "label": "pro Einwohner",
        "number": "39017",
        "description": ""
      }
    ],
    "filters": {
      "HH_Art_ID": {
        "name": "hh_art_id.hh_art_id",
        "label_ref": "hh_art_id.hh_art_text",
        "ref": "hh_art_id",
        "default": true,
        "defaultValue": "1",
        "defaultLabel": "All",
        "label": "HH-Art",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "1",
            "label": "Verwaltungshaushalt"
          },
          {
            "value": "2",
            "label": "Vermögenshaushalt"
          }
        ]
      },
      "HH_EA": {
        "name": "hh_ea.hh_ea",
        "label_ref": "hh_ea.hh_ea",
        "ref": "hh_ea",
        "default": true,
        "defaultValue": "Ausgaben",
        "defaultLabel": "All",
        "label": "HH-EA",
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
      },
      "HH_AnsRe_ID": {
        "name": "hh_ansre_id.hh_ansre_id",
        "label_ref": "hh_ansre_id.hh_ansre",
        "ref": "hh_ansre_id",
        "default": true,
        "defaultValue": "1",
        "defaultLabel": "All",
        "label": "HH-AnsRe",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "1",
            "label": "Ansatz"
          }
        ]
      },
      "HH_Jahr": {
        "name": "hh_jahr.hh_jahr",
        "label_ref": "hh_jahr.hh_jahr",
        "ref": "hh_jahr",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "HH-Jahr",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": 2019,
            "label": 2019
          }
        ]
      }
    },
    "text": "Haushalt der großen kreisangehörigen Stadt Ilmenau, Thüringen",
    "level": "kommune",
    "name": "Ilmenau",
    "state": "TH"
  }
slug: ilmenau
---
Haushalt der großen kreisangehörigen Stadt Ilmenau, Thüringen
