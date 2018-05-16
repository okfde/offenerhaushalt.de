---
_id: c5c3cdb0-58ec-11e8-a999-596b9e5044d6
state: HB
name: HB
level: land
config: |-
  {
    "datapackage": "c06abbc1b9141b233de84e14f5ab0a75:bremen-test",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "administrative_classification",
        "label": "administrative_classification"
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
          "postfix": "€"
        },
        "label": "Betrag"
      }
    ],
    "scale": [],
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
            "label": "Bürgerschaft (L)"
          },
          {
            "value": "02.01",
            "label": "Rechnungsprüfung (L)"
          },
          {
            "value": "03.01",
            "label": "Senat, Senatskanzlei (S)"
          },
          {
            "value": "05.01",
            "label": "Bundes- und Europaangelegenheiten (L)"
          },
          {
            "value": "05.90",
            "label": "Zentrale Dienste (L)"
          },
          {
            "value": "06.01",
            "label": "Datenschutz+Informationsfreiheit FHB (L)"
          },
          {
            "value": "07.01",
            "label": "Polizei (L)"
          },
          {
            "value": "07.02",
            "label": "Nichtpolizeiliche Gefahrenabwehr (S)"
          },
          {
            "value": "07.03",
            "label": "Öffentliche Ordnung (S)"
          },
          {
            "value": "07.04",
            "label": "Statistisches Landesamt (L)"
          },
          {
            "value": "07.90",
            "label": "Sonstiges Inneres (L)"
          },
          {
            "value": "08.01",
            "label": "Gleichberechtigung (L)"
          },
          {
            "value": "09.01",
            "label": "Angelegenh. des Staatsgerichtshofs (L)"
          },
          {
            "value": "11.01",
            "label": "Fachgerichtsbarkeit (L)"
          },
          {
            "value": "11.02",
            "label": "Ordentliche Gerichtsbarkeit (L)"
          },
          {
            "value": "11.03",
            "label": "Staatsanwaltschaft (L)"
          },
          {
            "value": "11.04",
            "label": "Justizvollzug (L)"
          },
          {
            "value": "11.90",
            "label": "Sonstiges Justiz (L)"
          },
          {
            "value": "12.01",
            "label": "Kommunale Sportangelegenheiten (S)"
          },
          {
            "value": "12.99",
            "label": "Eigengesellsch., SV, Stift. und AöR (S)"
          },
          {
            "value": "21.01",
            "label": "Öffentl. Schulen Bremen (S)"
          },
          {
            "value": "21.02",
            "label": "Öffentl. Schulen Bremerhaven (L)"
          },
          {
            "value": "21.03",
            "label": "Sonstige Bildungseinrichtungen (L)"
          },
          {
            "value": "21.04",
            "label": "Schul- und schülerbezog. Förderungen (L)"
          },
          {
            "value": "21.05",
            "label": "Schul- und schülerbezog. Förderungen (S)"
          },
          {
            "value": "21.06",
            "label": "Sonstiges Bildung (L)"
          },
          {
            "value": "21.07",
            "label": "Kinderförderung (S)"
          },
          {
            "value": "21.90",
            "label": "Zentrale Dienste (L)"
          },
          {
            "value": "22.01",
            "label": "Kulturelle Bildung (S)"
          },
          {
            "value": "22.02",
            "label": "Theater, Tanz und Musik (S)"
          },
          {
            "value": "22.03",
            "label": "Museen (S)"
          },
          {
            "value": "22.04",
            "label": "Bild.Kunst,Lit.,Medien,K.austausch (S)"
          },
          {
            "value": "22.90",
            "label": "Sonstiges (Allg. Kulturpflege) (L)"
          },
          {
            "value": "22.99",
            "label": "Eigengesellsch., SV, Stift. und AöR (S)"
          },
          {
            "value": "24.01",
            "label": "Hochschulen (Sonderhaushalte) (L)"
          },
          {
            "value": "24.02",
            "label": "Hochschulbauförderung (L)"
          },
          {
            "value": "24.03",
            "label": "Forschungsförderung (L)"
          },
          {
            "value": "24.04",
            "label": "Studierende (L)"
          },
          {
            "value": "24.90",
            "label": "Zentrale Dienste (L)"
          },
          {
            "value": "31.01",
            "label": "Beschäftigungspol. Aktionsprog. (L)"
          },
          {
            "value": "31,02",
            "label": "Soziale Sicherheit (L)"
          },
          {
            "value": "31.02",
            "label": "Soziale Sicherheit (L)"
          },
          {
            "value": "31.90",
            "label": "Sonstiges Arbeit"
          },
          {
            "value": "41.01",
            "label": "Hilfen f. junge Menschen und Familien(S)"
          },
          {
            "value": "41.02",
            "label": "Hilfen und Leistungen für Erwachsene (S)"
          },
          {
            "value": "41.03",
            "label": "Hilfen und Leistungen für Zuwanderer (S)"
          },
          {
            "value": "41.04",
            "label": "Hilfen und Leist. f. ältere Menschen (S)"
          },
          {
            "value": "41.05",
            "label": "Leist. z. Existenzsich. n. SGB XII/II(S)"
          },
          {
            "value": "41.06",
            "label": "Hilfe b.Krankheit u.a.bes.Lebenslagen(S)"
          },
          {
            "value": "41.07",
            "label": "Hilfen Sucht-, Drog.-, psych.Kranke (S)"
          },
          {
            "value": "41.08",
            "label": "Übergreif. Integration, Beauftragte (S)"
          },
          {
            "value": "41.90",
            "label": "Zentrale Dienste (S)"
          },
          {
            "value": "51.01",
            "label": "Gesundheitsförd., -schutz und -hilfe (S)"
          },
          {
            "value": "51.02",
            "label": "Veterinärwesen, Lebensmittelsicherh. (L)"
          },
          {
            "value": "51.03",
            "label": "Sicherstell. der Krankenhausversorg. (L)"
          },
          {
            "value": "51.04",
            "label": "Arbeitsschutz, Sicherheit, Eichwesen (L)"
          },
          {
            "value": "51.90",
            "label": "Zentrale Dienste (L)"
          },
          {
            "value": "51.99",
            "label": "Eigengesellsch., SV, Stift. und AöR (S)"
          },
          {
            "value": "68.01",
            "label": "Verkehr / ÖPNV (L)"
          },
          {
            "value": "68.02",
            "label": "Fachbereich Bau und Stadtentwicklung (L)"
          },
          {
            "value": "68.03",
            "label": "Fachbereich Umwelt (L)"
          },
          {
            "value": "68.04",
            "label": "Europa, Entwicklungszusammen. (bis 2011)"
          },
          {
            "value": "68.90",
            "label": "Zentrale Dienste (L)"
          },
          {
            "value": "71.01",
            "label": "Wirtschaftsförderung (L)"
          },
          {
            "value": "71.02",
            "label": "Sektorale Wirtschaftsförderung (bis 2015)"
          },
          {
            "value": "71.90",
            "label": "Zentrale Dienste (L)"
          },
          {
            "value": "81.01",
            "label": "Hafenwirtschaft / Hafeninfrastruktur (L)"
          },
          {
            "value": "91.01",
            "label": "Finanzsteuerung (L)"
          },
          {
            "value": "91.02",
            "label": "Haushalt und Vermögen (L)"
          },
          {
            "value": "91.03",
            "label": "Personal- und Verwaltungsmanagement (L)"
          },
          {
            "value": "91.90",
            "label": "Sonstiges Finanzen (L)"
          },
          {
            "value": "91.99",
            "label": "Eigengesellsch., SV, Stift. und AöR (L)"
          },
          {
            "value": "92.01",
            "label": "Allgemeine Finanzen - Sonstiges (L)"
          },
          {
            "value": "92.02",
            "label": "Zentral veranschl. Personalausgaben (L)"
          },
          {
            "value": "92.03",
            "label": "Zentral finanziertes Personal (L)"
          },
          {
            "value": "92.04",
            "label": "Immobilienwirt.u. -management (bis 2015)"
          },
          {
            "value": "92.99",
            "label": "Rückl. zur Versorgungsvorsorge - AöR (S)"
          },
          {
            "value": "93.01",
            "label": "Zentrale Finanzen (L)"
          },
          {
            "value": "96.01",
            "label": "IT/E-Government-Budget der FHB (L)"
          },
          {
            "value": "97.99",
            "label": "Eigengesellsch., SV, Stift. und AöR (S)"
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
      "Budget_Richtung": {
        "name": "budget_richtung.budget_richtung",
        "label_ref": "budget_richtung.budget_richtung",
        "ref": "budget_richtung",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Budget_Richtung",
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
      "L/S": {
        "name": "l_s.l_s",
        "label_ref": "l_s.l_s",
        "ref": "l_s",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "L/S",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "0",
            "label": "0"
          },
          {
            "value": "3",
            "label": "3"
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
