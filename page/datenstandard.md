---
title: Datenstandard
layout: page
---
Zur Umsetzung von OffenerHaushalt sind maschinenlesbare Haushaltsdaten notwendig. Gemeint ist damit, dass die Daten in der Form bereitgestellt werden sollen, in der ihre intendierte Struktur möglichst weitgehend nachvollzogen werden kann. Während es sich zum Beispiel beim PDF-Format zwar um digitale Daten handelt, sind die enthaltenen Informationen für die Ausgabe durch Bildschirme und Drucker optimiert - Informationen zur eigentlichen Struktur können jedoch nicht ausgelesen werden.

Um Haushaltspläne bei Offenerhaushalt.de visualisieren zu können, müssen diese in maschinenlesbarer Form vorliegen. Im Idealfall ist das ein CSV Format oder eine Datei, die sich leicht in ein CSV konvertieren lässt (Excel Datei).

### Idealtypischer Datensatz

Zur Orientierung und Kommunikation mit zuständigen Verwaltungsmitarbeitern finden Sie hier unseren idealtypischen Datensatz zum [Download](https://github.com/okfde/offenerhaushalt.de/raw/dev/_haushalte/standard-datensatz-ohh.csv){: download="standard-datensatz-ohh.csv"}.  
Gerne wollen wir gemeinsam mit kommunalen Verwaltungen einen Standard für Haushaltsdaten in Deutschland entwickeln. Sie können dafür mit uns über unsere [Mailingliste](https://lists.okfn.org/mailman/listinfo/offener-haushalt) in den Austausch treten. 

Auf Grund der unterschiedlichen verwendeten Software in den kommunalen Verwaltungen, haben wir nicht immer Detailwissen über die jeweiligen Exportfunktionen für Haushaltsdaten. Hier zählen wir auf die Unterstützung von Verwaltungsmitarbeitern: Sie können die Informationen, welche Software sie verwenden, in unsere Liste [hier](https://docs.google.com/spreadsheets/d/12UHEsLjLCMakLiM7Ruj3AJZzRrn70L_32IZu8z29amo/edit#gid=0) eintragen. Dies fördert 
den Austausch über einen Datenstandard. 

### Tabellenformat

Haushaltsdaten werden für gewöhnlich in tabellarischer Form abgelegt. Dabei kommt oft ein Format wie das folgende zum Einsatz:
PostenID, Klassifikation1, Klassifikation2, Klassifikation Code, Bezeichnung, Ist20NN, Ist20NN, Soll20NN

Wobei "Klassifikation" ein Kategorienschema wie den Funktionenplan oder Produktgruppen o.ä. meint.
Ein solches Format ist grundsätzlich zum Import in OffenerHaushalt geeignet. Vereinfacht wird der Import durch die Bereitstellung in einer leicht denormalisierten Form, in der jeder Betrag einer einzelnen Zeile entspricht [long Format](https://de.wikipedia.org/wiki/Wide-Format_und_Long-Format):

Posten ID, Klassifikation 1, Klassifikation 2, Klassifikation Code, Bezeichnung, Soll Oder Ist, Jahr, Betrag

### Enthaltene Informationen: 
* Bezeichnungen der Haushaltstitel auf allen Ebenen 
* Zugehörige Codes (Zahlen) für Bezeichnungen
  * Obere Klassifikationen, die sich aus einer niederen ableiten lassen, müssen nicht einzeln angegeben werden (so reicht die Funktionsziffer "541", die Klassifikationen "5" und "54" sind redundant)
* Der Betrag als Zahl
* Identifikation der Art des Betrages, “Plan” oder “Ist”
* Eindeutige Identifikation von Einnahmen und Ausgaben 
* Zeitpunkt: Um welches Jahr handelt es sich? 

### Betrag: 
* Beträge als richtige Zahlen definiert (Datentyp: float) 
* Im Idealfall mit Punkt als Dezimalstelle 10345.12 und keinen Tausendertrennzeichen 
* Der Default sind positive Zahlen (keine Minuszeichen) 

  * Wenn z.B. alle Einnahmen negativ (-10.345.12) sind, müssen diese mit (* -1) multipliziert werden 
  * Zahlen, die wirklich negativ in die Berechnung eingehen sollen, bleiben negativ
  * Die Trennung zwischen Einnahmen und Ausgaben erfolgt über eine Indikatorspalte

### Struktur: 
* Erste Zeile: Namen der Spalte
* Zweite Zeile: direkt die Information
* [Long Format](https://de.wikipedia.org/wiki/Wide-Format_und_Long-Format) d.h. genau ein Zeitpunkt und ein Betrag pro Zeile

### Format:
* CSV Datei 
* Feldtrenner: Komma ',' 
* Texttrenner: Anführungszeichen “
* Encoding: UTF-8 

