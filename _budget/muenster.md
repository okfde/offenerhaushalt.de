---
name: Stadt Münster
slug: muenster
tagline: "Haushaltsplan 2009-2012 der Stadt Münster."
level: kommune
state: NW
budget:
  source: Code for Münster
  source_url: http://codeformuenster.org/
  data_url: https://gist.githubusercontent.com/milafrerichs/fb6508b5fe0bd6a1ebd2/raw/a3b9b349119f5a2655f8ee167633e4e838150967/haushalt_gesamt.txt

  dataset: de-muenster-gesamt
  default: produktgruppe

  filters:
    - field: 'year'
      name: 'Jahr'
      default: 2012
    - field: 'typ'
      name: 'Art'
      default: 'Ausgaben'

  hierarchies:
    produktgruppe:
      name: Fachbereich
      drilldowns:
        - produktgruppe
        - untergruppe
---
