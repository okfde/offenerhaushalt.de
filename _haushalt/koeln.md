---
name: Stadt Köln
slug: koeln
tagline: "Haushaltsplan 2013/2014 der Stadt Köln."
source: Stadt Köln
source_url: http://www.stadt-koeln.de/politik-und-verwaltung/finanzen/os/#pg/2014/aufwand
data_url: http://www.stadt-koeln.de/politik-und-verwaltung/finanzen/os/Hpl2013_Koeln_OS.csv
state: NW
level: kommune
dataset: de-nrw-cologne
default: produkte
aggregate: amount_sum

filters:
  - field: 'year'
    name: 'Jahr'
    default: 2014
  - field: 'art'
    name: 'Art'
    default: 'aufwand'

hierarchies:
    produkte:
        name: Produkte
        drilldowns:
            - produktbereich
            - produktgruppe
---
