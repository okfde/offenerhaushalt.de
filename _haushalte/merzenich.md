---
_id: 5e1a1480-01c6-11e8-86e6-dd2a0f61d6b6
state: NW
name: Merzenich
text: Das ist der Haushalt der Kommune Merzenich
level: kommune
config: |-
  {
    "datapackage": "a6a16b964a7e784f99adecc47f26318a:merzenich",
    "hierarchies": [
      {
        "datapackageHierarchy": "administrative_classification",
        "url": "produkt",
        "label": "Produkt"
      }
    ],
    "value": [
      {
        "field": "Ansatz.sum",
        "formatOptions": {
          "symbol": "",
          "decimal": ",",
          "thousand": ".",
          "precision": "",
          "format": "%s%v",
          "postfix": "€",
          "grouping": 3
        },
        "label": "Ansatz"
      }
    ],
    "scale": [
      {
        "label": "Total",
        "number": 1,
        "description": ""
      },
      {
        "label": "pro Einwohner (6.906 Stand 2017)",
        "number": "6906",
        "description": "p. E. "
      }
    ],
    "filters": {
      "Jahr": {
        "name": "date_2.Jahr",
        "label_ref": "date_2.Jahr",
        "ref": "date_2",
        "type": "integer",
        "default": true,
        "defaultValue": 2015,
        "defaultLabel": "All",
        "label": "Jahr",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": 2015,
            "label": 2015
          }
        ]
      },
      "Art": {
        "name": "direction_2.Art",
        "label_ref": "direction_2.Art",
        "ref": "direction_2",
        "type": "string",
        "default": true,
        "defaultValue": "Ausgaben",
        "defaultLabel": "All",
        "label": "Budget Richtung",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "Ausgaben",
            "label": "Ausgaben"
          },
          {
            "value": "Einnahmen",
            "label": "Einnahmen"
          }
        ]
      },
      "ID": {
        "name": "budget_line_id_2.ID",
        "label_ref": "budget_line_id_2.ID",
        "ref": "budget_line_id_2",
        "type": "string",
        "default": true,
        "defaultValue": "",
        "defaultLabel": "All",
        "label": "Produkt ID",
        "values": [
          {
            "value": "",
            "label": "All"
          },
          {
            "value": "1",
            "label": "1"
          },
          {
            "value": "10",
            "label": "10"
          },
          {
            "value": "100",
            "label": "100"
          },
          {
            "value": "101",
            "label": "101"
          },
          {
            "value": "102",
            "label": "102"
          },
          {
            "value": "103",
            "label": "103"
          },
          {
            "value": "104",
            "label": "104"
          },
          {
            "value": "105",
            "label": "105"
          },
          {
            "value": "106",
            "label": "106"
          },
          {
            "value": "107",
            "label": "107"
          },
          {
            "value": "108",
            "label": "108"
          },
          {
            "value": "109",
            "label": "109"
          },
          {
            "value": "11",
            "label": "11"
          },
          {
            "value": "110",
            "label": "110"
          },
          {
            "value": "111",
            "label": "111"
          },
          {
            "value": "112",
            "label": "112"
          },
          {
            "value": "113",
            "label": "113"
          },
          {
            "value": "114",
            "label": "114"
          },
          {
            "value": "115",
            "label": "115"
          },
          {
            "value": "116",
            "label": "116"
          },
          {
            "value": "117",
            "label": "117"
          },
          {
            "value": "118",
            "label": "118"
          },
          {
            "value": "119",
            "label": "119"
          },
          {
            "value": "12",
            "label": "12"
          },
          {
            "value": "120",
            "label": "120"
          },
          {
            "value": "121",
            "label": "121"
          },
          {
            "value": "122",
            "label": "122"
          },
          {
            "value": "123",
            "label": "123"
          },
          {
            "value": "124",
            "label": "124"
          },
          {
            "value": "125",
            "label": "125"
          },
          {
            "value": "126",
            "label": "126"
          },
          {
            "value": "127",
            "label": "127"
          },
          {
            "value": "128",
            "label": "128"
          },
          {
            "value": "129",
            "label": "129"
          },
          {
            "value": "13",
            "label": "13"
          },
          {
            "value": "130",
            "label": "130"
          },
          {
            "value": "131",
            "label": "131"
          },
          {
            "value": "132",
            "label": "132"
          },
          {
            "value": "133",
            "label": "133"
          },
          {
            "value": "134",
            "label": "134"
          },
          {
            "value": "135",
            "label": "135"
          },
          {
            "value": "136",
            "label": "136"
          },
          {
            "value": "137",
            "label": "137"
          },
          {
            "value": "138",
            "label": "138"
          },
          {
            "value": "139",
            "label": "139"
          },
          {
            "value": "14",
            "label": "14"
          },
          {
            "value": "140",
            "label": "140"
          },
          {
            "value": "141",
            "label": "141"
          },
          {
            "value": "142",
            "label": "142"
          },
          {
            "value": "143",
            "label": "143"
          },
          {
            "value": "144",
            "label": "144"
          },
          {
            "value": "145",
            "label": "145"
          },
          {
            "value": "146",
            "label": "146"
          },
          {
            "value": "147",
            "label": "147"
          },
          {
            "value": "148",
            "label": "148"
          },
          {
            "value": "149",
            "label": "149"
          },
          {
            "value": "15",
            "label": "15"
          },
          {
            "value": "150",
            "label": "150"
          },
          {
            "value": "151",
            "label": "151"
          },
          {
            "value": "152",
            "label": "152"
          },
          {
            "value": "153",
            "label": "153"
          },
          {
            "value": "154",
            "label": "154"
          },
          {
            "value": "155",
            "label": "155"
          },
          {
            "value": "156",
            "label": "156"
          },
          {
            "value": "157",
            "label": "157"
          },
          {
            "value": "158",
            "label": "158"
          },
          {
            "value": "159",
            "label": "159"
          },
          {
            "value": "16",
            "label": "16"
          },
          {
            "value": "160",
            "label": "160"
          },
          {
            "value": "161",
            "label": "161"
          },
          {
            "value": "162",
            "label": "162"
          },
          {
            "value": "163",
            "label": "163"
          },
          {
            "value": "164",
            "label": "164"
          },
          {
            "value": "165",
            "label": "165"
          },
          {
            "value": "166",
            "label": "166"
          },
          {
            "value": "167",
            "label": "167"
          },
          {
            "value": "168",
            "label": "168"
          },
          {
            "value": "169",
            "label": "169"
          },
          {
            "value": "17",
            "label": "17"
          },
          {
            "value": "170",
            "label": "170"
          },
          {
            "value": "171",
            "label": "171"
          },
          {
            "value": "172",
            "label": "172"
          },
          {
            "value": "173",
            "label": "173"
          },
          {
            "value": "174",
            "label": "174"
          },
          {
            "value": "175",
            "label": "175"
          },
          {
            "value": "176",
            "label": "176"
          },
          {
            "value": "177",
            "label": "177"
          },
          {
            "value": "178",
            "label": "178"
          },
          {
            "value": "179",
            "label": "179"
          },
          {
            "value": "18",
            "label": "18"
          },
          {
            "value": "180",
            "label": "180"
          },
          {
            "value": "181",
            "label": "181"
          },
          {
            "value": "182",
            "label": "182"
          },
          {
            "value": "183",
            "label": "183"
          },
          {
            "value": "184",
            "label": "184"
          },
          {
            "value": "185",
            "label": "185"
          },
          {
            "value": "186",
            "label": "186"
          },
          {
            "value": "187",
            "label": "187"
          },
          {
            "value": "188",
            "label": "188"
          },
          {
            "value": "189",
            "label": "189"
          }
        ]
      }
    },
    "level": "kommune",
    "state": "NW",
    "name": "Merzenich",
    "text": "Das ist der Haushalt der Kommune Merzenich"
  }
date: '2018-01-25T11:53:33.102Z'
slug: merzenich
---
undefined
