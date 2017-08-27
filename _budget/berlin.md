---
name: Land Berlin
slug: berlin
tagline: "Landeshaushalt für Berlin, verabschiedet durch den Senat der Stadt Berlin."
level: land
state: BE
budget:
  source: Stadt Berlin
  source_url: http://daten.berlin.de
  data_url: http://opendatalabs.org/de/haushalt

  dataset: berlin_de
  default: einzelplan

  os_package_id: a6a16b964a7e784f99adecc47f26318a
  os_key: berlin_16_17_clean

  filters:
    - field: 'date_2'
      name: 'Jahr'
      default: 2017
    - field: 'fin_source_Typ'
      name: 'Typ'
      default: ''
      nullable: true
    - field: 'direction_2'
      name: 'Art'
      default: 'Ausgabetitel'

  hierarchies:
    einzelplan:
      name: Einzelpläne
      drilldowns:
        - administrative_classification_2.Einzelplan
        - administrative_classification_2.Einzelplanbezeichnung

    funktion:
      name: Funktionen
      drilldowns:
        - Hauptfunktion
        - Oberfunktion
        - Funktion
---
