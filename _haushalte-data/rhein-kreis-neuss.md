---
_id: 58202990-e4e4-11e9-a0a8-b55fea34c7b7
state: NW
name: Rhein-Kreis Neuss
level: kommune
config: |-
  {
    "datapackage": "f780ac47be1b9b6f695c41094036ca5e:rkn",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "administrative_classification",
        "label": "administrative_classification"
      },
      {
        "datapackageHierarchy": "date",
        "url": "date",
        "label": "date"
      },
      {
        "datapackageHierarchy": "phase",
        "url": "phase",
        "label": "phase"
      },
      {
        "datapackageHierarchy": "direction",
        "url": "direction",
        "label": "direction"
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
      },
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
    "scale": [],
    "filters": {
      "Jahr": {
        "name": "jahr.jahr",
        "label_ref": "jahr.jahr",
        "ref": "jahr",
        "default": true,
        "defaultValue": "",
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
          },
          {
            "value": 2022,
            "label": 2022
          },
          {
            "value": 2023,
            "label": 2023
          }
        ]
      },
      "Produkt_Bereich": {
        "name": "produkt_bereich.produkt_bereich",
        "label_ref": "produkt_bereich.produktbereich_bezeichnung",
        "ref": "produkt_bereich",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Produktbereich_Bezeichnung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "10",
            "label": "Innere Verwaltung"
          },
          {
            "value": "100",
            "label": "Bauen und Wohnen"
          },
          {
            "value": "110",
            "label": "Ver- und Entsorgung"
          },
          {
            "value": "120",
            "label": "Verkehrsflächen und -anlagen, ÖPNV"
          },
          {
            "value": "130",
            "label": "Natur- und Landschaftspflege"
          },
          {
            "value": "140",
            "label": "Umweltschutz"
          },
          {
            "value": "150",
            "label": "Wirtschaft und Tourismus"
          },
          {
            "value": "160",
            "label": "Allgemeine Finanzwirtschaft"
          },
          {
            "value": "20",
            "label": "Sicherheit und Ordnung"
          },
          {
            "value": "30",
            "label": "Schulträgeraufgaben"
          },
          {
            "value": "40",
            "label": "Kultur und Wissenschaft"
          },
          {
            "value": "50",
            "label": "Soziale Leistungen"
          },
          {
            "value": "60",
            "label": "Kinder-, Jugend- und Familienhilfe"
          },
          {
            "value": "70",
            "label": "Gesundheitsdienste"
          },
          {
            "value": "80",
            "label": "Sportförderung"
          },
          {
            "value": "90",
            "label": "Räuml. Planung/Entwicklung, Geoinform."
          }
        ]
      },
      "Buddget_Richtung": {
        "name": "buddget_richtung.buddget_richtung",
        "label_ref": "buddget_richtung.buddget_richtung",
        "ref": "buddget_richtung",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Buddget_Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Aufwendung",
            "label": "Aufwendung"
          },
          {
            "value": "Ertrag",
            "label": "Ertrag"
          }
        ]
      },
      "Betrag_Typ": {
        "name": "betrag_typ.betrag_typ",
        "label_ref": "betrag_typ.betrag_typ",
        "ref": "betrag_typ",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Betrag_Typ",
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
    "name": "Rhein-Kreis Neuss",
    "text": "Haushalt"
  }
slug: rhein-kreis-neuss
---
Haushalt
