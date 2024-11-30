---
_id: ec438820-38cd-11e8-ad1f-8d4eb113e003
state: RP
name: Verbandsgemeinde Rodalben
level: kommune
config: |-
  {
    "datapackage": "55e32d648305f48f26add5dcda4a363a:hh_vg_2018",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produktbereich",
        "label": "Produktbereich"
      }
    ],
    "value": [
      {
        "field": "Ansatz.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": 2,
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Ansatz"
      }
    ],
    "scale": [],
    "filters": {
      "Budgetrichtung": {
        "name": "direction_2.Budgetrichtung",
        "label_ref": "direction_2.Budgetrichtung",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Aufwand",
        "defaultLabel": "All",
        "label": "Budgetrichtung",
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
      }
    },
    "level": "kommune",
    "state": "RP",
    "name": "Verbandsgemeinde Rodalben",
    "text": "Haushalt der VG Rodalben, gegliedert nach Produktbereichen"
  }
slug: verbandsgemeinde-rodalben
---
Haushalt der VG Rodalben, gegliedert nach Produktbereichen
