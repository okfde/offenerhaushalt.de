---
title: Stadt Witten
slug: witten
tagline: "Haushaltspläne der Stadt Witten"
source: Stadt Witten
source_url: http://www.witten.de/
data_url: http://www.witten.de/fileadmin/user_upload/opendata/hhpl.csv
state: NW
level: kommune
dataset: haushaltwitten
default: produkte

filters:
  - field: 'year'
    name: 'Jahr'
    default: 2015
  - field: 'kontenklasse'
    name: 'Kontenklasse'
    default: 5

hierarchies:
    produkte:
        name: Produkte
        drilldowns:
            - produktbereich
            - produktgruppe
            - produkt
            - kontengruppe
            - kontengart
---
