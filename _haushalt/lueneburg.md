---
name: Stadt Lüneburg
slug: lueneburg
tagline: "Haushaltsplan der Stadt Lüneburg."
source: Claas Heinrich
source_url: https://openspending.org/account/cheinrich
data_url: http://opendatalabs.org/misc/Plan_Haushalt_2013_2014-4-xlsx.csv 
state: NI
level: kommune
dataset: stadt_lueneburg
default: produkte

filters:
  - field: 'year'
    name: 'Jahr'
    default: 2014
  - field: 'einahme_ausgabe'
    name: 'Einnahme/Ausgabe'
    default: 'A'

hierarchies:
    produkte:
        name: Produkte
        drilldowns:
            - teilhaushalt
            - produktgruppe
            - produkt
---
