---
name: Saarland
slug: saarland
tagline: "Landeshaushalt Mecklenburg-Vorpommern, HH Jahr 2015."
level: land
state: SA
budget:
  source: David Krcek
  source_url: https://piratenpartei-bayern.de/2015/03/10/open-haushalt-bayern/

  dataset: landeshaushalt-saarland
  default: einzelplan

  filters:
    - field: 'einnahme_ausgabe'
      name: 'Einnahme/Ausgabe'
      default: 'Ausgaben'
    - field: 'jahr'
      name: 'Jahr'
      default: '2015'

  hierarchies:
    einzelplan:
      name: Einzelpläne
      drilldowns:
        - einzelplan
        - kapitel
        - titelgruppe
        - titel
---
