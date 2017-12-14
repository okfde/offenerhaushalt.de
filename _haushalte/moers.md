---
_id: 4c268390-e0be-11e7-9d16-ed20949b8d27
state: NW
name: Moers
text: Das ist der Haushalt für Moers
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:moers-all",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "einzelplane",
        "label": "Einzelpläne"
      },
      {
        "datapackageHierarchy": "economic_classification",
        "url": "institutionen",
        "label": "Institutionen"
      }
    ],
    "value": [
      {
        "field": "Betrag.sum",
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
        "label": "Pro Einwohner (104.259 in 2015)",
        "number": "104529",
        "description": "p. E. "
      },
      {
        "label": "Pro Arbeitnehmer (34.356 in 2016)",
        "number": "34.356",
        "description": "p. A."
      },
      {
        "label": "Pro 6-18 Jährige (11.014 in 2015)",
        "number": "11014",
        "description": "p. J."
      }
    ],
    "filters": {
      "Betrag_Typ": {
        "name": "value_kind_2.Betrag_Typ",
        "label_ref": "value_kind_2.Betrag_Typ",
        "ref": "value_kind_2",
        "type": "string",
        "default": true,
        "defaultValue": "Plan",
        "defaultLabel": "All",
        "label": "HH Art",
        "values": [
          {
            "value": "Ist",
            "label": "Ist"
          },
          {
            "value": "Plan",
            "label": "Plan"
          }
        ]
      },
      "HH Art": {
        "name": "direction_2.HH_Art",
        "label_ref": "direction_2.HH_Art",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Aufwendungen",
        "defaultLabel": "All",
        "label": "Budget Richtung",
        "values": [
          {
            "value": "Aufwendungen",
            "label": "Aufwendungen"
          },
          {
            "value": "Erträge",
            "label": "Erträge"
          }
        ]
      },
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
          }
        ]
      }
    },
    "level": "kommune",
    "state": "NW",
    "name": "Moers",
    "text": "Das ist der Haushalt für Moers"
  }
date: '2017-12-14T11:02:38.643Z'
slug: moers
---
# Haushalt der Stadt Moers von 2015 - 2021 

Der Haushalt lässt sich nach Jahren sowie Erträgen und Aufwendungen filtern. Außerdem wird nach Ist-Daten und Plan-Daten unterschieden. Dabei sind Ist-Daten die endgültigen Beträge eines abgeschlossenen Haushaltsjahrs, diese liegen für 2015 und 2016 vor.

Die Plan-Daten werden bei Entwurf und Abschluss eines Haushalts jeweils für die nächsten 3 Jahre festgelegt. Für diese Visualisierung verwenden wir die aktuellsten Plandaten, das heißt die Daten für 2017 sind aus dem Haushaltsentwurf aus 2017 und die Daten für 2018, 2019, 2020 und 2021 entstammen dem Haushaltsplanentwurf 2018.** 


