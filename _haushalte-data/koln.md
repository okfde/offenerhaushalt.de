---
_id: f71a7a10-59cf-11e8-a999-596b9e5044d6
state: NW
name: Köln
level: kommune
config: |-
  {
    "datapackage": "6018ab87076187018fc29c94a68a3cd2:__os_imported__de-nrw-cologne",
    'datapackageURL': 'https://s3.amazonaws.com/datastore.openspending.org/6018ab87076187018fc29c94a68a3cd2/__os_imported__de-nrw-cologne/datapackage.json',
    "hierarchies": [
      {
        "datapackageHierarchy": "unknown",
        "url": "unknown",
        "label": "Unknown"
      },
      {
        "datapackageHierarchy": "date",
        "url": "date",
        "label": "Date"
      }
    ],
    "value": [
      {
        "field": "Bilanz.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ".",
          "thousand": ",",
          "precision": 2,
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Bilanz"
      },
      {
        "field": "amount.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ".",
          "thousand": ",",
          "precision": 2,
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "amount"
      }
    ],
    "scale": [],
    "filters": {
      "art_name": {
        "name": "unknown_art_name.art_name",
        "label_ref": "unknown_art_name.art_label",
        "ref": "unknown_art_name",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "art_label",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "aufwand",
            "label": "Aufwand"
          },
          {
            "value": "ertrag",
            "label": "Ertrag"
          }
        ]
      },
      "time": {
        "name": "date_time.time",
        "label_ref": "date_time.time",
        "ref": "date_time",
        "type": "date",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "time",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "2012-01-01",
            "label": "2012-01-01"
          },
          {
            "value": "2013-01-01",
            "label": "2013-01-01"
          },
          {
            "value": "2014-01-01",
            "label": "2014-01-01"
          },
          {
            "value": "2015-01-01",
            "label": "2015-01-01"
          },
          {
            "value": "2016-01-01",
            "label": "2016-01-01"
          },
          {
            "value": "2017-01-01",
            "label": "2017-01-01"
          },
          {
            "value": "2018-01-01",
            "label": "2018-01-01"
          }
        ]
      },
      "produktbereich_name": {
        "name": "unknown_produktbereich_name.produktbereich_name",
        "label_ref": "unknown_produktbereich_name.produktbereich_label",
        "ref": "unknown_produktbereich_name",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "produktbereich_label",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "01",
            "label": "Innere Verwaltung"
          },
          {
            "value": "02",
            "label": "Sicherheit und Ordnung"
          },
          {
            "value": "03",
            "label": "Schulträgeraufgaben"
          },
          {
            "value": "04",
            "label": "Kultur und Wissenschaft"
          },
          {
            "value": "05",
            "label": "Soziale Hilfen"
          },
          {
            "value": "06",
            "label": "Kinder-, Jugend- und Familienhilfe"
          },
          {
            "value": "07",
            "label": "Gesundheitsdienste"
          },
          {
            "value": "08",
            "label": "Sportförderung"
          },
          {
            "value": "09",
            "label": "Räumliche Planung und Entwicklung, Geoinformationen"
          },
          {
            "value": "10",
            "label": "Bauen und Wohnen"
          },
          {
            "value": "11",
            "label": "Ver- und Entsorgung"
          },
          {
            "value": "12",
            "label": "Verkehrsflächen und -anlagen, ÖPNV"
          },
          {
            "value": "13",
            "label": "Natur- und Landschaftspflege"
          },
          {
            "value": "14",
            "label": "Umweltschutz"
          },
          {
            "value": "15",
            "label": "Wirtschaft und Tourismus"
          },
          {
            "value": "16",
            "label": "Allgemeine Finanzwirtschaft"
          },
          {
            "value": "17",
            "label": "Stiftungen"
          },
          {
            "value": "18",
            "label": "Bezirksorientierte Mittel"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "NW",
    "name": "Köln",
    "text": "Haushalt"
  }
slug: koln
---
Haushalt
