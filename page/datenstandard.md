---
title: Datenstandard
layout: page
---
Zur Umsetzung von OffenerHaushalt sind maschinenlesbare Haushaltsdaten notwendig. Gemeint ist damit, dass die Daten in der Form bereitgestellt werden sollen, in der ihre intendierte Struktur möglichst weitgehend nachvollzogen werden kann. Während es sich zum Beispiel beim PDF-Format zwar um digitale Daten handelt, sind die enthaltenen Informationen für die Ausgabe durch Bildschirme und Drucker optimiert - Informationen zur eigentlichen Struktur können jedoch nicht ausgelesen werden.

Um Haushaltspläne bei Offenerhaushalt.de visualisieren zu können, müssen diese in maschinenlesbarer Form vorliegen. Im Idealfall ist das ein CSV Format oder eine Datei, die sich leicht in ein CSV konvertieren lässt (Excel Datei).

### Idealtypischer Datensatz

Zur Orientierung und Kommunikation mit zuständigen Verwaltungsmitarbeitern finden Sie hier unseren idealtypischen Datensatz zum [Download](https://rawgit.com/okfde/offenerhaushalt.de/gh-pages/_haushalte-data/standard-datensatz-ohh.csv){: download="standard-datensatz-ohh.csv"}.  
Gerne wollen wir gemeinsam mit kommunalen Verwaltungen einen Standard für Haushaltsdaten in Deutschland entwickeln. Sie können dafür mit uns über unsere [Mailingliste](https://lists.okfn.org/mailman/listinfo/offener-haushalt) in den Austausch treten.

Auf Grund der unterschiedlichen verwendeten Software in den kommunalen Verwaltungen, haben wir nicht immer Detailwissen über die jeweiligen Exportfunktionen für Haushaltsdaten. Hier zählen wir auf die Unterstützung von Verwaltungsmitarbeitern: Sie können die Informationen, welche Software sie verwenden, in unsere Liste [hier](https://docs.google.com/spreadsheets/d/12UHEsLjLCMakLiM7Ruj3AJZzRrn70L_32IZu8z29amo/edit#gid=0) eintragen. Dies fördert
den Austausch über einen Datenstandard.

### Tabellenformat

Haushaltsdaten werden für gewöhnlich in tabellarischer Form abgelegt.
Ein geeignetes Format zum Import in OffenerHaushalt stellt jeden einzelnen Posten im Haushalt mit je einem einzelnen Betrag als eine Zeile in einer CSV Datei dar. Im [long Format](https://de.wikipedia.org/wiki/Wide-Format_und_Long-Format) sieht dann jede Zeile wie folgt aus:

Posten ID, Produkt, Produkt ID, Budget Richtung, Jahr, Betrag, Betrag Typ
![Bild Datenstandard](/static/img/example_table.png)

### Enthaltene Informationen:
* Posten ID: Eindeutige ID pro Zeile, damit es nie "Duplicates" geben kann
* Produkt: Bezeichnung des Haushaltsposten pro Ebene
* Produkt ID: Eindeutige Nummer des Haushaltsposten pro Ebene
* Budget Richtung: "Aufwendung" oder "Ertrag"
* Jahr: Haushaltsjahr
* Betrag: Der Betrag als Zahl (siehe Details unten)
* Betrag Typ: "Plan" oder "Ist"

### Betrag:
* Beträge als richtige Zahlen definiert (Datentyp: float)
* Im Idealfall mit Punkt als Dezimalstelle 10345.12 und keinen Tausendertrennzeichen
* Der Default sind positive Zahlen (keine Minuszeichen)

  * Wenn z.B. alle Einnahmen negativ (-10.345.12) sind, müssen diese mit (* -1) multipliziert werden
  * Zahlen, die wirklich negativ in die Berechnung eingehen sollen, bleiben negativ
  * Die Trennung zwischen Einnahmen und Ausgaben erfolgt über eine Indikatorspalte

### Struktur:
* Erste Zeile: Namen der Spalte
* Alle weiteren Zeilen: direkt die Haushaltsposteninformation
* [Long Format](https://de.wikipedia.org/wiki/Wide-Format_und_Long-Format) d.h. genau ein Zeitpunkt und ein Betrag pro Zeile

### Format:
* CSV Datei
* Feldtrenner: Komma ','
* Texttrenner: Anführungszeichen “
* Encoding: UTF-8
