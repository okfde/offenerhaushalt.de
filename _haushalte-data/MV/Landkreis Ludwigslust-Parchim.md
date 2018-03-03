---
_id: 20fce280-dab1-11e7-b3cb-638432b53ca7
state: MV
name: Landkreis Ludwigslust-Parchim
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:ludwigslust",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "teilhaushalte",
        "label": "Teilhaushalte"
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "institutionen",
        "label": "Institutionen"
      }
    ],
    "value": [
      {
        "field": "Ansatz.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": "",
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
        "label": "Pro Einwohner (12.255 in 2015)",
        "number": "12255",
        "description": "p. E. "
      }
    ],
    "filters": {
      "Jahr": {
        "name": "date_2.Jahr",
        "label_ref": "date_2.Jahr",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2017,
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": 2017,
            "label": 2017
          }
        ]
      },
      "Planart": {
        "name": "value_kind_2.Planart",
        "label_ref": "value_kind_2.Planart",
        "ref": "value_kind_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ergebnisplan",
        "defaultLabel": "All",
        "label": "Planart",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Ergebnisplan",
            "label": "Ergebnisplan"
          },
          {
            "value": "Finanzplan",
            "label": "Finanzplan"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "MV",
    "name": "Ludwigslust",
    "text": "Das ist der Haushalt für den Landkreis Ludwigslust 2017"
  }
slug: ludwigslust
---
Das ist der Haushalt für den Landkreis Ludwigslust-Parchim 2017, die Datengrundlage wurde uns per Email zugeschickt. Da die Daten vor der Visualisierung bearbeitet werden mussten, können wir die Validität nicht zu 100% garantieren.