Hier folgt ein Glossar der Haushaltsbegriffe, welches im Rahmen des Open Data Schulprojektes der Stadt Moers, des Gymnasiums Adolfinum und der Hochschule entstanden ist. Mehr dazu auf [DatenmachenSchule.de](https://datenmachenschule.de/). 

**Ertrag**
Bewertetes Ressourcenaufkommen (erfolgswirksame Wertezuflüsse)
 
**Ordentliche Erträge**
Unter der Wertgröße „Ordentliche Erträge“ sind die Erträge nach §2 Abs.1 Nr.1 bis 9 GemHVO (Ergebnisplan) bzw. §38 Abs.1 S.3 GemHVO (Ergebnisrechnung) zu erfassen. „Summierung“ der Erträge: 

* Steuern und ähnliche Abgaben
* Zuwendungen und allgemeine Umlagen
* Sonstige Transfererträge
* Öffentlich-rechtliche Leistungsentgelte
* Privatrechtliche Leistungsentgelte
* Kostenerstattungen und Kostenumlagen
* Sonstige ordentliche Erträge
* Aktivierte Eigenleistungen
* Bestandsveränderungen
 
**Ordentliche Aufwendungen** 
Unter der Wertgröße „Ordentliche Aufwendungen“ sind die Aufwendungen nach §2 Abs.1 Nr.10 bis 15 GemHVO gem. (Ergebnisplan) bzw. §38 Abs.1 S.3 GemHVO (Ergebnisrechnung) zu erfassen. „Summierung“ der Aufwendungen: 
* Personalaufwendungen
* Versorgungsaufwendungen
* Aufwendungen für Sach- und Dienstleistungen
* Bilanzielle Abschreibungen
* Transferaufwendungen
* Sonstige ordentliche Aufwendungen
  
**Transferaufwendungen**: Leistungen der Gemeinde an private Haushalte (Sozialtransfers) bzw. an Dritte. Bei typischen Transfers an natürliche Personen (Sozialhilfe) erfolgen diese ohne den Anspruch auf eine Gegenleistung.
 
**Personalaufwendungen**: Aufwendungen für die Vergütung von Beamten und tariflich Beschäftigten (Stammkräfte und weitere Kräfte, die auf Grund von Arbeitsverträgen beschäftigt werden). Hierzu gehört u.a. auch die Zuführung zu Pensionsrückstellungen für die Beschäftigten, die nicht zahlungsrelevant ist.
 
**Sonstige ordentliche Aufwendungen**: Aufwendungen, die nicht den anderen Aufwandspositionen zugeordnet werden.
 
**Zuwendungen und allgemeine Umlagen**: Neben den Zuweisungen, Zuschüssen und allgemeinen Umlagen werden hier auch Erträge aus der Auflösung von Sonderposten zugeordnet. Letztere sind nicht zahlungsrelevant.
 
**Sonstige Transfererträge**: Leistungen der Gemeinde an Dritte, z.B. Sozialhilfeleistungen, die die Gemeinde erstattet bekommt.
 
**Öffentlich-rechtliche Leistungsentgelte**: Hierbei handelt es sich im Wesentlichen um Verwaltungs- und Benutzungsgebühren sowie Beiträge und ähnliche Entgelte.
 
**Privatrechtliche Leistungsentgelte**: Erträge für von der Gemeinde erbrachte Leistungen, denen ein privates Rechtsverhältnis zu Grunde liegt, beispielsweise Mieten und Pachten.
 
**Kostenerstattungen und Kostenumlagen**: Erträge aus der Erbringung von Gütern und Dienstleistungen für eine andere Stelle, die diese vollständig oder anteilig erstattet.
 
**Sonstige ordentliche Erträge**: Erträge, die nicht speziell unter den anderen Ertragspositionen erfasst werden, wie zum Beispiel Konzessionsabgaben der Energie Wasser Niederrhein GmbH.
 
**Aktivierte Eigenleistungen**: Die Stadt Moers setzt im Tiefbaubereich, in der Grünflächenunterhaltung, im Bereich Abwasser und bei den Spielplätzen für vermögenswirksame Maßnahmen eigenes Personal z.B. für Planungsleistungen ein. Bei diesen Leistungen handelt es sich um Herstellungskosten, die gemeinsam mit dem gesamten Vermögensgegenstand zu aktivieren, d.h. in die Bilanz aufzunehmen und über die Nutzungsdauer abzuschreiben sind. Über die Ertragsposition „aktivierte Eigenleistungen“ wird im Ergebnisplan der Ausgleich für die aktivierungspflichtigen Personal- und Sachaufwendungen erreicht.
  
**Finanzerträge**: Bei den Finanzerträgen handelt es sich um Gewinnanteile und Zinserträge. Die Stadt Moers hat Gewinnanteile an der ENNI Stadt und Service AöR, der Grundstücksgesellschaft Königlicher Hof und der Wohnungsbau Stadt Moers.
*AöR: Anstalt des öffentlichen Rechts

**Versorgungsaufwendungen**: Hierzu gehören alle anfallenden Versorgungsbezüge, auch für Angehörige des ausgeschiedenen Personals, soweit die Aufwendungen die nicht bereits durch Rückstellungen berücksichtigt wurden.
 
**Aufwendungen für Sach- und Dienstleistungen**: Aufwendungen, die mit dem gemeindlichen Verwaltungshandeln oder Verwaltungserträgen wirtschaftlich zusammenhängen. Die Aufwendungen für Sach- und Dienstleistungen umfassen u.a. Aufwendungen für Energie, Wasser, Abwasser, Aufwendungen für die Unterhaltung (inkl. Reparatur, Fremdinstandhaltung) und die Bewirtschaftung des Anlagevermögens, aber auch Kostenerstattungen an Dritte.
 
**Bilanzielle Abschreibungen**: Aufwendungen für den Ressourcenverbrauch, der durch die Abnutzung des Anlagevermögens entsteht. Sie sind nicht zahlungsrelevant.
 
**Zinsen und ähnliche Aufwendungen**: Hier sind im Wesentlichen Zinsaufwendungen und Kreditbeschaffungskosten abzubilden.
 
**MMS**: Moerser Musikschule
 
**JEKI**: Jedem Kind ein Instrument Projekt

**Moers Kultur GmbH**: Durchführung des Moers Festival, Mitveranstaltung des Comedy Arts Festivals und des Parkfestes, Betrieb eines Theaters und eines Kinder- und Jugendtheaters einschließlich der Öffnung zu anderen Kunstgattungen mit dem Ziel, durch ein engagiertes gesellschaftliches und künstlerisches Profil für die Stadt Moers zu entwickeln und darüber hinaus zu wirken.
 
**Serviceleistungen FD 7.**: 
Auskünfte aus der raumbezogenen Datenbasis des Geo-Informationssystems (GIS) für die Verwaltung und Dritte und weitere Serviceleistungen: -Hausnummernvergabe, -Benennungen von Straßen, Wegen u. Plätzen, -stellung von thematischen Karten und Plänen, -Bescheinigungen, Verzeichnisse, Ermittlungen, Prüfungen, Berechnungen -Großformatdrucke, Großformatkopien, Farbkopien, Scannen, Fotos -

