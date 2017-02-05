---
name: Stadt Uelzen
slug: uelzen
tagline: "Haushaltsplan 2013 der Stadt Uelzen in Niedersachsen."
level: kommune
state: NI
budget:
  source: "Titus Tschamtke, Rolf Tischler"
  data_url: "http://www.titusgames.de/Haushaltsdaten_2012_bis_2014.csv"

  dataset: uelzen
  default: produkte

  filters:
    - field: 'year'
      name: 'Jahr'
      default: 2014
    - field: 'e_a'
      name: 'Einnahmen/Ausgaben'
      default: 'A'

  hierarchies:
    produkte:
      name: Teilhaushalt/Produkte
      drilldowns:
        - teilhaushalt
        - produkt
---
