---
name: Stadt Moers
real_name: Moers-new
slug: Moers-new
url: /haushalt/Moers-new
tagline: "Kommunalhaushalt für Moers 2015 - 2017."
level: kommune
state: NW
config: |-
  {
      "datapackage": "a6a16b964a7e784f99adecc47f26318a:moers2",
      "hierarchies": [
          {
              "datapackageHierarchy": "administrative_classification",
              "url": "einzelplan",
              "label": "Einzelplan"
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
                  "precision": "0",
                  "format": "%s%v",
                  "postfix": " \u20ac",
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
              "label": "Pro Einwohner (104.529)",
              "number": "104529",
              "description": "p. P."
          },
          {
              "label": "Erwerbst\u00e4tige Person (32.769)",
              "number": "32769",
              "description": "p. P."
          },
          {
              "label": "Pro 6-18 J\u00e4hrige (11.014)",
              "number": "11014",
              "description": "p. P."
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
          },
          "HH Art": {
              "name": "direction_2.HH_Art",
              "label_ref": "direction_2.HH_Art",
              "ref": "direction_2",
              "type": "string",
              "default": true,
              "defaultValue": "Ausgaben",
              "defaultLabel": "All",
              "label": "HH Art",
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
                  }
              ]
          }
      },
      "name": "Moers",
      "state": "NW",
      "level": "kommune",
      "text": "\n# \u00dcber den Haushalt der Stadt Moers \n**Ertrag**\nBewertetes Ressourcenaufkommen (erfolgswirksame Wertezufl\u00fcsse)\n \n**Ordentliche Ertr\u00e4ge**\nUnter der Wertgr\u00f6\u00dfe \u201eOrdentliche Ertr\u00e4ge\u201c sind die Ertr\u00e4ge nach \u00a72 Abs.1 Nr.1 bis 9 GemHVO (Ergebnisplan) bzw. \u00a738 Abs.1 S.3 GemHVO (Ergebnisrechnung) zu erfassen. \u201eSummierung\u201c der Ertr\u00e4ge: \n\n* Steuern und \u00e4hnliche Abgaben\n* Zuwendungen und allgemeine Umlagen\n* Sonstige Transferertr\u00e4ge\n* \u00d6ffentlich-rechtliche Leistungsentgelte\n* Privatrechtliche Leistungsentgelte\n* Kostenerstattungen und Kostenumlagen\n* Sonstige ordentliche Ertr\u00e4ge\n* Aktivierte Eigenleistungen\n* Bestandsver\u00e4nderungen\n \n**Ordentliche Aufwendungen** \nUnter der Wertgr\u00f6\u00dfe \u201eOrdentliche Aufwendungen\u201c sind die Aufwendungen nach \u00a72 Abs.1 Nr.10 bis 15 GemHVO gem. (Ergebnisplan) bzw. \u00a738 Abs.1 S.3 GemHVO (Ergebnisrechnung) zu erfassen. \u201eSummierung\u201c der Aufwendungen: \n* Personalaufwendungen\n* Versorgungsaufwendungen\n* Aufwendungen f\u00fcr Sach- und Dienstleistungen\n* Bilanzielle Abschreibungen\n* Transferaufwendungen\n* Sonstige ordentliche Aufwendungen\n  \n**Transferaufwendungen**: Leistungen der Gemeinde an private Haushalte (Sozialtransfers) bzw. an Dritte. Bei typischen Transfers an nat\u00fcrliche Personen (Sozialhilfe) erfolgen diese ohne den Anspruch auf eine Gegenleistung.\n \n**Personalaufwendungen**: Aufwendungen f\u00fcr die Verg\u00fctung von Beamten und tariflich Besch\u00e4ftigten (Stammkr\u00e4fte und weitere Kr\u00e4fte, die auf Grund von Arbeitsvertr\u00e4gen besch\u00e4ftigt werden). Hierzu geh\u00f6rt u.a. auch die Zuf\u00fchrung zu Pensionsr\u00fcckstellungen f\u00fcr die Besch\u00e4ftigten, die nicht zahlungsrelevant ist.\n \n**Sonstige ordentliche Aufwendungen**: Aufwendungen, die nicht den anderen Aufwandspositionen zugeordnet werden.\n \n**Zuwendungen und allgemeine Umlagen**: Neben den Zuweisungen, Zusch\u00fcssen und allgemeinen Umlagen werden hier auch Ertr\u00e4ge aus der Aufl\u00f6sung von Sonderposten zugeordnet. Letztere sind nicht zahlungsrelevant.\n \n**Sonstige Transferertr\u00e4ge**: Leistungen der Gemeinde an Dritte, z.B. Sozialhilfeleistungen, die die Gemeinde erstattet bekommt.\n \n**\u00d6ffentlich-rechtliche Leistungsentgelte**: Hierbei handelt es sich im Wesentlichen um Verwaltungs- und Benutzungsgeb\u00fchren sowie Beitr\u00e4ge und \u00e4hnliche Entgelte.\n \n**Privatrechtliche Leistungsentgelte**: Ertr\u00e4ge f\u00fcr von der Gemeinde erbrachte Leistungen, denen ein privates Rechtsverh\u00e4ltnis zu Grunde liegt, beispielsweise Mieten und Pachten.\n \n**Kostenerstattungen und Kostenumlagen**: Ertr\u00e4ge aus der Erbringung von G\u00fctern und Dienstleistungen f\u00fcr eine andere Stelle, die diese vollst\u00e4ndig oder anteilig erstattet.\n \n**Sonstige ordentliche Ertr\u00e4ge**: Ertr\u00e4ge, die nicht speziell unter den anderen Ertragspositionen erfasst werden, wie zum Beispiel Konzessionsabgaben der Energie Wasser Niederrhein GmbH.\n \n**Aktivierte Eigenleistungen**: Die Stadt Moers setzt im Tiefbaubereich, in der Gr\u00fcnfl\u00e4chenunterhaltung, im Bereich Abwasser und bei den Spielpl\u00e4tzen f\u00fcr verm\u00f6genswirksame Ma\u00dfnahmen eigenes Personal z.B. f\u00fcr Planungsleistungen ein. Bei diesen Leistungen handelt es sich um Herstellungskosten, die gemeinsam mit dem gesamten Verm\u00f6gensgegenstand zu aktivieren, d.h. in die Bilanz aufzunehmen und \u00fcber die Nutzungsdauer abzuschreiben sind. \u00dcber die Ertragsposition \u201eaktivierte Eigenleistungen\u201c wird im Ergebnisplan der Ausgleich f\u00fcr die aktivierungspflichtigen Personal- und Sachaufwendungen erreicht.\n  \n**Finanzertr\u00e4ge**: Bei den Finanzertr\u00e4gen handelt es sich um Gewinnanteile und Zinsertr\u00e4ge. Die Stadt Moers hat Gewinnanteile an der ENNI Stadt und Service A\u00f6R, der Grundst\u00fccksgesellschaft K\u00f6niglicher Hof und der Wohnungsbau Stadt Moers.\n*A\u00f6R: Anstalt des \u00f6ffentlichen Rechts\n\n**Versorgungsaufwendungen**: Hierzu geh\u00f6ren alle anfallenden Versorgungsbez\u00fcge, auch f\u00fcr Angeh\u00f6rige des ausgeschiedenen Personals, soweit die Aufwendungen die nicht bereits durch R\u00fcckstellungen ber\u00fccksichtigt wurden.\n \n**Aufwendungen f\u00fcr Sach- und Dienstleistungen**: Aufwendungen, die mit dem gemeindlichen Verwaltungshandeln oder Verwaltungsertr\u00e4gen wirtschaftlich zusammenh\u00e4ngen. Die Aufwendungen f\u00fcr Sach- und Dienstleistungen umfassen u.a. Aufwendungen f\u00fcr Energie, Wasser, Abwasser, Aufwendungen f\u00fcr die Unterhaltung (inkl. Reparatur, Fremdinstandhaltung) und die Bewirtschaftung des Anlageverm\u00f6gens, aber auch Kostenerstattungen an Dritte.\n \n**Bilanzielle Abschreibungen**: Aufwendungen f\u00fcr den Ressourcenverbrauch, der durch die Abnutzung des Anlageverm\u00f6gens entsteht. Sie sind nicht zahlungsrelevant.\n \n**Zinsen und \u00e4hnliche Aufwendungen**: Hier sind im Wesentlichen Zinsaufwendungen und Kreditbeschaffungskosten abzubilden.\n \n**MMS**: Moerser Musikschule\n \n**JEKI**: Jedem Kind ein Instrument Projekt\n\n**Moers Kultur GmbH**: Durchf\u00fchrung des Moers Festival, Mitveranstaltung des Comedy Arts Festivals und des Parkfestes, Betrieb eines Theaters und eines Kinder- und Jugendtheaters einschlie\u00dflich der \u00d6ffnung zu anderen Kunstgattungen mit dem Ziel, durch ein engagiertes gesellschaftliches und k\u00fcnstlerisches Profil f\u00fcr die Stadt Moers zu entwickeln und dar\u00fcber hinaus zu wirken.\n \n**Serviceleistungen FD 7.**: \nAusk\u00fcnfte aus der raumbezogenen Datenbasis des Geo-Informationssystems (GIS) f\u00fcr die Verwaltung und Dritte und weitere Serviceleistungen: -Hausnummernvergabe, -Benennungen von Stra\u00dfen, Wegen u. Pl\u00e4tzen, -stellung von thematischen Karten und Pl\u00e4nen, -Bescheinigungen, Verzeichnisse, Ermittlungen, Pr\u00fcfungen, Berechnungen -Gro\u00dfformatdrucke, Gro\u00dfformatkopien, Farbkopien, Scannen, Fotos -\n\n\n\n\n"
  }

---

# Über den Haushalt der Stadt Moers 
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





