---
_id: 7313dfa0-d8d7-11e7-be94-057620f1b5ea
state: BW
name: Last test
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:berlin_16_17_clean",
    "hierarchies": [
      {
        "datapackageHierarchy": "functional_classification",
        "url": "functional_classification",
        "label": "Functional Classification"
      },
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "administrative_classification",
        "label": "Administrative Classification"
      }
    ],
    "value": [
      {
        "field": "Betrag.sum",
        "formatOptions": {
          "symbol": "$",
          "decimal": ".",
          "thousand": ",",
          "precision": 2,
          "format": "%s%v",
          "postfix": "",
          "grouping": 3
        },
        "label": "Betrag"
      }
    ],
    "scale": [],
    "filters": {
      "Typ": {
        "name": "fin_source_Typ.Typ",
        "label_ref": "fin_source_Typ.Bezeichnung",
        "ref": "fin_source_Typ",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Bezeichnung",
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
            "value": "3",
            "label": "Bezirke"
          }
        ]
      }
    }
  }
slug: last-test
---
you hope
