import { Restaurant } from "../schemas/restaurant";



export const restaurants: Restaurant[] = [
  {
    "id": 277803750,
    "name": "Trattoria Da-Balbi",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Wielandstraße",
      "housenumber": "7",
      "postcode": "65187",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 840303",
      "website": "https://www.da-balbi.de/"
    },
    "openingHours": {
      "raw": "Tu-Su 11:30-14:30,18:00-23:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "yes",
    "wheelchairDescription": "Barrierefrei,kein Behinderten-WC",
    "toiletsWheelchair": "no",
    "takeaway": true,
    "smoking": "no",
    "lat": 50.0716216,
    "lon": 8.2331187,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "7",
      "addr:postcode": "65187",
      "addr:street": "Wielandstraße",
      "amenity": "restaurant",
      "check_date": "2023-08-30",
      "cuisine": "italian",
      "indoor_seating": "yes",
      "name": "Trattoria Da-Balbi",
      "opening_hours": "Tu-Su 11:30-14:30,18:00-23:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 840303",
      "smoking": "no",
      "takeaway": "yes",
      "toilets:wheelchair": "no",
      "website": "https://www.da-balbi.de/",
      "wheelchair": "yes",
      "wheelchair:description": "Barrierefrei,kein Behinderten-WC"
    }
  },
  {
    "id": 349116793,
    "name": "Amadeus",
    "cuisine": [
      "german"
    ],
    "address": {
      "street": "Rauenthaler Straße",
      "housenumber": "24",
      "postcode": "65197",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 9881330",
      "website": "http://www.amadeus-wiesbaden.de/"
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "yes",
    "toiletsWheelchair": "no",
    "diet": {
      "vegetarian": true
    },
    "lat": 50.0744792,
    "lon": 8.228842,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "24",
      "addr:postcode": "65197",
      "addr:street": "Rauenthaler Straße",
      "amenity": "restaurant",
      "cuisine": "german",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "name": "Amadeus",
      "outdoor_seating": "yes",
      "phone": "+49 611 9881330",
      "toilets:wheelchair": "no",
      "website": "http://www.amadeus-wiesbaden.de/",
      "wheelchair": "yes"
    }
  },
  {
    "id": 359848692,
    "name": "D.D Novi Pazar",
    "lat": 50.0730729,
    "lon": 8.2371943,
    "tags": {
      "amenity": "restaurant",
      "name": "D.D Novi Pazar"
    }
  },
  {
    "id": 369858219,
    "name": "Viethouse",
    "cuisine": [
      "japanese",
      "asian"
    ],
    "address": {
      "street": "Kaiser-Friedrich-Ring",
      "housenumber": "40",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49611304265",
      "website": "https://viethouse.de",
      "instagram": "viethousewbn"
    },
    "openingHours": {
      "raw": "Tu-Fr 11:00-15:00,17:30-22:30; Sa,Su,PH 13:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": false,
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "smoking": "no",
    "payment": {
      "creditCards": true,
      "debitCards": true
    },
    "lat": 50.0737695,
    "lon": 8.2327218,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "40",
      "addr:postcode": "65185",
      "addr:street": "Kaiser-Friedrich-Ring",
      "amenity": "restaurant",
      "contact:instagram": "viethousewbn",
      "cuisine": "japanese;asian",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "name": "Viethouse",
      "opening_hours": "Tu-Fr 11:00-15:00,17:30-22:30; Sa,Su,PH 13:00-22:00",
      "outdoor_seating": "no",
      "payment:credit_cards": "yes",
      "payment:debit_cards": "yes",
      "phone": "+49611304265",
      "smoking": "no",
      "website": "https://viethouse.de"
    }
  },
  {
    "id": 369858226,
    "name": "Charm Thai",
    "cuisine": [
      "thai"
    ],
    "wheelchair": "no",
    "lat": 50.071505,
    "lon": 8.2367918,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "thai",
      "name": "Charm Thai",
      "wheelchair": "no"
    }
  },
  {
    "id": 369858235,
    "name": "Masala - indian Restaurant",
    "cuisine": [
      "indian"
    ],
    "address": {
      "street": "Gerichtsstraße",
      "housenumber": "5"
    },
    "contact": {
      "phone": "+49 611 36094100",
      "email": "partner@eatarian.com",
      "website": "https://masala-wiesbaden.de"
    },
    "openingHours": {
      "raw": "Tu-Fr 11:00-14:00,16:00-22:00; Sa,Su 12:00-22:00",
      "signed": false
    },
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "delivery": true,
    "takeaway": true,
    "lat": 50.075341,
    "lon": 8.2377707,
    "tags": {
      "addr:housenumber": "5",
      "addr:street": "Gerichtsstraße",
      "amenity": "restaurant",
      "cuisine": "indian",
      "delivery": "yes",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "email": "partner@eatarian.com",
      "name": "Masala - indian Restaurant",
      "opening_hours": "Tu-Fr 11:00-14:00,16:00-22:00; Sa,Su 12:00-22:00",
      "phone": "+49 611 36094100",
      "takeaway": "yes",
      "website": "https://masala-wiesbaden.de"
    }
  },
  {
    "id": 369858254,
    "name": "Sakura Sushi",
    "cuisine": [
      "sushi"
    ],
    "contact": {
      "phone": "+49 611 3602333",
      "website": "https://www.sushi-wiesbaden.de/"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:00-22:00; Sa 12:00-22:00; Su 15:00-22:00",
      "signed": false
    },
    "wheelchair": "no",
    "lat": 50.0738073,
    "lon": 8.238612,
    "tags": {
      "amenity": "restaurant",
      "check_date": "2025-03-31",
      "cuisine": "sushi",
      "name": "Sakura Sushi",
      "opening_hours": "Mo-Fr 11:00-22:00; Sa 12:00-22:00; Su 15:00-22:00",
      "phone": "+49 611 3602333",
      "website": "https://www.sushi-wiesbaden.de/",
      "wheelchair": "no"
    }
  },
  {
    "id": 431250381,
    "name": "Sonnys Indian Kitchen",
    "cuisine": [
      "indian"
    ],
    "address": {
      "street": "Wilhelmstraße",
      "housenumber": "52a",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 89063043",
      "website": "https://sonnys-indian-kitchen.eatbu.com/"
    },
    "openingHours": {
      "raw": "Mo 17:00-23:00; Tu-Su 11:30-14:30,17:00-23:00",
      "signed": false
    },
    "wheelchair": "limited",
    "lat": 50.0841541,
    "lon": 8.2438891,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "52a",
      "addr:postcode": "65183",
      "addr:street": "Wilhelmstraße",
      "amenity": "restaurant",
      "cuisine": "indian",
      "name": "Sonnys Indian Kitchen",
      "opening_hours": "Mo 17:00-23:00; Tu-Su 11:30-14:30,17:00-23:00",
      "phone": "+49 611 89063043",
      "website": "https://sonnys-indian-kitchen.eatbu.com/",
      "website:menu": "https://sonnys-indian-kitchen.order.app.hd.digital/menus",
      "wheelchair": "limited"
    }
  },
  {
    "id": 457954551,
    "name": "Mykonos",
    "cuisine": [
      "greek"
    ],
    "address": {
      "street": "Kleiststraße",
      "housenumber": "1",
      "postcode": "65187",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 841968"
    },
    "openingHours": {
      "raw": "11:30-14:30,18:00-23:30; PH,Tu off; Sa 18:00-23:30",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "limited",
    "toiletsWheelchair": "no",
    "smoking": "outside",
    "capacity": 50,
    "lat": 50.0726201,
    "lon": 8.2313056,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "1",
      "addr:postcode": "65187",
      "addr:street": "Kleiststraße",
      "amenity": "restaurant",
      "capacity": "50",
      "check_date": "2025-04-28",
      "cuisine": "greek",
      "indoor_seating": "yes",
      "name": "Mykonos",
      "opening_hours": "11:30-14:30,18:00-23:30; PH,Tu off; Sa 18:00-23:30",
      "outdoor_seating": "yes",
      "phone": "+49 611 841968",
      "smoking": "outside",
      "toilets:wheelchair": "no",
      "wheelchair": "limited"
    }
  },
  {
    "id": 497060824,
    "name": "Beviamo",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Wilhelmstraße",
      "housenumber": "52 e-f",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 16087-73",
      "website": "https://www.beviamo.de/"
    },
    "openingHours": {
      "raw": "Mo-Th 11:30-24:00, Fr-Sa 11:30-01:00, Su 12:00-00:00",
      "signed": false
    },
    "wheelchair": "yes",
    "lat": 50.084359,
    "lon": 8.2431132,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "52 e-f",
      "addr:postcode": "65183",
      "addr:street": "Wilhelmstraße",
      "amenity": "restaurant",
      "cuisine": "italian",
      "name": "Beviamo",
      "opening_hours": "Mo-Th 11:30-24:00, Fr-Sa 11:30-01:00, Su 12:00-00:00",
      "phone": "+49 611 16087-73",
      "website": "https://www.beviamo.de/",
      "wheelchair": "yes"
    }
  },
  {
    "id": 524549231,
    "name": "PizzaExpress",
    "cuisine": [
      "pizza"
    ],
    "address": {
      "street": "Kaiser-Friedrich-Ring",
      "housenumber": "38",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49611301137",
      "email": "mail@pizza-express.info",
      "website": "https://www.pizza-express.info/"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:00-14:30,17:30-23:00; Su,PH 16:30-22:30",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": false,
    "wheelchair": "limited",
    "diet": {
      "vegan": false,
      "vegetarian": true
    },
    "smoking": "no",
    "brand": "PizzaExpress",
    "lat": 50.0739544,
    "lon": 8.2324782,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "38",
      "addr:postcode": "65185",
      "addr:street": "Kaiser-Friedrich-Ring",
      "amenity": "restaurant",
      "brand": "PizzaExpress",
      "brand:wikidata": "Q662845",
      "brand:wikipedia": "en:PizzaExpress",
      "cuisine": "pizza",
      "diet:vegan": "no",
      "diet:vegetarian": "yes",
      "email": "mail@pizza-express.info",
      "indoor_seating": "yes",
      "name": "PizzaExpress",
      "opening_hours": "Mo-Fr 11:00-14:30,17:30-23:00; Su,PH 16:30-22:30",
      "outdoor_seating": "no",
      "phone": "+49611301137",
      "smoking": "no",
      "website": "https://www.pizza-express.info/",
      "wheelchair": "limited"
    }
  },
  {
    "id": 567165425,
    "name": "Vesuvio",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Schiersteiner Straße",
      "housenumber": "22",
      "postcode": "65187",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 87 141",
      "website": "https://www.vesuvio-wiesbaden.de/"
    },
    "openingHours": {
      "raw": "Tu-Sa 11:30-14:00,17:00-22:00; Su,PH 17:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "no",
    "toiletsWheelchair": "no",
    "diet": {
      "vegan": false,
      "vegetarian": true
    },
    "smoking": "no",
    "lat": 50.0736016,
    "lon": 8.2309716,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "22",
      "addr:postcode": "65187",
      "addr:street": "Schiersteiner Straße",
      "amenity": "restaurant",
      "cuisine": "italian",
      "diet:vegan": "no",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "name": "Vesuvio",
      "opening_hours": "Tu-Sa 11:30-14:00,17:00-22:00; Su,PH 17:00-22:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 87 141",
      "smoking": "no",
      "toilets:wheelchair": "no",
      "website": "https://www.vesuvio-wiesbaden.de/",
      "wheelchair": "no"
    }
  },
  {
    "id": 587254860,
    "name": "Mathilda",
    "address": {
      "street": "Luisenplatz",
      "housenumber": "2",
      "postcode": "65185"
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "no",
    "lat": 50.077984,
    "lon": 8.2393416,
    "tags": {
      "addr:housenumber": "2",
      "addr:postcode": "65185",
      "addr:street": "Luisenplatz",
      "amenity": "restaurant",
      "indoor_seating": "yes",
      "name": "Mathilda",
      "outdoor_seating": "yes",
      "wheelchair": "no"
    }
  },
  {
    "id": 692105937,
    "name": "Sajo Restaurant",
    "cuisine": [
      "asian",
      "sushi",
      "japanese"
    ],
    "address": {
      "street": "Bahnhofstraße",
      "housenumber": "50",
      "postcode": "65185",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 98896322",
      "email": "sajorestaurant@gmail.com",
      "website": "https://sajorestaurant.de"
    },
    "openingHours": {
      "raw": "Tu-Th 12:00-22:00, Fr-Su 11:00-23:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "diet": {
      "vegetarian": true
    },
    "lat": 50.0749355,
    "lon": 8.2429855,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "50",
      "addr:postcode": "65185",
      "addr:street": "Bahnhofstraße",
      "amenity": "restaurant",
      "cuisine": "asian;sushi;japanese",
      "diet:vegetarian": "yes",
      "email": "sajorestaurant@gmail.com",
      "indoor_seating": "yes",
      "name": "Sajo Restaurant",
      "opening_hours": "Tu-Th 12:00-22:00, Fr-Su 11:00-23:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 98896322",
      "website": "https://sajorestaurant.de"
    }
  },
  {
    "id": 697798710,
    "name": "Tokyo Sushi Bar",
    "cuisine": [
      "japanese"
    ],
    "address": {
      "street": "Westendstraße",
      "housenumber": "3",
      "postcode": "65195",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+4961188005095",
      "website": "www.facebook.com/Tokyo-Sushibar"
    },
    "openingHours": {
      "raw": "Sa-Mo 17:00-22:30; Tu-Fr 11:00-14:30,17:00-22:30",
      "signed": false
    },
    "outdoorSeating": true,
    "wheelchair": "no",
    "delivery": true,
    "lat": 50.0826255,
    "lon": 8.2282587,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "3",
      "addr:postcode": "65195",
      "addr:street": "Westendstraße",
      "amenity": "restaurant",
      "cuisine": "japanese",
      "delivery": "yes",
      "name": "Tokyo Sushi Bar",
      "opening_hours": "Sa-Mo 17:00-22:30; Tu-Fr 11:00-14:30,17:00-22:30",
      "outdoor_seating": "yes",
      "phone": "+4961188005095",
      "url": "www.facebook.com/Tokyo-Sushibar",
      "wheelchair": "no"
    }
  },
  {
    "id": 697798715,
    "name": "Harput",
    "cuisine": [
      "turkish"
    ],
    "address": {
      "street": "Bleichstraße",
      "housenumber": "9",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 40619",
      "website": "https://www.harputrestaurant.de/"
    },
    "openingHours": {
      "raw": "Mo-Th 11:00-23:00,Fr-Sa 11:00-02:00,Su 11:00-23:00; PH off",
      "signed": false
    },
    "wheelchair": "no",
    "description": "Restaurant extends to neighboring buildings Bleichstrasse 7 and 11",
    "level": "0",
    "lat": 50.0828818,
    "lon": 8.2344892,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "9",
      "addr:postcode": "65183",
      "addr:street": "Bleichstraße",
      "amenity": "restaurant",
      "cuisine": "turkish",
      "description": "Restaurant extends to neighboring buildings Bleichstrasse 7 and 11",
      "level": "0",
      "name": "Harput",
      "opening_hours": "Mo-Th 11:00-23:00,Fr-Sa 11:00-02:00,Su 11:00-23:00; PH off",
      "phone": "+49 611 40619",
      "website": "https://www.harputrestaurant.de/",
      "wheelchair": "no"
    }
  },
  {
    "id": 697798717,
    "name": "Webers Wikinger",
    "contact": {
      "website": "https://www.webers-wikinger.de/"
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "no",
    "lat": 50.0829677,
    "lon": 8.2402987,
    "tags": {
      "amenity": "restaurant",
      "indoor_seating": "yes",
      "name": "Webers Wikinger",
      "outdoor_seating": "yes",
      "website": "https://www.webers-wikinger.de/",
      "wheelchair": "no"
    }
  },
  {
    "id": 798620225,
    "name": "Pizzeria Buongiorno",
    "address": {
      "street": "Goebenstraße",
      "housenumber": "7",
      "postcode": "65195",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 9490300",
      "website": "https://www.pizzeriabuongiorno.de/"
    },
    "openingHours": {
      "raw": "Tu-Su 17:00-23:00; Mo off",
      "signed": false
    },
    "wheelchair": "yes",
    "toiletsWheelchair": "no",
    "lat": 50.0795171,
    "lon": 8.2284171,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "7",
      "addr:postcode": "65195",
      "addr:street": "Goebenstraße",
      "amenity": "restaurant",
      "name": "Pizzeria Buongiorno",
      "opening_hours": "Tu-Su 17:00-23:00; Mo off",
      "phone": "+49 611 9490300",
      "toilets:wheelchair": "no",
      "website": "https://www.pizzeriabuongiorno.de/",
      "wheelchair": "yes"
    }
  },
  {
    "id": 832845333,
    "name": "Osteria Da Enzo",
    "cuisine": [
      "italian"
    ],
    "wheelchair": "limited",
    "lat": 50.0885615,
    "lon": 8.2405198,
    "tags": {
      "amenity": "restaurant",
      "check_date": "2025-02-22",
      "cuisine": "italian",
      "name": "Osteria Da Enzo",
      "wheelchair": "limited"
    }
  },
  {
    "id": 832846708,
    "name": "Beef 'n Reef",
    "cuisine": [
      "steak_house",
      "seafood"
    ],
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "limited",
    "lat": 50.0878694,
    "lon": 8.2417578,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "steak_house;seafood",
      "indoor_seating": "yes",
      "name": "Beef 'n Reef",
      "outdoor_seating": "yes",
      "wheelchair": "limited"
    }
  },
  {
    "id": 832847916,
    "name": "Restaurant Palmyra",
    "cuisine": [
      "syrian",
      "lebanese"
    ],
    "address": {
      "street": "Taunusstraße",
      "housenumber": "15",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 522121"
    },
    "openingHours": {
      "raw": "12:00-24:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "no",
    "operator": "H. Arour",
    "description": "Täglich durchgehend warme Küche.",
    "lat": 50.087524,
    "lon": 8.2421639,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "15",
      "addr:postcode": "65183",
      "addr:street": "Taunusstraße",
      "amenity": "restaurant",
      "check_date": "2023-09-01",
      "cuisine": "syrian;lebanese",
      "description": "Täglich durchgehend warme Küche.",
      "indoor_seating": "yes",
      "name": "Restaurant Palmyra",
      "opening_hours": "12:00-24:00",
      "operator": "H. Arour",
      "outdoor_seating": "yes",
      "phone": "+49 611 522121",
      "wheelchair": "no"
    }
  },
  {
    "id": 832849026,
    "name": "Restaurant Ente",
    "address": {
      "street": "Kaiser-Friedrich-Platz",
      "housenumber": "3-4",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "website": "https://www.nassauer-hof.de/de/restaurant-ente"
    },
    "wheelchair": "limited",
    "lat": 50.0850746,
    "lon": 8.2441665,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "3-4",
      "addr:postcode": "65183",
      "addr:street": "Kaiser-Friedrich-Platz",
      "amenity": "restaurant",
      "name": "Restaurant Ente",
      "website": "https://www.nassauer-hof.de/de/restaurant-ente",
      "wheelchair": "limited"
    }
  },
  {
    "id": 832849414,
    "name": "Benner's",
    "openingHours": {
      "raw": "Mo-Th 11:30-01:00, Fr,Sa 11:30-02:00, Su 11:00-01:00",
      "signed": false
    },
    "wheelchair": "yes",
    "wheelchairDescription": "Toilette im Kurhaus",
    "toiletsWheelchair": "yes",
    "lat": 50.085026,
    "lon": 8.2473689,
    "tags": {
      "amenity": "restaurant",
      "name": "Benner's",
      "old_name": "Käfer's Bistro",
      "opening_hours": "Mo-Th 11:30-01:00, Fr,Sa 11:30-02:00, Su 11:00-01:00",
      "toilets:wheelchair": "yes",
      "wheelchair": "yes",
      "wheelchair:description": "Toilette im Kurhaus"
    }
  },
  {
    "id": 832866755,
    "name": "Pizzeria Toscana",
    "cuisine": [
      "italian"
    ],
    "contact": {
      "website": "http://www.pizzeriatoscana-wiesbaden.de"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:00-22:00, PH 17:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "no",
    "lat": 50.0764635,
    "lon": 8.2397983,
    "tags": {
      "amenity": "restaurant",
      "check_date:opening_hours": "2025-02-25",
      "cuisine": "italian",
      "indoor_seating": "yes",
      "name": "Pizzeria Toscana",
      "opening_hours": "Mo-Fr 11:00-22:00, PH 17:00-22:00",
      "outdoor_seating": "yes",
      "website": "http://www.pizzeriatoscana-wiesbaden.de",
      "wheelchair": "no"
    }
  },
  {
    "id": 832868288,
    "name": "Sombrero Latino",
    "cuisine": [
      "latin_american"
    ],
    "contact": {
      "phone": "+49 611 3083822"
    },
    "openingHours": {
      "raw": "Mo-Sa 17:30+",
      "signed": false
    },
    "wheelchair": "no",
    "lat": 50.0768204,
    "lon": 8.2397264,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "latin_american",
      "name": "Sombrero Latino",
      "opening_hours": "Mo-Sa 17:30+",
      "phone": "+49 611 3083822",
      "wheelchair": "no"
    }
  },
  {
    "id": 832897140,
    "name": "Erawan",
    "cuisine": [
      "thai"
    ],
    "address": {
      "street": "Taunusstraße",
      "housenumber": "59"
    },
    "wheelchair": "no",
    "lat": 50.0893136,
    "lon": 8.2393705,
    "tags": {
      "addr:housenumber": "59",
      "addr:street": "Taunusstraße",
      "amenity": "restaurant",
      "cuisine": "thai",
      "name": "Erawan",
      "wheelchair": "no"
    }
  },
  {
    "id": 833338841,
    "name": "Huacas Peru",
    "address": {
      "street": "Stiftstraße",
      "housenumber": "12",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49611 88020158",
      "website": "https://www.huacas-peru.com/"
    },
    "openingHours": {
      "raw": "Mo off; We-Fr 17:00-23:00; Sa 12:00-23:00; Su 12:00-22:00",
      "signed": false
    },
    "wheelchair": "limited",
    "lat": 50.0889501,
    "lon": 8.2371302,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "12",
      "addr:postcode": "65183",
      "addr:street": "Stiftstraße",
      "amenity": "restaurant",
      "name": "Huacas Peru",
      "opening_hours": "Mo off; We-Fr 17:00-23:00; Sa 12:00-23:00; Su 12:00-22:00",
      "phone": "+49611 88020158",
      "website": "https://www.huacas-peru.com/",
      "wheelchair": "limited"
    }
  },
  {
    "id": 833343351,
    "name": "M Restaurant",
    "lat": 50.0888588,
    "lon": 8.2401248,
    "tags": {
      "amenity": "restaurant",
      "name": "M Restaurant"
    }
  },
  {
    "id": 833343368,
    "name": "Grand Asia",
    "cuisine": [
      "asian"
    ],
    "address": {
      "street": "Taunusstraße",
      "housenumber": "22",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+4961158043668",
      "website": "https://wiesbaden.grand-asia.de/"
    },
    "openingHours": {
      "raw": "Mo-Do 17:00-23:00, Fr-So 12:00-23:30",
      "signed": false
    },
    "lat": 50.0876741,
    "lon": 8.2414033,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "22",
      "addr:postcode": "65183",
      "addr:street": "Taunusstraße",
      "amenity": "restaurant",
      "cuisine": "asian",
      "name": "Grand Asia",
      "opening_hours": "Mo-Do 17:00-23:00, Fr-So 12:00-23:30",
      "phone": "+4961158043668",
      "website": "https://wiesbaden.grand-asia.de/"
    }
  },
  {
    "id": 833343370,
    "name": "Il Gondoliere",
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "limited",
    "lat": 50.0880713,
    "lon": 8.2413095,
    "tags": {
      "amenity": "restaurant",
      "indoor_seating": "yes",
      "name": "Il Gondoliere",
      "outdoor_seating": "yes",
      "wheelchair": "limited"
    }
  },
  {
    "id": 892557585,
    "name": "Pizzeria Laguna",
    "openingHours": {
      "raw": "Mo-Fr 11:30-14:30,18:00-23:00, Sa,PH 18:00-23:00",
      "signed": false
    },
    "lat": 50.0658286,
    "lon": 8.2554757,
    "tags": {
      "amenity": "restaurant",
      "name": "Pizzeria Laguna",
      "opening_hours": "Mo-Fr 11:30-14:30,18:00-23:00, Sa,PH 18:00-23:00"
    }
  },
  {
    "id": 985925300,
    "name": "Monte",
    "address": {
      "street": "Lothringer Straße",
      "housenumber": "34",
      "postcode": "65195",
      "city": "Wiesbaden"
    },
    "openingHours": {
      "raw": "no",
      "signed": false
    },
    "outdoorSeating": true,
    "wheelchair": "no",
    "level": "0",
    "lat": 50.0824051,
    "lon": 8.2221727,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "34",
      "addr:postcode": "65195",
      "addr:street": "Lothringer Straße",
      "amenity": "restaurant",
      "check_date:opening_hours": "2023-02-12",
      "level": "0",
      "name": "Monte",
      "opening_hours:signed": "no",
      "outdoor_seating": "yes",
      "wheelchair": "no"
    }
  },
  {
    "id": 1106398370,
    "name": "Cafe Bistrorante Pizzeria Milano",
    "cuisine": [
      "italian",
      "pizza"
    ],
    "address": {
      "street": "Dostojewskistraße",
      "housenumber": "14",
      "postcode": "65187",
      "city": "Wiesbaden"
    },
    "contact": {
      "website": "https://www.lieferando.de/cafe-bistrorante-pizzeria-milano"
    },
    "openingHours": {
      "raw": "Mo-Su 10:30-21:00",
      "signed": false
    },
    "lat": 50.0665695,
    "lon": 8.2246825,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "14",
      "addr:postcode": "65187",
      "addr:street": "Dostojewskistraße",
      "amenity": "restaurant",
      "cuisine": "italian;pizza",
      "name": "Cafe Bistrorante Pizzeria Milano",
      "opening_hours": "Mo-Su 10:30-21:00",
      "website": "https://www.lieferando.de/cafe-bistrorante-pizzeria-milano"
    }
  },
  {
    "id": 1129845327,
    "name": "Waldstuben",
    "indoorSeating": true,
    "outdoorSeating": true,
    "lat": 50.0626969,
    "lon": 8.2307084,
    "tags": {
      "amenity": "restaurant",
      "indoor_seating": "yes",
      "name": "Waldstuben",
      "outdoor_seating": "yes"
    }
  },
  {
    "id": 1232334098,
    "name": "Restaurant Simone",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Hellmundstraße",
      "housenumber": "22",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 402593",
      "email": "restaurantsimone@outlook.de",
      "facebook": "https://www.facebook.com/simonefamilie/"
    },
    "openingHours": {
      "raw": "Mo-Th 11:30-14:30,17:00-24:00, Fr 11:30-14:30,17:00-01:00, Sa,PH 17:00-01:00",
      "signed": false
    },
    "outdoorSeating": true,
    "wheelchair": "limited",
    "lat": 50.0804235,
    "lon": 8.2328973,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "22",
      "addr:postcode": "65183",
      "addr:street": "Hellmundstraße",
      "amenity": "restaurant",
      "check_date": "2025-02-10",
      "contact:facebook": "https://www.facebook.com/simonefamilie/",
      "cuisine": "italian",
      "email": "restaurantsimone@outlook.de",
      "name": "Restaurant Simone",
      "opening_hours": "Mo-Th 11:30-14:30,17:00-24:00, Fr 11:30-14:30,17:00-01:00, Sa,PH 17:00-01:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 402593",
      "wheelchair": "limited"
    }
  },
  {
    "id": 1268675849,
    "name": "Das Lokal",
    "address": {
      "street": "Sedanplatz",
      "housenumber": "2",
      "postcode": "65195",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 9450784",
      "email": "Alexander.Sarac@t-online.de"
    },
    "openingHours": {
      "raw": "Tu-Sa 12:00+; Su 10:00+",
      "signed": false
    },
    "wheelchair": "no",
    "smoking": "outside",
    "payment": {
      "cash": true,
      "girocard": true
    },
    "operator": "Alexander Sarac",
    "lat": 50.0831261,
    "lon": 8.2284409,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "2",
      "addr:postcode": "65195",
      "addr:street": "Sedanplatz",
      "amenity": "restaurant",
      "check_date": "2024-12-20",
      "email": "Alexander.Sarac@t-online.de",
      "name": "Das Lokal",
      "opening_hours": "Tu-Sa 12:00+; Su 10:00+",
      "operator": "Alexander Sarac",
      "payment:cash": "yes",
      "payment:girocard": "yes",
      "phone": "+49 611 9450784",
      "smoking": "outside",
      "wheelchair": "no"
    }
  },
  {
    "id": 1281700870,
    "name": "Sufi",
    "cuisine": [
      "persian"
    ],
    "address": {
      "street": "Dotzheimer Straße",
      "housenumber": "22",
      "postcode": "65185",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 1666909",
      "website": "http://www.sufi-restaurant.de",
      "fax": "+49 611 1666913"
    },
    "openingHours": {
      "raw": "Tu-Fr 11:30-15:30,18:00-23:30; Sa-Su 11:30-23:30",
      "signed": false
    },
    "wheelchair": "no",
    "operator": "Mehran Sheikh Solimany",
    "lat": 50.0784497,
    "lon": 8.2336812,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "22",
      "addr:postcode": "65185",
      "addr:street": "Dotzheimer Straße",
      "amenity": "restaurant",
      "cuisine": "persian",
      "fax": "+49 611 1666913",
      "name": "Sufi",
      "opening_hours": "Tu-Fr 11:30-15:30,18:00-23:30; Sa-Su 11:30-23:30",
      "operator": "Mehran Sheikh Solimany",
      "phone": "+49 611 1666909",
      "website": "http://www.sufi-restaurant.de",
      "wheelchair": "no"
    }
  },
  {
    "id": 1332236136,
    "name": "Fasan",
    "cuisine": [
      "afghan"
    ],
    "address": {
      "street": "Friedrichstraße",
      "housenumber": "57",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49611377137",
      "website": "http://www.fasan-online.de"
    },
    "openingHours": {
      "raw": "Mo-Su 10:00-18:00",
      "signed": false
    },
    "wheelchair": "yes",
    "toiletsWheelchair": "no",
    "diet": {
      "vegetarian": true
    },
    "lat": 50.0802975,
    "lon": 8.2366111,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "57",
      "addr:postcode": "65185",
      "addr:street": "Friedrichstraße",
      "amenity": "restaurant",
      "cuisine": "afghan",
      "diet:vegetarian": "yes",
      "name": "Fasan",
      "opening_hours": "Mo-Su 10:00-18:00",
      "phone": "+49611377137",
      "toilets:wheelchair": "no",
      "website": "http://www.fasan-online.de",
      "wheelchair": "yes"
    }
  },
  {
    "id": 1434168597,
    "name": "MoschMosch",
    "cuisine": [
      "japanese"
    ],
    "contact": {
      "phone": "+49 611 3346973",
      "website": "https://www.moschmosch.com/"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:00-23:00; Su 13:00-22:00",
      "signed": false
    },
    "wheelchair": "limited",
    "toiletsWheelchair": "no",
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "internetAccess": "no",
    "lat": 50.0840995,
    "lon": 8.243605,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "japanese",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "internet_access": "no",
      "name": "MoschMosch",
      "opening_hours": "Mo-Sa 11:00-23:00; Su 13:00-22:00",
      "phone": "+49 611 3346973",
      "toilets:wheelchair": "no",
      "website": "https://www.moschmosch.com/",
      "wheelchair": "limited"
    }
  },
  {
    "id": 1440306346,
    "name": "",
    "cuisine": [
      "german"
    ],
    "address": {
      "street": "Friedrich-Ebert-Allee",
      "housenumber": "12",
      "postcode": "65185",
      "city": "Wiesbaden",
      "housename": "Hessisches Ministerium des Innern"
    },
    "contact": {
      "phone": "+49 611 1608740",
      "website": "https://www.hmdi.hessen.de/"
    },
    "openingHours": {
      "raw": "11:30-14:00",
      "signed": false
    },
    "outdoorSeating": false,
    "wheelchair": "limited",
    "wheelchairDescription": "Rollstuhlfahrer melden sich an der Pforte",
    "takeaway": true,
    "smoking": "no",
    "capacity": 300,
    "lat": 50.0724362,
    "lon": 8.2471965,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housename": "Hessisches Ministerium des Innern",
      "addr:housenumber": "12",
      "addr:postcode": "65185",
      "addr:street": "Friedrich-Ebert-Allee",
      "amenity": "restaurant",
      "capacity": "300",
      "cuisine": "german",
      "opening_hours": "11:30-14:00",
      "outdoor_seating": "no",
      "phone": "+49 611 1608740",
      "smoking": "no",
      "takeaway": "yes",
      "website": "https://www.hmdi.hessen.de/",
      "wheelchair": "limited",
      "wheelchair:description": "Rollstuhlfahrer melden sich an der Pforte"
    }
  },
  {
    "id": 1628050540,
    "name": "Kaoru",
    "cuisine": [
      "sushi"
    ],
    "openingHours": {
      "raw": "no",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": false,
    "lat": 50.0782358,
    "lon": 8.2278801,
    "tags": {
      "amenity": "restaurant",
      "check_date:opening_hours": "2025-03-30",
      "cuisine": "sushi",
      "indoor_seating": "yes",
      "name": "Kaoru",
      "opening_hours:signed": "no",
      "outdoor_seating": "no"
    }
  },
  {
    "id": 1642201640,
    "name": "Scheffelstuben",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Scheffelstraße",
      "housenumber": "1",
      "postcode": "65187",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 809253"
    },
    "openingHours": {
      "raw": "11:30-14:15,18:00-23:30; We off",
      "signed": false
    },
    "wheelchair": "no",
    "operator": "Camillo Di Nardo",
    "lat": 50.072092,
    "lon": 8.2345992,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "1",
      "addr:postcode": "65187",
      "addr:street": "Scheffelstraße",
      "amenity": "restaurant",
      "cuisine": "italian",
      "name": "Scheffelstuben",
      "opening_hours": "11:30-14:15,18:00-23:30; We off",
      "operator": "Camillo Di Nardo",
      "phone": "+49 611 809253",
      "wheelchair": "no"
    }
  },
  {
    "id": 1769512346,
    "name": "Pizza Hut",
    "cuisine": [
      "pizza"
    ],
    "address": {
      "street": "Mainzer Straße",
      "housenumber": "99",
      "postcode": "65189",
      "housename": "Pizza Hut"
    },
    "contact": {
      "website": "https://www.pizzahut.de"
    },
    "wheelchair": "yes",
    "diet": {
      "vegetarian": true
    },
    "brand": "Pizza Hut",
    "lat": 50.0639544,
    "lon": 8.2514041,
    "tags": {
      "addr:housename": "Pizza Hut",
      "addr:housenumber": "99",
      "addr:postcode": "65189",
      "addr:street": "Mainzer Straße",
      "amenity": "restaurant",
      "brand": "Pizza Hut",
      "brand:wikidata": "Q191615",
      "cuisine": "pizza",
      "diet:vegetarian": "yes",
      "name": "Pizza Hut",
      "website": "https://www.pizzahut.de",
      "wheelchair": "yes"
    }
  },
  {
    "id": 1769515840,
    "name": "Camera",
    "cuisine": [
      "german",
      "italian",
      "pizza"
    ],
    "address": {
      "street": "Unter den Eichen",
      "housenumber": "5",
      "postcode": "65195"
    },
    "contact": {
      "phone": "+49 611 89077890",
      "email": "restaurant.camera@gmx.de",
      "facebook": "https://www.facebook.com/CameraMensa/"
    },
    "openingHours": {
      "raw": "Mo-Th 11:30-14:00; Fr 09:00-16:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "diet": {
      "vegan": false,
      "vegetarian": "limited"
    },
    "smoking": "outside",
    "lat": 50.097817,
    "lon": 8.2167624,
    "tags": {
      "addr:housenumber": "5",
      "addr:postcode": "65195",
      "addr:street": "Unter den Eichen",
      "amenity": "restaurant",
      "contact:email": "restaurant.camera@gmx.de",
      "contact:facebook": "https://www.facebook.com/CameraMensa/",
      "contact:phone": "+49 611 89077890",
      "cuisine": "german;italian;pizza",
      "diet:vegan": "no",
      "diet:vegetarian": "limited",
      "indoor_seating": "yes",
      "name": "Camera",
      "opening_hours": "Mo-Th 11:30-14:00; Fr 09:00-16:00",
      "outdoor_seating": "yes",
      "smoking": "outside"
    }
  },
  {
    "id": 1809203992,
    "name": "Mac Döner",
    "cuisine": [
      "turkish"
    ],
    "address": {
      "street": "Dotzheimer Straße",
      "housenumber": "61",
      "postcode": "65197",
      "city": "Wiesbaden"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:00-21:00; Sa off; Su 12:00-21:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "no",
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "smoking": "no",
    "lat": 50.0781529,
    "lon": 8.226964,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "61",
      "addr:postcode": "65197",
      "addr:street": "Dotzheimer Straße",
      "amenity": "restaurant",
      "cuisine": "turkish",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "name": "Mac Döner",
      "opening_hours": "Mo-Fr 11:00-21:00; Sa off; Su 12:00-21:00",
      "outdoor_seating": "yes",
      "smoking": "no",
      "wheelchair": "no"
    }
  },
  {
    "id": 1835369402,
    "name": "Pizzeria Di Grazia",
    "cuisine": [
      "pizza"
    ],
    "address": {
      "street": "Bismarckring",
      "housenumber": "11",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 36088874",
      "facebook": "https://www.facebook.com/PizzeriaDiGrazia/"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:00-22:00; Su 17:00-22:00",
      "signed": false
    },
    "wheelchair": "no",
    "diet": {
      "vegan": false,
      "vegetarian": true
    },
    "delivery": true,
    "lat": 50.0794072,
    "lon": 8.2299872,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "11",
      "addr:postcode": "65183",
      "addr:street": "Bismarckring",
      "amenity": "restaurant",
      "check_date:opening_hours": "2025-03-30",
      "cuisine": "pizza",
      "delivery": "yes",
      "diet:vegan": "no",
      "diet:vegetarian": "yes",
      "facebook": "https://www.facebook.com/PizzeriaDiGrazia/",
      "name": "Pizzeria Di Grazia",
      "opening_hours": "Mo-Fr 11:00-22:00; Su 17:00-22:00",
      "phone": "+49 611 36088874",
      "wheelchair": "no"
    }
  },
  {
    "id": 1906700149,
    "name": "Kebab Haus",
    "cuisine": [
      "kebab"
    ],
    "address": {
      "street": "Moritzstraße",
      "housenumber": "11",
      "postcode": "65185",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "wheelchair": "limited",
    "toiletsWheelchair": "no",
    "diet": {
      "vegetarian": true
    },
    "lat": 50.0764238,
    "lon": 8.2382891,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "11",
      "addr:postcode": "65185",
      "addr:street": "Moritzstraße",
      "amenity": "restaurant",
      "cuisine": "kebab",
      "diet:vegetarian": "yes",
      "name": "Kebab Haus",
      "toilets:wheelchair": "no",
      "wheelchair": "limited"
    }
  },
  {
    "id": 1906768714,
    "name": "Pizza Fritze",
    "cuisine": [
      "pizza"
    ],
    "lat": 50.0764308,
    "lon": 8.2386331,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "pizza",
      "name": "Pizza Fritze"
    }
  },
  {
    "id": 1952328065,
    "name": "Sausalitos",
    "cuisine": [
      "mexican"
    ],
    "address": {
      "street": "Goldgasse",
      "housenumber": "4",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "website": "https://www.sausalitos.de/standorte/sausalitos-wiesbaden"
    },
    "openingHours": {
      "raw": "Mo-Th 17:00-24:00; Fr-Sa 17:00-02:00; Su off",
      "signed": false
    },
    "indoorSeating": true,
    "brand": "Sausalitos",
    "lat": 50.0837793,
    "lon": 8.2412657,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "4",
      "addr:postcode": "65183",
      "addr:street": "Goldgasse",
      "amenity": "restaurant",
      "brand": "Sausalitos",
      "brand:wikidata": "Q2227783",
      "cuisine": "mexican",
      "indoor_seating": "yes",
      "name": "Sausalitos",
      "opening_hours": "Mo-Th 17:00-24:00; Fr-Sa 17:00-02:00; Su off",
      "website": "https://www.sausalitos.de/standorte/sausalitos-wiesbaden"
    }
  },
  {
    "id": 1976794851,
    "name": "Pescaletta Fisch Pasta",
    "cuisine": [
      "fish",
      "french",
      "greek",
      "spanish",
      "italian"
    ],
    "address": {
      "street": "Rheinstraße",
      "housenumber": "26",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 44750057",
      "website": "https://www.pescaletta.de"
    },
    "openingHours": {
      "raw": "Mo-Fr 12:00-15:00, 18:00-22:00; Sa 18:00-22:00",
      "signed": false
    },
    "lat": 50.0776124,
    "lon": 8.2419281,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "26",
      "addr:postcode": "65185",
      "addr:street": "Rheinstraße",
      "amenity": "restaurant",
      "contact:phone": "+49 611 44750057",
      "contact:website": "https://www.pescaletta.de",
      "cuisine": "fish;french;greek;spanish;italian",
      "name": "Pescaletta Fisch Pasta",
      "opening_hours": "Mo-Fr 12:00-15:00, 18:00-22:00; Sa 18:00-22:00",
      "phone": "+49 611 44750057",
      "website": "https://www.pescaletta.de"
    }
  },
  {
    "id": 2097998715,
    "name": "Pizza Rimini",
    "cuisine": [
      "pizza"
    ],
    "address": {
      "street": "Aarstraße",
      "housenumber": "23",
      "postcode": "65195",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+496114050513"
    },
    "openingHours": {
      "raw": "Tu-Sa 11:30-14:00,17:00-22:30, Su 16:00-22:30",
      "signed": false
    },
    "delivery": true,
    "lat": 50.0870098,
    "lon": 8.2221473,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "23",
      "addr:postcode": "65195",
      "addr:street": "Aarstraße",
      "amenity": "restaurant",
      "cuisine": "pizza",
      "delivery": "yes",
      "name": "Pizza Rimini",
      "opening_hours": "Tu-Sa 11:30-14:00,17:00-22:30, Su 16:00-22:30",
      "phone": "+496114050513"
    }
  },
  {
    "id": 2129492894,
    "name": "Pizzeria Da Giovanni",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Albrecht-Dürer-Straße",
      "housenumber": "30",
      "postcode": "65195",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 402255"
    },
    "openingHours": {
      "raw": "Tu-Sa 11:30-15:00,17:30-22:30, Su 11:30-22:30",
      "signed": false
    },
    "outdoorSeating": true,
    "wheelchair": "limited",
    "lat": 50.0888366,
    "lon": 8.2202535,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "30",
      "addr:postcode": "65195",
      "addr:street": "Albrecht-Dürer-Straße",
      "amenity": "restaurant",
      "check_date": "2024-12-27",
      "cuisine": "italian",
      "name": "Pizzeria Da Giovanni",
      "opening_hours": "Tu-Sa 11:30-15:00,17:30-22:30, Su 11:30-22:30",
      "outdoor_seating": "yes",
      "phone": "+49 611 402255",
      "wheelchair": "limited"
    }
  },
  {
    "id": 2190254105,
    "name": "Sahara",
    "cuisine": [
      "syrian"
    ],
    "contact": {
      "phone": "+49 611 39316",
      "website": "https://www.sahara-wiesbaden.de/"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:00-22:00",
      "signed": false
    },
    "outdoorSeating": true,
    "wheelchair": "yes",
    "toiletsWheelchair": "yes",
    "diet": {
      "mediterranean": true
    },
    "lat": 50.081737,
    "lon": 8.2372874,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "syrian",
      "diet:mediterranean": "yes",
      "name": "Sahara",
      "opening_hours": "Mo-Sa 11:00-22:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 39316",
      "toilets:wheelchair": "yes",
      "website": "https://www.sahara-wiesbaden.de/",
      "wheelchair": "yes"
    }
  },
  {
    "id": 2209711543,
    "name": "Die Schachtel",
    "lat": 50.0842107,
    "lon": 8.2396156,
    "tags": {
      "amenity": "restaurant",
      "name": "Die Schachtel"
    }
  },
  {
    "id": 2209711560,
    "name": "Günay's Fisch",
    "cuisine": [
      "turkish",
      "seafood"
    ],
    "address": {
      "street": "Schwalbacher Straße",
      "housenumber": "50",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 98867897",
      "email": "info@guenays-fisch.de",
      "website": "https://xn--gnays-fisch-thb.de/index.html"
    },
    "openingHours": {
      "raw": "Mo-Su 10:00-21:30",
      "signed": false
    },
    "lat": 50.0827662,
    "lon": 8.2356369,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "50",
      "addr:postcode": "65183",
      "addr:street": "Schwalbacher Straße",
      "amenity": "restaurant",
      "check_date:opening_hours": "2024-07-11",
      "cuisine": "turkish;seafood",
      "email": "info@guenays-fisch.de",
      "name": "Günay's Fisch",
      "opening_hours": "Mo-Su 10:00-21:30",
      "phone": "+49 611 98867897",
      "website": "https://xn--gnays-fisch-thb.de/index.html"
    }
  },
  {
    "id": 2209711590,
    "name": "Mauritius",
    "cuisine": [
      "german",
      "croatian"
    ],
    "contact": {
      "website": "https://www.restaurant-mauritius.de/"
    },
    "openingHours": {
      "raw": "Tu-Su 11:00-14:30, 17:00-22:00",
      "signed": false
    },
    "lat": 50.0815477,
    "lon": 8.2357603,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "german;croatian",
      "name": "Mauritius",
      "opening_hours": "Tu-Su 11:00-14:30, 17:00-22:00",
      "website": "https://www.restaurant-mauritius.de/"
    }
  },
  {
    "id": 2209711676,
    "name": "Novella",
    "openingHours": {
      "raw": "no",
      "signed": false
    },
    "wheelchair": "no",
    "lat": 50.0818816,
    "lon": 8.2379544,
    "tags": {
      "amenity": "restaurant",
      "check_date:opening_hours": "2024-10-03",
      "name": "Novella",
      "opening_hours:signed": "no",
      "wheelchair": "no"
    }
  },
  {
    "id": 2244638086,
    "name": "Saigon Delis",
    "cuisine": [
      "vietnamese"
    ],
    "address": {
      "street": "Langgasse",
      "housenumber": "3",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+4961198715494",
      "email": "contact@saigondelis.com",
      "website": "https://saigondelis.com"
    },
    "openingHours": {
      "raw": "Mo-Sa 10:30-20:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": false,
    "wheelchair": "yes",
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "internetAccess": "wlan",
    "lat": 50.0828925,
    "lon": 8.2391109,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "3",
      "addr:postcode": "65183",
      "addr:street": "Langgasse",
      "amenity": "restaurant",
      "cuisine": "vietnamese",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "email": "contact@saigondelis.com",
      "indoor_seating": "yes",
      "internet_access": "wlan",
      "name": "Saigon Delis",
      "opening_hours": "Mo-Sa 10:30-20:00",
      "outdoor_seating": "no",
      "phone": "+4961198715494",
      "website": "https://saigondelis.com",
      "wheelchair": "yes"
    }
  },
  {
    "id": 2507993872,
    "name": "JohnaGold",
    "address": {
      "street": "Willy-Brandt-Allee",
      "housenumber": "2a",
      "postcode": "65197",
      "city": "Wiesbaden"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:30-22:30",
      "signed": false
    },
    "diet": {
      "vegan": false,
      "vegetarian": true
    },
    "lat": 50.0696763,
    "lon": 8.2257595,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "2a",
      "addr:postcode": "65197",
      "addr:street": "Willy-Brandt-Allee",
      "amenity": "restaurant",
      "diet:vegan": "no",
      "diet:vegetarian": "yes",
      "name": "JohnaGold",
      "opening_hours": "Mo-Fr 11:30-22:30"
    }
  },
  {
    "id": 2734320385,
    "name": "Pizzaboy",
    "cuisine": [
      "pizza"
    ],
    "address": {
      "street": "Moritzstraße",
      "housenumber": "41",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 6966930"
    },
    "openingHours": {
      "raw": "Su-Th 11:00-23:00; Fr 11:00-24:00; Sa 12:00-24:00",
      "signed": false
    },
    "outdoorSeating": true,
    "wheelchair": "no",
    "delivery": true,
    "takeaway": true,
    "smoking": "outside",
    "lat": 50.072528,
    "lon": 8.238805,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "41",
      "addr:postcode": "65185",
      "addr:street": "Moritzstraße",
      "amenity": "restaurant",
      "cuisine": "pizza",
      "delivery": "yes",
      "name": "Pizzaboy",
      "opening_hours": "Su-Th 11:00-23:00; Fr 11:00-24:00; Sa 12:00-24:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 6966930",
      "smoking": "outside",
      "takeaway": "yes",
      "wheelchair": "no"
    }
  },
  {
    "id": 2743161646,
    "name": "Al Petra",
    "cuisine": [
      "arab"
    ],
    "indoorSeating": true,
    "outdoorSeating": true,
    "diet": {
      "vegetarian": true
    },
    "lat": 50.0745681,
    "lon": 8.2388657,
    "tags": {
      "amenity": "restaurant",
      "check_date": "2025-04-20",
      "check_date:diet:vegetarian": "2025-04-20",
      "cuisine": "arab",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "name": "Al Petra",
      "outdoor_seating": "yes"
    }
  },
  {
    "id": 2857912982,
    "name": "Wagner im Opelbad",
    "cuisine": [
      "italian"
    ],
    "address": {
      "housenumber": "2",
      "postcode": "65193",
      "city": "Wiesbaden",
      "place": "Neroberg"
    },
    "contact": {
      "phone": "+49 611 525100",
      "email": "info@wagner-gastronomie.de",
      "website": "https://www.wagner-gastronomie.de/",
      "fax": "+49 611 599568"
    },
    "openingHours": {
      "raw": "Tu-Su 12:00-22:00",
      "signed": false
    },
    "outdoorSeating": true,
    "reservation": true,
    "level": "1",
    "lat": 50.0976049,
    "lon": 8.2319842,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "2",
      "addr:place": "Neroberg",
      "addr:postcode": "65193",
      "amenity": "restaurant",
      "cuisine": "italian",
      "email": "info@wagner-gastronomie.de",
      "fax": "+49 611 599568",
      "level": "1",
      "name": "Wagner im Opelbad",
      "opening_hours": "Tu-Su 12:00-22:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 525100",
      "ref:vatin": "4022915858",
      "reservation": "yes",
      "website": "https://www.wagner-gastronomie.de/"
    }
  },
  {
    "id": 2932603239,
    "name": "Die Waffel",
    "cuisine": [
      "afghan"
    ],
    "address": {
      "street": "Michelsberg",
      "housenumber": "18",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 1377698",
      "website": "http://die-waffel.com/"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:00-21:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "limited",
    "toiletsWheelchair": "no",
    "diet": {
      "vegetarian": true
    },
    "lat": 50.08283,
    "lon": 8.2376894,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "18",
      "addr:postcode": "65183",
      "addr:street": "Michelsberg",
      "amenity": "restaurant",
      "cuisine": "afghan",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "name": "Die Waffel",
      "opening_hours": "Mo-Sa 11:00-21:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 1377698",
      "toilets:wheelchair": "no",
      "website": "http://die-waffel.com/",
      "wheelchair": "limited"
    }
  },
  {
    "id": 3053265953,
    "name": "Çiğköftem Wiesbaden",
    "cuisine": [
      "turkish"
    ],
    "address": {
      "street": "Dotzheimer Straße",
      "housenumber": "135a",
      "postcode": "65197",
      "city": "Wiesbaden"
    },
    "contact": {
      "facebook": "https://www.facebook.com/CigkoftemWiesbaden"
    },
    "lat": 50.0770006,
    "lon": 8.2145675,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "135a",
      "addr:postcode": "65197",
      "addr:street": "Dotzheimer Straße",
      "amenity": "restaurant",
      "contact:facebook": "https://www.facebook.com/CigkoftemWiesbaden",
      "cuisine": "turkish",
      "name": "Çiğköftem Wiesbaden"
    }
  },
  {
    "id": 3073877795,
    "name": "Symposion",
    "cuisine": [
      "greek"
    ],
    "address": {
      "street": "Dotzheimer Straße",
      "housenumber": "24-26",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 372336",
      "facebook": "https://de-de.facebook.com/Symposion-150183011684162/"
    },
    "openingHours": {
      "raw": "Mo 11:30-15:00, 17:30-00:00; We-Fr 11:30-15:00, 17:30-00:00; Sa 17:30-00:00",
      "signed": false
    },
    "outdoorSeating": true,
    "smoking": "outside",
    "lat": 50.0781451,
    "lon": 8.2336435,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "24-26",
      "addr:postcode": "65185",
      "addr:street": "Dotzheimer Straße",
      "amenity": "restaurant",
      "contact:facebook": "https://de-de.facebook.com/Symposion-150183011684162/",
      "cuisine": "greek",
      "name": "Symposion",
      "opening_hours": "Mo 11:30-15:00, 17:30-00:00; We-Fr 11:30-15:00, 17:30-00:00; Sa 17:30-00:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 372336",
      "smoking": "outside"
    }
  },
  {
    "id": 3074606553,
    "name": "5-Mini-Kitchen Asia Restaurant Sushi",
    "cuisine": [
      "sushi"
    ],
    "address": {
      "street": "Moritzstraße",
      "housenumber": "8",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 44757888",
      "email": "info@5mini-kitchen.de",
      "website": "https://5mini-kitchen.de/"
    },
    "openingHours": {
      "raw": "Mo 11:00-22:00,We-Th 11:00-22:00,Fr-Su 11:00-23:00; PH 11:00-23:00",
      "signed": false
    },
    "lat": 50.0768082,
    "lon": 8.2385734,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "8",
      "addr:postcode": "65185",
      "addr:street": "Moritzstraße",
      "amenity": "restaurant",
      "cuisine": "sushi",
      "email": "info@5mini-kitchen.de",
      "name": "5-Mini-Kitchen Asia Restaurant Sushi",
      "opening_hours": "Mo 11:00-22:00,We-Th 11:00-22:00,Fr-Su 11:00-23:00; PH 11:00-23:00",
      "phone": "+49 611 44757888",
      "website": "https://5mini-kitchen.de/"
    }
  },
  {
    "id": 3081917335,
    "name": "Der Andechser im Ratskeller",
    "address": {
      "street": "Schloßplatz",
      "housenumber": "6",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49611300023",
      "website": "http://www.derandechser-wiesbaden.de"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:00-24:00, Su,PH 11:00-23:00",
      "signed": false
    },
    "wheelchair": "yes",
    "wheelchairDescription": "Rollstuhlfahrer/innen benutzen bitte den Seiteneingang, denn dort befindet sich der Aufzug! Brave Hunde dürfen mitgebracht werden :-) Mo-Sa 11 - 24Uhr, So/Feiertage bis 23Uhr",
    "toiletsWheelchair": "yes",
    "diet": {
      "vegan": false,
      "vegetarian": true
    },
    "lat": 50.0817112,
    "lon": 8.2417434,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "6",
      "addr:postcode": "65183",
      "addr:street": "Schloßplatz",
      "amenity": "restaurant",
      "diet:vegan": "no",
      "diet:vegetarian": "yes",
      "name": "Der Andechser im Ratskeller",
      "note": "Im Sommer gibt es auch einen Biergarten",
      "opening_hours": "Mo-Sa 11:00-24:00, Su,PH 11:00-23:00",
      "phone": "+49611300023",
      "toilets:wheelchair": "yes",
      "website": "http://www.derandechser-wiesbaden.de",
      "wheelchair": "yes",
      "wheelchair:description": "Rollstuhlfahrer/innen benutzen bitte den Seiteneingang, denn dort befindet sich der Aufzug! Brave Hunde dürfen mitgebracht werden :-) Mo-Sa 11 - 24Uhr, So/Feiertage bis 23Uhr"
    }
  },
  {
    "id": 3104066557,
    "name": "Zum Uhrturm",
    "address": {
      "street": "Marktstraße",
      "housenumber": "15",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "openingHours": {
      "raw": "Tu-Fr 11:30-14:30,16:30-22:00; Sa 11:30-22:00; Su,Mo,PH off",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "limited",
    "lat": 50.082475,
    "lon": 8.2403193,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "15",
      "addr:postcode": "65183",
      "addr:street": "Marktstraße",
      "amenity": "restaurant",
      "indoor_seating": "yes",
      "name": "Zum Uhrturm",
      "name:de": "Zum Uhrturm",
      "opening_hours": "Tu-Fr 11:30-14:30,16:30-22:00; Sa 11:30-22:00; Su,Mo,PH off",
      "outdoor_seating": "yes",
      "wheelchair": "limited"
    }
  },
  {
    "id": 3147155092,
    "name": "Pizzeria Diana",
    "cuisine": [
      "pizza"
    ],
    "lat": 50.0771279,
    "lon": 8.2200112,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "pizza",
      "name": "Pizzeria Diana"
    }
  },
  {
    "id": 3226144297,
    "name": "Kaiserpalast",
    "cuisine": [
      "chinese"
    ],
    "address": {
      "street": "Schiersteiner Straße",
      "postcode": "65187",
      "city": "Wiesbaden"
    },
    "openingHours": {
      "raw": "11:30-15:00,17:30-22:30; Tu off",
      "signed": false
    },
    "wheelchair": "yes",
    "toiletsWheelchair": "no",
    "lat": 50.0672998,
    "lon": 8.2232458,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:postcode": "65187",
      "addr:street": "Schiersteiner Straße",
      "amenity": "restaurant",
      "cuisine": "chinese",
      "name": "Kaiserpalast",
      "opening_hours": "11:30-15:00,17:30-22:30; Tu off",
      "toilets:wheelchair": "no",
      "wheelchair": "yes"
    }
  },
  {
    "id": 3269537620,
    "name": "Thai Banyan",
    "cuisine": [
      "thai"
    ],
    "address": {
      "street": "Luisenstraße",
      "housenumber": "24",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 6097 9899",
      "website": "http://www.thai-banyan.com/"
    },
    "openingHours": {
      "raw": "Mo-Fr 12:00-15:00,17:30-22:00; Sa,Su 17:00-22:00",
      "signed": false
    },
    "wheelchair": "limited",
    "toiletsWheelchair": "no",
    "diet": {
      "vegetarian": true
    },
    "lat": 50.0790811,
    "lon": 8.2415675,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "24",
      "addr:street": "Luisenstraße",
      "amenity": "restaurant",
      "contact:phone": "+49 611 6097 9899",
      "contact:website": "http://www.thai-banyan.com/",
      "cuisine": "thai",
      "diet:vegetarian": "yes",
      "name": "Thai Banyan",
      "opening_hours": "Mo-Fr 12:00-15:00,17:30-22:00; Sa,Su 17:00-22:00",
      "toilets:wheelchair": "no",
      "wheelchair": "limited"
    }
  },
  {
    "id": 3282474708,
    "name": "Alt Wiesbaden",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Kurt-Schumacher-Ring",
      "housenumber": "17",
      "postcode": "65197",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 442606",
      "website": "https://www.alt-wiesbaden.de/"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:30-14:00,17:30-23:00; Sa 17:30-23:00; Su 11:30-14:00,17:30-22:00",
      "signed": false
    },
    "lat": 50.0793908,
    "lon": 8.219755,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "17",
      "addr:postcode": "65197",
      "addr:street": "Kurt-Schumacher-Ring",
      "amenity": "restaurant",
      "cuisine": "italian",
      "name": "Alt Wiesbaden",
      "opening_hours": "Mo-Fr 11:30-14:00,17:30-23:00; Sa 17:30-23:00; Su 11:30-14:00,17:30-22:00",
      "phone": "+49 611 442606",
      "website": "https://www.alt-wiesbaden.de/"
    }
  },
  {
    "id": 3290575871,
    "name": "La Costa Pizza Pasta Salate",
    "cuisine": [
      "pizza",
      "italian"
    ],
    "address": {
      "street": "Bismarckring",
      "housenumber": "33",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 23847483"
    },
    "wheelchair": "no",
    "takeaway": true,
    "lat": 50.0814867,
    "lon": 8.229705,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "33",
      "addr:postcode": "65183",
      "addr:street": "Bismarckring",
      "amenity": "restaurant",
      "cuisine": "pizza;italian",
      "name": "La Costa Pizza Pasta Salate",
      "phone": "+49 611 23847483",
      "takeaway": "yes",
      "wheelchair": "no"
    }
  },
  {
    "id": 3290575879,
    "name": "Pizzeria ValDiano",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Sedanplatz",
      "housenumber": "3",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 790 60 673",
      "website": "https://valdiano.de",
      "facebook": "https://www.facebook.com/ValDiano2023"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:30-14:30,17:00-22:30; Sa-Su 17:00-22:30",
      "signed": false
    },
    "delivery": true,
    "takeaway": true,
    "operator": "Nicola Roberto",
    "lat": 50.0828049,
    "lon": 8.2295361,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "3",
      "addr:postcode": "65183",
      "addr:street": "Sedanplatz",
      "amenity": "restaurant",
      "cuisine": "italian",
      "delivery": "yes",
      "facebook": "https://www.facebook.com/ValDiano2023",
      "name": "Pizzeria ValDiano",
      "opening_hours": "Mo-Fr 11:30-14:30,17:00-22:30; Sa-Su 17:00-22:30",
      "operator": "Nicola Roberto",
      "phone": "+49 611 790 60 673",
      "takeaway": "yes",
      "website": "https://valdiano.de"
    }
  },
  {
    "id": 3290575893,
    "name": "Riesling im Hindukusch",
    "cuisine": [
      "afghan"
    ],
    "address": {
      "street": "Seerobenstraße",
      "housenumber": "1",
      "postcode": "65195",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 152 28617523",
      "email": "m.namet@live.de",
      "website": "http://www.rieslingimhindukusch.de/"
    },
    "openingHours": {
      "raw": "Mo-Th 17:00-00:00; Fr,Sa 17:00-01:00",
      "signed": false
    },
    "wheelchair": "no",
    "operator": "Massi Namet",
    "internetAccess": "no",
    "lat": 50.0834117,
    "lon": 8.2286554,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "1",
      "addr:postcode": "65195",
      "addr:street": "Seerobenstraße",
      "amenity": "restaurant",
      "check_date": "2025-04-23",
      "contact:email": "m.namet@live.de",
      "contact:phone": "+49 152 28617523",
      "contact:website": "http://www.rieslingimhindukusch.de/",
      "cuisine": "afghan",
      "internet_access": "no",
      "name": "Riesling im Hindukusch",
      "opening_hours": "Mo-Th 17:00-00:00; Fr,Sa 17:00-01:00",
      "operator": "Massi Namet",
      "wheelchair": "no"
    }
  },
  {
    "id": 3328630324,
    "name": "Chutney's Restaurant",
    "cuisine": [
      "afghan"
    ],
    "address": {
      "street": "Schwalbacher Straße",
      "housenumber": "3",
      "postcode": "65185",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:00-21:00",
      "signed": false
    },
    "smoking": "no",
    "internetAccess": "no",
    "lat": 50.0780816,
    "lon": 8.2369136,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "3",
      "addr:postcode": "65185",
      "addr:street": "Schwalbacher Straße",
      "amenity": "restaurant",
      "cuisine": "afghan",
      "internet_access": "no",
      "name": "Chutney's Restaurant",
      "opening_hours": "Mo-Sa 11:00-21:00",
      "smoking": "no"
    }
  },
  {
    "id": 3417387994,
    "name": "Nam Nam",
    "cuisine": [
      "vietnamese"
    ],
    "contact": {
      "phone": "+4961151011434",
      "website": "https://www.nam-nam.de/"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "no",
    "takeaway": true,
    "lat": 50.0810704,
    "lon": 8.2406976,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "vietnamese",
      "indoor_seating": "yes",
      "name": "Nam Nam",
      "opening_hours": "Mo-Sa 11:00-22:00",
      "outdoor_seating": "yes",
      "phone": "+4961151011434",
      "takeaway": "yes",
      "website": "https://www.nam-nam.de/",
      "wheelchair": "no"
    }
  },
  {
    "id": 3419860893,
    "name": "Du & Ich",
    "address": {
      "street": "Neugasse",
      "housenumber": "18",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "website": "https://du-und-ich.info/"
    },
    "openingHours": {
      "raw": "Mo-Th 08:30-22:30; Fr,Sa 08:30-23:00; Su 09:00-22:30",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "yes",
    "toiletsWheelchair": "no",
    "lat": 50.0818568,
    "lon": 8.2396426,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "18",
      "addr:postcode": "65183",
      "addr:street": "Neugasse",
      "amenity": "restaurant",
      "indoor_seating": "yes",
      "name": "Du & Ich",
      "opening_hours": "Mo-Th 08:30-22:30; Fr,Sa 08:30-23:00; Su 09:00-22:30",
      "outdoor_seating": "yes",
      "toilets:wheelchair": "no",
      "website": "https://du-und-ich.info/",
      "wheelchair": "yes"
    }
  },
  {
    "id": 3472716163,
    "name": "Ochi no Sushiya",
    "cuisine": [
      "japanese"
    ],
    "address": {
      "street": "Albrechtstraße",
      "housenumber": "24",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49-611-36024108",
      "email": "ochinosushiya@gmail.com",
      "website": "http://www.ochinosushiya.de/"
    },
    "openingHours": {
      "raw": "Mo-Sa 17:00-23:00, PH 17:00-23:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": false,
    "diet": {
      "vegetarian": true
    },
    "lat": 50.0742951,
    "lon": 8.239096,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "24",
      "addr:postcode": "65185",
      "addr:street": "Albrechtstraße",
      "amenity": "restaurant",
      "cuisine": "japanese",
      "diet:vegetarian": "yes",
      "email": "ochinosushiya@gmail.com",
      "indoor_seating": "yes",
      "name": "Ochi no Sushiya",
      "opening_hours": "Mo-Sa 17:00-23:00, PH 17:00-23:00",
      "outdoor_seating": "no",
      "phone": "+49-611-36024108",
      "website": "http://www.ochinosushiya.de/"
    }
  },
  {
    "id": 3733613354,
    "name": "La Brasserie",
    "cuisine": [
      "french"
    ],
    "lat": 50.0780279,
    "lon": 8.2404242,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "french",
      "name": "La Brasserie"
    }
  },
  {
    "id": 3829970240,
    "name": "Café de Colombia",
    "cuisine": [
      "colombian"
    ],
    "address": {
      "street": "Dotzheimer Straße",
      "housenumber": "37",
      "postcode": "65185",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 400 200",
      "email": "mail@cafe-de-colombia.de",
      "website": "http://www.cafe-de-colombia.eu/"
    },
    "openingHours": {
      "raw": "Mo-Fr 07:30-19:00; Sa 08:30-14:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "no",
    "lat": 50.0785701,
    "lon": 8.2314355,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "37",
      "addr:postcode": "65185",
      "addr:street": "Dotzheimer Straße",
      "amenity": "restaurant",
      "construction:amenity": "restaurant",
      "contact:email": "mail@cafe-de-colombia.de",
      "contact:phone": "+49 611 400 200",
      "contact:website": "http://www.cafe-de-colombia.eu/",
      "cuisine": "colombian",
      "indoor_seating": "yes",
      "name": "Café de Colombia",
      "opening_hours": "Mo-Fr 07:30-19:00; Sa 08:30-14:00",
      "outdoor_seating": "yes",
      "wheelchair": "no"
    }
  },
  {
    "id": 3829970241,
    "name": "Pizzeria Bacco",
    "cuisine": [
      "pizza",
      "burger"
    ],
    "address": {
      "street": "Dotzheimer Straße",
      "housenumber": "35",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 309376",
      "website": "https://www.legends-pizza-company-dotzheimer-str.de"
    },
    "openingHours": {
      "raw": "Tu-Su 11:30-22:30",
      "signed": false
    },
    "description": "Derzeit nur Lieferando-Bestellungen / Currently Lieferando delivery only",
    "lat": 50.0785879,
    "lon": 8.2317215,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "35",
      "addr:postcode": "65185",
      "addr:street": "Dotzheimer Straße",
      "amenity": "restaurant",
      "cuisine": "pizza;burger",
      "description": "Derzeit nur Lieferando-Bestellungen / Currently Lieferando delivery only",
      "name": "Pizzeria Bacco",
      "opening_hours": "Tu-Su 11:30-22:30",
      "phone": "+49 611 309376",
      "website": "https://www.legends-pizza-company-dotzheimer-str.de"
    }
  },
  {
    "id": 4084661063,
    "name": "Pippo's Trattoria",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Dotzheimer Straße",
      "housenumber": "44",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 900 69 36",
      "email": "info@pippos-trattoria.de",
      "website": "https://www.pippostrattoria-wiesbaden.de/"
    },
    "openingHours": {
      "raw": "Th-Tu 11:30-14:30,17:30-22:30",
      "signed": false
    },
    "outdoorSeating": true,
    "lat": 50.0781728,
    "lon": 8.2308615,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "44",
      "addr:postcode": "65185",
      "addr:street": "Dotzheimer Straße",
      "amenity": "restaurant",
      "cuisine": "italian",
      "email": "info@pippos-trattoria.de",
      "name": "Pippo's Trattoria",
      "opening_hours": "Th-Tu 11:30-14:30,17:30-22:30",
      "outdoor_seating": "yes",
      "phone": "+49 611 900 69 36",
      "website": "https://www.pippostrattoria-wiesbaden.de/"
    }
  },
  {
    "id": 4084661064,
    "name": "Cozy Asian Corner 1989",
    "cuisine": [
      "asian"
    ],
    "address": {
      "street": "Dotzheimer Straße",
      "housenumber": "30",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 3417877;+49 176 61226223",
      "website": "https://www.cozyasiancorner1989.de"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:30-14:30, 17:30-22:00; Sa-Su 17:30-22:30",
      "signed": false
    },
    "outdoorSeating": true,
    "wheelchair": "no",
    "lat": 50.0783457,
    "lon": 8.2326023,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "30",
      "addr:postcode": "65185",
      "addr:street": "Dotzheimer Straße",
      "amenity": "restaurant",
      "cuisine": "asian",
      "name": "Cozy Asian Corner 1989",
      "opening_hours": "Mo-Fr 11:30-14:30, 17:30-22:00; Sa-Su 17:30-22:30",
      "outdoor_seating": "yes",
      "phone": "+49 611 3417877;+49 176 61226223",
      "website": "https://www.cozyasiancorner1989.de",
      "wheelchair": "no"
    }
  },
  {
    "id": 4243497407,
    "name": "Bun Cha Vietnamese Street Food",
    "cuisine": [
      "vietnamese"
    ],
    "contact": {
      "phone": "+4961120577753",
      "website": "http://buncha-wiesbaden.de"
    },
    "openingHours": {
      "raw": "Sa-Su 13:00-23:00, Mo-Fr 12:00-22:00",
      "signed": false
    },
    "lat": 50.088512,
    "lon": 8.2405903,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "vietnamese",
      "name": "Bun Cha Vietnamese Street Food",
      "note": "früher war hier: Pattaya",
      "opening_hours": "Sa-Su 13:00-23:00, Mo-Fr 12:00-22:00",
      "phone": "+4961120577753",
      "website": "http://buncha-wiesbaden.de"
    }
  },
  {
    "id": 4293358689,
    "name": "Ludwig",
    "cuisine": [
      "bavarian"
    ],
    "address": {
      "street": "Wagemannstraße",
      "housenumber": "33-35"
    },
    "contact": {
      "website": "https://www.altstadtludwig-wiesbaden.de/"
    },
    "lat": 50.0836658,
    "lon": 8.240619,
    "tags": {
      "addr:housenumber": "33-35",
      "addr:street": "Wagemannstraße",
      "amenity": "restaurant",
      "cuisine": "bavarian",
      "name": "Ludwig",
      "website": "https://www.altstadtludwig-wiesbaden.de/"
    }
  },
  {
    "id": 4293408991,
    "name": "anstößig Tapas und Wein",
    "address": {
      "street": "Grabenstraße",
      "housenumber": "18",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "website": "https://wiesbaden-eats.com/anstoessig"
    },
    "openingHours": {
      "raw": "We-Fr 17:30+; Sa 15:30-23:00",
      "signed": false
    },
    "outdoorSeating": true,
    "lat": 50.0831,
    "lon": 8.2403799,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "18",
      "addr:postcode": "65183",
      "addr:street": "Grabenstraße",
      "amenity": "restaurant",
      "name": "anstößig Tapas und Wein",
      "opening_hours": "We-Fr 17:30+; Sa 15:30-23:00",
      "outdoor_seating": "yes",
      "website": "https://wiesbaden-eats.com/anstoessig"
    }
  },
  {
    "id": 4348830093,
    "name": "Chutney's",
    "cuisine": [
      "asian"
    ],
    "openingHours": {
      "raw": "Mo-Sa 10:00-20:00",
      "signed": false
    },
    "wheelchair": "yes",
    "takeaway": true,
    "smoking": "no",
    "lat": 50.0785443,
    "lon": 8.23592,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "asian",
      "name": "Chutney's",
      "opening_hours": "Mo-Sa 10:00-20:00",
      "smoking": "no",
      "takeaway": "yes",
      "wheelchair": "yes"
    }
  },
  {
    "id": 4463747358,
    "name": "An’s Kitchen",
    "cuisine": [
      "vietnamese"
    ],
    "address": {
      "street": "Kellerstraße",
      "housenumber": "8",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 15757577"
    },
    "openingHours": {
      "raw": "Mo-Fr 10:30-15:30",
      "signed": false
    },
    "takeaway": true,
    "smoking": "no",
    "level": "0",
    "lat": 50.0887176,
    "lon": 8.2350178,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "8",
      "addr:postcode": "65183",
      "addr:street": "Kellerstraße",
      "amenity": "restaurant",
      "cuisine": "vietnamese",
      "level": "0",
      "name": "An’s Kitchen",
      "opening_hours": "Mo-Fr 10:30-15:30",
      "phone": "+49 611 15757577",
      "smoking": "no",
      "takeaway": "yes"
    }
  },
  {
    "id": 4464930559,
    "name": "Due Amici",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Goldgasse",
      "housenumber": "15-17",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 50595866"
    },
    "openingHours": {
      "raw": "Mo-Th 11:30-24:00; Fr-Sa 11:30-00:30",
      "signed": false
    },
    "outdoorSeating": true,
    "lat": 50.0843731,
    "lon": 8.2405979,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "15-17",
      "addr:postcode": "65183",
      "addr:street": "Goldgasse",
      "amenity": "restaurant",
      "contact:phone": "+49 611 50595866",
      "cuisine": "italian",
      "name": "Due Amici",
      "opening_hours": "Mo-Th 11:30-24:00; Fr-Sa 11:30-00:30",
      "outdoor_seating": "yes"
    }
  },
  {
    "id": 4486338967,
    "name": "Sokusai Yumei",
    "cuisine": [
      "japanese"
    ],
    "address": {
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "website": "https://www.sokusai-wiesbaden.de/"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:30-15:00,17:30-23:30; Sa,Su 12:00-23:30",
      "signed": false
    },
    "lat": 50.0781407,
    "lon": 8.2430243,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:postcode": "65185",
      "amenity": "restaurant",
      "cuisine": "japanese",
      "name": "Sokusai Yumei",
      "opening_hours": "Mo-Fr 11:30-15:00,17:30-23:30; Sa,Su 12:00-23:30",
      "website": "https://www.sokusai-wiesbaden.de/"
    }
  },
  {
    "id": 4565360237,
    "name": "Viva Los Tioz",
    "cuisine": [
      "spanish"
    ],
    "lat": 50.0838282,
    "lon": 8.2405667,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "spanish",
      "name": "Viva Los Tioz"
    }
  },
  {
    "id": 4577312807,
    "name": "Saytoune",
    "cuisine": [
      "arab"
    ],
    "address": {
      "street": "Wilhelmstraße",
      "housenumber": "52",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 3086110",
      "email": "welcome@saytoune.de",
      "website": "https://www.saytoune.de/"
    },
    "openingHours": {
      "raw": "Mo-Su 12:00-23:30",
      "signed": false
    },
    "wheelchair": "limited",
    "toiletsWheelchair": "yes",
    "lat": 50.0841818,
    "lon": 8.2435065,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "52",
      "addr:postcode": "65183",
      "addr:street": "Wilhelmstraße",
      "amenity": "restaurant",
      "cuisine": "arab",
      "email": "welcome@saytoune.de",
      "name": "Saytoune",
      "opening_hours": "Mo-Su 12:00-23:30",
      "phone": "+49 611 3086110",
      "toilets:wheelchair": "yes",
      "website": "https://www.saytoune.de/",
      "wheelchair": "limited"
    }
  },
  {
    "id": 4579898484,
    "name": "Pizzeria Verona",
    "cuisine": [
      "pizza"
    ],
    "address": {
      "street": "Bismarckring",
      "housenumber": "17",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+496113419119",
      "website": "https://www.verona-pizza.de"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:00-01:00; 11:00-00:45; Sa 12:00-01:00; Su 12:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "yes",
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "delivery": true,
    "payment": {
      "cash": true,
      "paypal": true
    },
    "level": "0",
    "lat": 50.0797821,
    "lon": 8.2299339,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "17",
      "addr:postcode": "65183",
      "addr:street": "Bismarckring",
      "amenity": "restaurant",
      "contact:phone": "+496113419119",
      "cuisine": "pizza",
      "delivery": "yes",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "level": "0",
      "name": "Pizzeria Verona",
      "opening_hours": "Mo-Fr 11:00-01:00; 11:00-00:45; Sa 12:00-01:00; Su 12:00-22:00",
      "outdoor_seating": "yes",
      "payment:cash": "yes",
      "payment:credit_cards": "no",
      "payment:debit_cards": "no",
      "payment:paypal": "yes",
      "toilets": "no",
      "website": "https://www.verona-pizza.de",
      "wheelchair": "yes"
    }
  },
  {
    "id": 4592781506,
    "name": "Pizzeria Rodi",
    "cuisine": [
      "pizza"
    ],
    "address": {
      "street": "Bleichstraße",
      "housenumber": "46",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 176 841233568",
      "twitter": "@Pizzeria_rodi"
    },
    "openingHours": {
      "raw": "Mo-Sa 12:00-22:00,Su 16:00-22:00; PH 16:00-22:00",
      "signed": false
    },
    "wheelchair": "limited",
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "lat": 50.0804664,
    "lon": 8.2300823,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "46",
      "addr:postcode": "65183",
      "addr:street": "Bleichstraße",
      "amenity": "restaurant",
      "closed:amenity": "fast_food",
      "contact:twitter": "@Pizzeria_rodi",
      "cuisine": "pizza",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "name": "Pizzeria Rodi",
      "opening_hours": "Mo-Sa 12:00-22:00,Su 16:00-22:00; PH 16:00-22:00",
      "phone": "+49 176 841233568",
      "wheelchair": "limited"
    }
  },
  {
    "id": 4716749928,
    "name": "Ristorante Comeback",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Goldgasse",
      "housenumber": "13",
      "postcode": "65183"
    },
    "contact": {
      "phone": "+49611373802",
      "website": "https://ristorante-comeback.de"
    },
    "openingHours": {
      "raw": "Su-Th 11:30-24:00; Fr,Sa 11:30-01:00",
      "signed": false
    },
    "outdoorSeating": true,
    "lat": 50.0842266,
    "lon": 8.2407059,
    "tags": {
      "addr:housenumber": "13",
      "addr:postcode": "65183",
      "addr:street": "Goldgasse",
      "amenity": "restaurant",
      "cuisine": "italian",
      "name": "Ristorante Comeback",
      "opening_hours": "Su-Th 11:30-24:00; Fr,Sa 11:30-01:00",
      "outdoor_seating": "yes",
      "phone": "+49611373802",
      "website": "https://ristorante-comeback.de"
    }
  },
  {
    "id": 4716749929,
    "name": "Aurum",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Goldgasse",
      "housenumber": "16",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 3600877",
      "email": "mail@aurum-mediterrane.de",
      "website": "https://www.aurum-mediterrane.de/"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:30-01:00, Sa-Su 09:30-01:00",
      "signed": false
    },
    "outdoorSeating": true,
    "lat": 50.0842388,
    "lon": 8.240534,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "16",
      "addr:postcode": "65183",
      "addr:street": "Goldgasse",
      "amenity": "restaurant",
      "cuisine": "italian",
      "email": "mail@aurum-mediterrane.de",
      "name": "Aurum",
      "opening_hours": "Mo-Fr 11:30-01:00, Sa-Su 09:30-01:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 3600877",
      "website": "https://www.aurum-mediterrane.de/"
    }
  },
  {
    "id": 4716749930,
    "name": "Casa Del Sabor",
    "cuisine": [
      "steak_house",
      "argentinian"
    ],
    "address": {
      "street": "Goldgasse",
      "housenumber": "10"
    },
    "contact": {
      "phone": "+4961133483981",
      "website": "https://www.casadelsabor.de/"
    },
    "openingHours": {
      "raw": "11:30-24:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "smoking": "outside",
    "lat": 50.0839641,
    "lon": 8.2406409,
    "tags": {
      "addr:housenumber": "10",
      "addr:street": "Goldgasse",
      "air_conditioning": "no",
      "amenity": "restaurant",
      "cuisine": "steak_house;argentinian",
      "indoor_seating": "yes",
      "name": "Casa Del Sabor",
      "opening_hours": "11:30-24:00",
      "outdoor_seating": "yes",
      "phone": "+4961133483981",
      "smoking": "outside",
      "website": "https://www.casadelsabor.de/"
    }
  },
  {
    "id": 4716764700,
    "name": "Zum Schwejk",
    "address": {
      "street": "Alfons-Paquet-Straße",
      "housenumber": "4",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "openingHours": {
      "raw": "Su-Th 17:00-04:00, Fr,Sa 17:00-05:00",
      "signed": false
    },
    "wheelchair": "no",
    "lat": 50.0828805,
    "lon": 8.2395984,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "4",
      "addr:street": "Alfons-Paquet-Straße",
      "amenity": "restaurant",
      "name": "Zum Schwejk",
      "opening_hours": "Su-Th 17:00-04:00, Fr,Sa 17:00-05:00",
      "wheelchair": "no"
    }
  },
  {
    "id": 4716781329,
    "name": "Da Vincenzo",
    "cuisine": [
      "italian"
    ],
    "indoorSeating": true,
    "outdoorSeating": true,
    "lat": 50.0837126,
    "lon": 8.2410184,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "italian",
      "indoor_seating": "yes",
      "name": "Da Vincenzo",
      "outdoor_seating": "yes"
    }
  },
  {
    "id": 4717164068,
    "name": "martino Kitchen",
    "contact": {
      "phone": "+49 611 990 5530",
      "website": "http://www.martino-restaurant.de"
    },
    "openingHours": {
      "raw": "Mo-Sa 07:00-23:00; PH off",
      "signed": false
    },
    "lat": 50.0844171,
    "lon": 8.2423213,
    "tags": {
      "amenity": "restaurant",
      "contact:phone": "+49 611 990 5530",
      "contact:website": "http://www.martino-restaurant.de",
      "name": "martino Kitchen",
      "opening_hours": "Mo-Sa 07:00-23:00; PH off"
    }
  },
  {
    "id": 5001553788,
    "name": "Ristorante Di Gregorio",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Frankfurter Straße",
      "housenumber": "36",
      "postcode": "65189",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "website": "https://www.di-gregorio.de/"
    },
    "wheelchair": "no",
    "lat": 50.0762806,
    "lon": 8.2519931,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "36",
      "addr:postcode": "65189",
      "addr:street": "Frankfurter Straße",
      "amenity": "restaurant",
      "cuisine": "italian",
      "name": "Ristorante Di Gregorio",
      "website": "https://www.di-gregorio.de/",
      "wheelchair": "no"
    }
  },
  {
    "id": 5016654320,
    "name": "Thai Orchid",
    "cuisine": [
      "thai"
    ],
    "address": {
      "street": "Moritzstraße",
      "housenumber": "34",
      "postcode": "65185",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "openingHours": {
      "raw": "Mo-Sa 12:00-14:30,18:00-23:00, Su 18:00-23:00",
      "signed": false
    },
    "wheelchair": "limited",
    "lat": 50.0746754,
    "lon": 8.2388524,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "34",
      "addr:postcode": "65185",
      "addr:street": "Moritzstraße",
      "amenity": "restaurant",
      "check_date": "2025-03-17",
      "cuisine": "thai",
      "name": "Thai Orchid",
      "opening_hours": "Mo-Sa 12:00-14:30,18:00-23:00, Su 18:00-23:00",
      "wheelchair": "limited"
    }
  },
  {
    "id": 5016654321,
    "name": "Kebab 2000",
    "cuisine": [
      "kebab",
      "turkish"
    ],
    "address": {
      "street": "Moritzstraße",
      "housenumber": "32",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 3081823",
      "facebook": "https://www.facebook.com/GrillKebap2000"
    },
    "openingHours": {
      "raw": "Su-Th 09:00-01:00, Fr-Sa 09:00-03:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "no",
    "diet": {
      "vegan": false,
      "vegetarian": true
    },
    "smoking": "no",
    "lat": 50.0748816,
    "lon": 8.2388214,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "32",
      "addr:postcode": "65185",
      "addr:street": "Moritzstraße",
      "amenity": "restaurant",
      "contact:facebook": "https://www.facebook.com/GrillKebap2000",
      "cuisine": "kebab;turkish",
      "diet:vegan": "no",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "name": "Kebab 2000",
      "opening_hours": "Su-Th 09:00-01:00, Fr-Sa 09:00-03:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 3081823",
      "smoking": "no",
      "wheelchair": "no"
    }
  },
  {
    "id": 5016664442,
    "name": "Ristorante Da Mario",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Adolfsallee",
      "housenumber": "7",
      "postcode": "65185",
      "country": "DE"
    },
    "openingHours": {
      "raw": "Mo-Fr 12:00-15:30,18:00-22:30; Sa 18:00+",
      "signed": false
    },
    "lat": 50.0754087,
    "lon": 8.2396336,
    "tags": {
      "addr:country": "DE",
      "addr:housenumber": "7",
      "addr:postcode": "65185",
      "addr:street": "Adolfsallee",
      "amenity": "restaurant",
      "cuisine": "italian",
      "name": "Ristorante Da Mario",
      "opening_hours": "Mo-Fr 12:00-15:30,18:00-22:30; Sa 18:00+"
    }
  },
  {
    "id": 5016670214,
    "name": "Singh's",
    "cuisine": [
      "indian"
    ],
    "address": {
      "street": "Albrechtstraße",
      "housenumber": "21",
      "postcode": "65185",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 50568750",
      "email": "info@singhs-wiesbaden.de",
      "website": "http://www.singhs-wiesbaden.de/",
      "fax": "+49 611 9450213"
    },
    "openingHours": {
      "raw": "Mo 11:30-14:00, 16:30-22:00; We-Fr 11:30-14:00, 16:30-22:00; Sa-Su 12:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "delivery": true,
    "takeaway": true,
    "lat": 50.0745096,
    "lon": 8.2393899,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "21",
      "addr:postcode": "65185",
      "addr:street": "Albrechtstraße",
      "amenity": "restaurant",
      "contact:phone": "+49 611 50568750",
      "cuisine": "indian",
      "delivery": "yes",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "email": "info@singhs-wiesbaden.de",
      "fax": "+49 611 9450213",
      "indoor_seating": "yes",
      "name": "Singh's",
      "opening_hours": "Mo 11:30-14:00, 16:30-22:00; We-Fr 11:30-14:00, 16:30-22:00; Sa-Su 12:00-22:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 50568750",
      "takeaway": "yes",
      "website": "http://www.singhs-wiesbaden.de/"
    }
  },
  {
    "id": 5237980425,
    "name": "",
    "lat": 50.0884248,
    "lon": 8.2402174,
    "tags": {
      "amenity": "restaurant"
    }
  },
  {
    "id": 5465518021,
    "name": "Ristorante Girasole im Nerotal",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Nerotal",
      "housenumber": "66",
      "postcode": "65193",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 527852",
      "website": "https://www.girasole-im-nerotal.de/"
    },
    "openingHours": {
      "raw": "Tu-Fr 12:00-14:30,18:00-22:30; Sa 12:00-22:30; Su 12:00-21:30",
      "signed": false
    },
    "lat": 50.0948671,
    "lon": 8.2249115,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "66",
      "addr:postcode": "65193",
      "addr:street": "Nerotal",
      "amenity": "restaurant",
      "cuisine": "italian",
      "name": "Ristorante Girasole im Nerotal",
      "opening_hours": "Tu-Fr 12:00-14:30,18:00-22:30; Sa 12:00-22:30; Su 12:00-21:30",
      "phone": "+49 611 527852",
      "website": "https://www.girasole-im-nerotal.de/"
    }
  },
  {
    "id": 5659220145,
    "name": "Quán TRE",
    "cuisine": [
      "vietnamese"
    ],
    "address": {
      "street": "Adolfsallee",
      "housenumber": "17",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+4961144762828",
      "website": "https://www.tre-restaurant.de/"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:30-15:00,17:00-22:00; Su,PH 15:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "lat": 50.0747297,
    "lon": 8.2397734,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "17",
      "addr:postcode": "65185",
      "addr:street": "Adolfsallee",
      "amenity": "restaurant",
      "cuisine": "vietnamese",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "name": "Quán TRE",
      "opening_hours": "Mo-Sa 11:30-15:00,17:00-22:00; Su,PH 15:00-22:00",
      "outdoor_seating": "yes",
      "phone": "+4961144762828",
      "website": "https://www.tre-restaurant.de/"
    }
  },
  {
    "id": 5704791308,
    "name": "Taverne Niko",
    "cuisine": [
      "greek"
    ],
    "address": {
      "street": "Weißenburgstraße",
      "housenumber": "7",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49611405120",
      "website": "https://www.taverne-niko.de/"
    },
    "openingHours": {
      "raw": "Mo,Tu,Th,Fr,Su 12:00-15:00,18:00-01:00, Sa 18:00-01:00",
      "signed": false
    },
    "outdoorSeating": false,
    "delivery": false,
    "smoking": "outside",
    "lat": 50.083949,
    "lon": 8.2292953,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "7",
      "addr:postcode": "65183",
      "addr:street": "Weißenburgstraße",
      "amenity": "restaurant",
      "cuisine": "greek",
      "delivery": "no",
      "name": "Taverne Niko",
      "opening_hours": "Mo,Tu,Th,Fr,Su 12:00-15:00,18:00-01:00, Sa 18:00-01:00",
      "outdoor_seating": "no",
      "phone": "+49611405120",
      "smoking": "outside",
      "website": "https://www.taverne-niko.de/"
    }
  },
  {
    "id": 5813287302,
    "name": "Hollywood Waffel",
    "cuisine": [
      "waffle"
    ],
    "indoorSeating": true,
    "outdoorSeating": true,
    "lat": 50.0835034,
    "lon": 8.2409322,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "waffle",
      "indoor_seating": "yes",
      "name": "Hollywood Waffel",
      "outdoor_seating": "yes"
    }
  },
  {
    "id": 5813312266,
    "name": "Kumpir & Salat",
    "cuisine": [
      "kumpir",
      "sandwich",
      "salad",
      "waffle"
    ],
    "diet": {
      "vegetarian": true
    },
    "takeaway": true,
    "lat": 50.0798951,
    "lon": 8.2366422,
    "tags": {
      "amenity": "restaurant",
      "check_date": "2025-04-30",
      "check_date:diet:vegetarian": "2025-04-30",
      "cuisine": "kumpir;sandwich;salad;waffle",
      "diet:vegetarian": "yes",
      "name": "Kumpir & Salat",
      "takeaway": "yes"
    }
  },
  {
    "id": 5813312267,
    "name": "Mung Mung",
    "cuisine": [
      "vietnamese"
    ],
    "diet": {
      "vegetarian": true
    },
    "takeaway": true,
    "lat": 50.0799379,
    "lon": 8.2366334,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "vietnamese",
      "diet:vegetarian": "yes",
      "name": "Mung Mung",
      "takeaway": "yes"
    }
  },
  {
    "id": 5876214094,
    "name": "Mama of Africa",
    "cuisine": [
      "eritrean",
      "ethopian",
      "east african"
    ],
    "address": {
      "street": "Westendstraße",
      "housenumber": "30",
      "postcode": "65195",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 1717297",
      "email": "eden@mamaofafrica.de",
      "website": "http://www.mamaofafrica.de"
    },
    "openingHours": {
      "raw": "Mo-Su 17:00-22:00",
      "signed": false
    },
    "outdoorSeating": true,
    "wheelchair": "no",
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "smoking": "no",
    "lat": 50.0823984,
    "lon": 8.2251308,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "30",
      "addr:postcode": "65195",
      "addr:street": "Westendstraße",
      "amenity": "restaurant",
      "check_date:opening_hours": "2024-04-29",
      "contact:email": "eden@mamaofafrica.de",
      "contact:phone": "+49 611 1717297",
      "cuisine": "eritrean;ethopian;east african",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "entrance": "yes",
      "name": "Mama of Africa",
      "opening_hours": "Mo-Su 17:00-22:00",
      "outdoor_seating": "yes",
      "smoking": "no",
      "website": "http://www.mamaofafrica.de",
      "wheelchair": "no"
    }
  },
  {
    "id": 5965855585,
    "name": "Jo‘s Weinbar",
    "cuisine": [
      "italian"
    ],
    "openingHours": {
      "raw": "Mo-Fr 11:00-18:00; Sa-Su off",
      "signed": false
    },
    "wheelchair": "yes",
    "toiletsWheelchair": "yes",
    "lat": 50.0761727,
    "lon": 8.2448651,
    "tags": {
      "amenity": "restaurant",
      "check_date": "2024-06-18",
      "cuisine": "italian",
      "name": "Jo‘s Weinbar",
      "opening_hours": "Mo-Fr 11:00-18:00; Sa-Su off",
      "toilets:wheelchair": "yes",
      "wheelchair": "yes"
    }
  },
  {
    "id": 6037164085,
    "name": "Bei Gabriel",
    "cuisine": [
      "lebanese"
    ],
    "address": {
      "street": "Rheinstraße",
      "housenumber": "43",
      "postcode": "65185"
    },
    "contact": {
      "phone": "+496113309990"
    },
    "openingHours": {
      "raw": "Mo-Fr 10:00-19:00; Sa 10:00-17:00",
      "signed": false
    },
    "lat": 50.077935,
    "lon": 8.2393008,
    "tags": {
      "addr:housenumber": "43",
      "addr:postcode": "65185",
      "addr:street": "Rheinstraße",
      "amenity": "restaurant",
      "cuisine": "lebanese",
      "name": "Bei Gabriel",
      "opening_hours": "Mo-Fr 10:00-19:00; Sa 10:00-17:00",
      "phone": "+496113309990"
    }
  },
  {
    "id": 6037250395,
    "name": "Bei Gabriel",
    "cuisine": [
      "lebanese"
    ],
    "address": {
      "postcode": "65185"
    },
    "openingHours": {
      "raw": "Mo-Sa 10:00-20:00",
      "signed": false
    },
    "lat": 50.0801789,
    "lon": 8.2383021,
    "tags": {
      "addr:postcode": "65185",
      "amenity": "restaurant",
      "cuisine": "lebanese",
      "name": "Bei Gabriel",
      "opening_hours": "Mo-Sa 10:00-20:00"
    }
  },
  {
    "id": 6037382087,
    "name": "Tschillma",
    "address": {
      "street": "Adolfstraße",
      "housenumber": "8",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 4505252",
      "website": "https://www.tschillma.de/"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:00-18:30; Sa 11:00-17:00",
      "signed": false
    },
    "delivery": true,
    "lat": 50.0769959,
    "lon": 8.2400991,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "8",
      "addr:postcode": "65185",
      "addr:street": "Adolfstraße",
      "amenity": "restaurant",
      "delivery": "yes",
      "name": "Tschillma",
      "opening_hours": "Mo-Fr 11:00-18:30; Sa 11:00-17:00",
      "phone": "+49 611 4505252",
      "website": "https://www.tschillma.de/"
    }
  },
  {
    "id": 6352922234,
    "name": "Pasha Köfte Grill",
    "cuisine": [
      "barbecue"
    ],
    "address": {
      "street": "Dotzheimer Straße",
      "housenumber": "12",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "outdoorSeating": true,
    "wheelchair": "yes",
    "lat": 50.0785414,
    "lon": 8.2347433,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "12",
      "addr:postcode": "65185",
      "addr:street": "Dotzheimer Straße",
      "amenity": "restaurant",
      "cuisine": "barbecue",
      "name": "Pasha Köfte Grill",
      "outdoor_seating": "yes",
      "wheelchair": "yes"
    }
  },
  {
    "id": 6446291920,
    "name": "Belpasso",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Goldgasse",
      "housenumber": "13",
      "postcode": "65183"
    },
    "contact": {
      "phone": "+49 611 53153753",
      "website": "https://www.ristorante-belpasso.com/"
    },
    "openingHours": {
      "raw": "11:00-24:00",
      "signed": false
    },
    "outdoorSeating": true,
    "operator": "Mohamed Katar",
    "lat": 50.0842018,
    "lon": 8.2407378,
    "tags": {
      "addr:housenumber": "13",
      "addr:postcode": "65183",
      "addr:street": "Goldgasse",
      "air_conditioning": "yes",
      "amenity": "restaurant",
      "cuisine": "italian",
      "name": "Belpasso",
      "official_name": "Ristorante Belpasso",
      "old_name": "La Cantinetta",
      "opening_hours": "11:00-24:00",
      "operator": "Mohamed Katar",
      "outdoor_seating": "yes",
      "phone": "+49 611 53153753",
      "website": "https://www.ristorante-belpasso.com/"
    }
  },
  {
    "id": 6456500353,
    "name": "Äbbelwoi Schmidt",
    "cuisine": [
      "german"
    ],
    "address": {
      "street": "Bornhofenweg",
      "housenumber": "17",
      "postcode": "65195",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 406649",
      "website": "http://www.aebbelwoi-schmidt.de/"
    },
    "openingHours": {
      "raw": "Th-Sa 16:00-21:30; Su 14:00-21:30",
      "signed": false
    },
    "outdoorSeating": true,
    "lat": 50.0926323,
    "lon": 8.2140663,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "17",
      "addr:postcode": "65195",
      "addr:street": "Bornhofenweg",
      "amenity": "restaurant",
      "check_date:opening_hours": "2021-08-18",
      "contact:phone": "+49 611 406649",
      "cuisine": "german",
      "name": "Äbbelwoi Schmidt",
      "opening_hours": "Th-Sa 16:00-21:30; Su 14:00-21:30",
      "outdoor_seating": "yes",
      "website": "http://www.aebbelwoi-schmidt.de/"
    }
  },
  {
    "id": 6531475119,
    "name": "Verace",
    "cuisine": [
      "italian"
    ],
    "contact": {
      "phone": "+49 611 16858621",
      "website": "https://cucinapopolare.de/"
    },
    "openingHours": {
      "raw": "Mo-Sa 17:00-22:00",
      "signed": false
    },
    "lat": 50.0792341,
    "lon": 8.2404698,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "italian",
      "name": "Verace",
      "opening_hours": "Mo-Sa 17:00-22:00",
      "phone": "+49 611 16858621",
      "website": "https://cucinapopolare.de/"
    }
  },
  {
    "id": 6779959928,
    "name": "Agadir",
    "cuisine": [
      "moroccan"
    ],
    "address": {
      "street": "Taunusstraße",
      "housenumber": "22",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 51011202",
      "website": "https://restaurant-agadir-wiesbaden.jimdosite.com/kontakt/"
    },
    "openingHours": {
      "raw": "Mo-Su 11:30-22:00",
      "signed": false
    },
    "wheelchair": "limited",
    "level": "0",
    "lat": 50.0876213,
    "lon": 8.2414888,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "22",
      "addr:postcode": "65183",
      "addr:street": "Taunusstraße",
      "amenity": "restaurant",
      "cuisine": "moroccan",
      "level": "0",
      "name": "Agadir",
      "opening_hours": "Mo-Su 11:30-22:00",
      "phone": "+49 611 51011202",
      "toilets": "yes",
      "website": "https://restaurant-agadir-wiesbaden.jimdosite.com/kontakt/",
      "wheelchair": "limited",
      "wheelchair:step_height": "15"
    }
  },
  {
    "id": 6987899008,
    "name": "Burari",
    "cuisine": [
      "thai"
    ],
    "address": {
      "street": "Am Römertor",
      "housenumber": "4",
      "postcode": "65183"
    },
    "contact": {
      "phone": "+149 176 56471215",
      "email": "INFO@BURARI.DE",
      "website": "https://burari.de/"
    },
    "openingHours": {
      "raw": "Su 17:00-21:00, Mo,We,Th 17:00-21:00,Fr, Sa 12:00-22:00",
      "signed": false
    },
    "lat": 50.084148,
    "lon": 8.239344,
    "tags": {
      "addr:housenumber": "4",
      "addr:postcode": "65183",
      "addr:street": "Am Römertor",
      "amenity": "restaurant",
      "cuisine": "thai",
      "email": "INFO@BURARI.DE",
      "name": "Burari",
      "opening_hours": "Su 17:00-21:00, Mo,We,Th 17:00-21:00,Fr, Sa 12:00-22:00",
      "phone": "+149 176 56471215",
      "website": "https://burari.de/"
    }
  },
  {
    "id": 7088558220,
    "name": "Bodega De Musica",
    "cuisine": [
      "spanish",
      "tapas"
    ],
    "address": {
      "street": "Schwalbacher Straße",
      "housenumber": "69",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49611 1744544",
      "website": "http://bodegademusica.de"
    },
    "openingHours": {
      "raw": "Mo-Sa 18:00-01:00",
      "signed": false
    },
    "lat": 50.0835805,
    "lon": 8.236208,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "69",
      "addr:postcode": "65183",
      "addr:street": "Schwalbacher Straße",
      "amenity": "restaurant",
      "cuisine": "spanish;tapas",
      "name": "Bodega De Musica",
      "opening_hours": "Mo-Sa 18:00-01:00",
      "phone": "+49611 1744544",
      "website": "http://bodegademusica.de"
    }
  },
  {
    "id": 7156124509,
    "name": "Tokygon",
    "cuisine": [
      "asian"
    ],
    "address": {
      "street": "Dotzheimer Straße",
      "housenumber": "98",
      "postcode": "65197",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 98856919",
      "email": "hello@tokygon.de",
      "website": "https://tokygon.de/"
    },
    "openingHours": {
      "raw": "Mo-Th 12:00-23:00, Fr-Sa 12:00-23:59, Su 12:00-23:00",
      "signed": false
    },
    "wheelchair": "no",
    "diet": {
      "vegetarian": true
    },
    "lat": 50.0774965,
    "lon": 8.2232522,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "98",
      "addr:postcode": "65197",
      "addr:street": "Dotzheimer Straße",
      "amenity": "restaurant",
      "cuisine": "asian",
      "diet:vegetarian": "yes",
      "email": "hello@tokygon.de",
      "name": "Tokygon",
      "opening_hours": "Mo-Th 12:00-23:00, Fr-Sa 12:00-23:59, Su 12:00-23:00",
      "phone": "+49 611 98856919",
      "website": "https://tokygon.de/",
      "wheelchair": "no"
    }
  },
  {
    "id": 7158675737,
    "name": "das gegenüber",
    "cuisine": [
      "afghan"
    ],
    "address": {
      "street": "Michelsberg",
      "housenumber": "13",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "description": "zugehörig zu \"Die Waffel\"",
    "lat": 50.0829841,
    "lon": 8.2377559,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "13",
      "addr:postcode": "65183",
      "addr:street": "Michelsberg",
      "amenity": "restaurant",
      "cuisine": "afghan",
      "description": "zugehörig zu \"Die Waffel\"",
      "indoor_seating": "yes",
      "name": "das gegenüber",
      "outdoor_seating": "yes"
    }
  },
  {
    "id": 7236652453,
    "name": "Mi koreanische Spezialitäten und Kunstgalerie",
    "cuisine": [
      "korean"
    ],
    "contact": {
      "phone": "+49 611 18199958"
    },
    "lat": 50.0793565,
    "lon": 8.2259291,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "korean",
      "name": "Mi koreanische Spezialitäten und Kunstgalerie",
      "phone": "+49 611 18199958"
    }
  },
  {
    "id": 7545097086,
    "name": "Kavos",
    "cuisine": [
      "greek"
    ],
    "address": {
      "street": "Grabenstraße",
      "housenumber": "11",
      "postcode": "65183"
    },
    "contact": {
      "phone": "+49 611 1574745",
      "website": "http://www.kavos-Wiesbaden.de"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:30-24:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "lat": 50.0837504,
    "lon": 8.2409888,
    "tags": {
      "addr:housenumber": "11",
      "addr:postcode": "65183",
      "addr:street": "Grabenstraße",
      "amenity": "restaurant",
      "cuisine": "greek",
      "indoor_seating": "yes",
      "name": "Kavos",
      "opening_hours": "Mo-Sa 11:30-24:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 1574745",
      "website": "http://www.kavos-Wiesbaden.de"
    }
  },
  {
    "id": 7606330346,
    "name": "Orangerie",
    "address": {
      "street": "Kaiser-Friedrich-Platz",
      "housenumber": "3-4",
      "city": "Wiesbaden"
    },
    "contact": {
      "website": "https://www.hommage-hotels.com/nassauer-hof-wiesbaden/kulinarik/restaurant-orangerie"
    },
    "lat": 50.0848695,
    "lon": 8.2437373,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "3-4",
      "addr:street": "Kaiser-Friedrich-Platz",
      "amenity": "restaurant",
      "name": "Orangerie",
      "website": "https://www.hommage-hotels.com/nassauer-hof-wiesbaden/kulinarik/restaurant-orangerie"
    }
  },
  {
    "id": 7647325786,
    "name": "Harput Bäckerei",
    "cuisine": [
      "turkish"
    ],
    "address": {
      "street": "Wellritzstraße",
      "housenumber": "12",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 1840511",
      "email": "duran_89@hotmail.de",
      "facebook": "https://www.facebook.com/search/top?q=mustafasgemusekebap"
    },
    "openingHours": {
      "raw": "Mo-Su 08:00-22:00",
      "signed": false
    },
    "outdoorSeating": true,
    "lat": 50.0826891,
    "lon": 8.2342851,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "12",
      "addr:postcode": "65183",
      "addr:street": "Wellritzstraße",
      "amenity": "restaurant",
      "cuisine": "turkish",
      "email": "duran_89@hotmail.de",
      "facebook": "https://www.facebook.com/search/top?q=mustafasgemusekebap",
      "name": "Harput Bäckerei",
      "opening_hours": "Mo-Su 08:00-22:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 1840511"
    }
  },
  {
    "id": 7647325793,
    "name": "KiTANO",
    "cuisine": [
      "sushi",
      "korean"
    ],
    "address": {
      "street": "Wellritzstraße",
      "housenumber": "28",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 7244150",
      "website": "https://www.kitano-wiesbaden.com/"
    },
    "openingHours": {
      "raw": "Tu-Fr 11:30-14:00,17:30-21:00; Sa-Su 17:30-21:00; PH 17:30-21:00",
      "signed": false
    },
    "delivery": true,
    "takeaway": true,
    "lat": 50.0825698,
    "lon": 8.2322735,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "28",
      "addr:postcode": "65183",
      "addr:street": "Wellritzstraße",
      "amenity": "restaurant",
      "cuisine": "sushi;korean",
      "delivery": "yes",
      "name": "KiTANO",
      "opening_hours": "Tu-Fr 11:30-14:00,17:30-21:00; Sa-Su 17:30-21:00; PH 17:30-21:00",
      "phone": "+49 611 7244150",
      "takeaway": "yes",
      "website": "https://www.kitano-wiesbaden.com/"
    }
  },
  {
    "id": 7705879448,
    "name": "Hans im Glück",
    "cuisine": [
      "burger"
    ],
    "address": {
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 71186500",
      "website": "https://hansimglueck-burgergrill.de/standort/wiesbaden-am-kurpark"
    },
    "openingHours": {
      "raw": "Mo-Su 11:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "brand": "Hans im Glück",
    "lat": 50.0840074,
    "lon": 8.2430921,
    "tags": {
      "addr:city": "Wiesbaden",
      "amenity": "restaurant",
      "brand": "Hans im Glück",
      "brand:wikidata": "Q22569868",
      "brand:wikipedia": "de:Hans im Glück (Restaurantkette)",
      "contact:phone": "+49 611 71186500",
      "contact:website": "https://hansimglueck-burgergrill.de/standort/wiesbaden-am-kurpark",
      "cuisine": "burger",
      "indoor_seating": "yes",
      "name": "Hans im Glück",
      "opening_hours": "Mo-Su 11:00-22:00",
      "outdoor_seating": "yes"
    }
  },
  {
    "id": 7840709258,
    "name": "Tialini",
    "cuisine": [
      "italian"
    ],
    "openingHours": {
      "raw": "Mo-Su 12:00-22:00",
      "signed": false
    },
    "wheelchair": "yes",
    "toiletsWheelchair": "yes",
    "lat": 50.0819258,
    "lon": 8.2374404,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "italian",
      "name": "Tialini",
      "opening_hours": "Mo-Su 12:00-22:00",
      "toilets:wheelchair": "yes",
      "wheelchair": "yes"
    }
  },
  {
    "id": 7840776096,
    "name": "Good morning Vietnam",
    "openingHours": {
      "raw": "Mo-Sa 11:00-21:30",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "lat": 50.082223,
    "lon": 8.2396904,
    "tags": {
      "amenity": "restaurant",
      "indoor_seating": "yes",
      "name": "Good morning Vietnam",
      "opening_hours": "Mo-Sa 11:00-21:30",
      "outdoor_seating": "yes"
    }
  },
  {
    "id": 7840782381,
    "name": "Godfather",
    "cuisine": [
      "american"
    ],
    "address": {
      "street": "Ellenbogengasse",
      "housenumber": "8",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 1590 1973847",
      "facebook": "https://www.facebook.com/people/Godfatherrestaurant/100094681146219/"
    },
    "outdoorSeating": true,
    "delivery": true,
    "takeaway": true,
    "lat": 50.0815477,
    "lon": 8.2405397,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "8",
      "addr:postcode": "65183",
      "addr:street": "Ellenbogengasse",
      "amenity": "restaurant",
      "cuisine": "american",
      "delivery": "yes",
      "facebook": "https://www.facebook.com/people/Godfatherrestaurant/100094681146219/",
      "name": "Godfather",
      "outdoor_seating": "yes",
      "phone": "+49 1590 1973847",
      "takeaway": "yes"
    }
  },
  {
    "id": 7840815820,
    "name": "Brauns",
    "cuisine": [
      "fish"
    ],
    "contact": {
      "phone": "+49 611 301863"
    },
    "diet": {
      "vegan": false,
      "vegetarian": true
    },
    "payment": {
      "debitCards": true,
      "girocard": true
    },
    "level": "0",
    "lat": 50.0814246,
    "lon": 8.2402898,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "fish",
      "description:payment": "10 € Mindesteinkaufswert bei Kartenzahlung",
      "description:payment:en": "10 € minimum purchase value for card payment",
      "diet:vegan": "no",
      "diet:vegetarian": "yes",
      "level": "0",
      "name": "Brauns",
      "payment:credit_cards": "no",
      "payment:debit_cards": "yes",
      "payment:girocard": "yes",
      "phone": "+49 611 301863"
    }
  },
  {
    "id": 7920091350,
    "name": "L'Osteria",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Bärenstraße",
      "housenumber": "3",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 44763917",
      "email": "wiesbaden.baerenstrasse@losteria.de",
      "website": "https://losteria.net/de/restaurants/restaurant/wiesbaden/"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:30-23:00; Su,PH 12:00-23:00",
      "signed": false
    },
    "brand": "L'Osteria",
    "lat": 50.0844994,
    "lon": 8.2412744,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "3",
      "addr:postcode": "65183",
      "addr:street": "Bärenstraße",
      "amenity": "restaurant",
      "brand": "L'Osteria",
      "brand:wikidata": "Q17323478",
      "brand:wikipedia": "de:L’Osteria",
      "cuisine": "italian",
      "email": "wiesbaden.baerenstrasse@losteria.de",
      "name": "L'Osteria",
      "opening_hours": "Mo-Sa 11:30-23:00; Su,PH 12:00-23:00",
      "phone": "+49 611 44763917",
      "website": "https://losteria.net/de/restaurants/restaurant/wiesbaden/"
    }
  },
  {
    "id": 7950192219,
    "name": "Wellritz Grill",
    "address": {
      "street": "Wellritzstraße",
      "housenumber": "23"
    },
    "contact": {
      "phone": "+49 1622 845 625",
      "website": "https://www.wellritzgrill-wiesbaden.de/"
    },
    "lat": 50.0827957,
    "lon": 8.2335564,
    "tags": {
      "addr:housenumber": "23",
      "addr:street": "Wellritzstraße",
      "amenity": "restaurant",
      "name": "Wellritz Grill",
      "phone": "+49 1622 845 625",
      "website": "https://www.wellritzgrill-wiesbaden.de/"
    }
  },
  {
    "id": 7950192220,
    "name": "Cairo.65",
    "cuisine": [
      "arab"
    ],
    "address": {
      "street": "Wellritzstraße",
      "housenumber": "32",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "openingHours": {
      "raw": "Tu-Su 11:00-21:00",
      "signed": false
    },
    "lat": 50.0825591,
    "lon": 8.2319701,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "32",
      "addr:postcode": "65183",
      "addr:street": "Wellritzstraße",
      "amenity": "restaurant",
      "cuisine": "arab",
      "name": "Cairo.65",
      "opening_hours": "Tu-Su 11:00-21:00"
    }
  },
  {
    "id": 8738527446,
    "name": "Peranni's",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Platter Straße",
      "housenumber": "172",
      "postcode": "65193",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+4961189059364",
      "website": "https://www.perannis.com"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:30-14:30,17:30-23:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "lat": 50.0962649,
    "lon": 8.2206021,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "172",
      "addr:postcode": "65193",
      "addr:street": "Platter Straße",
      "amenity": "restaurant",
      "cuisine": "italian",
      "indoor_seating": "yes",
      "name": "Peranni's",
      "opening_hours": "Mo-Sa 11:30-14:30,17:30-23:00",
      "opening_hours:covid19": "Mo-Sa 11:00-14:30,17:30-20:00",
      "outdoor_seating": "yes",
      "phone": "+4961189059364",
      "website": "https://www.perannis.com"
    }
  },
  {
    "id": 8786262713,
    "name": "Casa Azteca",
    "cuisine": [
      "mexican"
    ],
    "address": {
      "street": "Schiersteiner Straße",
      "housenumber": "2",
      "postcode": "65187",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 (0)611 16888605",
      "website": "https://www.casaazteca.de"
    },
    "openingHours": {
      "raw": "24/7",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": false,
    "diet": {
      "vegetarian": true
    },
    "description": "Bar Y Restaurante Mexicano",
    "lat": 50.0754712,
    "lon": 8.2329228,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "2",
      "addr:postcode": "65187",
      "addr:street": "Schiersteiner Straße",
      "amenity": "restaurant",
      "check_date:opening_hours": "2023-10-18",
      "cuisine": "mexican",
      "description": "Bar Y Restaurante Mexicano",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "name": "Casa Azteca",
      "opening_hours": "24/7",
      "opening_hours:signed": "no",
      "outdoor_seating": "no",
      "phone": "+49 (0)611 16888605",
      "source": "www.casaazteca.de",
      "website": "https://www.casaazteca.de"
    }
  },
  {
    "id": 9545307205,
    "name": "Diyarbakir Ocakbaşi Türk. Rest.",
    "cuisine": [
      "turkish"
    ],
    "address": {
      "street": "Bleichstraße",
      "housenumber": "33",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 56598008",
      "website": "https://diyarbakir-ocakbasi.de"
    },
    "lat": 50.0807581,
    "lon": 8.2318246,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "33",
      "addr:postcode": "65183",
      "addr:street": "Bleichstraße",
      "amenity": "restaurant",
      "cuisine": "turkish",
      "name": "Diyarbakir Ocakbaşi Türk. Rest.",
      "phone": "+49 611 56598008",
      "website": "https://diyarbakir-ocakbasi.de"
    }
  },
  {
    "id": 9570536613,
    "name": "Eat Happy",
    "cuisine": [
      "sushi"
    ],
    "address": {
      "street": "Bleichstraße",
      "housenumber": "2",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "website": "https://www.eathappy.de/standorte/?user-address=Bleichstra%C3%9Fe+2%2C+Wiesbaden%2C+Deutschland&lat=50.08072629999999&lng=8.2355589"
    },
    "brand": "Eat Happy",
    "lat": 50.0804713,
    "lon": 8.2350437,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "2",
      "addr:postcode": "65185",
      "addr:street": "Bleichstraße",
      "amenity": "restaurant",
      "brand": "Eat Happy",
      "brand:wikidata": "Q125578025",
      "cuisine": "sushi",
      "name": "Eat Happy",
      "website": "https://www.eathappy.de/standorte/?user-address=Bleichstra%C3%9Fe+2%2C+Wiesbaden%2C+Deutschland&lat=50.08072629999999&lng=8.2355589"
    }
  },
  {
    "id": 9570538042,
    "name": "Red Onion",
    "cuisine": [
      "pizza",
      "indian",
      "american"
    ],
    "address": {
      "street": "Dotzheimer Straße",
      "housenumber": "35",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 309376;+49 151 17287295",
      "website": "https://www.redonionwiesbaden.de/"
    },
    "openingHours": {
      "raw": "Tu-Su 11:30-22:30",
      "signed": false
    },
    "description": "Derzeit Bestellungen über Lieferando / Currently Lieferando delivery service",
    "lat": 50.0786194,
    "lon": 8.2317863,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "35",
      "addr:postcode": "65185",
      "addr:street": "Dotzheimer Straße",
      "amenity": "restaurant",
      "cuisine": "pizza;indian;american",
      "description": "Derzeit Bestellungen über Lieferando / Currently Lieferando delivery service",
      "name": "Red Onion",
      "opening_hours": "Tu-Su 11:30-22:30",
      "phone": "+49 611 309376;+49 151 17287295",
      "website": "https://www.redonionwiesbaden.de/"
    }
  },
  {
    "id": 9570597189,
    "name": "Sahra Orient and More/Tabouleh Restaurant",
    "cuisine": [
      "afghan",
      "international"
    ],
    "address": {
      "street": "Bleichstraße",
      "housenumber": "2",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 1577 3420849",
      "facebook": "https://www.facebook.com/profile.php?id=100042243537217"
    },
    "openingHours": {
      "raw": "Mo-Sa 08:00-20:00",
      "signed": false
    },
    "lat": 50.080418,
    "lon": 8.2348714,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "2",
      "addr:postcode": "65185",
      "addr:street": "Bleichstraße",
      "amenity": "restaurant",
      "contact:facebook": "https://www.facebook.com/profile.php?id=100042243537217",
      "cuisine": "afghan;international",
      "name": "Sahra Orient and More/Tabouleh Restaurant",
      "opening_hours": "Mo-Sa 08:00-20:00",
      "phone": "+49 1577 3420849"
    }
  },
  {
    "id": 9597653328,
    "name": "Soul Tikka",
    "cuisine": [
      "indian"
    ],
    "address": {
      "street": "Neugasse",
      "housenumber": "24",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 50584707",
      "website": "https://www.soul-tikka.de"
    },
    "openingHours": {
      "raw": "Mo-Su 11:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "lat": 50.0821783,
    "lon": 8.2396855,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "24",
      "addr:postcode": "65183",
      "addr:street": "Neugasse",
      "amenity": "restaurant",
      "cuisine": "indian",
      "indoor_seating": "yes",
      "name": "Soul Tikka",
      "opening_hours": "Mo-Su 11:00-22:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 50584707",
      "website": "https://www.soul-tikka.de"
    }
  },
  {
    "id": 9682169574,
    "name": "Lokma Grill",
    "cuisine": [
      "burger",
      "chicken",
      "german"
    ],
    "address": {
      "street": "Moritzstraße",
      "housenumber": "12",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 60979444",
      "website": "https://www.lokma-restaurant-grill-and-chicken-wiesbaden.de/"
    },
    "diet": {
      "vegetarian": true
    },
    "lat": 50.0765517,
    "lon": 8.2386177,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "12",
      "addr:street": "Moritzstraße",
      "amenity": "restaurant",
      "cuisine": "burger;chicken;german",
      "diet:vegetarian": "yes",
      "name": "Lokma Grill",
      "phone": "+49 611 60979444",
      "website": "https://www.lokma-restaurant-grill-and-chicken-wiesbaden.de/"
    }
  },
  {
    "id": 9685521467,
    "name": "Chez Mamie",
    "cuisine": [
      "french"
    ],
    "contact": {
      "phone": "+49 611 36024800",
      "email": "wiesbaden@chez-mamie.de",
      "website": "https://www.chez-mamie.de/"
    },
    "openingHours": {
      "raw": "12:00-24:00",
      "signed": false
    },
    "lat": 50.0852411,
    "lon": 8.2426474,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "french",
      "email": "wiesbaden@chez-mamie.de",
      "name": "Chez Mamie",
      "opening_hours": "12:00-24:00",
      "phone": "+49 611 36024800",
      "website": "https://www.chez-mamie.de/",
      "website:menu": "https://henrich-hospitality.com/public/chezmamie-speisekarte-de.pdf",
      "website:menu:en": "https://henrich-hospitality.com/public/chezmamie-speisekarte-en.pdf"
    }
  },
  {
    "id": 9703185688,
    "name": "Asia Fu Dong",
    "cuisine": [
      "asian",
      "vietnamese"
    ],
    "address": {
      "street": "Kirchgasse",
      "housenumber": "6",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "website": "https://luisenforum.com/geschaefte/geschaefte-von-a-z/asia-fu-dong.html"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:00-20:00",
      "signed": false
    },
    "level": "2",
    "lat": 50.0785574,
    "lon": 8.2362495,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "6",
      "addr:postcode": "65185",
      "addr:street": "Kirchgasse",
      "amenity": "restaurant",
      "cuisine": "asian;vietnamese",
      "level": "2",
      "name": "Asia Fu Dong",
      "opening_hours": "Mo-Sa 11:00-20:00",
      "website": "https://luisenforum.com/geschaefte/geschaefte-von-a-z/asia-fu-dong.html"
    }
  },
  {
    "id": 9703191148,
    "name": "Wolke 7",
    "cuisine": [
      "pizza",
      "italian",
      "coffee_shop",
      "crepe",
      "waffle"
    ],
    "address": {
      "street": "Kirchgasse",
      "housenumber": "6",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "website": "https://wolke7-wiesbaden.de"
    },
    "openingHours": {
      "raw": "Mo-Sa 09:00-20:00",
      "signed": false
    },
    "level": "2",
    "lat": 50.0786022,
    "lon": 8.2365097,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "6",
      "addr:postcode": "65185",
      "addr:street": "Kirchgasse",
      "amenity": "restaurant",
      "cuisine": "pizza;italian;coffee_shop;crepe;waffle",
      "level": "2",
      "name": "Wolke 7",
      "opening_hours": "Mo-Sa 09:00-20:00",
      "website": "https://wolke7-wiesbaden.de"
    }
  },
  {
    "id": 9724180877,
    "name": "Afghan Naan Restaurant",
    "cuisine": [
      "afghan"
    ],
    "address": {
      "street": "Helenenstraße",
      "housenumber": "30",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 16888529",
      "facebook": "https://www.facebook.com/Afghan-naan-102722892106621/"
    },
    "level": "0",
    "lat": 50.082531,
    "lon": 8.2343152,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "30",
      "addr:postcode": "65183",
      "addr:street": "Helenenstraße",
      "amenity": "restaurant",
      "contact:facebook": "https://www.facebook.com/Afghan-naan-102722892106621/",
      "cuisine": "afghan",
      "level": "0",
      "name": "Afghan Naan Restaurant",
      "phone": "+49 611 16888529"
    }
  },
  {
    "id": 9724197200,
    "name": "Madina Restaurant",
    "cuisine": [
      "afghan",
      "persian"
    ],
    "address": {
      "street": "Helenenstraße",
      "housenumber": "27",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 176 80655469;+49 173 1666006"
    },
    "openingHours": {
      "raw": "Mo-Su 11:00-23:00",
      "signed": false
    },
    "level": "0",
    "lat": 50.0823804,
    "lon": 8.2346236,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "27",
      "addr:postcode": "65183",
      "addr:street": "Helenenstraße",
      "amenity": "restaurant",
      "cuisine": "afghan;persian",
      "level": "0",
      "name": "Madina Restaurant",
      "opening_hours": "Mo-Su 11:00-23:00",
      "phone": "+49 176 80655469;+49 173 1666006"
    }
  },
  {
    "id": 9732828137,
    "name": "Chicken & More",
    "cuisine": [
      "chicken"
    ],
    "address": {
      "street": "Schwalbacher Straße",
      "housenumber": "37",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:00-22:00; Su 14:00-22:00; PH 14:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": false,
    "level": "0",
    "lat": 50.0806203,
    "lon": 8.2365369,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "37",
      "addr:postcode": "65183",
      "addr:street": "Schwalbacher Straße",
      "amenity": "restaurant",
      "check_date:opening_hours": "2024-10-03",
      "cuisine": "chicken",
      "indoor_seating": "yes",
      "level": "0",
      "name": "Chicken & More",
      "opening_hours": "Mo-Sa 11:00-22:00; Su 14:00-22:00; PH 14:00-22:00",
      "outdoor_seating": "no"
    }
  },
  {
    "id": 9732830124,
    "name": "The Kebap by Cemo",
    "cuisine": [
      "turkish",
      "chicken",
      "kebab"
    ],
    "address": {
      "street": "Schwalbacher Straße",
      "housenumber": "35",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "openingHours": {
      "raw": "Su-Th 11:00-24:00, Fr,Sa 11:00-01:00",
      "signed": false
    },
    "outdoorSeating": true,
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "lat": 50.0805417,
    "lon": 8.2365586,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "35",
      "addr:postcode": "65183",
      "addr:street": "Schwalbacher Straße",
      "amenity": "restaurant",
      "cuisine": "turkish;chicken;kebab",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "name": "The Kebap by Cemo",
      "opening_hours": "Su-Th 11:00-24:00, Fr,Sa 11:00-01:00",
      "outdoor_seating": "yes"
    }
  },
  {
    "id": 9743618335,
    "name": "Harput ET",
    "cuisine": [
      "chicken",
      "fish",
      "grill",
      "pizza",
      "turkish"
    ],
    "address": {
      "street": "Wellritzstraße",
      "housenumber": "8",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 16862259"
    },
    "lat": 50.0827341,
    "lon": 8.2350049,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "8",
      "addr:postcode": "65183",
      "addr:street": "Wellritzstraße",
      "amenity": "restaurant",
      "cuisine": "chicken;fish;grill;pizza;turkish",
      "name": "Harput ET",
      "phone": "+49 611 16862259"
    }
  },
  {
    "id": 9902000450,
    "name": "Merzouga Fisch Restaurant",
    "cuisine": [
      "fish",
      "sushi"
    ],
    "address": {
      "street": "Wellritzstraße",
      "housenumber": "8",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "website": "https://www.sushikawasaki.de/",
      "facebook": "https://www.facebook.com/NOQTA-SHOP-418166231694715/"
    },
    "openingHours": {
      "raw": "Su-Th 12:00-23:00, Fr-Sa 12:00-22:45",
      "signed": false
    },
    "lat": 50.0827164,
    "lon": 8.2348006,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "8",
      "addr:postcode": "65183",
      "addr:street": "Wellritzstraße",
      "amenity": "restaurant",
      "contact:facebook": "https://www.facebook.com/NOQTA-SHOP-418166231694715/",
      "cuisine": "fish;sushi",
      "name": "Merzouga Fisch Restaurant",
      "opening_hours": "Su-Th 12:00-23:00, Fr-Sa 12:00-22:45",
      "website": "https://www.sushikawasaki.de/"
    }
  },
  {
    "id": 9921061497,
    "name": "Old Vineyard",
    "address": {
      "street": "Untere Albrechtstraße",
      "housenumber": "16",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 88008082",
      "website": "https://www.old-vineyard.de",
      "facebook": "https://www.facebook.com/search/top?q=old%20vineyard%20weinbistro"
    },
    "openingHours": {
      "raw": "Mo-Fr 17:00-22:00; PH,Sa,Su off",
      "signed": false
    },
    "outdoorSeating": true,
    "lat": 50.0743954,
    "lon": 8.2410374,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "16",
      "addr:postcode": "65185",
      "addr:street": "Untere Albrechtstraße",
      "amenity": "restaurant",
      "contact:facebook": "https://www.facebook.com/search/top?q=old%20vineyard%20weinbistro",
      "name": "Old Vineyard",
      "opening_hours": "Mo-Fr 17:00-22:00; PH,Sa,Su off",
      "outdoor_seating": "yes",
      "phone": "+49 611 88008082",
      "website": "https://www.old-vineyard.de"
    }
  },
  {
    "id": 10263338309,
    "name": "Ristorante S",
    "cuisine": [
      "italian",
      "pizza"
    ],
    "lat": 50.0858436,
    "lon": 8.2470276,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "italian;pizza",
      "name": "Ristorante S",
      "name:de": "Ristorante Sí"
    }
  },
  {
    "id": 10315142814,
    "name": "Baguette House",
    "cuisine": [
      "burger",
      "salad",
      "pizza"
    ],
    "address": {
      "street": "Rheinstraße",
      "housenumber": "91",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "website": "https://www.baguettehouse.de"
    },
    "openingHours": {
      "raw": "Mo-Th 16:30-02:00, Fr-Sa 11:00-03:30, Su 11:00-22:30; PH 11:00-22:30",
      "signed": false
    },
    "wheelchair": "no",
    "delivery": "only",
    "takeaway": true,
    "lat": 50.0776569,
    "lon": 8.2335748,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "91",
      "addr:postcode": "65185",
      "addr:street": "Rheinstraße",
      "amenity": "restaurant",
      "cuisine": "burger;salad;pizza",
      "delivery": "only",
      "name": "Baguette House",
      "opening_hours": "Mo-Th 16:30-02:00, Fr-Sa 11:00-03:30, Su 11:00-22:30; PH 11:00-22:30",
      "takeaway": "yes",
      "website": "https://www.baguettehouse.de",
      "wheelchair": "no"
    }
  },
  {
    "id": 10586805886,
    "name": "Bistro bei Bahtiyar",
    "address": {
      "street": "Frankenstraße",
      "housenumber": "18",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 157 77991067",
      "website": "https://bistro-bei-bahtiyar.business.site"
    },
    "openingHours": {
      "raw": "Mo-Su 09:00-24:00",
      "signed": false
    },
    "lat": 50.0811537,
    "lon": 8.2308525,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "18",
      "addr:postcode": "65183",
      "addr:street": "Frankenstraße",
      "amenity": "restaurant",
      "name": "Bistro bei Bahtiyar",
      "opening_hours": "Mo-Su 09:00-24:00",
      "phone": "+49 157 77991067",
      "website": "https://bistro-bei-bahtiyar.business.site"
    }
  },
  {
    "id": 10589115452,
    "name": "Pizzeria da Petro",
    "cuisine": [
      "pizza"
    ],
    "address": {
      "street": "Walramstraße",
      "housenumber": "21",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "website": "https://www.dapietro-wiesbaden.de"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:00-14:30,17:00-23:00; Sa 15:00-23:00; Su 11:00-23:00; PH 11:00-23:00",
      "signed": false
    },
    "delivery": true,
    "lat": 50.0829117,
    "lon": 8.2315563,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "21",
      "addr:postcode": "65183",
      "addr:street": "Walramstraße",
      "amenity": "restaurant",
      "cuisine": "pizza",
      "delivery": "yes",
      "name": "Pizzeria da Petro",
      "opening_hours": "Mo-Fr 11:00-14:30,17:00-23:00; Sa 15:00-23:00; Su 11:00-23:00; PH 11:00-23:00",
      "website": "https://www.dapietro-wiesbaden.de"
    }
  },
  {
    "id": 10589281314,
    "name": "Köfteci Usta 23",
    "cuisine": [
      "turkish"
    ],
    "address": {
      "street": "Walramstraße",
      "housenumber": "13",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 176 70219486;+49 611 13756065",
      "email": "info@koefteci-wiesbaden.de",
      "website": "https://koefteci-usta-23.jimdofree.com"
    },
    "openingHours": {
      "raw": "Mo-Su 09:00-22:00",
      "signed": false
    },
    "takeaway": true,
    "lat": 50.082089,
    "lon": 8.2316702,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "13",
      "addr:postcode": "65183",
      "addr:street": "Walramstraße",
      "amenity": "restaurant",
      "cuisine": "turkish",
      "email": "info@koefteci-wiesbaden.de",
      "name": "Köfteci Usta 23",
      "opening_hours": "Mo-Su 09:00-22:00",
      "phone": "+49 176 70219486;+49 611 13756065",
      "takeaway": "yes",
      "website": "https://koefteci-usta-23.jimdofree.com"
    }
  },
  {
    "id": 10712729132,
    "name": "Çiğköftem",
    "cuisine": [
      "turkish"
    ],
    "address": {
      "street": "Wellritzstraße",
      "housenumber": "22",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 88024968",
      "website": "https://cigkoftem.eu/filialen/",
      "facebook": "https://www.facebook.com/profile.php?id=100077680359911"
    },
    "openingHours": {
      "raw": "Mo-Fr 10:00-21:00",
      "signed": false
    },
    "diet": {
      "vegan": true
    },
    "lat": 50.0826275,
    "lon": 8.2331127,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "22",
      "addr:postcode": "65183",
      "addr:street": "Wellritzstraße",
      "amenity": "restaurant",
      "cuisine": "turkish",
      "diet:vegan": "yes",
      "facebook": "https://www.facebook.com/profile.php?id=100077680359911",
      "name": "Çiğköftem",
      "opening_hours": "Mo-Fr 10:00-21:00",
      "phone": "+49 611 88024968",
      "website": "https://cigkoftem.eu/filialen/"
    }
  },
  {
    "id": 10716717878,
    "name": "Sultan Restaurant",
    "cuisine": [
      "turkish"
    ],
    "address": {
      "street": "Wellritzstraße",
      "housenumber": "16",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 16877850",
      "website": "https://sultan-restaurant.com/12899"
    },
    "openingHours": {
      "raw": "Mo-Sa 10:00-21:00",
      "signed": false
    },
    "outdoorSeating": true,
    "lat": 50.0826842,
    "lon": 8.2339302,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "16",
      "addr:postcode": "65183",
      "addr:street": "Wellritzstraße",
      "amenity": "restaurant",
      "cuisine": "turkish",
      "name": "Sultan Restaurant",
      "opening_hours": "Mo-Sa 10:00-21:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 16877850",
      "website": "https://sultan-restaurant.com/12899"
    }
  },
  {
    "id": 10723981358,
    "name": "Kassion Restaurant",
    "cuisine": [
      "syrian"
    ],
    "contact": {
      "phone": "+49 176 84125722",
      "email": "kassionsyrien@gmail.com"
    },
    "lat": 50.0827245,
    "lon": 8.2318076,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "syrian",
      "email": "kassionsyrien@gmail.com",
      "name": "Kassion Restaurant",
      "phone": "+49 176 84125722"
    }
  },
  {
    "id": 10724001967,
    "name": "Pizzeria Little Napoli",
    "cuisine": [
      "pizza"
    ],
    "address": {
      "street": "Wellritzstraße",
      "housenumber": "39",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 16860936",
      "website": "https://pizzeria-little-napoli.business.site"
    },
    "openingHours": {
      "raw": "Mo-Fr 17:00-03:00,Sa-Su 17:00-04:00",
      "signed": false
    },
    "lat": 50.0827312,
    "lon": 8.2319697,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "39",
      "addr:postcode": "65183",
      "addr:street": "Wellritzstraße",
      "amenity": "restaurant",
      "cuisine": "pizza",
      "name": "Pizzeria Little Napoli",
      "opening_hours": "Mo-Fr 17:00-03:00,Sa-Su 17:00-04:00",
      "phone": "+49 611 16860936",
      "takeaway": "only",
      "website": "https://pizzeria-little-napoli.business.site"
    }
  },
  {
    "id": 10823064205,
    "name": "Butta la pasta rosa",
    "cuisine": [
      "pasta"
    ],
    "contact": {
      "phone": "+4961134119431"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:30-18:00; Sa 11:30-16:00",
      "signed": false
    },
    "lat": 50.0850624,
    "lon": 8.2405794,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "pasta",
      "name": "Butta la pasta rosa",
      "name:de": "Butta La Pasta Rosa",
      "opening_hours": "Mo-Fr 11:30-18:00; Sa 11:30-16:00",
      "phone": "+4961134119431"
    }
  },
  {
    "id": 10823068605,
    "name": "Casa del Olive",
    "cuisine": [
      "italian_pizza"
    ],
    "contact": {
      "phone": "+4961116860511",
      "website": "https://casadelleolive.de/"
    },
    "openingHours": {
      "raw": "Tu-Fr 17:00-22:30; Su 12:00-21:00; Sa 13:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "lat": 50.0857253,
    "lon": 8.2393604,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "italian_pizza",
      "indoor_seating": "yes",
      "name": "Casa del Olive",
      "name:de": "Casa delle Olive",
      "opening_hours": "Tu-Fr 17:00-22:30; Su 12:00-21:00; Sa 13:00-22:00",
      "outdoor_seating": "yes",
      "phone": "+4961116860511",
      "website": "https://casadelleolive.de/"
    }
  },
  {
    "id": 10823074505,
    "name": "Nor",
    "cuisine": [
      "japanese",
      "sushi"
    ],
    "address": {
      "postcode": "65183"
    },
    "contact": {
      "website": "https://www.noir-finest-sushi-cuisine.de/"
    },
    "openingHours": {
      "raw": "Mo-Su 12:00-14:45, 17:00-21:45",
      "signed": false
    },
    "operator": "Anh-Kiet Ly, Van Cuong Nnguyen",
    "lat": 50.0845873,
    "lon": 8.2410945,
    "tags": {
      "addr:postcode": "65183",
      "amenity": "restaurant",
      "cuisine": "japanese;sushi",
      "name": "Nor",
      "name:de": "Noir Finest Sushi",
      "opening_hours": "Mo-Su 12:00-14:45, 17:00-21:45",
      "operator": "Anh-Kiet Ly, Van Cuong Nnguyen",
      "website": "https://www.noir-finest-sushi-cuisine.de/"
    }
  },
  {
    "id": 10840329467,
    "name": "Pizzeria de Paola",
    "cuisine": [
      "italian",
      "pizza"
    ],
    "contact": {
      "phone": "+4961151010059",
      "email": "info@pizzeria-depaola.de",
      "website": "https://pizzeria-depaola.de/"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:00-22:00; Su 17:00-22:00",
      "signed": false
    },
    "lat": 50.0884388,
    "lon": 8.2392786,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "italian;pizza",
      "email": "info@pizzeria-depaola.de",
      "name": "Pizzeria de Paola",
      "opening_hours": "Mo-Fr 11:00-22:00; Su 17:00-22:00",
      "phone": "+4961151010059",
      "website": "https://pizzeria-depaola.de/"
    }
  },
  {
    "id": 10862616476,
    "name": "Kokio Korean Fried Chicken",
    "cuisine": [
      "barbecue",
      "korean",
      "chicken"
    ],
    "address": {
      "street": "Rheinstraße",
      "housenumber": "115",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "openingHours": {
      "raw": "Mo-Sa 16:00-21:00",
      "signed": false
    },
    "lat": 50.0774984,
    "lon": 8.2310613,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "115",
      "addr:postcode": "65185",
      "addr:street": "Rheinstraße",
      "amenity": "restaurant",
      "cuisine": "barbecue;korean;chicken",
      "name": "Kokio Korean Fried Chicken",
      "opening_hours": "Mo-Sa 16:00-21:00"
    }
  },
  {
    "id": 11073295605,
    "name": "Pizzeria Primavera",
    "cuisine": [
      "pizza"
    ],
    "address": {
      "street": "Oranienstraße",
      "housenumber": "14",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 39446",
      "website": "https://pizzeriaprimavera.net"
    },
    "takeaway": true,
    "lat": 50.0765279,
    "lon": 8.2370767,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "14",
      "addr:postcode": "65185",
      "addr:street": "Oranienstraße",
      "amenity": "restaurant",
      "cuisine": "pizza",
      "name": "Pizzeria Primavera",
      "phone": "+49 611 39446",
      "takeaway": "yes",
      "website": "https://pizzeriaprimavera.net"
    }
  },
  {
    "id": 11073313360,
    "name": "Café Restaurant Eli",
    "address": {
      "street": "Oranienstraße",
      "housenumber": "4",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:00-22:00; Su 11:00-21:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": false,
    "lat": 50.0771493,
    "lon": 8.2370311,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "4",
      "addr:postcode": "65185",
      "addr:street": "Oranienstraße",
      "amenity": "restaurant",
      "indoor_seating": "yes",
      "name": "Café Restaurant Eli",
      "opening_hours": "Mo-Sa 11:00-22:00; Su 11:00-21:00",
      "outdoor_seating": "no"
    }
  },
  {
    "id": 11093054448,
    "name": "Café & Restaurant Leichtweiss",
    "cuisine": [
      "italian",
      "german"
    ],
    "address": {
      "street": "Nerotal",
      "housenumber": "70",
      "postcode": "65193",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 18170573",
      "website": "https://www.leichtweiss-nerotal.de"
    },
    "openingHours": {
      "raw": "11:30+",
      "signed": false
    },
    "outdoorSeating": true,
    "lat": 50.0965534,
    "lon": 8.2250968,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "70",
      "addr:postcode": "65193",
      "addr:street": "Nerotal",
      "amenity": "restaurant",
      "cuisine": "italian;german",
      "name": "Café & Restaurant Leichtweiss",
      "opening_hours": "11:30+",
      "outdoor_seating": "yes",
      "phone": "+49 611 18170573",
      "website": "https://www.leichtweiss-nerotal.de"
    }
  },
  {
    "id": 11134077956,
    "name": "Takumi",
    "address": {
      "street": "Friedrichstraße",
      "housenumber": "55",
      "postcode": "65185",
      "city": "Wiesbaden"
    },
    "openingHours": {
      "raw": "Mo-Fr 12:00-22:00; Sa 12:00-22:30; Su 13:00-22:00",
      "signed": false
    },
    "lat": 50.0803186,
    "lon": 8.2371058,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "55",
      "addr:postcode": "65185",
      "addr:street": "Friedrichstraße",
      "amenity": "restaurant",
      "name": "Takumi",
      "opening_hours": "Mo-Fr 12:00-22:00; Sa 12:00-22:30; Su 13:00-22:00"
    }
  },
  {
    "id": 11163267305,
    "name": "Yozora17",
    "cuisine": [
      "sushi"
    ],
    "level": "0",
    "lat": 50.0782166,
    "lon": 8.2444873,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "sushi",
      "level": "0",
      "name": "Yozora17"
    }
  },
  {
    "id": 11578427109,
    "name": "Sany Food",
    "cuisine": [
      "asian"
    ],
    "address": {
      "street": "Dotzheimer Straße",
      "housenumber": "59",
      "postcode": "65197",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 16860727",
      "email": "sanyfoodwiesbaden@gmail.com",
      "website": "https://www.sanyfood.de/"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:30-21:15",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": false,
    "wheelchair": "yes",
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "takeaway": true,
    "lat": 50.078211,
    "lon": 8.2275527,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "59",
      "addr:postcode": "65197",
      "addr:street": "Dotzheimer Straße",
      "amenity": "restaurant",
      "check_date:opening_hours": "2025-03-30",
      "cuisine": "asian",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "email": "sanyfoodwiesbaden@gmail.com",
      "indoor_seating": "yes",
      "name": "Sany Food",
      "opening_hours": "Mo-Sa 11:30-21:15",
      "outdoor_seating": "no",
      "phone": "+49 611 16860727",
      "takeaway": "yes",
      "website": "https://www.sanyfood.de/",
      "wheelchair": "yes"
    }
  },
  {
    "id": 11816144570,
    "name": "Nudelbar",
    "cuisine": [
      "asian"
    ],
    "contact": {
      "website": "https://www.nudelbarwiesbaden.de/"
    },
    "openingHours": {
      "raw": "Mo-Sa 11:00-21:00",
      "signed": false
    },
    "lat": 50.080595,
    "lon": 8.2394729,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "asian",
      "name": "Nudelbar",
      "name:de": "Nudelbar (Vietnamesisch)",
      "opening_hours": "Mo-Sa 11:00-21:00",
      "website": "https://www.nudelbarwiesbaden.de/"
    }
  },
  {
    "id": 11933221569,
    "name": "Rangoli",
    "cuisine": [
      "indian"
    ],
    "address": {
      "street": "Seerobenstraße",
      "housenumber": "29",
      "postcode": "65195",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 98750891",
      "website": "https://rangoli-restaurant.com"
    },
    "openingHours": {
      "raw": "Mo-Su 11:30-22:30",
      "signed": false
    },
    "lat": 50.0849393,
    "lon": 8.2261936,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "29",
      "addr:postcode": "65195",
      "addr:street": "Seerobenstraße",
      "amenity": "restaurant",
      "cuisine": "indian",
      "name": "Rangoli",
      "opening_hours": "Mo-Su 11:30-22:30",
      "phone": "+49 611 98750891",
      "website": "https://rangoli-restaurant.com"
    }
  },
  {
    "id": 11989992682,
    "name": "rue 1",
    "address": {
      "street": "Wilhelmstraße",
      "housenumber": "1",
      "city": "Wiesbaden"
    },
    "contact": {
      "email": "info@rue-1.com",
      "website": "https://www.gollners.de/rue1-by-gollners"
    },
    "lat": 50.0785754,
    "lon": 8.2455545,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "1",
      "addr:street": "Wilhelmstraße",
      "amenity": "restaurant",
      "email": "info@rue-1.com",
      "name": "rue 1",
      "website": "https://www.gollners.de/rue1-by-gollners"
    }
  },
  {
    "id": 11999400585,
    "name": "kantiin",
    "address": {
      "street": "Moritzstraße",
      "housenumber": "17a",
      "postcode": "65185",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "061194581692",
      "email": "hallo@kantiin.de",
      "website": "https://kantiin.de/"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:30-14:30",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "delivery": "Mo-Fr 11:30-14:30",
    "takeaway": true,
    "smoking": "no",
    "payment": {
      "cash": true,
      "creditCards": true,
      "debitCards": true
    },
    "operator": "nju kantiin GmbH",
    "lat": 50.0745661,
    "lon": 8.2379358,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "17a",
      "addr:postcode": "65185",
      "addr:street": "Moritzstraße",
      "amenity": "restaurant",
      "delivery": "Mo-Fr 11:30-14:30",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "email": "hallo@kantiin.de",
      "indoor_seating": "yes",
      "name": "kantiin",
      "opening_hours": "Mo-Fr 11:30-14:30",
      "operator": "nju kantiin GmbH",
      "outdoor_seating": "yes",
      "payment:cash": "yes",
      "payment:credit_cards": "yes",
      "payment:debit_cards": "yes",
      "phone": "061194581692",
      "smoking": "no",
      "takeaway": "yes",
      "website": "https://kantiin.de/"
    }
  },
  {
    "id": 12081633569,
    "name": "Alebrijes",
    "cuisine": [
      "argentinian",
      "brazilian",
      "caribbean",
      "mexican",
      "peruvian"
    ],
    "diet": {
      "vegan": true
    },
    "lat": 50.0823811,
    "lon": 8.2438633,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "argentinian;brazilian;caribbean;mexican;peruvian",
      "diet:vegan": "yes",
      "name": "Alebrijes",
      "name:de": "Alebrijes - latin plant based food"
    }
  },
  {
    "id": 12090669669,
    "name": "remos",
    "cuisine": [
      "italian_pizza"
    ],
    "address": {
      "postcode": "65183"
    },
    "contact": {
      "phone": "+4961158021152",
      "website": "https://remos-restaurants.de/restaurants/wiesbaden/"
    },
    "openingHours": {
      "raw": "Mo-Th 00:00-24:00; Fr-Sa 11:30-00:00; Su 12:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "yes",
    "diet": {
      "vegan": false,
      "vegetarian": true
    },
    "lat": 50.0846409,
    "lon": 8.2401867,
    "tags": {
      "addr:postcode": "65183",
      "amenity": "restaurant",
      "cuisine": "italian_pizza",
      "diet:vegan": "no",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "name": "remos",
      "opening_hours": "Mo-Th 00:00-24:00; Fr-Sa 11:30-00:00; Su 12:00-22:00",
      "outdoor_seating": "yes",
      "phone": "+4961158021152",
      "website": "https://remos-restaurants.de/restaurants/wiesbaden/",
      "website:menu": "https://remos-restaurants.de/speisekarte/wiesbaden/",
      "wheelchair": "yes"
    }
  },
  {
    "id": 12319977882,
    "name": "Goc Da",
    "cuisine": [
      "vietnamese"
    ],
    "address": {
      "street": "Sonnenberger Straße",
      "housenumber": "64"
    },
    "contact": {
      "phone": "+49 611 51053105",
      "website": "https://www.gocda.de/"
    },
    "lat": 50.0869551,
    "lon": 8.2565907,
    "tags": {
      "addr:housenumber": "64",
      "addr:street": "Sonnenberger Straße",
      "amenity": "restaurant",
      "cuisine": "vietnamese",
      "name": "Goc Da",
      "phone": "+49 611 51053105",
      "website": "https://www.gocda.de/"
    }
  },
  {
    "id": 12360998597,
    "name": "Sontaya",
    "cuisine": [
      "thai"
    ],
    "address": {
      "street": "Grabenstraße",
      "housenumber": "18"
    },
    "contact": {
      "phone": "+49 611 45036723",
      "website": "https://sontaya.de/"
    },
    "indoorSeating": true,
    "operator": "Jack Ekalak",
    "lat": 50.0830369,
    "lon": 8.2403339,
    "tags": {
      "addr:housenumber": "18",
      "addr:street": "Grabenstraße",
      "amenity": "restaurant",
      "cuisine": "thai",
      "indoor_seating": "yes",
      "name": "Sontaya",
      "operator": "Jack Ekalak",
      "phone": "+49 611 45036723",
      "website": "https://sontaya.de/"
    }
  },
  {
    "id": 12467271633,
    "name": "Istanbul Restaurant",
    "cuisine": [
      "turkish"
    ],
    "lat": 50.0829739,
    "lon": 8.2368123,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "turkish",
      "name": "Istanbul Restaurant"
    }
  },
  {
    "id": 12638642303,
    "name": "Pizzeria bei Simon",
    "cuisine": [
      "pizza",
      "italian_pizza",
      "burger",
      "tapas",
      "kebab",
      "salad",
      "pasta"
    ],
    "address": {
      "street": "Kastellstraße",
      "housenumber": "10",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 53268588",
      "website": "https://pizzeria-simon.de/"
    },
    "openingHours": {
      "raw": "Tu-Fr 11:00-22:00, Sa-Su 17:00-22:00",
      "signed": false
    },
    "wheelchair": "no",
    "diet": {
      "vegan": true,
      "vegetarian": true,
      "meat": true
    },
    "delivery": true,
    "takeaway": true,
    "lat": 50.0871695,
    "lon": 8.2337387,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "10",
      "addr:postcode": "65183",
      "addr:street": "Kastellstraße",
      "amenity": "restaurant",
      "bar": "yes",
      "cuisine": "pizza;italian_pizza;burger;tapas;kebab;salad;pasta",
      "delivery": "yes",
      "diet:meat": "yes",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "loc_name": "Pizzeria bei Simon - Pizza & Pasta Lieferdienst Wiesbaden",
      "name": "Pizzeria bei Simon",
      "opening_hours": "Tu-Fr 11:00-22:00, Sa-Su 17:00-22:00",
      "phone": "+49 611 53268588",
      "takeaway": "yes",
      "website": "https://pizzeria-simon.de/",
      "website:menu": "https://bestellen.pizzeria-simon.de/menu",
      "wheelchair": "no"
    }
  },
  {
    "id": 12812391704,
    "name": "NaSiam",
    "openingHours": {
      "raw": "Mo,We-Sa 17:00-22:00; Su 15:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "no",
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "lat": 50.0782601,
    "lon": 8.2283747,
    "tags": {
      "amenity": "restaurant",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "name": "NaSiam",
      "opening_hours": "Mo,We-Sa 17:00-22:00; Su 15:00-22:00",
      "outdoor_seating": "yes",
      "wheelchair": "no"
    }
  },
  {
    "id": 12834560773,
    "name": "Pho Viet Nam",
    "cuisine": [
      "vietnamese"
    ],
    "diet": {
      "vegetarian": true
    },
    "lat": 50.0835971,
    "lon": 8.2395914,
    "tags": {
      "amenity": "restaurant",
      "cuisine": "vietnamese",
      "diet:vegetarian": "yes",
      "name": "Pho Viet Nam"
    }
  },
  {
    "id": 12844254234,
    "name": "Olympic",
    "lat": 50.0639897,
    "lon": 8.234189,
    "tags": {
      "amenity": "restaurant",
      "name": "Olympic"
    }
  },
  {
    "id": 12844286130,
    "name": "Lavanta Kitchen",
    "indoorSeating": true,
    "outdoorSeating": false,
    "lat": 50.0680486,
    "lon": 8.2214632,
    "tags": {
      "amenity": "restaurant",
      "indoor_seating": "yes",
      "name": "Lavanta Kitchen",
      "outdoor_seating": "no"
    }
  },
  {
    "id": 33784847,
    "name": "Kasino Statistisches Bundesamt",
    "address": {
      "street": "Gustav-Stresemann-Ring",
      "housenumber": "11",
      "postcode": "65189",
      "city": "Wiesbaden"
    },
    "wheelchair": "yes",
    "wheelchairDescription": "Das Kasino des Statistischen Bundesamtes ist wegen Sanierungsarbeiten derzeit geschlossen. Danach ist eine barrierefreie Zufahrt möglich. Die Wiedereröffnung ist für November 2017 geplant.",
    "lat": 50.0712231,
    "lon": 8.2510659,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "11",
      "addr:postcode": "65189",
      "addr:street": "Gustav-Stresemann-Ring",
      "amenity": "restaurant",
      "building": "yes",
      "check_date": "2024-09-24",
      "name": "Kasino Statistisches Bundesamt",
      "wheelchair": "yes",
      "wheelchair:description": "Das Kasino des Statistischen Bundesamtes ist wegen Sanierungsarbeiten derzeit geschlossen. Danach ist eine barrierefreie Zufahrt möglich. Die Wiedereröffnung ist für November 2017 geplant."
    }
  },
  {
    "id": 56915142,
    "name": "Lumen",
    "cuisine": [
      "regional"
    ],
    "address": {
      "street": "Marktplatz",
      "housenumber": "4",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "website": "https://www.lumen-wiesbaden.de/"
    },
    "openingHours": {
      "raw": "Mo-Th 09:00-01:00, Fr-Sa 09:00-02:00, Su 10:00-01:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "yes",
    "toiletsWheelchair": "yes",
    "diet": {
      "vegetarian": true
    },
    "level": "1",
    "lat": 50.0817192,
    "lon": 8.2434381,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "4",
      "addr:street": "Marktplatz",
      "amenity": "restaurant",
      "cuisine": "regional",
      "diet:vegetarian": "yes",
      "indoor_seating": "yes",
      "level": "1",
      "name": "Lumen",
      "opening_hours": "Mo-Th 09:00-01:00, Fr-Sa 09:00-02:00, Su 10:00-01:00",
      "outdoor_seating": "yes",
      "source": "Aerowest hidef-bilder, georeferenziert auf 5cm genau",
      "toilets:wheelchair": "yes",
      "website": "https://www.lumen-wiesbaden.de/",
      "wheelchair": "yes"
    }
  },
  {
    "id": 61653611,
    "name": "Der Turm",
    "address": {
      "housenumber": "1",
      "postcode": "65193",
      "city": "Wiesbaden",
      "country": "DE",
      "place": "Neroberg"
    },
    "contact": {
      "phone": "+49 611 525100",
      "website": "https://wagner-gastronomie.de/der-turm.html"
    },
    "openingHours": {
      "raw": "Tu-Su 11:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "limited",
    "operator": "Hotel- und Gaststättenbetriebsgesellschaft mbH",
    "lat": 50.0987836,
    "lon": 8.2294576,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "1",
      "addr:place": "Neroberg",
      "addr:postcode": "65193",
      "amenity": "restaurant",
      "building": "yes",
      "check_date": "2024-05-06",
      "indoor_seating": "yes",
      "name": "Der Turm",
      "opening_hours": "Tu-Su 11:00-22:00",
      "operator": "Hotel- und Gaststättenbetriebsgesellschaft mbH",
      "outdoor_seating": "yes",
      "phone": "+49 611 525100",
      "source": "bing sat",
      "website": "https://wagner-gastronomie.de/der-turm.html",
      "wheelchair": "limited"
    }
  },
  {
    "id": 62711122,
    "name": "Die Hütte",
    "openingHours": {
      "raw": "Mo-Sa 16:00-23:00",
      "signed": false
    },
    "wheelchair": "no",
    "wheelchairDescription": "mehrere Stufen vor dem Eingang. Im Sommer kann man auf der Terrasse sitzen, die zugänglich ist.",
    "lat": 50.0747802,
    "lon": 8.2530786,
    "tags": {
      "amenity": "restaurant",
      "building": "commercial",
      "name": "Die Hütte",
      "opening_hours": "Mo-Sa 16:00-23:00",
      "wheelchair": "no",
      "wheelchair:description": "mehrere Stufen vor dem Eingang. Im Sommer kann man auf der Terrasse sitzen, die zugänglich ist."
    }
  },
  {
    "id": 74212095,
    "name": "Havana",
    "address": {
      "street": "Sonnenberger Straße",
      "housenumber": "32",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 5990266",
      "website": "https://havana-restaurant.de/"
    },
    "openingHours": {
      "raw": "Su-Th 17:00-01:00, Fr-Sa 17:00-02:00",
      "signed": false
    },
    "wheelchair": "no",
    "lat": 50.085401,
    "lon": 8.2507393,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "32",
      "addr:street": "Sonnenberger Straße",
      "amenity": "restaurant",
      "building": "yes",
      "name": "Havana",
      "opening_hours": "Su-Th 17:00-01:00, Fr-Sa 17:00-02:00",
      "phone": "+49 611 5990266",
      "source": "Yahoo",
      "website": "https://havana-restaurant.de/",
      "wheelchair": "no"
    }
  },
  {
    "id": 111268567,
    "name": "ALEX",
    "cuisine": [
      "breakfast",
      "burger",
      "international",
      "steak_house"
    ],
    "address": {
      "street": "Langgasse",
      "housenumber": "38-40",
      "postcode": "65183",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+49 611 34127-40",
      "website": "https://www.dein-alex.de/wiesbaden"
    },
    "openingHours": {
      "raw": "Mo-Th 08:30-01:00, Fr,Sa 08:30-02:00, Su,PH 09:00-01:00",
      "signed": false
    },
    "wheelchair": "limited",
    "payment": {
      "mastercard": true
    },
    "brand": "ALEX",
    "operator": "ALEX Gaststätten GmbH & Co. KG",
    "lat": 50.0849723,
    "lon": 8.2402755,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "38-40",
      "addr:postcode": "65183",
      "addr:street": "Langgasse",
      "amenity": "restaurant",
      "brand": "ALEX",
      "brand:wikidata": "Q18018122",
      "building": "yes",
      "contact:phone": "+49 611 34127-40",
      "contact:website": "dein-alex.de",
      "cuisine": "breakfast;burger;international;steak_house",
      "name": "ALEX",
      "opening_hours": "Mo-Th 08:30-01:00, Fr,Sa 08:30-02:00, Su,PH 09:00-01:00",
      "operator": "ALEX Gaststätten GmbH & Co. KG",
      "payment:mastercard": "yes",
      "website": "https://www.dein-alex.de/wiesbaden",
      "wheelchair": "limited",
      "wheelchair:description:de": "ebenerdig zugänglich, aber kein barrierefreies WC"
    }
  },
  {
    "id": 111268588,
    "name": "Cafe Del Sol",
    "cuisine": [
      "international"
    ],
    "address": {
      "street": "Kochbrunnenplatz",
      "housenumber": "3",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE",
      "housename": "Arkadenhalle"
    },
    "contact": {
      "phone": "+49 611 92798079",
      "website": "https://www.cafedelsol.de/"
    },
    "openingHours": {
      "raw": "Su-Th 09:00-24:00; Fr-Sa 09:00-01:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "limited",
    "brand": "Cafe Del Sol",
    "lat": 50.087163,
    "lon": 8.2422269,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housename": "Arkadenhalle",
      "addr:housenumber": "3",
      "addr:postcode": "65183",
      "addr:street": "Kochbrunnenplatz",
      "amenity": "restaurant",
      "brand": "Cafe Del Sol",
      "brand:wikidata": "Q17310688",
      "building": "retail",
      "building:levels": "1",
      "cuisine": "international",
      "indoor_seating": "yes",
      "name": "Cafe Del Sol",
      "opening_hours": "Su-Th 09:00-24:00; Fr-Sa 09:00-01:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 92798079",
      "roof:levels": "0",
      "website": "https://www.cafedelsol.de/",
      "wheelchair": "limited"
    }
  },
  {
    "id": 167840620,
    "name": "La Rucola",
    "address": {
      "street": "Parkstraße",
      "housenumber": "42a",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 (0) 6 11 - 376300",
      "email": "ristorante@la-rucola.de"
    },
    "lat": 50.0868856,
    "lon": 8.2594594,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "42a",
      "addr:street": "Parkstraße",
      "amenity": "restaurant",
      "building": "yes",
      "email": "ristorante@la-rucola.de",
      "name": "La Rucola",
      "phone": "+49 (0) 6 11 - 376300"
    }
  },
  {
    "id": 175765846,
    "name": "Karim's",
    "cuisine": [
      "mediterranean"
    ],
    "address": {
      "street": "Webergasse",
      "housenumber": "7"
    },
    "contact": {
      "phone": "+49 611 9590608",
      "email": "info@karims.de",
      "website": "https://www.karims.de/"
    },
    "openingHours": {
      "raw": "10:00+",
      "signed": false
    },
    "wheelchair": "limited",
    "toiletsWheelchair": "no",
    "operator": "Abdelkrim M'haimdat",
    "description": "Täglich durchgehend warme Küche bis 23 Uhr.",
    "lat": 50.0847884,
    "lon": 8.2426881,
    "tags": {
      "addr:housenumber": "7",
      "addr:street": "Webergasse",
      "amenity": "restaurant",
      "building": "yes",
      "cuisine": "mediterranean",
      "description": "Täglich durchgehend warme Küche bis 23 Uhr.",
      "email": "info@karims.de",
      "name": "Karim's",
      "opening_hours": "10:00+",
      "operator": "Abdelkrim M'haimdat",
      "phone": "+49 611 9590608",
      "toilets:wheelchair": "no",
      "website": "https://www.karims.de/",
      "wheelchair": "limited"
    }
  },
  {
    "id": 176709314,
    "name": "Pizzeria Kiara",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Rheinstraße",
      "housenumber": "89",
      "postcode": "65185",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 34186986;+49 151 71171777",
      "website": "https://www.kiara-wiesbaden.de/"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:00-23:00; Su 17:00-23:00",
      "signed": false
    },
    "delivery": true,
    "takeaway": true,
    "smoking": "no",
    "lat": 50.0777314,
    "lon": 8.2336997,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "89",
      "addr:postcode": "65185",
      "addr:street": "Rheinstraße",
      "amenity": "restaurant",
      "building": "yes",
      "cuisine": "italian",
      "delivery": "yes",
      "name": "Pizzeria Kiara",
      "opening_hours": "Mo-Fr 11:00-23:00; Su 17:00-23:00",
      "phone": "+49 611 34186986;+49 151 71171777",
      "smoking": "no",
      "takeaway": "yes",
      "website": "https://www.kiara-wiesbaden.de/"
    }
  },
  {
    "id": 177010208,
    "name": "Bai Bua",
    "cuisine": [
      "thai"
    ],
    "address": {
      "street": "Moritzstraße",
      "housenumber": "3",
      "postcode": "65185",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 90067623",
      "website": "http://www.baibua-wiesbaden.de/"
    },
    "openingHours": {
      "raw": "12:00-14:30,17:00-22:00; Sa 12:00-22:00; Su 17:00-21:00",
      "signed": false
    },
    "takeaway": true,
    "operator": "Udo Meichsner",
    "lat": 50.0772315,
    "lon": 8.2382464,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "3",
      "addr:postcode": "65185",
      "addr:street": "Moritzstraße",
      "amenity": "restaurant",
      "building": "yes",
      "cuisine": "thai",
      "name": "Bai Bua",
      "opening_hours": "12:00-14:30,17:00-22:00; Sa 12:00-22:00; Su 17:00-21:00",
      "operator": "Udo Meichsner",
      "phone": "+49 611 90067623",
      "takeaway": "yes",
      "website": "http://www.baibua-wiesbaden.de/"
    }
  },
  {
    "id": 178025894,
    "name": "Canpolat Döner",
    "cuisine": [
      "turkish"
    ],
    "address": {
      "street": "Moritzstraße",
      "housenumber": "45",
      "postcode": "65185",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 3602550",
      "website": "https://www.city-kebap-xxl.de"
    },
    "openingHours": {
      "raw": "Su-Th 09:00-00:00, Fr,Sa 09:00-01:00",
      "signed": false
    },
    "outdoorSeating": true,
    "wheelchair": "no",
    "lat": 50.0723243,
    "lon": 8.2386701,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "45",
      "addr:postcode": "65185",
      "addr:street": "Moritzstraße",
      "amenity": "restaurant",
      "building": "yes",
      "cuisine": "turkish",
      "name": "Canpolat Döner",
      "opening_hours": "Su-Th 09:00-00:00, Fr,Sa 09:00-01:00",
      "outdoor_seating": "yes",
      "phone": "+49 611 3602550",
      "website": "https://www.city-kebap-xxl.de",
      "wheelchair": "no"
    }
  },
  {
    "id": 220571008,
    "name": "Schleifmühle Bacchus",
    "cuisine": [
      "greek"
    ],
    "address": {
      "street": "Aarstraße",
      "housenumber": "35",
      "postcode": "65195",
      "city": "Wiesbaden"
    },
    "contact": {
      "website": "https://www.restaurant-schleifmuehle.de/"
    },
    "openingHours": {
      "raw": "Th-Mo 11:30-14:30,17:30-23:30; We 17:30-23:30",
      "signed": false
    },
    "wheelchair": "no",
    "toiletsWheelchair": "no",
    "lat": 50.0880382,
    "lon": 8.2204794,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "35",
      "addr:postcode": "65195",
      "addr:street": "Aarstraße",
      "amenity": "restaurant",
      "building": "yes",
      "cuisine": "greek",
      "dog": "no",
      "name": "Schleifmühle Bacchus",
      "opening_hours": "Th-Mo 11:30-14:30,17:30-23:30; We 17:30-23:30",
      "toilets:wheelchair": "no",
      "website": "https://www.restaurant-schleifmuehle.de/",
      "wheelchair": "no"
    }
  },
  {
    "id": 335387626,
    "name": "Ristorante Calabria",
    "cuisine": [
      "italian"
    ],
    "address": {
      "street": "Aarstraße",
      "housenumber": "30",
      "postcode": "65195",
      "city": "Wiesbaden"
    },
    "contact": {
      "phone": "+496119450607",
      "website": "http://ristorante-calabria-wiesbaden.de"
    },
    "openingHours": {
      "raw": "Tu-Su 11:30-14:30,17:30-23:00",
      "signed": false
    },
    "lat": 50.0873508,
    "lon": 8.2208576,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:housenumber": "30",
      "addr:postcode": "65195",
      "addr:street": "Aarstraße",
      "amenity": "restaurant",
      "building": "yes",
      "cuisine": "italian",
      "name": "Ristorante Calabria",
      "opening_hours": "Tu-Su 11:30-14:30,17:30-23:00",
      "phone": "+496119450607",
      "website": "http://ristorante-calabria-wiesbaden.de"
    }
  },
  {
    "id": 539697269,
    "name": "Chillers",
    "contact": {
      "website": "https://www.chillers-wiesbaden.com/"
    },
    "openingHours": {
      "raw": "Mo-Th 16:00-22:00; Fr 16:00-23:00; Sa 12:00-23:00; Su 12:00-22:00",
      "signed": false
    },
    "indoorSeating": true,
    "outdoorSeating": true,
    "wheelchair": "yes",
    "toiletsWheelchair": "no",
    "diet": {
      "vegan": true,
      "vegetarian": true
    },
    "smoking": "outside",
    "level": "0",
    "lat": 50.0710463,
    "lon": 8.2434632,
    "tags": {
      "amenity": "restaurant",
      "diet:vegan": "yes",
      "diet:vegetarian": "yes",
      "indoor": "room",
      "indoor_seating": "yes",
      "level": "0",
      "name": "Chillers",
      "opening_hours": "Mo-Th 16:00-22:00; Fr 16:00-23:00; Sa 12:00-23:00; Su 12:00-22:00",
      "outdoor_seating": "yes",
      "smoking": "outside",
      "toilets:wheelchair": "no",
      "website": "https://www.chillers-wiesbaden.com/",
      "website:menu": "https://www.chillers-wiesbaden.com/images/3wm/chillers_speisekarte_wiesbaden.pdf",
      "wheelchair": "yes"
    }
  },
  {
    "id": 542893730,
    "name": "Tanitos",
    "cuisine": [
      "tex-mex"
    ],
    "address": {
      "street": "Schützenhofstraße",
      "housenumber": "3",
      "postcode": "65183",
      "city": "Wiesbaden",
      "country": "DE"
    },
    "contact": {
      "phone": "+49 611 45048350",
      "email": "info@tanitos.de",
      "website": "https://www.tanitos.com",
      "facebook": "https://www.facebook.com/search/top/?q=Tanitos%20Wiesbaden"
    },
    "openingHours": {
      "raw": "Mo-Th 16:00-00:00; Fr-Sa 12:00-02:00; Su,PH 12:00-00:00",
      "signed": false
    },
    "wheelchair": "no",
    "diet": {
      "vegetarian": true
    },
    "takeaway": true,
    "reservation": true,
    "lat": 50.0837341,
    "lon": 8.2387557,
    "tags": {
      "addr:city": "Wiesbaden",
      "addr:country": "DE",
      "addr:housenumber": "3",
      "addr:postcode": "65183",
      "addr:street": "Schützenhofstraße",
      "amenity": "restaurant",
      "bar": "yes",
      "building": "yes",
      "contact:email": "info@tanitos.de",
      "contact:facebook": "https://www.facebook.com/search/top/?q=Tanitos%20Wiesbaden",
      "contact:phone": "+49 611 45048350",
      "cuisine": "tex-mex",
      "diet:vegetarian": "yes",
      "name": "Tanitos",
      "opening_hours": "Mo-Th 16:00-00:00; Fr-Sa 12:00-02:00; Su,PH 12:00-00:00",
      "phone": "+49 611 45048350",
      "reservation": "yes",
      "takeaway": "yes",
      "website": "https://www.tanitos.com",
      "wheelchair": "no"
    }
  },
  {
    "id": 605068468,
    "name": "Tutti Frutti",
    "cuisine": [
      "pizza",
      "italian"
    ],
    "contact": {
      "phone": "+49 611 60979572",
      "website": "http://www.tuttifruttihalligalli.de"
    },
    "openingHours": {
      "raw": "Mo-Fr 11:00-23:00; Sa,Su 12:30-22:00",
      "signed": false
    },
    "wheelchair": "limited",
    "toiletsWheelchair": "no",
    "lat": 50.0790032,
    "lon": 8.2477891,
    "tags": {
      "amenity": "restaurant",
      "building": "yes",
      "cuisine": "pizza;italian",
      "name": "Tutti Frutti",
      "opening_hours": "Mo-Fr 11:00-23:00; Sa,Su 12:30-22:00",
      "phone": "+49 611 60979572",
      "toilets:wheelchair": "no",
      "website": "http://www.tuttifruttihalligalli.de",
      "wheelchair": "limited"
    }
  }
];
