---
_id: 0a5b7980-6a38-11e8-a999-596b9e5044d6
state: HB
name: HB
level: land
config: |-
  {
    "datapackage": "c06abbc1b9141b233de84e14f5ab0a75:bremen-data-2016-2017",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produktebene",
        "label": "Produktebene"
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
          "postfix": "€"
        },
        "label": "Betrag"
      }
    ],
    "scale": [
      {
        "label": "Total",
        "number": 1,
        "description": ""
      }
    ],
    "filters": {
      "ProduktbereichID": {
        "name": "produktbereichid.produktbereichid",
        "label_ref": "produktbereichid.produktbereich",
        "ref": "produktbereichid",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Produktbereich",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "01.01",
            "label": "Bürgerschaft"
          },
          {
            "value": "02.01",
            "label": "Rechnungsprüfung"
          },
          {
            "value": "03.01",
            "label": "Senat, Senatskanzlei"
          },
          {
            "value": "05.01",
            "label": "Bundes- und Europaangelegenheiten"
          },
          {
            "value": "05.90",
            "label": "Zentrale Dienste"
          },
          {
            "value": "06.01",
            "label": "Datenschutz+Informationsfreiheit FHB"
          },
          {
            "value": "07.01",
            "label": "Polizei"
          },
          {
            "value": "07.02",
            "label": "Nichtpolizeiliche Gefahrenabwehr"
          },
          {
            "value": "07.03",
            "label": "Öffentliche Ordnung"
          },
          {
            "value": "07.04",
            "label": "Statistisches Landesamt"
          },
          {
            "value": "07.90",
            "label": "Sonstiges Inneres"
          },
          {
            "value": "08.01",
            "label": "Gleichberechtigung"
          },
          {
            "value": "09.01",
            "label": "Angelegenh. des Staatsgerichtshofs"
          },
          {
            "value": "11.01",
            "label": "Fachgerichtsbarkeit"
          },
          {
            "value": "11.02",
            "label": "Ordentliche Gerichtsbarkeit"
          },
          {
            "value": "11.03",
            "label": "Staatsanwaltschaft"
          },
          {
            "value": "11.04",
            "label": "Justizvollzug"
          },
          {
            "value": "11.90",
            "label": "Sonstiges Justiz"
          },
          {
            "value": "12.01",
            "label": "Kommunale Sportangelegenheiten"
          },
          {
            "value": "12.99",
            "label": "Eigengesellsch., SV, Stift. und AöR"
          },
          {
            "value": "21.01",
            "label": "Öffentl. Schulen Bremen"
          },
          {
            "value": "21.02",
            "label": "Öffentl. Schulen Bremerhaven"
          },
          {
            "value": "21.03",
            "label": "Sonstige Bildungseinrichtungen"
          },
          {
            "value": "21.04",
            "label": "Schul- und schülerbezog. Förderungen"
          },
          {
            "value": "21.05",
            "label": "Schul- und schülerbezog. Förderungen"
          },
          {
            "value": "21.06",
            "label": "Sonstiges Bildung"
          },
          {
            "value": "21.07",
            "label": "Kinderförderung"
          },
          {
            "value": "21.90",
            "label": "Zentrale Dienste"
          },
          {
            "value": "22.01",
            "label": "Kulturelle Bildung"
          },
          {
            "value": "22.02",
            "label": "Theater, Tanz und Musik"
          },
          {
            "value": "22.03",
            "label": "Museen"
          },
          {
            "value": "22.04",
            "label": "Bild.Kunst,Lit.,Medien,K.austausch"
          },
          {
            "value": "22.90",
            "label": "Sonstiges (Allg. Kulturpflege)"
          },
          {
            "value": "22.99",
            "label": "Eigengesellsch., SV, Stift. und AöR"
          },
          {
            "value": "24.01",
            "label": "Hochschulen (Sonderhaushalte)"
          },
          {
            "value": "24.02",
            "label": "Hochschulbauförderung"
          },
          {
            "value": "24.03",
            "label": "Forschungsförderung"
          },
          {
            "value": "24.04",
            "label": "Studierende"
          },
          {
            "value": "24.90",
            "label": "Zentrale Dienste"
          },
          {
            "value": "31.01",
            "label": "Beschäftigungspol. Aktionsprog."
          },
          {
            "value": "31.02",
            "label": "Soziale Sicherheit"
          },
          {
            "value": "31.90",
            "label": "Sonstiges Arbeit"
          },
          {
            "value": "41.01",
            "label": "Hilfen f. junge Menschen und Familien"
          },
          {
            "value": "41.02",
            "label": "Hilfen und Leistungen für Erwachsene"
          },
          {
            "value": "41.03",
            "label": "Hilfen und Leistungen für Zuwanderer"
          },
          {
            "value": "41.04",
            "label": "Hilfen und Leist. f. ältere Menschen"
          },
          {
            "value": "41.05",
            "label": "Leist. z. Existenzsich. n. SGB XII/II"
          },
          {
            "value": "41.06",
            "label": "Hilfe b.Krankheit u.a.bes.Lebenslagen"
          },
          {
            "value": "41.07",
            "label": "Hilfen Sucht-, Drog.-, psych.Kranke"
          },
          {
            "value": "41.08",
            "label": "Übergreif. Integration, Beauftragte"
          },
          {
            "value": "41.90",
            "label": "Zentrale Dienste"
          },
          {
            "value": "51.01",
            "label": "Gesundheitsförd., -schutz und -hilfe"
          },
          {
            "value": "51.02",
            "label": "Veterinärwesen, Lebensmittelsicherh."
          },
          {
            "value": "51.03",
            "label": "Sicherstell. der Krankenhausversorg."
          },
          {
            "value": "51.04",
            "label": "Arbeitsschutz, Sicherheit, Eichwesen"
          },
          {
            "value": "51.90",
            "label": "Zentrale Dienste"
          },
          {
            "value": "51.99",
            "label": "Eigengesellsch., SV, Stift. und AöR"
          },
          {
            "value": "68.01",
            "label": "Verkehr / ÖPNV"
          },
          {
            "value": "68.02",
            "label": "Fachbereich Bau und Stadtentwicklung"
          },
          {
            "value": "68.03",
            "label": "Fachbereich Umwelt"
          },
          {
            "value": "68.04",
            "label": "Europa, Entwicklungszusammen."
          },
          {
            "value": "68.90",
            "label": "Zentrale Dienste"
          },
          {
            "value": "71.01",
            "label": "Wirtschaftsförderung"
          },
          {
            "value": "71.02",
            "label": "Sektorale Wirtschaftsförderung (bis 2015)"
          },
          {
            "value": "71.90",
            "label": "Zentrale Dienste"
          },
          {
            "value": "81.01",
            "label": "Hafenwirtschaft / Hafeninfrastruktur"
          },
          {
            "value": "91.01",
            "label": "Finanzsteuerung"
          },
          {
            "value": "91.02",
            "label": "Haushalt und Vermögen"
          },
          {
            "value": "91.03",
            "label": "Personal- und Verwaltungsmanagement"
          },
          {
            "value": "91.90",
            "label": "Sonstiges Finanzen"
          },
          {
            "value": "91.99",
            "label": "Eigengesellsch., SV, Stift. und AöR"
          },
          {
            "value": "92.01",
            "label": "Allgemeine Finanzen - Sonstiges"
          },
          {
            "value": "92.02",
            "label": "Zentral veranschl. Personalausgaben"
          },
          {
            "value": "92.03",
            "label": "Zentral finanziertes Personal"
          },
          {
            "value": "92.04",
            "label": "Immobilienwirt. u. -management"
          },
          {
            "value": "92.99",
            "label": "Rückl. zur Versorgungsvorsorge - AöR"
          },
          {
            "value": "93.01",
            "label": "Zentrale Finanzen"
          },
          {
            "value": "96.01",
            "label": "IT/E-Government-Budget der FHB"
          },
          {
            "value": "97.99",
            "label": "Eigengesellsch., SV, Stift. und AöR"
          }
        ]
      },
      "ProduktplanID": {
        "name": "produktplanid.produktplanid",
        "label_ref": "produktplanid.produktplan",
        "ref": "produktplanid",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Produktplan",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "01",
            "label": "Bürgerschaft"
          },
          {
            "value": "02",
            "label": "Rechnungshof"
          },
          {
            "value": "03",
            "label": "Senat, Senatskanzlei"
          },
          {
            "value": "05",
            "label": "Bundes- und Europaangelegenheiten"
          },
          {
            "value": "06",
            "label": "Datenschutz und Informationsfreiheit"
          },
          {
            "value": "07",
            "label": "Inneres"
          },
          {
            "value": "08",
            "label": "Gleichberechtigung der Frau"
          },
          {
            "value": "09",
            "label": "Staatsgerichtshof"
          },
          {
            "value": "11",
            "label": "Justiz"
          },
          {
            "value": "12",
            "label": "Sport"
          },
          {
            "value": "21",
            "label": "Kinder und Bildung"
          },
          {
            "value": "22",
            "label": "Kultur"
          },
          {
            "value": "24",
            "label": "Hochschulen und Forschung"
          },
          {
            "value": "31",
            "label": "Arbeit"
          },
          {
            "value": "41",
            "label": "Jugend und Soziales"
          },
          {
            "value": "51",
            "label": "Gesundheit und Verbraucherschutz"
          },
          {
            "value": "68",
            "label": "Umwelt, Bau und Verkehr"
          },
          {
            "value": "71",
            "label": "Wirtschaft"
          },
          {
            "value": "81",
            "label": "Häfen"
          },
          {
            "value": "91",
            "label": "Finanzen / Personal"
          },
          {
            "value": "92",
            "label": "Allgemeine Finanzen"
          },
          {
            "value": "93",
            "label": "Zentrale Finanzen"
          },
          {
            "value": "96",
            "label": "IT-Budget der FHB"
          },
          {
            "value": "97",
            "label": "Immobilienwirtschaft und -management"
          }
        ]
      },
      "Budget Richtung": {
        "name": "budget_richtung.budget_richtung",
        "label_ref": "budget_richtung.budget_richtung",
        "ref": "budget_richtung",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Budget Richtung",
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
          },
          {
            "value": "Soll",
            "label": "Soll"
          }
        ]
      },
      "Haushalt": {
        "name": "haushalt.haushalt",
        "label_ref": "haushalt.haushalt",
        "ref": "haushalt",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Haushalt",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Land",
            "label": "Land"
          },
          {
            "value": "Stadt",
            "label": "Stadt"
          }
        ]
      },
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
            "value": 2016,
            "label": 2016
          },
          {
            "value": 2017,
            "label": 2017
          }
        ]
      }
    },
    "level": "land",
    "state": "HB",
    "text": "Zur Verfügung gestellt werden die kameralen Haushaltsdaten der Freien Hansestadt Bremen, genauer des Landes und der Stadtgemeinde Bremen, für die Haushaltsjahre 2016 und 2017.\nDie Stadt Bremerhaven erstellt einen eigenen Haushaltsplan, der von der Stadtverordnetenversammlung beschlossen wird.\nWeitere Informationen zu den einzelnen Haushaltsplänen der Hansestadt Bremen finden sich im Transparenzportal Bremen unter https://www.transparenz.bremen.de/\n",
    "name": "HB"
  }
slug: hb
---
Zur Verfügung gestellt werden die kameralen Haushaltsdaten der Freien Hansestadt Bremen, genauer des Landes und der Stadtgemeinde Bremen, für die Haushaltsjahre 2016 und 2017.
Die Stadt Bremerhaven erstellt einen eigenen Haushaltsplan, der von der Stadtverordnetenversammlung beschlossen wird.
Weitere Informationen zu den einzelnen Haushaltsplänen der Hansestadt Bremen finden sich im Transparenzportal Bremen unter https://www.transparenz.bremen.de/
