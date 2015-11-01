---
layout: page
title: Anforderung für Haushaltsdaten
---

## Dateiformate

Zur Umsetzung von OffenerHaushalt sind - wie für viele [Open Data](http://okfn.de/opendata)-Projekte - maschinenlesbare Haushaltsdaten notwendig. Gemeint ist damit, dass die Daten in der Form bereit gestellt werden sollen, in der ihre intendierte Struktur möglichst weitgehend nachvollzogen werden kann.

Während es sich zum Beispiel beim PDF-Format zwar um digitale Daten handelt, sind die enthaltenen Informationen für die Ausgabe durch Bildschirme und Drucker optimiert - Informationen zur eigentlichen Struktur (z.B. zu tabellarischen Aufführungen) müssen jedoch anhand des Layouts rekonstruiert werden. Oft ist dies gar nicht oder nur teilweise möglich.

Geeignet sind z.B. die folgenden Formate:

<table class="table table-condensed">
<tr><th>Name</th><th>Rating</th><th>Dateiendung</th><th>Beschreibungen</tr>
<tr><td>Komma-separierte Werte</td><td>***</td><td>.csv</td><td>Einfaches Textformat, gut geeignet.</td></tr>
<tr><td>Excel-Dateien</td><td>**</td><td>.xls</td><td>Microsoft Excel (2000-2003) Format, ohne Makros und mit wenigen Blättern.</td></tr>
<tr><td>OO.org Spreadsheets</td><td>*</td><td>.ods</td><td>Open Office-Daten, ähnlich Excel</td></tr>
<tr><td>XML-Daten</td><td>****</td><td>.xml</td></td><td>Ein eigenes, expressives XML-Format (vgl. FTS)</td></tr>
<tr><td>JavaScript Object Notation</td><td>****</td><td>.json</td><td>JSON-Daten mit aussagekräftigen Keys und guter Verschachtelung.</td></tr>
</table>

## Tabellenformate

Haushaltsdaten werden für gewöhnlich in tabellarischer Form abgelegt. Dabei kommt oft ein Format wie das folgende zum Einsatz:

	PostenID, Klassifikation1, Klassifikation2, Bezeichnung, Eigenschaft1, Eigenschaft2, Ist20NN, Ist20NN, Soll20NN

Wobei "Klassifikation" ein Kategorienschema wie den Funktionenplan, Gruppierungsplan o.ä. meint, "Eigenschaften" beispielsweise Angaben zur gegenseitigen Deckungsfähigkeit einzelner Posten oder Postengruppen.

Ein solches Format ist grundsätzlich zum Import in OffenerHaushalt geeignet. Vereinfacht wird der Import durch die Bereitstellung in einer leicht denormalisierten Form, in der jeder Betrag einer einzelnen Zeile entspricht:

	Posten ID, Klassifikation 1, Klassifikation 2, Bezeichnung, Eigenschaft 1, Eigenschaft 2, Soll Oder Ist, Jahr, Betrag

**Weiterhin gelten die folgenden Hinweise:**

Obere Klassifikationen, die sich aus einer niederen ableiten lassen, müssen nicht einzeln angegeben werden (so reicht die Funktionsziffer "541", die Klassifikationen "5" und "54" sind redundant).
Ein Beschreibungstext für einzelne Posten oder Produkte ist hilfreich, kann dargestellt werden und beim Export direkt in die Tabelle eingebunden werden (auch wenn hier eine Redundanz entsteht).

## Enthaltene Informationen

Die eigentlichen Haushaltsdaten müssen um folgende Informationen erweitert sein:

* Falls Klassifikationsschemata (wie Produktpläne) Anwendung finden, die nicht auf Bundesebene Anwendung finden: Ein Glossar aller verwendeten Codes, deren Bezeichnung und Beschreibung.
* Falls Produkte beschrieben werden, deren Bezeichnung und Beschreibung.

Zusätzlich können die folgenden Informationen hilfreich sein:

* Angaben zur Zuordnung zu besonderen Programmen, Investitionen und Initiativen
* Liegt ein übergeordneter Haushalt vor (bzw. bei Ausgabendaten): Informationen zur zutreffenden Kostenstelle (bspw. Postennr.).
* Falls juristische Personen als Empfänger genannt werden: deren Name, Rechtsform, Sitz, Amtsgericht, Register und Registernummer.
* Falls natürliche Personen als Empfänger genannt werden: deren Name und Anschrift (Ja, es gibt Situationen in denen das öffentliche Interesse das rechtfertigt, siehe CAP).
* Falls verschiedene Ministerien, Behörden etc. Nennung finden: eine interne (eindeutige) Kennung, Beschreibung, Anschrift und Kontaktinformationen, inkl. Info-URL.
* Eventuelle Umbenennungen von Posten als zeitcodierte Liste.
