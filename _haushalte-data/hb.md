---
_id: 1eaee130-6595-11e8-a999-596b9e5044d6
state: HB
name: Bremen
level: kommune
config: |-
  {
    "datapackage": "c06abbc1b9141b233de84e14f5ab0a75:bremen-data-2016-2017",
    "datapackageURL": "https://s3.amazonaws.com/datastore.openspending.org/c06abbc1b9141b233de84e14f5ab0a75/bremen-data-2016-2017/final/datapackage.json",
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
          "decimal": ",",
          "thousand": ".",
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
            "value": "0101",
            "label": "Bürgerschaft"
          },
          {
            "value": "0201",
            "label": "Rechnungsprüfung"
          },
          {
            "value": "0301",
            "label": "Senat, Senatskanzlei"
          },
          {
            "value": "0501",
            "label": "Bundes- und Europaangelegenheiten"
          },
          {
            "value": "0590",
            "label": "Zentrale Dienste"
          },
          {
            "value": "0601",
            "label": "Datenschutz+Informationsfreiheit FHB"
          },
          {
            "value": "0701",
            "label": "Polizei"
          },
          {
            "value": "0702",
            "label": "Nichtpolizeiliche Gefahrenabwehr"
          },
          {
            "value": "0703",
            "label": "Öffentliche Ordnung"
          },
          {
            "value": "0704",
            "label": "Statistisches Landesamt"
          },
          {
            "value": "0790",
            "label": "Sonstiges Inneres"
          },
          {
            "value": "0801",
            "label": "Gleichberechtigung"
          },
          {
            "value": "0901",
            "label": "Angelegenh. des Staatsgerichtshofs"
          },
          {
            "value": "1101",
            "label": "Fachgerichtsbarkeit"
          },
          {
            "value": "1102",
            "label": "Ordentliche Gerichtsbarkeit"
          },
          {
            "value": "1103",
            "label": "Staatsanwaltschaft"
          },
          {
            "value": "1104",
            "label": "Justizvollzug"
          },
          {
            "value": "1190",
            "label": "Sonstiges Justiz"
          },
          {
            "value": "1201",
            "label": "Kommunale Sportangelegenheiten"
          },
          {
            "value": "1299",
            "label": "Eigengesellsch., SV, Stift. und AöR"
          },
          {
            "value": "2101",
            "label": "Öffentl. Schulen Bremen"
          },
          {
            "value": "2102",
            "label": "Öffentl. Schulen Bremerhaven"
          },
          {
            "value": "2103",
            "label": "Sonstige Bildungseinrichtungen"
          },
          {
            "value": "2104",
            "label": "Schul- und schülerbezog. Förderungen"
          },
          {
            "value": "2105",
            "label": "Schul- und schülerbezog. Förderungen"
          },
          {
            "value": "2106",
            "label": "Sonstiges Bildung"
          },
          {
            "value": "2107",
            "label": "Kinderförderung"
          },
          {
            "value": "2190",
            "label": "Zentrale Dienste"
          },
          {
            "value": "2201",
            "label": "Kulturelle Bildung"
          },
          {
            "value": "2202",
            "label": "Theater, Tanz und Musik"
          },
          {
            "value": "2203",
            "label": "Museen"
          },
          {
            "value": "2204",
            "label": "Bild.Kunst,Lit.,Medien,K.austausch"
          },
          {
            "value": "2290",
            "label": "Sonstiges (Allg. Kulturpflege)"
          },
          {
            "value": "2299",
            "label": "Eigengesellsch., SV, Stift. und AöR"
          },
          {
            "value": "2401",
            "label": "Hochschulen (Sonderhaushalte)"
          },
          {
            "value": "2402",
            "label": "Hochschulbauförderung"
          },
          {
            "value": "2403",
            "label": "Forschungsförderung"
          },
          {
            "value": "2404",
            "label": "Studierende"
          },
          {
            "value": "2490",
            "label": "Zentrale Dienste"
          },
          {
            "value": "3101",
            "label": "Beschäftigungspol. Aktionsprog."
          },
          {
            "value": "3102",
            "label": "Soziale Sicherheit"
          },
          {
            "value": "3190",
            "label": "Sonstiges Arbeit"
          },
          {
            "value": "4101",
            "label": "Hilfen f. junge Menschen und Familien"
          },
          {
            "value": "4102",
            "label": "Hilfen und Leistungen für Erwachsene"
          },
          {
            "value": "4103",
            "label": "Hilfen und Leistungen für Zuwanderer"
          },
          {
            "value": "4104",
            "label": "Hilfen und Leist. f. ältere Menschen"
          },
          {
            "value": "4105",
            "label": "Leist. z. Existenzsich. n. SGB XII/II"
          },
          {
            "value": "4106",
            "label": "Hilfe b.Krankheit u.a.bes.Lebenslagen"
          },
          {
            "value": "4107",
            "label": "Hilfen Sucht-, Drog.-, psych.Kranke"
          },
          {
            "value": "4108",
            "label": "Übergreif. Integration, Beauftragte"
          },
          {
            "value": "4190",
            "label": "Zentrale Dienste"
          },
          {
            "value": "5101",
            "label": "Gesundheitsförd., -schutz und -hilfe"
          },
          {
            "value": "5102",
            "label": "Veterinärwesen, Lebensmittelsicherh."
          },
          {
            "value": "5103",
            "label": "Sicherstell. der Krankenhausversorg."
          },
          {
            "value": "5104",
            "label": "Arbeitsschutz, Sicherheit, Eichwesen"
          },
          {
            "value": "5190",
            "label": "Zentrale Dienste"
          },
          {
            "value": "5199",
            "label": "Eigengesellsch., SV, Stift. und AöR"
          },
          {
            "value": "6801",
            "label": "Verkehr / ÖPNV"
          },
          {
            "value": "6802",
            "label": "Fachbereich Bau und Stadtentwicklung"
          },
          {
            "value": "6803",
            "label": "Fachbereich Umwelt"
          },
          {
            "value": "6804",
            "label": "Europa, Entwicklungszusammen. (bis 2011)"
          },
          {
            "value": "6890",
            "label": "Zentrale Dienste"
          },
          {
            "value": "7101",
            "label": "Wirtschaftsförderung"
          },
          {
            "value": "7102",
            "label": "Sektorale Wirtschaftsförderung (bis 2015)"
          },
          {
            "value": "7190",
            "label": "Zentrale Dienste"
          },
          {
            "value": "8101",
            "label": "Hafenwirtschaft / Hafeninfrastruktur"
          },
          {
            "value": "9101",
            "label": "Finanzsteuerung"
          },
          {
            "value": "9102",
            "label": "Haushalt und Vermögen"
          },
          {
            "value": "9103",
            "label": "Personal- und Verwaltungsmanagement"
          },
          {
            "value": "9190",
            "label": "Sonstiges Finanzen"
          },
          {
            "value": "9199",
            "label": "Eigengesellsch., SV, Stift. und AöR"
          },
          {
            "value": "9201",
            "label": "Allgemeine Finanzen - Sonstiges"
          },
          {
            "value": "9202",
            "label": "Zentral veranschl. Personalausgaben"
          },
          {
            "value": "9203",
            "label": "Zentral finanziertes Personal"
          },
          {
            "value": "9204",
            "label": "Immobilienwirt.u. -management (bis 2015)"
          },
          {
            "value": "9299",
            "label": "Rückl. zur Versorgungsvorsorge - AöR"
          },
          {
            "value": "9301",
            "label": "Zentrale Finanzen"
          },
          {
            "value": "9601",
            "label": "IT/E-Government-Budget der FHB"
          },
          {
            "value": "9799",
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
      "Betrag_Typ": {
        "name": "betrag_typ.betrag_typ",
        "label_ref": "betrag_typ.betrag_typ",
        "ref": "betrag_typ",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Ist/Plan/Soll",
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
        "label": "Land/Stadt",
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
    "level": "kommune",
    "state": "Bremen",
    "text": "Zur Verfügung gestellt werden die kameralen Haushaltsdaten der Freien Hansestadt Bremen, genauer des Landes und der Stadtgemeinde Bremen, für die Haushaltsjahre 2016 und 2017.\nDie Stadt Bremerhaven erstellt einen eigenen Haushaltsplan, der von der Stadtverordnetenversammlung beschlossen wird.\nWeitere Informationen zu den einzelnen Haushaltsplänen der Hansestadt Bremen finden sich im Transparenzportal Bremen unter https://www.transparenz.bremen.de/",
    "name": "Bremen"
  }
slug: hb
---
Zur Verfügung gestellt werden die kameralen Haushaltsdaten der Freien Hansestadt Bremen, genauer des Landes und der Stadtgemeinde Bremen, für die Haushaltsjahre 2016 und 2017.
Die Stadt Bremerhaven erstellt einen eigenen Haushaltsplan, der von der Stadtverordnetenversammlung beschlossen wird.
Weitere Informationen zu den einzelnen Haushaltsplänen der Hansestadt Bremen finden sich im Transparenzportal Bremen unter https://www.transparenz.bremen.de/
