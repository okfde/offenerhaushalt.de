---
name: Stadt Osnabrück
slug: osnabrueck
tagline: "Die Haushaltspläne der Jahre 2012 (Ist-Stand), 2013 (Plan) und 2014 (Verwaltungsentwurf)."
source: Fachbereich Finanzen und Controlling der Stadt Osnabrück
source_url: http://www.osnabrueck.de/
data_url: http://opendatalabs.org/de/haushalt
state: NI
level: kommune
dataset: hhos
default: fachbereiche

filters:
  - field: 'year'
    name: 'Jahr'
    default: 2014
  - field: 'ertrag_aufwand'
    name: 'Art'
    default: 'Aufwand'
  - field: 'interne_leist'
    name: 'Interne Leistungen'
    default: 'nein'

hierarchies:
    arten:
        name: Kostenarten
        drilldowns:
            - kostenartengruppe

    fachbereiche:
        name: Produkte/Fachbereiche
        drilldowns:
            - fachbereich
            - produkt
            - teilprodukt
---
