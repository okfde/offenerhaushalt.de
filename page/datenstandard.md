---
title: Datenstandard
layout: page
---

Um Haushaltsdaten bei Offenerhaushalt.de visualisieren zukönnen, müssen die Daten einige Kriterien erfüllen. Zur Orientierung finden Sie hier unseren idealtypischen Datensatz zum [Download](https://github.com/okfde/offenerhaushalt.de/blob/dev/_haushalte/standard-datensatz-ohh.csv).  

Gerne wollen wir gemeinsam mit kommunalen Verwaltungen einen Standard für Haushaltsdaten in Deutschland entwickeln. Sie können dafür mit uns über unsere [Mailingliste](https://lists.okfn.org/mailman/listinfo/offener-haushalt) in den Austausch treten. 

Auf Grund der unterschiedlichen verwendeten Software in den kommunalen Verwaltungen, haben wir nicht immer Detailwissen über die jeweiligen Exportfunktionen für Haushaltsdaten. Hier zählen wir auf die Unterstützung von Verwaltungsmitarbeitern, Sie können die Informationen welche Software sie verwenden in unsere Liste (hier) eintragen, dies fördert 
den Austausch über einen Datenstandard. 

Enthaltene Informationen: 
* Bezeichnungen der Haushaltstitel auf allen Ebenen 
* Zugehörige Codes (Zahlen) für Bezeichnungen
* Der Betrag als Zahl
* Identifikation der Art des Betrages, “Plan” oder “Ist”
* Eindeutige Identifikation von Einnahmen und Ausgaben 
* Zeitpunkt: Um welches Jahr handelt es sich? 

Betrag: 
* Beträge als richtige Zahlen definiert (Datentyp: float) 
* Im Idealfall mit Punkt als Dezimalstelle 10345.12 und keinen Tausendertrennzeichen 
* Der Default sind positive Zahlen (keine Minuszeichen) 

  * Wenn z.B. alle Einnahmen negativ (-10.345.12) sind, müssen diese mit (* -1) multipliziert werden 
  * Zahlen die wirklich negativ in die Berechnung eingehen sollen, bleiben negativ
  * Die Trennung zwischen Einnahmen und Ausgaben erfolgt über eine Indikatorspalte

Struktur: 
* Erste Zeile: Namen der Spalte
* Zweite Zeile: direkt die Information
* [Long Format](https://de.wikipedia.org/wiki/Wide-Format_und_Long-Format) d.h. genau ein Zeitpunkt und ein Betrag pro Zeile

Format:
* CSV Datei 
* Feldtrenner: Komma , 
* Texttrenner: Anführungszeichen “
* Encoding: UTF-8 

