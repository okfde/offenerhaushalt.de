---
_id: 09da30e0-02c4-11e8-86e6-dd2a0f61d6b6
state: BY
name: Nürnberg
text: Nürnberg 2014 - 2016 + Plan 2017/18
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:nuernberg-for-real",
    "hierarchies": [
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
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": 2,
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Betrag"
      }
    ],
    "scale": [],
    "filters": {
      "Direction": {
        "name": "direction_2.Direction",
        "label_ref": "direction_2.Direction",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ertrag",
        "defaultLabel": "All",
        "label": "Direction",
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
      "Jahr": {
        "name": "date_2.Jahr",
        "label_ref": "date_2.Jahr",
        "ref": "date_2",
        "type": "integer",
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
          }
        ]
      }
    },
    "level": "kommune",
    "state": "BY",
    "name": "Nürnberg",
    "text": "Nürnberg 2014 - 2016 + Plan 2017/18"
  }
date: '2018-01-26T18:09:23.892Z'
slug: nurnberg
---
undefined
