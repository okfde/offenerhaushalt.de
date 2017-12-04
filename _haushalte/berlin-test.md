---
_id: a7724f30-d935-11e7-be94-057620f1b5ea
state: BE
name: Berlin-Test
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
      "Funktion": {
        "name": "functional_classification_4.Funktion",
        "label_ref": "functional_classification_4.Funktionsbezeichnung",
        "ref": "functional_classification_4",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Funktionsbezeichnung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "11",
            "label": "Politische Führung"
          },
          {
            "value": "111",
            "label": "Unterrichtsverwaltung"
          },
          {
            "value": "112",
            "label": "Öffentliche Grundschulen"
          },
          {
            "value": "113",
            "label": "Private Grundschulen"
          },
          {
            "value": "114",
            "label": "Öffentliche weiterführende allgemeinbildende Schulen (ohne Sonderschulen/Förderschulen)"
          },
          {
            "value": "115",
            "label": "Private weiterführende allgemeinbildende Schulen (ohne Sonderschulen/Förderschulen)"
          },
          {
            "value": "118",
            "label": "Versorgung einschließlich Beihilfen für Versorgungsempfängerinnen und Versorgungsempfänger im Bereich der Schulen"
          },
          {
            "value": "12",
            "label": "Innere Verwaltung"
          },
          {
            "value": "124",
            "label": "Öffentliche Sonderschulen/Förderschulen des allgemeinbildenden Bereichs"
          },
          {
            "value": "125",
            "label": "Private Sonderschulen/Förderschulen des allgemeinbildenden Bereichs"
          },
          {
            "value": "127",
            "label": "Öffentliche berufliche Schulen"
          },
          {
            "value": "128",
            "label": "Private berufliche Schulen"
          },
          {
            "value": "129",
            "label": "Sonstige schulische Aufgaben"
          },
          {
            "value": "13",
            "label": "Informationswesen"
          },
          {
            "value": "132",
            "label": "Hochschulkliniken"
          },
          {
            "value": "133",
            "label": "Öffentliche Hochschulen und Berufsakademien"
          },
          {
            "value": "134",
            "label": "Private Hochschulen und Berufsakademien"
          },
          {
            "value": "137",
            "label": "Deutsche Forschungsgemeinschaft"
          },
          {
            "value": "139",
            "label": "Sonstige Hochschulaufgaben"
          },
          {
            "value": "141",
            "label": "Förderung für Schülerinnen und Schüler"
          },
          {
            "value": "142",
            "label": "Förderung für Studierende und wissenschaftlichen Nachwuchs"
          },
          {
            "value": "144",
            "label": "Förderung für Weiterbildungsteilnehmende"
          },
          {
            "value": "145",
            "label": "Schülerbeförderung"
          },
          {
            "value": "152",
            "label": "Volkshochschulen"
          },
          {
            "value": "153",
            "label": "Sonstige Weiterbildung (ohne Förderung für Teilnehmende)"
          },
          {
            "value": "154",
            "label": "Ausbildung der Lehrkräfte"
          },
          {
            "value": "155",
            "label": "Fort- und Weiterbildung der Lehrkräfte"
          },
          {
            "value": "16",
            "label": "Hochbauverwaltung"
          },
          {
            "value": "162",
            "label": "Wissenschaftliche Bibliotheken, Archive, Fachinformationszentren"
          },
          {
            "value": "164",
            "label": "Gemeinsame Forschungsförderung von Bund und Ländern (ohne Deutsche Forschungsgemeinschaft)"
          },
          {
            "value": "165",
            "label": "Forschung und experimentelle Entwicklung"
          },
          {
            "value": "18",
            "label": "Versorgung einschließlich Beihilfen für Versorgungsempfängerinnen und Versorgungsempfänger, soweit nicht unter Funktion 038, 039, 048, 058, 068, 118 und 138"
          },
          {
            "value": "181",
            "label": "Theater"
          },
          {
            "value": "182",
            "label": "Musikpflege"
          },
          {
            "value": "183",
            "label": "Museen, Sammlungen, Ausstellungen"
          },
          {
            "value": "184",
            "label": "Zoologische und botanische Gärten"
          },
          {
            "value": "185",
            "label": "Musikschulen"
          },
          {
            "value": "186",
            "label": "Nichtwissenschaftliche Bibliotheken"
          },
          {
            "value": "187",
            "label": "Sonstige Kulturpflege"
          },
          {
            "value": "188",
            "label": "Verwaltung für kulturelle Angelegenheiten"
          },
          {
            "value": "195",
            "label": "Denkmalschutz und -pflege"
          },
          {
            "value": "199",
            "label": "Kirchliche Angelegenheiten"
          },
          {
            "value": "219",
            "label": "Sonstige Verwaltung für soziale Angelegenheiten"
          },
          {
            "value": "227",
            "label": "Pflegeversicherung"
          },
          {
            "value": "229",
            "label": "Sonstige Sozialversicherungen"
          },
          {
            "value": "23",
            "label": "Wirtschaftliche Zusammenarbeit und Entwicklung"
          },
          {
            "value": "233",
            "label": "Wohngeld"
          },
          {
            "value": "235",
            "label": "Soziale Einrichtungen"
          },
          {
            "value": "236",
            "label": "Förderung der Wohlfahrtspflege"
          },
          {
            "value": "237",
            "label": "Leistungen nach dem Unterhaltsvorschussgesetz"
          },
          {
            "value": "24",
            "label": "Auslandsschulwesen und kulturelle Angelegenheiten im Ausland"
          },
          {
            "value": "241",
            "label": "Kriegsopferversorgung und -fürsorge und gleichartige Leistungen"
          },
          {
            "value": "244",
            "label": "Wiedergutmachung"
          },
          {
            "value": "246",
            "label": "Vertriebene und Spätaussiedlerinnen und Spätaussiedler"
          },
          {
            "value": "249",
            "label": "Sonstige Leistungen für Folgen von Krieg und politischen Ereignissen"
          },
          {
            "value": "251",
            "label": "Arbeitslosengeld II nach dem SGB II"
          },
          {
            "value": "252",
            "label": "Leistungen für Unterkunft und Heizung nach dem SGB II"
          },
          {
            "value": "253",
            "label": "Aktive Arbeitsmarktpolitik"
          },
          {
            "value": "259",
            "label": "Sonstige Leistungen der Grundsicherung für Arbeitssuchende nach dem SGB II"
          },
          {
            "value": "261",
            "label": "Jugendarbeit und Jugendverbandsarbeit"
          },
          {
            "value": "262",
            "label": "Jugendsozialarbeit"
          },
          {
            "value": "263",
            "label": "Erzieherischer Kinder- und Jugendschutz, Förderung der Erziehung in der Familie"
          },
          {
            "value": "265",
            "label": "Hilfen zur Erziehung und Eingliederungshilfen"
          },
          {
            "value": "266",
            "label": "Weitere Aufgaben der Jugendhilfe"
          },
          {
            "value": "270",
            "label": "Kindertagesbetreuung nach dem SGB VIII"
          },
          {
            "value": "281",
            "label": "Hilfe zum Lebensunterhalt nach dem SGB XII"
          },
          {
            "value": "282",
            "label": "Grundsicherung im Alter und bei Erwerbsminderung nach dem SGB XII"
          },
          {
            "value": "283",
            "label": "Eingliederungshilfe nach dem SGB XII"
          },
          {
            "value": "284",
            "label": "Hilfe zur Pflege nach dem SGB XII"
          },
          {
            "value": "285",
            "label": "Weitere Leistungen nach dem SGB XII"
          },
          {
            "value": "287",
            "label": "Leistungen nach dem Asylbewerberleistungsgesetz"
          },
          {
            "value": "29",
            "label": "Sonstige auswärtige Angelegenheiten"
          },
          {
            "value": "290",
            "label": "Sonstige soziale Angelegenheiten"
          },
          {
            "value": "311",
            "label": "Gesundheitsverwaltung"
          },
          {
            "value": "312",
            "label": "Krankenhäuser und Heilstätten"
          },
          {
            "value": "313",
            "label": "Arbeitsschutz"
          },
          {
            "value": "314",
            "label": "Gesundheitsschutz"
          },
          {
            "value": "321",
            "label": "Park- und Gartenanlagen"
          },
          {
            "value": "322",
            "label": "Sport"
          },
          {
            "value": "331",
            "label": "Umwelt- und Naturschutzverwaltung"
          },
          {
            "value": "332",
            "label": "Maßnahmen des Umwelt- und Naturschutzes"
          },
          {
            "value": "411",
            "label": "Förderung des Wohnungsbaues"
          },
          {
            "value": "419",
            "label": "Sonstiges Wohnungswesen"
          },
          {
            "value": "42",
            "label": "Polizei"
          },
          {
            "value": "421",
            "label": "Geoinformation"
          },
          {
            "value": "422",
            "label": "Raumordnung und Landesplanung"
          },
          {
            "value": "423",
            "label": "Städtebauförderung"
          },
          {
            "value": "43",
            "label": "Öffentliche Ordnung"
          },
          {
            "value": "430",
            "label": "Kommunale Gemeinschaftsdienste (ohne Straßenbeleuchtung, Abwasserentsorgung und Abfallwirtschaft)"
          },
          {
            "value": "44",
            "label": "Brandschutz"
          },
          {
            "value": "45",
            "label": "Bevölkerungs- und Katastrophenschutz"
          },
          {
            "value": "47",
            "label": "Schutz der Verfassung"
          },
          {
            "value": "48",
            "label": "Versorgung einschließlich Beihilfen für Versorgungsempfängerinnen und Versorgungsempfänger im Bereich der öffentlichen Sicherheit und Ordnung"
          },
          {
            "value": "51",
            "label": "Gerichte und Staatsanwaltschaften"
          },
          {
            "value": "511",
            "label": "Verwaltung für Ernährung und Landwirtschaft"
          },
          {
            "value": "512",
            "label": "Forst-, Jagd- und Fischereiverwaltung"
          },
          {
            "value": "523",
            "label": "Landwirtschaftliche Produktion, Tiergesundheit und Ernährung"
          },
          {
            "value": "532",
            "label": "Fischerei"
          },
          {
            "value": "56",
            "label": "Justizvollzugsanstalten"
          },
          {
            "value": "58",
            "label": "Versorgung einschließlich Beihilfen für Versorgungsempfängerinnen und Versorgungsempfänger im Bereich des Rechtsschutzes"
          }
        ]
      }
    }
  }
slug: berlin-test
---
Just a test
