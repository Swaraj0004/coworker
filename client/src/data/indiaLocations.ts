export interface IndiaCityGeo {
  name: string;
  latitude: number;
  longitude: number;
}

export interface IndiaRegion {
  name: string;
  kind: "state" | "union_territory";
  cities: IndiaCityGeo[];
}

export const INDIA_REGIONS: IndiaRegion[] = [
  {
    "name": "Andaman and Nicobar Islands",
    "kind": "union_territory",
    "cities": [
      {
        "name": "Bamboo Flat",
        "latitude": 11.7,
        "longitude": 92.71667
      },
      {
        "name": "Nicobar",
        "latitude": 7.03002,
        "longitude": 93.79028
      },
      {
        "name": "Port Blair",
        "latitude": 11.66613,
        "longitude": 92.74635
      },
      {
        "name": "South Andaman",
        "latitude": 10.75776,
        "longitude": 92.52136
      }
    ]
  },
  {
    "name": "Andhra Pradesh",
    "kind": "state",
    "cities": [
      {
        "name": "Addanki",
        "latitude": 15.81061,
        "longitude": 79.97338
      },
      {
        "name": "Adoni",
        "latitude": 15.62788,
        "longitude": 77.27495
      },
      {
        "name": "Akasahebpet",
        "latitude": 17.50455,
        "longitude": 82.56597
      },
      {
        "name": "Akividu",
        "latitude": 16.58225,
        "longitude": 81.38112
      },
      {
        "name": "Akkarampalle",
        "latitude": 13.65,
        "longitude": 79.42
      },
      {
        "name": "Amalapuram",
        "latitude": 16.57868,
        "longitude": 82.00609
      },
      {
        "name": "Amudalavalasa",
        "latitude": 18.41025,
        "longitude": 83.90295
      },
      {
        "name": "Anakapalle",
        "latitude": 17.69134,
        "longitude": 83.00395
      },
      {
        "name": "Anantapur",
        "latitude": 14.55,
        "longitude": 77.41667
      },
      {
        "name": "Atmakur",
        "latitude": 15.88109,
        "longitude": 78.58704
      },
      {
        "name": "Attili",
        "latitude": 16.7,
        "longitude": 81.6
      },
      {
        "name": "Avanigadda",
        "latitude": 16.02148,
        "longitude": 80.91808
      },
      {
        "name": "Badvel",
        "latitude": 14.7451,
        "longitude": 79.06288
      },
      {
        "name": "Banganapalle",
        "latitude": 15.31771,
        "longitude": 78.22669
      },
      {
        "name": "Bapatla",
        "latitude": 15.90422,
        "longitude": 80.46743
      },
      {
        "name": "Betamcherla",
        "latitude": 15.45144,
        "longitude": 78.14797
      },
      {
        "name": "Bhattiprolu",
        "latitude": 16.1026,
        "longitude": 80.78074
      },
      {
        "name": "Bhimavaram",
        "latitude": 16.54078,
        "longitude": 81.52322
      },
      {
        "name": "Bhimunipatnam",
        "latitude": 17.89017,
        "longitude": 83.45203
      },
      {
        "name": "Bobbili",
        "latitude": 18.57366,
        "longitude": 83.35925
      },
      {
        "name": "Challapalle",
        "latitude": 16.11756,
        "longitude": 80.93139
      },
      {
        "name": "Chemmumiahpet",
        "latitude": 15.89794,
        "longitude": 79.32129
      },
      {
        "name": "Chilakalurupet",
        "latitude": 16.08987,
        "longitude": 80.16705
      },
      {
        "name": "Chinnachowk",
        "latitude": 14.47516,
        "longitude": 78.8354
      },
      {
        "name": "Chipurupalle",
        "latitude": 18.31142,
        "longitude": 83.56846
      },
      {
        "name": "Chirala",
        "latitude": 15.82385,
        "longitude": 80.35219
      },
      {
        "name": "Chittoor",
        "latitude": 13.41667,
        "longitude": 79
      },
      {
        "name": "Chodavaram",
        "latitude": 17.82884,
        "longitude": 82.93526
      },
      {
        "name": "Cuddapah",
        "latitude": 14.41667,
        "longitude": 78.75
      },
      {
        "name": "Cumbum",
        "latitude": 15.58171,
        "longitude": 79.11059
      },
      {
        "name": "Darsi",
        "latitude": 15.76978,
        "longitude": 79.67939
      },
      {
        "name": "Dharmavaram",
        "latitude": 14.41435,
        "longitude": 77.72035
      },
      {
        "name": "Dhone",
        "latitude": 15.3952,
        "longitude": 77.8715
      },
      {
        "name": "Diguvametta",
        "latitude": 15.39507,
        "longitude": 78.8293
      },
      {
        "name": "East Godavari",
        "latitude": 17.83333,
        "longitude": 81.83333
      },
      {
        "name": "Elamanchili",
        "latitude": 17.54907,
        "longitude": 82.85749
      },
      {
        "name": "Ellore",
        "latitude": 16.71311,
        "longitude": 81.10437
      },
      {
        "name": "Emmiganur",
        "latitude": 15.77203,
        "longitude": 77.48345
      },
      {
        "name": "Erraguntla",
        "latitude": 14.63853,
        "longitude": 78.53974
      },
      {
        "name": "Etikoppaka",
        "latitude": 17.5,
        "longitude": 82.73333
      },
      {
        "name": "Gajuwaka",
        "latitude": 17.7,
        "longitude": 83.21667
      },
      {
        "name": "Ganguvada",
        "latitude": 18.66667,
        "longitude": 84.11667
      },
      {
        "name": "Gannavaram",
        "latitude": 16.54092,
        "longitude": 80.80213
      },
      {
        "name": "Giddalur",
        "latitude": 15.37439,
        "longitude": 78.92609
      },
      {
        "name": "Gokavaram",
        "latitude": 17.25823,
        "longitude": 81.84985
      },
      {
        "name": "Gorantla",
        "latitude": 13.98411,
        "longitude": 77.77224
      },
      {
        "name": "Gudivada",
        "latitude": 16.43547,
        "longitude": 80.99555
      },
      {
        "name": "Gudlavalleru",
        "latitude": 16.35,
        "longitude": 81.05
      },
      {
        "name": "Gudur",
        "latitude": 14.15093,
        "longitude": 79.8521
      },
      {
        "name": "Guntakal Junction",
        "latitude": 15.17112,
        "longitude": 77.36244
      },
      {
        "name": "Guntur",
        "latitude": 16.29974,
        "longitude": 80.45729
      },
      {
        "name": "Hindupur",
        "latitude": 13.82807,
        "longitude": 77.49143
      },
      {
        "name": "Ichchapuram",
        "latitude": 19.11393,
        "longitude": 84.68721
      },
      {
        "name": "Jaggayyapeta",
        "latitude": 16.8938,
        "longitude": 80.09807
      },
      {
        "name": "Jammalamadugu",
        "latitude": 14.84677,
        "longitude": 78.38314
      },
      {
        "name": "Kadiri",
        "latitude": 14.11168,
        "longitude": 78.15982
      },
      {
        "name": "Kaikalur",
        "latitude": 16.55154,
        "longitude": 81.214
      },
      {
        "name": "Kakinada",
        "latitude": 16.96036,
        "longitude": 82.23809
      },
      {
        "name": "Kalyandurg",
        "latitude": 14.54519,
        "longitude": 77.10552
      },
      {
        "name": "Kamalapuram",
        "latitude": 14.5983,
        "longitude": 78.66948
      },
      {
        "name": "Kandukur",
        "latitude": 15.21542,
        "longitude": 79.9039
      },
      {
        "name": "Kanigiri",
        "latitude": 15.40555,
        "longitude": 79.50694
      },
      {
        "name": "Kankipadu",
        "latitude": 16.4353,
        "longitude": 80.76715
      },
      {
        "name": "Kanuru",
        "latitude": 16.28584,
        "longitude": 81.25464
      },
      {
        "name": "Kavali",
        "latitude": 14.9163,
        "longitude": 79.99449
      },
      {
        "name": "Kolanukonda",
        "latitude": 16.45392,
        "longitude": 80.61046
      },
      {
        "name": "Kondapalle",
        "latitude": 16.61989,
        "longitude": 80.54244
      },
      {
        "name": "Korukollu",
        "latitude": 16.5,
        "longitude": 81.25
      },
      {
        "name": "Kosigi",
        "latitude": 15.8551,
        "longitude": 77.24463
      },
      {
        "name": "Kovvur",
        "latitude": 17.0162,
        "longitude": 81.72934
      },
      {
        "name": "Krishna",
        "latitude": 16.66667,
        "longitude": 81
      },
      {
        "name": "Kuppam",
        "latitude": 12.74931,
        "longitude": 78.34189
      },
      {
        "name": "Kurnool",
        "latitude": 15.58333,
        "longitude": 78.33333
      },
      {
        "name": "Macherla",
        "latitude": 16.47635,
        "longitude": 79.43533
      },
      {
        "name": "Machilipatnam",
        "latitude": 16.18747,
        "longitude": 81.13888
      },
      {
        "name": "Madanapalle",
        "latitude": 13.5503,
        "longitude": 78.50288
      },
      {
        "name": "Madugula",
        "latitude": 17.91589,
        "longitude": 82.81578
      },
      {
        "name": "Mandapeta",
        "latitude": 16.86254,
        "longitude": 81.92921
      },
      {
        "name": "Mandasa",
        "latitude": 18.8683,
        "longitude": 84.46296
      },
      {
        "name": "Mangalagiri",
        "latitude": 16.43083,
        "longitude": 80.56815
      },
      {
        "name": "Markapur",
        "latitude": 15.73534,
        "longitude": 79.26848
      },
      {
        "name": "Nagari",
        "latitude": 13.32139,
        "longitude": 79.58557
      },
      {
        "name": "Nagireddipalli",
        "latitude": 14.27005,
        "longitude": 79.10131
      },
      {
        "name": "Nandigama",
        "latitude": 16.7717,
        "longitude": 80.28596
      },
      {
        "name": "Nandikotkur",
        "latitude": 15.85668,
        "longitude": 78.26569
      },
      {
        "name": "Nandyal",
        "latitude": 15.47799,
        "longitude": 78.4836
      },
      {
        "name": "Narasannapeta",
        "latitude": 18.41428,
        "longitude": 84.04463
      },
      {
        "name": "Narasapur",
        "latitude": 16.43425,
        "longitude": 81.69845
      },
      {
        "name": "Narasaraopet",
        "latitude": 16.23488,
        "longitude": 80.04927
      },
      {
        "name": "Narasingapuram",
        "latitude": 13.60759,
        "longitude": 79.31652
      },
      {
        "name": "Narayanavanam",
        "latitude": 13.42565,
        "longitude": 79.58881
      },
      {
        "name": "Narsipatnam",
        "latitude": 17.66709,
        "longitude": 82.61245
      },
      {
        "name": "Nayudupet",
        "latitude": 13.90742,
        "longitude": 79.89465
      },
      {
        "name": "Nellore",
        "latitude": 14.08333,
        "longitude": 79.58333
      },
      {
        "name": "Nidadavole",
        "latitude": 16.90572,
        "longitude": 81.67222
      },
      {
        "name": "Nuzvid",
        "latitude": 16.78854,
        "longitude": 80.84593
      },
      {
        "name": "Ongole",
        "latitude": 15.50357,
        "longitude": 80.04454
      },
      {
        "name": "Pakala",
        "latitude": 13.44903,
        "longitude": 79.11493
      },
      {
        "name": "Palakollu",
        "latitude": 16.5167,
        "longitude": 81.73
      },
      {
        "name": "Palasa",
        "latitude": 18.77257,
        "longitude": 84.41012
      },
      {
        "name": "Palkonda",
        "latitude": 18.60374,
        "longitude": 83.75568
      },
      {
        "name": "Pallevada",
        "latitude": 16.5779,
        "longitude": 81.29463
      },
      {
        "name": "Palmaner",
        "latitude": 13.2,
        "longitude": 78.74725
      },
      {
        "name": "Parlakimidi",
        "latitude": 18.78113,
        "longitude": 84.08836
      },
      {
        "name": "Parvatipuram",
        "latitude": 18.78392,
        "longitude": 83.42569
      },
      {
        "name": "Pavuluru",
        "latitude": 15.85292,
        "longitude": 80.16468
      },
      {
        "name": "Pedana",
        "latitude": 16.25582,
        "longitude": 81.14378
      },
      {
        "name": "pedda nakkalapalem",
        "latitude": 15.8668,
        "longitude": 80.16202
      },
      {
        "name": "Peddapuram",
        "latitude": 17.07701,
        "longitude": 82.13836
      },
      {
        "name": "Penugonda",
        "latitude": 16.65363,
        "longitude": 81.7455
      },
      {
        "name": "Penukonda",
        "latitude": 14.08286,
        "longitude": 77.59473
      },
      {
        "name": "Phirangipuram",
        "latitude": 16.29078,
        "longitude": 80.26233
      },
      {
        "name": "Pippara",
        "latitude": 16.71667,
        "longitude": 81.55
      },
      {
        "name": "Pithapuram",
        "latitude": 17.1168,
        "longitude": 82.25284
      },
      {
        "name": "Polavaram",
        "latitude": 17.24754,
        "longitude": 81.64372
      },
      {
        "name": "Ponnur",
        "latitude": 16.07114,
        "longitude": 80.54944
      },
      {
        "name": "Ponnuru",
        "latitude": 16.06547,
        "longitude": 80.55203
      },
      {
        "name": "Prakasam",
        "latitude": 15.5,
        "longitude": 79.5
      },
      {
        "name": "Proddatur",
        "latitude": 14.7502,
        "longitude": 78.54813
      },
      {
        "name": "Pulivendla",
        "latitude": 14.42139,
        "longitude": 78.22502
      },
      {
        "name": "Punganuru",
        "latitude": 13.36672,
        "longitude": 78.57186
      },
      {
        "name": "Puttaparthi",
        "latitude": 14.1652,
        "longitude": 77.8117
      },
      {
        "name": "Puttur",
        "latitude": 13.44189,
        "longitude": 79.55314
      },
      {
        "name": "Rajahmundry",
        "latitude": 17.00517,
        "longitude": 81.77784
      },
      {
        "name": "Ramachandrapuram",
        "latitude": 16.83636,
        "longitude": 82.02871
      },
      {
        "name": "Ramanayyapeta",
        "latitude": 16.94516,
        "longitude": 82.2385
      },
      {
        "name": "Ramapuram",
        "latitude": 15.28749,
        "longitude": 77.86722
      },
      {
        "name": "Rampachodavaram",
        "latitude": 17.44088,
        "longitude": 81.77558
      },
      {
        "name": "Rayachoti",
        "latitude": 14.05723,
        "longitude": 78.75056
      },
      {
        "name": "Rayadrug",
        "latitude": 14.69971,
        "longitude": 76.85241
      },
      {
        "name": "Razam",
        "latitude": 18.44909,
        "longitude": 83.65957
      },
      {
        "name": "Razampeta",
        "latitude": 14.19544,
        "longitude": 79.15896
      },
      {
        "name": "Razole",
        "latitude": 16.47608,
        "longitude": 81.83912
      },
      {
        "name": "Renigunta",
        "latitude": 13.65143,
        "longitude": 79.51256
      },
      {
        "name": "Repalle",
        "latitude": 16.0184,
        "longitude": 80.82958
      },
      {
        "name": "Salur",
        "latitude": 18.51716,
        "longitude": 83.20548
      },
      {
        "name": "Samalkot",
        "latitude": 17.05675,
        "longitude": 82.17639
      },
      {
        "name": "Sattenapalle",
        "latitude": 16.39381,
        "longitude": 80.15221
      },
      {
        "name": "Singarayakonda",
        "latitude": 15.23046,
        "longitude": 80.02794
      },
      {
        "name": "Sompeta",
        "latitude": 18.94419,
        "longitude": 84.58449
      },
      {
        "name": "Srikakulam",
        "latitude": 18.2989,
        "longitude": 83.89751
      },
      {
        "name": "Srisailain",
        "latitude": 16.07217,
        "longitude": 78.86816
      },
      {
        "name": "Suluru",
        "latitude": 13.7,
        "longitude": 80.01667
      },
      {
        "name": "Tadepalle",
        "latitude": 16.48333,
        "longitude": 80.6
      },
      {
        "name": "Tadepallegudem",
        "latitude": 16.81467,
        "longitude": 81.52717
      },
      {
        "name": "Tadpatri",
        "latitude": 14.90832,
        "longitude": 78.01031
      },
      {
        "name": "Tanuku",
        "latitude": 16.75438,
        "longitude": 81.68143
      },
      {
        "name": "Tekkali",
        "latitude": 18.6057,
        "longitude": 84.23546
      },
      {
        "name": "Tirumala",
        "latitude": 13.68333,
        "longitude": 79.35
      },
      {
        "name": "Tirupati",
        "latitude": 13.63551,
        "longitude": 79.41989
      },
      {
        "name": "Tuni",
        "latitude": 17.35905,
        "longitude": 82.54607
      },
      {
        "name": "Uravakonda",
        "latitude": 14.94348,
        "longitude": 77.25494
      },
      {
        "name": "vadlamuru",
        "latitude": 17.09545,
        "longitude": 82.16565
      },
      {
        "name": "Vadlapudi",
        "latitude": 14.31119,
        "longitude": 79.8043
      },
      {
        "name": "Venkatagiri",
        "latitude": 13.96005,
        "longitude": 79.58032
      },
      {
        "name": "Vepagunta",
        "latitude": 17.77844,
        "longitude": 83.21577
      },
      {
        "name": "Vetapalem",
        "latitude": 15.78502,
        "longitude": 80.30663
      },
      {
        "name": "Vijayawada",
        "latitude": 16.50745,
        "longitude": 80.6466
      },
      {
        "name": "Vinukonda",
        "latitude": 16.0531,
        "longitude": 79.73964
      },
      {
        "name": "Visakhapatnam",
        "latitude": 17.68009,
        "longitude": 83.20161
      },
      {
        "name": "Vizianagaram",
        "latitude": 18.11692,
        "longitude": 83.41148
      },
      {
        "name": "Vizianagaram District",
        "latitude": 18.41102,
        "longitude": 83.37677
      },
      {
        "name": "Vuyyuru",
        "latitude": 16.36307,
        "longitude": 80.84406
      },
      {
        "name": "West Godavari",
        "latitude": 17,
        "longitude": 81.16667
      },
      {
        "name": "Yanam",
        "latitude": 16.73308,
        "longitude": 82.21364
      },
      {
        "name": "Yanamalakuduru",
        "latitude": 16.48531,
        "longitude": 80.66746
      },
      {
        "name": "Yarada",
        "latitude": 17.65872,
        "longitude": 83.27419
      }
    ]
  },
  {
    "name": "Arunachal Pradesh",
    "kind": "state",
    "cities": [
      {
        "name": "Along",
        "latitude": 28.16951,
        "longitude": 94.8006
      },
      {
        "name": "Anjaw",
        "latitude": 28.06549,
        "longitude": 96.82878
      },
      {
        "name": "Basar",
        "latitude": 27.99008,
        "longitude": 94.69451
      },
      {
        "name": "Bomdila",
        "latitude": 27.26475,
        "longitude": 92.42472
      },
      {
        "name": "Changlang",
        "latitude": 27.36265,
        "longitude": 96.34518
      },
      {
        "name": "Dibang Valley",
        "latitude": 28.7,
        "longitude": 95.7
      },
      {
        "name": "East Kameng",
        "latitude": 27.3,
        "longitude": 93.05
      },
      {
        "name": "East Siang",
        "latitude": 28.12379,
        "longitude": 95.16339
      },
      {
        "name": "Hayuliang",
        "latitude": 28.07301,
        "longitude": 96.54305
      },
      {
        "name": "Itanagar",
        "latitude": 27.08694,
        "longitude": 93.60987
      },
      {
        "name": "Khonsa",
        "latitude": 27.01667,
        "longitude": 95.56667
      },
      {
        "name": "Kurung Kumey",
        "latitude": 27.99983,
        "longitude": 93.3924
      },
      {
        "name": "Lohit District",
        "latitude": 27.84012,
        "longitude": 96.19521
      },
      {
        "name": "Lower Dibang Valley",
        "latitude": 28.37258,
        "longitude": 95.8804
      },
      {
        "name": "Lower Subansiri",
        "latitude": 27.62554,
        "longitude": 93.93908
      },
      {
        "name": "Margherita",
        "latitude": 27.28482,
        "longitude": 95.66796
      },
      {
        "name": "Naharlagun",
        "latitude": 27.10467,
        "longitude": 93.69518
      },
      {
        "name": "Pasighat",
        "latitude": 28.06631,
        "longitude": 95.32678
      },
      {
        "name": "Tawang",
        "latitude": 27.57417,
        "longitude": 91.92437
      },
      {
        "name": "Tezu",
        "latitude": 27.91256,
        "longitude": 96.12882
      },
      {
        "name": "Tirap",
        "latitude": 27.01917,
        "longitude": 95.51788
      },
      {
        "name": "Upper Siang",
        "latitude": 28.83355,
        "longitude": 94.91806
      },
      {
        "name": "Upper Subansiri",
        "latitude": 28.3,
        "longitude": 94
      },
      {
        "name": "West Kameng",
        "latitude": 27.4,
        "longitude": 92.35
      },
      {
        "name": "West Siang",
        "latitude": 28.4,
        "longitude": 94.55
      },
      {
        "name": "Ziro",
        "latitude": 27.59497,
        "longitude": 93.83854
      }
    ]
  },
  {
    "name": "Assam",
    "kind": "state",
    "cities": [
      {
        "name": "Abhayapuri",
        "latitude": 26.32255,
        "longitude": 90.68526
      },
      {
        "name": "Amguri",
        "latitude": 26.81482,
        "longitude": 94.52614
      },
      {
        "name": "Badarpur",
        "latitude": 24.86852,
        "longitude": 92.59606
      },
      {
        "name": "Baksa",
        "latitude": 26.69804,
        "longitude": 91.15142
      },
      {
        "name": "Barpathar",
        "latitude": 26.28709,
        "longitude": 93.88844
      },
      {
        "name": "Barpeta",
        "latitude": 26.47104,
        "longitude": 91.0308
      },
      {
        "name": "Barpeta Road",
        "latitude": 26.50284,
        "longitude": 90.96937
      },
      {
        "name": "Basugaon",
        "latitude": 26.46742,
        "longitude": 90.41951
      },
      {
        "name": "Bihpuriagaon",
        "latitude": 27.01718,
        "longitude": 93.91673
      },
      {
        "name": "Bijni",
        "latitude": 26.49588,
        "longitude": 90.70298
      },
      {
        "name": "Bilasipara",
        "latitude": 26.23285,
        "longitude": 90.2341
      },
      {
        "name": "Bokajan",
        "latitude": 26.02131,
        "longitude": 93.77945
      },
      {
        "name": "Bokakhat",
        "latitude": 26.64018,
        "longitude": 93.60052
      },
      {
        "name": "Bongaigaon",
        "latitude": 26.4603,
        "longitude": 90.6464
      },
      {
        "name": "Cachar",
        "latitude": 24.78213,
        "longitude": 92.85771
      },
      {
        "name": "Chabua",
        "latitude": 27.48253,
        "longitude": 95.17451
      },
      {
        "name": "Chapar",
        "latitude": 26.27266,
        "longitude": 90.44556
      },
      {
        "name": "Chirang",
        "latitude": 26.52527,
        "longitude": 90.49066
      },
      {
        "name": "Darrang",
        "latitude": 26.51195,
        "longitude": 92.16843
      },
      {
        "name": "Dergaon",
        "latitude": 26.7,
        "longitude": 93.96667
      },
      {
        "name": "Dhekiajuli",
        "latitude": 26.70367,
        "longitude": 92.47808
      },
      {
        "name": "Dhemaji",
        "latitude": 27.6091,
        "longitude": 94.7942
      },
      {
        "name": "Dhing",
        "latitude": 26.46793,
        "longitude": 92.47336
      },
      {
        "name": "Dhubri",
        "latitude": 26.06749,
        "longitude": 90.02238
      },
      {
        "name": "Dibrugarh",
        "latitude": 27.5,
        "longitude": 95
      },
      {
        "name": "Digboi",
        "latitude": 27.39321,
        "longitude": 95.61839
      },
      {
        "name": "Dima Hasao District",
        "latitude": 25.5,
        "longitude": 93
      },
      {
        "name": "Diphu",
        "latitude": 25.84341,
        "longitude": 93.43116
      },
      {
        "name": "Dispur",
        "latitude": 26.13564,
        "longitude": 91.80069
      },
      {
        "name": "Duliagaon",
        "latitude": 27.37227,
        "longitude": 95.30754
      },
      {
        "name": "Dum Duma",
        "latitude": 27.56884,
        "longitude": 95.55664
      },
      {
        "name": "Gauripur",
        "latitude": 26.08334,
        "longitude": 89.96118
      },
      {
        "name": "Goalpara",
        "latitude": 26.12791,
        "longitude": 90.60974
      },
      {
        "name": "Gohpur",
        "latitude": 26.88184,
        "longitude": 93.6156
      },
      {
        "name": "Golaghat",
        "latitude": 26.4092,
        "longitude": 93.91193
      },
      {
        "name": "Golakganj",
        "latitude": 26.10216,
        "longitude": 89.82275
      },
      {
        "name": "Goshaingaon",
        "latitude": 26.43946,
        "longitude": 89.96307
      },
      {
        "name": "Guwahati",
        "latitude": 26.1844,
        "longitude": 91.7458
      },
      {
        "name": "Haflong",
        "latitude": 25.16478,
        "longitude": 93.01744
      },
      {
        "name": "Hailakandi",
        "latitude": 24.5017,
        "longitude": 92.60069
      },
      {
        "name": "Hajo",
        "latitude": 26.2452,
        "longitude": 91.52525
      },
      {
        "name": "Hojai",
        "latitude": 26.00281,
        "longitude": 92.85605
      },
      {
        "name": "Howli",
        "latitude": 26.42237,
        "longitude": 90.98004
      },
      {
        "name": "Jogighopa",
        "latitude": 26.22646,
        "longitude": 90.57247
      },
      {
        "name": "Jorhat",
        "latitude": 26.8,
        "longitude": 94.26
      },
      {
        "name": "Kamrup",
        "latitude": 26.22322,
        "longitude": 91.65344
      },
      {
        "name": "Kamrup Metropolitan",
        "latitude": 26.05375,
        "longitude": 92.00763
      },
      {
        "name": "Karbi Anglong",
        "latitude": 26,
        "longitude": 93.5
      },
      {
        "name": "Karimganj",
        "latitude": 24.6,
        "longitude": 92.4
      },
      {
        "name": "Kharupatia",
        "latitude": 26.51839,
        "longitude": 92.14722
      },
      {
        "name": "Kokrajhar",
        "latitude": 26.6,
        "longitude": 90.2
      },
      {
        "name": "Lakhimpur",
        "latitude": 27.35,
        "longitude": 94.25
      },
      {
        "name": "Lakhipur",
        "latitude": 24.79281,
        "longitude": 93.0091
      },
      {
        "name": "Lala",
        "latitude": 24.55418,
        "longitude": 92.61592
      },
      {
        "name": "Lumding Railway Colony",
        "latitude": 25.74903,
        "longitude": 93.16998
      },
      {
        "name": "Mahur",
        "latitude": 25.18305,
        "longitude": 93.11342
      },
      {
        "name": "Maibong",
        "latitude": 25.30125,
        "longitude": 93.13811
      },
      {
        "name": "Makum",
        "latitude": 27.48652,
        "longitude": 95.43646
      },
      {
        "name": "Mangaldai",
        "latitude": 26.44212,
        "longitude": 92.03047
      },
      {
        "name": "Mariani",
        "latitude": 26.65725,
        "longitude": 94.31529
      },
      {
        "name": "Moranha",
        "latitude": 27.18735,
        "longitude": 94.91557
      },
      {
        "name": "Morigaon",
        "latitude": 26.25213,
        "longitude": 92.34238
      },
      {
        "name": "Nagaon",
        "latitude": 26.35037,
        "longitude": 92.69225
      },
      {
        "name": "Nahorkatiya",
        "latitude": 27.28912,
        "longitude": 95.3418
      },
      {
        "name": "Nalbari",
        "latitude": 26.5,
        "longitude": 91.4
      },
      {
        "name": "Namrup",
        "latitude": 27.19395,
        "longitude": 95.31929
      },
      {
        "name": "Nazira",
        "latitude": 26.91649,
        "longitude": 94.73611
      },
      {
        "name": "North Guwahati",
        "latitude": 26.19749,
        "longitude": 91.7202
      },
      {
        "name": "North Lakhimpur",
        "latitude": 27.23517,
        "longitude": 94.10357
      },
      {
        "name": "Numaligarh",
        "latitude": 26.62249,
        "longitude": 93.72225
      },
      {
        "name": "Palasbari",
        "latitude": 26.12388,
        "longitude": 91.53974
      },
      {
        "name": "Raha",
        "latitude": 26.23333,
        "longitude": 92.51667
      },
      {
        "name": "Rangapara",
        "latitude": 26.83772,
        "longitude": 92.66876
      },
      {
        "name": "Rangia",
        "latitude": 26.44931,
        "longitude": 91.61356
      },
      {
        "name": "Sapatgram",
        "latitude": 26.33732,
        "longitude": 90.1236
      },
      {
        "name": "Sarupathar",
        "latitude": 26.206,
        "longitude": 96.81
      },
      {
        "name": "Sibsagar",
        "latitude": 26.98427,
        "longitude": 94.63784
      },
      {
        "name": "Silapathar",
        "latitude": 27.59441,
        "longitude": 94.72402
      },
      {
        "name": "Silchar",
        "latitude": 24.82733,
        "longitude": 92.79787
      },
      {
        "name": "Soalkuchi",
        "latitude": 26.16806,
        "longitude": 91.57111
      },
      {
        "name": "Sonari",
        "latitude": 27.02462,
        "longitude": 95.01629
      },
      {
        "name": "Sonitpur",
        "latitude": 26.76748,
        "longitude": 92.96425
      },
      {
        "name": "Sorbhog",
        "latitude": 26.48612,
        "longitude": 90.8859
      },
      {
        "name": "Tezpur",
        "latitude": 26.63333,
        "longitude": 92.8
      },
      {
        "name": "Tinsukia",
        "latitude": 27.6,
        "longitude": 95.6
      },
      {
        "name": "Titabar",
        "latitude": 26.6014,
        "longitude": 94.20386
      },
      {
        "name": "Udalguri",
        "latitude": 26.75367,
        "longitude": 92.10215
      }
    ]
  },
  {
    "name": "Bihar",
    "kind": "state",
    "cities": [
      {
        "name": "Amarpur",
        "latitude": 25.03967,
        "longitude": 86.90247
      },
      {
        "name": "Araria",
        "latitude": 26.2,
        "longitude": 87.4
      },
      {
        "name": "Arrah",
        "latitude": 25.55629,
        "longitude": 84.66335
      },
      {
        "name": "Arwal",
        "latitude": 25.16158,
        "longitude": 84.6904
      },
      {
        "name": "Asarganj",
        "latitude": 25.15046,
        "longitude": 86.68639
      },
      {
        "name": "Aurangabad",
        "latitude": 24.75204,
        "longitude": 84.3742
      },
      {
        "name": "Bagaha",
        "latitude": 27.09918,
        "longitude": 84.09003
      },
      {
        "name": "Bahadurganj",
        "latitude": 26.26172,
        "longitude": 87.82443
      },
      {
        "name": "Bairagnia",
        "latitude": 26.74063,
        "longitude": 85.27323
      },
      {
        "name": "Baisi",
        "latitude": 25.86302,
        "longitude": 87.74487
      },
      {
        "name": "Bakhtiyarpur",
        "latitude": 25.46179,
        "longitude": 85.53179
      },
      {
        "name": "Bangaon",
        "latitude": 25.86728,
        "longitude": 86.51152
      },
      {
        "name": "Banka",
        "latitude": 24.89214,
        "longitude": 86.98425
      },
      {
        "name": "Banmankhi",
        "latitude": 25.88857,
        "longitude": 87.19421
      },
      {
        "name": "Bar Bigha",
        "latitude": 25.21855,
        "longitude": 85.7332
      },
      {
        "name": "Barauli",
        "latitude": 26.38109,
        "longitude": 84.58648
      },
      {
        "name": "Barh",
        "latitude": 25.48339,
        "longitude": 85.70928
      },
      {
        "name": "Barhiya",
        "latitude": 25.28814,
        "longitude": 86.02055
      },
      {
        "name": "Bariarpur",
        "latitude": 25.28791,
        "longitude": 86.57643
      },
      {
        "name": "Baruni",
        "latitude": 25.47509,
        "longitude": 85.96813
      },
      {
        "name": "Begusarai",
        "latitude": 25.41853,
        "longitude": 86.13389
      },
      {
        "name": "Belsand",
        "latitude": 26.44365,
        "longitude": 85.40076
      },
      {
        "name": "Bettiah",
        "latitude": 26.80229,
        "longitude": 84.50311
      },
      {
        "name": "Bhabhua",
        "latitude": 25.04049,
        "longitude": 83.60749
      },
      {
        "name": "Bhagalpur",
        "latitude": 25.29023,
        "longitude": 87.06665
      },
      {
        "name": "Bhagirathpur",
        "latitude": 26.2695,
        "longitude": 86.06346
      },
      {
        "name": "Bhawanipur",
        "latitude": 26.45352,
        "longitude": 87.02744
      },
      {
        "name": "Bhojpur",
        "latitude": 25.30886,
        "longitude": 84.44504
      },
      {
        "name": "Bihar Sharif",
        "latitude": 25.20084,
        "longitude": 85.52389
      },
      {
        "name": "Bihariganj",
        "latitude": 25.73415,
        "longitude": 86.98837
      },
      {
        "name": "Bikramganj",
        "latitude": 25.21073,
        "longitude": 84.25508
      },
      {
        "name": "Birpur",
        "latitude": 26.50823,
        "longitude": 87.01194
      },
      {
        "name": "Buddh Gaya",
        "latitude": 24.69808,
        "longitude": 84.9869
      },
      {
        "name": "Buxar",
        "latitude": 25.5,
        "longitude": 84.1
      },
      {
        "name": "Chakia",
        "latitude": 26.41598,
        "longitude": 85.04665
      },
      {
        "name": "Chapra",
        "latitude": 25.78031,
        "longitude": 84.74709
      },
      {
        "name": "Chhatapur",
        "latitude": 26.21965,
        "longitude": 87.00479
      },
      {
        "name": "Colgong",
        "latitude": 25.26328,
        "longitude": 87.23264
      },
      {
        "name": "Dalsingh Sarai",
        "latitude": 25.66795,
        "longitude": 85.83636
      },
      {
        "name": "Darbhanga",
        "latitude": 26,
        "longitude": 86
      },
      {
        "name": "Daudnagar",
        "latitude": 25.03473,
        "longitude": 84.40095
      },
      {
        "name": "Dehri",
        "latitude": 24.90247,
        "longitude": 84.18217
      },
      {
        "name": "Dhaka",
        "latitude": 26.67479,
        "longitude": 85.16698
      },
      {
        "name": "Dighwara",
        "latitude": 25.74434,
        "longitude": 85.01003
      },
      {
        "name": "Dinapore",
        "latitude": 25.63705,
        "longitude": 85.04794
      },
      {
        "name": "Dumra",
        "latitude": 26.56708,
        "longitude": 85.5204
      },
      {
        "name": "Dumraon",
        "latitude": 25.55265,
        "longitude": 84.15149
      },
      {
        "name": "Fatwa",
        "latitude": 25.50958,
        "longitude": 85.30504
      },
      {
        "name": "Forbesganj",
        "latitude": 26.30253,
        "longitude": 87.26556
      },
      {
        "name": "Gaya",
        "latitude": 24.79686,
        "longitude": 85.00385
      },
      {
        "name": "Ghoga",
        "latitude": 25.21738,
        "longitude": 87.1571
      },
      {
        "name": "Gopalganj",
        "latitude": 26.5,
        "longitude": 84.33333
      },
      {
        "name": "Hajipur",
        "latitude": 25.68544,
        "longitude": 85.20981
      },
      {
        "name": "Hilsa",
        "latitude": 25.31642,
        "longitude": 85.28234
      },
      {
        "name": "Hisua",
        "latitude": 24.8336,
        "longitude": 85.41729
      },
      {
        "name": "Islampur",
        "latitude": 25.14075,
        "longitude": 85.20587
      },
      {
        "name": "Jagdispur",
        "latitude": 25.46811,
        "longitude": 84.41939
      },
      {
        "name": "Jahanabad",
        "latitude": 25.21368,
        "longitude": 84.9871
      },
      {
        "name": "Jamalpur",
        "latitude": 25.31258,
        "longitude": 86.48888
      },
      {
        "name": "Jamui",
        "latitude": 24.92082,
        "longitude": 86.17538
      },
      {
        "name": "Jaynagar",
        "latitude": 26.59048,
        "longitude": 86.13791
      },
      {
        "name": "Jehanabad",
        "latitude": 25.20701,
        "longitude": 84.99573
      },
      {
        "name": "Jha-Jha",
        "latitude": 24.77107,
        "longitude": 86.37888
      },
      {
        "name": "Jhanjharpur",
        "latitude": 26.26467,
        "longitude": 86.27993
      },
      {
        "name": "Jogbani",
        "latitude": 26.39905,
        "longitude": 87.26525
      },
      {
        "name": "Kaimur District",
        "latitude": 25.05077,
        "longitude": 83.58261
      },
      {
        "name": "Kasba",
        "latitude": 25.85643,
        "longitude": 87.53836
      },
      {
        "name": "Katihar",
        "latitude": 25.5,
        "longitude": 87.6
      },
      {
        "name": "Khagaria",
        "latitude": 25.5022,
        "longitude": 86.46708
      },
      {
        "name": "Khagaul",
        "latitude": 25.57898,
        "longitude": 85.04564
      },
      {
        "name": "Kharagpur",
        "latitude": 25.12446,
        "longitude": 86.55578
      },
      {
        "name": "Khusropur",
        "latitude": 25.48174,
        "longitude": 85.38492
      },
      {
        "name": "Kishanganj",
        "latitude": 26.3,
        "longitude": 88
      },
      {
        "name": "Koath",
        "latitude": 25.32643,
        "longitude": 84.25983
      },
      {
        "name": "Koelwar",
        "latitude": 25.58055,
        "longitude": 84.79751
      },
      {
        "name": "Lakhisarai",
        "latitude": 25.2,
        "longitude": 86.2
      },
      {
        "name": "Lalganj",
        "latitude": 25.86894,
        "longitude": 85.17394
      },
      {
        "name": "Luckeesarai",
        "latitude": 25.1765,
        "longitude": 86.0947
      },
      {
        "name": "Madhepura",
        "latitude": 25.8,
        "longitude": 87
      },
      {
        "name": "Madhipura",
        "latitude": 25.92127,
        "longitude": 86.79271
      },
      {
        "name": "Madhubani",
        "latitude": 26.35367,
        "longitude": 86.07169
      },
      {
        "name": "Maharajgani",
        "latitude": 26.11017,
        "longitude": 84.50365
      },
      {
        "name": "Mairwa",
        "latitude": 26.23218,
        "longitude": 84.16349
      },
      {
        "name": "Maner",
        "latitude": 25.64602,
        "longitude": 84.87291
      },
      {
        "name": "Manihari",
        "latitude": 25.33891,
        "longitude": 87.61998
      },
      {
        "name": "Marhaura",
        "latitude": 25.97349,
        "longitude": 84.86796
      },
      {
        "name": "Masaurhi Buzurg",
        "latitude": 25.35417,
        "longitude": 85.03195
      },
      {
        "name": "Mohiuddinnagar",
        "latitude": 25.57374,
        "longitude": 85.66944
      },
      {
        "name": "Mokameh",
        "latitude": 25.39662,
        "longitude": 85.9219
      },
      {
        "name": "Monghyr",
        "latitude": 25.37459,
        "longitude": 86.47455
      },
      {
        "name": "Mothihari",
        "latitude": 26.64862,
        "longitude": 84.91656
      },
      {
        "name": "Munger",
        "latitude": 25.36099,
        "longitude": 86.46515
      },
      {
        "name": "Murliganj",
        "latitude": 25.8969,
        "longitude": 86.99577
      },
      {
        "name": "Muzaffarpur",
        "latitude": 26.16667,
        "longitude": 85.41667
      },
      {
        "name": "Nabinagar",
        "latitude": 24.60681,
        "longitude": 84.12624
      },
      {
        "name": "Nalanda",
        "latitude": 25.25,
        "longitude": 85.58333
      },
      {
        "name": "Nasriganj",
        "latitude": 25.0514,
        "longitude": 84.32839
      },
      {
        "name": "Naugachhia",
        "latitude": 25.38807,
        "longitude": 87.09906
      },
      {
        "name": "Nawada",
        "latitude": 24.75,
        "longitude": 85.5
      },
      {
        "name": "Nirmali",
        "latitude": 26.31397,
        "longitude": 86.58537
      },
      {
        "name": "Pashchim Champaran",
        "latitude": 27,
        "longitude": 84.5
      },
      {
        "name": "Patna",
        "latitude": 25.41667,
        "longitude": 85.16667
      },
      {
        "name": "Piro",
        "latitude": 25.33218,
        "longitude": 84.40454
      },
      {
        "name": "Pupri",
        "latitude": 26.47079,
        "longitude": 85.70311
      },
      {
        "name": "Purba Champaran",
        "latitude": 26.58333,
        "longitude": 84.83333
      },
      {
        "name": "Purnia",
        "latitude": 25.81614,
        "longitude": 87.40708
      },
      {
        "name": "Rafiganj",
        "latitude": 24.81757,
        "longitude": 84.63445
      },
      {
        "name": "Raghunathpur",
        "latitude": 25.64492,
        "longitude": 87.91762
      },
      {
        "name": "Rajgir",
        "latitude": 25.02828,
        "longitude": 85.42079
      },
      {
        "name": "Ramnagar",
        "latitude": 27.16371,
        "longitude": 84.32342
      },
      {
        "name": "Raxaul",
        "latitude": 26.97982,
        "longitude": 84.85065
      },
      {
        "name": "Revelganj",
        "latitude": 25.78976,
        "longitude": 84.63596
      },
      {
        "name": "Rohtas",
        "latitude": 24.97941,
        "longitude": 84.02774
      },
      {
        "name": "Rusera",
        "latitude": 25.75355,
        "longitude": 86.02597
      },
      {
        "name": "Sagauli",
        "latitude": 26.7639,
        "longitude": 84.74341
      },
      {
        "name": "Saharsa",
        "latitude": 25.87498,
        "longitude": 86.59611
      },
      {
        "name": "Samastipur",
        "latitude": 25.75,
        "longitude": 85.91667
      },
      {
        "name": "Saran",
        "latitude": 25.91667,
        "longitude": 84.75
      },
      {
        "name": "Shahbazpur",
        "latitude": 26.30511,
        "longitude": 87.28865
      },
      {
        "name": "Shahpur",
        "latitude": 25.60293,
        "longitude": 84.40412
      },
      {
        "name": "Sheikhpura",
        "latitude": 25.13073,
        "longitude": 85.78176
      },
      {
        "name": "Sheohar",
        "latitude": 26.5,
        "longitude": 85.3
      },
      {
        "name": "Sherghati",
        "latitude": 24.5595,
        "longitude": 84.79162
      },
      {
        "name": "Silao",
        "latitude": 25.08358,
        "longitude": 85.42804
      },
      {
        "name": "Sitamarhi",
        "latitude": 26.66667,
        "longitude": 85.5
      },
      {
        "name": "Siwan",
        "latitude": 26.22096,
        "longitude": 84.35609
      },
      {
        "name": "Supaul",
        "latitude": 26.25,
        "longitude": 86.8
      },
      {
        "name": "Teghra",
        "latitude": 25.49043,
        "longitude": 85.94001
      },
      {
        "name": "Tekari",
        "latitude": 24.94253,
        "longitude": 84.84265
      },
      {
        "name": "Thakurganj",
        "latitude": 26.42742,
        "longitude": 88.13112
      },
      {
        "name": "Vaishali",
        "latitude": 25.75,
        "longitude": 85.41667
      },
      {
        "name": "Waris Aliganj",
        "latitude": 25.0172,
        "longitude": 85.64047
      }
    ]
  },
  {
    "name": "Chhattisgarh",
    "kind": "state",
    "cities": [
      {
        "name": "Akaltara",
        "latitude": 22.02463,
        "longitude": 82.42641
      },
      {
        "name": "Ambagarh Chauki",
        "latitude": 20.77644,
        "longitude": 80.74608
      },
      {
        "name": "Ambikapur",
        "latitude": 23.11892,
        "longitude": 83.19537
      },
      {
        "name": "Arang",
        "latitude": 21.19639,
        "longitude": 81.96912
      },
      {
        "name": "Baikunthpur",
        "latitude": 23.26206,
        "longitude": 82.56051
      },
      {
        "name": "Balod",
        "latitude": 20.73081,
        "longitude": 81.20578
      },
      {
        "name": "Baloda",
        "latitude": 22.1389,
        "longitude": 82.48171
      },
      {
        "name": "Baloda Bazar",
        "latitude": 21.65678,
        "longitude": 82.16062
      },
      {
        "name": "Basna",
        "latitude": 21.27885,
        "longitude": 82.8267
      },
      {
        "name": "Bastar",
        "latitude": 19.26794,
        "longitude": 81.73828
      },
      {
        "name": "Bemetara",
        "latitude": 21.71556,
        "longitude": 81.53423
      },
      {
        "name": "Bhanpuri",
        "latitude": 21.0919,
        "longitude": 80.93218
      },
      {
        "name": "Bhatapara",
        "latitude": 21.735,
        "longitude": 81.94711
      },
      {
        "name": "Bhatgaon",
        "latitude": 21.15,
        "longitude": 81.7
      },
      {
        "name": "Bhilai",
        "latitude": 21.20919,
        "longitude": 81.4285
      },
      {
        "name": "Bijapur",
        "latitude": 18.84322,
        "longitude": 80.7761
      },
      {
        "name": "Bilaspur",
        "latitude": 22.38333,
        "longitude": 82.13333
      },
      {
        "name": "Champa",
        "latitude": 22.03532,
        "longitude": 82.64234
      },
      {
        "name": "Chhuikhadan",
        "latitude": 21.52316,
        "longitude": 80.99788
      },
      {
        "name": "Deori",
        "latitude": 21.45,
        "longitude": 82.61667
      },
      {
        "name": "Dhamtari",
        "latitude": 20.70718,
        "longitude": 81.54874
      },
      {
        "name": "Dongargaon",
        "latitude": 20.97172,
        "longitude": 80.85077
      },
      {
        "name": "Dongargarh",
        "latitude": 21.18893,
        "longitude": 80.75459
      },
      {
        "name": "Durg",
        "latitude": 21.15,
        "longitude": 81.4
      },
      {
        "name": "Gandai",
        "latitude": 21.66667,
        "longitude": 81.10013
      },
      {
        "name": "Gariaband",
        "latitude": 20.63323,
        "longitude": 82.06221
      },
      {
        "name": "Gaurela",
        "latitude": 22.75449,
        "longitude": 81.90107
      },
      {
        "name": "Gharghoda",
        "latitude": 22.17427,
        "longitude": 83.3517
      },
      {
        "name": "Gidam",
        "latitude": 18.97431,
        "longitude": 81.39894
      },
      {
        "name": "Jagdalpur",
        "latitude": 19.08136,
        "longitude": 82.02131
      },
      {
        "name": "Janjgir",
        "latitude": 22.00922,
        "longitude": 82.5778
      },
      {
        "name": "Janjgir-Champa",
        "latitude": 21.9,
        "longitude": 82.7
      },
      {
        "name": "Jashpur",
        "latitude": 22.78495,
        "longitude": 83.84573
      },
      {
        "name": "Jashpurnagar",
        "latitude": 22.88783,
        "longitude": 84.13864
      },
      {
        "name": "Junagarh",
        "latitude": 19.85993,
        "longitude": 82.93385
      },
      {
        "name": "Kabeerdham",
        "latitude": 22.1,
        "longitude": 81.2
      },
      {
        "name": "Kanker",
        "latitude": 20.27193,
        "longitude": 81.49177
      },
      {
        "name": "Katghora",
        "latitude": 22.50247,
        "longitude": 82.54279
      },
      {
        "name": "Kawardha",
        "latitude": 22.00853,
        "longitude": 81.23148
      },
      {
        "name": "Khairagarh",
        "latitude": 21.41859,
        "longitude": 80.97942
      },
      {
        "name": "Khamharia",
        "latitude": 20.976,
        "longitude": 82.25116
      },
      {
        "name": "Kharod",
        "latitude": 21.7442,
        "longitude": 82.5788
      },
      {
        "name": "Kharsia",
        "latitude": 21.98953,
        "longitude": 83.10476
      },
      {
        "name": "Kirandul",
        "latitude": 18.63649,
        "longitude": 81.25827
      },
      {
        "name": "Kondagaon",
        "latitude": 19.59083,
        "longitude": 81.664
      },
      {
        "name": "Korba",
        "latitude": 22.5,
        "longitude": 82.6
      },
      {
        "name": "Koriya",
        "latitude": 23.48326,
        "longitude": 82.15037
      },
      {
        "name": "Kota",
        "latitude": 22.29507,
        "longitude": 82.02366
      },
      {
        "name": "Kotaparh",
        "latitude": 19.14256,
        "longitude": 82.32536
      },
      {
        "name": "Kumhari",
        "latitude": 21.26667,
        "longitude": 81.51667
      },
      {
        "name": "Kurud",
        "latitude": 20.83073,
        "longitude": 81.72212
      },
      {
        "name": "Lormi",
        "latitude": 22.27434,
        "longitude": 81.70181
      },
      {
        "name": "Mahasamund",
        "latitude": 21.2,
        "longitude": 82.5
      },
      {
        "name": "Mungeli",
        "latitude": 22.06566,
        "longitude": 81.68543
      },
      {
        "name": "Narayanpur",
        "latitude": 19.60426,
        "longitude": 81.08119
      },
      {
        "name": "Narharpur",
        "latitude": 20.44892,
        "longitude": 81.62004
      },
      {
        "name": "Pandaria",
        "latitude": 22.22495,
        "longitude": 81.40994
      },
      {
        "name": "Pandatarai",
        "latitude": 22.18714,
        "longitude": 81.32815
      },
      {
        "name": "Pasan",
        "latitude": 22.84412,
        "longitude": 82.19823
      },
      {
        "name": "Patan",
        "latitude": 21.03333,
        "longitude": 81.53333
      },
      {
        "name": "Pathalgaon",
        "latitude": 22.55656,
        "longitude": 83.46355
      },
      {
        "name": "Pendra",
        "latitude": 22.77548,
        "longitude": 81.95968
      },
      {
        "name": "Pithora",
        "latitude": 21.25021,
        "longitude": 82.51707
      },
      {
        "name": "Raigarh",
        "latitude": 22.08582,
        "longitude": 83.30603
      },
      {
        "name": "Raipur",
        "latitude": 21.25621,
        "longitude": 81.69022
      },
      {
        "name": "Raj Nandgaon",
        "latitude": 21.16667,
        "longitude": 81
      },
      {
        "name": "Raj-Nandgaon",
        "latitude": 21.09687,
        "longitude": 81.0289
      },
      {
        "name": "Ramanuj Ganj",
        "latitude": 23.80637,
        "longitude": 83.69981
      },
      {
        "name": "Ratanpur",
        "latitude": 22.2866,
        "longitude": 82.16823
      },
      {
        "name": "Sakti",
        "latitude": 22.02662,
        "longitude": 82.96091
      },
      {
        "name": "Saraipali",
        "latitude": 21.3153,
        "longitude": 83.00629
      },
      {
        "name": "Sarangarh",
        "latitude": 21.58614,
        "longitude": 83.0785
      },
      {
        "name": "Seorinarayan",
        "latitude": 21.72055,
        "longitude": 82.59344
      },
      {
        "name": "Simga",
        "latitude": 21.6281,
        "longitude": 81.70376
      },
      {
        "name": "Surguja",
        "latitude": 22.89624,
        "longitude": 83.09631
      },
      {
        "name": "Takhatpur",
        "latitude": 22.12915,
        "longitude": 81.86959
      },
      {
        "name": "Umarkot",
        "latitude": 19.66529,
        "longitude": 82.20629
      },
      {
        "name": "Uttar Bastar Kanker",
        "latitude": 20.2,
        "longitude": 81.1
      }
    ]
  },
  {
    "name": "Delhi",
    "kind": "union_territory",
    "cities": [
      {
        "name": "Alipur",
        "latitude": 28.79862,
        "longitude": 77.13314
      },
      {
        "name": "Bawana",
        "latitude": 28.7982,
        "longitude": 77.03431
      },
      {
        "name": "Central Delhi",
        "latitude": 28.64857,
        "longitude": 77.21895
      },
      {
        "name": "Deoli",
        "latitude": 28.50254,
        "longitude": 77.23117
      },
      {
        "name": "East Delhi",
        "latitude": 28.66242,
        "longitude": 77.29122
      },
      {
        "name": "Karol Bagh",
        "latitude": 28.65136,
        "longitude": 77.19072
      },
      {
        "name": "Najafgarh",
        "latitude": 28.60922,
        "longitude": 76.97982
      },
      {
        "name": "Nangloi Jat",
        "latitude": 28.67957,
        "longitude": 77.06799
      },
      {
        "name": "Narela",
        "latitude": 28.85267,
        "longitude": 77.09288
      },
      {
        "name": "New Delhi",
        "latitude": 28.63576,
        "longitude": 77.22445
      },
      {
        "name": "North Delhi",
        "latitude": 28.6692,
        "longitude": 77.22273
      },
      {
        "name": "North East Delhi",
        "latitude": 28.6869,
        "longitude": 77.30195
      },
      {
        "name": "North West Delhi",
        "latitude": 28.70113,
        "longitude": 77.10154
      },
      {
        "name": "Pitampura",
        "latitude": 28.68964,
        "longitude": 77.13126
      },
      {
        "name": "Rohini",
        "latitude": 28.74322,
        "longitude": 77.06778
      },
      {
        "name": "South Delhi",
        "latitude": 28.53009,
        "longitude": 77.25174
      },
      {
        "name": "South West Delhi",
        "latitude": 28.5806,
        "longitude": 77.0672
      },
      {
        "name": "West Delhi",
        "latitude": 28.65655,
        "longitude": 77.10068
      }
    ]
  },
  {
    "name": "Goa",
    "kind": "state",
    "cities": [
      {
        "name": "Aldona",
        "latitude": 15.59337,
        "longitude": 73.87482
      },
      {
        "name": "Arambol",
        "latitude": 15.68681,
        "longitude": 73.70449
      },
      {
        "name": "Baga",
        "latitude": 15.56517,
        "longitude": 73.75517
      },
      {
        "name": "Bambolim",
        "latitude": 15.46361,
        "longitude": 73.8531
      },
      {
        "name": "Bandora",
        "latitude": 15.40823,
        "longitude": 73.98129
      },
      {
        "name": "Benaulim",
        "latitude": 15.26435,
        "longitude": 73.92812
      },
      {
        "name": "Calangute",
        "latitude": 15.5439,
        "longitude": 73.7553
      },
      {
        "name": "Candolim",
        "latitude": 15.51807,
        "longitude": 73.76259
      },
      {
        "name": "Carapur",
        "latitude": 15.56588,
        "longitude": 73.98713
      },
      {
        "name": "Cavelossim",
        "latitude": 15.17255,
        "longitude": 73.94194
      },
      {
        "name": "Chicalim",
        "latitude": 15.39835,
        "longitude": 73.84216
      },
      {
        "name": "Chinchinim",
        "latitude": 15.21447,
        "longitude": 73.97555
      },
      {
        "name": "Colovale",
        "latitude": 15.63522,
        "longitude": 73.82426
      },
      {
        "name": "Colva",
        "latitude": 15.27976,
        "longitude": 73.92285
      },
      {
        "name": "Cortalim",
        "latitude": 15.40247,
        "longitude": 73.90881
      },
      {
        "name": "Cuncolim",
        "latitude": 15.1773,
        "longitude": 73.99392
      },
      {
        "name": "Curchorem",
        "latitude": 15.26349,
        "longitude": 74.10875
      },
      {
        "name": "Curti",
        "latitude": 15.41667,
        "longitude": 74.01667
      },
      {
        "name": "Davorlim",
        "latitude": 15.27221,
        "longitude": 73.99242
      },
      {
        "name": "Dicholi",
        "latitude": 15.59319,
        "longitude": 73.94571
      },
      {
        "name": "Goa Velha",
        "latitude": 15.44384,
        "longitude": 73.88572
      },
      {
        "name": "Guirim",
        "latitude": 15.57552,
        "longitude": 73.80722
      },
      {
        "name": "Jua",
        "latitude": 15.5307,
        "longitude": 73.95047
      },
      {
        "name": "Kankon",
        "latitude": 15.02698,
        "longitude": 74.04617
      },
      {
        "name": "Madgaon",
        "latitude": 15.27501,
        "longitude": 73.95786
      },
      {
        "name": "Mapuca",
        "latitude": 15.59154,
        "longitude": 73.80898
      },
      {
        "name": "Morjim",
        "latitude": 15.63097,
        "longitude": 73.73903
      },
      {
        "name": "Mormugao",
        "latitude": 15.38914,
        "longitude": 73.81491
      },
      {
        "name": "Navelim",
        "latitude": 15.53333,
        "longitude": 73.98333
      },
      {
        "name": "North Goa",
        "latitude": 15.53397,
        "longitude": 73.96408
      },
      {
        "name": "Palle",
        "latitude": 15.46667,
        "longitude": 74.08333
      },
      {
        "name": "Panaji",
        "latitude": 15.49574,
        "longitude": 73.82624
      },
      {
        "name": "Pernem",
        "latitude": 15.723,
        "longitude": 73.79511
      },
      {
        "name": "Ponda",
        "latitude": 15.40341,
        "longitude": 74.01519
      },
      {
        "name": "Quepem",
        "latitude": 15.2128,
        "longitude": 74.0772
      },
      {
        "name": "Queula",
        "latitude": 15.39011,
        "longitude": 73.98557
      },
      {
        "name": "Raia",
        "latitude": 15.30499,
        "longitude": 73.97096
      },
      {
        "name": "Saligao",
        "latitude": 15.55359,
        "longitude": 73.79036
      },
      {
        "name": "Sancoale",
        "latitude": 15.37794,
        "longitude": 73.90352
      },
      {
        "name": "Sanguem",
        "latitude": 15.22901,
        "longitude": 74.15149
      },
      {
        "name": "Sanquelim",
        "latitude": 15.56422,
        "longitude": 74.00799
      },
      {
        "name": "Sanvordem",
        "latitude": 15.26269,
        "longitude": 74.11965
      },
      {
        "name": "Serula",
        "latitude": 15.54774,
        "longitude": 73.84329
      },
      {
        "name": "Solim",
        "latitude": 15.61521,
        "longitude": 73.7674
      },
      {
        "name": "South Goa",
        "latitude": 15.20425,
        "longitude": 74.16733
      },
      {
        "name": "Taleigao",
        "latitude": 15.46915,
        "longitude": 73.83285
      },
      {
        "name": "Vagator",
        "latitude": 15.59766,
        "longitude": 73.74496
      },
      {
        "name": "Valpoy",
        "latitude": 15.53239,
        "longitude": 74.13671
      },
      {
        "name": "Varca",
        "latitude": 15.23237,
        "longitude": 73.94311
      },
      {
        "name": "Vasco da Gama",
        "latitude": 15.39585,
        "longitude": 73.81568
      }
    ]
  },
  {
    "name": "Gujarat",
    "kind": "state",
    "cities": [
      {
        "name": "Abrama",
        "latitude": 20.85865,
        "longitude": 72.90648
      },
      {
        "name": "Adalaj",
        "latitude": 23.16453,
        "longitude": 72.58107
      },
      {
        "name": "Agol",
        "latitude": 23.15,
        "longitude": 72.26666667
      },
      {
        "name": "Ahmedabad",
        "latitude": 23.02579,
        "longitude": 72.58727
      },
      {
        "name": "Ahwa",
        "latitude": 20.75718,
        "longitude": 73.68626
      },
      {
        "name": "Akrund",
        "latitude": 23.28333333,
        "longitude": 73.11666667
      },
      {
        "name": "Amod",
        "latitude": 21.99317,
        "longitude": 72.87047
      },
      {
        "name": "Amreli",
        "latitude": 21.50789,
        "longitude": 71.18323
      },
      {
        "name": "Amroli",
        "latitude": 21.25084,
        "longitude": 72.83878
      },
      {
        "name": "Anand",
        "latitude": 22.4,
        "longitude": 72.75
      },
      {
        "name": "Anjar",
        "latitude": 23.11316,
        "longitude": 70.02671
      },
      {
        "name": "Ankleshwar",
        "latitude": 21.63236,
        "longitude": 72.99001
      },
      {
        "name": "Babra",
        "latitude": 21.84577,
        "longitude": 71.30544
      },
      {
        "name": "Bagasara",
        "latitude": 21.48333333,
        "longitude": 70.95
      },
      {
        "name": "Bagasra",
        "latitude": 21.48719,
        "longitude": 70.95516
      },
      {
        "name": "Bakharla",
        "latitude": 21.731517,
        "longitude": 69.635296
      },
      {
        "name": "Balagam",
        "latitude": 21.36666667,
        "longitude": 70.1
      },
      {
        "name": "Balasinor",
        "latitude": 22.955891,
        "longitude": 73.336499
      },
      {
        "name": "Balisana",
        "latitude": 23.816436,
        "longitude": 72.257536
      },
      {
        "name": "Bamanbore",
        "latitude": 22.41666667,
        "longitude": 71.01666667
      },
      {
        "name": "Banas Kantha",
        "latitude": 24.25,
        "longitude": 72.5
      },
      {
        "name": "Bandia",
        "latitude": 23.39604,
        "longitude": 69.01155
      },
      {
        "name": "Bantva",
        "latitude": 21.48815,
        "longitude": 70.07576
      },
      {
        "name": "Bardoli",
        "latitude": 21.12297,
        "longitude": 73.11151
      },
      {
        "name": "Bedi",
        "latitude": 22.50143,
        "longitude": 70.04363
      },
      {
        "name": "Bhachau",
        "latitude": 23.29858,
        "longitude": 70.34279
      },
      {
        "name": "Bhadran",
        "latitude": 22.3593,
        "longitude": 72.9005
      },
      {
        "name": "Bhandu",
        "latitude": 23.7,
        "longitude": 72.36666667
      },
      {
        "name": "Bhanvad",
        "latitude": 21.93053,
        "longitude": 69.78081
      },
      {
        "name": "Bharuch",
        "latitude": 21.69482,
        "longitude": 72.9805
      },
      {
        "name": "Bhatha",
        "latitude": 21.18333333,
        "longitude": 72.76666667
      },
      {
        "name": "Bhavnagar",
        "latitude": 21.76287,
        "longitude": 72.15331
      },
      {
        "name": "Bhayavadar",
        "latitude": 21.85523,
        "longitude": 70.24791
      },
      {
        "name": "Bhildi",
        "latitude": 24.18333333,
        "longitude": 72.03333333
      },
      {
        "name": "Bhojpur Dharampur",
        "latitude": 23.25,
        "longitude": 69.67
      },
      {
        "name": "Bhuj",
        "latitude": 23.25397,
        "longitude": 69.66928
      },
      {
        "name": "Bilimora",
        "latitude": 20.76957,
        "longitude": 72.96134
      },
      {
        "name": "Bilkha",
        "latitude": 21.4415,
        "longitude": 70.60063
      },
      {
        "name": "Borsad",
        "latitude": 22.40788,
        "longitude": 72.89817
      },
      {
        "name": "Botad",
        "latitude": 22.16917,
        "longitude": 71.66671
      },
      {
        "name": "Chaklasi",
        "latitude": 22.6532,
        "longitude": 72.94497
      },
      {
        "name": "Chalala",
        "latitude": 21.41073,
        "longitude": 71.16621
      },
      {
        "name": "Chaloda",
        "latitude": 22.8,
        "longitude": 72.45
      },
      {
        "name": "Champaner",
        "latitude": 22.4859,
        "longitude": 73.5371
      },
      {
        "name": "Chanasma",
        "latitude": 23.71472,
        "longitude": 72.11279
      },
      {
        "name": "Chhala",
        "latitude": 23.30779,
        "longitude": 72.77404
      },
      {
        "name": "Chhota Udepur",
        "latitude": 22.30401,
        "longitude": 74.0158
      },
      {
        "name": "Chikhli",
        "latitude": 20.75751,
        "longitude": 73.06268
      },
      {
        "name": "Chotila",
        "latitude": 22.42347,
        "longitude": 71.19641
      },
      {
        "name": "Chuda",
        "latitude": 22.48333333,
        "longitude": 71.68333333
      },
      {
        "name": "Dabhoda",
        "latitude": 23.16666667,
        "longitude": 72.73333333
      },
      {
        "name": "Dabhoi",
        "latitude": 22.18333,
        "longitude": 73.43333
      },
      {
        "name": "Dahegam",
        "latitude": 23.16903,
        "longitude": 72.82161
      },
      {
        "name": "Dahod",
        "latitude": 22.52,
        "longitude": 74.15
      },
      {
        "name": "Dakor",
        "latitude": 22.75268,
        "longitude": 73.14967
      },
      {
        "name": "Damnagar",
        "latitude": 21.69232,
        "longitude": 71.51747
      },
      {
        "name": "Dandi",
        "latitude": 21.32988,
        "longitude": 72.62484
      },
      {
        "name": "Dangs (India)",
        "latitude": 20.75,
        "longitude": 73.75
      },
      {
        "name": "Danta",
        "latitude": 24.18861111,
        "longitude": 72.76583333
      },
      {
        "name": "Dayapar",
        "latitude": 23.63371,
        "longitude": 68.90192
      },
      {
        "name": "Delvada",
        "latitude": 20.77544,
        "longitude": 71.04646
      },
      {
        "name": "Delwada",
        "latitude": 20.7833,
        "longitude": 71.05
      },
      {
        "name": "Detroj",
        "latitude": 23.33333333,
        "longitude": 72.18333333
      },
      {
        "name": "Devbhumi Dwarka",
        "latitude": 22.20253,
        "longitude": 69.65498
      },
      {
        "name": "Devgadh Bariya",
        "latitude": 22.70517,
        "longitude": 73.90882
      },
      {
        "name": "Dhandhuka",
        "latitude": 22.38185,
        "longitude": 71.98664
      },
      {
        "name": "Dhanera",
        "latitude": 24.50967,
        "longitude": 72.02343
      },
      {
        "name": "Dhansura",
        "latitude": 23.35,
        "longitude": 73.2
      },
      {
        "name": "Dharampur",
        "latitude": 20.53693,
        "longitude": 73.17368
      },
      {
        "name": "Dharasana",
        "latitude": 20.68333333,
        "longitude": 72.91666667
      },
      {
        "name": "Dhari",
        "latitude": 21.32855,
        "longitude": 71.02645
      },
      {
        "name": "Dhasa",
        "latitude": 21.8,
        "longitude": 71.51666667
      },
      {
        "name": "Dhola",
        "latitude": 21.88129,
        "longitude": 71.77269
      },
      {
        "name": "Dholera",
        "latitude": 22.248,
        "longitude": 72.195
      },
      {
        "name": "Dholka",
        "latitude": 22.72732,
        "longitude": 72.44128
      },
      {
        "name": "Dhoraji",
        "latitude": 21.73359,
        "longitude": 70.45004
      },
      {
        "name": "Dhrangadhra",
        "latitude": 22.99167,
        "longitude": 71.46793
      },
      {
        "name": "Dhrol",
        "latitude": 22.567,
        "longitude": 70.41769
      },
      {
        "name": "Dhuwaran",
        "latitude": 22.23779,
        "longitude": 72.7591
      },
      {
        "name": "Disa",
        "latitude": 24.25612,
        "longitude": 72.17928
      },
      {
        "name": "Dohad",
        "latitude": 22.9,
        "longitude": 74
      },
      {
        "name": "Dumkhal",
        "latitude": 21.7396,
        "longitude": 73.8449
      },
      {
        "name": "Dungarpur",
        "latitude": 21.28777,
        "longitude": 71.7556
      },
      {
        "name": "Dwarka",
        "latitude": 22.23944,
        "longitude": 68.96778
      },
      {
        "name": "Gadhada",
        "latitude": 21.96957,
        "longitude": 71.57828
      },
      {
        "name": "Gandevi",
        "latitude": 20.81214,
        "longitude": 72.99811
      },
      {
        "name": "Gandhidham",
        "latitude": 23.08333,
        "longitude": 70.13333
      },
      {
        "name": "Gandhinagar",
        "latitude": 23.21667,
        "longitude": 72.68333
      },
      {
        "name": "Gariadhar",
        "latitude": 21.53889,
        "longitude": 71.57737
      },
      {
        "name": "Ghodasar",
        "latitude": 24.45,
        "longitude": 71.85
      },
      {
        "name": "Ghogha",
        "latitude": 21.68813,
        "longitude": 72.2763
      },
      {
        "name": "Gir Somnath",
        "latitude": 20.91287,
        "longitude": 70.3671
      },
      {
        "name": "Godhra",
        "latitude": 22.77547,
        "longitude": 73.61488
      },
      {
        "name": "Gondal",
        "latitude": 21.96074,
        "longitude": 70.80255
      },
      {
        "name": "Gorwa",
        "latitude": 22.3301,
        "longitude": 73.1611
      },
      {
        "name": "Halenda",
        "latitude": 22.088185,
        "longitude": 71.05171
      },
      {
        "name": "Halol",
        "latitude": 22.50321,
        "longitude": 73.47242
      },
      {
        "name": "Halvad",
        "latitude": 23.01516,
        "longitude": 71.18029
      },
      {
        "name": "Hansot",
        "latitude": 21.58496,
        "longitude": 72.80764
      },
      {
        "name": "Harij",
        "latitude": 23.69356,
        "longitude": 71.907
      },
      {
        "name": "Harsol",
        "latitude": 23.36,
        "longitude": 73.02
      },
      {
        "name": "Hathuran",
        "latitude": 21.5,
        "longitude": 72.97
      },
      {
        "name": "Himatnagar",
        "latitude": 23.59893,
        "longitude": 72.96602
      },
      {
        "name": "Idar",
        "latitude": 23.83,
        "longitude": 73
      },
      {
        "name": "Jakhau",
        "latitude": 23.21861111,
        "longitude": 68.71694444
      },
      {
        "name": "Jalalpore",
        "latitude": 20.9491,
        "longitude": 72.9136
      },
      {
        "name": "Jalalpur",
        "latitude": 20.94896,
        "longitude": 72.89829
      },
      {
        "name": "Jalia",
        "latitude": 21.8,
        "longitude": 70.25
      },
      {
        "name": "Jambuda",
        "latitude": 22.51666667,
        "longitude": 70.21666667
      },
      {
        "name": "Jambusar",
        "latitude": 22.05236,
        "longitude": 72.80074
      },
      {
        "name": "Jamnagar",
        "latitude": 22.47292,
        "longitude": 70.06673
      },
      {
        "name": "Jasdan",
        "latitude": 22.03709,
        "longitude": 71.20794
      },
      {
        "name": "Jetalpur",
        "latitude": 22.88333333,
        "longitude": 72.6
      },
      {
        "name": "Jetalsar",
        "latitude": 21.70891,
        "longitude": 70.57695
      },
      {
        "name": "Jetpur",
        "latitude": 21.75482,
        "longitude": 70.62347
      },
      {
        "name": "Jetpur (Navagadh)",
        "latitude": 21.75482,
        "longitude": 70.62347
      },
      {
        "name": "Jhalod",
        "latitude": 23.10027778,
        "longitude": 74.15611111
      },
      {
        "name": "Jhulasan",
        "latitude": 23.3286,
        "longitude": 72.47314
      },
      {
        "name": "Jodhpur",
        "latitude": 21.90174,
        "longitude": 70.0327
      },
      {
        "name": "Jodhpur (Ahmedabad)",
        "latitude": 21.88,
        "longitude": 70.03
      },
      {
        "name": "Jodia",
        "latitude": 22.71667,
        "longitude": 70.28333
      },
      {
        "name": "Jodiya Bandar",
        "latitude": 22.71667,
        "longitude": 70.28333
      },
      {
        "name": "Junagadh",
        "latitude": 21.25,
        "longitude": 70.33333
      },
      {
        "name": "Kachchh",
        "latitude": 23.58333,
        "longitude": 70
      },
      {
        "name": "Kachholi",
        "latitude": 20.83333333,
        "longitude": 72.96666667
      },
      {
        "name": "Kadi",
        "latitude": 23.29908,
        "longitude": 72.33362
      },
      {
        "name": "Kadod",
        "latitude": 21.21717,
        "longitude": 73.21972
      },
      {
        "name": "Kalavad",
        "latitude": 22.20789,
        "longitude": 70.38343
      },
      {
        "name": "Kalol",
        "latitude": 22.60777,
        "longitude": 73.46272
      },
      {
        "name": "Kandla",
        "latitude": 23.03333,
        "longitude": 70.21667
      },
      {
        "name": "Kandla port",
        "latitude": 23.03,
        "longitude": 70.22
      },
      {
        "name": "Kanodar",
        "latitude": 24.08932,
        "longitude": 72.39354
      },
      {
        "name": "Kapadvanj",
        "latitude": 23.02302,
        "longitude": 73.07113
      },
      {
        "name": "Karamsad",
        "latitude": 22.54243,
        "longitude": 72.90392
      },
      {
        "name": "Kariana",
        "latitude": 21.88333333,
        "longitude": 71.35
      },
      {
        "name": "Karjan",
        "latitude": 22.05304167,
        "longitude": 73.12351389
      },
      {
        "name": "Kathor",
        "latitude": 21.28854,
        "longitude": 72.9407
      },
      {
        "name": "Katpur",
        "latitude": 21.05869,
        "longitude": 71.79457
      },
      {
        "name": "Kavant",
        "latitude": 22.09282,
        "longitude": 74.05078
      },
      {
        "name": "Kawant",
        "latitude": 22.09282,
        "longitude": 74.05078
      },
      {
        "name": "Kayavarohan",
        "latitude": 22.067,
        "longitude": 73.25
      },
      {
        "name": "Kerwada",
        "latitude": 21.9,
        "longitude": 72.85
      },
      {
        "name": "Keshod",
        "latitude": 21.30328,
        "longitude": 70.24861
      },
      {
        "name": "Khambhalia",
        "latitude": 22.2,
        "longitude": 69.65
      },
      {
        "name": "Khambhat",
        "latitude": 22.31744,
        "longitude": 72.61916
      },
      {
        "name": "Khavda",
        "latitude": 23.85,
        "longitude": 69.72
      },
      {
        "name": "Kheda",
        "latitude": 22.75,
        "longitude": 72.83333
      },
      {
        "name": "Khedbrahma",
        "latitude": 24.0299,
        "longitude": 73.04632
      },
      {
        "name": "Khedoi",
        "latitude": 23.05927778,
        "longitude": 69.91895556
      },
      {
        "name": "Kherali",
        "latitude": 22.68333333,
        "longitude": 71.6
      },
      {
        "name": "Kheralu",
        "latitude": 23.88534,
        "longitude": 72.61869
      },
      {
        "name": "Kodinar",
        "latitude": 20.79393,
        "longitude": 70.70216
      },
      {
        "name": "Kosamba",
        "latitude": 21.46202,
        "longitude": 72.95842
      },
      {
        "name": "Kothara",
        "latitude": 23.133,
        "longitude": 68.932
      },
      {
        "name": "Kotharia",
        "latitude": 22.23,
        "longitude": 70.81
      },
      {
        "name": "Kukarmunda",
        "latitude": 21.51666667,
        "longitude": 74.13333333
      },
      {
        "name": "Kukma",
        "latitude": 23.217822,
        "longitude": 69.777922
      },
      {
        "name": "Kundla",
        "latitude": 21.34222,
        "longitude": 71.30633
      },
      {
        "name": "Kutch district",
        "latitude": 23.915,
        "longitude": 70.367
      },
      {
        "name": "Kutiyana",
        "latitude": 21.6241,
        "longitude": 69.98494
      },
      {
        "name": "Ladol",
        "latitude": 23.61666667,
        "longitude": 72.73333333
      },
      {
        "name": "Lakhpat",
        "latitude": 23.82611111,
        "longitude": 68.77694444
      },
      {
        "name": "Lakhtar",
        "latitude": 22.85683,
        "longitude": 71.78844
      },
      {
        "name": "Lalpur",
        "latitude": 22.19073,
        "longitude": 69.96351
      },
      {
        "name": "Langhnaj",
        "latitude": 23.45,
        "longitude": 72.48333333
      },
      {
        "name": "Lathi",
        "latitude": 21.7231,
        "longitude": 71.38843
      },
      {
        "name": "Limbdi",
        "latitude": 22.56507,
        "longitude": 71.81076
      },
      {
        "name": "Limkheda",
        "latitude": 22.81666667,
        "longitude": 73.98333333
      },
      {
        "name": "Lunavada",
        "latitude": 23.12841,
        "longitude": 73.61043
      },
      {
        "name": "Madhavpur Ghed",
        "latitude": 21.29929167,
        "longitude": 70.02513889
      },
      {
        "name": "Madhi",
        "latitude": 22.1,
        "longitude": 69.1
      },
      {
        "name": "Mahemdavad",
        "latitude": 22.82359,
        "longitude": 72.75551
      },
      {
        "name": "Mahesana",
        "latitude": 23.66667,
        "longitude": 72.5
      },
      {
        "name": "Mahisa",
        "latitude": 22.85,
        "longitude": 73.05
      },
      {
        "name": "Mahudha",
        "latitude": 22.82082,
        "longitude": 72.94032
      },
      {
        "name": "Mahuva",
        "latitude": 21.0833,
        "longitude": 71.8
      },
      {
        "name": "Mahuva (Surat)",
        "latitude": 21.02,
        "longitude": 73.15
      },
      {
        "name": "Malpur",
        "latitude": 23.36035,
        "longitude": 73.46595
      },
      {
        "name": "Manavadar",
        "latitude": 21.49813,
        "longitude": 70.13775
      },
      {
        "name": "Mandal",
        "latitude": 23.28865,
        "longitude": 71.91854
      },
      {
        "name": "Mandvi",
        "latitude": 22.83282,
        "longitude": 69.35237
      },
      {
        "name": "Mandvi (Surat)",
        "latitude": 21.25526,
        "longitude": 73.30412
      },
      {
        "name": "Mangrol",
        "latitude": 21.12268,
        "longitude": 70.11484
      },
      {
        "name": "Mangrol (Junagadh)",
        "latitude": 21.12,
        "longitude": 70.12
      },
      {
        "name": "Mansa",
        "latitude": 23.42564,
        "longitude": 72.65739
      },
      {
        "name": "Meghraj",
        "latitude": 23.49805,
        "longitude": 73.51352
      },
      {
        "name": "Mehsana",
        "latitude": 23.6,
        "longitude": 72.4
      },
      {
        "name": "Mendarda",
        "latitude": 21.32112,
        "longitude": 70.44078
      },
      {
        "name": "Mithapur",
        "latitude": 22.41,
        "longitude": 69
      },
      {
        "name": "Modasa",
        "latitude": 23.46253,
        "longitude": 73.29857
      },
      {
        "name": "Morbi",
        "latitude": 22.81731,
        "longitude": 70.8377
      },
      {
        "name": "Morva (Hadaf)",
        "latitude": 22.90469,
        "longitude": 73.83912
      },
      {
        "name": "Morwa",
        "latitude": 22.90469,
        "longitude": 73.83912
      },
      {
        "name": "Mundra",
        "latitude": 22.83918,
        "longitude": 69.7219
      },
      {
        "name": "Nadiad",
        "latitude": 22.69385,
        "longitude": 72.86157
      },
      {
        "name": "Nagwa",
        "latitude": 25.69621,
        "longitude": 84.2359
      },
      {
        "name": "Naldhara",
        "latitude": 20.96666667,
        "longitude": 73.16666667
      },
      {
        "name": "Naliya",
        "latitude": 23.26058,
        "longitude": 68.82655
      },
      {
        "name": "Nargol",
        "latitude": 20.233,
        "longitude": 72.75
      },
      {
        "name": "Narmada",
        "latitude": 21.87377,
        "longitude": 73.49527
      },
      {
        "name": "Naroda",
        "latitude": 23.07041,
        "longitude": 72.65702
      },
      {
        "name": "Navsari",
        "latitude": 20.95,
        "longitude": 72.92
      },
      {
        "name": "Nikora",
        "latitude": 21.78586,
        "longitude": 73.13968
      },
      {
        "name": "Nizar",
        "latitude": 21.47727,
        "longitude": 74.19595
      },
      {
        "name": "Odadar",
        "latitude": 21.56666667,
        "longitude": 69.66666667
      },
      {
        "name": "Okha",
        "latitude": 22.46756,
        "longitude": 69.07002
      },
      {
        "name": "Olpad",
        "latitude": 21.33649,
        "longitude": 72.75161
      },
      {
        "name": "Paddhari",
        "latitude": 22.43654,
        "longitude": 70.60162
      },
      {
        "name": "Padra",
        "latitude": 22.2398,
        "longitude": 73.08451
      },
      {
        "name": "Palanpur",
        "latitude": 24.17128,
        "longitude": 72.43827
      },
      {
        "name": "Palanswa",
        "latitude": 23.46666667,
        "longitude": 70.93333333
      },
      {
        "name": "Palitana",
        "latitude": 21.52519,
        "longitude": 71.82309
      },
      {
        "name": "Paliyad",
        "latitude": 22.25757,
        "longitude": 71.56024
      },
      {
        "name": "Paliyad (Bhavnagar)",
        "latitude": 22.25757,
        "longitude": 71.56024
      },
      {
        "name": "Palsana",
        "latitude": 21.08,
        "longitude": 72.98
      },
      {
        "name": "Panch Mahals",
        "latitude": 22.75,
        "longitude": 73.6
      },
      {
        "name": "Panchmahal district",
        "latitude": 22.75,
        "longitude": 73.6
      },
      {
        "name": "Pardi",
        "latitude": 20.5087,
        "longitude": 72.94569
      },
      {
        "name": "Parnera",
        "latitude": 20.56101,
        "longitude": 72.94846
      },
      {
        "name": "Patan",
        "latitude": 23.7,
        "longitude": 71.8
      },
      {
        "name": "Pavi Jetpur",
        "latitude": 22.34472,
        "longitude": 73.84093
      },
      {
        "name": "Petlad",
        "latitude": 22.47681,
        "longitude": 72.79995
      },
      {
        "name": "Pipavav",
        "latitude": 20.96666667,
        "longitude": 71.56666667
      },
      {
        "name": "Piplod",
        "latitude": 22.81666667,
        "longitude": 73.9
      },
      {
        "name": "Porbandar",
        "latitude": 21.64219,
        "longitude": 69.60929
      },
      {
        "name": "Prabhas Patan",
        "latitude": 20.88808,
        "longitude": 70.40129
      },
      {
        "name": "Prantij",
        "latitude": 23.43841944,
        "longitude": 72.85718056
      },
      {
        "name": "Radhanpur",
        "latitude": 23.83238,
        "longitude": 71.6047
      },
      {
        "name": "Rajkot",
        "latitude": 22.33333,
        "longitude": 70.83333
      },
      {
        "name": "Rajpipla",
        "latitude": 21.86667,
        "longitude": 73.5
      },
      {
        "name": "Rajula",
        "latitude": 21.03854,
        "longitude": 71.44345
      },
      {
        "name": "Ranavav",
        "latitude": 21.68734,
        "longitude": 69.74485
      },
      {
        "name": "Ranpur",
        "latitude": 22.3667,
        "longitude": 71.75
      },
      {
        "name": "Rapar",
        "latitude": 23.57267,
        "longitude": 70.64718
      },
      {
        "name": "Reha",
        "latitude": 23.151725,
        "longitude": 69.750086
      },
      {
        "name": "Roha",
        "latitude": 23.19646,
        "longitude": 69.27076
      },
      {
        "name": "Sabar Kantha",
        "latitude": 23.62974,
        "longitude": 73.00197
      },
      {
        "name": "Sachin",
        "latitude": 21.08718,
        "longitude": 72.88153
      },
      {
        "name": "Salaya",
        "latitude": 22.31038,
        "longitude": 69.60376
      },
      {
        "name": "Samakhiali",
        "latitude": 23.3034,
        "longitude": 70.50688
      },
      {
        "name": "Sanand",
        "latitude": 22.99227,
        "longitude": 72.38177
      },
      {
        "name": "Sankheda",
        "latitude": 22.17021,
        "longitude": 73.5782
      },
      {
        "name": "Sarbhon",
        "latitude": 21.05,
        "longitude": 73.0833
      },
      {
        "name": "Sardoi",
        "latitude": 23.5667,
        "longitude": 73.2667
      },
      {
        "name": "Sarkhej",
        "latitude": 22.98297,
        "longitude": 72.50196
      },
      {
        "name": "Sathamba",
        "latitude": 23.169125,
        "longitude": 73.32661667
      },
      {
        "name": "Savarkundla",
        "latitude": 21.33726,
        "longitude": 71.3035
      },
      {
        "name": "Savli",
        "latitude": 22.56666667,
        "longitude": 73.21666667
      },
      {
        "name": "Sayla",
        "latitude": 22.54925,
        "longitude": 71.48324
      },
      {
        "name": "Shahpur",
        "latitude": 22.15611,
        "longitude": 70.77068
      },
      {
        "name": "Shivrajpur",
        "latitude": 22.42319,
        "longitude": 73.60865
      },
      {
        "name": "Siddhpur",
        "latitude": 23.9167,
        "longitude": 72.3833
      },
      {
        "name": "Sihor",
        "latitude": 21.71134,
        "longitude": 71.96179
      },
      {
        "name": "Sikka",
        "latitude": 22.43218,
        "longitude": 69.84158
      },
      {
        "name": "Sinor",
        "latitude": 21.91117,
        "longitude": 73.33974
      },
      {
        "name": "Sojitra",
        "latitude": 22.53884,
        "longitude": 72.71984
      },
      {
        "name": "Songadh",
        "latitude": 21.16966,
        "longitude": 73.56357
      },
      {
        "name": "Supedi",
        "latitude": 21.762,
        "longitude": 70.378
      },
      {
        "name": "Surat",
        "latitude": 21.17801,
        "longitude": 72.81189
      },
      {
        "name": "Surendranagar",
        "latitude": 22.72706,
        "longitude": 71.64856
      },
      {
        "name": "Sutrapada",
        "latitude": 20.8928,
        "longitude": 70.465
      },
      {
        "name": "Talaja",
        "latitude": 21.3527,
        "longitude": 72.03524
      },
      {
        "name": "Tankara",
        "latitude": 22.65622,
        "longitude": 70.74945
      },
      {
        "name": "Tapi",
        "latitude": 21.12,
        "longitude": 73.4
      },
      {
        "name": "Than",
        "latitude": 22.57422,
        "longitude": 71.19942
      },
      {
        "name": "Thangadh",
        "latitude": 22.56666667,
        "longitude": 71.18333333
      },
      {
        "name": "Tharad",
        "latitude": 24.39597,
        "longitude": 71.62577
      },
      {
        "name": "Thasra",
        "latitude": 22.79831,
        "longitude": 73.21174
      },
      {
        "name": "The Dangs",
        "latitude": 20.75,
        "longitude": 73.75
      },
      {
        "name": "Umarpada",
        "latitude": 21.45,
        "longitude": 73.5
      },
      {
        "name": "Umrala",
        "latitude": 21.84353,
        "longitude": 71.80305
      },
      {
        "name": "Umreth",
        "latitude": 22.69881,
        "longitude": 73.11561
      },
      {
        "name": "Un",
        "latitude": 23.88745,
        "longitude": 71.76975
      },
      {
        "name": "Una",
        "latitude": 20.82318,
        "longitude": 71.03795
      },
      {
        "name": "Unjha",
        "latitude": 23.80366,
        "longitude": 72.39101
      },
      {
        "name": "Upleta",
        "latitude": 21.74015,
        "longitude": 70.28256
      },
      {
        "name": "Utran",
        "latitude": 21.23333,
        "longitude": 72.86667
      },
      {
        "name": "Vadgam",
        "latitude": 24.08333333,
        "longitude": 72.48333333
      },
      {
        "name": "Vadnagar",
        "latitude": 23.78593,
        "longitude": 72.63893
      },
      {
        "name": "Vadodara",
        "latitude": 22.29941,
        "longitude": 73.20812
      },
      {
        "name": "Vaghodia",
        "latitude": 22.30505,
        "longitude": 73.40016
      },
      {
        "name": "Vaghodia INA",
        "latitude": 22.3,
        "longitude": 73.3833
      },
      {
        "name": "Vallabh Vidyanagar",
        "latitude": 22.53333,
        "longitude": 72.9
      },
      {
        "name": "Vallabhipur",
        "latitude": 21.8878,
        "longitude": 71.8795
      },
      {
        "name": "Valsad",
        "latitude": 20.5,
        "longitude": 73.08333
      },
      {
        "name": "Vanala",
        "latitude": 22.45,
        "longitude": 71.98333333
      },
      {
        "name": "Vansda",
        "latitude": 20.45,
        "longitude": 73.22
      },
      {
        "name": "Vanthli",
        "latitude": 21.4833,
        "longitude": 70.3333
      },
      {
        "name": "Vapi",
        "latitude": 20.37175,
        "longitude": 72.90493
      },
      {
        "name": "Vartej",
        "latitude": 21.73947,
        "longitude": 72.06553
      },
      {
        "name": "Vasa",
        "latitude": 22.66079,
        "longitude": 72.75519
      },
      {
        "name": "Vasavad",
        "latitude": 21.82657,
        "longitude": 71.02436
      },
      {
        "name": "Vaso",
        "latitude": 22.66079,
        "longitude": 72.75519
      },
      {
        "name": "Vataman",
        "latitude": 22.53,
        "longitude": 72.42
      },
      {
        "name": "Vejalpur",
        "latitude": 22.69021,
        "longitude": 73.56299
      },
      {
        "name": "Veraval",
        "latitude": 20.9077,
        "longitude": 70.36786
      },
      {
        "name": "Vijapur",
        "latitude": 23.5623,
        "longitude": 72.74848
      },
      {
        "name": "Vinchhiya",
        "latitude": 22.21027,
        "longitude": 71.37967
      },
      {
        "name": "Vinchia",
        "latitude": 22.21027,
        "longitude": 71.37967
      },
      {
        "name": "Viramgam",
        "latitude": 23.12,
        "longitude": 72.03
      },
      {
        "name": "Virpur",
        "latitude": 23.1892,
        "longitude": 73.47987
      },
      {
        "name": "Visavadar",
        "latitude": 21.33954,
        "longitude": 70.74966
      },
      {
        "name": "Visnagar",
        "latitude": 23.69855,
        "longitude": 72.5521
      },
      {
        "name": "Vyara",
        "latitude": 21.11079,
        "longitude": 73.39365
      },
      {
        "name": "Wadhai",
        "latitude": 20.76666667,
        "longitude": 73.48333333
      },
      {
        "name": "Wadhwan",
        "latitude": 22.7,
        "longitude": 71.68333333
      },
      {
        "name": "Waghai",
        "latitude": 20.77048,
        "longitude": 73.50074
      },
      {
        "name": "Wankaner",
        "latitude": 22.61198,
        "longitude": 70.94379
      }
    ]
  },
  {
    "name": "Haryana",
    "kind": "state",
    "cities": [
      {
        "name": "Ambala",
        "latitude": 30.32854,
        "longitude": 76.9422
      },
      {
        "name": "Asandh",
        "latitude": 29.52119,
        "longitude": 76.60552
      },
      {
        "name": "Ateli Mandi",
        "latitude": 28.1008,
        "longitude": 76.2598
      },
      {
        "name": "Bahadurgarh",
        "latitude": 28.69287,
        "longitude": 76.93555
      },
      {
        "name": "Bara Uchana",
        "latitude": 29.46747,
        "longitude": 76.17798
      },
      {
        "name": "Barwala",
        "latitude": 29.36747,
        "longitude": 75.90809
      },
      {
        "name": "Bawal",
        "latitude": 28.07184,
        "longitude": 76.58312
      },
      {
        "name": "Beri Khas",
        "latitude": 28.70146,
        "longitude": 76.57708
      },
      {
        "name": "Bhiwani",
        "latitude": 28.75,
        "longitude": 76.16667
      },
      {
        "name": "Bilaspur",
        "latitude": 30.3045,
        "longitude": 77.30424
      },
      {
        "name": "Buriya",
        "latitude": 30.15911,
        "longitude": 77.35814
      },
      {
        "name": "Charkhi Dadri",
        "latitude": 28.59166,
        "longitude": 76.27161
      },
      {
        "name": "Chhachhrauli",
        "latitude": 30.24492,
        "longitude": 77.36027
      },
      {
        "name": "Dabwali",
        "latitude": 29.94906,
        "longitude": 74.73832
      },
      {
        "name": "Dharuhera",
        "latitude": 28.20553,
        "longitude": 76.79691
      },
      {
        "name": "Ellenabad",
        "latitude": 29.45282,
        "longitude": 74.66122
      },
      {
        "name": "Faridabad",
        "latitude": 28.41124,
        "longitude": 77.31316
      },
      {
        "name": "Faridabad District",
        "latitude": 28.46292,
        "longitude": 77.3716
      },
      {
        "name": "Farrukhnagar",
        "latitude": 28.44745,
        "longitude": 76.82391
      },
      {
        "name": "Fatehabad",
        "latitude": 29.51525,
        "longitude": 75.45554
      },
      {
        "name": "Fatehabad District",
        "latitude": 29.31,
        "longitude": 75.27
      },
      {
        "name": "Firozpur Jhirka",
        "latitude": 27.78853,
        "longitude": 76.94496
      },
      {
        "name": "Gharaunda",
        "latitude": 29.53692,
        "longitude": 76.97142
      },
      {
        "name": "Gohana",
        "latitude": 29.13777,
        "longitude": 76.70247
      },
      {
        "name": "Gorakhpur",
        "latitude": 29.44768,
        "longitude": 75.67206
      },
      {
        "name": "Gurgaon",
        "latitude": 28.43891,
        "longitude": 77.00592
      },
      {
        "name": "Hansi",
        "latitude": 29.10239,
        "longitude": 75.96253
      },
      {
        "name": "Hasanpur",
        "latitude": 27.96944,
        "longitude": 77.49544
      },
      {
        "name": "Hisar",
        "latitude": 29.15394,
        "longitude": 75.72294
      },
      {
        "name": "Hodal",
        "latitude": 27.89196,
        "longitude": 77.36744
      },
      {
        "name": "Inda Chhoi",
        "latitude": 29.64042,
        "longitude": 75.79041
      },
      {
        "name": "Indri",
        "latitude": 29.87999,
        "longitude": 77.05972
      },
      {
        "name": "Jagadhri",
        "latitude": 30.16719,
        "longitude": 77.30367
      },
      {
        "name": "Jakhal",
        "latitude": 29.79627,
        "longitude": 75.82392
      },
      {
        "name": "Jhajjar",
        "latitude": 28.6063,
        "longitude": 76.6565
      },
      {
        "name": "Jind",
        "latitude": 29.31577,
        "longitude": 76.31502
      },
      {
        "name": "Kaithal",
        "latitude": 29.80153,
        "longitude": 76.39959
      },
      {
        "name": "Kalanaur",
        "latitude": 28.82823,
        "longitude": 76.3955
      },
      {
        "name": "Kalanwali",
        "latitude": 29.83573,
        "longitude": 74.9717
      },
      {
        "name": "Kanina Khas",
        "latitude": 28.33093,
        "longitude": 76.31099
      },
      {
        "name": "Karnal",
        "latitude": 29.66667,
        "longitude": 76.83333
      },
      {
        "name": "Kharkhauda",
        "latitude": 28.8787,
        "longitude": 76.91069
      },
      {
        "name": "Kheri Sampla",
        "latitude": 28.7781,
        "longitude": 76.7756
      },
      {
        "name": "Kurukshetra",
        "latitude": 30,
        "longitude": 76.75
      },
      {
        "name": "Ladwa",
        "latitude": 29.9935,
        "longitude": 77.04563
      },
      {
        "name": "Loharu",
        "latitude": 28.42993,
        "longitude": 75.80779
      },
      {
        "name": "Maham",
        "latitude": 28.96912,
        "longitude": 76.29495
      },
      {
        "name": "Mahendragarh",
        "latitude": 28.25,
        "longitude": 76.16667
      },
      {
        "name": "Mandholi Kalan",
        "latitude": 28.7085,
        "longitude": 75.68296
      },
      {
        "name": "Mustafabad",
        "latitude": 30.2022,
        "longitude": 77.14873
      },
      {
        "name": "Narayangarh",
        "latitude": 30.47798,
        "longitude": 77.12804
      },
      {
        "name": "Narnaul",
        "latitude": 28.04444,
        "longitude": 76.10833
      },
      {
        "name": "Narnaund",
        "latitude": 29.22047,
        "longitude": 76.14278
      },
      {
        "name": "Narwana",
        "latitude": 29.59903,
        "longitude": 76.11927
      },
      {
        "name": "Nilokheri",
        "latitude": 29.83671,
        "longitude": 76.93191
      },
      {
        "name": "Nuh",
        "latitude": 28.10296,
        "longitude": 77.00144
      },
      {
        "name": "Palwal",
        "latitude": 28.14469,
        "longitude": 77.32546
      },
      {
        "name": "Panchkula",
        "latitude": 30.72883,
        "longitude": 76.94716
      },
      {
        "name": "Panipat",
        "latitude": 29.33259,
        "longitude": 76.92634
      },
      {
        "name": "Pataudi",
        "latitude": 28.32547,
        "longitude": 76.77858
      },
      {
        "name": "Pehowa",
        "latitude": 29.97897,
        "longitude": 76.58249
      },
      {
        "name": "Pinjaur",
        "latitude": 30.79873,
        "longitude": 76.91822
      },
      {
        "name": "Punahana",
        "latitude": 27.86371,
        "longitude": 77.20432
      },
      {
        "name": "Pundri",
        "latitude": 29.76096,
        "longitude": 76.56034
      },
      {
        "name": "Radaur",
        "latitude": 30.02706,
        "longitude": 77.15177
      },
      {
        "name": "Rania",
        "latitude": 29.52454,
        "longitude": 74.83689
      },
      {
        "name": "Ratia",
        "latitude": 29.69029,
        "longitude": 75.57688
      },
      {
        "name": "Rewari",
        "latitude": 28.199,
        "longitude": 76.6183
      },
      {
        "name": "Rewari District",
        "latitude": 28.19613,
        "longitude": 76.61607
      },
      {
        "name": "Rohtak",
        "latitude": 28.83333,
        "longitude": 76.66667
      },
      {
        "name": "Safidon",
        "latitude": 29.40596,
        "longitude": 76.67042
      },
      {
        "name": "Samalkha",
        "latitude": 29.23552,
        "longitude": 77.01273
      },
      {
        "name": "Shadipur Julana",
        "latitude": 29.12368,
        "longitude": 76.40516
      },
      {
        "name": "Shahabad",
        "latitude": 30.16776,
        "longitude": 76.87046
      },
      {
        "name": "Sirsa",
        "latitude": 29.53489,
        "longitude": 75.02898
      },
      {
        "name": "Sohna",
        "latitude": 28.24737,
        "longitude": 77.06544
      },
      {
        "name": "Sonipat",
        "latitude": 29,
        "longitude": 76.91667
      },
      {
        "name": "Taoru",
        "latitude": 28.21173,
        "longitude": 76.94984
      },
      {
        "name": "Thanesar",
        "latitude": 29.97323,
        "longitude": 76.83214
      },
      {
        "name": "Tohana",
        "latitude": 29.71332,
        "longitude": 75.90441
      },
      {
        "name": "Tosham",
        "latitude": 28.86993,
        "longitude": 75.9165
      },
      {
        "name": "Uklana",
        "latitude": 29.51124,
        "longitude": 75.87823
      },
      {
        "name": "Yamunanagar",
        "latitude": 30.23644,
        "longitude": 77.30498
      }
    ]
  },
  {
    "name": "Himachal Pradesh",
    "kind": "state",
    "cities": [
      {
        "name": "Arki",
        "latitude": 31.15196,
        "longitude": 76.96675
      },
      {
        "name": "Baddi",
        "latitude": 30.95783,
        "longitude": 76.79136
      },
      {
        "name": "Banjar",
        "latitude": 31.639,
        "longitude": 77.34055
      },
      {
        "name": "Bilaspur",
        "latitude": 31.33027,
        "longitude": 76.75663
      },
      {
        "name": "Chamba",
        "latitude": 32.57147,
        "longitude": 76.10229
      },
      {
        "name": "Chaupal",
        "latitude": 30.94647,
        "longitude": 77.5884
      },
      {
        "name": "Chowari",
        "latitude": 32.4319,
        "longitude": 76.012
      },
      {
        "name": "Chuari Khas",
        "latitude": 32.43058,
        "longitude": 76.01428
      },
      {
        "name": "Dagshai",
        "latitude": 30.88431,
        "longitude": 77.05228
      },
      {
        "name": "Dalhousie",
        "latitude": 32.55219,
        "longitude": 75.94663
      },
      {
        "name": "Daulatpur",
        "latitude": 31.78871,
        "longitude": 75.99154
      },
      {
        "name": "Dera Gopipur",
        "latitude": 31.87919,
        "longitude": 76.21871
      },
      {
        "name": "Dharamsala",
        "latitude": 32.22006,
        "longitude": 76.32013
      },
      {
        "name": "Gagret",
        "latitude": 31.65846,
        "longitude": 76.06144
      },
      {
        "name": "Ghumarwin",
        "latitude": 31.44166,
        "longitude": 76.71509
      },
      {
        "name": "Hamirpur",
        "latitude": 31.75,
        "longitude": 76.5
      },
      {
        "name": "Jawala Mukhi",
        "latitude": 31.87456,
        "longitude": 76.32013
      },
      {
        "name": "Jogindarnagar",
        "latitude": 31.98727,
        "longitude": 76.78906
      },
      {
        "name": "Jubbal",
        "latitude": 31.10923,
        "longitude": 77.65085
      },
      {
        "name": "Jutogh",
        "latitude": 31.1,
        "longitude": 77.11667
      },
      {
        "name": "Kalka",
        "latitude": 30.83982,
        "longitude": 76.94065
      },
      {
        "name": "Kangar",
        "latitude": 32.09135,
        "longitude": 76.26267
      },
      {
        "name": "Kangra",
        "latitude": 32.16667,
        "longitude": 76.25
      },
      {
        "name": "Kasauli",
        "latitude": 30.89856,
        "longitude": 76.96587
      },
      {
        "name": "Kinnaur",
        "latitude": 31.58333,
        "longitude": 78.41667
      },
      {
        "name": "Kotkhai",
        "latitude": 31.11728,
        "longitude": 77.53936
      },
      {
        "name": "Kotla",
        "latitude": 32.25,
        "longitude": 76.03333
      },
      {
        "name": "Kulu",
        "latitude": 32,
        "longitude": 77.25
      },
      {
        "name": "Kyelang",
        "latitude": 32.5717,
        "longitude": 77.02448
      },
      {
        "name": "Lahul and Spiti",
        "latitude": 32.5,
        "longitude": 77.83333
      },
      {
        "name": "Manali",
        "latitude": 32.2574,
        "longitude": 77.17481
      },
      {
        "name": "Mandi",
        "latitude": 31.71194,
        "longitude": 76.93273
      },
      {
        "name": "Nadaun",
        "latitude": 31.78303,
        "longitude": 76.3431
      },
      {
        "name": "Nagar",
        "latitude": 32.13808,
        "longitude": 77.17393
      },
      {
        "name": "Nagrota",
        "latitude": 32.0571,
        "longitude": 76.09139
      },
      {
        "name": "Nahan",
        "latitude": 30.56029,
        "longitude": 77.29426
      },
      {
        "name": "Nalagarh",
        "latitude": 31.04168,
        "longitude": 76.72285
      },
      {
        "name": "Palampur",
        "latitude": 32.11453,
        "longitude": 76.55681
      },
      {
        "name": "Pandoh",
        "latitude": 31.66902,
        "longitude": 77.05359
      },
      {
        "name": "Paonta Sahib",
        "latitude": 30.43666,
        "longitude": 77.62462
      },
      {
        "name": "Parwanoo",
        "latitude": 30.83716,
        "longitude": 76.96143
      },
      {
        "name": "Rajgarh",
        "latitude": 30.85142,
        "longitude": 77.30066
      },
      {
        "name": "Rampur",
        "latitude": 31.44943,
        "longitude": 77.63087
      },
      {
        "name": "Rohru",
        "latitude": 31.20269,
        "longitude": 77.75484
      },
      {
        "name": "Sabathu",
        "latitude": 30.97494,
        "longitude": 76.99137
      },
      {
        "name": "Santokhgarh",
        "latitude": 31.35205,
        "longitude": 76.31775
      },
      {
        "name": "Sarahan",
        "latitude": 31.50988,
        "longitude": 77.79395
      },
      {
        "name": "Sarka Ghat",
        "latitude": 31.69887,
        "longitude": 76.73529
      },
      {
        "name": "Seoni",
        "latitude": 31.24188,
        "longitude": 77.12362
      },
      {
        "name": "Shimla",
        "latitude": 31.16667,
        "longitude": 77.58333
      },
      {
        "name": "Sirmaur",
        "latitude": 30.75,
        "longitude": 77.5
      },
      {
        "name": "Solan",
        "latitude": 31.08333,
        "longitude": 76.83333
      },
      {
        "name": "Sundarnagar",
        "latitude": 31.53523,
        "longitude": 76.905
      },
      {
        "name": "Theog",
        "latitude": 31.12155,
        "longitude": 77.35838
      },
      {
        "name": "Tira Sujanpur",
        "latitude": 31.83364,
        "longitude": 76.50539
      },
      {
        "name": "Una",
        "latitude": 31.46493,
        "longitude": 76.26914
      },
      {
        "name": "Yol",
        "latitude": 32.16423,
        "longitude": 76.19622
      }
    ]
  },
  {
    "name": "Jammu and Kashmir",
    "kind": "union_territory",
    "cities": [
      {
        "name": "Akhnur",
        "latitude": 32.86667,
        "longitude": 74.73333
      },
      {
        "name": "Anantnag",
        "latitude": 33.73068,
        "longitude": 75.15418
      },
      {
        "name": "Awantipur",
        "latitude": 33.91978,
        "longitude": 75.01515
      },
      {
        "name": "Badgam",
        "latitude": 33.89001,
        "longitude": 74.66297
      },
      {
        "name": "Bandipore",
        "latitude": 34.50404,
        "longitude": 74.82832
      },
      {
        "name": "Bandipura",
        "latitude": 34.41728,
        "longitude": 74.64308
      },
      {
        "name": "Banihal",
        "latitude": 33.43647,
        "longitude": 75.19684
      },
      {
        "name": "Baramula",
        "latitude": 34.19287,
        "longitude": 74.3692
      },
      {
        "name": "Batoti",
        "latitude": 33.11826,
        "longitude": 75.30889
      },
      {
        "name": "Bhadarwah",
        "latitude": 32.97941,
        "longitude": 75.71723
      },
      {
        "name": "Bijbehara",
        "latitude": 33.79378,
        "longitude": 75.107
      },
      {
        "name": "Bishnah",
        "latitude": 32.6106,
        "longitude": 74.85557
      },
      {
        "name": "Doda",
        "latitude": 33.14916,
        "longitude": 75.54746
      },
      {
        "name": "Gandarbal",
        "latitude": 34.22619,
        "longitude": 74.77478
      },
      {
        "name": "Ganderbal",
        "latitude": 34.29467,
        "longitude": 75.19996
      },
      {
        "name": "Gho Brahmanan de",
        "latitude": 32.5559,
        "longitude": 74.9539
      },
      {
        "name": "Hajan",
        "latitude": 34.29895,
        "longitude": 74.61681
      },
      {
        "name": "Hiranagar",
        "latitude": 32.45493,
        "longitude": 75.27187
      },
      {
        "name": "Jammu",
        "latitude": 32.75,
        "longitude": 74.83333
      },
      {
        "name": "Jaurian",
        "latitude": 32.83255,
        "longitude": 74.57612
      },
      {
        "name": "Kathua",
        "latitude": 32.58333,
        "longitude": 75.5
      },
      {
        "name": "Katra",
        "latitude": 32.99167,
        "longitude": 74.93195
      },
      {
        "name": "Khaur",
        "latitude": 32.6027,
        "longitude": 74.80918
      },
      {
        "name": "Kishtwar",
        "latitude": 33.52958,
        "longitude": 76.01462
      },
      {
        "name": "Kud",
        "latitude": 33.07246,
        "longitude": 75.28727
      },
      {
        "name": "Kulgam",
        "latitude": 33.64456,
        "longitude": 75.01923
      },
      {
        "name": "Kupwara",
        "latitude": 34.53193,
        "longitude": 74.26605
      },
      {
        "name": "Ladakh",
        "latitude": 34.33333,
        "longitude": 77.41667
      },
      {
        "name": "Magam",
        "latitude": 34.09256,
        "longitude": 74.59016
      },
      {
        "name": "Nawanshahr",
        "latitude": 32.76505,
        "longitude": 74.52772
      },
      {
        "name": "Noria",
        "latitude": 32.52095,
        "longitude": 74.79845
      },
      {
        "name": "Padam",
        "latitude": 33.46659,
        "longitude": 76.88488
      },
      {
        "name": "Pahlgam",
        "latitude": 34.01592,
        "longitude": 75.31899
      },
      {
        "name": "Parol",
        "latitude": 32.34598,
        "longitude": 75.43441
      },
      {
        "name": "Pattan",
        "latitude": 34.16125,
        "longitude": 74.55634
      },
      {
        "name": "Pulwama",
        "latitude": 33.87405,
        "longitude": 74.89955
      },
      {
        "name": "Punch",
        "latitude": 33.70178,
        "longitude": 74.19916
      },
      {
        "name": "Qazigund",
        "latitude": 33.63828,
        "longitude": 75.14261
      },
      {
        "name": "Rajaori",
        "latitude": 33.37526,
        "longitude": 74.3092
      },
      {
        "name": "Rajauri",
        "latitude": 33.25,
        "longitude": 74.25
      },
      {
        "name": "Ramban",
        "latitude": 33.32301,
        "longitude": 75.1861
      },
      {
        "name": "Ramgarh",
        "latitude": 33.40379,
        "longitude": 74.22388
      },
      {
        "name": "Ramnagar",
        "latitude": 32.80728,
        "longitude": 75.31119
      },
      {
        "name": "Riasi",
        "latitude": 33.08115,
        "longitude": 74.83242
      },
      {
        "name": "Samba",
        "latitude": 32.57523,
        "longitude": 75.10929
      },
      {
        "name": "Shupiyan",
        "latitude": 33.73067,
        "longitude": 74.81869
      },
      {
        "name": "Sopur",
        "latitude": 34.28671,
        "longitude": 74.47228
      },
      {
        "name": "Soyibug",
        "latitude": 34.07677,
        "longitude": 74.7057
      },
      {
        "name": "Srinagar",
        "latitude": 34.08565,
        "longitude": 74.80555
      },
      {
        "name": "Sumbal",
        "latitude": 34.23072,
        "longitude": 74.6472
      },
      {
        "name": "Thang",
        "latitude": 34.9274,
        "longitude": 76.79336
      },
      {
        "name": "Thanna Mandi",
        "latitude": 33.54204,
        "longitude": 74.381
      },
      {
        "name": "Tral",
        "latitude": 33.92708,
        "longitude": 75.11585
      },
      {
        "name": "Tsrar Sharif",
        "latitude": 33.86319,
        "longitude": 74.76524
      },
      {
        "name": "Udhampur",
        "latitude": 33,
        "longitude": 75.16667
      },
      {
        "name": "Uri",
        "latitude": 34.08064,
        "longitude": 74.05088
      }
    ]
  },
  {
    "name": "Jharkhand",
    "kind": "state",
    "cities": [
      {
        "name": "Bagra",
        "latitude": 23.73333,
        "longitude": 86.31667
      },
      {
        "name": "Barka Kana",
        "latitude": 23.62118,
        "longitude": 85.46748
      },
      {
        "name": "Barki Saria",
        "latitude": 24.17594,
        "longitude": 85.88938
      },
      {
        "name": "Barwadih",
        "latitude": 23.8478,
        "longitude": 84.11049
      },
      {
        "name": "Bhojudih",
        "latitude": 23.63962,
        "longitude": 86.44105
      },
      {
        "name": "Bokaro",
        "latitude": 23.68562,
        "longitude": 85.99026
      },
      {
        "name": "Bundu",
        "latitude": 23.16095,
        "longitude": 85.59007
      },
      {
        "name": "Chaibasa",
        "latitude": 22.55038,
        "longitude": 85.80249
      },
      {
        "name": "Chakradharpur",
        "latitude": 22.67611,
        "longitude": 85.62892
      },
      {
        "name": "Chakulia",
        "latitude": 22.48301,
        "longitude": 86.71793
      },
      {
        "name": "Chandil",
        "latitude": 22.95745,
        "longitude": 86.05331
      },
      {
        "name": "Chas",
        "latitude": 23.63556,
        "longitude": 86.16712
      },
      {
        "name": "Chatra",
        "latitude": 24.20645,
        "longitude": 84.87085
      },
      {
        "name": "Chiria",
        "latitude": 22.31093,
        "longitude": 85.27601
      },
      {
        "name": "Daltonganj",
        "latitude": 24.03971,
        "longitude": 84.0658
      },
      {
        "name": "Deogarh",
        "latitude": 24.44382,
        "longitude": 86.72607
      },
      {
        "name": "Dhanbad",
        "latitude": 23.80199,
        "longitude": 86.44324
      },
      {
        "name": "Dhanwar",
        "latitude": 24.41074,
        "longitude": 85.98183
      },
      {
        "name": "Dugda",
        "latitude": 23.74516,
        "longitude": 86.17175
      },
      {
        "name": "Dumka",
        "latitude": 24.3,
        "longitude": 87.25
      },
      {
        "name": "Garhwa",
        "latitude": 24.07494,
        "longitude": 83.71023
      },
      {
        "name": "Ghatsila",
        "latitude": 22.58531,
        "longitude": 86.47682
      },
      {
        "name": "Giridih",
        "latitude": 24.25,
        "longitude": 85.91667
      },
      {
        "name": "Gobindpur",
        "latitude": 22.63393,
        "longitude": 86.07162
      },
      {
        "name": "Godda",
        "latitude": 24.83333,
        "longitude": 87.21667
      },
      {
        "name": "Gomoh",
        "latitude": 23.87355,
        "longitude": 86.1516
      },
      {
        "name": "Gopinathpur",
        "latitude": 22.66301,
        "longitude": 86.075
      },
      {
        "name": "Gua",
        "latitude": 22.21361,
        "longitude": 85.38774
      },
      {
        "name": "Gumia",
        "latitude": 23.7975,
        "longitude": 85.82523
      },
      {
        "name": "Gumla",
        "latitude": 23.08055,
        "longitude": 84.53834
      },
      {
        "name": "Hazaribag",
        "latitude": 24,
        "longitude": 85.25
      },
      {
        "name": "Hazaribagh",
        "latitude": 23.99241,
        "longitude": 85.36162
      },
      {
        "name": "Hesla",
        "latitude": 24.06313,
        "longitude": 85.87905
      },
      {
        "name": "Husainabad",
        "latitude": 24.52849,
        "longitude": 84
      },
      {
        "name": "Jagannathpur",
        "latitude": 22.22115,
        "longitude": 85.63917
      },
      {
        "name": "Jamadoba",
        "latitude": 23.71667,
        "longitude": 86.4
      },
      {
        "name": "Jamshedpur",
        "latitude": 22.80278,
        "longitude": 86.18545
      },
      {
        "name": "Jamtara",
        "latitude": 24,
        "longitude": 86.85
      },
      {
        "name": "Jasidih",
        "latitude": 24.51379,
        "longitude": 86.64576
      },
      {
        "name": "Jharia",
        "latitude": 23.74079,
        "longitude": 86.41456
      },
      {
        "name": "Jugsalai",
        "latitude": 22.77668,
        "longitude": 86.18351
      },
      {
        "name": "Jumri Tilaiya",
        "latitude": 24.4349,
        "longitude": 85.52951
      },
      {
        "name": "Kalikapur",
        "latitude": 22.61662,
        "longitude": 86.2881
      },
      {
        "name": "Kandra",
        "latitude": 22.8517,
        "longitude": 86.05192
      },
      {
        "name": "Kanke",
        "latitude": 23.43478,
        "longitude": 85.32059
      },
      {
        "name": "Katras",
        "latitude": 23.79752,
        "longitude": 86.29834
      },
      {
        "name": "Kenduadih",
        "latitude": 23.77574,
        "longitude": 86.37609
      },
      {
        "name": "Kharsawan",
        "latitude": 22.79093,
        "longitude": 85.83102
      },
      {
        "name": "Khunti",
        "latitude": 23.07602,
        "longitude": 85.27818
      },
      {
        "name": "Kodarma",
        "latitude": 24.46753,
        "longitude": 85.59397
      },
      {
        "name": "Kuju",
        "latitude": 23.72536,
        "longitude": 85.51023
      },
      {
        "name": "Latehar",
        "latitude": 23.75,
        "longitude": 84.4
      },
      {
        "name": "Lohardaga",
        "latitude": 23.5,
        "longitude": 84.6
      },
      {
        "name": "Madhupur",
        "latitude": 24.27419,
        "longitude": 86.63929
      },
      {
        "name": "Malkera",
        "latitude": 23.78213,
        "longitude": 86.28767
      },
      {
        "name": "Manoharpur",
        "latitude": 22.37456,
        "longitude": 85.19234
      },
      {
        "name": "Mugma",
        "latitude": 23.77015,
        "longitude": 86.72746
      },
      {
        "name": "Mushabani",
        "latitude": 22.51135,
        "longitude": 86.45713
      },
      {
        "name": "Neturhat",
        "latitude": 23.47457,
        "longitude": 84.2678
      },
      {
        "name": "Nirsa",
        "latitude": 23.78438,
        "longitude": 86.70692
      },
      {
        "name": "Noamundi",
        "latitude": 22.16094,
        "longitude": 85.50416
      },
      {
        "name": "Pakur",
        "latitude": 24.63925,
        "longitude": 87.84239
      },
      {
        "name": "Palamu",
        "latitude": 23.91667,
        "longitude": 84.08333
      },
      {
        "name": "Pashchim Singhbhum",
        "latitude": 22.5,
        "longitude": 85.5
      },
      {
        "name": "patamda",
        "latitude": 24.3,
        "longitude": 85.41667
      },
      {
        "name": "Pathardih",
        "latitude": 23.6658,
        "longitude": 86.43166
      },
      {
        "name": "Purba Singhbhum",
        "latitude": 22.59238,
        "longitude": 86.48341
      },
      {
        "name": "Ramgarh",
        "latitude": 23.63073,
        "longitude": 85.56057
      },
      {
        "name": "Ranchi",
        "latitude": 23.34316,
        "longitude": 85.3094
      },
      {
        "name": "Ray",
        "latitude": 23.6843,
        "longitude": 85.05457
      },
      {
        "name": "Sahibganj",
        "latitude": 24.99354,
        "longitude": 87.67333
      },
      {
        "name": "Saraikela",
        "latitude": 22.69963,
        "longitude": 85.93126
      },
      {
        "name": "Sarubera",
        "latitude": 23.81813,
        "longitude": 85.99628
      },
      {
        "name": "Sijua",
        "latitude": 23.77617,
        "longitude": 86.33028
      },
      {
        "name": "Simdega",
        "latitude": 22.61523,
        "longitude": 84.50208
      },
      {
        "name": "Sini",
        "latitude": 22.79325,
        "longitude": 85.94543
      },
      {
        "name": "Topchanchi",
        "latitude": 23.90381,
        "longitude": 86.19792
      }
    ]
  },
  {
    "name": "Karnataka",
    "kind": "state",
    "cities": [
      {
        "name": "Afzalpur",
        "latitude": 17.19986,
        "longitude": 76.36018
      },
      {
        "name": "Ajjampur",
        "latitude": 13.72794,
        "longitude": 76.0068
      },
      {
        "name": "Aland",
        "latitude": 17.56425,
        "longitude": 76.56854
      },
      {
        "name": "Alnavar",
        "latitude": 15.42727,
        "longitude": 74.74111
      },
      {
        "name": "Alur",
        "latitude": 12.97805,
        "longitude": 75.99094
      },
      {
        "name": "Anekal",
        "latitude": 12.7111,
        "longitude": 77.69557
      },
      {
        "name": "Ankola",
        "latitude": 14.66049,
        "longitude": 74.3047
      },
      {
        "name": "Annigeri",
        "latitude": 15.42513,
        "longitude": 75.4335
      },
      {
        "name": "Arkalgud",
        "latitude": 12.76171,
        "longitude": 76.06035
      },
      {
        "name": "Arsikere",
        "latitude": 13.31446,
        "longitude": 76.25704
      },
      {
        "name": "Athni",
        "latitude": 16.72613,
        "longitude": 75.06421
      },
      {
        "name": "Aurad",
        "latitude": 18.25397,
        "longitude": 77.41761
      },
      {
        "name": "Badami",
        "latitude": 15.91495,
        "longitude": 75.67683
      },
      {
        "name": "Bagalkot",
        "latitude": 16.18,
        "longitude": 75.69
      },
      {
        "name": "Bagepalli",
        "latitude": 13.78338,
        "longitude": 77.79667
      },
      {
        "name": "Bail-Hongal",
        "latitude": 15.8137,
        "longitude": 74.85895
      },
      {
        "name": "Ballari",
        "latitude": 15.15,
        "longitude": 76.55
      },
      {
        "name": "Ballary",
        "latitude": 15.14205,
        "longitude": 76.92398
      },
      {
        "name": "Banavar",
        "latitude": 13.41029,
        "longitude": 76.16314
      },
      {
        "name": "Bangalore Rural",
        "latitude": 13.22567,
        "longitude": 77.57501
      },
      {
        "name": "Bangalore Urban",
        "latitude": 13,
        "longitude": 77.58333
      },
      {
        "name": "Bangarapet",
        "latitude": 12.99116,
        "longitude": 78.17804
      },
      {
        "name": "Bannur",
        "latitude": 12.33295,
        "longitude": 76.86201
      },
      {
        "name": "Bantval",
        "latitude": 12.8905,
        "longitude": 75.03489
      },
      {
        "name": "Basavakalyan",
        "latitude": 17.87445,
        "longitude": 76.94972
      },
      {
        "name": "Basavana Bagevadi",
        "latitude": 16.57278,
        "longitude": 75.97252
      },
      {
        "name": "Belagavi",
        "latitude": 16.33333,
        "longitude": 74.75
      },
      {
        "name": "Belluru",
        "latitude": 12.9814,
        "longitude": 76.73308
      },
      {
        "name": "Beltangadi",
        "latitude": 13.98333,
        "longitude": 75.3
      },
      {
        "name": "Belur",
        "latitude": 13.16558,
        "longitude": 75.86519
      },
      {
        "name": "Bengaluru",
        "latitude": 12.97194,
        "longitude": 77.59369
      },
      {
        "name": "Bhadravati",
        "latitude": 13.84846,
        "longitude": 75.70502
      },
      {
        "name": "Bhalki",
        "latitude": 18.04348,
        "longitude": 77.206
      },
      {
        "name": "Bhatkal",
        "latitude": 13.98534,
        "longitude": 74.55531
      },
      {
        "name": "Bidar",
        "latitude": 18.08333,
        "longitude": 77.33333
      },
      {
        "name": "Bilgi",
        "latitude": 16.34714,
        "longitude": 75.61804
      },
      {
        "name": "Birur",
        "latitude": 13.59723,
        "longitude": 75.97167
      },
      {
        "name": "Byadgi",
        "latitude": 14.67325,
        "longitude": 75.4868
      },
      {
        "name": "Byndoor",
        "latitude": 13.86667,
        "longitude": 74.63333
      },
      {
        "name": "Canacona",
        "latitude": 14.9959,
        "longitude": 74.05056
      },
      {
        "name": "Challakere",
        "latitude": 14.318,
        "longitude": 76.65165
      },
      {
        "name": "Chamrajnagar",
        "latitude": 11.96,
        "longitude": 77.09
      },
      {
        "name": "Channagiri",
        "latitude": 14.02399,
        "longitude": 75.92577
      },
      {
        "name": "Channapatna",
        "latitude": 12.65143,
        "longitude": 77.20672
      },
      {
        "name": "Channarayapatna",
        "latitude": 12.90642,
        "longitude": 76.38775
      },
      {
        "name": "Chik Ballapur",
        "latitude": 13.43512,
        "longitude": 77.72787
      },
      {
        "name": "Chikkaballapur",
        "latitude": 13.55,
        "longitude": 77.87
      },
      {
        "name": "Chikkamagaluru",
        "latitude": 13.49,
        "longitude": 75.73
      },
      {
        "name": "Chiknayakanhalli",
        "latitude": 13.41609,
        "longitude": 76.62063
      },
      {
        "name": "Chikodi",
        "latitude": 16.42898,
        "longitude": 74.58591
      },
      {
        "name": "Chincholi",
        "latitude": 17.46508,
        "longitude": 77.41874
      },
      {
        "name": "Chintamani",
        "latitude": 13.40051,
        "longitude": 78.05172
      },
      {
        "name": "Chitapur",
        "latitude": 17.12357,
        "longitude": 77.0824
      },
      {
        "name": "Chitradurga",
        "latitude": 14.2,
        "longitude": 76.5
      },
      {
        "name": "Closepet",
        "latitude": 12.72181,
        "longitude": 77.28149
      },
      {
        "name": "Coondapoor",
        "latitude": 13.63126,
        "longitude": 74.6902
      },
      {
        "name": "Dakshina Kannada",
        "latitude": 12.84,
        "longitude": 75.29
      },
      {
        "name": "Dandeli",
        "latitude": 15.26667,
        "longitude": 74.61667
      },
      {
        "name": "Davanagere",
        "latitude": 14.43,
        "longitude": 75.9
      },
      {
        "name": "Devanhalli",
        "latitude": 13.24655,
        "longitude": 77.71183
      },
      {
        "name": "Dharwad",
        "latitude": 15.37,
        "longitude": 75.14
      },
      {
        "name": "Dod Ballapur",
        "latitude": 13.29452,
        "longitude": 77.53777
      },
      {
        "name": "French Rocks",
        "latitude": 12.50094,
        "longitude": 76.67416
      },
      {
        "name": "Gadag",
        "latitude": 15.49835,
        "longitude": 75.65187
      },
      {
        "name": "Gadag-Betageri",
        "latitude": 15.4167,
        "longitude": 75.6167
      },
      {
        "name": "Gajendragarh",
        "latitude": 15.73628,
        "longitude": 75.96976
      },
      {
        "name": "Gangawati",
        "latitude": 15.4313,
        "longitude": 76.52933
      },
      {
        "name": "Gangolli",
        "latitude": 13.65024,
        "longitude": 74.67072
      },
      {
        "name": "Gokak",
        "latitude": 16.16901,
        "longitude": 74.82393
      },
      {
        "name": "Gokarna",
        "latitude": 14.55,
        "longitude": 74.31667
      },
      {
        "name": "Goribidnur",
        "latitude": 13.61072,
        "longitude": 77.51738
      },
      {
        "name": "Gorur",
        "latitude": 12.82297,
        "longitude": 76.06463
      },
      {
        "name": "Gubbi",
        "latitude": 13.31216,
        "longitude": 76.94102
      },
      {
        "name": "Gudibanda",
        "latitude": 13.67099,
        "longitude": 77.70414
      },
      {
        "name": "Guledagudda",
        "latitude": 16.05025,
        "longitude": 75.78997
      },
      {
        "name": "Gundlupēt",
        "latitude": 11.81004,
        "longitude": 76.69027
      },
      {
        "name": "Gurmatkal",
        "latitude": 16.86773,
        "longitude": 77.39088
      },
      {
        "name": "Hadagalli",
        "latitude": 15.02048,
        "longitude": 75.93185
      },
      {
        "name": "Haliyal",
        "latitude": 15.32864,
        "longitude": 74.75638
      },
      {
        "name": "Hampi",
        "latitude": 15.3352,
        "longitude": 76.4603
      },
      {
        "name": "Hangal",
        "latitude": 14.76465,
        "longitude": 75.1246
      },
      {
        "name": "Harihar",
        "latitude": 14.51288,
        "longitude": 75.80716
      },
      {
        "name": "Harpanahalli",
        "latitude": 14.78766,
        "longitude": 75.98863
      },
      {
        "name": "Hassan",
        "latitude": 12.95,
        "longitude": 76.08333
      },
      {
        "name": "Haveri",
        "latitude": 14.73732,
        "longitude": 75.41062
      },
      {
        "name": "Heggadadevankote",
        "latitude": 12.08809,
        "longitude": 76.32957
      },
      {
        "name": "Hirekerur",
        "latitude": 14.45506,
        "longitude": 75.3952
      },
      {
        "name": "Hiriyur",
        "latitude": 13.94455,
        "longitude": 76.61723
      },
      {
        "name": "Holalkere",
        "latitude": 14.04295,
        "longitude": 76.18496
      },
      {
        "name": "Hole Narsipur",
        "latitude": 12.78635,
        "longitude": 76.24331
      },
      {
        "name": "Homnabad",
        "latitude": 17.77074,
        "longitude": 77.12519
      },
      {
        "name": "Honavar",
        "latitude": 14.28088,
        "longitude": 74.44497
      },
      {
        "name": "Honnali",
        "latitude": 14.23976,
        "longitude": 75.64507
      },
      {
        "name": "Hosanagara",
        "latitude": 13.91387,
        "longitude": 75.06503
      },
      {
        "name": "Hosangadi",
        "latitude": 13.69756,
        "longitude": 74.95427
      },
      {
        "name": "Hosdurga",
        "latitude": 13.79631,
        "longitude": 76.28408
      },
      {
        "name": "Hoskote",
        "latitude": 13.0707,
        "longitude": 77.79814
      },
      {
        "name": "Hospet",
        "latitude": 15.26954,
        "longitude": 76.3871
      },
      {
        "name": "Hubballi",
        "latitude": 15.34776,
        "longitude": 75.13378
      },
      {
        "name": "Hukeri",
        "latitude": 16.23082,
        "longitude": 74.60244
      },
      {
        "name": "Hungund",
        "latitude": 16.06213,
        "longitude": 76.0586
      },
      {
        "name": "Hunsur",
        "latitude": 12.30359,
        "longitude": 76.29275
      },
      {
        "name": "Ilkal",
        "latitude": 15.95923,
        "longitude": 76.11351
      },
      {
        "name": "Indi",
        "latitude": 17.17735,
        "longitude": 75.9526
      },
      {
        "name": "Jagalur",
        "latitude": 14.51957,
        "longitude": 76.33915
      },
      {
        "name": "Jamkhandi",
        "latitude": 16.50461,
        "longitude": 75.29146
      },
      {
        "name": "Jevargi",
        "latitude": 17.01394,
        "longitude": 76.77317
      },
      {
        "name": "Kadur",
        "latitude": 13.55285,
        "longitude": 76.01164
      },
      {
        "name": "Kalaburgi",
        "latitude": 17.16667,
        "longitude": 77.08333
      },
      {
        "name": "Kalghatgi",
        "latitude": 15.18315,
        "longitude": 74.97099
      },
      {
        "name": "Kampli",
        "latitude": 15.40626,
        "longitude": 76.60013
      },
      {
        "name": "Kankanhalli",
        "latitude": 12.54654,
        "longitude": 77.42005
      },
      {
        "name": "Karkala",
        "latitude": 13.21428,
        "longitude": 74.99234
      },
      {
        "name": "Karwar",
        "latitude": 14.81361,
        "longitude": 74.12972
      },
      {
        "name": "Kavalur",
        "latitude": 15.28829,
        "longitude": 75.9433
      },
      {
        "name": "Kerur",
        "latitude": 16.01384,
        "longitude": 75.54631
      },
      {
        "name": "Khanapur",
        "latitude": 15.63969,
        "longitude": 74.50847
      },
      {
        "name": "Kodagu",
        "latitude": 12.41667,
        "longitude": 75.75
      },
      {
        "name": "Kodigenahalli",
        "latitude": 13.72136,
        "longitude": 77.38629
      },
      {
        "name": "Kodlipet",
        "latitude": 12.80087,
        "longitude": 75.88662
      },
      {
        "name": "Kolar",
        "latitude": 13.13,
        "longitude": 78.23
      },
      {
        "name": "Kollegal",
        "latitude": 12.15449,
        "longitude": 77.11051
      },
      {
        "name": "Konanur",
        "latitude": 12.63016,
        "longitude": 76.05037
      },
      {
        "name": "Konnur",
        "latitude": 16.20138,
        "longitude": 74.74886
      },
      {
        "name": "Koppa",
        "latitude": 13.53044,
        "longitude": 75.36329
      },
      {
        "name": "Koppal",
        "latitude": 15.5,
        "longitude": 76.2
      },
      {
        "name": "Koratagere",
        "latitude": 13.522,
        "longitude": 77.2373
      },
      {
        "name": "Kotturu",
        "latitude": 14.82442,
        "longitude": 76.22005
      },
      {
        "name": "Krishnarajpet",
        "latitude": 12.66621,
        "longitude": 76.4877
      },
      {
        "name": "Kudachi",
        "latitude": 16.62784,
        "longitude": 74.85408
      },
      {
        "name": "Kudligi",
        "latitude": 14.905,
        "longitude": 76.38527
      },
      {
        "name": "Kumsi",
        "latitude": 14.05455,
        "longitude": 75.39992
      },
      {
        "name": "Kumta",
        "latitude": 14.42853,
        "longitude": 74.4189
      },
      {
        "name": "Kundgol",
        "latitude": 15.25612,
        "longitude": 75.24735
      },
      {
        "name": "Kunigal",
        "latitude": 13.02319,
        "longitude": 77.02518
      },
      {
        "name": "Kurgunta",
        "latitude": 17.19321,
        "longitude": 77.35772
      },
      {
        "name": "Kushalnagar",
        "latitude": 12.45795,
        "longitude": 75.95904
      },
      {
        "name": "Kushtagi",
        "latitude": 15.75623,
        "longitude": 76.19112
      },
      {
        "name": "Lakshmeshwar",
        "latitude": 15.12689,
        "longitude": 75.46935
      },
      {
        "name": "Lingsugur",
        "latitude": 16.15876,
        "longitude": 76.52174
      },
      {
        "name": "Londa",
        "latitude": 15.46907,
        "longitude": 74.51906
      },
      {
        "name": "Maddagiri",
        "latitude": 13.66035,
        "longitude": 77.21239
      },
      {
        "name": "Maddur",
        "latitude": 12.58283,
        "longitude": 77.04294
      },
      {
        "name": "Madikeri",
        "latitude": 12.42602,
        "longitude": 75.7382
      },
      {
        "name": "Magadi",
        "latitude": 12.95706,
        "longitude": 77.22374
      },
      {
        "name": "Mahalingpur",
        "latitude": 16.3888,
        "longitude": 75.10873
      },
      {
        "name": "Malavalli",
        "latitude": 12.38556,
        "longitude": 77.06045
      },
      {
        "name": "Malpe",
        "latitude": 13.34962,
        "longitude": 74.70394
      },
      {
        "name": "Malur",
        "latitude": 13.00322,
        "longitude": 77.93798
      },
      {
        "name": "Mandya",
        "latitude": 12.5223,
        "longitude": 76.89746
      },
      {
        "name": "Mangaluru",
        "latitude": 12.91723,
        "longitude": 74.85603
      },
      {
        "name": "Manipal",
        "latitude": 13.35,
        "longitude": 74.78333
      },
      {
        "name": "Manvi",
        "latitude": 15.99126,
        "longitude": 77.05034
      },
      {
        "name": "Mayakonda",
        "latitude": 14.28894,
        "longitude": 76.08305
      },
      {
        "name": "Melukote",
        "latitude": 12.66258,
        "longitude": 76.64861
      },
      {
        "name": "Mudbidri",
        "latitude": 13.06653,
        "longitude": 74.99525
      },
      {
        "name": "Muddebihal",
        "latitude": 16.33782,
        "longitude": 76.13173
      },
      {
        "name": "Mudgal",
        "latitude": 16.01191,
        "longitude": 76.44203
      },
      {
        "name": "Mudgere",
        "latitude": 13.13353,
        "longitude": 75.6416
      },
      {
        "name": "Mudhol",
        "latitude": 16.33354,
        "longitude": 75.28305
      },
      {
        "name": "Mulbagal",
        "latitude": 13.16352,
        "longitude": 78.39346
      },
      {
        "name": "Mulgund",
        "latitude": 15.2807,
        "longitude": 75.52132
      },
      {
        "name": "Mulki",
        "latitude": 13.09101,
        "longitude": 74.79353
      },
      {
        "name": "Mundargi",
        "latitude": 15.20677,
        "longitude": 75.8839
      },
      {
        "name": "Mundgod",
        "latitude": 14.97144,
        "longitude": 75.03658
      },
      {
        "name": "Munirabad",
        "latitude": 15.30928,
        "longitude": 76.3383
      },
      {
        "name": "Murudeshwara",
        "latitude": 14.0943,
        "longitude": 74.4845
      },
      {
        "name": "Mysuru",
        "latitude": 12.23,
        "longitude": 76.42
      },
      {
        "name": "Nagamangala",
        "latitude": 12.81939,
        "longitude": 76.75456
      },
      {
        "name": "Nanjangud",
        "latitude": 12.11764,
        "longitude": 76.68397
      },
      {
        "name": "Narasimharajapura",
        "latitude": 13.61075,
        "longitude": 75.512
      },
      {
        "name": "Naregal",
        "latitude": 15.57316,
        "longitude": 75.80805
      },
      {
        "name": "Nargund",
        "latitude": 15.72299,
        "longitude": 75.38666
      },
      {
        "name": "Navalgund",
        "latitude": 15.55877,
        "longitude": 75.35305
      },
      {
        "name": "Nelamangala",
        "latitude": 13.09978,
        "longitude": 77.39364
      },
      {
        "name": "Nyamti",
        "latitude": 14.14869,
        "longitude": 75.57641
      },
      {
        "name": "Pangala",
        "latitude": 13.25,
        "longitude": 74.75
      },
      {
        "name": "Pavugada",
        "latitude": 14.09953,
        "longitude": 77.28018
      },
      {
        "name": "Piriyapatna",
        "latitude": 12.33497,
        "longitude": 76.10073
      },
      {
        "name": "Ponnampet",
        "latitude": 12.14473,
        "longitude": 75.94514
      },
      {
        "name": "Puttur",
        "latitude": 12.75975,
        "longitude": 75.20169
      },
      {
        "name": "Rabkavi",
        "latitude": 16.47567,
        "longitude": 75.1106
      },
      {
        "name": "Raichur",
        "latitude": 16.16,
        "longitude": 76.91
      },
      {
        "name": "Ramanagara",
        "latitude": 12.65,
        "longitude": 77.35
      },
      {
        "name": "Ranibennur",
        "latitude": 14.62239,
        "longitude": 75.62951
      },
      {
        "name": "Raybag",
        "latitude": 16.49178,
        "longitude": 74.77391
      },
      {
        "name": "Robertsonpet",
        "latitude": 12.95629,
        "longitude": 78.27539
      },
      {
        "name": "Ron",
        "latitude": 15.69935,
        "longitude": 75.73408
      },
      {
        "name": "Sadalgi",
        "latitude": 16.5587,
        "longitude": 74.53211
      },
      {
        "name": "Sagar",
        "latitude": 14.16498,
        "longitude": 75.02901
      },
      {
        "name": "Sakleshpur",
        "latitude": 12.94119,
        "longitude": 75.78467
      },
      {
        "name": "Sandur",
        "latitude": 15.08613,
        "longitude": 76.54692
      },
      {
        "name": "Sanivarsante",
        "latitude": 12.72824,
        "longitude": 75.88669
      },
      {
        "name": "Sankeshwar",
        "latitude": 16.25649,
        "longitude": 74.48195
      },
      {
        "name": "Sargur",
        "latitude": 11.99971,
        "longitude": 76.39611
      },
      {
        "name": "Saundatti",
        "latitude": 15.76615,
        "longitude": 75.11778
      },
      {
        "name": "Savanur",
        "latitude": 14.97335,
        "longitude": 75.33724
      },
      {
        "name": "Seram",
        "latitude": 17.17859,
        "longitude": 77.28998
      },
      {
        "name": "Shahabad",
        "latitude": 17.1307,
        "longitude": 76.94361
      },
      {
        "name": "Shahpur",
        "latitude": 16.69605,
        "longitude": 76.8422
      },
      {
        "name": "Shiggaon",
        "latitude": 14.99053,
        "longitude": 75.22499
      },
      {
        "name": "Shikarpur",
        "latitude": 14.2698,
        "longitude": 75.35643
      },
      {
        "name": "Shimoga",
        "latitude": 14.05,
        "longitude": 75.16
      },
      {
        "name": "Shirhatti",
        "latitude": 15.23352,
        "longitude": 75.57996
      },
      {
        "name": "Shorapur",
        "latitude": 16.521,
        "longitude": 76.75738
      },
      {
        "name": "Shrirangapattana",
        "latitude": 12.42264,
        "longitude": 76.68439
      },
      {
        "name": "Siddapur",
        "latitude": 14.34322,
        "longitude": 74.894
      },
      {
        "name": "Sidlaghatta",
        "latitude": 13.38896,
        "longitude": 77.86444
      },
      {
        "name": "Sindgi",
        "latitude": 16.91883,
        "longitude": 76.23368
      },
      {
        "name": "Sindhnur",
        "latitude": 15.76983,
        "longitude": 76.75581
      },
      {
        "name": "Sira",
        "latitude": 13.74155,
        "longitude": 76.9043
      },
      {
        "name": "Sirsi",
        "latitude": 14.62072,
        "longitude": 74.83554
      },
      {
        "name": "Siruguppa",
        "latitude": 15.63,
        "longitude": 76.89217
      },
      {
        "name": "Someshwar",
        "latitude": 13.49112,
        "longitude": 75.06646
      },
      {
        "name": "Somvarpet",
        "latitude": 12.59698,
        "longitude": 75.84957
      },
      {
        "name": "Sorab",
        "latitude": 14.38144,
        "longitude": 75.09183
      },
      {
        "name": "Sravana Belgola",
        "latitude": 12.85737,
        "longitude": 76.48886
      },
      {
        "name": "Sringeri",
        "latitude": 13.41698,
        "longitude": 75.25271
      },
      {
        "name": "Srinivaspur",
        "latitude": 13.33914,
        "longitude": 78.21175
      },
      {
        "name": "Sulya",
        "latitude": 12.561,
        "longitude": 75.38741
      },
      {
        "name": "Suntikoppa",
        "latitude": 12.45594,
        "longitude": 75.8297
      },
      {
        "name": "Talikota",
        "latitude": 16.47311,
        "longitude": 76.31085
      },
      {
        "name": "Tarikere",
        "latitude": 13.70954,
        "longitude": 75.81382
      },
      {
        "name": "Tekkalakote",
        "latitude": 15.53444,
        "longitude": 76.87703
      },
      {
        "name": "Terdal",
        "latitude": 16.49379,
        "longitude": 75.04667
      },
      {
        "name": "Tiptur",
        "latitude": 13.2563,
        "longitude": 76.47768
      },
      {
        "name": "Tirthahalli",
        "latitude": 13.68835,
        "longitude": 75.24548
      },
      {
        "name": "Tirumakudal Narsipur",
        "latitude": 12.21207,
        "longitude": 76.9018
      },
      {
        "name": "Tumakuru",
        "latitude": 13.5,
        "longitude": 77
      },
      {
        "name": "Turuvekere",
        "latitude": 13.16374,
        "longitude": 76.66641
      },
      {
        "name": "Udupi",
        "latitude": 13.5,
        "longitude": 74.87
      },
      {
        "name": "Ullal",
        "latitude": 12.80569,
        "longitude": 74.86058
      },
      {
        "name": "Uttar Kannada",
        "latitude": 14.88333,
        "longitude": 74.58333
      },
      {
        "name": "Vadigenhalli",
        "latitude": 13.29724,
        "longitude": 77.80184
      },
      {
        "name": "Vijayapura",
        "latitude": 16.82442,
        "longitude": 75.71537
      },
      {
        "name": "Virarajendrapet",
        "latitude": 12.19644,
        "longitude": 75.80512
      },
      {
        "name": "Wadi",
        "latitude": 17.05183,
        "longitude": 76.99048
      },
      {
        "name": "Yadgir",
        "latitude": 16.73,
        "longitude": 76.94
      },
      {
        "name": "Yelahanka",
        "latitude": 13.10073,
        "longitude": 77.59632
      },
      {
        "name": "Yelandur",
        "latitude": 12.04629,
        "longitude": 77.03034
      },
      {
        "name": "Yelbarga",
        "latitude": 15.61545,
        "longitude": 76.01184
      },
      {
        "name": "Yellapur",
        "latitude": 14.9637,
        "longitude": 74.70929
      }
    ]
  },
  {
    "name": "Kerala",
    "kind": "state",
    "cities": [
      {
        "name": "Adur",
        "latitude": 9.15595,
        "longitude": 76.73192
      },
      {
        "name": "Alappuzha",
        "latitude": 9.49004,
        "longitude": 76.3264
      },
      {
        "name": "Aluva",
        "latitude": 10.10764,
        "longitude": 76.35158
      },
      {
        "name": "Alwaye",
        "latitude": 10.10649,
        "longitude": 76.35484
      },
      {
        "name": "Angamali",
        "latitude": 10.19055,
        "longitude": 76.38789
      },
      {
        "name": "Aroor",
        "latitude": 9.8694,
        "longitude": 76.30498
      },
      {
        "name": "Arukutti",
        "latitude": 9.86667,
        "longitude": 76.35
      },
      {
        "name": "Attingal",
        "latitude": 8.69609,
        "longitude": 76.81507
      },
      {
        "name": "Avanoor",
        "latitude": 10.60826,
        "longitude": 76.1762
      },
      {
        "name": "Azhikkal",
        "latitude": 11.91524,
        "longitude": 75.34761
      },
      {
        "name": "Badagara",
        "latitude": 11.59776,
        "longitude": 75.58142
      },
      {
        "name": "Beypore",
        "latitude": 11.17151,
        "longitude": 75.80611
      },
      {
        "name": "Changanacheri",
        "latitude": 9.44203,
        "longitude": 76.53604
      },
      {
        "name": "Chēlakara",
        "latitude": 10.69289,
        "longitude": 76.34387
      },
      {
        "name": "Chengannur",
        "latitude": 9.31575,
        "longitude": 76.61513
      },
      {
        "name": "Cherpulassery",
        "latitude": 10.87655,
        "longitude": 76.30932
      },
      {
        "name": "Cherthala",
        "latitude": 9.68444,
        "longitude": 76.33558
      },
      {
        "name": "Chetwayi",
        "latitude": 10.52885,
        "longitude": 76.04793
      },
      {
        "name": "Chittur",
        "latitude": 10.69967,
        "longitude": 76.7471
      },
      {
        "name": "Cochin",
        "latitude": 9.93988,
        "longitude": 76.26022
      },
      {
        "name": "Dharmadam",
        "latitude": 11.77538,
        "longitude": 75.46459
      },
      {
        "name": "Edakkulam",
        "latitude": 10.6102,
        "longitude": 76.18352
      },
      {
        "name": "Elur",
        "latitude": 10.06667,
        "longitude": 76.28333
      },
      {
        "name": "Erattupetta",
        "latitude": 9.68747,
        "longitude": 76.77891
      },
      {
        "name": "Ernakulam",
        "latitude": 10,
        "longitude": 76.5
      },
      {
        "name": "Ferokh",
        "latitude": 11.17989,
        "longitude": 75.84141
      },
      {
        "name": "Guruvayur",
        "latitude": 10.5943,
        "longitude": 76.0411
      },
      {
        "name": "Idukki",
        "latitude": 10,
        "longitude": 77
      },
      {
        "name": "Iringal",
        "latitude": 11.55929,
        "longitude": 75.61663
      },
      {
        "name": "Irinjalakuda",
        "latitude": 10.34238,
        "longitude": 76.21124
      },
      {
        "name": "Kadakkavoor",
        "latitude": 8.67921,
        "longitude": 76.76714
      },
      {
        "name": "Kalamassery",
        "latitude": 10.0614,
        "longitude": 76.32631
      },
      {
        "name": "Kalavoor",
        "latitude": 9.57046,
        "longitude": 76.32756
      },
      {
        "name": "Kalpatta",
        "latitude": 11.60871,
        "longitude": 76.08343
      },
      {
        "name": "Kannangad",
        "latitude": 12.30814,
        "longitude": 75.10632
      },
      {
        "name": "Kannavam",
        "latitude": 11.8445,
        "longitude": 75.66266
      },
      {
        "name": "Kannur",
        "latitude": 12.16667,
        "longitude": 75.33333
      },
      {
        "name": "Kasaragod",
        "latitude": 12.49838,
        "longitude": 74.98959
      },
      {
        "name": "Kasaragod District",
        "latitude": 12.49246,
        "longitude": 74.99062
      },
      {
        "name": "Kattanam",
        "latitude": 9.17614,
        "longitude": 76.56325
      },
      {
        "name": "Kayankulam",
        "latitude": 9.18173,
        "longitude": 76.50093
      },
      {
        "name": "Kizhake Chalakudi",
        "latitude": 10.30067,
        "longitude": 76.33763
      },
      {
        "name": "Kodungallur",
        "latitude": 10.23263,
        "longitude": 76.19513
      },
      {
        "name": "Kollam",
        "latitude": 8.88113,
        "longitude": 76.58469
      },
      {
        "name": "Kotamangalam",
        "latitude": 10.06435,
        "longitude": 76.62843
      },
      {
        "name": "Kottayam",
        "latitude": 9.66667,
        "longitude": 76.66667
      },
      {
        "name": "Kovalam",
        "latitude": 8.36667,
        "longitude": 76.99667
      },
      {
        "name": "Kozhikode",
        "latitude": 11.5,
        "longitude": 76
      },
      {
        "name": "Kumbalam",
        "latitude": 9.9063,
        "longitude": 76.31127
      },
      {
        "name": "Kunnamangalam",
        "latitude": 11.30459,
        "longitude": 75.87772
      },
      {
        "name": "Kunnamkulam",
        "latitude": 10.64667,
        "longitude": 76.06695
      },
      {
        "name": "Kunnumma",
        "latitude": 9.35672,
        "longitude": 76.41343
      },
      {
        "name": "Kutiatodu",
        "latitude": 9.8,
        "longitude": 76.33333
      },
      {
        "name": "Kuttampuzha",
        "latitude": 10.15033,
        "longitude": 76.73544
      },
      {
        "name": "Lalam",
        "latitude": 9.71667,
        "longitude": 76.7
      },
      {
        "name": "Mahē",
        "latitude": 11.70172,
        "longitude": 75.53474
      },
      {
        "name": "Malappuram",
        "latitude": 11,
        "longitude": 76.16667
      },
      {
        "name": "Manjeri",
        "latitude": 11.12018,
        "longitude": 76.11996
      },
      {
        "name": "Manjēshvar",
        "latitude": 12.71287,
        "longitude": 74.88857
      },
      {
        "name": "Mannarakkat",
        "latitude": 10.99223,
        "longitude": 76.46418
      },
      {
        "name": "Marayur",
        "latitude": 10.27641,
        "longitude": 77.16205
      },
      {
        "name": "Mattanur",
        "latitude": 11.93018,
        "longitude": 75.57152
      },
      {
        "name": "Mavelikara",
        "latitude": 9.25929,
        "longitude": 76.55642
      },
      {
        "name": "Mavoor",
        "latitude": 11.26667,
        "longitude": 75.91667
      },
      {
        "name": "Muluppilagadu",
        "latitude": 11.79788,
        "longitude": 75.45111
      },
      {
        "name": "Munnar",
        "latitude": 10.08818,
        "longitude": 77.06239
      },
      {
        "name": "Muvattupula",
        "latitude": 9.98493,
        "longitude": 76.57728
      },
      {
        "name": "Muvattupuzha",
        "latitude": 9.97985,
        "longitude": 76.57381
      },
      {
        "name": "Nadapuram",
        "latitude": 11.68465,
        "longitude": 75.65493
      },
      {
        "name": "Naduvannur",
        "latitude": 11.48772,
        "longitude": 75.77511
      },
      {
        "name": "Nedumangad",
        "latitude": 8.60267,
        "longitude": 77.00139
      },
      {
        "name": "Neyyattinkara",
        "latitude": 8.39854,
        "longitude": 77.08586
      },
      {
        "name": "Nilēshwar",
        "latitude": 12.25953,
        "longitude": 75.1352
      },
      {
        "name": "Ottappalam",
        "latitude": 10.7735,
        "longitude": 76.37758
      },
      {
        "name": "Palackattumala",
        "latitude": 9.74356,
        "longitude": 76.6294
      },
      {
        "name": "Palakkad district",
        "latitude": 10.775,
        "longitude": 76.651
      },
      {
        "name": "Palghat",
        "latitude": 10.77319,
        "longitude": 76.65366
      },
      {
        "name": "Panamaram",
        "latitude": 11.74014,
        "longitude": 76.07369
      },
      {
        "name": "Pappinisshēri",
        "latitude": 11.95655,
        "longitude": 75.34034
      },
      {
        "name": "Paravur Tekkumbhagam",
        "latitude": 8.7947,
        "longitude": 76.66798
      },
      {
        "name": "Pariyapuram",
        "latitude": 11.01667,
        "longitude": 75.86667
      },
      {
        "name": "Pathanamthitta",
        "latitude": 9.26667,
        "longitude": 76.78333
      },
      {
        "name": "Pattanamtitta",
        "latitude": 9.28068,
        "longitude": 76.86967
      },
      {
        "name": "Payyannur",
        "latitude": 12.0935,
        "longitude": 75.20249
      },
      {
        "name": "Perumbavoor",
        "latitude": 10.10695,
        "longitude": 76.47366
      },
      {
        "name": "Perumpavur",
        "latitude": 10.11544,
        "longitude": 76.47611
      },
      {
        "name": "Perya",
        "latitude": 11.83334,
        "longitude": 75.85408
      },
      {
        "name": "Piravam",
        "latitude": 9.86667,
        "longitude": 76.5
      },
      {
        "name": "Ponmana",
        "latitude": 9.00798,
        "longitude": 76.52023
      },
      {
        "name": "Ponnani",
        "latitude": 10.76695,
        "longitude": 75.92523
      },
      {
        "name": "Punalur",
        "latitude": 9.01956,
        "longitude": 76.92261
      },
      {
        "name": "Ramamangalam",
        "latitude": 9.93333,
        "longitude": 76.5
      },
      {
        "name": "Shertallai",
        "latitude": 9.68581,
        "longitude": 76.33996
      },
      {
        "name": "Shōranur",
        "latitude": 10.76181,
        "longitude": 76.27078
      },
      {
        "name": "Talipparamba",
        "latitude": 12.04161,
        "longitude": 75.35927
      },
      {
        "name": "Tellicherry",
        "latitude": 11.74811,
        "longitude": 75.4929
      },
      {
        "name": "Thanniyam",
        "latitude": 10.41667,
        "longitude": 76.13333
      },
      {
        "name": "Thiruvananthapuram",
        "latitude": 8.60399,
        "longitude": 76.98574
      },
      {
        "name": "Thrissur",
        "latitude": 10.51667,
        "longitude": 76.21667
      },
      {
        "name": "Thrissur District",
        "latitude": 10.52022,
        "longitude": 76.2204
      },
      {
        "name": "Tirur",
        "latitude": 10.91368,
        "longitude": 75.92118
      },
      {
        "name": "Tiruvalla",
        "latitude": 9.3816,
        "longitude": 76.57489
      },
      {
        "name": "Vaikam",
        "latitude": 9.74858,
        "longitude": 76.39637
      },
      {
        "name": "Varkala",
        "latitude": 8.7333,
        "longitude": 76.7167
      },
      {
        "name": "Vayalar",
        "latitude": 9.71158,
        "longitude": 76.33888
      },
      {
        "name": "Vettur",
        "latitude": 8.71742,
        "longitude": 76.72582
      },
      {
        "name": "Wayanad",
        "latitude": 11.605,
        "longitude": 76.083
      }
    ]
  },
  {
    "name": "Ladakh",
    "kind": "union_territory",
    "cities": [
      {
        "name": "Kargil",
        "latitude": 34.55765,
        "longitude": 76.12622
      },
      {
        "name": "Leh",
        "latitude": 34.16504,
        "longitude": 77.58402
      }
    ]
  },
  {
    "name": "Lakshadweep",
    "kind": "union_territory",
    "cities": [
      {
        "name": "Kavaratti",
        "latitude": 10.56688,
        "longitude": 72.64203
      }
    ]
  },
  {
    "name": "Madhya Pradesh",
    "kind": "state",
    "cities": [
      {
        "name": "Agar",
        "latitude": 23.71177,
        "longitude": 76.01571
      },
      {
        "name": "Ajaigarh",
        "latitude": 24.89879,
        "longitude": 80.25921
      },
      {
        "name": "Akodia",
        "latitude": 23.38027,
        "longitude": 76.59875
      },
      {
        "name": "Alampur",
        "latitude": 26.02514,
        "longitude": 78.79697
      },
      {
        "name": "Alirajpur",
        "latitude": 22.31384,
        "longitude": 74.36452
      },
      {
        "name": "Alot",
        "latitude": 23.76336,
        "longitude": 75.55662
      },
      {
        "name": "Amanganj",
        "latitude": 24.42664,
        "longitude": 80.03579
      },
      {
        "name": "Amarkantak",
        "latitude": 22.67486,
        "longitude": 81.75908
      },
      {
        "name": "Amarpatan",
        "latitude": 24.31371,
        "longitude": 80.97703
      },
      {
        "name": "Amarwara",
        "latitude": 22.2978,
        "longitude": 79.16943
      },
      {
        "name": "Ambah",
        "latitude": 26.70423,
        "longitude": 78.22678
      },
      {
        "name": "Amla",
        "latitude": 21.92485,
        "longitude": 78.12786
      },
      {
        "name": "Anjad",
        "latitude": 22.04171,
        "longitude": 75.05519
      },
      {
        "name": "Antri",
        "latitude": 26.05804,
        "longitude": 78.21027
      },
      {
        "name": "Anuppur",
        "latitude": 23.05674,
        "longitude": 81.68399
      },
      {
        "name": "Aron",
        "latitude": 24.38109,
        "longitude": 77.41739
      },
      {
        "name": "Ashoknagar",
        "latitude": 24.58,
        "longitude": 77.73
      },
      {
        "name": "Ashta",
        "latitude": 23.01754,
        "longitude": 76.72208
      },
      {
        "name": "Babai",
        "latitude": 22.70256,
        "longitude": 77.93494
      },
      {
        "name": "Badarwas",
        "latitude": 24.97516,
        "longitude": 77.5649
      },
      {
        "name": "Badnawar",
        "latitude": 23.02181,
        "longitude": 75.23268
      },
      {
        "name": "Bag",
        "latitude": 22.35905,
        "longitude": 74.79052
      },
      {
        "name": "Bagli",
        "latitude": 22.64124,
        "longitude": 76.34877
      },
      {
        "name": "Baihar",
        "latitude": 22.10133,
        "longitude": 80.54967
      },
      {
        "name": "Baikunthpur",
        "latitude": 24.72768,
        "longitude": 81.40975
      },
      {
        "name": "Bakshwaho",
        "latitude": 24.25106,
        "longitude": 79.28618
      },
      {
        "name": "Balaghat",
        "latitude": 21.96667,
        "longitude": 80.33333
      },
      {
        "name": "Baldeogarh",
        "latitude": 24.75619,
        "longitude": 79.06715
      },
      {
        "name": "Bamna",
        "latitude": 23.09454,
        "longitude": 74.76164
      },
      {
        "name": "Bamor Kalan",
        "latitude": 24.89298,
        "longitude": 78.15105
      },
      {
        "name": "Bamora",
        "latitude": 24.05539,
        "longitude": 78.08925
      },
      {
        "name": "Banda",
        "latitude": 24.04488,
        "longitude": 78.96094
      },
      {
        "name": "Barela",
        "latitude": 23.09678,
        "longitude": 80.05084
      },
      {
        "name": "Barghat",
        "latitude": 22.03065,
        "longitude": 79.7328
      },
      {
        "name": "Bargi",
        "latitude": 22.99138,
        "longitude": 79.8755
      },
      {
        "name": "Barhi",
        "latitude": 23.90326,
        "longitude": 80.81516
      },
      {
        "name": "Barwani",
        "latitude": 22.02485,
        "longitude": 74.91805
      },
      {
        "name": "Basoda",
        "latitude": 23.85153,
        "longitude": 77.93652
      },
      {
        "name": "Begamganj",
        "latitude": 23.59917,
        "longitude": 78.34064
      },
      {
        "name": "Beohari",
        "latitude": 24.02423,
        "longitude": 81.37831
      },
      {
        "name": "Berasia",
        "latitude": 23.63134,
        "longitude": 77.43351
      },
      {
        "name": "Betma",
        "latitude": 22.68653,
        "longitude": 75.61456
      },
      {
        "name": "Betul",
        "latitude": 21.83333,
        "longitude": 77.83333
      },
      {
        "name": "Betul Bazar",
        "latitude": 21.85572,
        "longitude": 77.92913
      },
      {
        "name": "Bhabhra",
        "latitude": 22.53048,
        "longitude": 74.32846
      },
      {
        "name": "Bhainsdehi",
        "latitude": 21.64491,
        "longitude": 77.63023
      },
      {
        "name": "Bhander",
        "latitude": 25.73581,
        "longitude": 78.74555
      },
      {
        "name": "Bhanpura",
        "latitude": 24.513,
        "longitude": 75.7469
      },
      {
        "name": "Bhawaniganj",
        "latitude": 24.41582,
        "longitude": 75.83552
      },
      {
        "name": "Bhikangaon",
        "latitude": 21.86764,
        "longitude": 75.96391
      },
      {
        "name": "Bhind",
        "latitude": 26.5,
        "longitude": 78.75
      },
      {
        "name": "Bhitarwar",
        "latitude": 25.79216,
        "longitude": 78.11085
      },
      {
        "name": "Bhopal",
        "latitude": 23.25469,
        "longitude": 77.40289
      },
      {
        "name": "Biaora",
        "latitude": 23.9205,
        "longitude": 76.91074
      },
      {
        "name": "Bijawar",
        "latitude": 24.62351,
        "longitude": 79.48994
      },
      {
        "name": "Bijrauni",
        "latitude": 24.93296,
        "longitude": 77.64352
      },
      {
        "name": "Bodri",
        "latitude": 23.16524,
        "longitude": 81.43262
      },
      {
        "name": "Burhanpur",
        "latitude": 21.31,
        "longitude": 76.23
      },
      {
        "name": "Burhar",
        "latitude": 23.21494,
        "longitude": 81.53204
      },
      {
        "name": "Chanderi",
        "latitude": 24.71312,
        "longitude": 78.13809
      },
      {
        "name": "Chandia",
        "latitude": 23.65647,
        "longitude": 80.70911
      },
      {
        "name": "Chandla",
        "latitude": 25.07148,
        "longitude": 80.19294
      },
      {
        "name": "Chhatarpur",
        "latitude": 24.75,
        "longitude": 79.75
      },
      {
        "name": "Chhindwara",
        "latitude": 22.05697,
        "longitude": 78.93958
      },
      {
        "name": "Chichli",
        "latitude": 22.83363,
        "longitude": 78.82611
      },
      {
        "name": "Chorhat",
        "latitude": 24.42743,
        "longitude": 81.66948
      },
      {
        "name": "Daboh",
        "latitude": 26.00239,
        "longitude": 78.87658
      },
      {
        "name": "Dabra",
        "latitude": 25.88572,
        "longitude": 78.33221
      },
      {
        "name": "Damoh",
        "latitude": 23.75,
        "longitude": 79.58333
      },
      {
        "name": "Datia",
        "latitude": 25.75,
        "longitude": 78.5
      },
      {
        "name": "Deori Khas",
        "latitude": 23.39017,
        "longitude": 79.0163
      },
      {
        "name": "Depalpur",
        "latitude": 22.85095,
        "longitude": 75.54224
      },
      {
        "name": "Dewas",
        "latitude": 23,
        "longitude": 76.16667
      },
      {
        "name": "Dhamnod",
        "latitude": 22.20928,
        "longitude": 75.47057
      },
      {
        "name": "Dhana",
        "latitude": 23.74697,
        "longitude": 78.86234
      },
      {
        "name": "Dhar",
        "latitude": 22.59373,
        "longitude": 75.29774
      },
      {
        "name": "Dharampuri",
        "latitude": 22.14951,
        "longitude": 75.34439
      },
      {
        "name": "Dindori",
        "latitude": 22.8,
        "longitude": 81.1
      },
      {
        "name": "Etawa",
        "latitude": 24.18351,
        "longitude": 78.20289
      },
      {
        "name": "Gadarwara",
        "latitude": 22.9235,
        "longitude": 78.7849
      },
      {
        "name": "Garha Brahman",
        "latitude": 23.86873,
        "longitude": 77.35731
      },
      {
        "name": "Garhakota",
        "latitude": 23.7791,
        "longitude": 79.14321
      },
      {
        "name": "Gautampura",
        "latitude": 22.98664,
        "longitude": 75.51921
      },
      {
        "name": "Ghansor",
        "latitude": 22.65976,
        "longitude": 79.95013
      },
      {
        "name": "Gogapur",
        "latitude": 23.55746,
        "longitude": 75.51665
      },
      {
        "name": "Gohadi",
        "latitude": 26.43278,
        "longitude": 78.44205
      },
      {
        "name": "Govindgarh",
        "latitude": 24.37845,
        "longitude": 81.29644
      },
      {
        "name": "Guna",
        "latitude": 24.55464,
        "longitude": 77.20082
      },
      {
        "name": "Gurh",
        "latitude": 24.50265,
        "longitude": 81.50037
      },
      {
        "name": "Gwalior",
        "latitude": 26.22983,
        "longitude": 78.17337
      },
      {
        "name": "Harda",
        "latitude": 22.23406,
        "longitude": 76.96431
      },
      {
        "name": "Harda Khas",
        "latitude": 22.34414,
        "longitude": 77.09536
      },
      {
        "name": "Harpalpur",
        "latitude": 25.28773,
        "longitude": 79.33279
      },
      {
        "name": "Harrai",
        "latitude": 22.61428,
        "longitude": 79.22207
      },
      {
        "name": "Harsud",
        "latitude": 22.09947,
        "longitude": 76.73423
      },
      {
        "name": "Hatod",
        "latitude": 22.79378,
        "longitude": 75.73928
      },
      {
        "name": "Hatta",
        "latitude": 24.13406,
        "longitude": 79.60119
      },
      {
        "name": "Hindoria",
        "latitude": 23.90345,
        "longitude": 79.56861
      },
      {
        "name": "Hoshangabad",
        "latitude": 22.58827,
        "longitude": 77.98887
      },
      {
        "name": "Iawar",
        "latitude": 23.00943,
        "longitude": 76.5007
      },
      {
        "name": "Ichhawar",
        "latitude": 23.02816,
        "longitude": 77.01729
      },
      {
        "name": "Iklehra",
        "latitude": 23.14667,
        "longitude": 76.39044
      },
      {
        "name": "Indore",
        "latitude": 22.66667,
        "longitude": 75.75
      },
      {
        "name": "Isagarh",
        "latitude": 24.83906,
        "longitude": 77.88274
      },
      {
        "name": "Itarsi",
        "latitude": 22.61477,
        "longitude": 77.76222
      },
      {
        "name": "Jabalpur",
        "latitude": 23.16,
        "longitude": 79.95
      },
      {
        "name": "Jaisinghnagar",
        "latitude": 23.68582,
        "longitude": 81.39085
      },
      {
        "name": "Jaithari",
        "latitude": 23.20856,
        "longitude": 78.61487
      },
      {
        "name": "Jamai",
        "latitude": 22.19644,
        "longitude": 78.59191
      },
      {
        "name": "Jaora",
        "latitude": 23.63783,
        "longitude": 75.12711
      },
      {
        "name": "Jatara",
        "latitude": 25.00964,
        "longitude": 79.04869
      },
      {
        "name": "Jawad",
        "latitude": 24.59916,
        "longitude": 74.86261
      },
      {
        "name": "Jhabua",
        "latitude": 22.76772,
        "longitude": 74.59087
      },
      {
        "name": "Jiran",
        "latitude": 24.30871,
        "longitude": 74.89087
      },
      {
        "name": "Jobat",
        "latitude": 22.41599,
        "longitude": 74.56828
      },
      {
        "name": "Kailaras",
        "latitude": 26.30498,
        "longitude": 77.616
      },
      {
        "name": "Kaimori",
        "latitude": 23.38465,
        "longitude": 79.7442
      },
      {
        "name": "Kannod",
        "latitude": 22.66764,
        "longitude": 76.74286
      },
      {
        "name": "Kareli",
        "latitude": 22.91533,
        "longitude": 79.06378
      },
      {
        "name": "Karera",
        "latitude": 25.45815,
        "longitude": 78.13583
      },
      {
        "name": "Karrapur",
        "latitude": 23.94891,
        "longitude": 78.86584
      },
      {
        "name": "Kasrawad",
        "latitude": 22.12745,
        "longitude": 75.61101
      },
      {
        "name": "Katangi",
        "latitude": 21.77369,
        "longitude": 79.80513
      },
      {
        "name": "Katni",
        "latitude": 23.83555,
        "longitude": 80.39417
      },
      {
        "name": "Khachrod",
        "latitude": 23.42322,
        "longitude": 75.28185
      },
      {
        "name": "Khailar",
        "latitude": 25.34127,
        "longitude": 78.53133
      },
      {
        "name": "Khajuraho Group of Monuments",
        "latitude": 24.84809,
        "longitude": 79.93351
      },
      {
        "name": "Khamaria",
        "latitude": 23.22558,
        "longitude": 79.88007
      },
      {
        "name": "Khandwa",
        "latitude": 21.82427,
        "longitude": 76.35086
      },
      {
        "name": "Khandwa district",
        "latitude": 21.75,
        "longitude": 76.58333
      },
      {
        "name": "Khargapur",
        "latitude": 24.823,
        "longitude": 79.144
      },
      {
        "name": "Khargone",
        "latitude": 21.82306,
        "longitude": 75.61028
      },
      {
        "name": "Khategaon",
        "latitude": 22.59573,
        "longitude": 76.9133
      },
      {
        "name": "Khilchipur",
        "latitude": 24.03943,
        "longitude": 76.578
      },
      {
        "name": "Khirkiyan",
        "latitude": 22.16732,
        "longitude": 76.86137
      },
      {
        "name": "Khujner",
        "latitude": 23.78597,
        "longitude": 76.61773
      },
      {
        "name": "Khurai",
        "latitude": 24.04372,
        "longitude": 78.33014
      },
      {
        "name": "Kolaras",
        "latitude": 25.21928,
        "longitude": 77.61167
      },
      {
        "name": "Korwai",
        "latitude": 24.11774,
        "longitude": 78.04007
      },
      {
        "name": "Kotar",
        "latitude": 24.69802,
        "longitude": 80.98073
      },
      {
        "name": "Kothi",
        "latitude": 24.7526,
        "longitude": 80.77751
      },
      {
        "name": "Kotma",
        "latitude": 23.20383,
        "longitude": 81.97904
      },
      {
        "name": "Kotwa",
        "latitude": 25.0308,
        "longitude": 81.31908
      },
      {
        "name": "Kukshi",
        "latitude": 22.20677,
        "longitude": 74.75788
      },
      {
        "name": "Kumbhraj",
        "latitude": 24.37338,
        "longitude": 77.04841
      },
      {
        "name": "Lahar",
        "latitude": 26.19401,
        "longitude": 78.94137
      },
      {
        "name": "Lakhnadon",
        "latitude": 22.60049,
        "longitude": 79.60094
      },
      {
        "name": "Leteri",
        "latitude": 24.05979,
        "longitude": 77.40858
      },
      {
        "name": "Lodhikheda",
        "latitude": 21.58235,
        "longitude": 78.85911
      },
      {
        "name": "Machalpur",
        "latitude": 24.12767,
        "longitude": 76.31672
      },
      {
        "name": "Madhogarh",
        "latitude": 24.56401,
        "longitude": 80.91126
      },
      {
        "name": "Maheshwar",
        "latitude": 22.17592,
        "longitude": 75.58715
      },
      {
        "name": "Mahgawan",
        "latitude": 26.49471,
        "longitude": 78.61593
      },
      {
        "name": "Maihar",
        "latitude": 24.26594,
        "longitude": 80.76063
      },
      {
        "name": "Majholi",
        "latitude": 23.50114,
        "longitude": 79.92396
      },
      {
        "name": "Maksi",
        "latitude": 23.25999,
        "longitude": 76.14567
      },
      {
        "name": "Malhargarh",
        "latitude": 24.28286,
        "longitude": 74.99024
      },
      {
        "name": "Manasa",
        "latitude": 24.47764,
        "longitude": 75.14095
      },
      {
        "name": "Manawar",
        "latitude": 22.23566,
        "longitude": 75.08917
      },
      {
        "name": "Mandideep",
        "latitude": 23.08166,
        "longitude": 77.53328
      },
      {
        "name": "Mandla",
        "latitude": 22.64041,
        "longitude": 80.51344
      },
      {
        "name": "Mandleshwar",
        "latitude": 22.17598,
        "longitude": 75.65995
      },
      {
        "name": "Mandsaur",
        "latitude": 24.33333,
        "longitude": 75.25
      },
      {
        "name": "Mangawan",
        "latitude": 24.66754,
        "longitude": 81.54644
      },
      {
        "name": "Manpur",
        "latitude": 22.43151,
        "longitude": 75.62107
      },
      {
        "name": "Mau",
        "latitude": 26.26584,
        "longitude": 78.67108
      },
      {
        "name": "Mauganj",
        "latitude": 24.66721,
        "longitude": 81.87339
      },
      {
        "name": "Mihona",
        "latitude": 26.28373,
        "longitude": 78.98048
      },
      {
        "name": "Mohgaon",
        "latitude": 21.63941,
        "longitude": 78.73638
      },
      {
        "name": "Morar",
        "latitude": 26.2264,
        "longitude": 78.22482
      },
      {
        "name": "Morena",
        "latitude": 26.16667,
        "longitude": 77.5
      },
      {
        "name": "Multai",
        "latitude": 21.77463,
        "longitude": 78.25756
      },
      {
        "name": "Mundi",
        "latitude": 22.06693,
        "longitude": 76.49326
      },
      {
        "name": "Mungaoli",
        "latitude": 24.40837,
        "longitude": 78.09588
      },
      {
        "name": "Murwara",
        "latitude": 23.83776,
        "longitude": 80.39405
      },
      {
        "name": "Nagda",
        "latitude": 23.45834,
        "longitude": 75.41759
      },
      {
        "name": "Nagod",
        "latitude": 24.56924,
        "longitude": 80.58809
      },
      {
        "name": "Naigarhi",
        "latitude": 24.78686,
        "longitude": 81.77868
      },
      {
        "name": "Nainpur",
        "latitude": 22.42996,
        "longitude": 80.10561
      },
      {
        "name": "Namli",
        "latitude": 23.46115,
        "longitude": 75.06036
      },
      {
        "name": "Naraini",
        "latitude": 25.19033,
        "longitude": 80.475
      },
      {
        "name": "Narayangarh",
        "latitude": 24.27083,
        "longitude": 75.05007
      },
      {
        "name": "Narsimhapur",
        "latitude": 22.91667,
        "longitude": 79.16667
      },
      {
        "name": "Narsinghgarh",
        "latitude": 23.70758,
        "longitude": 77.09319
      },
      {
        "name": "Narwar",
        "latitude": 25.6439,
        "longitude": 77.9129
      },
      {
        "name": "Nasrullahganj",
        "latitude": 22.6837,
        "longitude": 77.27069
      },
      {
        "name": "Neemuch",
        "latitude": 24.47,
        "longitude": 74.87
      },
      {
        "name": "Nepanagar",
        "latitude": 21.4538,
        "longitude": 76.39335
      },
      {
        "name": "Orchha",
        "latitude": 25.35192,
        "longitude": 78.64033
      },
      {
        "name": "Pachmarhi",
        "latitude": 22.46791,
        "longitude": 78.43312
      },
      {
        "name": "Palera",
        "latitude": 25.02013,
        "longitude": 79.22818
      },
      {
        "name": "Pali",
        "latitude": 23.36453,
        "longitude": 81.04374
      },
      {
        "name": "Panagar",
        "latitude": 23.28539,
        "longitude": 79.99509
      },
      {
        "name": "Panara",
        "latitude": 22.20568,
        "longitude": 78.55093
      },
      {
        "name": "Pandhana",
        "latitude": 21.69816,
        "longitude": 76.22487
      },
      {
        "name": "Pandhurna",
        "latitude": 21.59556,
        "longitude": 78.52628
      },
      {
        "name": "Panna",
        "latitude": 24.5,
        "longitude": 80.25
      },
      {
        "name": "Pansemal",
        "latitude": 21.65981,
        "longitude": 74.69937
      },
      {
        "name": "Parasia",
        "latitude": 22.1913,
        "longitude": 78.75904
      },
      {
        "name": "Patan",
        "latitude": 23.28636,
        "longitude": 79.68962
      },
      {
        "name": "Patharia",
        "latitude": 23.89921,
        "longitude": 79.19393
      },
      {
        "name": "Pawai",
        "latitude": 24.26635,
        "longitude": 80.16196
      },
      {
        "name": "Petlawad",
        "latitude": 23.01102,
        "longitude": 74.79772
      },
      {
        "name": "Piploda",
        "latitude": 23.35,
        "longitude": 75.43333
      },
      {
        "name": "Pithampur",
        "latitude": 22.60197,
        "longitude": 75.69649
      },
      {
        "name": "Porsa",
        "latitude": 26.67444,
        "longitude": 78.37081
      },
      {
        "name": "Punasa",
        "latitude": 22.23507,
        "longitude": 76.39335
      },
      {
        "name": "Raghogarh",
        "latitude": 24.44318,
        "longitude": 77.19768
      },
      {
        "name": "Rahatgarh",
        "latitude": 23.78968,
        "longitude": 78.39473
      },
      {
        "name": "Raisen",
        "latitude": 23.25,
        "longitude": 78.08333
      },
      {
        "name": "Rajgarh",
        "latitude": 22.67821,
        "longitude": 74.94483
      },
      {
        "name": "Rajnagar",
        "latitude": 24.88929,
        "longitude": 79.91178
      },
      {
        "name": "Rajpur",
        "latitude": 22.30393,
        "longitude": 74.35568
      },
      {
        "name": "Rampura",
        "latitude": 24.467,
        "longitude": 75.43996
      },
      {
        "name": "Ranapur",
        "latitude": 22.64704,
        "longitude": 74.52118
      },
      {
        "name": "Ratangarh",
        "latitude": 24.81667,
        "longitude": 75.11667
      },
      {
        "name": "Ratlam",
        "latitude": 23.33033,
        "longitude": 75.04032
      },
      {
        "name": "Rehli",
        "latitude": 23.63722,
        "longitude": 79.06275
      },
      {
        "name": "Rehti",
        "latitude": 22.73781,
        "longitude": 77.43399
      },
      {
        "name": "Rewa",
        "latitude": 24.53256,
        "longitude": 81.29234
      },
      {
        "name": "Sabalgarh",
        "latitude": 26.24918,
        "longitude": 77.40786
      },
      {
        "name": "Sagar",
        "latitude": 23.75,
        "longitude": 78.75
      },
      {
        "name": "Sailana",
        "latitude": 23.46219,
        "longitude": 74.92318
      },
      {
        "name": "Sanawad",
        "latitude": 22.17391,
        "longitude": 76.06993
      },
      {
        "name": "Sanchi",
        "latitude": 23.48646,
        "longitude": 77.7378
      },
      {
        "name": "Sanwer",
        "latitude": 22.97415,
        "longitude": 75.8271
      },
      {
        "name": "Sarangpur",
        "latitude": 23.56651,
        "longitude": 76.47306
      },
      {
        "name": "Satna",
        "latitude": 24.5,
        "longitude": 81
      },
      {
        "name": "Satwas",
        "latitude": 22.53628,
        "longitude": 76.68452
      },
      {
        "name": "Saugor",
        "latitude": 23.83877,
        "longitude": 78.73874
      },
      {
        "name": "Sausar",
        "latitude": 21.65576,
        "longitude": 78.79669
      },
      {
        "name": "Sehore",
        "latitude": 23.2,
        "longitude": 77.08333
      },
      {
        "name": "Sendhwa",
        "latitude": 21.68562,
        "longitude": 75.09622
      },
      {
        "name": "Seondha",
        "latitude": 26.15422,
        "longitude": 78.7812
      },
      {
        "name": "Seoni",
        "latitude": 22.08503,
        "longitude": 79.55037
      },
      {
        "name": "Seoni Malwa",
        "latitude": 22.45046,
        "longitude": 77.4665
      },
      {
        "name": "Shahdol",
        "latitude": 23.5,
        "longitude": 81.5
      },
      {
        "name": "Shahgarh",
        "latitude": 24.31365,
        "longitude": 79.11806
      },
      {
        "name": "Shahpur",
        "latitude": 21.23742,
        "longitude": 76.22558
      },
      {
        "name": "Shahpura",
        "latitude": 23.13663,
        "longitude": 79.66402
      },
      {
        "name": "Shajapur",
        "latitude": 23.5,
        "longitude": 76.25
      },
      {
        "name": "Shamgarh",
        "latitude": 24.18817,
        "longitude": 75.63903
      },
      {
        "name": "Sheopur",
        "latitude": 25.8,
        "longitude": 77
      },
      {
        "name": "Shivpuri",
        "latitude": 25.42378,
        "longitude": 77.66223
      },
      {
        "name": "Shujalpur",
        "latitude": 23.40673,
        "longitude": 76.7098
      },
      {
        "name": "Sidhi",
        "latitude": 24.25,
        "longitude": 82
      },
      {
        "name": "Sihora",
        "latitude": 23.4871,
        "longitude": 80.10404
      },
      {
        "name": "Simaria",
        "latitude": 24.79497,
        "longitude": 81.152
      },
      {
        "name": "Singoli",
        "latitude": 24.96667,
        "longitude": 75.3
      },
      {
        "name": "Singrauli",
        "latitude": 24.19973,
        "longitude": 82.67535
      },
      {
        "name": "Sirmaur",
        "latitude": 24.83648,
        "longitude": 81.36448
      },
      {
        "name": "Sironj",
        "latitude": 24.10313,
        "longitude": 77.69055
      },
      {
        "name": "Sitamau",
        "latitude": 24.01473,
        "longitude": 75.35324
      },
      {
        "name": "Sohagi",
        "latitude": 24.98181,
        "longitude": 81.69558
      },
      {
        "name": "Sohagpur",
        "latitude": 22.70055,
        "longitude": 78.19522
      },
      {
        "name": "Sultanpur",
        "latitude": 23.13812,
        "longitude": 77.93404
      },
      {
        "name": "Susner",
        "latitude": 23.94667,
        "longitude": 76.08825
      },
      {
        "name": "Tal",
        "latitude": 23.71979,
        "longitude": 75.38514
      },
      {
        "name": "Talen",
        "latitude": 23.56949,
        "longitude": 76.72821
      },
      {
        "name": "Tarana",
        "latitude": 23.33383,
        "longitude": 76.04253
      },
      {
        "name": "Tekanpur",
        "latitude": 25.99401,
        "longitude": 78.28322
      },
      {
        "name": "Tendukheda",
        "latitude": 23.3962,
        "longitude": 79.53947
      },
      {
        "name": "Teonthar",
        "latitude": 24.98207,
        "longitude": 81.64194
      },
      {
        "name": "Thandla",
        "latitude": 23.00959,
        "longitude": 74.57747
      },
      {
        "name": "Tikamgarh",
        "latitude": 24.74327,
        "longitude": 78.83061
      },
      {
        "name": "Tirodi",
        "latitude": 21.68522,
        "longitude": 79.71906
      },
      {
        "name": "Udaipura",
        "latitude": 23.07434,
        "longitude": 78.51108
      },
      {
        "name": "Ujjain",
        "latitude": 23.41667,
        "longitude": 75.5
      },
      {
        "name": "Ukwa",
        "latitude": 21.97102,
        "longitude": 80.46625
      },
      {
        "name": "Umaria",
        "latitude": 23.52473,
        "longitude": 80.83716
      },
      {
        "name": "Umaria District",
        "latitude": 23.52874,
        "longitude": 80.83054
      },
      {
        "name": "Umri",
        "latitude": 26.51056,
        "longitude": 78.93667
      },
      {
        "name": "Unhel",
        "latitude": 23.33794,
        "longitude": 75.55931
      },
      {
        "name": "Vidisha",
        "latitude": 23.91667,
        "longitude": 78
      },
      {
        "name": "Waraseoni",
        "latitude": 21.76184,
        "longitude": 80.04301
      }
    ]
  },
  {
    "name": "Maharashtra",
    "kind": "state",
    "cities": [
      {
        "name": "Achalpur",
        "latitude": 21.25665,
        "longitude": 77.51006
      },
      {
        "name": "Adawad",
        "latitude": 21.21666667,
        "longitude": 75.45
      },
      {
        "name": "Agar Panchaitan",
        "latitude": 18.173692,
        "longitude": 72.988533
      },
      {
        "name": "Aheri",
        "latitude": 19.41166667,
        "longitude": 80.00388889
      },
      {
        "name": "Ahiri",
        "latitude": 19.41386,
        "longitude": 80.00359
      },
      {
        "name": "Ahmadnagar",
        "latitude": 19.09457,
        "longitude": 74.73843
      },
      {
        "name": "Ahmadpur",
        "latitude": 18.70622,
        "longitude": 76.93731
      },
      {
        "name": "Ahmednagar",
        "latitude": 19.08333333,
        "longitude": 74.73333333
      },
      {
        "name": "Airoli",
        "latitude": 19.15096,
        "longitude": 72.99625
      },
      {
        "name": "Ajra",
        "latitude": 16.11601,
        "longitude": 74.21097
      },
      {
        "name": "Akalkot",
        "latitude": 17.52532,
        "longitude": 76.20611
      },
      {
        "name": "Akkalkot",
        "latitude": 17.51666667,
        "longitude": 76.2
      },
      {
        "name": "Akluj",
        "latitude": 17.88333333,
        "longitude": 75.01666667
      },
      {
        "name": "Akola",
        "latitude": 20.5,
        "longitude": 77.16667
      },
      {
        "name": "Akolner",
        "latitude": 18.98333333,
        "longitude": 74.66666667
      },
      {
        "name": "Akot",
        "latitude": 21.0963,
        "longitude": 77.0588
      },
      {
        "name": "Akrani",
        "latitude": 21.82423611,
        "longitude": 74.21687222
      },
      {
        "name": "Alandi",
        "latitude": 18.67756,
        "longitude": 73.89868
      },
      {
        "name": "Ale",
        "latitude": 19.17,
        "longitude": 74.12
      },
      {
        "name": "Alibag",
        "latitude": 18.64813,
        "longitude": 72.87579
      },
      {
        "name": "Alkuti",
        "latitude": 19.05,
        "longitude": 74.23
      },
      {
        "name": "Allapalli",
        "latitude": 19.43172,
        "longitude": 80.06377
      },
      {
        "name": "Amalner",
        "latitude": 21.03983,
        "longitude": 75.05887
      },
      {
        "name": "Amarnath",
        "latitude": 19.2,
        "longitude": 73.16667
      },
      {
        "name": "Ambad",
        "latitude": 19.61301,
        "longitude": 75.78906
      },
      {
        "name": "Ambajogai",
        "latitude": 18.73312,
        "longitude": 76.38616
      },
      {
        "name": "Ambarnath",
        "latitude": 19.209,
        "longitude": 73.186
      },
      {
        "name": "Ambegaon",
        "latitude": 19.11666667,
        "longitude": 73.73333333
      },
      {
        "name": "Amgaon",
        "latitude": 20.65,
        "longitude": 79.95
      },
      {
        "name": "Amravati",
        "latitude": 20.93333,
        "longitude": 77.75
      },
      {
        "name": "Amravati Division",
        "latitude": 20.93483,
        "longitude": 77.75694
      },
      {
        "name": "Andheri",
        "latitude": 19.11916667,
        "longitude": 72.84694444
      },
      {
        "name": "Andura",
        "latitude": 20.88333333,
        "longitude": 76.86666667
      },
      {
        "name": "Anjangaon",
        "latitude": 21.16516,
        "longitude": 77.3091
      },
      {
        "name": "Anjarle",
        "latitude": 17.85,
        "longitude": 73.09
      },
      {
        "name": "Anshing",
        "latitude": 20.0409,
        "longitude": 77.31501
      },
      {
        "name": "Arag",
        "latitude": 16.78,
        "longitude": 74.8
      },
      {
        "name": "Arangaon",
        "latitude": 19.02681,
        "longitude": 74.71487
      },
      {
        "name": "Ardhapur",
        "latitude": 19.28333333,
        "longitude": 77.38333333
      },
      {
        "name": "Argaon",
        "latitude": 16.778999,
        "longitude": 73.64553
      },
      {
        "name": "Artist Village",
        "latitude": 19.03227,
        "longitude": 73.04276
      },
      {
        "name": "Arvi",
        "latitude": 20.99585,
        "longitude": 78.22914
      },
      {
        "name": "Ashta",
        "latitude": 16.94943,
        "longitude": 74.40936
      },
      {
        "name": "Ashti",
        "latitude": 19.37671,
        "longitude": 76.2252
      },
      {
        "name": "Asoda",
        "latitude": 21.03333333,
        "longitude": 75.6
      },
      {
        "name": "Assaye",
        "latitude": 20.24512778,
        "longitude": 75.88739722
      },
      {
        "name": "Astagaon",
        "latitude": 19.66666667,
        "longitude": 74.5
      },
      {
        "name": "Aurangabad",
        "latitude": 19.88467,
        "longitude": 75.33986
      },
      {
        "name": "Ausa",
        "latitude": 18.24728,
        "longitude": 76.4993
      },
      {
        "name": "Badlapur",
        "latitude": 19.15516,
        "longitude": 73.26553
      },
      {
        "name": "Badnapur",
        "latitude": 19.86666667,
        "longitude": 75.73333333
      },
      {
        "name": "Badnera",
        "latitude": 20.85463056,
        "longitude": 77.72931111
      },
      {
        "name": "Bagewadi",
        "latitude": 16.29,
        "longitude": 74.6
      },
      {
        "name": "Balapur",
        "latitude": 20.66612,
        "longitude": 76.77386
      },
      {
        "name": "Ballalpur",
        "latitude": 19.84696,
        "longitude": 79.34578
      },
      {
        "name": "Ballard Estate",
        "latitude": 18.95,
        "longitude": 72.84
      },
      {
        "name": "Ballarpur",
        "latitude": 19.83333333,
        "longitude": 79.35
      },
      {
        "name": "Bandra",
        "latitude": 19.05444444,
        "longitude": 72.84055556
      },
      {
        "name": "Baner",
        "latitude": 18.56,
        "longitude": 73.79027778
      },
      {
        "name": "Bankot",
        "latitude": 17.98333333,
        "longitude": 73.05
      },
      {
        "name": "Baramati",
        "latitude": 18.15174,
        "longitude": 74.57767
      },
      {
        "name": "Barsi",
        "latitude": 18.23454,
        "longitude": 75.69275
      },
      {
        "name": "Basmat",
        "latitude": 19.32872,
        "longitude": 77.15746
      },
      {
        "name": "Basmath",
        "latitude": 19.3167,
        "longitude": 77.1667
      },
      {
        "name": "Bavdhan",
        "latitude": 18.53527778,
        "longitude": 73.78277778
      },
      {
        "name": "Bawanbir",
        "latitude": 21.08333333,
        "longitude": 76.71666667
      },
      {
        "name": "Beed",
        "latitude": 18.98921,
        "longitude": 75.75634
      },
      {
        "name": "Bhandara",
        "latitude": 21.18333,
        "longitude": 80
      },
      {
        "name": "Bhandardara",
        "latitude": 19.52916667,
        "longitude": 73.75138889
      },
      {
        "name": "Bhandup",
        "latitude": 19.14,
        "longitude": 72.93
      },
      {
        "name": "Bhayandar",
        "latitude": 19.30157,
        "longitude": 72.85107
      },
      {
        "name": "Bhigvan",
        "latitude": 18.3007,
        "longitude": 74.76701
      },
      {
        "name": "Bhiwandi",
        "latitude": 19.30023,
        "longitude": 73.05881
      },
      {
        "name": "Bhiwapur",
        "latitude": 20.83555556,
        "longitude": 79.50111111
      },
      {
        "name": "Bhokar",
        "latitude": 19.217803,
        "longitude": 77.669392
      },
      {
        "name": "Bhokardan",
        "latitude": 20.27,
        "longitude": 75.77
      },
      {
        "name": "Bhoom",
        "latitude": 18.45972222,
        "longitude": 75.66083333
      },
      {
        "name": "Bhor",
        "latitude": 18.14861,
        "longitude": 73.84336
      },
      {
        "name": "Bhudgaon",
        "latitude": 16.90742,
        "longitude": 74.59954
      },
      {
        "name": "Bhugaon",
        "latitude": 18.501284,
        "longitude": 73.750161
      },
      {
        "name": "Bhum",
        "latitude": 18.45908,
        "longitude": 75.65877
      },
      {
        "name": "Bhusaval",
        "latitude": 21.04365,
        "longitude": 75.78506
      },
      {
        "name": "Bhusawal",
        "latitude": 21.05,
        "longitude": 75.77
      },
      {
        "name": "Bid",
        "latitude": 18.83333,
        "longitude": 75.75
      },
      {
        "name": "Bijur",
        "latitude": 13.84388889,
        "longitude": 74.63972222
      },
      {
        "name": "Bilashi",
        "latitude": 16.98333,
        "longitude": 74.03333
      },
      {
        "name": "Biloli",
        "latitude": 18.77385,
        "longitude": 77.72463
      },
      {
        "name": "Boisar",
        "latitude": 19.80362,
        "longitude": 72.75598
      },
      {
        "name": "Borgaon Manju",
        "latitude": 20.71944444,
        "longitude": 77.15277778
      },
      {
        "name": "Borivali",
        "latitude": 19.23,
        "longitude": 72.86
      },
      {
        "name": "Borivli",
        "latitude": 19.23496,
        "longitude": 72.85976
      },
      {
        "name": "Brahmapuri",
        "latitude": 20.6084,
        "longitude": 79.8559
      },
      {
        "name": "Breach Candy",
        "latitude": 18.967,
        "longitude": 72.805
      },
      {
        "name": "Buldana",
        "latitude": 20.58333,
        "longitude": 76.41667
      },
      {
        "name": "Buldhana",
        "latitude": 20.53333333,
        "longitude": 76.18333333
      },
      {
        "name": "Byculla",
        "latitude": 18.98,
        "longitude": 72.835
      },
      {
        "name": "Chakan",
        "latitude": 18.76059,
        "longitude": 73.86351
      },
      {
        "name": "Chakur",
        "latitude": 18.51305556,
        "longitude": 76.87527778
      },
      {
        "name": "Chalisgaon",
        "latitude": 20.45781,
        "longitude": 75.01596
      },
      {
        "name": "Chanda",
        "latitude": 19.95076,
        "longitude": 79.29523
      },
      {
        "name": "Chandgad",
        "latitude": 15,
        "longitude": 74
      },
      {
        "name": "Chandor",
        "latitude": 20.3306,
        "longitude": 74.24467
      },
      {
        "name": "Chandrapur",
        "latitude": 20.11793,
        "longitude": 79.44377
      },
      {
        "name": "Chandur",
        "latitude": 19.73444,
        "longitude": 79.17167
      },
      {
        "name": "Chandur Bazar",
        "latitude": 21.23853,
        "longitude": 77.74713
      },
      {
        "name": "Chausala",
        "latitude": 18.708692,
        "longitude": 75.691595
      },
      {
        "name": "Chembur",
        "latitude": 19.05871111,
        "longitude": 72.89969444
      },
      {
        "name": "Chicholi",
        "latitude": 21.46926,
        "longitude": 79.70151
      },
      {
        "name": "Chichondi Patil",
        "latitude": 19,
        "longitude": 74.91666667
      },
      {
        "name": "Chikhli (Buldhana)",
        "latitude": 20.35046,
        "longitude": 76.25774
      },
      {
        "name": "Chikhli (Jalna)",
        "latitude": 20.02193,
        "longitude": 75.78544
      },
      {
        "name": "Chimur",
        "latitude": 20.49694444,
        "longitude": 79.37666667
      },
      {
        "name": "Chinchani",
        "latitude": 19.87458,
        "longitude": 72.6851
      },
      {
        "name": "Chinchpokli",
        "latitude": 18.98333333,
        "longitude": 72.83333333
      },
      {
        "name": "Chiplun",
        "latitude": 17.53339,
        "longitude": 73.50935
      },
      {
        "name": "Chopda",
        "latitude": 21.24578,
        "longitude": 75.29946
      },
      {
        "name": "Colaba",
        "latitude": 18.91,
        "longitude": 72.81
      },
      {
        "name": "Dabhol",
        "latitude": 17.58971,
        "longitude": 73.18001
      },
      {
        "name": "Daddi",
        "latitude": 16.06666667,
        "longitude": 74.43333333
      },
      {
        "name": "Dahanu",
        "latitude": 19.96778,
        "longitude": 72.71263
      },
      {
        "name": "Dahivel",
        "latitude": 21.06666667,
        "longitude": 74.16666667
      },
      {
        "name": "Dapoli",
        "latitude": 17.75888889,
        "longitude": 73.18555556
      },
      {
        "name": "Darwha",
        "latitude": 20.31017,
        "longitude": 77.77257
      },
      {
        "name": "Daryapur",
        "latitude": 20.92489,
        "longitude": 77.32644
      },
      {
        "name": "Dattapur",
        "latitude": 20.78075,
        "longitude": 78.1407
      },
      {
        "name": "Daulatabad",
        "latitude": 19.93611,
        "longitude": 75.22148
      },
      {
        "name": "Daund",
        "latitude": 18.46515,
        "longitude": 74.58375
      },
      {
        "name": "Deccan Gymkhana",
        "latitude": 18.5184,
        "longitude": 73.8406
      },
      {
        "name": "Deglur",
        "latitude": 18.54777778,
        "longitude": 77.57722222
      },
      {
        "name": "Dehu",
        "latitude": 18.71851,
        "longitude": 73.76635
      },
      {
        "name": "Deolali",
        "latitude": 19.94404,
        "longitude": 73.83441
      },
      {
        "name": "Deolapar",
        "latitude": 21.58611111,
        "longitude": 79.36944444
      },
      {
        "name": "Deoli",
        "latitude": 20.6492,
        "longitude": 78.48023
      },
      {
        "name": "Deoni",
        "latitude": 18.26388889,
        "longitude": 77.08222222
      },
      {
        "name": "Deulgaon Raja",
        "latitude": 20.01757,
        "longitude": 76.03755
      },
      {
        "name": "Devrukh",
        "latitude": 17.065,
        "longitude": 73.61583333
      },
      {
        "name": "Dharangaon",
        "latitude": 21.01187,
        "longitude": 75.27407
      },
      {
        "name": "Dharavi",
        "latitude": 19.05,
        "longitude": 72.86667
      },
      {
        "name": "Dharmabad",
        "latitude": 18.89116,
        "longitude": 77.8494
      },
      {
        "name": "Dharur",
        "latitude": 18.82017,
        "longitude": 76.10937
      },
      {
        "name": "Dhawalpuri",
        "latitude": 19.16666667,
        "longitude": 74.51666667
      },
      {
        "name": "Dhule",
        "latitude": 21.06852,
        "longitude": 74.58837
      },
      {
        "name": "Dhulia",
        "latitude": 20.9013,
        "longitude": 74.77737
      },
      {
        "name": "Dighori",
        "latitude": 20.8862,
        "longitude": 79.9342
      },
      {
        "name": "Diglur",
        "latitude": 18.54829,
        "longitude": 77.57695
      },
      {
        "name": "Digras",
        "latitude": 20.1035,
        "longitude": 77.71846
      },
      {
        "name": "Diveagar",
        "latitude": 18.17333333,
        "longitude": 72.99166667
      },
      {
        "name": "Dombivli",
        "latitude": 19.21667,
        "longitude": 73.08333
      },
      {
        "name": "Dondaicha",
        "latitude": 21.3236,
        "longitude": 74.56804
      },
      {
        "name": "Dongri",
        "latitude": 19.28333333,
        "longitude": 72.78333333
      },
      {
        "name": "Dudhani",
        "latitude": 17.35792,
        "longitude": 76.36688
      },
      {
        "name": "Durgapur",
        "latitude": 20.0054,
        "longitude": 79.30273
      },
      {
        "name": "Erandol",
        "latitude": 20.92206,
        "longitude": 75.32641
      },
      {
        "name": "Faizpur",
        "latitude": 21.16766,
        "longitude": 75.86006
      },
      {
        "name": "Fort",
        "latitude": 18.935,
        "longitude": 72.8359
      },
      {
        "name": "Gadchiroli",
        "latitude": 19.8,
        "longitude": 80.2
      },
      {
        "name": "Gadhinglaj",
        "latitude": 16.22291,
        "longitude": 74.3501
      },
      {
        "name": "Gangakher",
        "latitude": 18.96962,
        "longitude": 76.74946
      },
      {
        "name": "Gangapur",
        "latitude": 19.69718,
        "longitude": 75.01045
      },
      {
        "name": "Ganpatipule",
        "latitude": 17.1448,
        "longitude": 73.2666
      },
      {
        "name": "Gevrai",
        "latitude": 19.26372,
        "longitude": 75.75007
      },
      {
        "name": "Ghargaon",
        "latitude": 18.748684,
        "longitude": 74.636734
      },
      {
        "name": "Ghatanji",
        "latitude": 20.14183,
        "longitude": 78.31333
      },
      {
        "name": "Ghatkopar",
        "latitude": 19.08,
        "longitude": 72.91
      },
      {
        "name": "Ghoti Budrukh",
        "latitude": 19.71641,
        "longitude": 73.62821
      },
      {
        "name": "Ghugus",
        "latitude": 19.9381,
        "longitude": 79.11192
      },
      {
        "name": "Girgaon",
        "latitude": 18.953,
        "longitude": 72.813
      },
      {
        "name": "Gondia",
        "latitude": 21.45,
        "longitude": 80.2
      },
      {
        "name": "Gondiya",
        "latitude": 21.05,
        "longitude": 80.25
      },
      {
        "name": "Gorai",
        "latitude": 19.250057,
        "longitude": 72.782021
      },
      {
        "name": "Goregaon",
        "latitude": 18.15483,
        "longitude": 73.29147
      },
      {
        "name": "Guhagar",
        "latitude": 17.48415,
        "longitude": 73.19289
      },
      {
        "name": "Hadgaon",
        "latitude": 19.49552,
        "longitude": 77.65863
      },
      {
        "name": "Halkarni",
        "latitude": 16.16666667,
        "longitude": 74.46666667
      },
      {
        "name": "Harangul",
        "latitude": 18.9,
        "longitude": 76.66666667
      },
      {
        "name": "Harnai",
        "latitude": 17.8134,
        "longitude": 73.09668
      },
      {
        "name": "Helwak",
        "latitude": 17.385,
        "longitude": 73.735
      },
      {
        "name": "Hinganghat",
        "latitude": 20.54875,
        "longitude": 78.83978
      },
      {
        "name": "Hingoli",
        "latitude": 19.7,
        "longitude": 77.15
      },
      {
        "name": "Hirapur",
        "latitude": 21.53,
        "longitude": 79.77
      },
      {
        "name": "Hirapur Hamesha",
        "latitude": 21.55546,
        "longitude": 79.78581
      },
      {
        "name": "Hotgi",
        "latitude": 17.58333333,
        "longitude": 75.98333333
      },
      {
        "name": "Ichalkaranji",
        "latitude": 16.69117,
        "longitude": 74.46054
      },
      {
        "name": "Igatpuri",
        "latitude": 19.69522,
        "longitude": 73.5626
      },
      {
        "name": "Indapur",
        "latitude": 18.3,
        "longitude": 73.25
      },
      {
        "name": "Jaisingpur",
        "latitude": 16.77639,
        "longitude": 74.55361
      },
      {
        "name": "Jaitapur",
        "latitude": 16.59,
        "longitude": 73.35
      },
      {
        "name": "Jakhangaon",
        "latitude": 17.64639,
        "longitude": 74.32111
      },
      {
        "name": "Jalgaon",
        "latitude": 21.00292,
        "longitude": 75.56602
      },
      {
        "name": "Jalgaon Jamod",
        "latitude": 21.05194,
        "longitude": 76.53464
      },
      {
        "name": "Jalkot",
        "latitude": 18.62916667,
        "longitude": 77.18111111
      },
      {
        "name": "Jalna",
        "latitude": 19.8,
        "longitude": 75.9
      },
      {
        "name": "Jamkhed",
        "latitude": 18.72,
        "longitude": 75.32
      },
      {
        "name": "Jamod",
        "latitude": 21.1,
        "longitude": 76.6
      },
      {
        "name": "Janephal",
        "latitude": 20.29361111,
        "longitude": 76.57583333
      },
      {
        "name": "Jaoli",
        "latitude": 17.9,
        "longitude": 76.4
      },
      {
        "name": "Jategaon",
        "latitude": 19.91666667,
        "longitude": 73.65
      },
      {
        "name": "Jawhar",
        "latitude": 19.91213,
        "longitude": 73.22679
      },
      {
        "name": "Jaysingpur",
        "latitude": 16.78350556,
        "longitude": 74.56644167
      },
      {
        "name": "Jejuri",
        "latitude": 18.27658,
        "longitude": 74.16008
      },
      {
        "name": "Jintur",
        "latitude": 19.61186,
        "longitude": 76.6874
      },
      {
        "name": "Jogeshwari",
        "latitude": 19.12,
        "longitude": 72.85
      },
      {
        "name": "Juhu",
        "latitude": 19.1,
        "longitude": 72.83
      },
      {
        "name": "Junnar",
        "latitude": 19.20815,
        "longitude": 73.8752
      },
      {
        "name": "Kachurwahi",
        "latitude": 21.3333,
        "longitude": 79.3833
      },
      {
        "name": "Kadegaon",
        "latitude": 17.3,
        "longitude": 74.35
      },
      {
        "name": "Kadus",
        "latitude": 18.88333333,
        "longitude": 73.81666667
      },
      {
        "name": "Kagal",
        "latitude": 16.57702,
        "longitude": 74.31544
      },
      {
        "name": "Kaij",
        "latitude": 18.7,
        "longitude": 76.08333333
      },
      {
        "name": "Kalamb",
        "latitude": 19.04437,
        "longitude": 73.95554
      },
      {
        "name": "Kalamboli",
        "latitude": 19.03333,
        "longitude": 73.1
      },
      {
        "name": "Kalamnuri",
        "latitude": 19.67386,
        "longitude": 77.31149
      },
      {
        "name": "Kalas",
        "latitude": 18.17241,
        "longitude": 74.79045
      },
      {
        "name": "Kali(DK)",
        "latitude": 19.938778,
        "longitude": 77.732857
      },
      {
        "name": "Kalmeshwar",
        "latitude": 21.23219,
        "longitude": 78.91988
      },
      {
        "name": "Kalundri",
        "latitude": 18.9802,
        "longitude": 73.12708
      },
      {
        "name": "Kalyan",
        "latitude": 19.2437,
        "longitude": 73.13554
      },
      {
        "name": "Kalyani Nagar",
        "latitude": 18.5481,
        "longitude": 73.9033
      },
      {
        "name": "Kamargaon",
        "latitude": 20.61666667,
        "longitude": 77.5
      },
      {
        "name": "Kamatgi",
        "latitude": 16.119,
        "longitude": 75.8482
      },
      {
        "name": "Kamptee",
        "latitude": 21.2333,
        "longitude": 79.2
      },
      {
        "name": "Kamthi",
        "latitude": 21.21615,
        "longitude": 79.1973
      },
      {
        "name": "Kandri",
        "latitude": 21.4203,
        "longitude": 79.27663
      },
      {
        "name": "Kankauli",
        "latitude": 16.26609,
        "longitude": 73.71217
      },
      {
        "name": "Kankavli",
        "latitude": 16.28551111,
        "longitude": 73.68446111
      },
      {
        "name": "Kannad",
        "latitude": 20.25684,
        "longitude": 75.13786
      },
      {
        "name": "Karad",
        "latitude": 17.28937,
        "longitude": 74.18183
      },
      {
        "name": "Karajagi",
        "latitude": 17.11666667,
        "longitude": 75.58333333
      },
      {
        "name": "Karanja",
        "latitude": 20.48273,
        "longitude": 77.48857
      },
      {
        "name": "Karanja Lad",
        "latitude": 20.4833,
        "longitude": 77.4833
      },
      {
        "name": "Karjat",
        "latitude": 18.9107,
        "longitude": 73.32354
      },
      {
        "name": "Karkamb",
        "latitude": 17.8653,
        "longitude": 75.2964
      },
      {
        "name": "Karmala",
        "latitude": 18.4077,
        "longitude": 75.19386
      },
      {
        "name": "Kasara",
        "latitude": 19.6333,
        "longitude": 73.4833
      },
      {
        "name": "Kasoda",
        "latitude": 20.81666667,
        "longitude": 75.3
      },
      {
        "name": "Kati",
        "latitude": 17.96137,
        "longitude": 75.88895
      },
      {
        "name": "Katol",
        "latitude": 21.27388,
        "longitude": 78.5858
      },
      {
        "name": "Katral",
        "latitude": 17.16666667,
        "longitude": 75.63333333
      },
      {
        "name": "Khadki",
        "latitude": 18.5635,
        "longitude": 73.85205
      },
      {
        "name": "Khalapur",
        "latitude": 18.81666667,
        "longitude": 73.26666667
      },
      {
        "name": "Khallar",
        "latitude": 21.0402869,
        "longitude": 77.4656296
      },
      {
        "name": "Khamgaon",
        "latitude": 20.70738,
        "longitude": 76.56827
      },
      {
        "name": "Khanapur",
        "latitude": 17.26111111,
        "longitude": 74.70166667
      },
      {
        "name": "Khandala",
        "latitude": 18.05918056,
        "longitude": 74.01262778
      },
      {
        "name": "Khangaon",
        "latitude": 20.5,
        "longitude": 78.61666667
      },
      {
        "name": "Khapa",
        "latitude": 21.42243,
        "longitude": 78.98168
      },
      {
        "name": "Kharakvasla",
        "latitude": 18.43997,
        "longitude": 73.77545
      },
      {
        "name": "Kharda",
        "latitude": 18.63753,
        "longitude": 75.47513
      },
      {
        "name": "Kharghar",
        "latitude": 19.03614722,
        "longitude": 73.06172222
      },
      {
        "name": "Kharsundi",
        "latitude": 17.341585,
        "longitude": 74.775996
      },
      {
        "name": "Khed",
        "latitude": 17.71888,
        "longitude": 73.39693
      },
      {
        "name": "Khede",
        "latitude": 20.91,
        "longitude": 74.63
      },
      {
        "name": "Khetia",
        "latitude": 21.67124,
        "longitude": 74.58535
      },
      {
        "name": "Khoni",
        "latitude": 19.3113,
        "longitude": 73.0544
      },
      {
        "name": "Khopoli",
        "latitude": 18.78562,
        "longitude": 73.34589
      },
      {
        "name": "Khuldabad",
        "latitude": 20.00671,
        "longitude": 75.19245
      },
      {
        "name": "Kinwat",
        "latitude": 19.62557,
        "longitude": 78.1987
      },
      {
        "name": "Kodoli",
        "latitude": 16.87639,
        "longitude": 74.1909
      },
      {
        "name": "Kolhapur",
        "latitude": 16.69013,
        "longitude": 74.22981
      },
      {
        "name": "Kondalwadi",
        "latitude": 18.80727,
        "longitude": 77.77031
      },
      {
        "name": "Kondhali",
        "latitude": 21.15,
        "longitude": 78.61666667
      },
      {
        "name": "Kopar Khairane",
        "latitude": 19.10305556,
        "longitude": 73.01055556
      },
      {
        "name": "Kopargaon",
        "latitude": 19.88239,
        "longitude": 74.47605
      },
      {
        "name": "Kopela",
        "latitude": 18.83,
        "longitude": 80.23
      },
      {
        "name": "Koradi",
        "latitude": 21.24758,
        "longitude": 79.10575
      },
      {
        "name": "Koregaon",
        "latitude": 18.64573,
        "longitude": 74.05909
      },
      {
        "name": "Koynanagar",
        "latitude": 17.4,
        "longitude": 73.76667
      },
      {
        "name": "Kudal",
        "latitude": 16.01148,
        "longitude": 73.68867
      },
      {
        "name": "Kuhi",
        "latitude": 21.01082222,
        "longitude": 79.35242222
      },
      {
        "name": "Kurandvad",
        "latitude": 16.68317,
        "longitude": 74.58892
      },
      {
        "name": "Kurankhed",
        "latitude": 20.70194444,
        "longitude": 77.24972222
      },
      {
        "name": "Kurduvadi",
        "latitude": 18.09339,
        "longitude": 75.41567
      },
      {
        "name": "Kusumba",
        "latitude": 20.91666667,
        "longitude": 74.65
      },
      {
        "name": "Lakhandur",
        "latitude": 20.75,
        "longitude": 79.88333333
      },
      {
        "name": "Lanja",
        "latitude": 16.86086,
        "longitude": 73.54993
      },
      {
        "name": "Lasalgaon",
        "latitude": 20.1427,
        "longitude": 74.23946
      },
      {
        "name": "Latur",
        "latitude": 18.4,
        "longitude": 76.8
      },
      {
        "name": "Lavasa",
        "latitude": 18.40528056,
        "longitude": 73.50626944
      },
      {
        "name": "Lohogaon",
        "latitude": 18.59921,
        "longitude": 73.92701
      },
      {
        "name": "Lonar",
        "latitude": 19.98533,
        "longitude": 76.52046
      },
      {
        "name": "Lonavla",
        "latitude": 18.75275,
        "longitude": 73.40575
      },
      {
        "name": "Mahabaleshwar",
        "latitude": 17.56,
        "longitude": 73.4
      },
      {
        "name": "Mahad",
        "latitude": 18.08333,
        "longitude": 73.41667
      },
      {
        "name": "Mahape",
        "latitude": 19.11776,
        "longitude": 73.026938
      },
      {
        "name": "Mahim",
        "latitude": 19.035,
        "longitude": 72.84
      },
      {
        "name": "Maindargi",
        "latitude": 17.45739,
        "longitude": 76.2932
      },
      {
        "name": "Majalgaon",
        "latitude": 19.15988,
        "longitude": 76.20832
      },
      {
        "name": "Makhjan",
        "latitude": 17.2698,
        "longitude": 73.50031
      },
      {
        "name": "Malabar Hill",
        "latitude": 18.95,
        "longitude": 72.795
      },
      {
        "name": "Malad",
        "latitude": 19.18611111,
        "longitude": 72.84861111
      },
      {
        "name": "Malegaon",
        "latitude": 20.54966,
        "longitude": 74.53462
      },
      {
        "name": "Malkapur",
        "latitude": 17.26214,
        "longitude": 74.17574
      },
      {
        "name": "Malvan",
        "latitude": 16.05981,
        "longitude": 73.4629
      },
      {
        "name": "Manchar",
        "latitude": 19.00436,
        "longitude": 73.94346
      },
      {
        "name": "Mandangad",
        "latitude": 17.98333333,
        "longitude": 73.25
      },
      {
        "name": "Mandhal",
        "latitude": 20.95,
        "longitude": 79.46666667
      },
      {
        "name": "Mandwa",
        "latitude": 18.803,
        "longitude": 72.882
      },
      {
        "name": "Mangaon",
        "latitude": 18.23333333,
        "longitude": 73.28333333
      },
      {
        "name": "Mangrul Pir",
        "latitude": 20.31379,
        "longitude": 77.34178
      },
      {
        "name": "Manjlegaon",
        "latitude": 19.15,
        "longitude": 76.23
      },
      {
        "name": "Mankeshwar",
        "latitude": 18.35416667,
        "longitude": 75.63916667
      },
      {
        "name": "Mankhurd",
        "latitude": 19.05,
        "longitude": 72.93
      },
      {
        "name": "Manmad",
        "latitude": 20.25334,
        "longitude": 74.43755
      },
      {
        "name": "Manor",
        "latitude": 19.7244,
        "longitude": 72.90966
      },
      {
        "name": "Mansar",
        "latitude": 21.39602,
        "longitude": 79.2635
      },
      {
        "name": "Manwat",
        "latitude": 19.30133,
        "longitude": 76.49735
      },
      {
        "name": "Manwath",
        "latitude": 19.3,
        "longitude": 76.5
      },
      {
        "name": "Maregaon",
        "latitude": 20.1,
        "longitude": 78.81666667
      },
      {
        "name": "Mastiholi",
        "latitude": 16.08333333,
        "longitude": 74.55
      },
      {
        "name": "Matheran",
        "latitude": 18.98281,
        "longitude": 73.2652
      },
      {
        "name": "Matunga",
        "latitude": 19.01798056,
        "longitude": 72.84476389
      },
      {
        "name": "Mazagaon",
        "latitude": 18.97,
        "longitude": 72.85
      },
      {
        "name": "Mehekar",
        "latitude": 20.1505,
        "longitude": 76.56841
      },
      {
        "name": "Mehergaon",
        "latitude": 20.96666667,
        "longitude": 74.63333333
      },
      {
        "name": "Mehkar",
        "latitude": 20.15,
        "longitude": 76.575
      },
      {
        "name": "Mhasla",
        "latitude": 18.1334,
        "longitude": 73.11162
      },
      {
        "name": "Mhasvad",
        "latitude": 17.63359,
        "longitude": 74.78773
      },
      {
        "name": "Miraj",
        "latitude": 16.83,
        "longitude": 74.63
      },
      {
        "name": "Mohadi",
        "latitude": 21.30833333,
        "longitude": 79.675
      },
      {
        "name": "Mohol",
        "latitude": 17.8167,
        "longitude": 75.6667
      },
      {
        "name": "Mohpa",
        "latitude": 21.31012,
        "longitude": 78.82969
      },
      {
        "name": "Mokhada taluka",
        "latitude": 19.93333333,
        "longitude": 73.33333333
      },
      {
        "name": "Moram",
        "latitude": 17.78812,
        "longitude": 76.47077
      },
      {
        "name": "Morsi",
        "latitude": 21.3403,
        "longitude": 78.01258
      },
      {
        "name": "Mowad",
        "latitude": 21.46475,
        "longitude": 78.45103
      },
      {
        "name": "Mudkhed",
        "latitude": 19.15657,
        "longitude": 77.50304
      },
      {
        "name": "Mukher",
        "latitude": 18.70636,
        "longitude": 77.36795
      },
      {
        "name": "Mul",
        "latitude": 20.06987,
        "longitude": 79.67826
      },
      {
        "name": "Mulher",
        "latitude": 20.78138889,
        "longitude": 74.06388889
      },
      {
        "name": "Mulund",
        "latitude": 19.17168056,
        "longitude": 72.956
      },
      {
        "name": "Mumbai",
        "latitude": 19.07283,
        "longitude": 72.88261
      },
      {
        "name": "Mumbai Suburban",
        "latitude": 19.12636,
        "longitude": 72.84897
      },
      {
        "name": "Murbad",
        "latitude": 19.25395,
        "longitude": 73.38993
      },
      {
        "name": "Murgud",
        "latitude": 16.39604,
        "longitude": 74.19142
      },
      {
        "name": "Murtajapur",
        "latitude": 20.73299,
        "longitude": 77.36694
      },
      {
        "name": "Murud (Raigad)",
        "latitude": 18.32817,
        "longitude": 72.9621
      },
      {
        "name": "Murud (Ratnagiri)",
        "latitude": 17.77494444,
        "longitude": 73.11815
      },
      {
        "name": "Murum",
        "latitude": 17.78777778,
        "longitude": 76.47
      },
      {
        "name": "Nadgaon",
        "latitude": 20.90101389,
        "longitude": 76.01396389
      },
      {
        "name": "Nagapur",
        "latitude": 18.87,
        "longitude": 76.43
      },
      {
        "name": "Nagothana",
        "latitude": 18.54225,
        "longitude": 73.13493
      },
      {
        "name": "Nagpur",
        "latitude": 21.14631,
        "longitude": 79.08491
      },
      {
        "name": "Nagpur Division",
        "latitude": 21.14911,
        "longitude": 79.10748
      },
      {
        "name": "Nala Sopara",
        "latitude": 19.4154,
        "longitude": 72.8613
      },
      {
        "name": "Naldurg",
        "latitude": 17.81667,
        "longitude": 76.28182
      },
      {
        "name": "Nalegaon",
        "latitude": 18.41666667,
        "longitude": 76.81666667
      },
      {
        "name": "Nampur",
        "latitude": 20.72861111,
        "longitude": 74.31083333
      },
      {
        "name": "Nanded",
        "latitude": 18.91667,
        "longitude": 77.5
      },
      {
        "name": "Nandgaon",
        "latitude": 20.3068,
        "longitude": 74.65501
      },
      {
        "name": "Nandnee",
        "latitude": 17.455,
        "longitude": 75.84555556
      },
      {
        "name": "Nandura",
        "latitude": 20.83333333,
        "longitude": 76.45972222
      },
      {
        "name": "Nandura Buzurg",
        "latitude": 20.83417,
        "longitude": 76.45924
      },
      {
        "name": "Nandurbar",
        "latitude": 21.37,
        "longitude": 74.2
      },
      {
        "name": "Narayangaon",
        "latitude": 19.07,
        "longitude": 73.97
      },
      {
        "name": "Nardana",
        "latitude": 21.2,
        "longitude": 74.81666667
      },
      {
        "name": "Nariman Point",
        "latitude": 18.92,
        "longitude": 72.83
      },
      {
        "name": "Narkhed",
        "latitude": 21.47,
        "longitude": 78.53
      },
      {
        "name": "Nashik",
        "latitude": 19.99727,
        "longitude": 73.79096
      },
      {
        "name": "Nashik Division",
        "latitude": 19.98295,
        "longitude": 73.78942
      },
      {
        "name": "Navapur",
        "latitude": 21.17,
        "longitude": 73.78
      },
      {
        "name": "Navi Mumbai",
        "latitude": 19.03681,
        "longitude": 73.01582
      },
      {
        "name": "Neral",
        "latitude": 19.02475,
        "longitude": 73.31688
      },
      {
        "name": "Nerur",
        "latitude": 15.98333333,
        "longitude": 73.65
      },
      {
        "name": "Nevasa",
        "latitude": 19.53333333,
        "longitude": 74.93333333
      },
      {
        "name": "Nighoj",
        "latitude": 18.95972222,
        "longitude": 74.27694444
      },
      {
        "name": "Nilanga",
        "latitude": 18.11675,
        "longitude": 76.75279
      },
      {
        "name": "Nipani",
        "latitude": 16.399,
        "longitude": 74.38285
      },
      {
        "name": "Niphad",
        "latitude": 20.0833,
        "longitude": 73.8
      },
      {
        "name": "Nira Narsingpur",
        "latitude": 17.9835,
        "longitude": 75.12396
      },
      {
        "name": "Osmanabad",
        "latitude": 18.25,
        "longitude": 76.16667
      },
      {
        "name": "Ozar",
        "latitude": 20.09473,
        "longitude": 73.92816
      },
      {
        "name": "Pabal",
        "latitude": 18.83083333,
        "longitude": 74.05277778
      },
      {
        "name": "Pachora",
        "latitude": 20.66727,
        "longitude": 75.35305
      },
      {
        "name": "Paithan",
        "latitude": 19.47506,
        "longitude": 75.38558
      },
      {
        "name": "Palghar",
        "latitude": 19.69693,
        "longitude": 72.76543
      },
      {
        "name": "Palso",
        "latitude": 20.76666667,
        "longitude": 77.23333333
      },
      {
        "name": "Panchgani",
        "latitude": 17.92449,
        "longitude": 73.8008
      },
      {
        "name": "Pandharpur",
        "latitude": 17.67924,
        "longitude": 75.33098
      },
      {
        "name": "Pandhurli",
        "latitude": 19.829052,
        "longitude": 73.854745
      },
      {
        "name": "Panhala",
        "latitude": 16.8121,
        "longitude": 74.11007
      },
      {
        "name": "Panvel",
        "latitude": 18.98878,
        "longitude": 73.11013
      },
      {
        "name": "Parbhani",
        "latitude": 19.5,
        "longitude": 76.75
      },
      {
        "name": "Parel",
        "latitude": 18.99,
        "longitude": 72.84
      },
      {
        "name": "Parli Vaijnath",
        "latitude": 18.85057,
        "longitude": 76.53163
      },
      {
        "name": "Parner",
        "latitude": 19.003,
        "longitude": 74.438
      },
      {
        "name": "Parola",
        "latitude": 20.88098,
        "longitude": 75.11937
      },
      {
        "name": "Parseoni",
        "latitude": 21.38333333,
        "longitude": 79.15
      },
      {
        "name": "Partur",
        "latitude": 19.59925,
        "longitude": 76.21541
      },
      {
        "name": "Patan",
        "latitude": 17.37513,
        "longitude": 73.90143
      },
      {
        "name": "Pathardi",
        "latitude": 19.17279,
        "longitude": 75.17425
      },
      {
        "name": "Pathri",
        "latitude": 19.2588,
        "longitude": 76.43412
      },
      {
        "name": "Patur",
        "latitude": 20.46093,
        "longitude": 76.93725
      },
      {
        "name": "Paturda",
        "latitude": 20.95,
        "longitude": 76.71666667
      },
      {
        "name": "Paud",
        "latitude": 18.52416667,
        "longitude": 73.61583333
      },
      {
        "name": "Pauni",
        "latitude": 20.78,
        "longitude": 79.63
      },
      {
        "name": "Pawni",
        "latitude": 20.79229,
        "longitude": 79.63644
      },
      {
        "name": "Pedgaon",
        "latitude": 18.51166667,
        "longitude": 74.7075
      },
      {
        "name": "Peint",
        "latitude": 20.25844722,
        "longitude": 73.50305278
      },
      {
        "name": "Pen",
        "latitude": 18.73734,
        "longitude": 73.09603
      },
      {
        "name": "Phaltan",
        "latitude": 17.99113,
        "longitude": 74.43177
      },
      {
        "name": "Phulambri",
        "latitude": 20.1,
        "longitude": 75.41666667
      },
      {
        "name": "Piliv",
        "latitude": 17.678842,
        "longitude": 74.966412
      },
      {
        "name": "Pimpalgaon Baswant",
        "latitude": 20.16666667,
        "longitude": 73.98333333
      },
      {
        "name": "Pimpalgaon Raja",
        "latitude": 20.71666667,
        "longitude": 76.43333333
      },
      {
        "name": "Pimpri",
        "latitude": 18.62292,
        "longitude": 73.80696
      },
      {
        "name": "Pimpri-Chinchwad",
        "latitude": 18.62777778,
        "longitude": 73.81305556
      },
      {
        "name": "Pipri",
        "latitude": 19.79371,
        "longitude": 75.53519
      },
      {
        "name": "Powai",
        "latitude": 19.1164,
        "longitude": 72.90471
      },
      {
        "name": "Prabhadevi",
        "latitude": 19.016905,
        "longitude": 72.828649
      },
      {
        "name": "Prakasha",
        "latitude": 21.51666667,
        "longitude": 74.31666667
      },
      {
        "name": "Pulgaon",
        "latitude": 20.72204,
        "longitude": 78.32056
      },
      {
        "name": "Pune",
        "latitude": 18.51957,
        "longitude": 73.85535
      },
      {
        "name": "Pune Division",
        "latitude": 18.74673,
        "longitude": 73.75465
      },
      {
        "name": "Puntamba",
        "latitude": 19.75,
        "longitude": 74.63333333
      },
      {
        "name": "Pural",
        "latitude": 16.45,
        "longitude": 73.36666667
      },
      {
        "name": "Purna",
        "latitude": 19.1817,
        "longitude": 77.02566
      },
      {
        "name": "Pusad",
        "latitude": 19.91274,
        "longitude": 77.57838
      },
      {
        "name": "Radhanagari",
        "latitude": 16.41388889,
        "longitude": 73.99777778
      },
      {
        "name": "Rahata",
        "latitude": 19.71666667,
        "longitude": 74.48333333
      },
      {
        "name": "Rahimatpur",
        "latitude": 17.5921,
        "longitude": 74.19966
      },
      {
        "name": "Rahuri",
        "latitude": 19.39069,
        "longitude": 74.64979
      },
      {
        "name": "Raigarh",
        "latitude": 18.57,
        "longitude": 73.13
      },
      {
        "name": "Raireshwar",
        "latitude": 18.05,
        "longitude": 73.73333333
      },
      {
        "name": "Rajapur",
        "latitude": 16.65679,
        "longitude": 73.51701
      },
      {
        "name": "Rajgurunagar",
        "latitude": 18.86667,
        "longitude": 73.9
      },
      {
        "name": "Rajur",
        "latitude": 20.11087,
        "longitude": 78.89311
      },
      {
        "name": "Rajura",
        "latitude": 19.77947,
        "longitude": 79.36459
      },
      {
        "name": "Ralegaon",
        "latitude": 20.25,
        "longitude": 79.81
      },
      {
        "name": "Ramewadi",
        "latitude": 16.03333333,
        "longitude": 74.35
      },
      {
        "name": "Ramtek",
        "latitude": 21.39562,
        "longitude": 79.32725
      },
      {
        "name": "Ratnagiri",
        "latitude": 17,
        "longitude": 73.5
      },
      {
        "name": "Raver",
        "latitude": 21.24757,
        "longitude": 76.03509
      },
      {
        "name": "Renapur",
        "latitude": 18.51666667,
        "longitude": 76.6
      },
      {
        "name": "Renavi",
        "latitude": 17.26972222,
        "longitude": 74.61055556
      },
      {
        "name": "Revadanda",
        "latitude": 18.55363,
        "longitude": 72.92559
      },
      {
        "name": "Revdanda",
        "latitude": 18.55,
        "longitude": 72.93333333
      },
      {
        "name": "Risod",
        "latitude": 19.97671,
        "longitude": 76.78799
      },
      {
        "name": "Roha",
        "latitude": 18.43687,
        "longitude": 73.11964
      },
      {
        "name": "Sailu",
        "latitude": 19.47,
        "longitude": 76.47
      },
      {
        "name": "Sakol",
        "latitude": 18.2825,
        "longitude": 76.88444444
      },
      {
        "name": "Sakoli",
        "latitude": 21.08,
        "longitude": 79.98
      },
      {
        "name": "Sakri",
        "latitude": 20.99027778,
        "longitude": 74.31444444
      },
      {
        "name": "Samudrapur",
        "latitude": 20.65,
        "longitude": 78.96666667
      },
      {
        "name": "Sangameshwar",
        "latitude": 17.18694444,
        "longitude": 73.55305556
      },
      {
        "name": "Sangamner",
        "latitude": 19.56784,
        "longitude": 74.21154
      },
      {
        "name": "Sangli",
        "latitude": 17.11202,
        "longitude": 74.7699
      },
      {
        "name": "Sangola",
        "latitude": 17.43948,
        "longitude": 75.19379
      },
      {
        "name": "Sangole",
        "latitude": 17.43944444,
        "longitude": 75.19388889
      },
      {
        "name": "Saoli",
        "latitude": 20.08133056,
        "longitude": 79.78286111
      },
      {
        "name": "Saoner",
        "latitude": 21.3851,
        "longitude": 78.92155
      },
      {
        "name": "Sarangkheda",
        "latitude": 21.433273,
        "longitude": 74.526421
      },
      {
        "name": "Sasvad",
        "latitude": 18.34351,
        "longitude": 74.03102
      },
      {
        "name": "Saswad",
        "latitude": 18.55,
        "longitude": 74
      },
      {
        "name": "Satana",
        "latitude": 20.59483,
        "longitude": 74.20301
      },
      {
        "name": "Satara",
        "latitude": 17.68589,
        "longitude": 73.99333
      },
      {
        "name": "Satara Division",
        "latitude": 17.72601,
        "longitude": 74.06433
      },
      {
        "name": "Satpati",
        "latitude": 19.71666667,
        "longitude": 72.7
      },
      {
        "name": "Savantvadi",
        "latitude": 15.90413,
        "longitude": 73.82191
      },
      {
        "name": "Savda",
        "latitude": 21.15054,
        "longitude": 75.88938
      },
      {
        "name": "Savlaj",
        "latitude": 17.1,
        "longitude": 74.78
      },
      {
        "name": "Sawantvadi",
        "latitude": 16,
        "longitude": 73.75
      },
      {
        "name": "Selu",
        "latitude": 19.45512,
        "longitude": 76.44073
      },
      {
        "name": "Sevagram",
        "latitude": 20.73499167,
        "longitude": 78.66256944
      },
      {
        "name": "Sewri",
        "latitude": 19,
        "longitude": 72.86
      },
      {
        "name": "Shahada",
        "latitude": 21.54538,
        "longitude": 74.47106
      },
      {
        "name": "Shahapur",
        "latitude": 19.45231,
        "longitude": 73.32572
      },
      {
        "name": "Shedbal",
        "latitude": 16.68916667,
        "longitude": 74.75425556
      },
      {
        "name": "Shegaon",
        "latitude": 20.7932,
        "longitude": 76.69921
      },
      {
        "name": "Shevgaon",
        "latitude": 19.35,
        "longitude": 75.23333333
      },
      {
        "name": "Shikrapur",
        "latitude": 18.69361111,
        "longitude": 74.13805556
      },
      {
        "name": "Shiraguppi",
        "latitude": 16.61875,
        "longitude": 74.70907
      },
      {
        "name": "Shirala",
        "latitude": 16.98401111,
        "longitude": 74.12415278
      },
      {
        "name": "Shirdi",
        "latitude": 19.76616,
        "longitude": 74.47738
      },
      {
        "name": "Shirgaon",
        "latitude": 19.69589,
        "longitude": 72.71527
      },
      {
        "name": "Shirol",
        "latitude": 16.73333333,
        "longitude": 74.6
      },
      {
        "name": "Shirpur",
        "latitude": 21.34821,
        "longitude": 74.88035
      },
      {
        "name": "Shirud",
        "latitude": 20.71666667,
        "longitude": 74.9
      },
      {
        "name": "Shirwal",
        "latitude": 18.15059,
        "longitude": 73.97788
      },
      {
        "name": "Shivaji Nagar",
        "latitude": 18.53017,
        "longitude": 73.85263
      },
      {
        "name": "Shrigonda",
        "latitude": 18.61527,
        "longitude": 74.69895
      },
      {
        "name": "Sillod",
        "latitude": 20.30303,
        "longitude": 75.65284
      },
      {
        "name": "Sindewahi",
        "latitude": 20.28333333,
        "longitude": 79.65
      },
      {
        "name": "Sindhudurg",
        "latitude": 16.17,
        "longitude": 73.7
      },
      {
        "name": "Sindi",
        "latitude": 20.80509,
        "longitude": 78.88752
      },
      {
        "name": "Sindkheda",
        "latitude": 21.26666667,
        "longitude": 74.73333333
      },
      {
        "name": "Sinnar",
        "latitude": 19.84505,
        "longitude": 73.99866
      },
      {
        "name": "Sironcha",
        "latitude": 18.83,
        "longitude": 79.96
      },
      {
        "name": "Sirur",
        "latitude": 18.8276,
        "longitude": 74.37475
      },
      {
        "name": "Solapur",
        "latitude": 17.75,
        "longitude": 75.5
      },
      {
        "name": "Sonala",
        "latitude": 21.11666667,
        "longitude": 76.73333333
      },
      {
        "name": "Sonegaon",
        "latitude": 20.62915,
        "longitude": 78.69207
      },
      {
        "name": "Songir",
        "latitude": 21.08333333,
        "longitude": 74.78333333
      },
      {
        "name": "Sonvad",
        "latitude": 21.08333333,
        "longitude": 75.35
      },
      {
        "name": "Soygaon",
        "latitude": 20.59606,
        "longitude": 75.61765
      },
      {
        "name": "Srivardhan",
        "latitude": 18.04592,
        "longitude": 73.01552
      },
      {
        "name": "Surgana",
        "latitude": 20.55956,
        "longitude": 73.63747
      },
      {
        "name": "Taklibhan",
        "latitude": 19.6167,
        "longitude": 74.8
      },
      {
        "name": "Talbid",
        "latitude": 17.35,
        "longitude": 74.13
      },
      {
        "name": "Talegaon Dabhade",
        "latitude": 18.73502,
        "longitude": 73.67561
      },
      {
        "name": "Talegaon Dhamdhere",
        "latitude": 18.6678,
        "longitude": 74.1536
      },
      {
        "name": "Taloda",
        "latitude": 21.56128,
        "longitude": 74.21238
      },
      {
        "name": "Talode",
        "latitude": 21.56074167,
        "longitude": 74.83
      },
      {
        "name": "Tarapur",
        "latitude": 19.86499,
        "longitude": 72.68426
      },
      {
        "name": "Tardeo",
        "latitude": 18.97,
        "longitude": 72.81
      },
      {
        "name": "Tasgaon",
        "latitude": 17.037,
        "longitude": 74.60171
      },
      {
        "name": "Telhara",
        "latitude": 21.02694,
        "longitude": 76.83889
      },
      {
        "name": "Thalner",
        "latitude": 21.25,
        "longitude": 74.9667
      },
      {
        "name": "Thane",
        "latitude": 19.33333,
        "longitude": 73.25
      },
      {
        "name": "Trimbak",
        "latitude": 19.93268,
        "longitude": 73.52907
      },
      {
        "name": "Trombay",
        "latitude": 19,
        "longitude": 72.9
      },
      {
        "name": "Tuljapur",
        "latitude": 18.00804,
        "longitude": 76.07011
      },
      {
        "name": "Tumsar",
        "latitude": 21.38333,
        "longitude": 79.73333
      },
      {
        "name": "Udgir",
        "latitude": 18.39258,
        "longitude": 77.11756
      },
      {
        "name": "Ulhasnagar",
        "latitude": 19.21667,
        "longitude": 73.15
      },
      {
        "name": "Umarga",
        "latitude": 17.83841,
        "longitude": 76.62331
      },
      {
        "name": "Umarkhed",
        "latitude": 19.60144,
        "longitude": 77.68878
      },
      {
        "name": "Umred",
        "latitude": 20.85396,
        "longitude": 79.32466
      },
      {
        "name": "Uran",
        "latitude": 18.87813,
        "longitude": 72.93924
      },
      {
        "name": "Uruli Kanchan",
        "latitude": 18.48333333,
        "longitude": 74.13333333
      },
      {
        "name": "Vada",
        "latitude": 19.65347,
        "longitude": 73.14811
      },
      {
        "name": "Vadgaon",
        "latitude": 18.7486,
        "longitude": 73.641
      },
      {
        "name": "Vadner",
        "latitude": 20.25,
        "longitude": 74.0333
      },
      {
        "name": "Vaijapur",
        "latitude": 19.92672,
        "longitude": 74.7275
      },
      {
        "name": "Vairag",
        "latitude": 18.05,
        "longitude": 75.8
      },
      {
        "name": "Valsang",
        "latitude": 17.6,
        "longitude": 76.0833
      },
      {
        "name": "Vangaon",
        "latitude": 19.86666667,
        "longitude": 72.75
      },
      {
        "name": "Varangaon",
        "latitude": 21.01767,
        "longitude": 75.91042
      },
      {
        "name": "Vashi",
        "latitude": 19.08,
        "longitude": 73.01
      },
      {
        "name": "Vasind",
        "latitude": 19.40844,
        "longitude": 73.26285
      },
      {
        "name": "Vatul",
        "latitude": 16.75,
        "longitude": 73.6
      },
      {
        "name": "Velneshwar",
        "latitude": 17.3833,
        "longitude": 73.2
      },
      {
        "name": "Vengurla",
        "latitude": 15.86125,
        "longitude": 73.63182
      },
      {
        "name": "Vijaydurg",
        "latitude": 16.5667,
        "longitude": 73.3333
      },
      {
        "name": "Vikhroli",
        "latitude": 19.11,
        "longitude": 72.94
      },
      {
        "name": "Vile Parle",
        "latitude": 19.1,
        "longitude": 72.83
      },
      {
        "name": "Vinchur",
        "latitude": 20.11666667,
        "longitude": 74.28333333
      },
      {
        "name": "Virar",
        "latitude": 19.45591,
        "longitude": 72.81136
      },
      {
        "name": "Vite",
        "latitude": 17.27343,
        "longitude": 74.53792
      },
      {
        "name": "Wadala",
        "latitude": 19.02163056,
        "longitude": 72.86458889
      },
      {
        "name": "Wadgaon",
        "latitude": 18.7392,
        "longitude": 73.63945
      },
      {
        "name": "Wadner",
        "latitude": 20.84972222,
        "longitude": 76.33333333
      },
      {
        "name": "Wadwani",
        "latitude": 18.98333333,
        "longitude": 76.05
      },
      {
        "name": "Wagholi",
        "latitude": 17.9,
        "longitude": 74.083
      },
      {
        "name": "Wai",
        "latitude": 17.95276,
        "longitude": 73.89058
      },
      {
        "name": "Wakad",
        "latitude": 18.5993,
        "longitude": 73.7625
      },
      {
        "name": "Walgaon",
        "latitude": 20.9989,
        "longitude": 77.7064
      },
      {
        "name": "Walki",
        "latitude": 18.95,
        "longitude": 74.75
      },
      {
        "name": "Wani",
        "latitude": 20.05507,
        "longitude": 78.95313
      },
      {
        "name": "Wardha",
        "latitude": 20.73933,
        "longitude": 78.59784
      },
      {
        "name": "Warora",
        "latitude": 20.22885,
        "longitude": 79.00277
      },
      {
        "name": "Warud",
        "latitude": 21.47101,
        "longitude": 78.26965
      },
      {
        "name": "Washim",
        "latitude": 20.2,
        "longitude": 77.2
      },
      {
        "name": "Worli",
        "latitude": 19,
        "longitude": 72.815
      },
      {
        "name": "Yaval",
        "latitude": 21.16772,
        "longitude": 75.69762
      },
      {
        "name": "Yavatmal",
        "latitude": 20.15,
        "longitude": 78.35
      },
      {
        "name": "Yeola",
        "latitude": 20.0424,
        "longitude": 74.48944
      }
    ]
  },
  {
    "name": "Manipur",
    "kind": "state",
    "cities": [
      {
        "name": "Bishnupur",
        "latitude": 24.60769,
        "longitude": 93.77998
      },
      {
        "name": "Churachandpur",
        "latitude": 24.33333,
        "longitude": 93.68333
      },
      {
        "name": "Imphal",
        "latitude": 24.80805,
        "longitude": 93.9442
      },
      {
        "name": "Kakching",
        "latitude": 24.4982,
        "longitude": 93.98126
      },
      {
        "name": "Mayang Imphal",
        "latitude": 24.60998,
        "longitude": 93.88873
      },
      {
        "name": "Moirang",
        "latitude": 24.4975,
        "longitude": 93.77791
      },
      {
        "name": "Phek",
        "latitude": 25.66667,
        "longitude": 94.5
      },
      {
        "name": "Senapati",
        "latitude": 25.26705,
        "longitude": 94.02237
      },
      {
        "name": "Tamenglong",
        "latitude": 24.97548,
        "longitude": 93.51563
      },
      {
        "name": "Thoubal",
        "latitude": 24.62205,
        "longitude": 94.01001
      },
      {
        "name": "Ukhrul",
        "latitude": 25.04828,
        "longitude": 94.35883
      },
      {
        "name": "Wangjing",
        "latitude": 24.58921,
        "longitude": 94.06386
      },
      {
        "name": "Yairipok",
        "latitude": 24.67792,
        "longitude": 94.04767
      }
    ]
  },
  {
    "name": "Meghalaya",
    "kind": "state",
    "cities": [
      {
        "name": "Cherrapunji",
        "latitude": 25.30089,
        "longitude": 91.69619
      },
      {
        "name": "East Garo Hills",
        "latitude": 25.61372,
        "longitude": 90.62426
      },
      {
        "name": "East Jaintia Hills",
        "latitude": 25.35976,
        "longitude": 92.3668
      },
      {
        "name": "East Khasi Hills",
        "latitude": 25.3805,
        "longitude": 91.78905
      },
      {
        "name": "Mairang",
        "latitude": 25.56165,
        "longitude": 91.63602
      },
      {
        "name": "Mankachar",
        "latitude": 25.53347,
        "longitude": 89.86373
      },
      {
        "name": "Nongpoh",
        "latitude": 25.9023,
        "longitude": 91.87694
      },
      {
        "name": "Nongstoin",
        "latitude": 25.51704,
        "longitude": 91.26484
      },
      {
        "name": "North Garo Hills",
        "latitude": 25.89682,
        "longitude": 90.61602
      },
      {
        "name": "Ri-Bhoi",
        "latitude": 25.88997,
        "longitude": 91.82707
      },
      {
        "name": "Shillong",
        "latitude": 25.56892,
        "longitude": 91.88313
      },
      {
        "name": "South Garo Hills",
        "latitude": 25.30162,
        "longitude": 90.5853
      },
      {
        "name": "South West Garo Hills",
        "latitude": 25.47245,
        "longitude": 89.93399
      },
      {
        "name": "South West Khasi Hills",
        "latitude": 25.32155,
        "longitude": 91.29462
      },
      {
        "name": "Tura",
        "latitude": 25.51421,
        "longitude": 90.20239
      },
      {
        "name": "West Garo Hills",
        "latitude": 25.56794,
        "longitude": 90.22447
      },
      {
        "name": "West Jaintia Hills",
        "latitude": 25.5,
        "longitude": 92.25
      },
      {
        "name": "West Khasi Hills",
        "latitude": 25.54776,
        "longitude": 91.26957
      }
    ]
  },
  {
    "name": "Mizoram",
    "kind": "state",
    "cities": [
      {
        "name": "Aizawl",
        "latitude": 23.8,
        "longitude": 92.9
      },
      {
        "name": "Champhai",
        "latitude": 23.47444,
        "longitude": 93.32556
      },
      {
        "name": "Darlawn",
        "latitude": 24.01336,
        "longitude": 92.92439
      },
      {
        "name": "Khawhai",
        "latitude": 23.37807,
        "longitude": 93.12797
      },
      {
        "name": "Kolasib",
        "latitude": 24.22388,
        "longitude": 92.67869
      },
      {
        "name": "Kolasib district",
        "latitude": 24.22215,
        "longitude": 92.67697
      },
      {
        "name": "Lawngtlai",
        "latitude": 22.53,
        "longitude": 92.9
      },
      {
        "name": "Lunglei",
        "latitude": 22.9,
        "longitude": 92.75
      },
      {
        "name": "Mamit",
        "latitude": 23.78492,
        "longitude": 92.46939
      },
      {
        "name": "North Vanlaiphai",
        "latitude": 23.13227,
        "longitude": 93.06532
      },
      {
        "name": "Saiha",
        "latitude": 22.49183,
        "longitude": 92.98143
      },
      {
        "name": "Sairang",
        "latitude": 23.81034,
        "longitude": 92.65226
      },
      {
        "name": "Saitlaw",
        "latitude": 23.97187,
        "longitude": 92.57454
      },
      {
        "name": "Serchhip",
        "latitude": 23.28172,
        "longitude": 92.90039
      },
      {
        "name": "Thenzawl",
        "latitude": 23.31667,
        "longitude": 92.75
      }
    ]
  },
  {
    "name": "Nagaland",
    "kind": "state",
    "cities": [
      {
        "name": "Dimapur",
        "latitude": 25.77852,
        "longitude": 93.78508
      },
      {
        "name": "Kohima",
        "latitude": 25.67467,
        "longitude": 94.11099
      },
      {
        "name": "Mokokchung",
        "latitude": 26.31393,
        "longitude": 94.51675
      },
      {
        "name": "Mon",
        "latitude": 26.75,
        "longitude": 94.83333
      },
      {
        "name": "Peren",
        "latitude": 25.51276,
        "longitude": 93.73716
      },
      {
        "name": "Phek",
        "latitude": 25.75,
        "longitude": 94.5
      },
      {
        "name": "Tuensang",
        "latitude": 26.26704,
        "longitude": 94.82415
      },
      {
        "name": "Tuensang District",
        "latitude": 26.25,
        "longitude": 94.75
      },
      {
        "name": "Wokha",
        "latitude": 26.16667,
        "longitude": 94.25
      },
      {
        "name": "Zunheboto",
        "latitude": 26,
        "longitude": 94.5
      }
    ]
  },
  {
    "name": "Odisha",
    "kind": "state",
    "cities": [
      {
        "name": "Angul",
        "latitude": 20.84089,
        "longitude": 85.10192
      },
      {
        "name": "Angul District",
        "latitude": 20.84903,
        "longitude": 85.06079
      },
      {
        "name": "Asika",
        "latitude": 19.61114,
        "longitude": 84.65998
      },
      {
        "name": "Athagarh",
        "latitude": 20.51999,
        "longitude": 85.62965
      },
      {
        "name": "Bada Barabil",
        "latitude": 22.11186,
        "longitude": 85.38684
      },
      {
        "name": "Balangir",
        "latitude": 20.75,
        "longitude": 83.25
      },
      {
        "name": "Balasore",
        "latitude": 21.49266,
        "longitude": 86.93348
      },
      {
        "name": "Baleshwar",
        "latitude": 21.5,
        "longitude": 86.75
      },
      {
        "name": "Balimila",
        "latitude": 18.25167,
        "longitude": 82.10659
      },
      {
        "name": "Balugaon",
        "latitude": 20.17838,
        "longitude": 85.11327
      },
      {
        "name": "Banapur",
        "latitude": 19.77889,
        "longitude": 85.17033
      },
      {
        "name": "Banki",
        "latitude": 20.37912,
        "longitude": 85.52953
      },
      {
        "name": "Banposh",
        "latitude": 22.24834,
        "longitude": 84.81044
      },
      {
        "name": "Baragarh",
        "latitude": 21.33333,
        "longitude": 83.61667
      },
      {
        "name": "Barbil",
        "latitude": 22.10194,
        "longitude": 85.37752
      },
      {
        "name": "Bargarh",
        "latitude": 21.33348,
        "longitude": 83.61905
      },
      {
        "name": "Barpali",
        "latitude": 21.19005,
        "longitude": 83.58721
      },
      {
        "name": "Basudebpur",
        "latitude": 21.11974,
        "longitude": 86.72896
      },
      {
        "name": "Baud",
        "latitude": 20.83773,
        "longitude": 84.32618
      },
      {
        "name": "Baudh",
        "latitude": 20.833,
        "longitude": 84.333
      },
      {
        "name": "Belaguntha",
        "latitude": 19.88249,
        "longitude": 84.63801
      },
      {
        "name": "Bhadrak",
        "latitude": 21,
        "longitude": 86.6
      },
      {
        "name": "Bhadrakh",
        "latitude": 21.05447,
        "longitude": 86.5156
      },
      {
        "name": "Bhanjanagar",
        "latitude": 19.92719,
        "longitude": 84.58201
      },
      {
        "name": "Bhawanipatna",
        "latitude": 19.90717,
        "longitude": 83.16697
      },
      {
        "name": "Bhuban",
        "latitude": 20.88197,
        "longitude": 85.83334
      },
      {
        "name": "Bhubaneshwar",
        "latitude": 20.27241,
        "longitude": 85.83385
      },
      {
        "name": "Binka",
        "latitude": 21.02626,
        "longitude": 83.81197
      },
      {
        "name": "Birmitrapur",
        "latitude": 22.4,
        "longitude": 84.76667
      },
      {
        "name": "Bolanikhodan",
        "latitude": 22.11312,
        "longitude": 85.33645
      },
      {
        "name": "Brahmapur",
        "latitude": 19.31151,
        "longitude": 84.7929
      },
      {
        "name": "Brajarajnagar",
        "latitude": 21.81667,
        "longitude": 83.91667
      },
      {
        "name": "Buguda",
        "latitude": 19.80806,
        "longitude": 84.79084
      },
      {
        "name": "Burla",
        "latitude": 21.50976,
        "longitude": 83.87259
      },
      {
        "name": "Champua",
        "latitude": 22.06734,
        "longitude": 85.66463
      },
      {
        "name": "Chandbali",
        "latitude": 20.77519,
        "longitude": 86.74139
      },
      {
        "name": "Chatrapur",
        "latitude": 19.35574,
        "longitude": 84.98359
      },
      {
        "name": "Chikitigarh",
        "latitude": 19.20233,
        "longitude": 84.6145
      },
      {
        "name": "Chittarkonda",
        "latitude": 18.12533,
        "longitude": 82.1089
      },
      {
        "name": "Cuttack",
        "latitude": 20.5,
        "longitude": 86.25
      },
      {
        "name": "Daitari",
        "latitude": 21.1,
        "longitude": 85.75
      },
      {
        "name": "Deogarh",
        "latitude": 21.53827,
        "longitude": 84.73337
      },
      {
        "name": "Dhenkanal",
        "latitude": 20.75,
        "longitude": 85.5
      },
      {
        "name": "Digapahandi",
        "latitude": 19.37275,
        "longitude": 84.57184
      },
      {
        "name": "Gajapati",
        "latitude": 18.91,
        "longitude": 84.2
      },
      {
        "name": "Ganjam",
        "latitude": 19.38705,
        "longitude": 85.05079
      },
      {
        "name": "Gopalpur",
        "latitude": 19.25861,
        "longitude": 84.90517
      },
      {
        "name": "Gudari",
        "latitude": 19.34762,
        "longitude": 83.78128
      },
      {
        "name": "Gunupur",
        "latitude": 19.0804,
        "longitude": 83.80879
      },
      {
        "name": "Hinjilikatu",
        "latitude": 19.48166,
        "longitude": 84.74489
      },
      {
        "name": "Hirakud",
        "latitude": 21.52502,
        "longitude": 83.87275
      },
      {
        "name": "Jagatsinghapur",
        "latitude": 20.2557,
        "longitude": 86.17112
      },
      {
        "name": "Jagatsinghpur",
        "latitude": 20.2,
        "longitude": 86.3
      },
      {
        "name": "Jajpur",
        "latitude": 20.84149,
        "longitude": 86.31237
      },
      {
        "name": "Jaleshwar",
        "latitude": 21.80176,
        "longitude": 87.2225
      },
      {
        "name": "Jatani",
        "latitude": 20.15975,
        "longitude": 85.70742
      },
      {
        "name": "Jeypore",
        "latitude": 18.8563,
        "longitude": 82.5716
      },
      {
        "name": "Jharsuguda",
        "latitude": 21.85531,
        "longitude": 84.00698
      },
      {
        "name": "Jharsuguda District",
        "latitude": 21.85,
        "longitude": 84
      },
      {
        "name": "Kaintragarh",
        "latitude": 20.72115,
        "longitude": 84.53514
      },
      {
        "name": "Kalahandi",
        "latitude": 19.75,
        "longitude": 83
      },
      {
        "name": "Kamakhyanagar",
        "latitude": 20.93385,
        "longitude": 85.54489
      },
      {
        "name": "Kandhamal",
        "latitude": 20.3,
        "longitude": 84
      },
      {
        "name": "Kantabanji",
        "latitude": 20.46709,
        "longitude": 82.92042
      },
      {
        "name": "Kantilo",
        "latitude": 20.36152,
        "longitude": 85.19212
      },
      {
        "name": "Kendrapara",
        "latitude": 20.5,
        "longitude": 86.5
      },
      {
        "name": "Kendraparha",
        "latitude": 20.50166,
        "longitude": 86.42227
      },
      {
        "name": "Kendujhar",
        "latitude": 21.5,
        "longitude": 85.5
      },
      {
        "name": "Kesinga",
        "latitude": 20.18778,
        "longitude": 83.21949
      },
      {
        "name": "Khallikot",
        "latitude": 19.60908,
        "longitude": 85.08609
      },
      {
        "name": "Kharhial",
        "latitude": 20.28845,
        "longitude": 82.7606
      },
      {
        "name": "Khordha",
        "latitude": 20.2,
        "longitude": 85.6
      },
      {
        "name": "Khurda",
        "latitude": 20.18268,
        "longitude": 85.61629
      },
      {
        "name": "Kiri Buru",
        "latitude": 22.08333,
        "longitude": 85.35
      },
      {
        "name": "Kodala",
        "latitude": 19.62425,
        "longitude": 84.94075
      },
      {
        "name": "Konarka",
        "latitude": 19.89758,
        "longitude": 86.11413
      },
      {
        "name": "Koraput",
        "latitude": 19,
        "longitude": 83
      },
      {
        "name": "Kuchaiburi",
        "latitude": 22.26675,
        "longitude": 86.17385
      },
      {
        "name": "Kuchinda",
        "latitude": 21.74356,
        "longitude": 84.34848
      },
      {
        "name": "Malakanagiri",
        "latitude": 18.36428,
        "longitude": 81.888
      },
      {
        "name": "Malkangiri",
        "latitude": 18.25,
        "longitude": 81.95
      },
      {
        "name": "Mayurbhanj",
        "latitude": 21.75,
        "longitude": 86.5
      },
      {
        "name": "Nabarangpur",
        "latitude": 19.2333,
        "longitude": 82.55
      },
      {
        "name": "Nayagarh",
        "latitude": 20.12882,
        "longitude": 85.09626
      },
      {
        "name": "Nayagarh District",
        "latitude": 20.13,
        "longitude": 85.1
      },
      {
        "name": "Nilgiri",
        "latitude": 21.46235,
        "longitude": 86.76794
      },
      {
        "name": "Nimaparha",
        "latitude": 20.05756,
        "longitude": 86.00436
      },
      {
        "name": "Nowrangapur",
        "latitude": 19.23114,
        "longitude": 82.54826
      },
      {
        "name": "Nuapada",
        "latitude": 20.6,
        "longitude": 82.5
      },
      {
        "name": "Padampur",
        "latitude": 20.99932,
        "longitude": 83.06325
      },
      {
        "name": "Paradip Garh",
        "latitude": 20.31641,
        "longitude": 86.6085
      },
      {
        "name": "Patamundai",
        "latitude": 20.57806,
        "longitude": 86.56063
      },
      {
        "name": "Patnagarh",
        "latitude": 20.70833,
        "longitude": 83.13263
      },
      {
        "name": "Phulbani",
        "latitude": 20.48101,
        "longitude": 84.23063
      },
      {
        "name": "Pipili",
        "latitude": 20.11357,
        "longitude": 85.83147
      },
      {
        "name": "Polasara",
        "latitude": 19.69386,
        "longitude": 84.81401
      },
      {
        "name": "Puri",
        "latitude": 19.9,
        "longitude": 85.6
      },
      {
        "name": "Purushottampur",
        "latitude": 19.52024,
        "longitude": 84.88514
      },
      {
        "name": "Rambha",
        "latitude": 19.51667,
        "longitude": 85.1
      },
      {
        "name": "Raurkela",
        "latitude": 22.22496,
        "longitude": 84.86414
      },
      {
        "name": "Rayagada",
        "latitude": 19.4,
        "longitude": 83.5
      },
      {
        "name": "Remuna",
        "latitude": 21.52798,
        "longitude": 86.87156
      },
      {
        "name": "Rengali",
        "latitude": 21.64602,
        "longitude": 84.05311
      },
      {
        "name": "Sambalpur",
        "latitude": 21.4,
        "longitude": 83.88333
      },
      {
        "name": "Sonepur",
        "latitude": 20.83333,
        "longitude": 83.91667
      },
      {
        "name": "Sorada",
        "latitude": 19.76082,
        "longitude": 84.42997
      },
      {
        "name": "Soro",
        "latitude": 21.27851,
        "longitude": 86.68833
      },
      {
        "name": "Subarnapur",
        "latitude": 20.93154,
        "longitude": 83.82486
      },
      {
        "name": "Sundargarh",
        "latitude": 22.25,
        "longitude": 84.5
      },
      {
        "name": "Talcher",
        "latitude": 20.94927,
        "longitude": 85.23354
      },
      {
        "name": "Tarabha",
        "latitude": 20.73252,
        "longitude": 83.67443
      },
      {
        "name": "Titlagarh",
        "latitude": 20.28961,
        "longitude": 83.15233
      },
      {
        "name": "Udayagiri",
        "latitude": 20.12416,
        "longitude": 84.36869
      }
    ]
  },
  {
    "name": "Puducherry",
    "kind": "union_territory",
    "cities": [
      {
        "name": "Karaikal",
        "latitude": 10.92209,
        "longitude": 79.83353
      },
      {
        "name": "Mahe",
        "latitude": 11.7,
        "longitude": 75.53333
      },
      {
        "name": "Yanam",
        "latitude": 16.73463,
        "longitude": 82.21773
      }
    ]
  },
  {
    "name": "Punjab",
    "kind": "state",
    "cities": [
      {
        "name": "Abohar",
        "latitude": 30.14453,
        "longitude": 74.19552
      },
      {
        "name": "Adampur",
        "latitude": 31.43224,
        "longitude": 75.71484
      },
      {
        "name": "Ajitgarh",
        "latitude": 30.65,
        "longitude": 76.7
      },
      {
        "name": "Ajnala",
        "latitude": 31.84473,
        "longitude": 74.76295
      },
      {
        "name": "Akalgarh",
        "latitude": 29.82074,
        "longitude": 75.89078
      },
      {
        "name": "Alawalpur",
        "latitude": 31.43161,
        "longitude": 75.65614
      },
      {
        "name": "Amloh",
        "latitude": 30.60837,
        "longitude": 76.23199
      },
      {
        "name": "Amritsar",
        "latitude": 31.67,
        "longitude": 74.84
      },
      {
        "name": "Anandpur Sahib",
        "latitude": 31.23926,
        "longitude": 76.50253
      },
      {
        "name": "Badhni Kalan",
        "latitude": 30.6813,
        "longitude": 75.29087
      },
      {
        "name": "Bagha Purana",
        "latitude": 30.68809,
        "longitude": 75.09838
      },
      {
        "name": "Bakloh",
        "latitude": 32.47939,
        "longitude": 75.91874
      },
      {
        "name": "Balachor",
        "latitude": 31.06062,
        "longitude": 76.30166
      },
      {
        "name": "Banga",
        "latitude": 31.18874,
        "longitude": 75.99495
      },
      {
        "name": "Banur",
        "latitude": 30.55407,
        "longitude": 76.71948
      },
      {
        "name": "Barnala",
        "latitude": 30.37451,
        "longitude": 75.5487
      },
      {
        "name": "Batala",
        "latitude": 31.80921,
        "longitude": 75.20294
      },
      {
        "name": "Begowal",
        "latitude": 31.61152,
        "longitude": 75.52135
      },
      {
        "name": "Bhadaur",
        "latitude": 30.47651,
        "longitude": 75.33049
      },
      {
        "name": "Bhatinda",
        "latitude": 30.20747,
        "longitude": 74.93893
      },
      {
        "name": "Bhawanigarh",
        "latitude": 30.26685,
        "longitude": 76.03854
      },
      {
        "name": "Bhikhi",
        "latitude": 30.05918,
        "longitude": 75.535
      },
      {
        "name": "Bhogpur",
        "latitude": 31.55442,
        "longitude": 75.64271
      },
      {
        "name": "Bholath",
        "latitude": 31.54277778,
        "longitude": 75.5075
      },
      {
        "name": "Budhlada",
        "latitude": 29.92799,
        "longitude": 75.56205
      },
      {
        "name": "Chima",
        "latitude": 30.6854,
        "longitude": 76.08643
      },
      {
        "name": "Dasuya",
        "latitude": 31.81679,
        "longitude": 75.6531
      },
      {
        "name": "Dera Baba Nanak",
        "latitude": 32.03733,
        "longitude": 75.02787
      },
      {
        "name": "Dera Bassi",
        "latitude": 30.5872,
        "longitude": 76.8428
      },
      {
        "name": "Dhanaula",
        "latitude": 30.28216,
        "longitude": 75.57341
      },
      {
        "name": "Dhariwal",
        "latitude": 31.95616,
        "longitude": 75.32386
      },
      {
        "name": "Dhilwan",
        "latitude": 31.51432,
        "longitude": 75.34574
      },
      {
        "name": "Dhudi",
        "latitude": 30.69636,
        "longitude": 74.85246
      },
      {
        "name": "Dhuri",
        "latitude": 30.36846,
        "longitude": 75.86791
      },
      {
        "name": "Dina Nagar",
        "latitude": 32.13664,
        "longitude": 75.47291
      },
      {
        "name": "Dirba",
        "latitude": 30.07222,
        "longitude": 75.99607
      },
      {
        "name": "Doraha",
        "latitude": 30.79953,
        "longitude": 76.02355
      },
      {
        "name": "Faridkot",
        "latitude": 30.67399,
        "longitude": 74.75579
      },
      {
        "name": "Fatehgarh Churian",
        "latitude": 31.86431,
        "longitude": 74.95665
      },
      {
        "name": "Fatehgarh Sahib",
        "latitude": 30.64379,
        "longitude": 76.34787
      },
      {
        "name": "Fazilka",
        "latitude": 30.40207,
        "longitude": 74.02836
      },
      {
        "name": "Firozpur",
        "latitude": 30.92574,
        "longitude": 74.61311
      },
      {
        "name": "Firozpur District",
        "latitude": 30.89,
        "longitude": 74.56
      },
      {
        "name": "Gardhiwala",
        "latitude": 31.74147,
        "longitude": 75.75567
      },
      {
        "name": "Garhshankar",
        "latitude": 31.21537,
        "longitude": 76.14149
      },
      {
        "name": "Ghanaur",
        "latitude": 30.33092,
        "longitude": 76.61203
      },
      {
        "name": "Giddarbaha",
        "latitude": 30.19953,
        "longitude": 74.66627
      },
      {
        "name": "Gurdaspur",
        "latitude": 31.92,
        "longitude": 75.27
      },
      {
        "name": "Guru Har Sahai",
        "latitude": 30.70862,
        "longitude": 74.40407
      },
      {
        "name": "Hajipur",
        "latitude": 31.97714,
        "longitude": 75.75438
      },
      {
        "name": "Hariana",
        "latitude": 31.63512,
        "longitude": 75.83887
      },
      {
        "name": "Hoshiarpur",
        "latitude": 31.53723,
        "longitude": 75.91269
      },
      {
        "name": "Ishanpur",
        "latitude": 30.63929,
        "longitude": 76.11761
      },
      {
        "name": "Jagraon",
        "latitude": 30.78783,
        "longitude": 75.47391
      },
      {
        "name": "Jaito",
        "latitude": 30.45126,
        "longitude": 74.89189
      },
      {
        "name": "Jalalabad",
        "latitude": 30.60622,
        "longitude": 74.25727
      },
      {
        "name": "Jalandhar",
        "latitude": 31.41667,
        "longitude": 75.61667
      },
      {
        "name": "Jandiala",
        "latitude": 31.1593,
        "longitude": 75.61755
      },
      {
        "name": "Jandiala Guru",
        "latitude": 31.56198,
        "longitude": 75.0277
      },
      {
        "name": "Kalanaur",
        "latitude": 32.01227,
        "longitude": 75.15063
      },
      {
        "name": "Kapurthala",
        "latitude": 31.38011,
        "longitude": 75.38105
      },
      {
        "name": "Kartarpur",
        "latitude": 31.44268,
        "longitude": 75.49847
      },
      {
        "name": "Khamanon",
        "latitude": 30.81725,
        "longitude": 76.35478
      },
      {
        "name": "Khanna",
        "latitude": 30.70547,
        "longitude": 76.22196
      },
      {
        "name": "Kharar",
        "latitude": 30.74632,
        "longitude": 76.64689
      },
      {
        "name": "Khemkaran",
        "latitude": 31.14443,
        "longitude": 74.55938
      },
      {
        "name": "Kot Isa Khan",
        "latitude": 30.94659,
        "longitude": 75.1378
      },
      {
        "name": "Kotkapura",
        "latitude": 30.5819,
        "longitude": 74.83298
      },
      {
        "name": "Laungowal",
        "latitude": 30.19393,
        "longitude": 75.68089
      },
      {
        "name": "Ludhiana",
        "latitude": 30.91204,
        "longitude": 75.85379
      },
      {
        "name": "Machhiwara",
        "latitude": 30.91557,
        "longitude": 76.20016
      },
      {
        "name": "Majitha",
        "latitude": 31.75711,
        "longitude": 74.95891
      },
      {
        "name": "Makhu",
        "latitude": 31.10335,
        "longitude": 74.99631
      },
      {
        "name": "Malaut",
        "latitude": 30.21121,
        "longitude": 74.4818
      },
      {
        "name": "Malerkotla",
        "latitude": 30.5309,
        "longitude": 75.87949
      },
      {
        "name": "Mansa",
        "latitude": 29.98844,
        "longitude": 75.40167
      },
      {
        "name": "Maur Mandi",
        "latitude": 30.08333,
        "longitude": 75.25
      },
      {
        "name": "Moga",
        "latitude": 30.80376,
        "longitude": 75.14938
      },
      {
        "name": "Mohali",
        "latitude": 30.67995,
        "longitude": 76.72211
      },
      {
        "name": "Morinda",
        "latitude": 30.79014,
        "longitude": 76.49883
      },
      {
        "name": "Mukerian",
        "latitude": 31.95394,
        "longitude": 75.61716
      },
      {
        "name": "Nabha",
        "latitude": 30.37577,
        "longitude": 76.15292
      },
      {
        "name": "Nakodar",
        "latitude": 31.12586,
        "longitude": 75.47508
      },
      {
        "name": "Nangal",
        "latitude": 31.38966,
        "longitude": 76.37574
      },
      {
        "name": "Nawanshahr",
        "latitude": 31.1245,
        "longitude": 76.11613
      },
      {
        "name": "Nurmahal",
        "latitude": 31.09662,
        "longitude": 75.59386
      },
      {
        "name": "Nurpur Kalan",
        "latitude": 31.16667,
        "longitude": 76.48333
      },
      {
        "name": "Pathankot",
        "latitude": 32.27484,
        "longitude": 75.65287
      },
      {
        "name": "Patiala",
        "latitude": 30.33625,
        "longitude": 76.3922
      },
      {
        "name": "Patti",
        "latitude": 31.28092,
        "longitude": 74.85849
      },
      {
        "name": "Phagwara",
        "latitude": 31.22452,
        "longitude": 75.77387
      },
      {
        "name": "Phillaur",
        "latitude": 31.01887,
        "longitude": 75.79111
      },
      {
        "name": "Qadian",
        "latitude": 31.82198,
        "longitude": 75.37663
      },
      {
        "name": "Rahon",
        "latitude": 31.05275,
        "longitude": 76.11907
      },
      {
        "name": "Raikot",
        "latitude": 30.65,
        "longitude": 75.6
      },
      {
        "name": "Rajasansi",
        "latitude": 31.72021,
        "longitude": 74.8008
      },
      {
        "name": "Rajpura",
        "latitude": 30.47856,
        "longitude": 76.59284
      },
      {
        "name": "Ram Das",
        "latitude": 31.96739,
        "longitude": 74.9087
      },
      {
        "name": "Rampura",
        "latitude": 30.256,
        "longitude": 75.24116
      },
      {
        "name": "Rupnagar",
        "latitude": 31.04,
        "longitude": 76.52
      },
      {
        "name": "Samrala",
        "latitude": 30.83601,
        "longitude": 76.19324
      },
      {
        "name": "Sanaur",
        "latitude": 30.30182,
        "longitude": 76.45786
      },
      {
        "name": "Sangrur",
        "latitude": 30.24506,
        "longitude": 75.84488
      },
      {
        "name": "Sardulgarh",
        "latitude": 29.69224,
        "longitude": 75.23608
      },
      {
        "name": "Shahid Bhagat Singh Nagar",
        "latitude": 31.13183,
        "longitude": 76.13328
      },
      {
        "name": "Shahkot",
        "latitude": 31.08173,
        "longitude": 75.33708
      },
      {
        "name": "Sham Churasi",
        "latitude": 31.50028,
        "longitude": 75.74917
      },
      {
        "name": "Sirhind-Fategarh",
        "latitude": 30.64321,
        "longitude": 76.38421
      },
      {
        "name": "Sri Muktsar Sahib",
        "latitude": 30.47426,
        "longitude": 74.5166
      },
      {
        "name": "Sultanpur Lodhi",
        "latitude": 31.21468,
        "longitude": 75.19602
      },
      {
        "name": "Sunam",
        "latitude": 30.12883,
        "longitude": 75.79943
      },
      {
        "name": "Talwandi Bhai",
        "latitude": 30.85584,
        "longitude": 74.92979
      },
      {
        "name": "Talwara",
        "latitude": 31.9376,
        "longitude": 75.88657
      },
      {
        "name": "Tarn Taran Sahib",
        "latitude": 31.45191,
        "longitude": 74.92777
      },
      {
        "name": "Zira",
        "latitude": 30.96853,
        "longitude": 74.99106
      }
    ]
  },
  {
    "name": "Rajasthan",
    "kind": "state",
    "cities": [
      {
        "name": "Abhaneri",
        "latitude": 27.00743,
        "longitude": 76.6076
      },
      {
        "name": "Abu",
        "latitude": 24.59365,
        "longitude": 72.71756
      },
      {
        "name": "Abu Road",
        "latitude": 24.48012,
        "longitude": 72.78186
      },
      {
        "name": "Ajmer",
        "latitude": 26.25,
        "longitude": 74.66667
      },
      {
        "name": "Aklera",
        "latitude": 24.41288,
        "longitude": 76.56719
      },
      {
        "name": "Alwar",
        "latitude": 27.5,
        "longitude": 76.5
      },
      {
        "name": "Amet",
        "latitude": 25.30609,
        "longitude": 73.9258
      },
      {
        "name": "Anta",
        "latitude": 25.15,
        "longitude": 76.3
      },
      {
        "name": "Anupgarh",
        "latitude": 29.19111,
        "longitude": 73.20861
      },
      {
        "name": "Asind",
        "latitude": 25.7342,
        "longitude": 74.33278
      },
      {
        "name": "Bagar",
        "latitude": 28.18784,
        "longitude": 75.50012
      },
      {
        "name": "Bakani",
        "latitude": 24.28624,
        "longitude": 76.23709
      },
      {
        "name": "Bali",
        "latitude": 25.19725,
        "longitude": 73.29117
      },
      {
        "name": "Balotra",
        "latitude": 25.83242,
        "longitude": 72.24
      },
      {
        "name": "Bandikui",
        "latitude": 27.05087,
        "longitude": 76.57325
      },
      {
        "name": "Banswara",
        "latitude": 23.54109,
        "longitude": 74.4425
      },
      {
        "name": "Baran",
        "latitude": 25.09,
        "longitude": 76.66
      },
      {
        "name": "Bari",
        "latitude": 26.64661,
        "longitude": 77.61634
      },
      {
        "name": "Bari Sadri",
        "latitude": 24.41339,
        "longitude": 74.47331
      },
      {
        "name": "Barmer",
        "latitude": 25.75,
        "longitude": 71.5
      },
      {
        "name": "Basi",
        "latitude": 26.8315,
        "longitude": 76.04856
      },
      {
        "name": "Basni",
        "latitude": 27.17232,
        "longitude": 73.64519
      },
      {
        "name": "Baswa",
        "latitude": 27.14955,
        "longitude": 76.58345
      },
      {
        "name": "Bayana",
        "latitude": 26.90791,
        "longitude": 77.28985
      },
      {
        "name": "Beawar",
        "latitude": 26.10119,
        "longitude": 74.32028
      },
      {
        "name": "Begun",
        "latitude": 24.98333,
        "longitude": 75
      },
      {
        "name": "Behror",
        "latitude": 27.88832,
        "longitude": 76.28108
      },
      {
        "name": "Bhadasar",
        "latitude": 28.31457,
        "longitude": 74.28952
      },
      {
        "name": "Bhadra",
        "latitude": 29.10298,
        "longitude": 75.17138
      },
      {
        "name": "Bharatpur",
        "latitude": 27.21,
        "longitude": 77.29
      },
      {
        "name": "Bhasawar",
        "latitude": 27.03895,
        "longitude": 77.04849
      },
      {
        "name": "Bhilwara",
        "latitude": 25.5,
        "longitude": 74.75
      },
      {
        "name": "Bhindar",
        "latitude": 24.50235,
        "longitude": 74.18551
      },
      {
        "name": "Bhinmal",
        "latitude": 24.99944,
        "longitude": 72.27141
      },
      {
        "name": "Bhiwadi",
        "latitude": 28.21024,
        "longitude": 76.86056
      },
      {
        "name": "Bhuma",
        "latitude": 27.78333,
        "longitude": 74.93333
      },
      {
        "name": "Bikaner",
        "latitude": 28.01762,
        "longitude": 73.31495
      },
      {
        "name": "Bilara",
        "latitude": 26.18067,
        "longitude": 73.7055
      },
      {
        "name": "Bissau",
        "latitude": 28.24737,
        "longitude": 75.07666
      },
      {
        "name": "Borkhera",
        "latitude": 25.52115,
        "longitude": 75.64028
      },
      {
        "name": "Bundi",
        "latitude": 25.43855,
        "longitude": 75.63735
      },
      {
        "name": "Chaksu",
        "latitude": 26.6051,
        "longitude": 75.94814
      },
      {
        "name": "Chechat",
        "latitude": 24.76667,
        "longitude": 75.88333
      },
      {
        "name": "Chhabra",
        "latitude": 24.66472,
        "longitude": 76.84379
      },
      {
        "name": "Chhapar",
        "latitude": 27.819,
        "longitude": 74.43936
      },
      {
        "name": "Chhoti Sadri",
        "latitude": 24.38145,
        "longitude": 74.7012
      },
      {
        "name": "Chidawa",
        "latitude": 28.23937,
        "longitude": 75.64035
      },
      {
        "name": "Chittaurgarh",
        "latitude": 24.5,
        "longitude": 74.5
      },
      {
        "name": "Churu",
        "latitude": 28.30415,
        "longitude": 74.96718
      },
      {
        "name": "Dariba",
        "latitude": 24.94865,
        "longitude": 74.1342
      },
      {
        "name": "Dausa",
        "latitude": 26.88269,
        "longitude": 76.57053
      },
      {
        "name": "Deoli",
        "latitude": 25.75728,
        "longitude": 75.37991
      },
      {
        "name": "Deshnoke",
        "latitude": 27.79836,
        "longitude": 73.34297
      },
      {
        "name": "Devgarh",
        "latitude": 25.52533,
        "longitude": 73.90812
      },
      {
        "name": "Dhaulpur",
        "latitude": 26.71183,
        "longitude": 77.73956
      },
      {
        "name": "Didwana",
        "latitude": 27.40096,
        "longitude": 74.57537
      },
      {
        "name": "Dig",
        "latitude": 27.47188,
        "longitude": 77.32564
      },
      {
        "name": "Dungarpur",
        "latitude": 23.84306,
        "longitude": 73.71466
      },
      {
        "name": "Fatehpur",
        "latitude": 27.99486,
        "longitude": 74.95628
      },
      {
        "name": "Galiakot",
        "latitude": 23.51995,
        "longitude": 74.02028
      },
      {
        "name": "Ganganagar",
        "latitude": 29.92009,
        "longitude": 73.87496
      },
      {
        "name": "Gangapur",
        "latitude": 26.47249,
        "longitude": 76.71744
      },
      {
        "name": "Govindgarh",
        "latitude": 27.50423,
        "longitude": 76.99938
      },
      {
        "name": "Gulabpura",
        "latitude": 25.90448,
        "longitude": 74.66025
      },
      {
        "name": "Hanumangarh",
        "latitude": 29.11,
        "longitude": 74.6
      },
      {
        "name": "Hindaun",
        "latitude": 26.73411,
        "longitude": 77.03519
      },
      {
        "name": "Jahazpur",
        "latitude": 25.61994,
        "longitude": 75.27609
      },
      {
        "name": "Jaipur",
        "latitude": 27,
        "longitude": 76
      },
      {
        "name": "Jaisalmer",
        "latitude": 26.99382,
        "longitude": 71.00889
      },
      {
        "name": "Jaitaran",
        "latitude": 26.20446,
        "longitude": 73.93676
      },
      {
        "name": "Jalor",
        "latitude": 25.34558,
        "longitude": 72.61559
      },
      {
        "name": "Jalore",
        "latitude": 25.08,
        "longitude": 72.29
      },
      {
        "name": "Jhalawar",
        "latitude": 24.59633,
        "longitude": 76.16499
      },
      {
        "name": "Jhalrapatan",
        "latitude": 24.54205,
        "longitude": 76.17242
      },
      {
        "name": "Jhunjhunun",
        "latitude": 28.12559,
        "longitude": 75.39797
      },
      {
        "name": "Jobner",
        "latitude": 26.97257,
        "longitude": 75.38752
      },
      {
        "name": "Jodhpur",
        "latitude": 26.75,
        "longitude": 72.75
      },
      {
        "name": "Kaman",
        "latitude": 27.65791,
        "longitude": 77.26908
      },
      {
        "name": "Kanor",
        "latitude": 24.43437,
        "longitude": 74.26546
      },
      {
        "name": "Kapren",
        "latitude": 25.40529,
        "longitude": 76.07431
      },
      {
        "name": "Karanpur",
        "latitude": 29.84042,
        "longitude": 73.45519
      },
      {
        "name": "Karauli",
        "latitude": 26.58,
        "longitude": 77.1
      },
      {
        "name": "Kekri",
        "latitude": 25.97132,
        "longitude": 75.14992
      },
      {
        "name": "Keshorai Patan",
        "latitude": 25.29275,
        "longitude": 75.93948
      },
      {
        "name": "Khandela",
        "latitude": 27.60499,
        "longitude": 75.502
      },
      {
        "name": "Khanpur",
        "latitude": 24.73241,
        "longitude": 76.39601
      },
      {
        "name": "Khetri",
        "latitude": 28.00069,
        "longitude": 75.78644
      },
      {
        "name": "Kishangarh",
        "latitude": 26.59006,
        "longitude": 74.85397
      },
      {
        "name": "Kota",
        "latitude": 25.17512,
        "longitude": 75.84412
      },
      {
        "name": "Kotputli",
        "latitude": 27.70207,
        "longitude": 76.19911
      },
      {
        "name": "Kuchaman",
        "latitude": 27.14745,
        "longitude": 74.85655
      },
      {
        "name": "Kuchera",
        "latitude": 26.98747,
        "longitude": 73.97108
      },
      {
        "name": "Kumher",
        "latitude": 27.31657,
        "longitude": 77.37079
      },
      {
        "name": "Kushalgarh",
        "latitude": 23.19899,
        "longitude": 74.45074
      },
      {
        "name": "Lachhmangarh Sikar",
        "latitude": 27.82294,
        "longitude": 75.02754
      },
      {
        "name": "Ladnun",
        "latitude": 27.65312,
        "longitude": 74.39993
      },
      {
        "name": "Lakheri",
        "latitude": 25.67237,
        "longitude": 76.17692
      },
      {
        "name": "Lalsot",
        "latitude": 26.55951,
        "longitude": 76.32915
      },
      {
        "name": "Losal",
        "latitude": 27.4,
        "longitude": 74.91667
      },
      {
        "name": "Mahwah",
        "latitude": 27.04594,
        "longitude": 76.93152
      },
      {
        "name": "Makrana",
        "latitude": 27.04361,
        "longitude": 74.72445
      },
      {
        "name": "Malpura",
        "latitude": 26.2838,
        "longitude": 75.36458
      },
      {
        "name": "Mandal",
        "latitude": 25.44126,
        "longitude": 74.56979
      },
      {
        "name": "Mandalgarh",
        "latitude": 25.19407,
        "longitude": 75.07215
      },
      {
        "name": "Mandawar",
        "latitude": 27.86374,
        "longitude": 76.54999
      },
      {
        "name": "Mangrol",
        "latitude": 25.33061,
        "longitude": 76.50973
      },
      {
        "name": "Manohar Thana",
        "latitude": 24.24,
        "longitude": 76.80182
      },
      {
        "name": "Manoharpur",
        "latitude": 27.29769,
        "longitude": 75.9495
      },
      {
        "name": "Meethari Marwar",
        "latitude": 27.57615,
        "longitude": 74.68661
      },
      {
        "name": "Merta",
        "latitude": 26.64859,
        "longitude": 74.03414
      },
      {
        "name": "Mundwa",
        "latitude": 27.0631,
        "longitude": 73.82304
      },
      {
        "name": "Nadbai",
        "latitude": 27.22288,
        "longitude": 77.19569
      },
      {
        "name": "Nagar",
        "latitude": 27.42397,
        "longitude": 77.09922
      },
      {
        "name": "Nagaur",
        "latitude": 27.20201,
        "longitude": 73.73394
      },
      {
        "name": "Nainwa",
        "latitude": 25.77145,
        "longitude": 75.84978
      },
      {
        "name": "Napasar",
        "latitude": 27.96059,
        "longitude": 73.55913
      },
      {
        "name": "Naraina",
        "latitude": 26.79069,
        "longitude": 75.20608
      },
      {
        "name": "Nasirabad",
        "latitude": 26.30473,
        "longitude": 74.73364
      },
      {
        "name": "Nathdwara",
        "latitude": 24.93805,
        "longitude": 73.82392
      },
      {
        "name": "Nawa",
        "latitude": 27.0195,
        "longitude": 75.00226
      },
      {
        "name": "Nawalgarh",
        "latitude": 27.85161,
        "longitude": 75.27384
      },
      {
        "name": "Neem ka Thana",
        "latitude": 27.73976,
        "longitude": 75.78652
      },
      {
        "name": "Nimaj",
        "latitude": 26.14995,
        "longitude": 74.00094
      },
      {
        "name": "Nimbahera",
        "latitude": 24.62166,
        "longitude": 74.67999
      },
      {
        "name": "Niwai",
        "latitude": 26.36073,
        "longitude": 75.91836
      },
      {
        "name": "Nohar",
        "latitude": 29.18292,
        "longitude": 74.77064
      },
      {
        "name": "Nokha",
        "latitude": 27.56155,
        "longitude": 73.47141
      },
      {
        "name": "Padampur",
        "latitude": 29.70885,
        "longitude": 73.62539
      },
      {
        "name": "Pali",
        "latitude": 25.77276,
        "longitude": 73.32335
      },
      {
        "name": "Partapur",
        "latitude": 23.59276,
        "longitude": 74.17396
      },
      {
        "name": "Parvatsar",
        "latitude": 26.88604,
        "longitude": 74.76602
      },
      {
        "name": "Phalodi",
        "latitude": 27.13102,
        "longitude": 72.36826
      },
      {
        "name": "Phulera",
        "latitude": 26.87401,
        "longitude": 75.24171
      },
      {
        "name": "Pilani",
        "latitude": 28.36725,
        "longitude": 75.60352
      },
      {
        "name": "Pilibangan",
        "latitude": 29.44964,
        "longitude": 74.10093
      },
      {
        "name": "Pindwara",
        "latitude": 24.79749,
        "longitude": 73.05505
      },
      {
        "name": "Pipar",
        "latitude": 26.38441,
        "longitude": 73.54394
      },
      {
        "name": "Pirawa",
        "latitude": 24.15506,
        "longitude": 76.02728
      },
      {
        "name": "Pokaran",
        "latitude": 26.92007,
        "longitude": 71.91631
      },
      {
        "name": "Pratapgarh",
        "latitude": 24.03,
        "longitude": 74.78
      },
      {
        "name": "Pushkar",
        "latitude": 26.49022,
        "longitude": 74.55211
      },
      {
        "name": "Raipur",
        "latitude": 26.04259,
        "longitude": 74.02373
      },
      {
        "name": "Raisinghnagar",
        "latitude": 29.53583,
        "longitude": 73.44917
      },
      {
        "name": "Rajakhera",
        "latitude": 26.89802,
        "longitude": 78.171
      },
      {
        "name": "Rajaldesar",
        "latitude": 28.02849,
        "longitude": 74.47442
      },
      {
        "name": "Rajgarh",
        "latitude": 27.23731,
        "longitude": 76.62243
      },
      {
        "name": "Rajsamand",
        "latitude": 25.23822,
        "longitude": 73.93503
      },
      {
        "name": "Ramganj Mandi",
        "latitude": 24.64648,
        "longitude": 75.94325
      },
      {
        "name": "Ramgarh",
        "latitude": 27.25097,
        "longitude": 75.17893
      },
      {
        "name": "Rani",
        "latitude": 25.35031,
        "longitude": 73.30885
      },
      {
        "name": "Ratangarh",
        "latitude": 28.08137,
        "longitude": 74.61854
      },
      {
        "name": "Rawatbhata",
        "latitude": 24.92981,
        "longitude": 75.59209
      },
      {
        "name": "Rawatsar",
        "latitude": 29.26724,
        "longitude": 74.40288
      },
      {
        "name": "Ringas",
        "latitude": 27.3636,
        "longitude": 75.56838
      },
      {
        "name": "Sadri",
        "latitude": 25.18555,
        "longitude": 73.45288
      },
      {
        "name": "Salumbar",
        "latitude": 24.13524,
        "longitude": 74.04442
      },
      {
        "name": "Sambhar",
        "latitude": 26.90806,
        "longitude": 75.19137
      },
      {
        "name": "Samdari",
        "latitude": 25.81299,
        "longitude": 72.57879
      },
      {
        "name": "Sanchor",
        "latitude": 24.75361,
        "longitude": 71.7728
      },
      {
        "name": "Sangaria",
        "latitude": 29.79886,
        "longitude": 74.46683
      },
      {
        "name": "Sangod",
        "latitude": 24.92707,
        "longitude": 76.28649
      },
      {
        "name": "Sardarshahr",
        "latitude": 28.44062,
        "longitude": 74.491
      },
      {
        "name": "Sarwar",
        "latitude": 26.06272,
        "longitude": 75.01104
      },
      {
        "name": "Sawai Madhopur",
        "latitude": 26.02301,
        "longitude": 76.34408
      },
      {
        "name": "Shahpura",
        "latitude": 25.62094,
        "longitude": 74.92487
      },
      {
        "name": "Sheoganj",
        "latitude": 25.13915,
        "longitude": 73.06784
      },
      {
        "name": "Sikar",
        "latitude": 27.61206,
        "longitude": 75.13996
      },
      {
        "name": "Sirohi",
        "latitude": 24.83333,
        "longitude": 72.75
      },
      {
        "name": "Siwana",
        "latitude": 25.65154,
        "longitude": 72.42243
      },
      {
        "name": "Sojat",
        "latitude": 25.92493,
        "longitude": 73.66633
      },
      {
        "name": "Sri Dungargarh",
        "latitude": 28.09617,
        "longitude": 74.00868
      },
      {
        "name": "Sri Madhopur",
        "latitude": 27.46599,
        "longitude": 75.59736
      },
      {
        "name": "Sujangarh",
        "latitude": 27.7,
        "longitude": 74.46667
      },
      {
        "name": "Suket",
        "latitude": 24.64609,
        "longitude": 76.0417
      },
      {
        "name": "Sunel",
        "latitude": 24.37065,
        "longitude": 75.95708
      },
      {
        "name": "Surajgarh",
        "latitude": 28.31005,
        "longitude": 75.73271
      },
      {
        "name": "Suratgarh",
        "latitude": 29.3215,
        "longitude": 73.89979
      },
      {
        "name": "Takhatgarh",
        "latitude": 25.32235,
        "longitude": 73.00487
      },
      {
        "name": "Taranagar",
        "latitude": 28.6686,
        "longitude": 75.03207
      },
      {
        "name": "Tijara",
        "latitude": 27.93411,
        "longitude": 76.85541
      },
      {
        "name": "Todabhim",
        "latitude": 26.91667,
        "longitude": 76.81667
      },
      {
        "name": "Todaraisingh",
        "latitude": 26.02401,
        "longitude": 75.48182
      },
      {
        "name": "Tonk",
        "latitude": 26.16667,
        "longitude": 75.58333
      },
      {
        "name": "Udaipur",
        "latitude": 24.33,
        "longitude": 73.77
      },
      {
        "name": "Udpura",
        "latitude": 24.73355,
        "longitude": 75.97514
      },
      {
        "name": "Uniara",
        "latitude": 26.15336,
        "longitude": 75.21523
      },
      {
        "name": "Wer",
        "latitude": 27.0186,
        "longitude": 77.17636
      }
    ]
  },
  {
    "name": "Sikkim",
    "kind": "state",
    "cities": [
      {
        "name": "East District",
        "latitude": 27.33333,
        "longitude": 88.66667
      },
      {
        "name": "Gangtok",
        "latitude": 27.32574,
        "longitude": 88.61216
      },
      {
        "name": "Gyalshing",
        "latitude": 27.28952,
        "longitude": 88.25764
      },
      {
        "name": "Jorethang",
        "latitude": 27.10696,
        "longitude": 88.32332
      },
      {
        "name": "Mangan",
        "latitude": 27.50965,
        "longitude": 88.52206
      },
      {
        "name": "Namchi",
        "latitude": 27.16494,
        "longitude": 88.3638
      },
      {
        "name": "Naya Bazar",
        "latitude": 27.13082,
        "longitude": 88.23972
      },
      {
        "name": "North District",
        "latitude": 27.66667,
        "longitude": 88.5
      },
      {
        "name": "Rangpo",
        "latitude": 27.17733,
        "longitude": 88.53358
      },
      {
        "name": "Singtam",
        "latitude": 27.23467,
        "longitude": 88.50168
      },
      {
        "name": "South District",
        "latitude": 27.33333,
        "longitude": 88.41667
      },
      {
        "name": "West District",
        "latitude": 27.33333,
        "longitude": 88.25
      }
    ]
  },
  {
    "name": "Tamil Nadu",
    "kind": "state",
    "cities": [
      {
        "name": "Abiramam",
        "latitude": 9.4423,
        "longitude": 78.4399
      },
      {
        "name": "Adirampattinam",
        "latitude": 10.34059,
        "longitude": 79.37905
      },
      {
        "name": "Aduthurai",
        "latitude": 11.01542,
        "longitude": 79.48093
      },
      {
        "name": "Alagapuram",
        "latitude": 11.88705,
        "longitude": 78.91758
      },
      {
        "name": "Alandur",
        "latitude": 13.0025,
        "longitude": 80.20611
      },
      {
        "name": "Alanganallur",
        "latitude": 10.04697,
        "longitude": 78.09033
      },
      {
        "name": "Alangayam",
        "latitude": 12.62235,
        "longitude": 78.75207
      },
      {
        "name": "Alangudi",
        "latitude": 10.3606,
        "longitude": 78.98492
      },
      {
        "name": "Alangulam",
        "latitude": 8.86404,
        "longitude": 77.49937
      },
      {
        "name": "Alappakkam",
        "latitude": 11.59895,
        "longitude": 79.71893
      },
      {
        "name": "Alwa Tirunagari",
        "latitude": 8.60635,
        "longitude": 77.93983
      },
      {
        "name": "Ambasamudram",
        "latitude": 8.71068,
        "longitude": 77.4519
      },
      {
        "name": "Ambattur",
        "latitude": 13.09818,
        "longitude": 80.16152
      },
      {
        "name": "Ambur",
        "latitude": 12.79163,
        "longitude": 78.71644
      },
      {
        "name": "Ammapettai",
        "latitude": 10.79476,
        "longitude": 79.31986
      },
      {
        "name": "Anamalais",
        "latitude": 10.58303,
        "longitude": 76.93441
      },
      {
        "name": "Andippatti",
        "latitude": 9.99797,
        "longitude": 77.62097
      },
      {
        "name": "Annamalainagar",
        "latitude": 11.4,
        "longitude": 79.73333
      },
      {
        "name": "Annavasal",
        "latitude": 10.4606,
        "longitude": 78.70029
      },
      {
        "name": "Annur",
        "latitude": 11.23616,
        "longitude": 77.10514
      },
      {
        "name": "Anthiyur",
        "latitude": 11.57506,
        "longitude": 77.59043
      },
      {
        "name": "Arakkonam",
        "latitude": 13.08449,
        "longitude": 79.67053
      },
      {
        "name": "Arantangi",
        "latitude": 10.17235,
        "longitude": 78.99118
      },
      {
        "name": "Arcot",
        "latitude": 12.90569,
        "longitude": 79.31897
      },
      {
        "name": "Arimalam",
        "latitude": 10.25498,
        "longitude": 78.88403
      },
      {
        "name": "Ariyalur",
        "latitude": 11.15,
        "longitude": 79.25
      },
      {
        "name": "Arni",
        "latitude": 12.66771,
        "longitude": 79.28529
      },
      {
        "name": "Arumbavur",
        "latitude": 11.38096,
        "longitude": 78.72965
      },
      {
        "name": "Arumuganeri",
        "latitude": 8.5688,
        "longitude": 78.09091
      },
      {
        "name": "Aruppukkottai",
        "latitude": 9.5096,
        "longitude": 78.09588
      },
      {
        "name": "Aruvankad",
        "latitude": 11.36315,
        "longitude": 76.7579
      },
      {
        "name": "Attayyampatti",
        "latitude": 11.53272,
        "longitude": 78.05363
      },
      {
        "name": "Attur",
        "latitude": 11.59414,
        "longitude": 78.60143
      },
      {
        "name": "Auroville",
        "latitude": 12.00549,
        "longitude": 79.80885
      },
      {
        "name": "Avadi",
        "latitude": 13.1147,
        "longitude": 80.10981
      },
      {
        "name": "Avinashi",
        "latitude": 11.19297,
        "longitude": 77.26865
      },
      {
        "name": "Ayakudi",
        "latitude": 10.44992,
        "longitude": 77.55198
      },
      {
        "name": "Ayyampettai",
        "latitude": 10.90141,
        "longitude": 79.17984
      },
      {
        "name": "Belur",
        "latitude": 11.70752,
        "longitude": 78.41437
      },
      {
        "name": "Bhavani",
        "latitude": 11.44553,
        "longitude": 77.68215
      },
      {
        "name": "Bodinayakkanur",
        "latitude": 10.01171,
        "longitude": 77.34976
      },
      {
        "name": "Chengam",
        "latitude": 12.30889,
        "longitude": 78.79137
      },
      {
        "name": "Chennai",
        "latitude": 13.08784,
        "longitude": 80.27847
      },
      {
        "name": "Chennimalai",
        "latitude": 11.16378,
        "longitude": 77.60388
      },
      {
        "name": "Chetput",
        "latitude": 13.07,
        "longitude": 80.24083
      },
      {
        "name": "Chettipalaiyam",
        "latitude": 10.91248,
        "longitude": 77.03699
      },
      {
        "name": "Cheyyar",
        "latitude": 12.66052,
        "longitude": 79.54308
      },
      {
        "name": "Cheyyur",
        "latitude": 12.34948,
        "longitude": 80.00304
      },
      {
        "name": "Chidambaram",
        "latitude": 11.39933,
        "longitude": 79.69144
      },
      {
        "name": "Chingleput",
        "latitude": 12.69184,
        "longitude": 79.97661
      },
      {
        "name": "Chinna Salem",
        "latitude": 11.63422,
        "longitude": 78.87412
      },
      {
        "name": "Chinnamanur",
        "latitude": 9.83999,
        "longitude": 77.38109
      },
      {
        "name": "Chinnasekkadu",
        "latitude": 13.16089,
        "longitude": 80.25727
      },
      {
        "name": "Cholapuram",
        "latitude": 9.35193,
        "longitude": 77.56839
      },
      {
        "name": "Coimbatore",
        "latitude": 10.8,
        "longitude": 77.09
      },
      {
        "name": "Colachel",
        "latitude": 8.17938,
        "longitude": 77.25818
      },
      {
        "name": "Cuddalore",
        "latitude": 11.52,
        "longitude": 79.51
      },
      {
        "name": "Cumbum",
        "latitude": 9.73647,
        "longitude": 77.2847
      },
      {
        "name": "Denkanikota",
        "latitude": 12.5301,
        "longitude": 77.78887
      },
      {
        "name": "Desur",
        "latitude": 12.43727,
        "longitude": 79.48145
      },
      {
        "name": "Devadanappatti",
        "latitude": 10.14673,
        "longitude": 77.6439
      },
      {
        "name": "Devakottai",
        "latitude": 9.94704,
        "longitude": 78.8233
      },
      {
        "name": "Dhali",
        "latitude": 10.51049,
        "longitude": 77.18806
      },
      {
        "name": "Dharapuram",
        "latitude": 10.73828,
        "longitude": 77.53223
      },
      {
        "name": "Dharmapuri",
        "latitude": 12.1277,
        "longitude": 78.15794
      },
      {
        "name": "Dindigul",
        "latitude": 10.4,
        "longitude": 77.8
      },
      {
        "name": "Dusi",
        "latitude": 12.77574,
        "longitude": 79.67892
      },
      {
        "name": "Elayirampannai",
        "latitude": 9.27033,
        "longitude": 77.82494
      },
      {
        "name": "Elumalai",
        "latitude": 9.86501,
        "longitude": 77.69923
      },
      {
        "name": "Eral",
        "latitude": 8.62584,
        "longitude": 78.02282
      },
      {
        "name": "Eraniel",
        "latitude": 8.20589,
        "longitude": 77.31726
      },
      {
        "name": "Erode",
        "latitude": 11.34,
        "longitude": 77.55
      },
      {
        "name": "Erumaippatti",
        "latitude": 11.14671,
        "longitude": 78.28996
      },
      {
        "name": "Ettaiyapuram",
        "latitude": 9.14405,
        "longitude": 77.99066
      },
      {
        "name": "Gandhi Nagar",
        "latitude": 13.00639,
        "longitude": 80.25417
      },
      {
        "name": "Gangaikondan",
        "latitude": 8.85785,
        "longitude": 77.78019
      },
      {
        "name": "Gangavalli",
        "latitude": 11.49828,
        "longitude": 78.64966
      },
      {
        "name": "Gingee",
        "latitude": 12.25282,
        "longitude": 79.41727
      },
      {
        "name": "Gobichettipalayam",
        "latitude": 11.45496,
        "longitude": 77.4422
      },
      {
        "name": "Gudalur",
        "latitude": 9.67826,
        "longitude": 77.24951
      },
      {
        "name": "Gudiyatham",
        "latitude": 12.94601,
        "longitude": 78.87377
      },
      {
        "name": "Guduvancheri",
        "latitude": 12.84519,
        "longitude": 80.06055
      },
      {
        "name": "Gummidipundi",
        "latitude": 13.40765,
        "longitude": 80.10879
      },
      {
        "name": "Harur",
        "latitude": 12.05267,
        "longitude": 78.48023
      },
      {
        "name": "Hosur",
        "latitude": 12.73647,
        "longitude": 77.83264
      },
      {
        "name": "Idappadi",
        "latitude": 11.58624,
        "longitude": 77.83891
      },
      {
        "name": "Ilampillai",
        "latitude": 11.60659,
        "longitude": 78.00676
      },
      {
        "name": "Iluppur",
        "latitude": 10.51347,
        "longitude": 78.62357
      },
      {
        "name": "Injambakkam",
        "latitude": 12.9162,
        "longitude": 80.2488
      },
      {
        "name": "Irugur",
        "latitude": 11.01782,
        "longitude": 77.06285
      },
      {
        "name": "Jalakandapuram",
        "latitude": 11.69779,
        "longitude": 77.87298
      },
      {
        "name": "Jalarpet",
        "latitude": 12.57025,
        "longitude": 78.57318
      },
      {
        "name": "Jayamkondacholapuram",
        "latitude": 11.21266,
        "longitude": 79.36369
      },
      {
        "name": "Kadambur",
        "latitude": 8.99739,
        "longitude": 77.86191
      },
      {
        "name": "Kadayanallur",
        "latitude": 9.07277,
        "longitude": 77.34152
      },
      {
        "name": "Kalakkadu",
        "latitude": 8.5138,
        "longitude": 77.54944
      },
      {
        "name": "Kalavai",
        "latitude": 12.77029,
        "longitude": 79.41999
      },
      {
        "name": "Kallakkurichchi",
        "latitude": 11.7404,
        "longitude": 78.959
      },
      {
        "name": "Kallidaikurichi",
        "latitude": 8.68591,
        "longitude": 77.46592
      },
      {
        "name": "Kallupatti",
        "latitude": 9.71667,
        "longitude": 77.86667
      },
      {
        "name": "Kalugumalai",
        "latitude": 9.14941,
        "longitude": 77.70569
      },
      {
        "name": "Kamuthi",
        "latitude": 9.40732,
        "longitude": 78.37337
      },
      {
        "name": "Kanadukattan",
        "latitude": 10.17209,
        "longitude": 78.77935
      },
      {
        "name": "Kancheepuram",
        "latitude": 12.67,
        "longitude": 79.99
      },
      {
        "name": "Kanchipuram",
        "latitude": 12.83515,
        "longitude": 79.70006
      },
      {
        "name": "Kangayam",
        "latitude": 11.00599,
        "longitude": 77.5609
      },
      {
        "name": "Kanniyakumari",
        "latitude": 8.32,
        "longitude": 77.34
      },
      {
        "name": "Karaikkudi",
        "latitude": 10.06615,
        "longitude": 78.76784
      },
      {
        "name": "Karamadai",
        "latitude": 11.24058,
        "longitude": 76.96009
      },
      {
        "name": "Karambakkudi",
        "latitude": 10.45866,
        "longitude": 79.14101
      },
      {
        "name": "Kariapatti",
        "latitude": 9.67505,
        "longitude": 78.09992
      },
      {
        "name": "Karumbakkam",
        "latitude": 12.70203,
        "longitude": 80.0911
      },
      {
        "name": "Karur",
        "latitude": 10.95771,
        "longitude": 78.08095
      },
      {
        "name": "Katpadi",
        "latitude": 12.96951,
        "longitude": 79.14552
      },
      {
        "name": "Kattivakkam",
        "latitude": 13.21667,
        "longitude": 80.31667
      },
      {
        "name": "Kattupputtur",
        "latitude": 10.99385,
        "longitude": 78.21929
      },
      {
        "name": "Kaveripatnam",
        "latitude": 12.42186,
        "longitude": 78.2188
      },
      {
        "name": "Kayalpattinam",
        "latitude": 8.57143,
        "longitude": 78.11992
      },
      {
        "name": "Kayattar",
        "latitude": 8.94834,
        "longitude": 77.77424
      },
      {
        "name": "Keelakarai",
        "latitude": 9.23183,
        "longitude": 78.78545
      },
      {
        "name": "Kelamangalam",
        "latitude": 12.60307,
        "longitude": 77.85193
      },
      {
        "name": "Kil Bhuvanagiri",
        "latitude": 11.44216,
        "longitude": 79.64763
      },
      {
        "name": "Kilvelur",
        "latitude": 10.76721,
        "longitude": 79.74186
      },
      {
        "name": "Kiranur",
        "latitude": 10.56988,
        "longitude": 78.78682
      },
      {
        "name": "Kodaikanal",
        "latitude": 10.23925,
        "longitude": 77.48932
      },
      {
        "name": "Kodumudi",
        "latitude": 11.07751,
        "longitude": 77.88363
      },
      {
        "name": "Kombai",
        "latitude": 9.84745,
        "longitude": 77.29603
      },
      {
        "name": "Konganapuram",
        "latitude": 11.57105,
        "longitude": 77.9004
      },
      {
        "name": "Koothanallur",
        "latitude": 10.7199,
        "longitude": 79.5157
      },
      {
        "name": "Koradachcheri",
        "latitude": 10.77019,
        "longitude": 79.49158
      },
      {
        "name": "Korampallam",
        "latitude": 8.77506,
        "longitude": 78.09158
      },
      {
        "name": "Kotagiri",
        "latitude": 11.42072,
        "longitude": 76.86035
      },
      {
        "name": "Kottaiyur",
        "latitude": 10.10956,
        "longitude": 78.7956
      },
      {
        "name": "Kovilpatti",
        "latitude": 9.17167,
        "longitude": 77.86989
      },
      {
        "name": "Krishnagiri",
        "latitude": 12.58,
        "longitude": 77.96
      },
      {
        "name": "Kulattur",
        "latitude": 9.0032,
        "longitude": 78.1928
      },
      {
        "name": "Kulittalai",
        "latitude": 10.93487,
        "longitude": 78.41251
      },
      {
        "name": "Kumaralingam",
        "latitude": 10.48936,
        "longitude": 77.3499
      },
      {
        "name": "Kumbakonam",
        "latitude": 10.96209,
        "longitude": 79.39124
      },
      {
        "name": "Kunnattur",
        "latitude": 12.34782,
        "longitude": 78.51046
      },
      {
        "name": "Kurinjippadi",
        "latitude": 11.55028,
        "longitude": 79.59066
      },
      {
        "name": "Kuttalam",
        "latitude": 8.9303,
        "longitude": 77.26951
      },
      {
        "name": "Kuzhithurai",
        "latitude": 8.31792,
        "longitude": 77.19192
      },
      {
        "name": "Lalgudi",
        "latitude": 10.87419,
        "longitude": 78.81935
      },
      {
        "name": "Madambakkam",
        "latitude": 12.8525,
        "longitude": 80.04667
      },
      {
        "name": "Madipakkam",
        "latitude": 12.96226,
        "longitude": 80.19864
      },
      {
        "name": "Madukkarai",
        "latitude": 10.90568,
        "longitude": 76.96344
      },
      {
        "name": "Madukkur",
        "latitude": 10.48098,
        "longitude": 79.39939
      },
      {
        "name": "Madurai",
        "latitude": 9.89,
        "longitude": 78.03
      },
      {
        "name": "Madurantakam",
        "latitude": 12.51167,
        "longitude": 79.88485
      },
      {
        "name": "Mallapuram",
        "latitude": 11.98231,
        "longitude": 78.24796
      },
      {
        "name": "Mallasamudram",
        "latitude": 11.49333,
        "longitude": 78.03119
      },
      {
        "name": "Mallur",
        "latitude": 11.54424,
        "longitude": 78.14078
      },
      {
        "name": "Manali",
        "latitude": 13.16667,
        "longitude": 80.26667
      },
      {
        "name": "Manalurpettai",
        "latitude": 12.00788,
        "longitude": 79.09184
      },
      {
        "name": "Manamadurai",
        "latitude": 9.67318,
        "longitude": 78.47096
      },
      {
        "name": "Manappakkam",
        "latitude": 13.01083,
        "longitude": 80.16861
      },
      {
        "name": "Manapparai",
        "latitude": 10.60772,
        "longitude": 78.42582
      },
      {
        "name": "Manavalakurichi",
        "latitude": 8.14776,
        "longitude": 77.30552
      },
      {
        "name": "Mandapam",
        "latitude": 9.27571,
        "longitude": 79.12362
      },
      {
        "name": "Mangalam",
        "latitude": 9.76473,
        "longitude": 78.64037
      },
      {
        "name": "Mannargudi",
        "latitude": 10.66626,
        "longitude": 79.45064
      },
      {
        "name": "Marakkanam",
        "latitude": 12.19214,
        "longitude": 79.94193
      },
      {
        "name": "Marandahalli",
        "latitude": 12.38826,
        "longitude": 78.00316
      },
      {
        "name": "Masinigudi",
        "latitude": 11.56831,
        "longitude": 76.64087
      },
      {
        "name": "Mattur",
        "latitude": 11.32147,
        "longitude": 79.20245
      },
      {
        "name": "Mayiladuthurai",
        "latitude": 11.10354,
        "longitude": 79.655
      },
      {
        "name": "Melur",
        "latitude": 10.03241,
        "longitude": 78.3393
      },
      {
        "name": "Mettuppalaiyam",
        "latitude": 11.16806,
        "longitude": 78.44944
      },
      {
        "name": "Mettur",
        "latitude": 11.78796,
        "longitude": 77.8008
      },
      {
        "name": "Minjur",
        "latitude": 13.27951,
        "longitude": 80.25815
      },
      {
        "name": "Mohanur",
        "latitude": 11.05936,
        "longitude": 78.13965
      },
      {
        "name": "Mudukulattur",
        "latitude": 9.34169,
        "longitude": 78.51388
      },
      {
        "name": "Mulanur",
        "latitude": 10.79426,
        "longitude": 77.7115
      },
      {
        "name": "Musiri",
        "latitude": 10.95299,
        "longitude": 78.44427
      },
      {
        "name": "Muttupet",
        "latitude": 10.39505,
        "longitude": 79.49353
      },
      {
        "name": "Naduvattam",
        "latitude": 11.48075,
        "longitude": 76.54365
      },
      {
        "name": "Nagapattinam",
        "latitude": 10.85,
        "longitude": 79.74
      },
      {
        "name": "Nagercoil",
        "latitude": 8.17899,
        "longitude": 77.43227
      },
      {
        "name": "Namagiripettai",
        "latitude": 11.45513,
        "longitude": 78.26818
      },
      {
        "name": "Namakkal",
        "latitude": 11.3,
        "longitude": 78.13
      },
      {
        "name": "Nambiyur",
        "latitude": 11.35811,
        "longitude": 77.32115
      },
      {
        "name": "Nambutalai",
        "latitude": 9.72766,
        "longitude": 79.00707
      },
      {
        "name": "Nandambakkam",
        "latitude": 12.97795,
        "longitude": 80.06781
      },
      {
        "name": "Nangavalli",
        "latitude": 11.76189,
        "longitude": 77.89093
      },
      {
        "name": "Nangilickondan",
        "latitude": 12.25539,
        "longitude": 79.47508
      },
      {
        "name": "Nanguneri",
        "latitude": 8.49326,
        "longitude": 77.65806
      },
      {
        "name": "Nannilam",
        "latitude": 10.87933,
        "longitude": 79.61062
      },
      {
        "name": "Naravarikuppam",
        "latitude": 13.19133,
        "longitude": 80.18473
      },
      {
        "name": "Nattam",
        "latitude": 10.22776,
        "longitude": 78.22969
      },
      {
        "name": "Nattarasankottai",
        "latitude": 9.86905,
        "longitude": 78.55305
      },
      {
        "name": "Needamangalam",
        "latitude": 10.77378,
        "longitude": 79.41875
      },
      {
        "name": "Neelankarai",
        "latitude": 12.9495,
        "longitude": 80.2592
      },
      {
        "name": "Negapatam",
        "latitude": 10.76377,
        "longitude": 79.84313
      },
      {
        "name": "Nellikkuppam",
        "latitude": 11.77554,
        "longitude": 79.67016
      },
      {
        "name": "Nilakottai",
        "latitude": 10.165,
        "longitude": 77.85024
      },
      {
        "name": "Nilgiris",
        "latitude": 11.46,
        "longitude": 76.64
      },
      {
        "name": "Odugattur",
        "latitude": 12.76793,
        "longitude": 78.88304
      },
      {
        "name": "Omalur",
        "latitude": 11.74099,
        "longitude": 78.04559
      },
      {
        "name": "Ooty",
        "latitude": 11.4134,
        "longitude": 76.69521
      },
      {
        "name": "Padmanabhapuram",
        "latitude": 8.24462,
        "longitude": 77.32581
      },
      {
        "name": "Palakkodu",
        "latitude": 12.30696,
        "longitude": 78.07022
      },
      {
        "name": "Palamedu",
        "latitude": 10.10501,
        "longitude": 78.11336
      },
      {
        "name": "Palani",
        "latitude": 10.45034,
        "longitude": 77.5209
      },
      {
        "name": "Palavakkam",
        "latitude": 12.9535,
        "longitude": 80.2572
      },
      {
        "name": "Palladam",
        "latitude": 10.99175,
        "longitude": 77.28633
      },
      {
        "name": "Pallappatti",
        "latitude": 10.72057,
        "longitude": 77.87951
      },
      {
        "name": "Pallattur",
        "latitude": 10.14609,
        "longitude": 78.80309
      },
      {
        "name": "Pallavaram",
        "latitude": 12.96796,
        "longitude": 80.15025
      },
      {
        "name": "Pallikondai",
        "latitude": 12.90518,
        "longitude": 78.9427
      },
      {
        "name": "Pallipattu",
        "latitude": 13.3386,
        "longitude": 79.44489
      },
      {
        "name": "Pallippatti",
        "latitude": 11.9399,
        "longitude": 78.40161
      },
      {
        "name": "Panruti",
        "latitude": 11.77662,
        "longitude": 79.55269
      },
      {
        "name": "Papanasam",
        "latitude": 10.92687,
        "longitude": 79.27056
      },
      {
        "name": "Papireddippatti",
        "latitude": 11.91774,
        "longitude": 78.36865
      },
      {
        "name": "Papparappatti",
        "latitude": 12.22086,
        "longitude": 78.0592
      },
      {
        "name": "Paramagudi",
        "latitude": 9.54633,
        "longitude": 78.5907
      },
      {
        "name": "Pattukkottai",
        "latitude": 10.42358,
        "longitude": 79.31949
      },
      {
        "name": "Pennadam",
        "latitude": 11.40389,
        "longitude": 79.24156
      },
      {
        "name": "Pennagaram",
        "latitude": 12.13433,
        "longitude": 77.89525
      },
      {
        "name": "Pennathur",
        "latitude": 12.24681,
        "longitude": 79.22592
      },
      {
        "name": "Peraiyur",
        "latitude": 9.73579,
        "longitude": 77.78955
      },
      {
        "name": "Perambalur",
        "latitude": 11.272,
        "longitude": 78.8738
      },
      {
        "name": "Peranamallur",
        "latitude": 12.57052,
        "longitude": 79.43332
      },
      {
        "name": "Peranampattu",
        "latitude": 12.9343,
        "longitude": 78.7189
      },
      {
        "name": "Peravurani",
        "latitude": 10.29035,
        "longitude": 79.20156
      },
      {
        "name": "Periyakulam",
        "latitude": 10.12268,
        "longitude": 77.54372
      },
      {
        "name": "Periyanayakkanpalaiyam",
        "latitude": 11.15255,
        "longitude": 76.95159
      },
      {
        "name": "Periyanegamam",
        "latitude": 10.74317,
        "longitude": 77.10296
      },
      {
        "name": "Periyapatti",
        "latitude": 10.75812,
        "longitude": 77.27087
      },
      {
        "name": "Periyapattinam",
        "latitude": 9.27263,
        "longitude": 78.90232
      },
      {
        "name": "Perundurai",
        "latitude": 11.27564,
        "longitude": 77.58794
      },
      {
        "name": "Perungudi",
        "latitude": 12.96095,
        "longitude": 80.24094
      },
      {
        "name": "Perur",
        "latitude": 10.97519,
        "longitude": 76.91292
      },
      {
        "name": "Pollachi",
        "latitude": 10.65825,
        "longitude": 77.0085
      },
      {
        "name": "Polur",
        "latitude": 12.51217,
        "longitude": 79.12405
      },
      {
        "name": "Ponnamaravati",
        "latitude": 10.28032,
        "longitude": 78.53601
      },
      {
        "name": "Ponneri",
        "latitude": 13.33868,
        "longitude": 80.19487
      },
      {
        "name": "Poonamalle",
        "latitude": 13.04888,
        "longitude": 80.11488
      },
      {
        "name": "Porur",
        "latitude": 13.03565,
        "longitude": 80.15821
      },
      {
        "name": "Pudukkottai",
        "latitude": 10.35,
        "longitude": 78.9
      },
      {
        "name": "Puduppatti",
        "latitude": 11.15217,
        "longitude": 78.21205
      },
      {
        "name": "Pudur",
        "latitude": 12.99801,
        "longitude": 79.14352
      },
      {
        "name": "Puduvayal",
        "latitude": 13.33015,
        "longitude": 80.14577
      },
      {
        "name": "Puliyangudi",
        "latitude": 9.17489,
        "longitude": 77.39799
      },
      {
        "name": "Puliyur",
        "latitude": 10.63375,
        "longitude": 78.84139
      },
      {
        "name": "Pullambadi",
        "latitude": 10.9411,
        "longitude": 78.91041
      },
      {
        "name": "Punjai Puliyampatti",
        "latitude": 11.35163,
        "longitude": 77.16671
      },
      {
        "name": "Rajapalaiyam",
        "latitude": 9.45296,
        "longitude": 77.55335
      },
      {
        "name": "Ramanathapuram",
        "latitude": 9.37158,
        "longitude": 78.83077
      },
      {
        "name": "Rameswaram",
        "latitude": 9.2885,
        "longitude": 79.31271
      },
      {
        "name": "Ranipet",
        "latitude": 12.9534749,
        "longitude": 79.2815916
      },
      {
        "name": "Rasipuram",
        "latitude": 11.46009,
        "longitude": 78.18635
      },
      {
        "name": "Saint Thomas Mount",
        "latitude": 13.00334,
        "longitude": 80.19614
      },
      {
        "name": "Salem",
        "latitude": 11.6537012,
        "longitude": 77.9982106
      },
      {
        "name": "Sathankulam",
        "latitude": 8.44164,
        "longitude": 77.91349
      },
      {
        "name": "Sathyamangalam",
        "latitude": 11.50526,
        "longitude": 77.23826
      },
      {
        "name": "Sattur",
        "latitude": 9.35592,
        "longitude": 77.92457
      },
      {
        "name": "Sayalkudi",
        "latitude": 9.16925,
        "longitude": 78.44702
      },
      {
        "name": "Seven Pagodas",
        "latitude": 12.62091,
        "longitude": 80.19331
      },
      {
        "name": "Sholinghur",
        "latitude": 13.1181,
        "longitude": 79.42025
      },
      {
        "name": "Singanallur",
        "latitude": 10.99898,
        "longitude": 77.03238
      },
      {
        "name": "Singapperumalkovil",
        "latitude": 12.75947,
        "longitude": 80.0075
      },
      {
        "name": "Sirkazhi",
        "latitude": 11.23725,
        "longitude": 79.73585
      },
      {
        "name": "Sirumugai",
        "latitude": 11.32137,
        "longitude": 77.00521
      },
      {
        "name": "Sivaganga",
        "latitude": 9.92762,
        "longitude": 78.53763
      },
      {
        "name": "Sivagiri",
        "latitude": 9.34461,
        "longitude": 77.42911
      },
      {
        "name": "Sivakasi",
        "latitude": 9.44999,
        "longitude": 77.79797
      },
      {
        "name": "Srimushnam",
        "latitude": 11.40118,
        "longitude": 79.40384
      },
      {
        "name": "Sriperumbudur",
        "latitude": 12.96763,
        "longitude": 79.94197
      },
      {
        "name": "Srivaikuntam",
        "latitude": 8.62931,
        "longitude": 77.91281
      },
      {
        "name": "Srivilliputhur",
        "latitude": 9.51272,
        "longitude": 77.63369
      },
      {
        "name": "Suchindram",
        "latitude": 8.15442,
        "longitude": 77.46704
      },
      {
        "name": "Sulur",
        "latitude": 11.02427,
        "longitude": 77.12565
      },
      {
        "name": "Surandai",
        "latitude": 8.97574,
        "longitude": 77.41923
      },
      {
        "name": "Swamimalai",
        "latitude": 10.95747,
        "longitude": 79.32931
      },
      {
        "name": "Tambaram",
        "latitude": 12.9246,
        "longitude": 80.12707
      },
      {
        "name": "Tanjore",
        "latitude": 10.78523,
        "longitude": 79.13909
      },
      {
        "name": "Taramangalam",
        "latitude": 11.69403,
        "longitude": 77.97035
      },
      {
        "name": "Tattayyangarpettai",
        "latitude": 11.12417,
        "longitude": 78.44916
      },
      {
        "name": "Thanjavur",
        "latitude": 10.64,
        "longitude": 79.22
      },
      {
        "name": "Tharangambadi",
        "latitude": 11.02764,
        "longitude": 79.85425
      },
      {
        "name": "Theni",
        "latitude": 9.85,
        "longitude": 77.42
      },
      {
        "name": "Thenkasi",
        "latitude": 8.96003,
        "longitude": 77.31525
      },
      {
        "name": "Thirukattupalli",
        "latitude": 10.84431,
        "longitude": 78.95647
      },
      {
        "name": "Thiruthani",
        "latitude": 13.17594,
        "longitude": 79.61637
      },
      {
        "name": "Thiruvaiyaru",
        "latitude": 10.88405,
        "longitude": 79.10362
      },
      {
        "name": "Thiruvallur",
        "latitude": 13.25,
        "longitude": 80
      },
      {
        "name": "Thiruvarur",
        "latitude": 10.77269,
        "longitude": 79.6368
      },
      {
        "name": "Thiruvidaimaruthur",
        "latitude": 10.99857,
        "longitude": 79.45227
      },
      {
        "name": "Thoothukudi",
        "latitude": 8.76735,
        "longitude": 78.13425
      },
      {
        "name": "Tindivanam",
        "latitude": 12.234,
        "longitude": 79.65551
      },
      {
        "name": "Tinnanur",
        "latitude": 13.11448,
        "longitude": 80.02713
      },
      {
        "name": "Tiruchchendur",
        "latitude": 8.49725,
        "longitude": 78.11906
      },
      {
        "name": "Tiruchengode",
        "latitude": 11.38016,
        "longitude": 77.89444
      },
      {
        "name": "Tiruchirappalli",
        "latitude": 10.97,
        "longitude": 78.65
      },
      {
        "name": "Tirukkoyilur",
        "latitude": 11.9662,
        "longitude": 79.20259
      },
      {
        "name": "Tirumullaivasal",
        "latitude": 11.23996,
        "longitude": 79.83705
      },
      {
        "name": "Tirunelveli",
        "latitude": 8.72742,
        "longitude": 77.6838
      },
      {
        "name": "Tirunelveli Kattabo",
        "latitude": 8.7927,
        "longitude": 77.57409
      },
      {
        "name": "Tiruppalaikudi",
        "latitude": 9.54606,
        "longitude": 78.91721
      },
      {
        "name": "Tirupparangunram",
        "latitude": 9.88151,
        "longitude": 78.07306
      },
      {
        "name": "Tiruppur",
        "latitude": 11.11541,
        "longitude": 77.35456
      },
      {
        "name": "Tiruppuvanam",
        "latitude": 9.82564,
        "longitude": 78.25795
      },
      {
        "name": "Tiruttangal",
        "latitude": 9.48333,
        "longitude": 77.83333
      },
      {
        "name": "Tiruvannamalai",
        "latitude": 12.51,
        "longitude": 79.09
      },
      {
        "name": "Tiruvottiyur",
        "latitude": 13.15823,
        "longitude": 80.30181
      },
      {
        "name": "Tisaiyanvilai",
        "latitude": 8.33702,
        "longitude": 77.86776
      },
      {
        "name": "Tondi",
        "latitude": 9.74173,
        "longitude": 79.01774
      },
      {
        "name": "Turaiyur",
        "latitude": 11.14968,
        "longitude": 78.5987
      },
      {
        "name": "Udangudi",
        "latitude": 8.42918,
        "longitude": 78.02968
      },
      {
        "name": "Udumalaippettai",
        "latitude": 10.58806,
        "longitude": 77.24779
      },
      {
        "name": "Uppiliyapuram",
        "latitude": 11.26356,
        "longitude": 78.5139
      },
      {
        "name": "Usilampatti",
        "latitude": 9.96936,
        "longitude": 77.78621
      },
      {
        "name": "Uttamapalaiyam",
        "latitude": 9.80701,
        "longitude": 77.32718
      },
      {
        "name": "Uttiramerur",
        "latitude": 12.61433,
        "longitude": 79.75748
      },
      {
        "name": "Uttukkuli",
        "latitude": 11.16892,
        "longitude": 77.45431
      },
      {
        "name": "V.S.K.Valasai (Dindigul-Dist.)",
        "latitude": 10.31549,
        "longitude": 78.15141
      },
      {
        "name": "Vadakku Valliyur",
        "latitude": 8.38286,
        "longitude": 77.61221
      },
      {
        "name": "Vadakku Viravanallur",
        "latitude": 8.69786,
        "longitude": 77.51916
      },
      {
        "name": "Vadamadurai",
        "latitude": 10.44081,
        "longitude": 78.09784
      },
      {
        "name": "Vadippatti",
        "latitude": 10.08481,
        "longitude": 77.96113
      },
      {
        "name": "Valangaiman",
        "latitude": 10.89012,
        "longitude": 79.39322
      },
      {
        "name": "Valavanur",
        "latitude": 11.92094,
        "longitude": 79.58239
      },
      {
        "name": "Vallam",
        "latitude": 10.71988,
        "longitude": 79.05981
      },
      {
        "name": "Valparai",
        "latitude": 10.32691,
        "longitude": 76.95116
      },
      {
        "name": "Vandalur",
        "latitude": 12.8924,
        "longitude": 80.08079
      },
      {
        "name": "Vandavasi",
        "latitude": 12.50429,
        "longitude": 79.60556
      },
      {
        "name": "Vaniyambadi",
        "latitude": 12.68162,
        "longitude": 78.62014
      },
      {
        "name": "Vasudevanallur",
        "latitude": 9.24171,
        "longitude": 77.41177
      },
      {
        "name": "Vattalkundu",
        "latitude": 10.16069,
        "longitude": 77.75883
      },
      {
        "name": "Vedaraniyam",
        "latitude": 10.37208,
        "longitude": 79.85095
      },
      {
        "name": "Vedasandur",
        "latitude": 10.53102,
        "longitude": 77.95019
      },
      {
        "name": "Velankanni",
        "latitude": 10.68333,
        "longitude": 79.83333
      },
      {
        "name": "Vellanur",
        "latitude": 13.15804,
        "longitude": 80.10634
      },
      {
        "name": "Vellore",
        "latitude": 12.86,
        "longitude": 79.035
      },
      {
        "name": "Velur",
        "latitude": 11.10825,
        "longitude": 78.00113
      },
      {
        "name": "Vengavasal",
        "latitude": 12.89911,
        "longitude": 80.169
      },
      {
        "name": "Vettaikkaranpudur",
        "latitude": 10.56207,
        "longitude": 76.91305
      },
      {
        "name": "Vettavalam",
        "latitude": 12.10769,
        "longitude": 79.24516
      },
      {
        "name": "Vijayapuri",
        "latitude": 11.2453,
        "longitude": 77.50066
      },
      {
        "name": "Vikravandi",
        "latitude": 12.0369,
        "longitude": 79.54595
      },
      {
        "name": "Vilattikulam",
        "latitude": 9.13227,
        "longitude": 78.16635
      },
      {
        "name": "Villupuram",
        "latitude": 11.99,
        "longitude": 79.37
      },
      {
        "name": "Viraganur",
        "latitude": 11.47613,
        "longitude": 78.73553
      },
      {
        "name": "Virudhunagar",
        "latitude": 9.45,
        "longitude": 77.92
      },
      {
        "name": "Vriddhachalam",
        "latitude": 11.5183,
        "longitude": 79.32411
      },
      {
        "name": "Walajapet",
        "latitude": 12.9251,
        "longitude": 79.36626
      },
      {
        "name": "Wallajahbad",
        "latitude": 12.79041,
        "longitude": 79.82358
      },
      {
        "name": "Wellington",
        "latitude": 11.36552,
        "longitude": 76.78442
      }
    ]
  },
  {
    "name": "Telangana",
    "kind": "state",
    "cities": [
      {
        "name": "Adilabad",
        "latitude": 19.5,
        "longitude": 78.5
      },
      {
        "name": "Alampur",
        "latitude": 15.87987,
        "longitude": 78.13352
      },
      {
        "name": "Andol",
        "latitude": 17.81458,
        "longitude": 78.07713
      },
      {
        "name": "Asifabad",
        "latitude": 19.35851,
        "longitude": 79.28415
      },
      {
        "name": "Balapur",
        "latitude": 17.31018,
        "longitude": 78.49969
      },
      {
        "name": "Banswada",
        "latitude": 18.37725,
        "longitude": 77.88007
      },
      {
        "name": "Bellampalli",
        "latitude": 19.05577,
        "longitude": 79.493
      },
      {
        "name": "Bhadrachalam",
        "latitude": 17.66846,
        "longitude": 80.88887
      },
      {
        "name": "Bhadradri Kothagudem",
        "latitude": 17.5546,
        "longitude": 80.61976
      },
      {
        "name": "Bhaisa",
        "latitude": 19.11285,
        "longitude": 77.96336
      },
      {
        "name": "Bhongir",
        "latitude": 17.51544,
        "longitude": 78.88563
      },
      {
        "name": "Bodhan",
        "latitude": 18.66208,
        "longitude": 77.88581
      },
      {
        "name": "Chandur",
        "latitude": 17.87455,
        "longitude": 78.10017
      },
      {
        "name": "Chatakonda",
        "latitude": 17.55303,
        "longitude": 80.6477
      },
      {
        "name": "Dasnapur",
        "latitude": 19.65399,
        "longitude": 78.51213
      },
      {
        "name": "Devarkonda",
        "latitude": 16.69186,
        "longitude": 78.92073
      },
      {
        "name": "Dornakal",
        "latitude": 17.44475,
        "longitude": 80.14905
      },
      {
        "name": "Farrukhnagar",
        "latitude": 17.07787,
        "longitude": 78.20339
      },
      {
        "name": "Gaddi Annaram",
        "latitude": 17.36687,
        "longitude": 78.5242
      },
      {
        "name": "Gadwal",
        "latitude": 16.23504,
        "longitude": 77.79556
      },
      {
        "name": "Ghatkesar",
        "latitude": 17.45081,
        "longitude": 78.68366
      },
      {
        "name": "Gopalur",
        "latitude": 16.6122,
        "longitude": 77.80728
      },
      {
        "name": "Gudur",
        "latitude": 17.49174,
        "longitude": 78.82302
      },
      {
        "name": "Hyderabad",
        "latitude": 17.38405,
        "longitude": 78.45636
      },
      {
        "name": "Jagtial",
        "latitude": 18.79473,
        "longitude": 78.91661
      },
      {
        "name": "Jangaon",
        "latitude": 17.72602,
        "longitude": 79.15236
      },
      {
        "name": "Jangoan",
        "latitude": 17.72943,
        "longitude": 79.16096
      },
      {
        "name": "Jayashankar Bhupalapally",
        "latitude": 18.19678,
        "longitude": 79.93976
      },
      {
        "name": "Jogulamba Gadwal",
        "latitude": 16.23401,
        "longitude": 77.80564
      },
      {
        "name": "Kagaznagar",
        "latitude": 19.33159,
        "longitude": 79.46605
      },
      {
        "name": "Kamareddi",
        "latitude": 18.32001,
        "longitude": 78.34177
      },
      {
        "name": "Kamareddy",
        "latitude": 18.32567,
        "longitude": 78.33416
      },
      {
        "name": "Karimnagar",
        "latitude": 18.33844,
        "longitude": 79.22938
      },
      {
        "name": "Khammam",
        "latitude": 17.5,
        "longitude": 80.33333
      },
      {
        "name": "Kodar",
        "latitude": 16.9985,
        "longitude": 79.9656
      },
      {
        "name": "Koratla",
        "latitude": 18.82154,
        "longitude": 78.71186
      },
      {
        "name": "Kothapet",
        "latitude": 19.35176,
        "longitude": 79.48323
      },
      {
        "name": "Kottagudem",
        "latitude": 17.55106,
        "longitude": 80.61779
      },
      {
        "name": "Kottapalli",
        "latitude": 18.49543,
        "longitude": 79.0943
      },
      {
        "name": "Kukatpalli",
        "latitude": 17.48486,
        "longitude": 78.41376
      },
      {
        "name": "Kyathampalle",
        "latitude": 19.66781,
        "longitude": 78.5289
      },
      {
        "name": "Lakshettipet",
        "latitude": 18.86667,
        "longitude": 79.21667
      },
      {
        "name": "Lal Bahadur Nagar",
        "latitude": 17.34769,
        "longitude": 78.55757
      },
      {
        "name": "Mahabubabad",
        "latitude": 17.6004,
        "longitude": 80.00543
      },
      {
        "name": "Mahbubnagar",
        "latitude": 16.63171,
        "longitude": 77.75556
      },
      {
        "name": "Malkajgiri",
        "latitude": 17.44781,
        "longitude": 78.52633
      },
      {
        "name": "Mancheral",
        "latitude": 18.87074,
        "longitude": 79.42863
      },
      {
        "name": "Mandamarri",
        "latitude": 18.96506,
        "longitude": 79.47475
      },
      {
        "name": "Manthani",
        "latitude": 18.65087,
        "longitude": 79.66501
      },
      {
        "name": "Manuguru",
        "latitude": 17.98102,
        "longitude": 80.7547
      },
      {
        "name": "Medak",
        "latitude": 17.75,
        "longitude": 78.25
      },
      {
        "name": "Medchal",
        "latitude": 17.62972,
        "longitude": 78.48139
      },
      {
        "name": "Medchal Malkajgiri",
        "latitude": 17.60644,
        "longitude": 78.54007
      },
      {
        "name": "Mirialguda",
        "latitude": 16.8722,
        "longitude": 79.56247
      },
      {
        "name": "Nagar Karnul",
        "latitude": 16.4821,
        "longitude": 78.32471
      },
      {
        "name": "Nalgonda",
        "latitude": 17.16667,
        "longitude": 79.5
      },
      {
        "name": "Narayanpet",
        "latitude": 16.74799,
        "longitude": 77.4954
      },
      {
        "name": "Narsingi",
        "latitude": 18.04468,
        "longitude": 78.42516
      },
      {
        "name": "Naspur",
        "latitude": 18.84577,
        "longitude": 79.46165
      },
      {
        "name": "Nirmal",
        "latitude": 19.09685,
        "longitude": 78.34407
      },
      {
        "name": "Nizamabad",
        "latitude": 18.75,
        "longitude": 78.25
      },
      {
        "name": "Paloncha",
        "latitude": 17.60184,
        "longitude": 80.70509
      },
      {
        "name": "Palwancha",
        "latitude": 17.58152,
        "longitude": 80.67651
      },
      {
        "name": "Patancheru",
        "latitude": 17.53334,
        "longitude": 78.2645
      },
      {
        "name": "Peddapalli",
        "latitude": 18.61357,
        "longitude": 79.37442
      },
      {
        "name": "Quthbullapur",
        "latitude": 17.50107,
        "longitude": 78.45818
      },
      {
        "name": "Rajanna Sircilla",
        "latitude": 18.38629,
        "longitude": 78.8156
      },
      {
        "name": "Ramagundam",
        "latitude": 18.755,
        "longitude": 79.474
      },
      {
        "name": "Ramgundam",
        "latitude": 18.80084,
        "longitude": 79.45206
      },
      {
        "name": "Rangareddi",
        "latitude": 17.27883,
        "longitude": 78.16844
      },
      {
        "name": "Sadaseopet",
        "latitude": 17.61925,
        "longitude": 77.95263
      },
      {
        "name": "Sangareddi",
        "latitude": 17.62477,
        "longitude": 78.08669
      },
      {
        "name": "Sathupalli",
        "latitude": 17.24968,
        "longitude": 80.86899
      },
      {
        "name": "Secunderabad",
        "latitude": 17.50427,
        "longitude": 78.54263
      },
      {
        "name": "Serilingampalle",
        "latitude": 17.49313,
        "longitude": 78.30196
      },
      {
        "name": "Siddipet",
        "latitude": 18.10483,
        "longitude": 78.84858
      },
      {
        "name": "Singapur",
        "latitude": 17.46982,
        "longitude": 78.12574
      },
      {
        "name": "Sirpur",
        "latitude": 19.47953,
        "longitude": 79.57558
      },
      {
        "name": "Sirsilla",
        "latitude": 18.38865,
        "longitude": 78.81048
      },
      {
        "name": "Sriramnagar",
        "latitude": 17.26652,
        "longitude": 78.25544
      },
      {
        "name": "Suriapet",
        "latitude": 17.14054,
        "longitude": 79.62045
      },
      {
        "name": "Tandur",
        "latitude": 17.24849,
        "longitude": 77.57698
      },
      {
        "name": "Uppal Kalan",
        "latitude": 17.40577,
        "longitude": 78.55911
      },
      {
        "name": "Vemalwada",
        "latitude": 18.46523,
        "longitude": 78.86894
      },
      {
        "name": "Vikarabad",
        "latitude": 17.3381,
        "longitude": 77.90441
      },
      {
        "name": "Wanparti",
        "latitude": 16.36738,
        "longitude": 78.06889
      },
      {
        "name": "Warangal",
        "latitude": 18,
        "longitude": 79.83333
      },
      {
        "name": "Yellandu",
        "latitude": 17.59064,
        "longitude": 80.32146
      },
      {
        "name": "Zahirabad",
        "latitude": 17.68138,
        "longitude": 77.60743
      }
    ]
  },
  {
    "name": "Tripura",
    "kind": "state",
    "cities": [
      {
        "name": "Agartala",
        "latitude": 23.83605,
        "longitude": 91.27939
      },
      {
        "name": "Amarpur",
        "latitude": 23.5257,
        "longitude": 91.65879
      },
      {
        "name": "Ambasa",
        "latitude": 23.936,
        "longitude": 91.85436
      },
      {
        "name": "Barjala",
        "latitude": 23.6182,
        "longitude": 91.35596
      },
      {
        "name": "Belonia",
        "latitude": 23.25178,
        "longitude": 91.45407
      },
      {
        "name": "Dhalai",
        "latitude": 23.84307,
        "longitude": 91.92591
      },
      {
        "name": "Dharmanagar",
        "latitude": 24.36667,
        "longitude": 92.16667
      },
      {
        "name": "Gomati",
        "latitude": 23.53399,
        "longitude": 91.48122
      },
      {
        "name": "Kailashahar",
        "latitude": 24.33199,
        "longitude": 92.00391
      },
      {
        "name": "Kamalpur",
        "latitude": 24.19593,
        "longitude": 91.83438
      },
      {
        "name": "Khowai",
        "latitude": 24.07964,
        "longitude": 91.59972
      },
      {
        "name": "North Tripura",
        "latitude": 24.1305,
        "longitude": 92.15552
      },
      {
        "name": "Ranir Bazar",
        "latitude": 23.83463,
        "longitude": 91.36614
      },
      {
        "name": "Sabrum",
        "latitude": 23.00153,
        "longitude": 91.72427
      },
      {
        "name": "Sonamura",
        "latitude": 23.47547,
        "longitude": 91.2659
      },
      {
        "name": "South Tripura",
        "latitude": 23.1671,
        "longitude": 91.60953
      },
      {
        "name": "Udaipur",
        "latitude": 23.53333,
        "longitude": 91.48333
      },
      {
        "name": "Unakoti",
        "latitude": 24.32781,
        "longitude": 92.00377
      },
      {
        "name": "West Tripura",
        "latitude": 23.91667,
        "longitude": 91.5
      }
    ]
  },
  {
    "name": "Uttar Pradesh",
    "kind": "state",
    "cities": [
      {
        "name": "Achhnera",
        "latitude": 27.17826,
        "longitude": 77.75674
      },
      {
        "name": "Afzalgarh",
        "latitude": 29.3937,
        "longitude": 78.67393
      },
      {
        "name": "Agra",
        "latitude": 27.18333,
        "longitude": 78.01667
      },
      {
        "name": "Ahraura",
        "latitude": 25.01579,
        "longitude": 83.03294
      },
      {
        "name": "Aidalpur",
        "latitude": 26.13333333,
        "longitude": 79.45
      },
      {
        "name": "Airwa",
        "latitude": 26.9,
        "longitude": 79.43333333
      },
      {
        "name": "Akbarpur",
        "latitude": 26.42953,
        "longitude": 82.53431
      },
      {
        "name": "Akola",
        "latitude": 27.06547,
        "longitude": 77.88084
      },
      {
        "name": "Aliganj",
        "latitude": 27.49358,
        "longitude": 79.17127
      },
      {
        "name": "Aligarh",
        "latitude": 27.83333,
        "longitude": 78.16667
      },
      {
        "name": "Allahabad",
        "latitude": 25.45,
        "longitude": 81.85
      },
      {
        "name": "Allahganj",
        "latitude": 27.5454,
        "longitude": 79.68715
      },
      {
        "name": "Amanpur",
        "latitude": 27.71222,
        "longitude": 78.73788
      },
      {
        "name": "Amauli",
        "latitude": 26.01666667,
        "longitude": 80.3
      },
      {
        "name": "Ambahta",
        "latitude": 29.85706,
        "longitude": 77.33583
      },
      {
        "name": "Ambedkar Nagar",
        "latitude": 26.40544,
        "longitude": 82.69762
      },
      {
        "name": "Amethi",
        "latitude": 28.01667,
        "longitude": 81.05
      },
      {
        "name": "Amroha",
        "latitude": 28.90314,
        "longitude": 78.46984
      },
      {
        "name": "Anandnagar",
        "latitude": 27.10062,
        "longitude": 83.27156
      },
      {
        "name": "Antu",
        "latitude": 26.05654,
        "longitude": 81.90267
      },
      {
        "name": "Anupshahr",
        "latitude": 28.35748,
        "longitude": 78.26914
      },
      {
        "name": "Aonla",
        "latitude": 28.27402,
        "longitude": 79.16521
      },
      {
        "name": "Araul",
        "latitude": 26.917,
        "longitude": 80.033
      },
      {
        "name": "Asalatganj",
        "latitude": 26.68333333,
        "longitude": 79.85
      },
      {
        "name": "Atarra",
        "latitude": 25.28618,
        "longitude": 80.57155
      },
      {
        "name": "Atrauli",
        "latitude": 28.02964,
        "longitude": 78.28571
      },
      {
        "name": "Atraulia",
        "latitude": 26.3333,
        "longitude": 82.94727
      },
      {
        "name": "Auraiya",
        "latitude": 26.64692,
        "longitude": 79.42858
      },
      {
        "name": "Auras",
        "latitude": 26.91414,
        "longitude": 80.50792
      },
      {
        "name": "Ayodhya",
        "latitude": 26.79909,
        "longitude": 82.2047
      },
      {
        "name": "Azamgarh",
        "latitude": 26.06832,
        "longitude": 83.18358
      },
      {
        "name": "Azizpur",
        "latitude": 26.97638889,
        "longitude": 79.22138889
      },
      {
        "name": "Baberu",
        "latitude": 25.54711,
        "longitude": 80.70443
      },
      {
        "name": "Babina",
        "latitude": 25.23947,
        "longitude": 78.47028
      },
      {
        "name": "Babrala",
        "latitude": 28.26419,
        "longitude": 78.4056
      },
      {
        "name": "Babugarh",
        "latitude": 28.72353,
        "longitude": 77.84677
      },
      {
        "name": "Bachhraon",
        "latitude": 28.92694,
        "longitude": 78.23456
      },
      {
        "name": "Bachhrawan",
        "latitude": 26.4709,
        "longitude": 81.1158
      },
      {
        "name": "Baghpat",
        "latitude": 28.95,
        "longitude": 77.2167
      },
      {
        "name": "Baghra",
        "latitude": 29.46666667,
        "longitude": 77.58333333
      },
      {
        "name": "Bah",
        "latitude": 26.86912,
        "longitude": 78.59385
      },
      {
        "name": "Baheri",
        "latitude": 28.77416,
        "longitude": 79.4974
      },
      {
        "name": "Bahjoi",
        "latitude": 28.39502,
        "longitude": 78.62659
      },
      {
        "name": "Bahraich",
        "latitude": 27.80021,
        "longitude": 81.51855
      },
      {
        "name": "Bahraigh",
        "latitude": 27.57429,
        "longitude": 81.59474
      },
      {
        "name": "Bahsuma",
        "latitude": 29.20063,
        "longitude": 77.97221
      },
      {
        "name": "Bahua",
        "latitude": 25.83942,
        "longitude": 80.62255
      },
      {
        "name": "Bajna",
        "latitude": 27.89793,
        "longitude": 77.67836
      },
      {
        "name": "Bakewar",
        "latitude": 26.66226,
        "longitude": 79.17625
      },
      {
        "name": "Baksar",
        "latitude": 28.76666667,
        "longitude": 78.01666667
      },
      {
        "name": "Balamau",
        "latitude": 27.16666667,
        "longitude": 80.35
      },
      {
        "name": "Baldeo",
        "latitude": 27.41666667,
        "longitude": 77.81666667
      },
      {
        "name": "Baldev",
        "latitude": 27.40684,
        "longitude": 77.82214
      },
      {
        "name": "Ballia",
        "latitude": 25.83333,
        "longitude": 84.16667
      },
      {
        "name": "Balrampur",
        "latitude": 27.43449,
        "longitude": 82.40281
      },
      {
        "name": "Banat",
        "latitude": 29.46355,
        "longitude": 77.35478
      },
      {
        "name": "Banbasa",
        "latitude": 28.99132,
        "longitude": 80.07608
      },
      {
        "name": "Banda",
        "latitude": 25.5,
        "longitude": 80.5
      },
      {
        "name": "Bangarmau",
        "latitude": 26.8912,
        "longitude": 80.21149
      },
      {
        "name": "Bansdih",
        "latitude": 25.88377,
        "longitude": 84.21827
      },
      {
        "name": "Bansgaon",
        "latitude": 26.55032,
        "longitude": 83.34503
      },
      {
        "name": "Bansi",
        "latitude": 27.17749,
        "longitude": 82.93442
      },
      {
        "name": "Banthra",
        "latitude": 27.9172,
        "longitude": 79.8174
      },
      {
        "name": "Bara Banki",
        "latitude": 26.93864,
        "longitude": 81.3274
      },
      {
        "name": "Baragaon",
        "latitude": 25.47554,
        "longitude": 78.71224
      },
      {
        "name": "Baraut",
        "latitude": 29.10199,
        "longitude": 77.26334
      },
      {
        "name": "Bareilly",
        "latitude": 28.41667,
        "longitude": 79.38333
      },
      {
        "name": "Barhalganj",
        "latitude": 26.28333333,
        "longitude": 83.5
      },
      {
        "name": "Barkhera",
        "latitude": 28.45,
        "longitude": 79.8
      },
      {
        "name": "Barkhera Kalan",
        "latitude": 28.45209,
        "longitude": 79.80655
      },
      {
        "name": "Barokhar",
        "latitude": 24.91666667,
        "longitude": 81.96666667
      },
      {
        "name": "Barsana",
        "latitude": 27.64802,
        "longitude": 77.3764
      },
      {
        "name": "Barwar (Lakhimpur Kheri)",
        "latitude": 25.50583333,
        "longitude": 79.13972222
      },
      {
        "name": "Basti",
        "latitude": 26.82816,
        "longitude": 82.77924
      },
      {
        "name": "Behat",
        "latitude": 30.1718,
        "longitude": 77.6139
      },
      {
        "name": "Bela",
        "latitude": 25.92058,
        "longitude": 81.99629
      },
      {
        "name": "Belthara",
        "latitude": 26.12694444,
        "longitude": 83.89138889
      },
      {
        "name": "Beniganj",
        "latitude": 27.29293,
        "longitude": 80.44364
      },
      {
        "name": "Beswan",
        "latitude": 27.63792,
        "longitude": 77.88019
      },
      {
        "name": "Bewar",
        "latitude": 27.21869,
        "longitude": 79.29761
      },
      {
        "name": "Bhadarsa",
        "latitude": 26.66027778,
        "longitude": 82.12416667
      },
      {
        "name": "Bhadohi",
        "latitude": 25.39526,
        "longitude": 82.5703
      },
      {
        "name": "Bhagwantnagar",
        "latitude": 26.22383,
        "longitude": 80.7575
      },
      {
        "name": "Bharatpura",
        "latitude": 25.23333333,
        "longitude": 78.96666667
      },
      {
        "name": "Bhargain",
        "latitude": 27.615,
        "longitude": 79.14416667
      },
      {
        "name": "Bharthana",
        "latitude": 26.75231,
        "longitude": 79.2218
      },
      {
        "name": "Bharwari",
        "latitude": 25.56078,
        "longitude": 81.49164
      },
      {
        "name": "Bhaupur",
        "latitude": 26.91666667,
        "longitude": 79.21666667
      },
      {
        "name": "Bhimtal",
        "latitude": 29.34444444,
        "longitude": 79.56305556
      },
      {
        "name": "Bhinga",
        "latitude": 27.70283,
        "longitude": 81.9343
      },
      {
        "name": "Bhognipur",
        "latitude": 26.24,
        "longitude": 79.8
      },
      {
        "name": "Bhongaon",
        "latitude": 27.25515,
        "longitude": 79.18118
      },
      {
        "name": "Bidhnu",
        "latitude": 26.33333333,
        "longitude": 80.28333333
      },
      {
        "name": "Bidhuna",
        "latitude": 26.80172,
        "longitude": 79.50829
      },
      {
        "name": "Bighapur",
        "latitude": 26.35,
        "longitude": 80.68
      },
      {
        "name": "Bighapur Khurd",
        "latitude": 26.34734,
        "longitude": 80.65698
      },
      {
        "name": "Bijnor",
        "latitude": 29.41667,
        "longitude": 78.51667
      },
      {
        "name": "Bikapur",
        "latitude": 26.59534,
        "longitude": 82.13272
      },
      {
        "name": "Bilari",
        "latitude": 28.62146,
        "longitude": 78.80361
      },
      {
        "name": "Bilariaganj",
        "latitude": 26.19593,
        "longitude": 83.2269
      },
      {
        "name": "Bilaspur",
        "latitude": 28.88655,
        "longitude": 79.2703
      },
      {
        "name": "Bilgram",
        "latitude": 27.17509,
        "longitude": 80.03201
      },
      {
        "name": "Bilhaur",
        "latitude": 26.84345,
        "longitude": 80.06388
      },
      {
        "name": "Bilsanda",
        "latitude": 28.24341,
        "longitude": 79.95135
      },
      {
        "name": "Bilsi",
        "latitude": 28.12941,
        "longitude": 78.9109
      },
      {
        "name": "Bilthra",
        "latitude": 26.12705,
        "longitude": 83.89148
      },
      {
        "name": "Binauli",
        "latitude": 29.09416667,
        "longitude": 77.40083333
      },
      {
        "name": "Binaur",
        "latitude": 26.38333333,
        "longitude": 80.16666667
      },
      {
        "name": "Bindki",
        "latitude": 26.03613,
        "longitude": 80.57617
      },
      {
        "name": "Birdpur",
        "latitude": 27.3833,
        "longitude": 83.1167
      },
      {
        "name": "Birpur",
        "latitude": 26.53,
        "longitude": 86.25
      },
      {
        "name": "Bisalpur",
        "latitude": 28.29253,
        "longitude": 79.80472
      },
      {
        "name": "Bisanda Buzurg",
        "latitude": 25.41666667,
        "longitude": 80.61666667
      },
      {
        "name": "Bisauli",
        "latitude": 28.30772,
        "longitude": 78.93678
      },
      {
        "name": "Bisenda Buzurg",
        "latitude": 25.4035,
        "longitude": 80.61889
      },
      {
        "name": "Bishunpur Urf Maharajganj",
        "latitude": 26.25914,
        "longitude": 83.11643
      },
      {
        "name": "Biswan",
        "latitude": 27.49581,
        "longitude": 80.99618
      },
      {
        "name": "Bithur",
        "latitude": 26.60664,
        "longitude": 80.27098
      },
      {
        "name": "Budaun",
        "latitude": 28.11667,
        "longitude": 78.98333
      },
      {
        "name": "Budhana",
        "latitude": 29.28805,
        "longitude": 77.47534
      },
      {
        "name": "Bulandshahr",
        "latitude": 28.41667,
        "longitude": 77.83333
      },
      {
        "name": "Captainganj",
        "latitude": 26.9264,
        "longitude": 83.71334
      },
      {
        "name": "Chail",
        "latitude": 25.42654,
        "longitude": 81.63198
      },
      {
        "name": "Chakia",
        "latitude": 25.04891,
        "longitude": 83.22155
      },
      {
        "name": "Chandauli",
        "latitude": 25.25803,
        "longitude": 83.26825
      },
      {
        "name": "Chandauli District",
        "latitude": 25.26134,
        "longitude": 83.26408
      },
      {
        "name": "Chandausi",
        "latitude": 28.45,
        "longitude": 78.77
      },
      {
        "name": "Chandpur",
        "latitude": 29.13489,
        "longitude": 78.27187
      },
      {
        "name": "Chanduasi",
        "latitude": 28.45178,
        "longitude": 78.78277
      },
      {
        "name": "Charkhari",
        "latitude": 25.40304,
        "longitude": 79.74877
      },
      {
        "name": "Charthawal",
        "latitude": 29.54687,
        "longitude": 77.59438
      },
      {
        "name": "Chhaprauli",
        "latitude": 29.20989,
        "longitude": 77.17454
      },
      {
        "name": "Chharra",
        "latitude": 27.9247,
        "longitude": 78.40102
      },
      {
        "name": "Chhata",
        "latitude": 27.72374,
        "longitude": 77.5081
      },
      {
        "name": "Chhibramau",
        "latitude": 27.14872,
        "longitude": 79.50078
      },
      {
        "name": "Chhitauni",
        "latitude": 27.11666667,
        "longitude": 83.98333333
      },
      {
        "name": "Chhutmalpur",
        "latitude": 30.03209,
        "longitude": 77.75329
      },
      {
        "name": "Chillupar",
        "latitude": 26.28221,
        "longitude": 83.5064
      },
      {
        "name": "Chirgaon",
        "latitude": 25.57198,
        "longitude": 78.81432
      },
      {
        "name": "Chitrakoot",
        "latitude": 25.20511,
        "longitude": 81.08962
      },
      {
        "name": "Chitrakoot Dham",
        "latitude": 25.2,
        "longitude": 80.9
      },
      {
        "name": "Chopan",
        "latitude": 24.51954,
        "longitude": 83.02287
      },
      {
        "name": "Chunar",
        "latitude": 25.12776,
        "longitude": 82.8821
      },
      {
        "name": "Churk",
        "latitude": 24.65,
        "longitude": 83.1
      },
      {
        "name": "Colonelganj",
        "latitude": 27.13432,
        "longitude": 81.69868
      },
      {
        "name": "Dadri",
        "latitude": 28.55257,
        "longitude": 77.55403
      },
      {
        "name": "Dalmau",
        "latitude": 26.06477,
        "longitude": 81.0298
      },
      {
        "name": "Dankaur",
        "latitude": 28.35121,
        "longitude": 77.55508
      },
      {
        "name": "Daraganj",
        "latitude": 25.43333333,
        "longitude": 81.88333333
      },
      {
        "name": "Daranagar",
        "latitude": 25.6816208,
        "longitude": 81.3497579
      },
      {
        "name": "Dasna",
        "latitude": 28.67736,
        "longitude": 77.52252
      },
      {
        "name": "Dataganj",
        "latitude": 28.0253,
        "longitude": 79.40819
      },
      {
        "name": "Daurala",
        "latitude": 29.11344,
        "longitude": 77.70467
      },
      {
        "name": "Dayal Bagh",
        "latitude": 27.22122,
        "longitude": 78.01095
      },
      {
        "name": "Deoband",
        "latitude": 29.69505,
        "longitude": 77.67964
      },
      {
        "name": "Deogarh",
        "latitude": 24.526,
        "longitude": 78.238
      },
      {
        "name": "Deoranian",
        "latitude": 28.62989,
        "longitude": 79.47648
      },
      {
        "name": "Deoria",
        "latitude": 26.66667,
        "longitude": 83.75
      },
      {
        "name": "Derapur",
        "latitude": 26.41666667,
        "longitude": 79.8
      },
      {
        "name": "Dewa",
        "latitude": 27.03621,
        "longitude": 81.16692
      },
      {
        "name": "Dhampur",
        "latitude": 29.30883,
        "longitude": 78.51083
      },
      {
        "name": "Dhanaura",
        "latitude": 28.95912,
        "longitude": 78.25629
      },
      {
        "name": "Dhanghata",
        "latitude": 26.55419444,
        "longitude": 83.00806111
      },
      {
        "name": "Dharau",
        "latitude": 26.38333333,
        "longitude": 79.96666667
      },
      {
        "name": "Dhaurahra",
        "latitude": 27.99814,
        "longitude": 81.08975
      },
      {
        "name": "Dibai",
        "latitude": 28.20849,
        "longitude": 78.26173
      },
      {
        "name": "Divrasai",
        "latitude": 26.819,
        "longitude": 79.149
      },
      {
        "name": "Dohrighat",
        "latitude": 26.27217,
        "longitude": 83.50916
      },
      {
        "name": "Domariaganj",
        "latitude": 27.22,
        "longitude": 82.67
      },
      {
        "name": "Dostpur",
        "latitude": 26.27486,
        "longitude": 82.47091
      },
      {
        "name": "Dudhi",
        "latitude": 24.21357,
        "longitude": 83.24067
      },
      {
        "name": "Etah",
        "latitude": 27.5,
        "longitude": 78.75
      },
      {
        "name": "Etawah",
        "latitude": 26.75,
        "longitude": 79.25
      },
      {
        "name": "Etmadpur",
        "latitude": 27.23971944,
        "longitude": 78.2
      },
      {
        "name": "Faizabad",
        "latitude": 26.75,
        "longitude": 82
      },
      {
        "name": "Farah",
        "latitude": 27.32081,
        "longitude": 77.76185
      },
      {
        "name": "Faridnagar",
        "latitude": 28.76923,
        "longitude": 77.62934
      },
      {
        "name": "Faridpur",
        "latitude": 28.20997,
        "longitude": 79.54149
      },
      {
        "name": "Farrukhabad",
        "latitude": 27.5,
        "longitude": 79.5
      },
      {
        "name": "Fatehabad",
        "latitude": 27.02645,
        "longitude": 78.3027
      },
      {
        "name": "Fatehganj West",
        "latitude": 28.4662,
        "longitude": 79.30657
      },
      {
        "name": "Fatehgarh",
        "latitude": 27.36409,
        "longitude": 79.63111
      },
      {
        "name": "Fatehpur",
        "latitude": 25.75,
        "longitude": 80.75
      },
      {
        "name": "Fatehpur (Barabanki)",
        "latitude": 27.17,
        "longitude": 81.22
      },
      {
        "name": "Fatehpur Chaurasi",
        "latitude": 26.78925,
        "longitude": 80.26547
      },
      {
        "name": "Fatehpur Sikri",
        "latitude": 27.0937,
        "longitude": 77.66003
      },
      {
        "name": "Firozabad",
        "latitude": 27.20072,
        "longitude": 78.42867
      },
      {
        "name": "Fyzabad",
        "latitude": 26.77549,
        "longitude": 82.15018
      },
      {
        "name": "Gahlon",
        "latitude": 26.53333333,
        "longitude": 79.96666667
      },
      {
        "name": "Gahmar",
        "latitude": 25.497,
        "longitude": 83.822
      },
      {
        "name": "Gaini",
        "latitude": 28.21,
        "longitude": 79.16
      },
      {
        "name": "Gajraula",
        "latitude": 28.8457,
        "longitude": 78.2396
      },
      {
        "name": "Gangoh",
        "latitude": 29.78004,
        "longitude": 77.26346
      },
      {
        "name": "Ganj Dundawara",
        "latitude": 27.73277778,
        "longitude": 78.94166667
      },
      {
        "name": "Ganj Dundwara",
        "latitude": 27.73308,
        "longitude": 78.94119
      },
      {
        "name": "Ganj Muradabad",
        "latitude": 26.95733,
        "longitude": 80.184
      },
      {
        "name": "Garautha",
        "latitude": 25.5719,
        "longitude": 79.29764
      },
      {
        "name": "Garhi Pukhta",
        "latitude": 29.5498,
        "longitude": 77.30881
      },
      {
        "name": "Garhmuktesar",
        "latitude": 28.78732,
        "longitude": 78.10214
      },
      {
        "name": "Garhwa",
        "latitude": 24.18,
        "longitude": 83.82
      },
      {
        "name": "Gauriganj",
        "latitude": 26.206,
        "longitude": 81.69
      },
      {
        "name": "Gautam Buddha Nagar",
        "latitude": 28.35898,
        "longitude": 77.55076
      },
      {
        "name": "Gawan",
        "latitude": 28.41969,
        "longitude": 78.35186
      },
      {
        "name": "Ghatampur",
        "latitude": 26.15272,
        "longitude": 80.16803
      },
      {
        "name": "Ghaziabad",
        "latitude": 28.66535,
        "longitude": 77.43915
      },
      {
        "name": "Ghazipur",
        "latitude": 25.58333,
        "longitude": 83.58526
      },
      {
        "name": "Ghiror",
        "latitude": 27.18912,
        "longitude": 78.79312
      },
      {
        "name": "Ghorawal",
        "latitude": 24.75459,
        "longitude": 82.77965
      },
      {
        "name": "Ghosi",
        "latitude": 26.10587,
        "longitude": 83.5393
      },
      {
        "name": "Gohand",
        "latitude": 25.69871,
        "longitude": 79.54567
      },
      {
        "name": "Gokul",
        "latitude": 27.43926,
        "longitude": 77.72019
      },
      {
        "name": "Gola Bazar",
        "latitude": 26.3446,
        "longitude": 83.35303
      },
      {
        "name": "Gola Gokarannath",
        "latitude": 28.07837,
        "longitude": 80.47054
      },
      {
        "name": "Gonda",
        "latitude": 27.18581,
        "longitude": 81.96693
      },
      {
        "name": "Gonda (Aligarh)",
        "latitude": 27.8333,
        "longitude": 77.8833
      },
      {
        "name": "Gonda City",
        "latitude": 27.13181,
        "longitude": 81.95332
      },
      {
        "name": "Gopamau",
        "latitude": 27.53468,
        "longitude": 80.28507
      },
      {
        "name": "Gorakhpur",
        "latitude": 26.91667,
        "longitude": 83.25
      },
      {
        "name": "Gosainganj",
        "latitude": 26.77,
        "longitude": 81.12
      },
      {
        "name": "Goshainganj",
        "latitude": 26.57115,
        "longitude": 82.38091
      },
      {
        "name": "Govardhan",
        "latitude": 27.49658,
        "longitude": 77.46263
      },
      {
        "name": "Greater Noida",
        "latitude": 28.49615,
        "longitude": 77.53601
      },
      {
        "name": "Gulaothi",
        "latitude": 28.58938,
        "longitude": 77.79318
      },
      {
        "name": "Gunnaur",
        "latitude": 28.23995,
        "longitude": 78.43994
      },
      {
        "name": "Gursahaiganj",
        "latitude": 27.11518,
        "longitude": 79.73174
      },
      {
        "name": "Gursarai",
        "latitude": 25.61677,
        "longitude": 79.18053
      },
      {
        "name": "Gyanpur",
        "latitude": 25.33268,
        "longitude": 82.46637
      },
      {
        "name": "Haldaur",
        "latitude": 29.28988,
        "longitude": 78.28437
      },
      {
        "name": "Hamirpur",
        "latitude": 25.75,
        "longitude": 80
      },
      {
        "name": "Handia",
        "latitude": 25.36379,
        "longitude": 82.18655
      },
      {
        "name": "Hapur",
        "latitude": 28.72985,
        "longitude": 77.78068
      },
      {
        "name": "Haraipur",
        "latitude": 26.9,
        "longitude": 79.7
      },
      {
        "name": "Haraiya",
        "latitude": 26.79477,
        "longitude": 82.46436
      },
      {
        "name": "Harchandpur",
        "latitude": 26.36,
        "longitude": 81.17
      },
      {
        "name": "Hardoi",
        "latitude": 27.41667,
        "longitude": 80.25
      },
      {
        "name": "Harduaganj",
        "latitude": 27.94361,
        "longitude": 78.15789
      },
      {
        "name": "Hasanpur",
        "latitude": 28.72249,
        "longitude": 78.28436
      },
      {
        "name": "Hastinapur",
        "latitude": 29.16042,
        "longitude": 78.00762
      },
      {
        "name": "Hata",
        "latitude": 26.7412,
        "longitude": 83.74526
      },
      {
        "name": "Hata (India)",
        "latitude": 26.75,
        "longitude": 83.74
      },
      {
        "name": "Hathras",
        "latitude": 27.59551,
        "longitude": 78.05201
      },
      {
        "name": "Hulas",
        "latitude": 29.69027778,
        "longitude": 77.36027778
      },
      {
        "name": "Ibrahimpur",
        "latitude": 26.01027778,
        "longitude": 83.16861111
      },
      {
        "name": "Iglas",
        "latitude": 27.711,
        "longitude": 77.93967
      },
      {
        "name": "Ikauna",
        "latitude": 27.53097,
        "longitude": 81.96917
      },
      {
        "name": "Indergarh",
        "latitude": 26.93521,
        "longitude": 79.6712
      },
      {
        "name": "Indragarh",
        "latitude": 29.91299444,
        "longitude": 74.32284167
      },
      {
        "name": "Islamnagar",
        "latitude": 28.32896,
        "longitude": 78.72524
      },
      {
        "name": "Islamnagar (Badaun)",
        "latitude": 28.33,
        "longitude": 78.72
      },
      {
        "name": "Itaunja",
        "latitude": 27.08347,
        "longitude": 80.89672
      },
      {
        "name": "Itimadpur",
        "latitude": 27.23541,
        "longitude": 78.19829
      },
      {
        "name": "Jagdishpur",
        "latitude": 26.74967,
        "longitude": 80.5451
      },
      {
        "name": "Jagnair",
        "latitude": 26.8636,
        "longitude": 77.60231
      },
      {
        "name": "Jahanabad",
        "latitude": 28.63025,
        "longitude": 79.71818
      },
      {
        "name": "Jahanabad (Pilibhit)",
        "latitude": 28.6333,
        "longitude": 79.8
      },
      {
        "name": "Jahangirabad",
        "latitude": 28.40549,
        "longitude": 78.10588
      },
      {
        "name": "Jahangirpur",
        "latitude": 28.17919,
        "longitude": 77.70501
      },
      {
        "name": "Jainpur",
        "latitude": 26.15389,
        "longitude": 83.33505
      },
      {
        "name": "Jais",
        "latitude": 26.2649,
        "longitude": 81.54855
      },
      {
        "name": "Jalalabad",
        "latitude": 29.61853,
        "longitude": 77.43908
      },
      {
        "name": "Jalali",
        "latitude": 27.8668,
        "longitude": 78.25267
      },
      {
        "name": "Jalalpur",
        "latitude": 26.31162,
        "longitude": 82.73859
      },
      {
        "name": "Jalaun",
        "latitude": 26,
        "longitude": 79.5
      },
      {
        "name": "Jalesar",
        "latitude": 27.47315,
        "longitude": 78.3031
      },
      {
        "name": "Janghai",
        "latitude": 25.55,
        "longitude": 82.31666667
      },
      {
        "name": "Jansath",
        "latitude": 29.32502,
        "longitude": 77.85044
      },
      {
        "name": "Jarwa",
        "latitude": 27.65,
        "longitude": 82.51666667
      },
      {
        "name": "Jarwal",
        "latitude": 27.1629,
        "longitude": 81.54179
      },
      {
        "name": "Jasrana",
        "latitude": 27.23587,
        "longitude": 78.65244
      },
      {
        "name": "Jaswantnagar",
        "latitude": 26.88271,
        "longitude": 78.90256
      },
      {
        "name": "Jaunpur",
        "latitude": 25.75,
        "longitude": 82.75
      },
      {
        "name": "Jewar",
        "latitude": 28.122,
        "longitude": 77.55734
      },
      {
        "name": "Jhajhar",
        "latitude": 27.86,
        "longitude": 75.28
      },
      {
        "name": "Jhalu",
        "latitude": 29.33609,
        "longitude": 78.22608
      },
      {
        "name": "Jhansi",
        "latitude": 25.5,
        "longitude": 78.5
      },
      {
        "name": "Jhinjhak",
        "latitude": 26.56093,
        "longitude": 79.73423
      },
      {
        "name": "Jhinjhana",
        "latitude": 29.52118,
        "longitude": 77.2247
      },
      {
        "name": "Jhusi",
        "latitude": 25.43745,
        "longitude": 81.9055
      },
      {
        "name": "Jiyanpur",
        "latitude": 26.15,
        "longitude": 83.33
      },
      {
        "name": "Jyotiba Phule Nagar",
        "latitude": 28.7716,
        "longitude": 78.33871
      },
      {
        "name": "Kabrai",
        "latitude": 25.40281,
        "longitude": 79.9997
      },
      {
        "name": "Kachhwa",
        "latitude": 25.20615,
        "longitude": 82.71442
      },
      {
        "name": "Kadaura",
        "latitude": 25.98537,
        "longitude": 79.83842
      },
      {
        "name": "Kadipur",
        "latitude": 26.16779,
        "longitude": 82.37028
      },
      {
        "name": "Kagarol",
        "latitude": 27.01666667,
        "longitude": 77.85
      },
      {
        "name": "Kaimganj",
        "latitude": 27.55441,
        "longitude": 79.33525
      },
      {
        "name": "Kairana",
        "latitude": 29.39541,
        "longitude": 77.2054
      },
      {
        "name": "Kakori",
        "latitude": 26.868,
        "longitude": 80.7857
      },
      {
        "name": "Kakrala",
        "latitude": 27.89269,
        "longitude": 79.1945
      },
      {
        "name": "Kalinagar",
        "latitude": 28.62019,
        "longitude": 80.08152
      },
      {
        "name": "Kalpi",
        "latitude": 26.11667,
        "longitude": 79.73333
      },
      {
        "name": "Kalyanpur",
        "latitude": 26.51912222,
        "longitude": 80.24980556
      },
      {
        "name": "Kamalganj",
        "latitude": 27.26181,
        "longitude": 79.63134
      },
      {
        "name": "Kampil",
        "latitude": 27.61268,
        "longitude": 79.27687
      },
      {
        "name": "Kandhla",
        "latitude": 29.32104,
        "longitude": 77.27101
      },
      {
        "name": "Kannauj",
        "latitude": 27.0177,
        "longitude": 79.67846
      },
      {
        "name": "Kanpur",
        "latitude": 26.46523,
        "longitude": 80.34975
      },
      {
        "name": "Kanpur Dehat",
        "latitude": 26.41506,
        "longitude": 79.98957
      },
      {
        "name": "Kant",
        "latitude": 27.81049,
        "longitude": 79.79185
      },
      {
        "name": "Kanth",
        "latitude": 29.05939,
        "longitude": 78.62951
      },
      {
        "name": "Kaptanganj",
        "latitude": 26.93,
        "longitude": 83.72
      },
      {
        "name": "Kara",
        "latitude": 25.7,
        "longitude": 81.35
      },
      {
        "name": "Karari",
        "latitude": 25.45241,
        "longitude": 81.42675
      },
      {
        "name": "Karbigwan",
        "latitude": 26.2,
        "longitude": 80.5
      },
      {
        "name": "Karchana",
        "latitude": 25.28,
        "longitude": 81.93
      },
      {
        "name": "Karhal",
        "latitude": 27.00089,
        "longitude": 78.93935
      },
      {
        "name": "Kasganj",
        "latitude": 27.80882,
        "longitude": 78.64579
      },
      {
        "name": "Katra",
        "latitude": 27.50871,
        "longitude": 82.02636
      },
      {
        "name": "Kausani",
        "latitude": 29.84305556,
        "longitude": 79.60333333
      },
      {
        "name": "Kaushambi District",
        "latitude": 25.53074,
        "longitude": 81.37729
      },
      {
        "name": "Kemri",
        "latitude": 28.80673,
        "longitude": 79.2048
      },
      {
        "name": "Khada",
        "latitude": 27.18333,
        "longitude": 83.88333
      },
      {
        "name": "Khaga",
        "latitude": 25.77215,
        "longitude": 81.10393
      },
      {
        "name": "Khailar",
        "latitude": 25.35,
        "longitude": 78.53
      },
      {
        "name": "Khair",
        "latitude": 27.94195,
        "longitude": 77.84243
      },
      {
        "name": "Khairabad",
        "latitude": 27.52698,
        "longitude": 80.75461
      },
      {
        "name": "Khalilabad",
        "latitude": 26.77268,
        "longitude": 83.07179
      },
      {
        "name": "Khanpur",
        "latitude": 28.53446,
        "longitude": 78.06546
      },
      {
        "name": "Kharela",
        "latitude": 25.54277,
        "longitude": 79.81235
      },
      {
        "name": "Khargupur",
        "latitude": 27.37611,
        "longitude": 81.9882
      },
      {
        "name": "Kharkhauda",
        "latitude": 28.83644,
        "longitude": 77.74159
      },
      {
        "name": "Khatauli",
        "latitude": 29.27844,
        "longitude": 77.73302
      },
      {
        "name": "Khekra",
        "latitude": 28.86586,
        "longitude": 77.2841
      },
      {
        "name": "Kheri",
        "latitude": 28.11667,
        "longitude": 80.71667
      },
      {
        "name": "Khudaganj",
        "latitude": 28.14607,
        "longitude": 79.71472
      },
      {
        "name": "Khurja",
        "latitude": 28.25382,
        "longitude": 77.85535
      },
      {
        "name": "Khutar",
        "latitude": 28.20307,
        "longitude": 80.27046
      },
      {
        "name": "Kirakat",
        "latitude": 25.63745,
        "longitude": 82.91596
      },
      {
        "name": "Kiraoli",
        "latitude": 27.13768,
        "longitude": 77.78516
      },
      {
        "name": "Kiratpur",
        "latitude": 29.50671,
        "longitude": 78.20613
      },
      {
        "name": "Kishanpur",
        "latitude": 25.64232,
        "longitude": 81.0227
      },
      {
        "name": "Kishanpur baral",
        "latitude": 29.2,
        "longitude": 77.28333333
      },
      {
        "name": "Kishni",
        "latitude": 27.02487,
        "longitude": 79.262
      },
      {
        "name": "Kithor",
        "latitude": 28.86684,
        "longitude": 77.93861
      },
      {
        "name": "Konch",
        "latitude": 25.99451,
        "longitude": 79.15127
      },
      {
        "name": "Kopaganj",
        "latitude": 26.01923,
        "longitude": 83.5663
      },
      {
        "name": "Kosi",
        "latitude": 27.79449,
        "longitude": 77.4368
      },
      {
        "name": "Kota",
        "latitude": 24.44643,
        "longitude": 83.13063
      },
      {
        "name": "Kotra",
        "latitude": 25.8077,
        "longitude": 79.30909
      },
      {
        "name": "Kuchesar",
        "latitude": 28.68333333,
        "longitude": 77.95
      },
      {
        "name": "Kudarkot",
        "latitude": 26.81666667,
        "longitude": 79.4
      },
      {
        "name": "Kulpahar",
        "latitude": 25.32007,
        "longitude": 79.63931
      },
      {
        "name": "Kunda",
        "latitude": 25.71702,
        "longitude": 81.51396
      },
      {
        "name": "Kundarkhi",
        "latitude": 28.68304,
        "longitude": 78.78559
      },
      {
        "name": "Kundarki",
        "latitude": 28.683,
        "longitude": 78.785
      },
      {
        "name": "Kurara",
        "latitude": 25.98046,
        "longitude": 79.98984
      },
      {
        "name": "Kushinagar",
        "latitude": 26.74028,
        "longitude": 83.88889
      },
      {
        "name": "Kusmara",
        "latitude": 27.11666667,
        "longitude": 79.28333333
      },
      {
        "name": "Kuthaund",
        "latitude": 26.36666667,
        "longitude": 79.41666667
      },
      {
        "name": "Laharpur",
        "latitude": 27.70827,
        "longitude": 80.90256
      },
      {
        "name": "Lakhimpur",
        "latitude": 27.94822,
        "longitude": 80.77935
      },
      {
        "name": "Lakhna",
        "latitude": 26.64822,
        "longitude": 79.1477
      },
      {
        "name": "Lalganj",
        "latitude": 25.93182,
        "longitude": 81.70478
      },
      {
        "name": "Lalitpur",
        "latitude": 24.5,
        "longitude": 78.5
      },
      {
        "name": "Lambhua",
        "latitude": 26.15,
        "longitude": 82.21
      },
      {
        "name": "Lar",
        "latitude": 26.20394,
        "longitude": 83.96906
      },
      {
        "name": "Lawar",
        "latitude": 29.11666667,
        "longitude": 77.76666667
      },
      {
        "name": "Lawar Khas",
        "latitude": 29.11091,
        "longitude": 77.77767
      },
      {
        "name": "Loni",
        "latitude": 28.75143,
        "longitude": 77.29023
      },
      {
        "name": "Lucknow",
        "latitude": 26.83928,
        "longitude": 80.92313
      },
      {
        "name": "Lucknow District",
        "latitude": 26.75,
        "longitude": 81
      },
      {
        "name": "Machhali Shahar",
        "latitude": 25.68,
        "longitude": 82.42
      },
      {
        "name": "Machhlishahr",
        "latitude": 25.68564,
        "longitude": 82.41106
      },
      {
        "name": "Madhoganj",
        "latitude": 27.11807,
        "longitude": 80.14058
      },
      {
        "name": "Madhogarh",
        "latitude": 26.27522,
        "longitude": 79.1859
      },
      {
        "name": "Maghar",
        "latitude": 26.75586,
        "longitude": 83.12773
      },
      {
        "name": "Mahaban",
        "latitude": 27.43262,
        "longitude": 77.74338
      },
      {
        "name": "Maharajganj",
        "latitude": 27.16945,
        "longitude": 83.50667
      },
      {
        "name": "Mahmudabad",
        "latitude": 27.29191,
        "longitude": 81.11775
      },
      {
        "name": "Mahoba",
        "latitude": 25.2921,
        "longitude": 79.87242
      },
      {
        "name": "Maholi",
        "latitude": 27.66368,
        "longitude": 80.47371
      },
      {
        "name": "Mahrajganj",
        "latitude": 26.26666667,
        "longitude": 83.11666667
      },
      {
        "name": "Mahrajganj (Raebareli)",
        "latitude": 26.38333333,
        "longitude": 81.28333333
      },
      {
        "name": "Mahroni",
        "latitude": 24.58624,
        "longitude": 78.72771
      },
      {
        "name": "Mahul",
        "latitude": 26.13333333,
        "longitude": 82.81666667
      },
      {
        "name": "Mailani",
        "latitude": 28.29088,
        "longitude": 80.3438
      },
      {
        "name": "Mainpuri",
        "latitude": 27.16667,
        "longitude": 79
      },
      {
        "name": "Majhupur",
        "latitude": 27.03333333,
        "longitude": 79.41666667
      },
      {
        "name": "Makanpur",
        "latitude": 26.90222222,
        "longitude": 79.97805556
      },
      {
        "name": "Malasa",
        "latitude": 26.26755,
        "longitude": 79.94489
      },
      {
        "name": "Malihabad",
        "latitude": 26.92223,
        "longitude": 80.71078
      },
      {
        "name": "Mandawar",
        "latitude": 29.48655,
        "longitude": 78.12732
      },
      {
        "name": "Maniar",
        "latitude": 25.98546,
        "longitude": 84.17233
      },
      {
        "name": "Manikpur",
        "latitude": 25.06083,
        "longitude": 81.09961
      },
      {
        "name": "Manjhanpur",
        "latitude": 25.53046,
        "longitude": 81.37566
      },
      {
        "name": "Mankapur",
        "latitude": 27.05189,
        "longitude": 82.22961
      },
      {
        "name": "Marahra",
        "latitude": 27.7368,
        "longitude": 78.56891
      },
      {
        "name": "Mariahu",
        "latitude": 25.60404,
        "longitude": 82.60379
      },
      {
        "name": "Mataundh",
        "latitude": 25.43594,
        "longitude": 80.15653
      },
      {
        "name": "Mathura",
        "latitude": 27.63333,
        "longitude": 77.58333
      },
      {
        "name": "Mau",
        "latitude": 26.0294,
        "longitude": 83.50756
      },
      {
        "name": "Mau Aima",
        "latitude": 25.7,
        "longitude": 81.91666667
      },
      {
        "name": "Mau Aimma",
        "latitude": 25.69515,
        "longitude": 81.92336
      },
      {
        "name": "Maudaha",
        "latitude": 25.68312,
        "longitude": 80.11419
      },
      {
        "name": "Mauranwan",
        "latitude": 26.42876,
        "longitude": 80.88008
      },
      {
        "name": "Maurawan",
        "latitude": 26.43,
        "longitude": 80.88
      },
      {
        "name": "Mawana",
        "latitude": 29.10288,
        "longitude": 77.92199
      },
      {
        "name": "Mawar",
        "latitude": 26.30416667,
        "longitude": 79.92111111
      },
      {
        "name": "Meerut",
        "latitude": 28.91667,
        "longitude": 77.68333
      },
      {
        "name": "Mehdawal",
        "latitude": 26.98333333,
        "longitude": 83.11666667
      },
      {
        "name": "Mehnagar",
        "latitude": 25.87889,
        "longitude": 83.11611
      },
      {
        "name": "Mehndawal",
        "latitude": 26.97579,
        "longitude": 83.10995
      },
      {
        "name": "Milak",
        "latitude": 28.61031,
        "longitude": 79.16997
      },
      {
        "name": "Milkipur",
        "latitude": 26.6,
        "longitude": 81.91
      },
      {
        "name": "Miranpur",
        "latitude": 29.29026,
        "longitude": 77.94939
      },
      {
        "name": "Miranpur Katra",
        "latitude": 28.02963,
        "longitude": 79.66778
      },
      {
        "name": "Mirganj",
        "latitude": 28.54012,
        "longitude": 79.20817
      },
      {
        "name": "Mirzapur",
        "latitude": 25.1449,
        "longitude": 82.56534
      },
      {
        "name": "Misrikh",
        "latitude": 27.43137,
        "longitude": 80.53157
      },
      {
        "name": "Mohan",
        "latitude": 26.78008,
        "longitude": 80.67497
      },
      {
        "name": "Mohanpur",
        "latitude": 28.25261,
        "longitude": 80.24498
      },
      {
        "name": "Moradabad",
        "latitude": 28.8525,
        "longitude": 78.79703
      },
      {
        "name": "Moth",
        "latitude": 25.72595,
        "longitude": 78.95029
      },
      {
        "name": "Mubarakpur",
        "latitude": 26.08866,
        "longitude": 83.29088
      },
      {
        "name": "Mughal Sarai",
        "latitude": 25.28307,
        "longitude": 83.11968
      },
      {
        "name": "Muhammadabad",
        "latitude": 25.61907,
        "longitude": 83.75576
      },
      {
        "name": "Mukteshwar",
        "latitude": 29.4722,
        "longitude": 79.6479
      },
      {
        "name": "Mungra Badshahpur",
        "latitude": 25.65,
        "longitude": 82.18
      },
      {
        "name": "Munsyari",
        "latitude": 30.06741389,
        "longitude": 80.23856111
      },
      {
        "name": "Muradabad",
        "latitude": 28.83888889,
        "longitude": 78.77694444
      },
      {
        "name": "Muradnagar",
        "latitude": 28.78069,
        "longitude": 77.49865
      },
      {
        "name": "Mursan",
        "latitude": 27.57788,
        "longitude": 77.94091
      },
      {
        "name": "Musafir-Khana",
        "latitude": 26.37837,
        "longitude": 81.79607
      },
      {
        "name": "Musafirkhana",
        "latitude": 26.45,
        "longitude": 81.8
      },
      {
        "name": "Muzaffarnagar",
        "latitude": 29.45,
        "longitude": 77.58333
      },
      {
        "name": "Nadigaon",
        "latitude": 26.10784,
        "longitude": 79.02283
      },
      {
        "name": "Nagina",
        "latitude": 29.44433,
        "longitude": 78.43646
      },
      {
        "name": "Nagla",
        "latitude": 29.01,
        "longitude": 79.51
      },
      {
        "name": "Nagram",
        "latitude": 26.61872,
        "longitude": 81.14043
      },
      {
        "name": "Najibabad",
        "latitude": 29.61194,
        "longitude": 78.34274
      },
      {
        "name": "Nakur",
        "latitude": 29.91964,
        "longitude": 77.30438
      },
      {
        "name": "Nanauta",
        "latitude": 29.71215,
        "longitude": 77.41728
      },
      {
        "name": "Nandgaon",
        "latitude": 27.71102,
        "longitude": 77.38653
      },
      {
        "name": "Nanpara",
        "latitude": 27.86459,
        "longitude": 81.50036
      },
      {
        "name": "Narauli",
        "latitude": 28.48547,
        "longitude": 78.71484
      },
      {
        "name": "Naraura",
        "latitude": 28.20147,
        "longitude": 78.38723
      },
      {
        "name": "Narora",
        "latitude": 28.19666667,
        "longitude": 78.38138889
      },
      {
        "name": "Naugama",
        "latitude": 27.7,
        "longitude": 79.65
      },
      {
        "name": "Naurangpur",
        "latitude": 27.16666667,
        "longitude": 79.78333333
      },
      {
        "name": "Nautanwa",
        "latitude": 27.42752,
        "longitude": 83.41789
      },
      {
        "name": "Nawabganj",
        "latitude": 26.93129,
        "longitude": 81.19841
      },
      {
        "name": "Nawabganj (Barabanki)",
        "latitude": 26.94,
        "longitude": 81.19
      },
      {
        "name": "Nawabganj (Bareilly)",
        "latitude": 28.54,
        "longitude": 79.633
      },
      {
        "name": "Newara",
        "latitude": 27.76666667,
        "longitude": 79.28333333
      },
      {
        "name": "Nichlaul",
        "latitude": 27.31247,
        "longitude": 83.7253
      },
      {
        "name": "Nigoh",
        "latitude": 26.75,
        "longitude": 79.15
      },
      {
        "name": "Nihtaur",
        "latitude": 29.32416,
        "longitude": 78.38724
      },
      {
        "name": "Niwari",
        "latitude": 28.87611,
        "longitude": 77.5382
      },
      {
        "name": "Nizamabad",
        "latitude": 26.05295,
        "longitude": 83.05787
      },
      {
        "name": "Noida",
        "latitude": 28.58,
        "longitude": 77.33
      },
      {
        "name": "Nurpur",
        "latitude": 29.14956,
        "longitude": 78.4084
      },
      {
        "name": "Obra",
        "latitude": 24.41863,
        "longitude": 82.98797
      },
      {
        "name": "Orai",
        "latitude": 25.99023,
        "longitude": 79.45334
      },
      {
        "name": "Oran",
        "latitude": 25.36882,
        "longitude": 80.7423
      },
      {
        "name": "Pachperwa",
        "latitude": 27.51234,
        "longitude": 82.64297
      },
      {
        "name": "Padrauna",
        "latitude": 26.90403,
        "longitude": 83.98087
      },
      {
        "name": "Pahasu",
        "latitude": 28.1722,
        "longitude": 78.06376
      },
      {
        "name": "Paigaon",
        "latitude": 27.78333333,
        "longitude": 77.53333333
      },
      {
        "name": "Pali",
        "latitude": 24.49188,
        "longitude": 78.41617
      },
      {
        "name": "Palia Kalan",
        "latitude": 28.43205,
        "longitude": 80.58137
      },
      {
        "name": "Paras Rampur",
        "latitude": 31.32388889,
        "longitude": 75.67472222
      },
      {
        "name": "Parichha",
        "latitude": 25.50789,
        "longitude": 78.75954
      },
      {
        "name": "Parichhatgarh",
        "latitude": 28.97841,
        "longitude": 77.93422
      },
      {
        "name": "Parshadepur",
        "latitude": 26.07354,
        "longitude": 81.49207
      },
      {
        "name": "Pathakpura",
        "latitude": 26.84441,
        "longitude": 78.74037
      },
      {
        "name": "Patiali",
        "latitude": 27.69086,
        "longitude": 78.99823
      },
      {
        "name": "Patti",
        "latitude": 25.9215,
        "longitude": 82.20048
      },
      {
        "name": "Pawayan",
        "latitude": 28.06626,
        "longitude": 80.10305
      },
      {
        "name": "Payagpur",
        "latitude": 27.4,
        "longitude": 81.8
      },
      {
        "name": "Phalauda",
        "latitude": 29.18824,
        "longitude": 77.82996
      },
      {
        "name": "Phaphamau",
        "latitude": 25.53333333,
        "longitude": 81.86666667
      },
      {
        "name": "Phaphund",
        "latitude": 26.59888,
        "longitude": 79.46437
      },
      {
        "name": "Phariha",
        "latitude": 27.32166,
        "longitude": 78.47267
      },
      {
        "name": "Pheona",
        "latitude": 29.08333333,
        "longitude": 78.35
      },
      {
        "name": "Phulpur",
        "latitude": 25.54895,
        "longitude": 82.0895
      },
      {
        "name": "Pichhaura",
        "latitude": 26.33333333,
        "longitude": 79.31666667
      },
      {
        "name": "Pihani",
        "latitude": 27.61987,
        "longitude": 80.20343
      },
      {
        "name": "Pilibhit",
        "latitude": 28.63124,
        "longitude": 79.80436
      },
      {
        "name": "Pilkhua",
        "latitude": 28.71271,
        "longitude": 77.656
      },
      {
        "name": "Pilkhuwa",
        "latitude": 28.71196944,
        "longitude": 77.65445556
      },
      {
        "name": "Pinahat",
        "latitude": 26.88487,
        "longitude": 78.37647
      },
      {
        "name": "Pipraich",
        "latitude": 26.82745,
        "longitude": 83.52632
      },
      {
        "name": "Pipri",
        "latitude": 24.18,
        "longitude": 83
      },
      {
        "name": "Pratapgarh",
        "latitude": 25.75,
        "longitude": 81.75
      },
      {
        "name": "Prayagraj (Allahabad)",
        "latitude": 25.42012,
        "longitude": 81.88385
      },
      {
        "name": "Pukhrayan",
        "latitude": 26.22375,
        "longitude": 79.83739
      },
      {
        "name": "Puranpur",
        "latitude": 28.51283,
        "longitude": 80.14829
      },
      {
        "name": "Purmafi",
        "latitude": 29.55,
        "longitude": 77.26666667
      },
      {
        "name": "Purwa",
        "latitude": 26.45756,
        "longitude": 80.77403
      },
      {
        "name": "Qadirganj",
        "latitude": 27.78333333,
        "longitude": 79.06666667
      },
      {
        "name": "Rabupura",
        "latitude": 28.25153,
        "longitude": 77.60253
      },
      {
        "name": "Radha Kund",
        "latitude": 27.52444444,
        "longitude": 77.49027778
      },
      {
        "name": "Radhakund",
        "latitude": 27.52432,
        "longitude": 77.49101
      },
      {
        "name": "Raebareli",
        "latitude": 26.2309,
        "longitude": 81.23315
      },
      {
        "name": "Rajapur",
        "latitude": 25.38725,
        "longitude": 81.15125
      },
      {
        "name": "Ramkola",
        "latitude": 26.90172,
        "longitude": 83.83758
      },
      {
        "name": "Ramnagar",
        "latitude": 25.26907,
        "longitude": 83.02971
      },
      {
        "name": "Rampur",
        "latitude": 28.81014,
        "longitude": 79.02699
      },
      {
        "name": "Rampura",
        "latitude": 26.34967,
        "longitude": 79.18234
      },
      {
        "name": "Ranipur",
        "latitude": 25.25034,
        "longitude": 79.06204
      },
      {
        "name": "Ranipur Barsi",
        "latitude": 29.9,
        "longitude": 77.21666667
      },
      {
        "name": "Rasra",
        "latitude": 25.8576,
        "longitude": 83.85487
      },
      {
        "name": "Rasulabad",
        "latitude": 26.74491,
        "longitude": 80.49012
      },
      {
        "name": "Rath",
        "latitude": 25.59474,
        "longitude": 79.5666
      },
      {
        "name": "Raya",
        "latitude": 27.55607,
        "longitude": 77.78972
      },
      {
        "name": "Rehar",
        "latitude": 29.36666667,
        "longitude": 78.76666667
      },
      {
        "name": "Renukoot",
        "latitude": 24.2,
        "longitude": 83.03
      },
      {
        "name": "Renukut",
        "latitude": 24.21641,
        "longitude": 83.0358
      },
      {
        "name": "Reoti",
        "latitude": 25.85091,
        "longitude": 84.3778
      },
      {
        "name": "Reotipur",
        "latitude": 25.55,
        "longitude": 83.71666667
      },
      {
        "name": "Richha",
        "latitude": 28.69467,
        "longitude": 79.52284
      },
      {
        "name": "Robertsganj",
        "latitude": 24.6886,
        "longitude": 83.06784
      },
      {
        "name": "Rudarpur",
        "latitude": 26.44467,
        "longitude": 83.61302
      },
      {
        "name": "Rudauli",
        "latitude": 26.75,
        "longitude": 81.75
      },
      {
        "name": "Rura",
        "latitude": 26.49001,
        "longitude": 79.90108
      },
      {
        "name": "Sabalpur",
        "latitude": 27.176049,
        "longitude": 79.42012
      },
      {
        "name": "Sachendi",
        "latitude": 26.371165,
        "longitude": 80.1123
      },
      {
        "name": "Sadabad",
        "latitude": 27.43818,
        "longitude": 78.03758
      },
      {
        "name": "Sadat",
        "latitude": 25.67117,
        "longitude": 83.30269
      },
      {
        "name": "Safipur",
        "latitude": 26.73783,
        "longitude": 80.3435
      },
      {
        "name": "Saharanpur",
        "latitude": 29.9,
        "longitude": 77.68333
      },
      {
        "name": "Sahaspur",
        "latitude": 29.12125,
        "longitude": 78.62273
      },
      {
        "name": "Sahaswan",
        "latitude": 28.07227,
        "longitude": 78.75082
      },
      {
        "name": "Sahawar",
        "latitude": 27.79603,
        "longitude": 78.83373
      },
      {
        "name": "Sahibabad",
        "latitude": 28.68333333,
        "longitude": 77.4
      },
      {
        "name": "Sahpau",
        "latitude": 27.43527778,
        "longitude": 78.14138889
      },
      {
        "name": "Saidpur",
        "latitude": 25.53749,
        "longitude": 83.22378
      },
      {
        "name": "Sakhanu",
        "latitude": 27.95472222,
        "longitude": 79.2275
      },
      {
        "name": "Sakit",
        "latitude": 27.43463,
        "longitude": 78.77903
      },
      {
        "name": "Salempur",
        "latitude": 26.3,
        "longitude": 83.91666667
      },
      {
        "name": "Salon",
        "latitude": 26.02857,
        "longitude": 81.45403
      },
      {
        "name": "Sambhal",
        "latitude": 28.58498,
        "longitude": 78.56959
      },
      {
        "name": "Samthar",
        "latitude": 25.84348,
        "longitude": 78.90683
      },
      {
        "name": "Sandi",
        "latitude": 27.28867,
        "longitude": 79.9519
      },
      {
        "name": "Sandila",
        "latitude": 27.06989,
        "longitude": 80.51497
      },
      {
        "name": "Sant Kabir Nagar",
        "latitude": 26.79016,
        "longitude": 83.03481
      },
      {
        "name": "Sant Ravi Das Nagar",
        "latitude": 25.35792,
        "longitude": 82.4308
      },
      {
        "name": "Sarai Akil",
        "latitude": 25.3789,
        "longitude": 81.51035
      },
      {
        "name": "Sarai Ekdil",
        "latitude": 26.74442,
        "longitude": 79.09353
      },
      {
        "name": "Sarai Mir",
        "latitude": 26.02705,
        "longitude": 82.91843
      },
      {
        "name": "Sarauli",
        "latitude": 28.49404,
        "longitude": 79.09177
      },
      {
        "name": "Sardhana",
        "latitude": 29.14551,
        "longitude": 77.61433
      },
      {
        "name": "Sarila",
        "latitude": 25.77579,
        "longitude": 79.67535
      },
      {
        "name": "Sarurpur",
        "latitude": 29.03333333,
        "longitude": 77.23333333
      },
      {
        "name": "Sasni",
        "latitude": 27.70287,
        "longitude": 78.08278
      },
      {
        "name": "Satrikh",
        "latitude": 26.86045,
        "longitude": 81.19567
      },
      {
        "name": "Saurikh",
        "latitude": 27.03051,
        "longitude": 79.48813
      },
      {
        "name": "Sector",
        "latitude": 28.5708,
        "longitude": 77.3261
      },
      {
        "name": "Seohara",
        "latitude": 29.20904,
        "longitude": 78.58837
      },
      {
        "name": "Shahabad",
        "latitude": 27.6431,
        "longitude": 79.9402
      },
      {
        "name": "Shahganj",
        "latitude": 26.04965,
        "longitude": 82.68423
      },
      {
        "name": "Shahi",
        "latitude": 28.55023,
        "longitude": 79.31761
      },
      {
        "name": "Shahjahanpur",
        "latitude": 28,
        "longitude": 79.83333
      },
      {
        "name": "Shahpur",
        "latitude": 29.3501,
        "longitude": 77.5516
      },
      {
        "name": "Shamli",
        "latitude": 29.4497,
        "longitude": 77.30959
      },
      {
        "name": "Shamsabad",
        "latitude": 27.01718,
        "longitude": 78.12358
      },
      {
        "name": "Shankargarh",
        "latitude": 25.182,
        "longitude": 81.61769
      },
      {
        "name": "Shergarh",
        "latitude": 28.65128,
        "longitude": 79.36815
      },
      {
        "name": "Sherkot",
        "latitude": 29.32704,
        "longitude": 78.57429
      },
      {
        "name": "Shibnagar",
        "latitude": 28.5,
        "longitude": 79.98333333
      },
      {
        "name": "Shikarpur",
        "latitude": 28.28072,
        "longitude": 78.01411
      },
      {
        "name": "Shikarpur (Bulandshahr)",
        "latitude": 28.28,
        "longitude": 78.02
      },
      {
        "name": "Shikohabad",
        "latitude": 27.108,
        "longitude": 78.58661
      },
      {
        "name": "Shishgarh",
        "latitude": 28.72928,
        "longitude": 79.31469
      },
      {
        "name": "Shivrajpur",
        "latitude": 26.85722222,
        "longitude": 79.115
      },
      {
        "name": "Shrawasti",
        "latitude": 27.50746,
        "longitude": 82.0047
      },
      {
        "name": "Siddharthnagar",
        "latitude": 27.25797,
        "longitude": 83.01465
      },
      {
        "name": "Siddhaur",
        "latitude": 26.76944444,
        "longitude": 81.41805556
      },
      {
        "name": "Sidhauli",
        "latitude": 27.28202,
        "longitude": 80.8345
      },
      {
        "name": "Sidhpura",
        "latitude": 27.63312,
        "longitude": 78.86918
      },
      {
        "name": "Sikandarabad",
        "latitude": 28.45226,
        "longitude": 77.70004
      },
      {
        "name": "Sikandarpur",
        "latitude": 26.04327,
        "longitude": 84.05298
      },
      {
        "name": "Sikandra",
        "latitude": 26.36722,
        "longitude": 79.6298
      },
      {
        "name": "Sikandra Rao",
        "latitude": 27.68859,
        "longitude": 78.37985
      },
      {
        "name": "Sikandrabad",
        "latitude": 28.449525,
        "longitude": 77.69415278
      },
      {
        "name": "Sirathu",
        "latitude": 25.64292,
        "longitude": 81.31855
      },
      {
        "name": "Sirsa",
        "latitude": 25.2634,
        "longitude": 82.0919
      },
      {
        "name": "Sirsaganj",
        "latitude": 27.05715,
        "longitude": 78.68661
      },
      {
        "name": "Sirsi",
        "latitude": 28.63916,
        "longitude": 78.64303
      },
      {
        "name": "Sisauli",
        "latitude": 29.41386,
        "longitude": 77.4689
      },
      {
        "name": "Siswa Bazar",
        "latitude": 27.14652,
        "longitude": 83.75803
      },
      {
        "name": "Sitapur",
        "latitude": 27.5,
        "longitude": 80.91667
      },
      {
        "name": "Sonbhadra",
        "latitude": 24.40212,
        "longitude": 83.05352
      },
      {
        "name": "Soron",
        "latitude": 27.89055,
        "longitude": 78.74621
      },
      {
        "name": "Suar",
        "latitude": 29.02841,
        "longitude": 79.05654
      },
      {
        "name": "Sultanpur",
        "latitude": 26.25,
        "longitude": 82
      },
      {
        "name": "Surianwan",
        "latitude": 25.46387,
        "longitude": 82.41922
      },
      {
        "name": "Tajpur",
        "latitude": 29.16242,
        "longitude": 78.48458
      },
      {
        "name": "Talbahat",
        "latitude": 25.04357,
        "longitude": 78.43441
      },
      {
        "name": "Talgram",
        "latitude": 27.04753,
        "longitude": 79.64811
      },
      {
        "name": "Tanda",
        "latitude": 28.97621,
        "longitude": 78.94187
      },
      {
        "name": "Terha",
        "latitude": 25.8333,
        "longitude": 80.25
      },
      {
        "name": "Thakurdwara",
        "latitude": 29.19203,
        "longitude": 78.86145
      },
      {
        "name": "Thana Bhawan",
        "latitude": 29.58605,
        "longitude": 77.41811
      },
      {
        "name": "Tigri",
        "latitude": 28.51083333,
        "longitude": 77.23888889
      },
      {
        "name": "Tikaitnagar",
        "latitude": 26.94612,
        "longitude": 81.56583
      },
      {
        "name": "Tikri",
        "latitude": 29.2291,
        "longitude": 77.35479
      },
      {
        "name": "Tilhar",
        "latitude": 27.96282,
        "longitude": 79.73827
      },
      {
        "name": "Tilsahri",
        "latitude": 26.3333,
        "longitude": 80.4167
      },
      {
        "name": "Tindwari",
        "latitude": 25.61739,
        "longitude": 80.52718
      },
      {
        "name": "Titron",
        "latitude": 29.66824,
        "longitude": 77.32391
      },
      {
        "name": "Tori Fatehpur",
        "latitude": 25.45,
        "longitude": 79.1333
      },
      {
        "name": "Tori-Fatehpur",
        "latitude": 25.45505,
        "longitude": 79.11428
      },
      {
        "name": "Tulsipur",
        "latitude": 27.5337,
        "longitude": 82.41653
      },
      {
        "name": "Tundla",
        "latitude": 27.2146,
        "longitude": 78.23683
      },
      {
        "name": "Ugu",
        "latitude": 26.79681,
        "longitude": 80.32093
      },
      {
        "name": "Ujhani",
        "latitude": 28.00311,
        "longitude": 79.00821
      },
      {
        "name": "Umri",
        "latitude": 26.33333333,
        "longitude": 79.25
      },
      {
        "name": "Un",
        "latitude": 29.58479,
        "longitude": 77.2554
      },
      {
        "name": "Unnao",
        "latitude": 26.5,
        "longitude": 80.5
      },
      {
        "name": "Usawan",
        "latitude": 27.81583333,
        "longitude": 79.34861111
      },
      {
        "name": "Usehat",
        "latitude": 27.79796,
        "longitude": 79.23763
      },
      {
        "name": "Uska",
        "latitude": 27.2,
        "longitude": 83.11666667
      },
      {
        "name": "Utraula",
        "latitude": 27.31933,
        "longitude": 82.41872
      },
      {
        "name": "Varanasi",
        "latitude": 25.31668,
        "longitude": 83.01041
      },
      {
        "name": "Vindhyachal",
        "latitude": 25.1667,
        "longitude": 82.5
      },
      {
        "name": "Vrindavan",
        "latitude": 27.58105,
        "longitude": 77.69662
      },
      {
        "name": "Walterganj",
        "latitude": 26.8667,
        "longitude": 82.7167
      },
      {
        "name": "Wazirganj",
        "latitude": 28.21145,
        "longitude": 79.05665
      },
      {
        "name": "Yusufpur",
        "latitude": 25.6667,
        "longitude": 83.4667
      },
      {
        "name": "Zafarabad",
        "latitude": 25.69867,
        "longitude": 82.73354
      },
      {
        "name": "Zaidpur",
        "latitude": 26.83093,
        "longitude": 81.32929
      },
      {
        "name": "Zamania",
        "latitude": 25.41961,
        "longitude": 83.55786
      }
    ]
  },
  {
    "name": "Uttarakhand",
    "kind": "state",
    "cities": [
      {
        "name": "Almora",
        "latitude": 29.69223,
        "longitude": 79.49789
      },
      {
        "name": "Bageshwar",
        "latitude": 29.97315,
        "longitude": 79.83224
      },
      {
        "name": "Barkot",
        "latitude": 30.80861,
        "longitude": 78.20596
      },
      {
        "name": "Bazpur",
        "latitude": 29.15299,
        "longitude": 79.10814
      },
      {
        "name": "Bhim Tal",
        "latitude": 29.34447,
        "longitude": 79.56336
      },
      {
        "name": "Bhowali",
        "latitude": 29.38985,
        "longitude": 79.50481
      },
      {
        "name": "Birbhaddar",
        "latitude": 30.0712,
        "longitude": 78.28189
      },
      {
        "name": "Chakrata",
        "latitude": 30.70369,
        "longitude": 77.86386
      },
      {
        "name": "Chamoli",
        "latitude": 30.5,
        "longitude": 79.5
      },
      {
        "name": "Champawat",
        "latitude": 29.28756,
        "longitude": 80.03737
      },
      {
        "name": "Clement Town",
        "latitude": 30.26361,
        "longitude": 78.00862
      },
      {
        "name": "Dehradun",
        "latitude": 30.33,
        "longitude": 78.06
      },
      {
        "name": "Devaprayag",
        "latitude": 30.14603,
        "longitude": 78.60272
      },
      {
        "name": "Dharchula",
        "latitude": 29.84707,
        "longitude": 80.51951
      },
      {
        "name": "Doiwala",
        "latitude": 30.17667,
        "longitude": 78.11659
      },
      {
        "name": "Dugadda",
        "latitude": 29.80673,
        "longitude": 78.61109
      },
      {
        "name": "Dwarahat",
        "latitude": 29.77785,
        "longitude": 79.42731
      },
      {
        "name": "Garhwal",
        "latitude": 29.96366,
        "longitude": 78.92853
      },
      {
        "name": "Haldwani",
        "latitude": 29.22254,
        "longitude": 79.5286
      },
      {
        "name": "Harbatpur",
        "latitude": 30.43863,
        "longitude": 77.74058
      },
      {
        "name": "Haridwar",
        "latitude": 29.94791,
        "longitude": 78.16025
      },
      {
        "name": "Jaspur",
        "latitude": 29.27919,
        "longitude": 78.82798
      },
      {
        "name": "Joshimath",
        "latitude": 30.55543,
        "longitude": 79.56436
      },
      {
        "name": "Kaladhungi",
        "latitude": 29.28351,
        "longitude": 79.351
      },
      {
        "name": "Kalagarh Project Colony",
        "latitude": 29.4778,
        "longitude": 78.78449
      },
      {
        "name": "Kashipur",
        "latitude": 29.21399,
        "longitude": 78.95693
      },
      {
        "name": "Khatima",
        "latitude": 28.92134,
        "longitude": 79.97075
      },
      {
        "name": "Kichha",
        "latitude": 28.91154,
        "longitude": 79.52009
      },
      {
        "name": "Kotdwara",
        "latitude": 29.74612,
        "longitude": 78.52219
      },
      {
        "name": "Laksar",
        "latitude": 29.7587,
        "longitude": 78.04148
      },
      {
        "name": "Lansdowne",
        "latitude": 29.84183,
        "longitude": 78.68014
      },
      {
        "name": "Lohaghat",
        "latitude": 29.40356,
        "longitude": 80.08965
      },
      {
        "name": "Manglaur",
        "latitude": 29.79094,
        "longitude": 77.87836
      },
      {
        "name": "Mussoorie",
        "latitude": 30.45498,
        "longitude": 78.07068
      },
      {
        "name": "Naini Tal",
        "latitude": 29.39743,
        "longitude": 79.44686
      },
      {
        "name": "Narendranagar",
        "latitude": 30.16173,
        "longitude": 78.28712
      },
      {
        "name": "Pauri",
        "latitude": 30.15286,
        "longitude": 78.7771
      },
      {
        "name": "Pipalkoti",
        "latitude": 30.42553,
        "longitude": 79.43066
      },
      {
        "name": "Pithoragarh",
        "latitude": 30,
        "longitude": 80.25
      },
      {
        "name": "Raipur",
        "latitude": 30.31097,
        "longitude": 78.08979
      },
      {
        "name": "Raiwala Bara",
        "latitude": 30.01864,
        "longitude": 78.2293
      },
      {
        "name": "Ramnagar",
        "latitude": 29.3925,
        "longitude": 79.1283
      },
      {
        "name": "Ranikhet",
        "latitude": 29.64082,
        "longitude": 79.43229
      },
      {
        "name": "Rishikesh",
        "latitude": 30.10778,
        "longitude": 78.29255
      },
      {
        "name": "Roorkee",
        "latitude": 29.86632,
        "longitude": 77.89118
      },
      {
        "name": "Rudraprayag",
        "latitude": 30.60872,
        "longitude": 79.06517
      },
      {
        "name": "Sitarganj",
        "latitude": 28.9293,
        "longitude": 79.70436
      },
      {
        "name": "Srinagar",
        "latitude": 30.22243,
        "longitude": 78.78341
      },
      {
        "name": "Sultanpur",
        "latitude": 29.75534,
        "longitude": 78.11034
      },
      {
        "name": "Tanakpur",
        "latitude": 29.074,
        "longitude": 80.11139
      },
      {
        "name": "Tehri",
        "latitude": 30.39086,
        "longitude": 78.4803
      },
      {
        "name": "Tehri-Garhwal",
        "latitude": 30.5,
        "longitude": 78.66667
      },
      {
        "name": "Udham Singh Nagar",
        "latitude": 29.02746,
        "longitude": 79.52347
      },
      {
        "name": "Uttarkashi",
        "latitude": 30.72986,
        "longitude": 78.44342
      },
      {
        "name": "Vikasnagar",
        "latitude": 30.46944,
        "longitude": 77.77275
      }
    ]
  },
  {
    "name": "West Bengal",
    "kind": "state",
    "cities": [
      {
        "name": "Ahmedpur",
        "latitude": 23.83009,
        "longitude": 87.68661
      },
      {
        "name": "Aistala",
        "latitude": 23.18,
        "longitude": 88.58
      },
      {
        "name": "Aknapur",
        "latitude": 18.38576389,
        "longitude": 77.27225278
      },
      {
        "name": "Alipurduar",
        "latitude": 26.49136,
        "longitude": 89.52796
      },
      {
        "name": "Amlagora",
        "latitude": 22.84616,
        "longitude": 87.33559
      },
      {
        "name": "Amta",
        "latitude": 22.57333333,
        "longitude": 88.01611111
      },
      {
        "name": "Amtala",
        "latitude": 22.22,
        "longitude": 88.17
      },
      {
        "name": "Andal",
        "latitude": 23.6,
        "longitude": 87.2
      },
      {
        "name": "Arambagh community development block",
        "latitude": 22.88,
        "longitude": 87.78
      },
      {
        "name": "Asansol",
        "latitude": 23.68333333,
        "longitude": 86.96666667
      },
      {
        "name": "Ashoknagar Kalyangarh",
        "latitude": 22.833,
        "longitude": 88.633
      },
      {
        "name": "Badkulla",
        "latitude": 23.28,
        "longitude": 88.53
      },
      {
        "name": "Baduria",
        "latitude": 22.74,
        "longitude": 88.79
      },
      {
        "name": "Bagdogra",
        "latitude": 26.699804,
        "longitude": 88.319392
      },
      {
        "name": "Bagnan",
        "latitude": 22.47,
        "longitude": 87.97
      },
      {
        "name": "Bagula",
        "latitude": 23.335,
        "longitude": 88.644
      },
      {
        "name": "Bahula",
        "latitude": 23.657419,
        "longitude": 87.195974
      },
      {
        "name": "Baidyabati",
        "latitude": 22.79,
        "longitude": 88.32
      },
      {
        "name": "Bakreswar",
        "latitude": 23.8832,
        "longitude": 87.37265
      },
      {
        "name": "Balarampur",
        "latitude": 23.09714,
        "longitude": 86.22292
      },
      {
        "name": "Bali Chak",
        "latitude": 22.36482,
        "longitude": 87.55304
      },
      {
        "name": "Bally",
        "latitude": 22.65,
        "longitude": 88.34
      },
      {
        "name": "Balurghat",
        "latitude": 25.21666667,
        "longitude": 88.76666667
      },
      {
        "name": "Bamangola community development block",
        "latitude": 25.17,
        "longitude": 88.335
      },
      {
        "name": "Baneswar",
        "latitude": 26.65,
        "longitude": 89.81666667
      },
      {
        "name": "Bangaon",
        "latitude": 23.07,
        "longitude": 88.82
      },
      {
        "name": "Bankra",
        "latitude": 22.63,
        "longitude": 88.3
      },
      {
        "name": "Bankura",
        "latitude": 23.25,
        "longitude": 87.06666667
      },
      {
        "name": "Bansberia",
        "latitude": 22.97,
        "longitude": 88.4
      },
      {
        "name": "Bansihari community development block",
        "latitude": 25.4,
        "longitude": 88.4167
      },
      {
        "name": "Barabazar",
        "latitude": 23.36,
        "longitude": 86.65
      },
      {
        "name": "Baranagar",
        "latitude": 22.64,
        "longitude": 88.37
      },
      {
        "name": "Barasat",
        "latitude": 22.23333333,
        "longitude": 88.45
      },
      {
        "name": "Bardhaman",
        "latitude": 23.25,
        "longitude": 87.85
      },
      {
        "name": "Barjora",
        "latitude": 23.43333333,
        "longitude": 87.28333333
      },
      {
        "name": "Barrackpore",
        "latitude": 22.75,
        "longitude": 88.36666667
      },
      {
        "name": "Baruipur",
        "latitude": 22.35,
        "longitude": 88.44
      },
      {
        "name": "Basanti",
        "latitude": 22.1891534,
        "longitude": 88.6705685
      },
      {
        "name": "Basirhat",
        "latitude": 22.65722222,
        "longitude": 88.89416667
      },
      {
        "name": "Bawali",
        "latitude": 22.42563,
        "longitude": 88.19336
      },
      {
        "name": "Begampur",
        "latitude": 22.74,
        "longitude": 88.24
      },
      {
        "name": "Belda",
        "latitude": 22.08,
        "longitude": 87.35
      },
      {
        "name": "Beldanga",
        "latitude": 23.93,
        "longitude": 88.25
      },
      {
        "name": "Beliatore",
        "latitude": 23.33333333,
        "longitude": 87.21666667
      },
      {
        "name": "Berhampore",
        "latitude": 24.1,
        "longitude": 88.25
      },
      {
        "name": "Bhadreswar",
        "latitude": 22.82,
        "longitude": 88.35
      },
      {
        "name": "Bhandardaha",
        "latitude": 22.62,
        "longitude": 88.21
      },
      {
        "name": "Bhatpara",
        "latitude": 22.86666667,
        "longitude": 88.41666667
      },
      {
        "name": "Birbhum district",
        "latitude": 24,
        "longitude": 87.58333
      },
      {
        "name": "Birpara",
        "latitude": 26.5,
        "longitude": 89.5
      },
      {
        "name": "Bishnupur",
        "latitude": 22.38,
        "longitude": 88.27
      },
      {
        "name": "Bolpur",
        "latitude": 23.67,
        "longitude": 87.72
      },
      {
        "name": "Budge Budge",
        "latitude": 22.47,
        "longitude": 88.17
      },
      {
        "name": "Canning",
        "latitude": 22.32,
        "longitude": 88.67
      },
      {
        "name": "Chakapara",
        "latitude": 22.63,
        "longitude": 88.35
      },
      {
        "name": "Chakdaha",
        "latitude": 23.08,
        "longitude": 88.52
      },
      {
        "name": "Champadanga",
        "latitude": 22.83,
        "longitude": 87.96
      },
      {
        "name": "Champahati",
        "latitude": 22.40026,
        "longitude": 88.49209
      },
      {
        "name": "Champdani",
        "latitude": 22.8,
        "longitude": 88.37
      },
      {
        "name": "Chandannagar",
        "latitude": 22.86666667,
        "longitude": 88.38333333
      },
      {
        "name": "Chandrakona",
        "latitude": 22.73,
        "longitude": 87.52
      },
      {
        "name": "Chittaranjan",
        "latitude": 23.87,
        "longitude": 86.87
      },
      {
        "name": "Churulia",
        "latitude": 23.78,
        "longitude": 87.08
      },
      {
        "name": "Contai",
        "latitude": 21.78,
        "longitude": 87.75
      },
      {
        "name": "Cooch Behar",
        "latitude": 26.31666667,
        "longitude": 89.43333333
      },
      {
        "name": "Cossimbazar",
        "latitude": 24.12,
        "longitude": 88.28
      },
      {
        "name": "Dakshin Dinajpur district",
        "latitude": 25.22,
        "longitude": 88.76
      },
      {
        "name": "Dalkola",
        "latitude": 25.87577,
        "longitude": 87.84009
      },
      {
        "name": "Dam Dam",
        "latitude": 22.63333333,
        "longitude": 88.42277778
      },
      {
        "name": "Darjeeling",
        "latitude": 27.04166667,
        "longitude": 88.26305556
      },
      {
        "name": "Daulatpur",
        "latitude": 25.32605,
        "longitude": 88.32989
      },
      {
        "name": "Debagram",
        "latitude": 23.68333333,
        "longitude": 88.28333333
      },
      {
        "name": "Debipur",
        "latitude": 24.25029,
        "longitude": 88.61824
      },
      {
        "name": "Dhaniakhali community development block",
        "latitude": 22.97,
        "longitude": 88.1
      },
      {
        "name": "Dhulagari",
        "latitude": 22.58222222,
        "longitude": 88.17111111
      },
      {
        "name": "Dhulian",
        "latitude": 24.68,
        "longitude": 87.97
      },
      {
        "name": "Dhupguri",
        "latitude": 26.6,
        "longitude": 89.02
      },
      {
        "name": "Diamond Harbour",
        "latitude": 22.2,
        "longitude": 88.2
      },
      {
        "name": "Digha",
        "latitude": 21.68,
        "longitude": 87.55
      },
      {
        "name": "Dinhata",
        "latitude": 26.13,
        "longitude": 89.47
      },
      {
        "name": "Domjur",
        "latitude": 22.64,
        "longitude": 88.22
      },
      {
        "name": "Dubrajpur",
        "latitude": 23.8,
        "longitude": 87.38
      },
      {
        "name": "Durgapur",
        "latitude": 23.55,
        "longitude": 87.32
      },
      {
        "name": "Egra",
        "latitude": 21.9,
        "longitude": 87.53
      },
      {
        "name": "Falakata",
        "latitude": 26.53,
        "longitude": 89.2
      },
      {
        "name": "Farakka",
        "latitude": 24.81667,
        "longitude": 87.9
      },
      {
        "name": "Fort Gloster",
        "latitude": 22.50444444,
        "longitude": 88.18333333
      },
      {
        "name": "Gaighata community development block",
        "latitude": 22.93,
        "longitude": 88.73
      },
      {
        "name": "Gairkata",
        "latitude": 26.68,
        "longitude": 89.03
      },
      {
        "name": "Gangadharpur",
        "latitude": 22.7604,
        "longitude": 88.2218
      },
      {
        "name": "Gangarampur",
        "latitude": 25.4,
        "longitude": 88.52
      },
      {
        "name": "Garui",
        "latitude": 22.63333333,
        "longitude": 88.4
      },
      {
        "name": "Garulia",
        "latitude": 22.82,
        "longitude": 88.37
      },
      {
        "name": "Ghatal",
        "latitude": 22.67,
        "longitude": 87.72
      },
      {
        "name": "Giria",
        "latitude": 24.51666667,
        "longitude": 88.06666667
      },
      {
        "name": "Gobardanga",
        "latitude": 22.87,
        "longitude": 88.76
      },
      {
        "name": "Gobindapur",
        "latitude": 22.59306,
        "longitude": 88.09139
      },
      {
        "name": "Gopalpur",
        "latitude": 22.61845,
        "longitude": 88.75119
      },
      {
        "name": "Gopinathpur",
        "latitude": 23.22,
        "longitude": 88.15
      },
      {
        "name": "Gorubathan",
        "latitude": 26.97,
        "longitude": 88.7
      },
      {
        "name": "Gosaba",
        "latitude": 22.16,
        "longitude": 88.8
      },
      {
        "name": "Gosanimari",
        "latitude": 26.15,
        "longitude": 89.36666667
      },
      {
        "name": "Gurdaha",
        "latitude": 22.73472222,
        "longitude": 88.75944444
      },
      {
        "name": "Guskhara",
        "latitude": 23.49277778,
        "longitude": 87.73472222
      },
      {
        "name": "Habra",
        "latitude": 22.83,
        "longitude": 88.63
      },
      {
        "name": "Haldia",
        "latitude": 22.06046,
        "longitude": 88.10975
      },
      {
        "name": "Haldibari",
        "latitude": 26.33,
        "longitude": 88.77
      },
      {
        "name": "Halisahar",
        "latitude": 22.95,
        "longitude": 88.42
      },
      {
        "name": "Harindanga",
        "latitude": 22.03333333,
        "longitude": 88.31666667
      },
      {
        "name": "Haringhata",
        "latitude": 22.95,
        "longitude": 88.57
      },
      {
        "name": "Haripur",
        "latitude": 22.93611,
        "longitude": 88.23194
      },
      {
        "name": "Hasimara",
        "latitude": 26.75,
        "longitude": 89.35
      },
      {
        "name": "Hindusthan Cables Town",
        "latitude": 23.82,
        "longitude": 86.9
      },
      {
        "name": "Hooghly district",
        "latitude": 22.91,
        "longitude": 88.39
      },
      {
        "name": "Howrah",
        "latitude": 22.57688,
        "longitude": 88.31857
      },
      {
        "name": "Ichapur",
        "latitude": 22.80499,
        "longitude": 88.37088
      },
      {
        "name": "Indpur community development block",
        "latitude": 23.1667,
        "longitude": 86.9333
      },
      {
        "name": "Ingraj Bazar",
        "latitude": 25.00447,
        "longitude": 88.14573
      },
      {
        "name": "Islampur",
        "latitude": 26.27,
        "longitude": 88.2
      },
      {
        "name": "Jafarpur",
        "latitude": 22.32,
        "longitude": 88.23
      },
      {
        "name": "Jaigaon",
        "latitude": 26.86666667,
        "longitude": 89.38333333
      },
      {
        "name": "Jalpaiguri",
        "latitude": 26.51666667,
        "longitude": 88.73333333
      },
      {
        "name": "Jamuria",
        "latitude": 23.7,
        "longitude": 87.08
      },
      {
        "name": "Jangipur",
        "latitude": 24.47001,
        "longitude": 88.07659
      },
      {
        "name": "Jaynagar Majilpur",
        "latitude": 22.17722222,
        "longitude": 88.42583333
      },
      {
        "name": "Jejur",
        "latitude": 22.88,
        "longitude": 88.12
      },
      {
        "name": "Jhalida",
        "latitude": 23.36541,
        "longitude": 85.97581
      },
      {
        "name": "Jhargram",
        "latitude": 22.45,
        "longitude": 86.98
      },
      {
        "name": "Jhilimili",
        "latitude": 22.8167,
        "longitude": 86.6167
      },
      {
        "name": "Kakdwip",
        "latitude": 21.8833,
        "longitude": 88.1833
      },
      {
        "name": "Kalaikunda",
        "latitude": 22.33916667,
        "longitude": 87.22638889
      },
      {
        "name": "Kaliaganj",
        "latitude": 25.63,
        "longitude": 88.32
      },
      {
        "name": "Kalimpong",
        "latitude": 27.07059,
        "longitude": 88.47529
      },
      {
        "name": "Kalna",
        "latitude": 23.22,
        "longitude": 88.37
      },
      {
        "name": "Kalyani",
        "latitude": 22.975,
        "longitude": 88.43444444
      },
      {
        "name": "Kamarhati",
        "latitude": 22.67,
        "longitude": 88.37
      },
      {
        "name": "Kamarpukur",
        "latitude": 22.91,
        "longitude": 87.65
      },
      {
        "name": "Kanchrapara",
        "latitude": 22.97,
        "longitude": 88.43
      },
      {
        "name": "Kandi",
        "latitude": 23.95,
        "longitude": 88.03
      },
      {
        "name": "Karimpur",
        "latitude": 23.96666667,
        "longitude": 88.61666667
      },
      {
        "name": "Katwa",
        "latitude": 23.65,
        "longitude": 88.13
      },
      {
        "name": "Kenda",
        "latitude": 23.2,
        "longitude": 86.53
      },
      {
        "name": "Keshabpur",
        "latitude": 22.97,
        "longitude": 88.26
      },
      {
        "name": "Kharagpur",
        "latitude": 22.330239,
        "longitude": 87.323653
      },
      {
        "name": "Kharar",
        "latitude": 22.7,
        "longitude": 87.68
      },
      {
        "name": "Kharba",
        "latitude": 25.42,
        "longitude": 88.07
      },
      {
        "name": "Khardaha",
        "latitude": 22.72,
        "longitude": 88.38
      },
      {
        "name": "Khatra",
        "latitude": 22.98,
        "longitude": 86.85
      },
      {
        "name": "Kirnahar",
        "latitude": 23.75,
        "longitude": 87.87
      },
      {
        "name": "Kolkata",
        "latitude": 22.54111111,
        "longitude": 88.33777778
      },
      {
        "name": "Konnagar",
        "latitude": 22.7,
        "longitude": 88.35
      },
      {
        "name": "Krishnanagar",
        "latitude": 23.4,
        "longitude": 88.5
      },
      {
        "name": "Krishnapur",
        "latitude": 22.67,
        "longitude": 88.26
      },
      {
        "name": "Kshirpai",
        "latitude": 22.7109664,
        "longitude": 87.6174038
      },
      {
        "name": "Kulpi",
        "latitude": 22.08,
        "longitude": 88.24
      },
      {
        "name": "Kultali",
        "latitude": 21.9,
        "longitude": 88.4
      },
      {
        "name": "Kulti",
        "latitude": 23.73,
        "longitude": 86.85
      },
      {
        "name": "Kurseong",
        "latitude": 26.88,
        "longitude": 88.28
      },
      {
        "name": "Lalgarh",
        "latitude": 22.58,
        "longitude": 87.05
      },
      {
        "name": "Lalgola",
        "latitude": 24.42,
        "longitude": 88.25
      },
      {
        "name": "Loyabad",
        "latitude": 23.67,
        "longitude": 86.67
      },
      {
        "name": "Madanpur",
        "latitude": 23.02,
        "longitude": 88.48
      },
      {
        "name": "Madhyamgram",
        "latitude": 22.7,
        "longitude": 88.45
      },
      {
        "name": "Mahiari",
        "latitude": 22.59,
        "longitude": 88.24
      },
      {
        "name": "Mahishadal community development block",
        "latitude": 22.183333,
        "longitude": 87.983333
      },
      {
        "name": "Mainaguri",
        "latitude": 26.57,
        "longitude": 88.82
      },
      {
        "name": "Manikpara",
        "latitude": 22.36666667,
        "longitude": 87.11666667
      },
      {
        "name": "Masila",
        "latitude": 22.58083,
        "longitude": 88.23278
      },
      {
        "name": "Mathabhanga",
        "latitude": 26.34197,
        "longitude": 89.21555
      },
      {
        "name": "Matiali community development block",
        "latitude": 26.927159,
        "longitude": 88.8133049
      },
      {
        "name": "Matigara community development block",
        "latitude": 26.716667,
        "longitude": 88.383333
      },
      {
        "name": "Medinipur",
        "latitude": 22.43333333,
        "longitude": 87.33333333
      },
      {
        "name": "Mejia community development block",
        "latitude": 23.57,
        "longitude": 87.1
      },
      {
        "name": "Memari",
        "latitude": 23.2,
        "longitude": 88.12
      },
      {
        "name": "Mirik",
        "latitude": 26.887,
        "longitude": 88.187
      },
      {
        "name": "Mohanpur community development block",
        "latitude": 21.83856,
        "longitude": 87.43145
      },
      {
        "name": "Monoharpur",
        "latitude": 22.68,
        "longitude": 88.3
      },
      {
        "name": "Muragacha",
        "latitude": 23.53631,
        "longitude": 88.39425
      },
      {
        "name": "Muri",
        "latitude": 23.37,
        "longitude": 85.86
      },
      {
        "name": "Murshidabad",
        "latitude": 24.18,
        "longitude": 88.27
      },
      {
        "name": "Nabadwip",
        "latitude": 23.40722222,
        "longitude": 88.37777778
      },
      {
        "name": "Nabagram",
        "latitude": 22.29,
        "longitude": 88.51
      },
      {
        "name": "Nadia district",
        "latitude": 23.4,
        "longitude": 88.5
      },
      {
        "name": "Nagarukhra",
        "latitude": 22.94099,
        "longitude": 88.63701
      },
      {
        "name": "Nagrakata",
        "latitude": 26.9,
        "longitude": 88.9667
      },
      {
        "name": "Naihati",
        "latitude": 22.9,
        "longitude": 88.42
      },
      {
        "name": "Naksalbari",
        "latitude": 26.68333333,
        "longitude": 88.21666667
      },
      {
        "name": "Nalhati",
        "latitude": 24.3,
        "longitude": 87.82
      },
      {
        "name": "Nalpur",
        "latitude": 22.53,
        "longitude": 88.19
      },
      {
        "name": "Namkhana community development block",
        "latitude": 21.7,
        "longitude": 88.14
      },
      {
        "name": "Nandigram",
        "latitude": 22.01,
        "longitude": 87.99
      },
      {
        "name": "Nangi",
        "latitude": 22.50833333,
        "longitude": 88.21527778
      },
      {
        "name": "Nayagram community development block",
        "latitude": 22.0319,
        "longitude": 87.1781
      },
      {
        "name": "North 24 Parganas district",
        "latitude": 22.13,
        "longitude": 88.5
      },
      {
        "name": "Odlabari",
        "latitude": 26.83638889,
        "longitude": 88.62944444
      },
      {
        "name": "Paikpara",
        "latitude": 24.77121,
        "longitude": 87.92251
      },
      {
        "name": "Panagarh",
        "latitude": 23.45,
        "longitude": 87.43
      },
      {
        "name": "Panchla",
        "latitude": 22.54,
        "longitude": 88.14
      },
      {
        "name": "Panchmura",
        "latitude": 22.9667,
        "longitude": 87.1667
      },
      {
        "name": "Pandua",
        "latitude": 23.08,
        "longitude": 88.28
      },
      {
        "name": "Panihati",
        "latitude": 22.69,
        "longitude": 88.37
      },
      {
        "name": "Panskura",
        "latitude": 22.42,
        "longitude": 87.7
      },
      {
        "name": "Parbatipur",
        "latitude": 22.6625,
        "longitude": 88.22222
      },
      {
        "name": "Paschim Medinipur district",
        "latitude": 22.43333333,
        "longitude": 87.33333333
      },
      {
        "name": "Patiram",
        "latitude": 25.31666667,
        "longitude": 88.75
      },
      {
        "name": "Patrasaer",
        "latitude": 23.19697,
        "longitude": 87.53319
      },
      {
        "name": "Patuli",
        "latitude": 23.55,
        "longitude": 88.25
      },
      {
        "name": "Pujali",
        "latitude": 22.47,
        "longitude": 88.15
      },
      {
        "name": "Puncha community development block",
        "latitude": 23.123,
        "longitude": 86.653
      },
      {
        "name": "Purba Medinipur district",
        "latitude": 22.3,
        "longitude": 87.91666667
      },
      {
        "name": "Purulia",
        "latitude": 23.33333333,
        "longitude": 86.36666667
      },
      {
        "name": "Raghudebbati",
        "latitude": 22.53,
        "longitude": 88.2
      },
      {
        "name": "Raghunathpur",
        "latitude": 23.55,
        "longitude": 86.67
      },
      {
        "name": "Raiganj",
        "latitude": 25.61666667,
        "longitude": 88.11666667
      },
      {
        "name": "Rajmahal",
        "latitude": 25.05,
        "longitude": 87.84
      },
      {
        "name": "Rajnagar community development block",
        "latitude": 23.9472,
        "longitude": 87.3625
      },
      {
        "name": "Ramchandrapur",
        "latitude": 22.9,
        "longitude": 88.48
      },
      {
        "name": "Ramjibanpur",
        "latitude": 22.83,
        "longitude": 87.62
      },
      {
        "name": "Ramnagar",
        "latitude": 22.77778,
        "longitude": 88.24639
      },
      {
        "name": "Rampur Hat",
        "latitude": 24.17737,
        "longitude": 87.78275
      },
      {
        "name": "Ranaghat",
        "latitude": 23.18,
        "longitude": 88.58
      },
      {
        "name": "Raniganj",
        "latitude": 23.62,
        "longitude": 87.13
      },
      {
        "name": "Raypur",
        "latitude": 22.41083,
        "longitude": 88.50944
      },
      {
        "name": "Rishra",
        "latitude": 22.71,
        "longitude": 88.35
      },
      {
        "name": "Sahapur",
        "latitude": 22.52,
        "longitude": 88.17
      },
      {
        "name": "Sainthia",
        "latitude": 23.95,
        "longitude": 87.67
      },
      {
        "name": "Salanpur community development block",
        "latitude": 23.76702,
        "longitude": 86.87492
      },
      {
        "name": "Sankarpur",
        "latitude": 23.6,
        "longitude": 87.2
      },
      {
        "name": "Sankrail",
        "latitude": 22.57,
        "longitude": 88.24
      },
      {
        "name": "Santipur",
        "latitude": 23.25,
        "longitude": 88.43
      },
      {
        "name": "Santoshpur",
        "latitude": 22.5,
        "longitude": 88.17
      },
      {
        "name": "Santuri community development block",
        "latitude": 23.5272,
        "longitude": 86.85709
      },
      {
        "name": "Sarenga",
        "latitude": 22.54,
        "longitude": 88.21
      },
      {
        "name": "Serampore",
        "latitude": 22.75,
        "longitude": 88.34
      },
      {
        "name": "Serpur",
        "latitude": 24.13,
        "longitude": 88
      },
      {
        "name": "Siliguri",
        "latitude": 26.71004,
        "longitude": 88.42851
      },
      {
        "name": "Singur",
        "latitude": 22.81,
        "longitude": 88.23
      },
      {
        "name": "Sodpur",
        "latitude": 22.70416667,
        "longitude": 88.39166667
      },
      {
        "name": "Solap",
        "latitude": 22.12777778,
        "longitude": 88.15861111
      },
      {
        "name": "Sonada",
        "latitude": 27,
        "longitude": 88.14
      },
      {
        "name": "Sonamukhi",
        "latitude": 23.3,
        "longitude": 87.42
      },
      {
        "name": "Sonarpur community development block",
        "latitude": 22.44259,
        "longitude": 88.43044
      },
      {
        "name": "South 24 Parganas district",
        "latitude": 22.16197,
        "longitude": 88.4317
      },
      {
        "name": "Srikhanda",
        "latitude": 23.6,
        "longitude": 88.0833
      },
      {
        "name": "Srirampur",
        "latitude": 23.35,
        "longitude": 88.12
      },
      {
        "name": "Suri",
        "latitude": 23.91666667,
        "longitude": 87.53333333
      },
      {
        "name": "Swarupnagar community development block",
        "latitude": 22.8333,
        "longitude": 88.8667
      },
      {
        "name": "Takdah",
        "latitude": 27.0333,
        "longitude": 88.3667
      },
      {
        "name": "Taki",
        "latitude": 22.59,
        "longitude": 88.92
      },
      {
        "name": "Tamluk",
        "latitude": 22.3,
        "longitude": 87.91666667
      },
      {
        "name": "Tarakeswar",
        "latitude": 22.89,
        "longitude": 88.02
      },
      {
        "name": "Titagarh",
        "latitude": 22.74,
        "longitude": 88.37
      },
      {
        "name": "Tufanganj",
        "latitude": 26.32,
        "longitude": 89.67
      },
      {
        "name": "Tulin",
        "latitude": 23.37,
        "longitude": 85.9
      },
      {
        "name": "Uchalan",
        "latitude": 23.0333,
        "longitude": 87.7833
      },
      {
        "name": "Ula",
        "latitude": 22.7225,
        "longitude": 88.55556
      },
      {
        "name": "Uluberia",
        "latitude": 22.47,
        "longitude": 88.11
      },
      {
        "name": "Uttar Dinajpur district",
        "latitude": 25.62,
        "longitude": 88.12
      },
      {
        "name": "Uttarpara Kotrung",
        "latitude": 22.67,
        "longitude": 88.35
      }
    ]
  }
];

export const INDIA_STATE_AND_UT_OPTIONS = INDIA_REGIONS.map((region) => region.name);

export const getCitiesForRegion = (regionName: string) =>
  INDIA_REGIONS.find((region) => region.name === regionName)?.cities ?? [];

export const INDIA_CITY_GEO_INDEX = [
  {
    "state": "Andaman and Nicobar Islands",
    "name": "Bamboo Flat",
    "lat": 11.7,
    "lng": 92.71667
  },
  {
    "state": "Andaman and Nicobar Islands",
    "name": "Nicobar",
    "lat": 7.03002,
    "lng": 93.79028
  },
  {
    "state": "Andaman and Nicobar Islands",
    "name": "Port Blair",
    "lat": 11.66613,
    "lng": 92.74635
  },
  {
    "state": "Andaman and Nicobar Islands",
    "name": "South Andaman",
    "lat": 10.75776,
    "lng": 92.52136
  },
  {
    "state": "Andhra Pradesh",
    "name": "Addanki",
    "lat": 15.81061,
    "lng": 79.97338
  },
  {
    "state": "Andhra Pradesh",
    "name": "Adoni",
    "lat": 15.62788,
    "lng": 77.27495
  },
  {
    "state": "Andhra Pradesh",
    "name": "Akasahebpet",
    "lat": 17.50455,
    "lng": 82.56597
  },
  {
    "state": "Andhra Pradesh",
    "name": "Akividu",
    "lat": 16.58225,
    "lng": 81.38112
  },
  {
    "state": "Andhra Pradesh",
    "name": "Akkarampalle",
    "lat": 13.65,
    "lng": 79.42
  },
  {
    "state": "Andhra Pradesh",
    "name": "Amalapuram",
    "lat": 16.57868,
    "lng": 82.00609
  },
  {
    "state": "Andhra Pradesh",
    "name": "Amudalavalasa",
    "lat": 18.41025,
    "lng": 83.90295
  },
  {
    "state": "Andhra Pradesh",
    "name": "Anakapalle",
    "lat": 17.69134,
    "lng": 83.00395
  },
  {
    "state": "Andhra Pradesh",
    "name": "Anantapur",
    "lat": 14.55,
    "lng": 77.41667
  },
  {
    "state": "Andhra Pradesh",
    "name": "Atmakur",
    "lat": 15.88109,
    "lng": 78.58704
  },
  {
    "state": "Andhra Pradesh",
    "name": "Attili",
    "lat": 16.7,
    "lng": 81.6
  },
  {
    "state": "Andhra Pradesh",
    "name": "Avanigadda",
    "lat": 16.02148,
    "lng": 80.91808
  },
  {
    "state": "Andhra Pradesh",
    "name": "Badvel",
    "lat": 14.7451,
    "lng": 79.06288
  },
  {
    "state": "Andhra Pradesh",
    "name": "Banganapalle",
    "lat": 15.31771,
    "lng": 78.22669
  },
  {
    "state": "Andhra Pradesh",
    "name": "Bapatla",
    "lat": 15.90422,
    "lng": 80.46743
  },
  {
    "state": "Andhra Pradesh",
    "name": "Betamcherla",
    "lat": 15.45144,
    "lng": 78.14797
  },
  {
    "state": "Andhra Pradesh",
    "name": "Bhattiprolu",
    "lat": 16.1026,
    "lng": 80.78074
  },
  {
    "state": "Andhra Pradesh",
    "name": "Bhimavaram",
    "lat": 16.54078,
    "lng": 81.52322
  },
  {
    "state": "Andhra Pradesh",
    "name": "Bhimunipatnam",
    "lat": 17.89017,
    "lng": 83.45203
  },
  {
    "state": "Andhra Pradesh",
    "name": "Bobbili",
    "lat": 18.57366,
    "lng": 83.35925
  },
  {
    "state": "Andhra Pradesh",
    "name": "Challapalle",
    "lat": 16.11756,
    "lng": 80.93139
  },
  {
    "state": "Andhra Pradesh",
    "name": "Chemmumiahpet",
    "lat": 15.89794,
    "lng": 79.32129
  },
  {
    "state": "Andhra Pradesh",
    "name": "Chilakalurupet",
    "lat": 16.08987,
    "lng": 80.16705
  },
  {
    "state": "Andhra Pradesh",
    "name": "Chinnachowk",
    "lat": 14.47516,
    "lng": 78.8354
  },
  {
    "state": "Andhra Pradesh",
    "name": "Chipurupalle",
    "lat": 18.31142,
    "lng": 83.56846
  },
  {
    "state": "Andhra Pradesh",
    "name": "Chirala",
    "lat": 15.82385,
    "lng": 80.35219
  },
  {
    "state": "Andhra Pradesh",
    "name": "Chittoor",
    "lat": 13.41667,
    "lng": 79
  },
  {
    "state": "Andhra Pradesh",
    "name": "Chodavaram",
    "lat": 17.82884,
    "lng": 82.93526
  },
  {
    "state": "Andhra Pradesh",
    "name": "Cuddapah",
    "lat": 14.41667,
    "lng": 78.75
  },
  {
    "state": "Andhra Pradesh",
    "name": "Cumbum",
    "lat": 15.58171,
    "lng": 79.11059
  },
  {
    "state": "Andhra Pradesh",
    "name": "Darsi",
    "lat": 15.76978,
    "lng": 79.67939
  },
  {
    "state": "Andhra Pradesh",
    "name": "Dharmavaram",
    "lat": 14.41435,
    "lng": 77.72035
  },
  {
    "state": "Andhra Pradesh",
    "name": "Dhone",
    "lat": 15.3952,
    "lng": 77.8715
  },
  {
    "state": "Andhra Pradesh",
    "name": "Diguvametta",
    "lat": 15.39507,
    "lng": 78.8293
  },
  {
    "state": "Andhra Pradesh",
    "name": "East Godavari",
    "lat": 17.83333,
    "lng": 81.83333
  },
  {
    "state": "Andhra Pradesh",
    "name": "Elamanchili",
    "lat": 17.54907,
    "lng": 82.85749
  },
  {
    "state": "Andhra Pradesh",
    "name": "Ellore",
    "lat": 16.71311,
    "lng": 81.10437
  },
  {
    "state": "Andhra Pradesh",
    "name": "Emmiganur",
    "lat": 15.77203,
    "lng": 77.48345
  },
  {
    "state": "Andhra Pradesh",
    "name": "Erraguntla",
    "lat": 14.63853,
    "lng": 78.53974
  },
  {
    "state": "Andhra Pradesh",
    "name": "Etikoppaka",
    "lat": 17.5,
    "lng": 82.73333
  },
  {
    "state": "Andhra Pradesh",
    "name": "Gajuwaka",
    "lat": 17.7,
    "lng": 83.21667
  },
  {
    "state": "Andhra Pradesh",
    "name": "Ganguvada",
    "lat": 18.66667,
    "lng": 84.11667
  },
  {
    "state": "Andhra Pradesh",
    "name": "Gannavaram",
    "lat": 16.54092,
    "lng": 80.80213
  },
  {
    "state": "Andhra Pradesh",
    "name": "Giddalur",
    "lat": 15.37439,
    "lng": 78.92609
  },
  {
    "state": "Andhra Pradesh",
    "name": "Gokavaram",
    "lat": 17.25823,
    "lng": 81.84985
  },
  {
    "state": "Andhra Pradesh",
    "name": "Gorantla",
    "lat": 13.98411,
    "lng": 77.77224
  },
  {
    "state": "Andhra Pradesh",
    "name": "Gudivada",
    "lat": 16.43547,
    "lng": 80.99555
  },
  {
    "state": "Andhra Pradesh",
    "name": "Gudlavalleru",
    "lat": 16.35,
    "lng": 81.05
  },
  {
    "state": "Andhra Pradesh",
    "name": "Gudur",
    "lat": 14.15093,
    "lng": 79.8521
  },
  {
    "state": "Andhra Pradesh",
    "name": "Guntakal Junction",
    "lat": 15.17112,
    "lng": 77.36244
  },
  {
    "state": "Andhra Pradesh",
    "name": "Guntur",
    "lat": 16.29974,
    "lng": 80.45729
  },
  {
    "state": "Andhra Pradesh",
    "name": "Hindupur",
    "lat": 13.82807,
    "lng": 77.49143
  },
  {
    "state": "Andhra Pradesh",
    "name": "Ichchapuram",
    "lat": 19.11393,
    "lng": 84.68721
  },
  {
    "state": "Andhra Pradesh",
    "name": "Jaggayyapeta",
    "lat": 16.8938,
    "lng": 80.09807
  },
  {
    "state": "Andhra Pradesh",
    "name": "Jammalamadugu",
    "lat": 14.84677,
    "lng": 78.38314
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kadiri",
    "lat": 14.11168,
    "lng": 78.15982
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kaikalur",
    "lat": 16.55154,
    "lng": 81.214
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kakinada",
    "lat": 16.96036,
    "lng": 82.23809
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kalyandurg",
    "lat": 14.54519,
    "lng": 77.10552
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kamalapuram",
    "lat": 14.5983,
    "lng": 78.66948
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kandukur",
    "lat": 15.21542,
    "lng": 79.9039
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kanigiri",
    "lat": 15.40555,
    "lng": 79.50694
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kankipadu",
    "lat": 16.4353,
    "lng": 80.76715
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kanuru",
    "lat": 16.28584,
    "lng": 81.25464
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kavali",
    "lat": 14.9163,
    "lng": 79.99449
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kolanukonda",
    "lat": 16.45392,
    "lng": 80.61046
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kondapalle",
    "lat": 16.61989,
    "lng": 80.54244
  },
  {
    "state": "Andhra Pradesh",
    "name": "Korukollu",
    "lat": 16.5,
    "lng": 81.25
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kosigi",
    "lat": 15.8551,
    "lng": 77.24463
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kovvur",
    "lat": 17.0162,
    "lng": 81.72934
  },
  {
    "state": "Andhra Pradesh",
    "name": "Krishna",
    "lat": 16.66667,
    "lng": 81
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kuppam",
    "lat": 12.74931,
    "lng": 78.34189
  },
  {
    "state": "Andhra Pradesh",
    "name": "Kurnool",
    "lat": 15.58333,
    "lng": 78.33333
  },
  {
    "state": "Andhra Pradesh",
    "name": "Macherla",
    "lat": 16.47635,
    "lng": 79.43533
  },
  {
    "state": "Andhra Pradesh",
    "name": "Machilipatnam",
    "lat": 16.18747,
    "lng": 81.13888
  },
  {
    "state": "Andhra Pradesh",
    "name": "Madanapalle",
    "lat": 13.5503,
    "lng": 78.50288
  },
  {
    "state": "Andhra Pradesh",
    "name": "Madugula",
    "lat": 17.91589,
    "lng": 82.81578
  },
  {
    "state": "Andhra Pradesh",
    "name": "Mandapeta",
    "lat": 16.86254,
    "lng": 81.92921
  },
  {
    "state": "Andhra Pradesh",
    "name": "Mandasa",
    "lat": 18.8683,
    "lng": 84.46296
  },
  {
    "state": "Andhra Pradesh",
    "name": "Mangalagiri",
    "lat": 16.43083,
    "lng": 80.56815
  },
  {
    "state": "Andhra Pradesh",
    "name": "Markapur",
    "lat": 15.73534,
    "lng": 79.26848
  },
  {
    "state": "Andhra Pradesh",
    "name": "Nagari",
    "lat": 13.32139,
    "lng": 79.58557
  },
  {
    "state": "Andhra Pradesh",
    "name": "Nagireddipalli",
    "lat": 14.27005,
    "lng": 79.10131
  },
  {
    "state": "Andhra Pradesh",
    "name": "Nandigama",
    "lat": 16.7717,
    "lng": 80.28596
  },
  {
    "state": "Andhra Pradesh",
    "name": "Nandikotkur",
    "lat": 15.85668,
    "lng": 78.26569
  },
  {
    "state": "Andhra Pradesh",
    "name": "Nandyal",
    "lat": 15.47799,
    "lng": 78.4836
  },
  {
    "state": "Andhra Pradesh",
    "name": "Narasannapeta",
    "lat": 18.41428,
    "lng": 84.04463
  },
  {
    "state": "Andhra Pradesh",
    "name": "Narasapur",
    "lat": 16.43425,
    "lng": 81.69845
  },
  {
    "state": "Andhra Pradesh",
    "name": "Narasaraopet",
    "lat": 16.23488,
    "lng": 80.04927
  },
  {
    "state": "Andhra Pradesh",
    "name": "Narasingapuram",
    "lat": 13.60759,
    "lng": 79.31652
  },
  {
    "state": "Andhra Pradesh",
    "name": "Narayanavanam",
    "lat": 13.42565,
    "lng": 79.58881
  },
  {
    "state": "Andhra Pradesh",
    "name": "Narsipatnam",
    "lat": 17.66709,
    "lng": 82.61245
  },
  {
    "state": "Andhra Pradesh",
    "name": "Nayudupet",
    "lat": 13.90742,
    "lng": 79.89465
  },
  {
    "state": "Andhra Pradesh",
    "name": "Nellore",
    "lat": 14.08333,
    "lng": 79.58333
  },
  {
    "state": "Andhra Pradesh",
    "name": "Nidadavole",
    "lat": 16.90572,
    "lng": 81.67222
  },
  {
    "state": "Andhra Pradesh",
    "name": "Nuzvid",
    "lat": 16.78854,
    "lng": 80.84593
  },
  {
    "state": "Andhra Pradesh",
    "name": "Ongole",
    "lat": 15.50357,
    "lng": 80.04454
  },
  {
    "state": "Andhra Pradesh",
    "name": "Pakala",
    "lat": 13.44903,
    "lng": 79.11493
  },
  {
    "state": "Andhra Pradesh",
    "name": "Palakollu",
    "lat": 16.5167,
    "lng": 81.73
  },
  {
    "state": "Andhra Pradesh",
    "name": "Palasa",
    "lat": 18.77257,
    "lng": 84.41012
  },
  {
    "state": "Andhra Pradesh",
    "name": "Palkonda",
    "lat": 18.60374,
    "lng": 83.75568
  },
  {
    "state": "Andhra Pradesh",
    "name": "Pallevada",
    "lat": 16.5779,
    "lng": 81.29463
  },
  {
    "state": "Andhra Pradesh",
    "name": "Palmaner",
    "lat": 13.2,
    "lng": 78.74725
  },
  {
    "state": "Andhra Pradesh",
    "name": "Parlakimidi",
    "lat": 18.78113,
    "lng": 84.08836
  },
  {
    "state": "Andhra Pradesh",
    "name": "Parvatipuram",
    "lat": 18.78392,
    "lng": 83.42569
  },
  {
    "state": "Andhra Pradesh",
    "name": "Pavuluru",
    "lat": 15.85292,
    "lng": 80.16468
  },
  {
    "state": "Andhra Pradesh",
    "name": "Pedana",
    "lat": 16.25582,
    "lng": 81.14378
  },
  {
    "state": "Andhra Pradesh",
    "name": "pedda nakkalapalem",
    "lat": 15.8668,
    "lng": 80.16202
  },
  {
    "state": "Andhra Pradesh",
    "name": "Peddapuram",
    "lat": 17.07701,
    "lng": 82.13836
  },
  {
    "state": "Andhra Pradesh",
    "name": "Penugonda",
    "lat": 16.65363,
    "lng": 81.7455
  },
  {
    "state": "Andhra Pradesh",
    "name": "Penukonda",
    "lat": 14.08286,
    "lng": 77.59473
  },
  {
    "state": "Andhra Pradesh",
    "name": "Phirangipuram",
    "lat": 16.29078,
    "lng": 80.26233
  },
  {
    "state": "Andhra Pradesh",
    "name": "Pippara",
    "lat": 16.71667,
    "lng": 81.55
  },
  {
    "state": "Andhra Pradesh",
    "name": "Pithapuram",
    "lat": 17.1168,
    "lng": 82.25284
  },
  {
    "state": "Andhra Pradesh",
    "name": "Polavaram",
    "lat": 17.24754,
    "lng": 81.64372
  },
  {
    "state": "Andhra Pradesh",
    "name": "Ponnur",
    "lat": 16.07114,
    "lng": 80.54944
  },
  {
    "state": "Andhra Pradesh",
    "name": "Ponnuru",
    "lat": 16.06547,
    "lng": 80.55203
  },
  {
    "state": "Andhra Pradesh",
    "name": "Prakasam",
    "lat": 15.5,
    "lng": 79.5
  },
  {
    "state": "Andhra Pradesh",
    "name": "Proddatur",
    "lat": 14.7502,
    "lng": 78.54813
  },
  {
    "state": "Andhra Pradesh",
    "name": "Pulivendla",
    "lat": 14.42139,
    "lng": 78.22502
  },
  {
    "state": "Andhra Pradesh",
    "name": "Punganuru",
    "lat": 13.36672,
    "lng": 78.57186
  },
  {
    "state": "Andhra Pradesh",
    "name": "Puttaparthi",
    "lat": 14.1652,
    "lng": 77.8117
  },
  {
    "state": "Andhra Pradesh",
    "name": "Puttur",
    "lat": 13.44189,
    "lng": 79.55314
  },
  {
    "state": "Andhra Pradesh",
    "name": "Rajahmundry",
    "lat": 17.00517,
    "lng": 81.77784
  },
  {
    "state": "Andhra Pradesh",
    "name": "Ramachandrapuram",
    "lat": 16.83636,
    "lng": 82.02871
  },
  {
    "state": "Andhra Pradesh",
    "name": "Ramanayyapeta",
    "lat": 16.94516,
    "lng": 82.2385
  },
  {
    "state": "Andhra Pradesh",
    "name": "Ramapuram",
    "lat": 15.28749,
    "lng": 77.86722
  },
  {
    "state": "Andhra Pradesh",
    "name": "Rampachodavaram",
    "lat": 17.44088,
    "lng": 81.77558
  },
  {
    "state": "Andhra Pradesh",
    "name": "Rayachoti",
    "lat": 14.05723,
    "lng": 78.75056
  },
  {
    "state": "Andhra Pradesh",
    "name": "Rayadrug",
    "lat": 14.69971,
    "lng": 76.85241
  },
  {
    "state": "Andhra Pradesh",
    "name": "Razam",
    "lat": 18.44909,
    "lng": 83.65957
  },
  {
    "state": "Andhra Pradesh",
    "name": "Razampeta",
    "lat": 14.19544,
    "lng": 79.15896
  },
  {
    "state": "Andhra Pradesh",
    "name": "Razole",
    "lat": 16.47608,
    "lng": 81.83912
  },
  {
    "state": "Andhra Pradesh",
    "name": "Renigunta",
    "lat": 13.65143,
    "lng": 79.51256
  },
  {
    "state": "Andhra Pradesh",
    "name": "Repalle",
    "lat": 16.0184,
    "lng": 80.82958
  },
  {
    "state": "Andhra Pradesh",
    "name": "Salur",
    "lat": 18.51716,
    "lng": 83.20548
  },
  {
    "state": "Andhra Pradesh",
    "name": "Samalkot",
    "lat": 17.05675,
    "lng": 82.17639
  },
  {
    "state": "Andhra Pradesh",
    "name": "Sattenapalle",
    "lat": 16.39381,
    "lng": 80.15221
  },
  {
    "state": "Andhra Pradesh",
    "name": "Singarayakonda",
    "lat": 15.23046,
    "lng": 80.02794
  },
  {
    "state": "Andhra Pradesh",
    "name": "Sompeta",
    "lat": 18.94419,
    "lng": 84.58449
  },
  {
    "state": "Andhra Pradesh",
    "name": "Srikakulam",
    "lat": 18.2989,
    "lng": 83.89751
  },
  {
    "state": "Andhra Pradesh",
    "name": "Srisailain",
    "lat": 16.07217,
    "lng": 78.86816
  },
  {
    "state": "Andhra Pradesh",
    "name": "Suluru",
    "lat": 13.7,
    "lng": 80.01667
  },
  {
    "state": "Andhra Pradesh",
    "name": "Tadepalle",
    "lat": 16.48333,
    "lng": 80.6
  },
  {
    "state": "Andhra Pradesh",
    "name": "Tadepallegudem",
    "lat": 16.81467,
    "lng": 81.52717
  },
  {
    "state": "Andhra Pradesh",
    "name": "Tadpatri",
    "lat": 14.90832,
    "lng": 78.01031
  },
  {
    "state": "Andhra Pradesh",
    "name": "Tanuku",
    "lat": 16.75438,
    "lng": 81.68143
  },
  {
    "state": "Andhra Pradesh",
    "name": "Tekkali",
    "lat": 18.6057,
    "lng": 84.23546
  },
  {
    "state": "Andhra Pradesh",
    "name": "Tirumala",
    "lat": 13.68333,
    "lng": 79.35
  },
  {
    "state": "Andhra Pradesh",
    "name": "Tirupati",
    "lat": 13.63551,
    "lng": 79.41989
  },
  {
    "state": "Andhra Pradesh",
    "name": "Tuni",
    "lat": 17.35905,
    "lng": 82.54607
  },
  {
    "state": "Andhra Pradesh",
    "name": "Uravakonda",
    "lat": 14.94348,
    "lng": 77.25494
  },
  {
    "state": "Andhra Pradesh",
    "name": "vadlamuru",
    "lat": 17.09545,
    "lng": 82.16565
  },
  {
    "state": "Andhra Pradesh",
    "name": "Vadlapudi",
    "lat": 14.31119,
    "lng": 79.8043
  },
  {
    "state": "Andhra Pradesh",
    "name": "Venkatagiri",
    "lat": 13.96005,
    "lng": 79.58032
  },
  {
    "state": "Andhra Pradesh",
    "name": "Vepagunta",
    "lat": 17.77844,
    "lng": 83.21577
  },
  {
    "state": "Andhra Pradesh",
    "name": "Vetapalem",
    "lat": 15.78502,
    "lng": 80.30663
  },
  {
    "state": "Andhra Pradesh",
    "name": "Vijayawada",
    "lat": 16.50745,
    "lng": 80.6466
  },
  {
    "state": "Andhra Pradesh",
    "name": "Vinukonda",
    "lat": 16.0531,
    "lng": 79.73964
  },
  {
    "state": "Andhra Pradesh",
    "name": "Visakhapatnam",
    "lat": 17.68009,
    "lng": 83.20161
  },
  {
    "state": "Andhra Pradesh",
    "name": "Vizianagaram",
    "lat": 18.11692,
    "lng": 83.41148
  },
  {
    "state": "Andhra Pradesh",
    "name": "Vizianagaram District",
    "lat": 18.41102,
    "lng": 83.37677
  },
  {
    "state": "Andhra Pradesh",
    "name": "Vuyyuru",
    "lat": 16.36307,
    "lng": 80.84406
  },
  {
    "state": "Andhra Pradesh",
    "name": "West Godavari",
    "lat": 17,
    "lng": 81.16667
  },
  {
    "state": "Andhra Pradesh",
    "name": "Yanam",
    "lat": 16.73308,
    "lng": 82.21364
  },
  {
    "state": "Andhra Pradesh",
    "name": "Yanamalakuduru",
    "lat": 16.48531,
    "lng": 80.66746
  },
  {
    "state": "Andhra Pradesh",
    "name": "Yarada",
    "lat": 17.65872,
    "lng": 83.27419
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Along",
    "lat": 28.16951,
    "lng": 94.8006
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Anjaw",
    "lat": 28.06549,
    "lng": 96.82878
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Basar",
    "lat": 27.99008,
    "lng": 94.69451
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Bomdila",
    "lat": 27.26475,
    "lng": 92.42472
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Changlang",
    "lat": 27.36265,
    "lng": 96.34518
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Dibang Valley",
    "lat": 28.7,
    "lng": 95.7
  },
  {
    "state": "Arunachal Pradesh",
    "name": "East Kameng",
    "lat": 27.3,
    "lng": 93.05
  },
  {
    "state": "Arunachal Pradesh",
    "name": "East Siang",
    "lat": 28.12379,
    "lng": 95.16339
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Hayuliang",
    "lat": 28.07301,
    "lng": 96.54305
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Itanagar",
    "lat": 27.08694,
    "lng": 93.60987
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Khonsa",
    "lat": 27.01667,
    "lng": 95.56667
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Kurung Kumey",
    "lat": 27.99983,
    "lng": 93.3924
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Lohit District",
    "lat": 27.84012,
    "lng": 96.19521
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Lower Dibang Valley",
    "lat": 28.37258,
    "lng": 95.8804
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Lower Subansiri",
    "lat": 27.62554,
    "lng": 93.93908
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Margherita",
    "lat": 27.28482,
    "lng": 95.66796
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Naharlagun",
    "lat": 27.10467,
    "lng": 93.69518
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Pasighat",
    "lat": 28.06631,
    "lng": 95.32678
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Tawang",
    "lat": 27.57417,
    "lng": 91.92437
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Tezu",
    "lat": 27.91256,
    "lng": 96.12882
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Tirap",
    "lat": 27.01917,
    "lng": 95.51788
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Upper Siang",
    "lat": 28.83355,
    "lng": 94.91806
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Upper Subansiri",
    "lat": 28.3,
    "lng": 94
  },
  {
    "state": "Arunachal Pradesh",
    "name": "West Kameng",
    "lat": 27.4,
    "lng": 92.35
  },
  {
    "state": "Arunachal Pradesh",
    "name": "West Siang",
    "lat": 28.4,
    "lng": 94.55
  },
  {
    "state": "Arunachal Pradesh",
    "name": "Ziro",
    "lat": 27.59497,
    "lng": 93.83854
  },
  {
    "state": "Assam",
    "name": "Abhayapuri",
    "lat": 26.32255,
    "lng": 90.68526
  },
  {
    "state": "Assam",
    "name": "Amguri",
    "lat": 26.81482,
    "lng": 94.52614
  },
  {
    "state": "Assam",
    "name": "Badarpur",
    "lat": 24.86852,
    "lng": 92.59606
  },
  {
    "state": "Assam",
    "name": "Baksa",
    "lat": 26.69804,
    "lng": 91.15142
  },
  {
    "state": "Assam",
    "name": "Barpathar",
    "lat": 26.28709,
    "lng": 93.88844
  },
  {
    "state": "Assam",
    "name": "Barpeta",
    "lat": 26.47104,
    "lng": 91.0308
  },
  {
    "state": "Assam",
    "name": "Barpeta Road",
    "lat": 26.50284,
    "lng": 90.96937
  },
  {
    "state": "Assam",
    "name": "Basugaon",
    "lat": 26.46742,
    "lng": 90.41951
  },
  {
    "state": "Assam",
    "name": "Bihpuriagaon",
    "lat": 27.01718,
    "lng": 93.91673
  },
  {
    "state": "Assam",
    "name": "Bijni",
    "lat": 26.49588,
    "lng": 90.70298
  },
  {
    "state": "Assam",
    "name": "Bilasipara",
    "lat": 26.23285,
    "lng": 90.2341
  },
  {
    "state": "Assam",
    "name": "Bokajan",
    "lat": 26.02131,
    "lng": 93.77945
  },
  {
    "state": "Assam",
    "name": "Bokakhat",
    "lat": 26.64018,
    "lng": 93.60052
  },
  {
    "state": "Assam",
    "name": "Bongaigaon",
    "lat": 26.4603,
    "lng": 90.6464
  },
  {
    "state": "Assam",
    "name": "Cachar",
    "lat": 24.78213,
    "lng": 92.85771
  },
  {
    "state": "Assam",
    "name": "Chabua",
    "lat": 27.48253,
    "lng": 95.17451
  },
  {
    "state": "Assam",
    "name": "Chapar",
    "lat": 26.27266,
    "lng": 90.44556
  },
  {
    "state": "Assam",
    "name": "Chirang",
    "lat": 26.52527,
    "lng": 90.49066
  },
  {
    "state": "Assam",
    "name": "Darrang",
    "lat": 26.51195,
    "lng": 92.16843
  },
  {
    "state": "Assam",
    "name": "Dergaon",
    "lat": 26.7,
    "lng": 93.96667
  },
  {
    "state": "Assam",
    "name": "Dhekiajuli",
    "lat": 26.70367,
    "lng": 92.47808
  },
  {
    "state": "Assam",
    "name": "Dhemaji",
    "lat": 27.6091,
    "lng": 94.7942
  },
  {
    "state": "Assam",
    "name": "Dhing",
    "lat": 26.46793,
    "lng": 92.47336
  },
  {
    "state": "Assam",
    "name": "Dhubri",
    "lat": 26.06749,
    "lng": 90.02238
  },
  {
    "state": "Assam",
    "name": "Dibrugarh",
    "lat": 27.5,
    "lng": 95
  },
  {
    "state": "Assam",
    "name": "Digboi",
    "lat": 27.39321,
    "lng": 95.61839
  },
  {
    "state": "Assam",
    "name": "Dima Hasao District",
    "lat": 25.5,
    "lng": 93
  },
  {
    "state": "Assam",
    "name": "Diphu",
    "lat": 25.84341,
    "lng": 93.43116
  },
  {
    "state": "Assam",
    "name": "Dispur",
    "lat": 26.13564,
    "lng": 91.80069
  },
  {
    "state": "Assam",
    "name": "Duliagaon",
    "lat": 27.37227,
    "lng": 95.30754
  },
  {
    "state": "Assam",
    "name": "Dum Duma",
    "lat": 27.56884,
    "lng": 95.55664
  },
  {
    "state": "Assam",
    "name": "Gauripur",
    "lat": 26.08334,
    "lng": 89.96118
  },
  {
    "state": "Assam",
    "name": "Goalpara",
    "lat": 26.12791,
    "lng": 90.60974
  },
  {
    "state": "Assam",
    "name": "Gohpur",
    "lat": 26.88184,
    "lng": 93.6156
  },
  {
    "state": "Assam",
    "name": "Golaghat",
    "lat": 26.4092,
    "lng": 93.91193
  },
  {
    "state": "Assam",
    "name": "Golakganj",
    "lat": 26.10216,
    "lng": 89.82275
  },
  {
    "state": "Assam",
    "name": "Goshaingaon",
    "lat": 26.43946,
    "lng": 89.96307
  },
  {
    "state": "Assam",
    "name": "Guwahati",
    "lat": 26.1844,
    "lng": 91.7458
  },
  {
    "state": "Assam",
    "name": "Haflong",
    "lat": 25.16478,
    "lng": 93.01744
  },
  {
    "state": "Assam",
    "name": "Hailakandi",
    "lat": 24.5017,
    "lng": 92.60069
  },
  {
    "state": "Assam",
    "name": "Hajo",
    "lat": 26.2452,
    "lng": 91.52525
  },
  {
    "state": "Assam",
    "name": "Hojai",
    "lat": 26.00281,
    "lng": 92.85605
  },
  {
    "state": "Assam",
    "name": "Howli",
    "lat": 26.42237,
    "lng": 90.98004
  },
  {
    "state": "Assam",
    "name": "Jogighopa",
    "lat": 26.22646,
    "lng": 90.57247
  },
  {
    "state": "Assam",
    "name": "Jorhat",
    "lat": 26.8,
    "lng": 94.26
  },
  {
    "state": "Assam",
    "name": "Kamrup",
    "lat": 26.22322,
    "lng": 91.65344
  },
  {
    "state": "Assam",
    "name": "Kamrup Metropolitan",
    "lat": 26.05375,
    "lng": 92.00763
  },
  {
    "state": "Assam",
    "name": "Karbi Anglong",
    "lat": 26,
    "lng": 93.5
  },
  {
    "state": "Assam",
    "name": "Karimganj",
    "lat": 24.6,
    "lng": 92.4
  },
  {
    "state": "Assam",
    "name": "Kharupatia",
    "lat": 26.51839,
    "lng": 92.14722
  },
  {
    "state": "Assam",
    "name": "Kokrajhar",
    "lat": 26.6,
    "lng": 90.2
  },
  {
    "state": "Assam",
    "name": "Lakhimpur",
    "lat": 27.35,
    "lng": 94.25
  },
  {
    "state": "Assam",
    "name": "Lakhipur",
    "lat": 24.79281,
    "lng": 93.0091
  },
  {
    "state": "Assam",
    "name": "Lala",
    "lat": 24.55418,
    "lng": 92.61592
  },
  {
    "state": "Assam",
    "name": "Lumding Railway Colony",
    "lat": 25.74903,
    "lng": 93.16998
  },
  {
    "state": "Assam",
    "name": "Mahur",
    "lat": 25.18305,
    "lng": 93.11342
  },
  {
    "state": "Assam",
    "name": "Maibong",
    "lat": 25.30125,
    "lng": 93.13811
  },
  {
    "state": "Assam",
    "name": "Makum",
    "lat": 27.48652,
    "lng": 95.43646
  },
  {
    "state": "Assam",
    "name": "Mangaldai",
    "lat": 26.44212,
    "lng": 92.03047
  },
  {
    "state": "Assam",
    "name": "Mariani",
    "lat": 26.65725,
    "lng": 94.31529
  },
  {
    "state": "Assam",
    "name": "Moranha",
    "lat": 27.18735,
    "lng": 94.91557
  },
  {
    "state": "Assam",
    "name": "Morigaon",
    "lat": 26.25213,
    "lng": 92.34238
  },
  {
    "state": "Assam",
    "name": "Nagaon",
    "lat": 26.35037,
    "lng": 92.69225
  },
  {
    "state": "Assam",
    "name": "Nahorkatiya",
    "lat": 27.28912,
    "lng": 95.3418
  },
  {
    "state": "Assam",
    "name": "Nalbari",
    "lat": 26.5,
    "lng": 91.4
  },
  {
    "state": "Assam",
    "name": "Namrup",
    "lat": 27.19395,
    "lng": 95.31929
  },
  {
    "state": "Assam",
    "name": "Nazira",
    "lat": 26.91649,
    "lng": 94.73611
  },
  {
    "state": "Assam",
    "name": "North Guwahati",
    "lat": 26.19749,
    "lng": 91.7202
  },
  {
    "state": "Assam",
    "name": "North Lakhimpur",
    "lat": 27.23517,
    "lng": 94.10357
  },
  {
    "state": "Assam",
    "name": "Numaligarh",
    "lat": 26.62249,
    "lng": 93.72225
  },
  {
    "state": "Assam",
    "name": "Palasbari",
    "lat": 26.12388,
    "lng": 91.53974
  },
  {
    "state": "Assam",
    "name": "Raha",
    "lat": 26.23333,
    "lng": 92.51667
  },
  {
    "state": "Assam",
    "name": "Rangapara",
    "lat": 26.83772,
    "lng": 92.66876
  },
  {
    "state": "Assam",
    "name": "Rangia",
    "lat": 26.44931,
    "lng": 91.61356
  },
  {
    "state": "Assam",
    "name": "Sapatgram",
    "lat": 26.33732,
    "lng": 90.1236
  },
  {
    "state": "Assam",
    "name": "Sarupathar",
    "lat": 26.206,
    "lng": 96.81
  },
  {
    "state": "Assam",
    "name": "Sibsagar",
    "lat": 26.98427,
    "lng": 94.63784
  },
  {
    "state": "Assam",
    "name": "Silapathar",
    "lat": 27.59441,
    "lng": 94.72402
  },
  {
    "state": "Assam",
    "name": "Silchar",
    "lat": 24.82733,
    "lng": 92.79787
  },
  {
    "state": "Assam",
    "name": "Soalkuchi",
    "lat": 26.16806,
    "lng": 91.57111
  },
  {
    "state": "Assam",
    "name": "Sonari",
    "lat": 27.02462,
    "lng": 95.01629
  },
  {
    "state": "Assam",
    "name": "Sonitpur",
    "lat": 26.76748,
    "lng": 92.96425
  },
  {
    "state": "Assam",
    "name": "Sorbhog",
    "lat": 26.48612,
    "lng": 90.8859
  },
  {
    "state": "Assam",
    "name": "Tezpur",
    "lat": 26.63333,
    "lng": 92.8
  },
  {
    "state": "Assam",
    "name": "Tinsukia",
    "lat": 27.6,
    "lng": 95.6
  },
  {
    "state": "Assam",
    "name": "Titabar",
    "lat": 26.6014,
    "lng": 94.20386
  },
  {
    "state": "Assam",
    "name": "Udalguri",
    "lat": 26.75367,
    "lng": 92.10215
  },
  {
    "state": "Bihar",
    "name": "Amarpur",
    "lat": 25.03967,
    "lng": 86.90247
  },
  {
    "state": "Bihar",
    "name": "Araria",
    "lat": 26.2,
    "lng": 87.4
  },
  {
    "state": "Bihar",
    "name": "Arrah",
    "lat": 25.55629,
    "lng": 84.66335
  },
  {
    "state": "Bihar",
    "name": "Arwal",
    "lat": 25.16158,
    "lng": 84.6904
  },
  {
    "state": "Bihar",
    "name": "Asarganj",
    "lat": 25.15046,
    "lng": 86.68639
  },
  {
    "state": "Bihar",
    "name": "Aurangabad",
    "lat": 24.75204,
    "lng": 84.3742
  },
  {
    "state": "Bihar",
    "name": "Bagaha",
    "lat": 27.09918,
    "lng": 84.09003
  },
  {
    "state": "Bihar",
    "name": "Bahadurganj",
    "lat": 26.26172,
    "lng": 87.82443
  },
  {
    "state": "Bihar",
    "name": "Bairagnia",
    "lat": 26.74063,
    "lng": 85.27323
  },
  {
    "state": "Bihar",
    "name": "Baisi",
    "lat": 25.86302,
    "lng": 87.74487
  },
  {
    "state": "Bihar",
    "name": "Bakhtiyarpur",
    "lat": 25.46179,
    "lng": 85.53179
  },
  {
    "state": "Bihar",
    "name": "Bangaon",
    "lat": 25.86728,
    "lng": 86.51152
  },
  {
    "state": "Bihar",
    "name": "Banka",
    "lat": 24.89214,
    "lng": 86.98425
  },
  {
    "state": "Bihar",
    "name": "Banmankhi",
    "lat": 25.88857,
    "lng": 87.19421
  },
  {
    "state": "Bihar",
    "name": "Bar Bigha",
    "lat": 25.21855,
    "lng": 85.7332
  },
  {
    "state": "Bihar",
    "name": "Barauli",
    "lat": 26.38109,
    "lng": 84.58648
  },
  {
    "state": "Bihar",
    "name": "Barh",
    "lat": 25.48339,
    "lng": 85.70928
  },
  {
    "state": "Bihar",
    "name": "Barhiya",
    "lat": 25.28814,
    "lng": 86.02055
  },
  {
    "state": "Bihar",
    "name": "Bariarpur",
    "lat": 25.28791,
    "lng": 86.57643
  },
  {
    "state": "Bihar",
    "name": "Baruni",
    "lat": 25.47509,
    "lng": 85.96813
  },
  {
    "state": "Bihar",
    "name": "Begusarai",
    "lat": 25.41853,
    "lng": 86.13389
  },
  {
    "state": "Bihar",
    "name": "Belsand",
    "lat": 26.44365,
    "lng": 85.40076
  },
  {
    "state": "Bihar",
    "name": "Bettiah",
    "lat": 26.80229,
    "lng": 84.50311
  },
  {
    "state": "Bihar",
    "name": "Bhabhua",
    "lat": 25.04049,
    "lng": 83.60749
  },
  {
    "state": "Bihar",
    "name": "Bhagalpur",
    "lat": 25.29023,
    "lng": 87.06665
  },
  {
    "state": "Bihar",
    "name": "Bhagirathpur",
    "lat": 26.2695,
    "lng": 86.06346
  },
  {
    "state": "Bihar",
    "name": "Bhawanipur",
    "lat": 26.45352,
    "lng": 87.02744
  },
  {
    "state": "Bihar",
    "name": "Bhojpur",
    "lat": 25.30886,
    "lng": 84.44504
  },
  {
    "state": "Bihar",
    "name": "Bihar Sharif",
    "lat": 25.20084,
    "lng": 85.52389
  },
  {
    "state": "Bihar",
    "name": "Bihariganj",
    "lat": 25.73415,
    "lng": 86.98837
  },
  {
    "state": "Bihar",
    "name": "Bikramganj",
    "lat": 25.21073,
    "lng": 84.25508
  },
  {
    "state": "Bihar",
    "name": "Birpur",
    "lat": 26.50823,
    "lng": 87.01194
  },
  {
    "state": "Bihar",
    "name": "Buddh Gaya",
    "lat": 24.69808,
    "lng": 84.9869
  },
  {
    "state": "Bihar",
    "name": "Buxar",
    "lat": 25.5,
    "lng": 84.1
  },
  {
    "state": "Bihar",
    "name": "Chakia",
    "lat": 26.41598,
    "lng": 85.04665
  },
  {
    "state": "Bihar",
    "name": "Chapra",
    "lat": 25.78031,
    "lng": 84.74709
  },
  {
    "state": "Bihar",
    "name": "Chhatapur",
    "lat": 26.21965,
    "lng": 87.00479
  },
  {
    "state": "Bihar",
    "name": "Colgong",
    "lat": 25.26328,
    "lng": 87.23264
  },
  {
    "state": "Bihar",
    "name": "Dalsingh Sarai",
    "lat": 25.66795,
    "lng": 85.83636
  },
  {
    "state": "Bihar",
    "name": "Darbhanga",
    "lat": 26,
    "lng": 86
  },
  {
    "state": "Bihar",
    "name": "Daudnagar",
    "lat": 25.03473,
    "lng": 84.40095
  },
  {
    "state": "Bihar",
    "name": "Dehri",
    "lat": 24.90247,
    "lng": 84.18217
  },
  {
    "state": "Bihar",
    "name": "Dhaka",
    "lat": 26.67479,
    "lng": 85.16698
  },
  {
    "state": "Bihar",
    "name": "Dighwara",
    "lat": 25.74434,
    "lng": 85.01003
  },
  {
    "state": "Bihar",
    "name": "Dinapore",
    "lat": 25.63705,
    "lng": 85.04794
  },
  {
    "state": "Bihar",
    "name": "Dumra",
    "lat": 26.56708,
    "lng": 85.5204
  },
  {
    "state": "Bihar",
    "name": "Dumraon",
    "lat": 25.55265,
    "lng": 84.15149
  },
  {
    "state": "Bihar",
    "name": "Fatwa",
    "lat": 25.50958,
    "lng": 85.30504
  },
  {
    "state": "Bihar",
    "name": "Forbesganj",
    "lat": 26.30253,
    "lng": 87.26556
  },
  {
    "state": "Bihar",
    "name": "Gaya",
    "lat": 24.79686,
    "lng": 85.00385
  },
  {
    "state": "Bihar",
    "name": "Ghoga",
    "lat": 25.21738,
    "lng": 87.1571
  },
  {
    "state": "Bihar",
    "name": "Gopalganj",
    "lat": 26.5,
    "lng": 84.33333
  },
  {
    "state": "Bihar",
    "name": "Hajipur",
    "lat": 25.68544,
    "lng": 85.20981
  },
  {
    "state": "Bihar",
    "name": "Hilsa",
    "lat": 25.31642,
    "lng": 85.28234
  },
  {
    "state": "Bihar",
    "name": "Hisua",
    "lat": 24.8336,
    "lng": 85.41729
  },
  {
    "state": "Bihar",
    "name": "Islampur",
    "lat": 25.14075,
    "lng": 85.20587
  },
  {
    "state": "Bihar",
    "name": "Jagdispur",
    "lat": 25.46811,
    "lng": 84.41939
  },
  {
    "state": "Bihar",
    "name": "Jahanabad",
    "lat": 25.21368,
    "lng": 84.9871
  },
  {
    "state": "Bihar",
    "name": "Jamalpur",
    "lat": 25.31258,
    "lng": 86.48888
  },
  {
    "state": "Bihar",
    "name": "Jamui",
    "lat": 24.92082,
    "lng": 86.17538
  },
  {
    "state": "Bihar",
    "name": "Jaynagar",
    "lat": 26.59048,
    "lng": 86.13791
  },
  {
    "state": "Bihar",
    "name": "Jehanabad",
    "lat": 25.20701,
    "lng": 84.99573
  },
  {
    "state": "Bihar",
    "name": "Jha-Jha",
    "lat": 24.77107,
    "lng": 86.37888
  },
  {
    "state": "Bihar",
    "name": "Jhanjharpur",
    "lat": 26.26467,
    "lng": 86.27993
  },
  {
    "state": "Bihar",
    "name": "Jogbani",
    "lat": 26.39905,
    "lng": 87.26525
  },
  {
    "state": "Bihar",
    "name": "Kaimur District",
    "lat": 25.05077,
    "lng": 83.58261
  },
  {
    "state": "Bihar",
    "name": "Kasba",
    "lat": 25.85643,
    "lng": 87.53836
  },
  {
    "state": "Bihar",
    "name": "Katihar",
    "lat": 25.5,
    "lng": 87.6
  },
  {
    "state": "Bihar",
    "name": "Khagaria",
    "lat": 25.5022,
    "lng": 86.46708
  },
  {
    "state": "Bihar",
    "name": "Khagaul",
    "lat": 25.57898,
    "lng": 85.04564
  },
  {
    "state": "Bihar",
    "name": "Kharagpur",
    "lat": 25.12446,
    "lng": 86.55578
  },
  {
    "state": "Bihar",
    "name": "Khusropur",
    "lat": 25.48174,
    "lng": 85.38492
  },
  {
    "state": "Bihar",
    "name": "Kishanganj",
    "lat": 26.3,
    "lng": 88
  },
  {
    "state": "Bihar",
    "name": "Koath",
    "lat": 25.32643,
    "lng": 84.25983
  },
  {
    "state": "Bihar",
    "name": "Koelwar",
    "lat": 25.58055,
    "lng": 84.79751
  },
  {
    "state": "Bihar",
    "name": "Lakhisarai",
    "lat": 25.2,
    "lng": 86.2
  },
  {
    "state": "Bihar",
    "name": "Lalganj",
    "lat": 25.86894,
    "lng": 85.17394
  },
  {
    "state": "Bihar",
    "name": "Luckeesarai",
    "lat": 25.1765,
    "lng": 86.0947
  },
  {
    "state": "Bihar",
    "name": "Madhepura",
    "lat": 25.8,
    "lng": 87
  },
  {
    "state": "Bihar",
    "name": "Madhipura",
    "lat": 25.92127,
    "lng": 86.79271
  },
  {
    "state": "Bihar",
    "name": "Madhubani",
    "lat": 26.35367,
    "lng": 86.07169
  },
  {
    "state": "Bihar",
    "name": "Maharajgani",
    "lat": 26.11017,
    "lng": 84.50365
  },
  {
    "state": "Bihar",
    "name": "Mairwa",
    "lat": 26.23218,
    "lng": 84.16349
  },
  {
    "state": "Bihar",
    "name": "Maner",
    "lat": 25.64602,
    "lng": 84.87291
  },
  {
    "state": "Bihar",
    "name": "Manihari",
    "lat": 25.33891,
    "lng": 87.61998
  },
  {
    "state": "Bihar",
    "name": "Marhaura",
    "lat": 25.97349,
    "lng": 84.86796
  },
  {
    "state": "Bihar",
    "name": "Masaurhi Buzurg",
    "lat": 25.35417,
    "lng": 85.03195
  },
  {
    "state": "Bihar",
    "name": "Mohiuddinnagar",
    "lat": 25.57374,
    "lng": 85.66944
  },
  {
    "state": "Bihar",
    "name": "Mokameh",
    "lat": 25.39662,
    "lng": 85.9219
  },
  {
    "state": "Bihar",
    "name": "Monghyr",
    "lat": 25.37459,
    "lng": 86.47455
  },
  {
    "state": "Bihar",
    "name": "Mothihari",
    "lat": 26.64862,
    "lng": 84.91656
  },
  {
    "state": "Bihar",
    "name": "Munger",
    "lat": 25.36099,
    "lng": 86.46515
  },
  {
    "state": "Bihar",
    "name": "Murliganj",
    "lat": 25.8969,
    "lng": 86.99577
  },
  {
    "state": "Bihar",
    "name": "Muzaffarpur",
    "lat": 26.16667,
    "lng": 85.41667
  },
  {
    "state": "Bihar",
    "name": "Nabinagar",
    "lat": 24.60681,
    "lng": 84.12624
  },
  {
    "state": "Bihar",
    "name": "Nalanda",
    "lat": 25.25,
    "lng": 85.58333
  },
  {
    "state": "Bihar",
    "name": "Nasriganj",
    "lat": 25.0514,
    "lng": 84.32839
  },
  {
    "state": "Bihar",
    "name": "Naugachhia",
    "lat": 25.38807,
    "lng": 87.09906
  },
  {
    "state": "Bihar",
    "name": "Nawada",
    "lat": 24.75,
    "lng": 85.5
  },
  {
    "state": "Bihar",
    "name": "Nirmali",
    "lat": 26.31397,
    "lng": 86.58537
  },
  {
    "state": "Bihar",
    "name": "Pashchim Champaran",
    "lat": 27,
    "lng": 84.5
  },
  {
    "state": "Bihar",
    "name": "Patna",
    "lat": 25.41667,
    "lng": 85.16667
  },
  {
    "state": "Bihar",
    "name": "Piro",
    "lat": 25.33218,
    "lng": 84.40454
  },
  {
    "state": "Bihar",
    "name": "Pupri",
    "lat": 26.47079,
    "lng": 85.70311
  },
  {
    "state": "Bihar",
    "name": "Purba Champaran",
    "lat": 26.58333,
    "lng": 84.83333
  },
  {
    "state": "Bihar",
    "name": "Purnia",
    "lat": 25.81614,
    "lng": 87.40708
  },
  {
    "state": "Bihar",
    "name": "Rafiganj",
    "lat": 24.81757,
    "lng": 84.63445
  },
  {
    "state": "Bihar",
    "name": "Raghunathpur",
    "lat": 25.64492,
    "lng": 87.91762
  },
  {
    "state": "Bihar",
    "name": "Rajgir",
    "lat": 25.02828,
    "lng": 85.42079
  },
  {
    "state": "Bihar",
    "name": "Ramnagar",
    "lat": 27.16371,
    "lng": 84.32342
  },
  {
    "state": "Bihar",
    "name": "Raxaul",
    "lat": 26.97982,
    "lng": 84.85065
  },
  {
    "state": "Bihar",
    "name": "Revelganj",
    "lat": 25.78976,
    "lng": 84.63596
  },
  {
    "state": "Bihar",
    "name": "Rohtas",
    "lat": 24.97941,
    "lng": 84.02774
  },
  {
    "state": "Bihar",
    "name": "Rusera",
    "lat": 25.75355,
    "lng": 86.02597
  },
  {
    "state": "Bihar",
    "name": "Sagauli",
    "lat": 26.7639,
    "lng": 84.74341
  },
  {
    "state": "Bihar",
    "name": "Saharsa",
    "lat": 25.87498,
    "lng": 86.59611
  },
  {
    "state": "Bihar",
    "name": "Samastipur",
    "lat": 25.75,
    "lng": 85.91667
  },
  {
    "state": "Bihar",
    "name": "Saran",
    "lat": 25.91667,
    "lng": 84.75
  },
  {
    "state": "Bihar",
    "name": "Shahbazpur",
    "lat": 26.30511,
    "lng": 87.28865
  },
  {
    "state": "Bihar",
    "name": "Shahpur",
    "lat": 25.60293,
    "lng": 84.40412
  },
  {
    "state": "Bihar",
    "name": "Sheikhpura",
    "lat": 25.13073,
    "lng": 85.78176
  },
  {
    "state": "Bihar",
    "name": "Sheohar",
    "lat": 26.5,
    "lng": 85.3
  },
  {
    "state": "Bihar",
    "name": "Sherghati",
    "lat": 24.5595,
    "lng": 84.79162
  },
  {
    "state": "Bihar",
    "name": "Silao",
    "lat": 25.08358,
    "lng": 85.42804
  },
  {
    "state": "Bihar",
    "name": "Sitamarhi",
    "lat": 26.66667,
    "lng": 85.5
  },
  {
    "state": "Bihar",
    "name": "Siwan",
    "lat": 26.22096,
    "lng": 84.35609
  },
  {
    "state": "Bihar",
    "name": "Supaul",
    "lat": 26.25,
    "lng": 86.8
  },
  {
    "state": "Bihar",
    "name": "Teghra",
    "lat": 25.49043,
    "lng": 85.94001
  },
  {
    "state": "Bihar",
    "name": "Tekari",
    "lat": 24.94253,
    "lng": 84.84265
  },
  {
    "state": "Bihar",
    "name": "Thakurganj",
    "lat": 26.42742,
    "lng": 88.13112
  },
  {
    "state": "Bihar",
    "name": "Vaishali",
    "lat": 25.75,
    "lng": 85.41667
  },
  {
    "state": "Bihar",
    "name": "Waris Aliganj",
    "lat": 25.0172,
    "lng": 85.64047
  },
  {
    "state": "Chhattisgarh",
    "name": "Akaltara",
    "lat": 22.02463,
    "lng": 82.42641
  },
  {
    "state": "Chhattisgarh",
    "name": "Ambagarh Chauki",
    "lat": 20.77644,
    "lng": 80.74608
  },
  {
    "state": "Chhattisgarh",
    "name": "Ambikapur",
    "lat": 23.11892,
    "lng": 83.19537
  },
  {
    "state": "Chhattisgarh",
    "name": "Arang",
    "lat": 21.19639,
    "lng": 81.96912
  },
  {
    "state": "Chhattisgarh",
    "name": "Baikunthpur",
    "lat": 23.26206,
    "lng": 82.56051
  },
  {
    "state": "Chhattisgarh",
    "name": "Balod",
    "lat": 20.73081,
    "lng": 81.20578
  },
  {
    "state": "Chhattisgarh",
    "name": "Baloda",
    "lat": 22.1389,
    "lng": 82.48171
  },
  {
    "state": "Chhattisgarh",
    "name": "Baloda Bazar",
    "lat": 21.65678,
    "lng": 82.16062
  },
  {
    "state": "Chhattisgarh",
    "name": "Basna",
    "lat": 21.27885,
    "lng": 82.8267
  },
  {
    "state": "Chhattisgarh",
    "name": "Bastar",
    "lat": 19.26794,
    "lng": 81.73828
  },
  {
    "state": "Chhattisgarh",
    "name": "Bemetara",
    "lat": 21.71556,
    "lng": 81.53423
  },
  {
    "state": "Chhattisgarh",
    "name": "Bhanpuri",
    "lat": 21.0919,
    "lng": 80.93218
  },
  {
    "state": "Chhattisgarh",
    "name": "Bhatapara",
    "lat": 21.735,
    "lng": 81.94711
  },
  {
    "state": "Chhattisgarh",
    "name": "Bhatgaon",
    "lat": 21.15,
    "lng": 81.7
  },
  {
    "state": "Chhattisgarh",
    "name": "Bhilai",
    "lat": 21.20919,
    "lng": 81.4285
  },
  {
    "state": "Chhattisgarh",
    "name": "Bijapur",
    "lat": 18.84322,
    "lng": 80.7761
  },
  {
    "state": "Chhattisgarh",
    "name": "Bilaspur",
    "lat": 22.38333,
    "lng": 82.13333
  },
  {
    "state": "Chhattisgarh",
    "name": "Champa",
    "lat": 22.03532,
    "lng": 82.64234
  },
  {
    "state": "Chhattisgarh",
    "name": "Chhuikhadan",
    "lat": 21.52316,
    "lng": 80.99788
  },
  {
    "state": "Chhattisgarh",
    "name": "Deori",
    "lat": 21.45,
    "lng": 82.61667
  },
  {
    "state": "Chhattisgarh",
    "name": "Dhamtari",
    "lat": 20.70718,
    "lng": 81.54874
  },
  {
    "state": "Chhattisgarh",
    "name": "Dongargaon",
    "lat": 20.97172,
    "lng": 80.85077
  },
  {
    "state": "Chhattisgarh",
    "name": "Dongargarh",
    "lat": 21.18893,
    "lng": 80.75459
  },
  {
    "state": "Chhattisgarh",
    "name": "Durg",
    "lat": 21.15,
    "lng": 81.4
  },
  {
    "state": "Chhattisgarh",
    "name": "Gandai",
    "lat": 21.66667,
    "lng": 81.10013
  },
  {
    "state": "Chhattisgarh",
    "name": "Gariaband",
    "lat": 20.63323,
    "lng": 82.06221
  },
  {
    "state": "Chhattisgarh",
    "name": "Gaurela",
    "lat": 22.75449,
    "lng": 81.90107
  },
  {
    "state": "Chhattisgarh",
    "name": "Gharghoda",
    "lat": 22.17427,
    "lng": 83.3517
  },
  {
    "state": "Chhattisgarh",
    "name": "Gidam",
    "lat": 18.97431,
    "lng": 81.39894
  },
  {
    "state": "Chhattisgarh",
    "name": "Jagdalpur",
    "lat": 19.08136,
    "lng": 82.02131
  },
  {
    "state": "Chhattisgarh",
    "name": "Janjgir",
    "lat": 22.00922,
    "lng": 82.5778
  },
  {
    "state": "Chhattisgarh",
    "name": "Janjgir-Champa",
    "lat": 21.9,
    "lng": 82.7
  },
  {
    "state": "Chhattisgarh",
    "name": "Jashpur",
    "lat": 22.78495,
    "lng": 83.84573
  },
  {
    "state": "Chhattisgarh",
    "name": "Jashpurnagar",
    "lat": 22.88783,
    "lng": 84.13864
  },
  {
    "state": "Chhattisgarh",
    "name": "Junagarh",
    "lat": 19.85993,
    "lng": 82.93385
  },
  {
    "state": "Chhattisgarh",
    "name": "Kabeerdham",
    "lat": 22.1,
    "lng": 81.2
  },
  {
    "state": "Chhattisgarh",
    "name": "Kanker",
    "lat": 20.27193,
    "lng": 81.49177
  },
  {
    "state": "Chhattisgarh",
    "name": "Katghora",
    "lat": 22.50247,
    "lng": 82.54279
  },
  {
    "state": "Chhattisgarh",
    "name": "Kawardha",
    "lat": 22.00853,
    "lng": 81.23148
  },
  {
    "state": "Chhattisgarh",
    "name": "Khairagarh",
    "lat": 21.41859,
    "lng": 80.97942
  },
  {
    "state": "Chhattisgarh",
    "name": "Khamharia",
    "lat": 20.976,
    "lng": 82.25116
  },
  {
    "state": "Chhattisgarh",
    "name": "Kharod",
    "lat": 21.7442,
    "lng": 82.5788
  },
  {
    "state": "Chhattisgarh",
    "name": "Kharsia",
    "lat": 21.98953,
    "lng": 83.10476
  },
  {
    "state": "Chhattisgarh",
    "name": "Kirandul",
    "lat": 18.63649,
    "lng": 81.25827
  },
  {
    "state": "Chhattisgarh",
    "name": "Kondagaon",
    "lat": 19.59083,
    "lng": 81.664
  },
  {
    "state": "Chhattisgarh",
    "name": "Korba",
    "lat": 22.5,
    "lng": 82.6
  },
  {
    "state": "Chhattisgarh",
    "name": "Koriya",
    "lat": 23.48326,
    "lng": 82.15037
  },
  {
    "state": "Chhattisgarh",
    "name": "Kota",
    "lat": 22.29507,
    "lng": 82.02366
  },
  {
    "state": "Chhattisgarh",
    "name": "Kotaparh",
    "lat": 19.14256,
    "lng": 82.32536
  },
  {
    "state": "Chhattisgarh",
    "name": "Kumhari",
    "lat": 21.26667,
    "lng": 81.51667
  },
  {
    "state": "Chhattisgarh",
    "name": "Kurud",
    "lat": 20.83073,
    "lng": 81.72212
  },
  {
    "state": "Chhattisgarh",
    "name": "Lormi",
    "lat": 22.27434,
    "lng": 81.70181
  },
  {
    "state": "Chhattisgarh",
    "name": "Mahasamund",
    "lat": 21.2,
    "lng": 82.5
  },
  {
    "state": "Chhattisgarh",
    "name": "Mungeli",
    "lat": 22.06566,
    "lng": 81.68543
  },
  {
    "state": "Chhattisgarh",
    "name": "Narayanpur",
    "lat": 19.60426,
    "lng": 81.08119
  },
  {
    "state": "Chhattisgarh",
    "name": "Narharpur",
    "lat": 20.44892,
    "lng": 81.62004
  },
  {
    "state": "Chhattisgarh",
    "name": "Pandaria",
    "lat": 22.22495,
    "lng": 81.40994
  },
  {
    "state": "Chhattisgarh",
    "name": "Pandatarai",
    "lat": 22.18714,
    "lng": 81.32815
  },
  {
    "state": "Chhattisgarh",
    "name": "Pasan",
    "lat": 22.84412,
    "lng": 82.19823
  },
  {
    "state": "Chhattisgarh",
    "name": "Patan",
    "lat": 21.03333,
    "lng": 81.53333
  },
  {
    "state": "Chhattisgarh",
    "name": "Pathalgaon",
    "lat": 22.55656,
    "lng": 83.46355
  },
  {
    "state": "Chhattisgarh",
    "name": "Pendra",
    "lat": 22.77548,
    "lng": 81.95968
  },
  {
    "state": "Chhattisgarh",
    "name": "Pithora",
    "lat": 21.25021,
    "lng": 82.51707
  },
  {
    "state": "Chhattisgarh",
    "name": "Raigarh",
    "lat": 22.08582,
    "lng": 83.30603
  },
  {
    "state": "Chhattisgarh",
    "name": "Raipur",
    "lat": 21.25621,
    "lng": 81.69022
  },
  {
    "state": "Chhattisgarh",
    "name": "Raj Nandgaon",
    "lat": 21.16667,
    "lng": 81
  },
  {
    "state": "Chhattisgarh",
    "name": "Raj-Nandgaon",
    "lat": 21.09687,
    "lng": 81.0289
  },
  {
    "state": "Chhattisgarh",
    "name": "Ramanuj Ganj",
    "lat": 23.80637,
    "lng": 83.69981
  },
  {
    "state": "Chhattisgarh",
    "name": "Ratanpur",
    "lat": 22.2866,
    "lng": 82.16823
  },
  {
    "state": "Chhattisgarh",
    "name": "Sakti",
    "lat": 22.02662,
    "lng": 82.96091
  },
  {
    "state": "Chhattisgarh",
    "name": "Saraipali",
    "lat": 21.3153,
    "lng": 83.00629
  },
  {
    "state": "Chhattisgarh",
    "name": "Sarangarh",
    "lat": 21.58614,
    "lng": 83.0785
  },
  {
    "state": "Chhattisgarh",
    "name": "Seorinarayan",
    "lat": 21.72055,
    "lng": 82.59344
  },
  {
    "state": "Chhattisgarh",
    "name": "Simga",
    "lat": 21.6281,
    "lng": 81.70376
  },
  {
    "state": "Chhattisgarh",
    "name": "Surguja",
    "lat": 22.89624,
    "lng": 83.09631
  },
  {
    "state": "Chhattisgarh",
    "name": "Takhatpur",
    "lat": 22.12915,
    "lng": 81.86959
  },
  {
    "state": "Chhattisgarh",
    "name": "Umarkot",
    "lat": 19.66529,
    "lng": 82.20629
  },
  {
    "state": "Chhattisgarh",
    "name": "Uttar Bastar Kanker",
    "lat": 20.2,
    "lng": 81.1
  },
  {
    "state": "Delhi",
    "name": "Alipur",
    "lat": 28.79862,
    "lng": 77.13314
  },
  {
    "state": "Delhi",
    "name": "Bawana",
    "lat": 28.7982,
    "lng": 77.03431
  },
  {
    "state": "Delhi",
    "name": "Central Delhi",
    "lat": 28.64857,
    "lng": 77.21895
  },
  {
    "state": "Delhi",
    "name": "Deoli",
    "lat": 28.50254,
    "lng": 77.23117
  },
  {
    "state": "Delhi",
    "name": "East Delhi",
    "lat": 28.66242,
    "lng": 77.29122
  },
  {
    "state": "Delhi",
    "name": "Karol Bagh",
    "lat": 28.65136,
    "lng": 77.19072
  },
  {
    "state": "Delhi",
    "name": "Najafgarh",
    "lat": 28.60922,
    "lng": 76.97982
  },
  {
    "state": "Delhi",
    "name": "Nangloi Jat",
    "lat": 28.67957,
    "lng": 77.06799
  },
  {
    "state": "Delhi",
    "name": "Narela",
    "lat": 28.85267,
    "lng": 77.09288
  },
  {
    "state": "Delhi",
    "name": "New Delhi",
    "lat": 28.63576,
    "lng": 77.22445
  },
  {
    "state": "Delhi",
    "name": "North Delhi",
    "lat": 28.6692,
    "lng": 77.22273
  },
  {
    "state": "Delhi",
    "name": "North East Delhi",
    "lat": 28.6869,
    "lng": 77.30195
  },
  {
    "state": "Delhi",
    "name": "North West Delhi",
    "lat": 28.70113,
    "lng": 77.10154
  },
  {
    "state": "Delhi",
    "name": "Pitampura",
    "lat": 28.68964,
    "lng": 77.13126
  },
  {
    "state": "Delhi",
    "name": "Rohini",
    "lat": 28.74322,
    "lng": 77.06778
  },
  {
    "state": "Delhi",
    "name": "South Delhi",
    "lat": 28.53009,
    "lng": 77.25174
  },
  {
    "state": "Delhi",
    "name": "South West Delhi",
    "lat": 28.5806,
    "lng": 77.0672
  },
  {
    "state": "Delhi",
    "name": "West Delhi",
    "lat": 28.65655,
    "lng": 77.10068
  },
  {
    "state": "Goa",
    "name": "Aldona",
    "lat": 15.59337,
    "lng": 73.87482
  },
  {
    "state": "Goa",
    "name": "Arambol",
    "lat": 15.68681,
    "lng": 73.70449
  },
  {
    "state": "Goa",
    "name": "Baga",
    "lat": 15.56517,
    "lng": 73.75517
  },
  {
    "state": "Goa",
    "name": "Bambolim",
    "lat": 15.46361,
    "lng": 73.8531
  },
  {
    "state": "Goa",
    "name": "Bandora",
    "lat": 15.40823,
    "lng": 73.98129
  },
  {
    "state": "Goa",
    "name": "Benaulim",
    "lat": 15.26435,
    "lng": 73.92812
  },
  {
    "state": "Goa",
    "name": "Calangute",
    "lat": 15.5439,
    "lng": 73.7553
  },
  {
    "state": "Goa",
    "name": "Candolim",
    "lat": 15.51807,
    "lng": 73.76259
  },
  {
    "state": "Goa",
    "name": "Carapur",
    "lat": 15.56588,
    "lng": 73.98713
  },
  {
    "state": "Goa",
    "name": "Cavelossim",
    "lat": 15.17255,
    "lng": 73.94194
  },
  {
    "state": "Goa",
    "name": "Chicalim",
    "lat": 15.39835,
    "lng": 73.84216
  },
  {
    "state": "Goa",
    "name": "Chinchinim",
    "lat": 15.21447,
    "lng": 73.97555
  },
  {
    "state": "Goa",
    "name": "Colovale",
    "lat": 15.63522,
    "lng": 73.82426
  },
  {
    "state": "Goa",
    "name": "Colva",
    "lat": 15.27976,
    "lng": 73.92285
  },
  {
    "state": "Goa",
    "name": "Cortalim",
    "lat": 15.40247,
    "lng": 73.90881
  },
  {
    "state": "Goa",
    "name": "Cuncolim",
    "lat": 15.1773,
    "lng": 73.99392
  },
  {
    "state": "Goa",
    "name": "Curchorem",
    "lat": 15.26349,
    "lng": 74.10875
  },
  {
    "state": "Goa",
    "name": "Curti",
    "lat": 15.41667,
    "lng": 74.01667
  },
  {
    "state": "Goa",
    "name": "Davorlim",
    "lat": 15.27221,
    "lng": 73.99242
  },
  {
    "state": "Goa",
    "name": "Dicholi",
    "lat": 15.59319,
    "lng": 73.94571
  },
  {
    "state": "Goa",
    "name": "Goa Velha",
    "lat": 15.44384,
    "lng": 73.88572
  },
  {
    "state": "Goa",
    "name": "Guirim",
    "lat": 15.57552,
    "lng": 73.80722
  },
  {
    "state": "Goa",
    "name": "Jua",
    "lat": 15.5307,
    "lng": 73.95047
  },
  {
    "state": "Goa",
    "name": "Kankon",
    "lat": 15.02698,
    "lng": 74.04617
  },
  {
    "state": "Goa",
    "name": "Madgaon",
    "lat": 15.27501,
    "lng": 73.95786
  },
  {
    "state": "Goa",
    "name": "Mapuca",
    "lat": 15.59154,
    "lng": 73.80898
  },
  {
    "state": "Goa",
    "name": "Morjim",
    "lat": 15.63097,
    "lng": 73.73903
  },
  {
    "state": "Goa",
    "name": "Mormugao",
    "lat": 15.38914,
    "lng": 73.81491
  },
  {
    "state": "Goa",
    "name": "Navelim",
    "lat": 15.53333,
    "lng": 73.98333
  },
  {
    "state": "Goa",
    "name": "North Goa",
    "lat": 15.53397,
    "lng": 73.96408
  },
  {
    "state": "Goa",
    "name": "Palle",
    "lat": 15.46667,
    "lng": 74.08333
  },
  {
    "state": "Goa",
    "name": "Panaji",
    "lat": 15.49574,
    "lng": 73.82624
  },
  {
    "state": "Goa",
    "name": "Pernem",
    "lat": 15.723,
    "lng": 73.79511
  },
  {
    "state": "Goa",
    "name": "Ponda",
    "lat": 15.40341,
    "lng": 74.01519
  },
  {
    "state": "Goa",
    "name": "Quepem",
    "lat": 15.2128,
    "lng": 74.0772
  },
  {
    "state": "Goa",
    "name": "Queula",
    "lat": 15.39011,
    "lng": 73.98557
  },
  {
    "state": "Goa",
    "name": "Raia",
    "lat": 15.30499,
    "lng": 73.97096
  },
  {
    "state": "Goa",
    "name": "Saligao",
    "lat": 15.55359,
    "lng": 73.79036
  },
  {
    "state": "Goa",
    "name": "Sancoale",
    "lat": 15.37794,
    "lng": 73.90352
  },
  {
    "state": "Goa",
    "name": "Sanguem",
    "lat": 15.22901,
    "lng": 74.15149
  },
  {
    "state": "Goa",
    "name": "Sanquelim",
    "lat": 15.56422,
    "lng": 74.00799
  },
  {
    "state": "Goa",
    "name": "Sanvordem",
    "lat": 15.26269,
    "lng": 74.11965
  },
  {
    "state": "Goa",
    "name": "Serula",
    "lat": 15.54774,
    "lng": 73.84329
  },
  {
    "state": "Goa",
    "name": "Solim",
    "lat": 15.61521,
    "lng": 73.7674
  },
  {
    "state": "Goa",
    "name": "South Goa",
    "lat": 15.20425,
    "lng": 74.16733
  },
  {
    "state": "Goa",
    "name": "Taleigao",
    "lat": 15.46915,
    "lng": 73.83285
  },
  {
    "state": "Goa",
    "name": "Vagator",
    "lat": 15.59766,
    "lng": 73.74496
  },
  {
    "state": "Goa",
    "name": "Valpoy",
    "lat": 15.53239,
    "lng": 74.13671
  },
  {
    "state": "Goa",
    "name": "Varca",
    "lat": 15.23237,
    "lng": 73.94311
  },
  {
    "state": "Goa",
    "name": "Vasco da Gama",
    "lat": 15.39585,
    "lng": 73.81568
  },
  {
    "state": "Gujarat",
    "name": "Abrama",
    "lat": 20.85865,
    "lng": 72.90648
  },
  {
    "state": "Gujarat",
    "name": "Adalaj",
    "lat": 23.16453,
    "lng": 72.58107
  },
  {
    "state": "Gujarat",
    "name": "Agol",
    "lat": 23.15,
    "lng": 72.26666667
  },
  {
    "state": "Gujarat",
    "name": "Ahmedabad",
    "lat": 23.02579,
    "lng": 72.58727
  },
  {
    "state": "Gujarat",
    "name": "Ahwa",
    "lat": 20.75718,
    "lng": 73.68626
  },
  {
    "state": "Gujarat",
    "name": "Akrund",
    "lat": 23.28333333,
    "lng": 73.11666667
  },
  {
    "state": "Gujarat",
    "name": "Amod",
    "lat": 21.99317,
    "lng": 72.87047
  },
  {
    "state": "Gujarat",
    "name": "Amreli",
    "lat": 21.50789,
    "lng": 71.18323
  },
  {
    "state": "Gujarat",
    "name": "Amroli",
    "lat": 21.25084,
    "lng": 72.83878
  },
  {
    "state": "Gujarat",
    "name": "Anand",
    "lat": 22.4,
    "lng": 72.75
  },
  {
    "state": "Gujarat",
    "name": "Anjar",
    "lat": 23.11316,
    "lng": 70.02671
  },
  {
    "state": "Gujarat",
    "name": "Ankleshwar",
    "lat": 21.63236,
    "lng": 72.99001
  },
  {
    "state": "Gujarat",
    "name": "Babra",
    "lat": 21.84577,
    "lng": 71.30544
  },
  {
    "state": "Gujarat",
    "name": "Bagasara",
    "lat": 21.48333333,
    "lng": 70.95
  },
  {
    "state": "Gujarat",
    "name": "Bagasra",
    "lat": 21.48719,
    "lng": 70.95516
  },
  {
    "state": "Gujarat",
    "name": "Bakharla",
    "lat": 21.731517,
    "lng": 69.635296
  },
  {
    "state": "Gujarat",
    "name": "Balagam",
    "lat": 21.36666667,
    "lng": 70.1
  },
  {
    "state": "Gujarat",
    "name": "Balasinor",
    "lat": 22.955891,
    "lng": 73.336499
  },
  {
    "state": "Gujarat",
    "name": "Balisana",
    "lat": 23.816436,
    "lng": 72.257536
  },
  {
    "state": "Gujarat",
    "name": "Bamanbore",
    "lat": 22.41666667,
    "lng": 71.01666667
  },
  {
    "state": "Gujarat",
    "name": "Banas Kantha",
    "lat": 24.25,
    "lng": 72.5
  },
  {
    "state": "Gujarat",
    "name": "Bandia",
    "lat": 23.39604,
    "lng": 69.01155
  },
  {
    "state": "Gujarat",
    "name": "Bantva",
    "lat": 21.48815,
    "lng": 70.07576
  },
  {
    "state": "Gujarat",
    "name": "Bardoli",
    "lat": 21.12297,
    "lng": 73.11151
  },
  {
    "state": "Gujarat",
    "name": "Bedi",
    "lat": 22.50143,
    "lng": 70.04363
  },
  {
    "state": "Gujarat",
    "name": "Bhachau",
    "lat": 23.29858,
    "lng": 70.34279
  },
  {
    "state": "Gujarat",
    "name": "Bhadran",
    "lat": 22.3593,
    "lng": 72.9005
  },
  {
    "state": "Gujarat",
    "name": "Bhandu",
    "lat": 23.7,
    "lng": 72.36666667
  },
  {
    "state": "Gujarat",
    "name": "Bhanvad",
    "lat": 21.93053,
    "lng": 69.78081
  },
  {
    "state": "Gujarat",
    "name": "Bharuch",
    "lat": 21.69482,
    "lng": 72.9805
  },
  {
    "state": "Gujarat",
    "name": "Bhatha",
    "lat": 21.18333333,
    "lng": 72.76666667
  },
  {
    "state": "Gujarat",
    "name": "Bhavnagar",
    "lat": 21.76287,
    "lng": 72.15331
  },
  {
    "state": "Gujarat",
    "name": "Bhayavadar",
    "lat": 21.85523,
    "lng": 70.24791
  },
  {
    "state": "Gujarat",
    "name": "Bhildi",
    "lat": 24.18333333,
    "lng": 72.03333333
  },
  {
    "state": "Gujarat",
    "name": "Bhojpur Dharampur",
    "lat": 23.25,
    "lng": 69.67
  },
  {
    "state": "Gujarat",
    "name": "Bhuj",
    "lat": 23.25397,
    "lng": 69.66928
  },
  {
    "state": "Gujarat",
    "name": "Bilimora",
    "lat": 20.76957,
    "lng": 72.96134
  },
  {
    "state": "Gujarat",
    "name": "Bilkha",
    "lat": 21.4415,
    "lng": 70.60063
  },
  {
    "state": "Gujarat",
    "name": "Borsad",
    "lat": 22.40788,
    "lng": 72.89817
  },
  {
    "state": "Gujarat",
    "name": "Botad",
    "lat": 22.16917,
    "lng": 71.66671
  },
  {
    "state": "Gujarat",
    "name": "Chaklasi",
    "lat": 22.6532,
    "lng": 72.94497
  },
  {
    "state": "Gujarat",
    "name": "Chalala",
    "lat": 21.41073,
    "lng": 71.16621
  },
  {
    "state": "Gujarat",
    "name": "Chaloda",
    "lat": 22.8,
    "lng": 72.45
  },
  {
    "state": "Gujarat",
    "name": "Champaner",
    "lat": 22.4859,
    "lng": 73.5371
  },
  {
    "state": "Gujarat",
    "name": "Chanasma",
    "lat": 23.71472,
    "lng": 72.11279
  },
  {
    "state": "Gujarat",
    "name": "Chhala",
    "lat": 23.30779,
    "lng": 72.77404
  },
  {
    "state": "Gujarat",
    "name": "Chhota Udepur",
    "lat": 22.30401,
    "lng": 74.0158
  },
  {
    "state": "Gujarat",
    "name": "Chikhli",
    "lat": 20.75751,
    "lng": 73.06268
  },
  {
    "state": "Gujarat",
    "name": "Chotila",
    "lat": 22.42347,
    "lng": 71.19641
  },
  {
    "state": "Gujarat",
    "name": "Chuda",
    "lat": 22.48333333,
    "lng": 71.68333333
  },
  {
    "state": "Gujarat",
    "name": "Dabhoda",
    "lat": 23.16666667,
    "lng": 72.73333333
  },
  {
    "state": "Gujarat",
    "name": "Dabhoi",
    "lat": 22.18333,
    "lng": 73.43333
  },
  {
    "state": "Gujarat",
    "name": "Dahegam",
    "lat": 23.16903,
    "lng": 72.82161
  },
  {
    "state": "Gujarat",
    "name": "Dahod",
    "lat": 22.52,
    "lng": 74.15
  },
  {
    "state": "Gujarat",
    "name": "Dakor",
    "lat": 22.75268,
    "lng": 73.14967
  },
  {
    "state": "Gujarat",
    "name": "Damnagar",
    "lat": 21.69232,
    "lng": 71.51747
  },
  {
    "state": "Gujarat",
    "name": "Dandi",
    "lat": 21.32988,
    "lng": 72.62484
  },
  {
    "state": "Gujarat",
    "name": "Dangs (India)",
    "lat": 20.75,
    "lng": 73.75
  },
  {
    "state": "Gujarat",
    "name": "Danta",
    "lat": 24.18861111,
    "lng": 72.76583333
  },
  {
    "state": "Gujarat",
    "name": "Dayapar",
    "lat": 23.63371,
    "lng": 68.90192
  },
  {
    "state": "Gujarat",
    "name": "Delvada",
    "lat": 20.77544,
    "lng": 71.04646
  },
  {
    "state": "Gujarat",
    "name": "Delwada",
    "lat": 20.7833,
    "lng": 71.05
  },
  {
    "state": "Gujarat",
    "name": "Detroj",
    "lat": 23.33333333,
    "lng": 72.18333333
  },
  {
    "state": "Gujarat",
    "name": "Devbhumi Dwarka",
    "lat": 22.20253,
    "lng": 69.65498
  },
  {
    "state": "Gujarat",
    "name": "Devgadh Bariya",
    "lat": 22.70517,
    "lng": 73.90882
  },
  {
    "state": "Gujarat",
    "name": "Dhandhuka",
    "lat": 22.38185,
    "lng": 71.98664
  },
  {
    "state": "Gujarat",
    "name": "Dhanera",
    "lat": 24.50967,
    "lng": 72.02343
  },
  {
    "state": "Gujarat",
    "name": "Dhansura",
    "lat": 23.35,
    "lng": 73.2
  },
  {
    "state": "Gujarat",
    "name": "Dharampur",
    "lat": 20.53693,
    "lng": 73.17368
  },
  {
    "state": "Gujarat",
    "name": "Dharasana",
    "lat": 20.68333333,
    "lng": 72.91666667
  },
  {
    "state": "Gujarat",
    "name": "Dhari",
    "lat": 21.32855,
    "lng": 71.02645
  },
  {
    "state": "Gujarat",
    "name": "Dhasa",
    "lat": 21.8,
    "lng": 71.51666667
  },
  {
    "state": "Gujarat",
    "name": "Dhola",
    "lat": 21.88129,
    "lng": 71.77269
  },
  {
    "state": "Gujarat",
    "name": "Dholera",
    "lat": 22.248,
    "lng": 72.195
  },
  {
    "state": "Gujarat",
    "name": "Dholka",
    "lat": 22.72732,
    "lng": 72.44128
  },
  {
    "state": "Gujarat",
    "name": "Dhoraji",
    "lat": 21.73359,
    "lng": 70.45004
  },
  {
    "state": "Gujarat",
    "name": "Dhrangadhra",
    "lat": 22.99167,
    "lng": 71.46793
  },
  {
    "state": "Gujarat",
    "name": "Dhrol",
    "lat": 22.567,
    "lng": 70.41769
  },
  {
    "state": "Gujarat",
    "name": "Dhuwaran",
    "lat": 22.23779,
    "lng": 72.7591
  },
  {
    "state": "Gujarat",
    "name": "Disa",
    "lat": 24.25612,
    "lng": 72.17928
  },
  {
    "state": "Gujarat",
    "name": "Dohad",
    "lat": 22.9,
    "lng": 74
  },
  {
    "state": "Gujarat",
    "name": "Dumkhal",
    "lat": 21.7396,
    "lng": 73.8449
  },
  {
    "state": "Gujarat",
    "name": "Dungarpur",
    "lat": 21.28777,
    "lng": 71.7556
  },
  {
    "state": "Gujarat",
    "name": "Dwarka",
    "lat": 22.23944,
    "lng": 68.96778
  },
  {
    "state": "Gujarat",
    "name": "Gadhada",
    "lat": 21.96957,
    "lng": 71.57828
  },
  {
    "state": "Gujarat",
    "name": "Gandevi",
    "lat": 20.81214,
    "lng": 72.99811
  },
  {
    "state": "Gujarat",
    "name": "Gandhidham",
    "lat": 23.08333,
    "lng": 70.13333
  },
  {
    "state": "Gujarat",
    "name": "Gandhinagar",
    "lat": 23.21667,
    "lng": 72.68333
  },
  {
    "state": "Gujarat",
    "name": "Gariadhar",
    "lat": 21.53889,
    "lng": 71.57737
  },
  {
    "state": "Gujarat",
    "name": "Ghodasar",
    "lat": 24.45,
    "lng": 71.85
  },
  {
    "state": "Gujarat",
    "name": "Ghogha",
    "lat": 21.68813,
    "lng": 72.2763
  },
  {
    "state": "Gujarat",
    "name": "Gir Somnath",
    "lat": 20.91287,
    "lng": 70.3671
  },
  {
    "state": "Gujarat",
    "name": "Godhra",
    "lat": 22.77547,
    "lng": 73.61488
  },
  {
    "state": "Gujarat",
    "name": "Gondal",
    "lat": 21.96074,
    "lng": 70.80255
  },
  {
    "state": "Gujarat",
    "name": "Gorwa",
    "lat": 22.3301,
    "lng": 73.1611
  },
  {
    "state": "Gujarat",
    "name": "Halenda",
    "lat": 22.088185,
    "lng": 71.05171
  },
  {
    "state": "Gujarat",
    "name": "Halol",
    "lat": 22.50321,
    "lng": 73.47242
  },
  {
    "state": "Gujarat",
    "name": "Halvad",
    "lat": 23.01516,
    "lng": 71.18029
  },
  {
    "state": "Gujarat",
    "name": "Hansot",
    "lat": 21.58496,
    "lng": 72.80764
  },
  {
    "state": "Gujarat",
    "name": "Harij",
    "lat": 23.69356,
    "lng": 71.907
  },
  {
    "state": "Gujarat",
    "name": "Harsol",
    "lat": 23.36,
    "lng": 73.02
  },
  {
    "state": "Gujarat",
    "name": "Hathuran",
    "lat": 21.5,
    "lng": 72.97
  },
  {
    "state": "Gujarat",
    "name": "Himatnagar",
    "lat": 23.59893,
    "lng": 72.96602
  },
  {
    "state": "Gujarat",
    "name": "Idar",
    "lat": 23.83,
    "lng": 73
  },
  {
    "state": "Gujarat",
    "name": "Jakhau",
    "lat": 23.21861111,
    "lng": 68.71694444
  },
  {
    "state": "Gujarat",
    "name": "Jalalpore",
    "lat": 20.9491,
    "lng": 72.9136
  },
  {
    "state": "Gujarat",
    "name": "Jalalpur",
    "lat": 20.94896,
    "lng": 72.89829
  },
  {
    "state": "Gujarat",
    "name": "Jalia",
    "lat": 21.8,
    "lng": 70.25
  },
  {
    "state": "Gujarat",
    "name": "Jambuda",
    "lat": 22.51666667,
    "lng": 70.21666667
  },
  {
    "state": "Gujarat",
    "name": "Jambusar",
    "lat": 22.05236,
    "lng": 72.80074
  },
  {
    "state": "Gujarat",
    "name": "Jamnagar",
    "lat": 22.47292,
    "lng": 70.06673
  },
  {
    "state": "Gujarat",
    "name": "Jasdan",
    "lat": 22.03709,
    "lng": 71.20794
  },
  {
    "state": "Gujarat",
    "name": "Jetalpur",
    "lat": 22.88333333,
    "lng": 72.6
  },
  {
    "state": "Gujarat",
    "name": "Jetalsar",
    "lat": 21.70891,
    "lng": 70.57695
  },
  {
    "state": "Gujarat",
    "name": "Jetpur",
    "lat": 21.75482,
    "lng": 70.62347
  },
  {
    "state": "Gujarat",
    "name": "Jetpur (Navagadh)",
    "lat": 21.75482,
    "lng": 70.62347
  },
  {
    "state": "Gujarat",
    "name": "Jhalod",
    "lat": 23.10027778,
    "lng": 74.15611111
  },
  {
    "state": "Gujarat",
    "name": "Jhulasan",
    "lat": 23.3286,
    "lng": 72.47314
  },
  {
    "state": "Gujarat",
    "name": "Jodhpur",
    "lat": 21.90174,
    "lng": 70.0327
  },
  {
    "state": "Gujarat",
    "name": "Jodhpur (Ahmedabad)",
    "lat": 21.88,
    "lng": 70.03
  },
  {
    "state": "Gujarat",
    "name": "Jodia",
    "lat": 22.71667,
    "lng": 70.28333
  },
  {
    "state": "Gujarat",
    "name": "Jodiya Bandar",
    "lat": 22.71667,
    "lng": 70.28333
  },
  {
    "state": "Gujarat",
    "name": "Junagadh",
    "lat": 21.25,
    "lng": 70.33333
  },
  {
    "state": "Gujarat",
    "name": "Kachchh",
    "lat": 23.58333,
    "lng": 70
  },
  {
    "state": "Gujarat",
    "name": "Kachholi",
    "lat": 20.83333333,
    "lng": 72.96666667
  },
  {
    "state": "Gujarat",
    "name": "Kadi",
    "lat": 23.29908,
    "lng": 72.33362
  },
  {
    "state": "Gujarat",
    "name": "Kadod",
    "lat": 21.21717,
    "lng": 73.21972
  },
  {
    "state": "Gujarat",
    "name": "Kalavad",
    "lat": 22.20789,
    "lng": 70.38343
  },
  {
    "state": "Gujarat",
    "name": "Kalol",
    "lat": 22.60777,
    "lng": 73.46272
  },
  {
    "state": "Gujarat",
    "name": "Kandla",
    "lat": 23.03333,
    "lng": 70.21667
  },
  {
    "state": "Gujarat",
    "name": "Kandla port",
    "lat": 23.03,
    "lng": 70.22
  },
  {
    "state": "Gujarat",
    "name": "Kanodar",
    "lat": 24.08932,
    "lng": 72.39354
  },
  {
    "state": "Gujarat",
    "name": "Kapadvanj",
    "lat": 23.02302,
    "lng": 73.07113
  },
  {
    "state": "Gujarat",
    "name": "Karamsad",
    "lat": 22.54243,
    "lng": 72.90392
  },
  {
    "state": "Gujarat",
    "name": "Kariana",
    "lat": 21.88333333,
    "lng": 71.35
  },
  {
    "state": "Gujarat",
    "name": "Karjan",
    "lat": 22.05304167,
    "lng": 73.12351389
  },
  {
    "state": "Gujarat",
    "name": "Kathor",
    "lat": 21.28854,
    "lng": 72.9407
  },
  {
    "state": "Gujarat",
    "name": "Katpur",
    "lat": 21.05869,
    "lng": 71.79457
  },
  {
    "state": "Gujarat",
    "name": "Kavant",
    "lat": 22.09282,
    "lng": 74.05078
  },
  {
    "state": "Gujarat",
    "name": "Kawant",
    "lat": 22.09282,
    "lng": 74.05078
  },
  {
    "state": "Gujarat",
    "name": "Kayavarohan",
    "lat": 22.067,
    "lng": 73.25
  },
  {
    "state": "Gujarat",
    "name": "Kerwada",
    "lat": 21.9,
    "lng": 72.85
  },
  {
    "state": "Gujarat",
    "name": "Keshod",
    "lat": 21.30328,
    "lng": 70.24861
  },
  {
    "state": "Gujarat",
    "name": "Khambhalia",
    "lat": 22.2,
    "lng": 69.65
  },
  {
    "state": "Gujarat",
    "name": "Khambhat",
    "lat": 22.31744,
    "lng": 72.61916
  },
  {
    "state": "Gujarat",
    "name": "Khavda",
    "lat": 23.85,
    "lng": 69.72
  },
  {
    "state": "Gujarat",
    "name": "Kheda",
    "lat": 22.75,
    "lng": 72.83333
  },
  {
    "state": "Gujarat",
    "name": "Khedbrahma",
    "lat": 24.0299,
    "lng": 73.04632
  },
  {
    "state": "Gujarat",
    "name": "Khedoi",
    "lat": 23.05927778,
    "lng": 69.91895556
  },
  {
    "state": "Gujarat",
    "name": "Kherali",
    "lat": 22.68333333,
    "lng": 71.6
  },
  {
    "state": "Gujarat",
    "name": "Kheralu",
    "lat": 23.88534,
    "lng": 72.61869
  },
  {
    "state": "Gujarat",
    "name": "Kodinar",
    "lat": 20.79393,
    "lng": 70.70216
  },
  {
    "state": "Gujarat",
    "name": "Kosamba",
    "lat": 21.46202,
    "lng": 72.95842
  },
  {
    "state": "Gujarat",
    "name": "Kothara",
    "lat": 23.133,
    "lng": 68.932
  },
  {
    "state": "Gujarat",
    "name": "Kotharia",
    "lat": 22.23,
    "lng": 70.81
  },
  {
    "state": "Gujarat",
    "name": "Kukarmunda",
    "lat": 21.51666667,
    "lng": 74.13333333
  },
  {
    "state": "Gujarat",
    "name": "Kukma",
    "lat": 23.217822,
    "lng": 69.777922
  },
  {
    "state": "Gujarat",
    "name": "Kundla",
    "lat": 21.34222,
    "lng": 71.30633
  },
  {
    "state": "Gujarat",
    "name": "Kutch district",
    "lat": 23.915,
    "lng": 70.367
  },
  {
    "state": "Gujarat",
    "name": "Kutiyana",
    "lat": 21.6241,
    "lng": 69.98494
  },
  {
    "state": "Gujarat",
    "name": "Ladol",
    "lat": 23.61666667,
    "lng": 72.73333333
  },
  {
    "state": "Gujarat",
    "name": "Lakhpat",
    "lat": 23.82611111,
    "lng": 68.77694444
  },
  {
    "state": "Gujarat",
    "name": "Lakhtar",
    "lat": 22.85683,
    "lng": 71.78844
  },
  {
    "state": "Gujarat",
    "name": "Lalpur",
    "lat": 22.19073,
    "lng": 69.96351
  },
  {
    "state": "Gujarat",
    "name": "Langhnaj",
    "lat": 23.45,
    "lng": 72.48333333
  },
  {
    "state": "Gujarat",
    "name": "Lathi",
    "lat": 21.7231,
    "lng": 71.38843
  },
  {
    "state": "Gujarat",
    "name": "Limbdi",
    "lat": 22.56507,
    "lng": 71.81076
  },
  {
    "state": "Gujarat",
    "name": "Limkheda",
    "lat": 22.81666667,
    "lng": 73.98333333
  },
  {
    "state": "Gujarat",
    "name": "Lunavada",
    "lat": 23.12841,
    "lng": 73.61043
  },
  {
    "state": "Gujarat",
    "name": "Madhavpur Ghed",
    "lat": 21.29929167,
    "lng": 70.02513889
  },
  {
    "state": "Gujarat",
    "name": "Madhi",
    "lat": 22.1,
    "lng": 69.1
  },
  {
    "state": "Gujarat",
    "name": "Mahemdavad",
    "lat": 22.82359,
    "lng": 72.75551
  },
  {
    "state": "Gujarat",
    "name": "Mahesana",
    "lat": 23.66667,
    "lng": 72.5
  },
  {
    "state": "Gujarat",
    "name": "Mahisa",
    "lat": 22.85,
    "lng": 73.05
  },
  {
    "state": "Gujarat",
    "name": "Mahudha",
    "lat": 22.82082,
    "lng": 72.94032
  },
  {
    "state": "Gujarat",
    "name": "Mahuva",
    "lat": 21.0833,
    "lng": 71.8
  },
  {
    "state": "Gujarat",
    "name": "Mahuva (Surat)",
    "lat": 21.02,
    "lng": 73.15
  },
  {
    "state": "Gujarat",
    "name": "Malpur",
    "lat": 23.36035,
    "lng": 73.46595
  },
  {
    "state": "Gujarat",
    "name": "Manavadar",
    "lat": 21.49813,
    "lng": 70.13775
  },
  {
    "state": "Gujarat",
    "name": "Mandal",
    "lat": 23.28865,
    "lng": 71.91854
  },
  {
    "state": "Gujarat",
    "name": "Mandvi",
    "lat": 22.83282,
    "lng": 69.35237
  },
  {
    "state": "Gujarat",
    "name": "Mandvi (Surat)",
    "lat": 21.25526,
    "lng": 73.30412
  },
  {
    "state": "Gujarat",
    "name": "Mangrol",
    "lat": 21.12268,
    "lng": 70.11484
  },
  {
    "state": "Gujarat",
    "name": "Mangrol (Junagadh)",
    "lat": 21.12,
    "lng": 70.12
  },
  {
    "state": "Gujarat",
    "name": "Mansa",
    "lat": 23.42564,
    "lng": 72.65739
  },
  {
    "state": "Gujarat",
    "name": "Meghraj",
    "lat": 23.49805,
    "lng": 73.51352
  },
  {
    "state": "Gujarat",
    "name": "Mehsana",
    "lat": 23.6,
    "lng": 72.4
  },
  {
    "state": "Gujarat",
    "name": "Mendarda",
    "lat": 21.32112,
    "lng": 70.44078
  },
  {
    "state": "Gujarat",
    "name": "Mithapur",
    "lat": 22.41,
    "lng": 69
  },
  {
    "state": "Gujarat",
    "name": "Modasa",
    "lat": 23.46253,
    "lng": 73.29857
  },
  {
    "state": "Gujarat",
    "name": "Morbi",
    "lat": 22.81731,
    "lng": 70.8377
  },
  {
    "state": "Gujarat",
    "name": "Morva (Hadaf)",
    "lat": 22.90469,
    "lng": 73.83912
  },
  {
    "state": "Gujarat",
    "name": "Morwa",
    "lat": 22.90469,
    "lng": 73.83912
  },
  {
    "state": "Gujarat",
    "name": "Mundra",
    "lat": 22.83918,
    "lng": 69.7219
  },
  {
    "state": "Gujarat",
    "name": "Nadiad",
    "lat": 22.69385,
    "lng": 72.86157
  },
  {
    "state": "Gujarat",
    "name": "Nagwa",
    "lat": 25.69621,
    "lng": 84.2359
  },
  {
    "state": "Gujarat",
    "name": "Naldhara",
    "lat": 20.96666667,
    "lng": 73.16666667
  },
  {
    "state": "Gujarat",
    "name": "Naliya",
    "lat": 23.26058,
    "lng": 68.82655
  },
  {
    "state": "Gujarat",
    "name": "Nargol",
    "lat": 20.233,
    "lng": 72.75
  },
  {
    "state": "Gujarat",
    "name": "Narmada",
    "lat": 21.87377,
    "lng": 73.49527
  },
  {
    "state": "Gujarat",
    "name": "Naroda",
    "lat": 23.07041,
    "lng": 72.65702
  },
  {
    "state": "Gujarat",
    "name": "Navsari",
    "lat": 20.95,
    "lng": 72.92
  },
  {
    "state": "Gujarat",
    "name": "Nikora",
    "lat": 21.78586,
    "lng": 73.13968
  },
  {
    "state": "Gujarat",
    "name": "Nizar",
    "lat": 21.47727,
    "lng": 74.19595
  },
  {
    "state": "Gujarat",
    "name": "Odadar",
    "lat": 21.56666667,
    "lng": 69.66666667
  },
  {
    "state": "Gujarat",
    "name": "Okha",
    "lat": 22.46756,
    "lng": 69.07002
  },
  {
    "state": "Gujarat",
    "name": "Olpad",
    "lat": 21.33649,
    "lng": 72.75161
  },
  {
    "state": "Gujarat",
    "name": "Paddhari",
    "lat": 22.43654,
    "lng": 70.60162
  },
  {
    "state": "Gujarat",
    "name": "Padra",
    "lat": 22.2398,
    "lng": 73.08451
  },
  {
    "state": "Gujarat",
    "name": "Palanpur",
    "lat": 24.17128,
    "lng": 72.43827
  },
  {
    "state": "Gujarat",
    "name": "Palanswa",
    "lat": 23.46666667,
    "lng": 70.93333333
  },
  {
    "state": "Gujarat",
    "name": "Palitana",
    "lat": 21.52519,
    "lng": 71.82309
  },
  {
    "state": "Gujarat",
    "name": "Paliyad",
    "lat": 22.25757,
    "lng": 71.56024
  },
  {
    "state": "Gujarat",
    "name": "Paliyad (Bhavnagar)",
    "lat": 22.25757,
    "lng": 71.56024
  },
  {
    "state": "Gujarat",
    "name": "Palsana",
    "lat": 21.08,
    "lng": 72.98
  },
  {
    "state": "Gujarat",
    "name": "Panch Mahals",
    "lat": 22.75,
    "lng": 73.6
  },
  {
    "state": "Gujarat",
    "name": "Panchmahal district",
    "lat": 22.75,
    "lng": 73.6
  },
  {
    "state": "Gujarat",
    "name": "Pardi",
    "lat": 20.5087,
    "lng": 72.94569
  },
  {
    "state": "Gujarat",
    "name": "Parnera",
    "lat": 20.56101,
    "lng": 72.94846
  },
  {
    "state": "Gujarat",
    "name": "Patan",
    "lat": 23.7,
    "lng": 71.8
  },
  {
    "state": "Gujarat",
    "name": "Pavi Jetpur",
    "lat": 22.34472,
    "lng": 73.84093
  },
  {
    "state": "Gujarat",
    "name": "Petlad",
    "lat": 22.47681,
    "lng": 72.79995
  },
  {
    "state": "Gujarat",
    "name": "Pipavav",
    "lat": 20.96666667,
    "lng": 71.56666667
  },
  {
    "state": "Gujarat",
    "name": "Piplod",
    "lat": 22.81666667,
    "lng": 73.9
  },
  {
    "state": "Gujarat",
    "name": "Porbandar",
    "lat": 21.64219,
    "lng": 69.60929
  },
  {
    "state": "Gujarat",
    "name": "Prabhas Patan",
    "lat": 20.88808,
    "lng": 70.40129
  },
  {
    "state": "Gujarat",
    "name": "Prantij",
    "lat": 23.43841944,
    "lng": 72.85718056
  },
  {
    "state": "Gujarat",
    "name": "Radhanpur",
    "lat": 23.83238,
    "lng": 71.6047
  },
  {
    "state": "Gujarat",
    "name": "Rajkot",
    "lat": 22.33333,
    "lng": 70.83333
  },
  {
    "state": "Gujarat",
    "name": "Rajpipla",
    "lat": 21.86667,
    "lng": 73.5
  },
  {
    "state": "Gujarat",
    "name": "Rajula",
    "lat": 21.03854,
    "lng": 71.44345
  },
  {
    "state": "Gujarat",
    "name": "Ranavav",
    "lat": 21.68734,
    "lng": 69.74485
  },
  {
    "state": "Gujarat",
    "name": "Ranpur",
    "lat": 22.3667,
    "lng": 71.75
  },
  {
    "state": "Gujarat",
    "name": "Rapar",
    "lat": 23.57267,
    "lng": 70.64718
  },
  {
    "state": "Gujarat",
    "name": "Reha",
    "lat": 23.151725,
    "lng": 69.750086
  },
  {
    "state": "Gujarat",
    "name": "Roha",
    "lat": 23.19646,
    "lng": 69.27076
  },
  {
    "state": "Gujarat",
    "name": "Sabar Kantha",
    "lat": 23.62974,
    "lng": 73.00197
  },
  {
    "state": "Gujarat",
    "name": "Sachin",
    "lat": 21.08718,
    "lng": 72.88153
  },
  {
    "state": "Gujarat",
    "name": "Salaya",
    "lat": 22.31038,
    "lng": 69.60376
  },
  {
    "state": "Gujarat",
    "name": "Samakhiali",
    "lat": 23.3034,
    "lng": 70.50688
  },
  {
    "state": "Gujarat",
    "name": "Sanand",
    "lat": 22.99227,
    "lng": 72.38177
  },
  {
    "state": "Gujarat",
    "name": "Sankheda",
    "lat": 22.17021,
    "lng": 73.5782
  },
  {
    "state": "Gujarat",
    "name": "Sarbhon",
    "lat": 21.05,
    "lng": 73.0833
  },
  {
    "state": "Gujarat",
    "name": "Sardoi",
    "lat": 23.5667,
    "lng": 73.2667
  },
  {
    "state": "Gujarat",
    "name": "Sarkhej",
    "lat": 22.98297,
    "lng": 72.50196
  },
  {
    "state": "Gujarat",
    "name": "Sathamba",
    "lat": 23.169125,
    "lng": 73.32661667
  },
  {
    "state": "Gujarat",
    "name": "Savarkundla",
    "lat": 21.33726,
    "lng": 71.3035
  },
  {
    "state": "Gujarat",
    "name": "Savli",
    "lat": 22.56666667,
    "lng": 73.21666667
  },
  {
    "state": "Gujarat",
    "name": "Sayla",
    "lat": 22.54925,
    "lng": 71.48324
  },
  {
    "state": "Gujarat",
    "name": "Shahpur",
    "lat": 22.15611,
    "lng": 70.77068
  },
  {
    "state": "Gujarat",
    "name": "Shivrajpur",
    "lat": 22.42319,
    "lng": 73.60865
  },
  {
    "state": "Gujarat",
    "name": "Siddhpur",
    "lat": 23.9167,
    "lng": 72.3833
  },
  {
    "state": "Gujarat",
    "name": "Sihor",
    "lat": 21.71134,
    "lng": 71.96179
  },
  {
    "state": "Gujarat",
    "name": "Sikka",
    "lat": 22.43218,
    "lng": 69.84158
  },
  {
    "state": "Gujarat",
    "name": "Sinor",
    "lat": 21.91117,
    "lng": 73.33974
  },
  {
    "state": "Gujarat",
    "name": "Sojitra",
    "lat": 22.53884,
    "lng": 72.71984
  },
  {
    "state": "Gujarat",
    "name": "Songadh",
    "lat": 21.16966,
    "lng": 73.56357
  },
  {
    "state": "Gujarat",
    "name": "Supedi",
    "lat": 21.762,
    "lng": 70.378
  },
  {
    "state": "Gujarat",
    "name": "Surat",
    "lat": 21.17801,
    "lng": 72.81189
  },
  {
    "state": "Gujarat",
    "name": "Surendranagar",
    "lat": 22.72706,
    "lng": 71.64856
  },
  {
    "state": "Gujarat",
    "name": "Sutrapada",
    "lat": 20.8928,
    "lng": 70.465
  },
  {
    "state": "Gujarat",
    "name": "Talaja",
    "lat": 21.3527,
    "lng": 72.03524
  },
  {
    "state": "Gujarat",
    "name": "Tankara",
    "lat": 22.65622,
    "lng": 70.74945
  },
  {
    "state": "Gujarat",
    "name": "Tapi",
    "lat": 21.12,
    "lng": 73.4
  },
  {
    "state": "Gujarat",
    "name": "Than",
    "lat": 22.57422,
    "lng": 71.19942
  },
  {
    "state": "Gujarat",
    "name": "Thangadh",
    "lat": 22.56666667,
    "lng": 71.18333333
  },
  {
    "state": "Gujarat",
    "name": "Tharad",
    "lat": 24.39597,
    "lng": 71.62577
  },
  {
    "state": "Gujarat",
    "name": "Thasra",
    "lat": 22.79831,
    "lng": 73.21174
  },
  {
    "state": "Gujarat",
    "name": "The Dangs",
    "lat": 20.75,
    "lng": 73.75
  },
  {
    "state": "Gujarat",
    "name": "Umarpada",
    "lat": 21.45,
    "lng": 73.5
  },
  {
    "state": "Gujarat",
    "name": "Umrala",
    "lat": 21.84353,
    "lng": 71.80305
  },
  {
    "state": "Gujarat",
    "name": "Umreth",
    "lat": 22.69881,
    "lng": 73.11561
  },
  {
    "state": "Gujarat",
    "name": "Un",
    "lat": 23.88745,
    "lng": 71.76975
  },
  {
    "state": "Gujarat",
    "name": "Una",
    "lat": 20.82318,
    "lng": 71.03795
  },
  {
    "state": "Gujarat",
    "name": "Unjha",
    "lat": 23.80366,
    "lng": 72.39101
  },
  {
    "state": "Gujarat",
    "name": "Upleta",
    "lat": 21.74015,
    "lng": 70.28256
  },
  {
    "state": "Gujarat",
    "name": "Utran",
    "lat": 21.23333,
    "lng": 72.86667
  },
  {
    "state": "Gujarat",
    "name": "Vadgam",
    "lat": 24.08333333,
    "lng": 72.48333333
  },
  {
    "state": "Gujarat",
    "name": "Vadnagar",
    "lat": 23.78593,
    "lng": 72.63893
  },
  {
    "state": "Gujarat",
    "name": "Vadodara",
    "lat": 22.29941,
    "lng": 73.20812
  },
  {
    "state": "Gujarat",
    "name": "Vaghodia",
    "lat": 22.30505,
    "lng": 73.40016
  },
  {
    "state": "Gujarat",
    "name": "Vaghodia INA",
    "lat": 22.3,
    "lng": 73.3833
  },
  {
    "state": "Gujarat",
    "name": "Vallabh Vidyanagar",
    "lat": 22.53333,
    "lng": 72.9
  },
  {
    "state": "Gujarat",
    "name": "Vallabhipur",
    "lat": 21.8878,
    "lng": 71.8795
  },
  {
    "state": "Gujarat",
    "name": "Valsad",
    "lat": 20.5,
    "lng": 73.08333
  },
  {
    "state": "Gujarat",
    "name": "Vanala",
    "lat": 22.45,
    "lng": 71.98333333
  },
  {
    "state": "Gujarat",
    "name": "Vansda",
    "lat": 20.45,
    "lng": 73.22
  },
  {
    "state": "Gujarat",
    "name": "Vanthli",
    "lat": 21.4833,
    "lng": 70.3333
  },
  {
    "state": "Gujarat",
    "name": "Vapi",
    "lat": 20.37175,
    "lng": 72.90493
  },
  {
    "state": "Gujarat",
    "name": "Vartej",
    "lat": 21.73947,
    "lng": 72.06553
  },
  {
    "state": "Gujarat",
    "name": "Vasa",
    "lat": 22.66079,
    "lng": 72.75519
  },
  {
    "state": "Gujarat",
    "name": "Vasavad",
    "lat": 21.82657,
    "lng": 71.02436
  },
  {
    "state": "Gujarat",
    "name": "Vaso",
    "lat": 22.66079,
    "lng": 72.75519
  },
  {
    "state": "Gujarat",
    "name": "Vataman",
    "lat": 22.53,
    "lng": 72.42
  },
  {
    "state": "Gujarat",
    "name": "Vejalpur",
    "lat": 22.69021,
    "lng": 73.56299
  },
  {
    "state": "Gujarat",
    "name": "Veraval",
    "lat": 20.9077,
    "lng": 70.36786
  },
  {
    "state": "Gujarat",
    "name": "Vijapur",
    "lat": 23.5623,
    "lng": 72.74848
  },
  {
    "state": "Gujarat",
    "name": "Vinchhiya",
    "lat": 22.21027,
    "lng": 71.37967
  },
  {
    "state": "Gujarat",
    "name": "Vinchia",
    "lat": 22.21027,
    "lng": 71.37967
  },
  {
    "state": "Gujarat",
    "name": "Viramgam",
    "lat": 23.12,
    "lng": 72.03
  },
  {
    "state": "Gujarat",
    "name": "Virpur",
    "lat": 23.1892,
    "lng": 73.47987
  },
  {
    "state": "Gujarat",
    "name": "Visavadar",
    "lat": 21.33954,
    "lng": 70.74966
  },
  {
    "state": "Gujarat",
    "name": "Visnagar",
    "lat": 23.69855,
    "lng": 72.5521
  },
  {
    "state": "Gujarat",
    "name": "Vyara",
    "lat": 21.11079,
    "lng": 73.39365
  },
  {
    "state": "Gujarat",
    "name": "Wadhai",
    "lat": 20.76666667,
    "lng": 73.48333333
  },
  {
    "state": "Gujarat",
    "name": "Wadhwan",
    "lat": 22.7,
    "lng": 71.68333333
  },
  {
    "state": "Gujarat",
    "name": "Waghai",
    "lat": 20.77048,
    "lng": 73.50074
  },
  {
    "state": "Gujarat",
    "name": "Wankaner",
    "lat": 22.61198,
    "lng": 70.94379
  },
  {
    "state": "Haryana",
    "name": "Ambala",
    "lat": 30.32854,
    "lng": 76.9422
  },
  {
    "state": "Haryana",
    "name": "Asandh",
    "lat": 29.52119,
    "lng": 76.60552
  },
  {
    "state": "Haryana",
    "name": "Ateli Mandi",
    "lat": 28.1008,
    "lng": 76.2598
  },
  {
    "state": "Haryana",
    "name": "Bahadurgarh",
    "lat": 28.69287,
    "lng": 76.93555
  },
  {
    "state": "Haryana",
    "name": "Bara Uchana",
    "lat": 29.46747,
    "lng": 76.17798
  },
  {
    "state": "Haryana",
    "name": "Barwala",
    "lat": 29.36747,
    "lng": 75.90809
  },
  {
    "state": "Haryana",
    "name": "Bawal",
    "lat": 28.07184,
    "lng": 76.58312
  },
  {
    "state": "Haryana",
    "name": "Beri Khas",
    "lat": 28.70146,
    "lng": 76.57708
  },
  {
    "state": "Haryana",
    "name": "Bhiwani",
    "lat": 28.75,
    "lng": 76.16667
  },
  {
    "state": "Haryana",
    "name": "Bilaspur",
    "lat": 30.3045,
    "lng": 77.30424
  },
  {
    "state": "Haryana",
    "name": "Buriya",
    "lat": 30.15911,
    "lng": 77.35814
  },
  {
    "state": "Haryana",
    "name": "Charkhi Dadri",
    "lat": 28.59166,
    "lng": 76.27161
  },
  {
    "state": "Haryana",
    "name": "Chhachhrauli",
    "lat": 30.24492,
    "lng": 77.36027
  },
  {
    "state": "Haryana",
    "name": "Dabwali",
    "lat": 29.94906,
    "lng": 74.73832
  },
  {
    "state": "Haryana",
    "name": "Dharuhera",
    "lat": 28.20553,
    "lng": 76.79691
  },
  {
    "state": "Haryana",
    "name": "Ellenabad",
    "lat": 29.45282,
    "lng": 74.66122
  },
  {
    "state": "Haryana",
    "name": "Faridabad",
    "lat": 28.41124,
    "lng": 77.31316
  },
  {
    "state": "Haryana",
    "name": "Faridabad District",
    "lat": 28.46292,
    "lng": 77.3716
  },
  {
    "state": "Haryana",
    "name": "Farrukhnagar",
    "lat": 28.44745,
    "lng": 76.82391
  },
  {
    "state": "Haryana",
    "name": "Fatehabad",
    "lat": 29.51525,
    "lng": 75.45554
  },
  {
    "state": "Haryana",
    "name": "Fatehabad District",
    "lat": 29.31,
    "lng": 75.27
  },
  {
    "state": "Haryana",
    "name": "Firozpur Jhirka",
    "lat": 27.78853,
    "lng": 76.94496
  },
  {
    "state": "Haryana",
    "name": "Gharaunda",
    "lat": 29.53692,
    "lng": 76.97142
  },
  {
    "state": "Haryana",
    "name": "Gohana",
    "lat": 29.13777,
    "lng": 76.70247
  },
  {
    "state": "Haryana",
    "name": "Gorakhpur",
    "lat": 29.44768,
    "lng": 75.67206
  },
  {
    "state": "Haryana",
    "name": "Gurgaon",
    "lat": 28.43891,
    "lng": 77.00592
  },
  {
    "state": "Haryana",
    "name": "Hansi",
    "lat": 29.10239,
    "lng": 75.96253
  },
  {
    "state": "Haryana",
    "name": "Hasanpur",
    "lat": 27.96944,
    "lng": 77.49544
  },
  {
    "state": "Haryana",
    "name": "Hisar",
    "lat": 29.15394,
    "lng": 75.72294
  },
  {
    "state": "Haryana",
    "name": "Hodal",
    "lat": 27.89196,
    "lng": 77.36744
  },
  {
    "state": "Haryana",
    "name": "Inda Chhoi",
    "lat": 29.64042,
    "lng": 75.79041
  },
  {
    "state": "Haryana",
    "name": "Indri",
    "lat": 29.87999,
    "lng": 77.05972
  },
  {
    "state": "Haryana",
    "name": "Jagadhri",
    "lat": 30.16719,
    "lng": 77.30367
  },
  {
    "state": "Haryana",
    "name": "Jakhal",
    "lat": 29.79627,
    "lng": 75.82392
  },
  {
    "state": "Haryana",
    "name": "Jhajjar",
    "lat": 28.6063,
    "lng": 76.6565
  },
  {
    "state": "Haryana",
    "name": "Jind",
    "lat": 29.31577,
    "lng": 76.31502
  },
  {
    "state": "Haryana",
    "name": "Kaithal",
    "lat": 29.80153,
    "lng": 76.39959
  },
  {
    "state": "Haryana",
    "name": "Kalanaur",
    "lat": 28.82823,
    "lng": 76.3955
  },
  {
    "state": "Haryana",
    "name": "Kalanwali",
    "lat": 29.83573,
    "lng": 74.9717
  },
  {
    "state": "Haryana",
    "name": "Kanina Khas",
    "lat": 28.33093,
    "lng": 76.31099
  },
  {
    "state": "Haryana",
    "name": "Karnal",
    "lat": 29.66667,
    "lng": 76.83333
  },
  {
    "state": "Haryana",
    "name": "Kharkhauda",
    "lat": 28.8787,
    "lng": 76.91069
  },
  {
    "state": "Haryana",
    "name": "Kheri Sampla",
    "lat": 28.7781,
    "lng": 76.7756
  },
  {
    "state": "Haryana",
    "name": "Kurukshetra",
    "lat": 30,
    "lng": 76.75
  },
  {
    "state": "Haryana",
    "name": "Ladwa",
    "lat": 29.9935,
    "lng": 77.04563
  },
  {
    "state": "Haryana",
    "name": "Loharu",
    "lat": 28.42993,
    "lng": 75.80779
  },
  {
    "state": "Haryana",
    "name": "Maham",
    "lat": 28.96912,
    "lng": 76.29495
  },
  {
    "state": "Haryana",
    "name": "Mahendragarh",
    "lat": 28.25,
    "lng": 76.16667
  },
  {
    "state": "Haryana",
    "name": "Mandholi Kalan",
    "lat": 28.7085,
    "lng": 75.68296
  },
  {
    "state": "Haryana",
    "name": "Mustafabad",
    "lat": 30.2022,
    "lng": 77.14873
  },
  {
    "state": "Haryana",
    "name": "Narayangarh",
    "lat": 30.47798,
    "lng": 77.12804
  },
  {
    "state": "Haryana",
    "name": "Narnaul",
    "lat": 28.04444,
    "lng": 76.10833
  },
  {
    "state": "Haryana",
    "name": "Narnaund",
    "lat": 29.22047,
    "lng": 76.14278
  },
  {
    "state": "Haryana",
    "name": "Narwana",
    "lat": 29.59903,
    "lng": 76.11927
  },
  {
    "state": "Haryana",
    "name": "Nilokheri",
    "lat": 29.83671,
    "lng": 76.93191
  },
  {
    "state": "Haryana",
    "name": "Nuh",
    "lat": 28.10296,
    "lng": 77.00144
  },
  {
    "state": "Haryana",
    "name": "Palwal",
    "lat": 28.14469,
    "lng": 77.32546
  },
  {
    "state": "Haryana",
    "name": "Panchkula",
    "lat": 30.72883,
    "lng": 76.94716
  },
  {
    "state": "Haryana",
    "name": "Panipat",
    "lat": 29.33259,
    "lng": 76.92634
  },
  {
    "state": "Haryana",
    "name": "Pataudi",
    "lat": 28.32547,
    "lng": 76.77858
  },
  {
    "state": "Haryana",
    "name": "Pehowa",
    "lat": 29.97897,
    "lng": 76.58249
  },
  {
    "state": "Haryana",
    "name": "Pinjaur",
    "lat": 30.79873,
    "lng": 76.91822
  },
  {
    "state": "Haryana",
    "name": "Punahana",
    "lat": 27.86371,
    "lng": 77.20432
  },
  {
    "state": "Haryana",
    "name": "Pundri",
    "lat": 29.76096,
    "lng": 76.56034
  },
  {
    "state": "Haryana",
    "name": "Radaur",
    "lat": 30.02706,
    "lng": 77.15177
  },
  {
    "state": "Haryana",
    "name": "Rania",
    "lat": 29.52454,
    "lng": 74.83689
  },
  {
    "state": "Haryana",
    "name": "Ratia",
    "lat": 29.69029,
    "lng": 75.57688
  },
  {
    "state": "Haryana",
    "name": "Rewari",
    "lat": 28.199,
    "lng": 76.6183
  },
  {
    "state": "Haryana",
    "name": "Rewari District",
    "lat": 28.19613,
    "lng": 76.61607
  },
  {
    "state": "Haryana",
    "name": "Rohtak",
    "lat": 28.83333,
    "lng": 76.66667
  },
  {
    "state": "Haryana",
    "name": "Safidon",
    "lat": 29.40596,
    "lng": 76.67042
  },
  {
    "state": "Haryana",
    "name": "Samalkha",
    "lat": 29.23552,
    "lng": 77.01273
  },
  {
    "state": "Haryana",
    "name": "Shadipur Julana",
    "lat": 29.12368,
    "lng": 76.40516
  },
  {
    "state": "Haryana",
    "name": "Shahabad",
    "lat": 30.16776,
    "lng": 76.87046
  },
  {
    "state": "Haryana",
    "name": "Sirsa",
    "lat": 29.53489,
    "lng": 75.02898
  },
  {
    "state": "Haryana",
    "name": "Sohna",
    "lat": 28.24737,
    "lng": 77.06544
  },
  {
    "state": "Haryana",
    "name": "Sonipat",
    "lat": 29,
    "lng": 76.91667
  },
  {
    "state": "Haryana",
    "name": "Taoru",
    "lat": 28.21173,
    "lng": 76.94984
  },
  {
    "state": "Haryana",
    "name": "Thanesar",
    "lat": 29.97323,
    "lng": 76.83214
  },
  {
    "state": "Haryana",
    "name": "Tohana",
    "lat": 29.71332,
    "lng": 75.90441
  },
  {
    "state": "Haryana",
    "name": "Tosham",
    "lat": 28.86993,
    "lng": 75.9165
  },
  {
    "state": "Haryana",
    "name": "Uklana",
    "lat": 29.51124,
    "lng": 75.87823
  },
  {
    "state": "Haryana",
    "name": "Yamunanagar",
    "lat": 30.23644,
    "lng": 77.30498
  },
  {
    "state": "Himachal Pradesh",
    "name": "Arki",
    "lat": 31.15196,
    "lng": 76.96675
  },
  {
    "state": "Himachal Pradesh",
    "name": "Baddi",
    "lat": 30.95783,
    "lng": 76.79136
  },
  {
    "state": "Himachal Pradesh",
    "name": "Banjar",
    "lat": 31.639,
    "lng": 77.34055
  },
  {
    "state": "Himachal Pradesh",
    "name": "Bilaspur",
    "lat": 31.33027,
    "lng": 76.75663
  },
  {
    "state": "Himachal Pradesh",
    "name": "Chamba",
    "lat": 32.57147,
    "lng": 76.10229
  },
  {
    "state": "Himachal Pradesh",
    "name": "Chaupal",
    "lat": 30.94647,
    "lng": 77.5884
  },
  {
    "state": "Himachal Pradesh",
    "name": "Chowari",
    "lat": 32.4319,
    "lng": 76.012
  },
  {
    "state": "Himachal Pradesh",
    "name": "Chuari Khas",
    "lat": 32.43058,
    "lng": 76.01428
  },
  {
    "state": "Himachal Pradesh",
    "name": "Dagshai",
    "lat": 30.88431,
    "lng": 77.05228
  },
  {
    "state": "Himachal Pradesh",
    "name": "Dalhousie",
    "lat": 32.55219,
    "lng": 75.94663
  },
  {
    "state": "Himachal Pradesh",
    "name": "Daulatpur",
    "lat": 31.78871,
    "lng": 75.99154
  },
  {
    "state": "Himachal Pradesh",
    "name": "Dera Gopipur",
    "lat": 31.87919,
    "lng": 76.21871
  },
  {
    "state": "Himachal Pradesh",
    "name": "Dharamsala",
    "lat": 32.22006,
    "lng": 76.32013
  },
  {
    "state": "Himachal Pradesh",
    "name": "Gagret",
    "lat": 31.65846,
    "lng": 76.06144
  },
  {
    "state": "Himachal Pradesh",
    "name": "Ghumarwin",
    "lat": 31.44166,
    "lng": 76.71509
  },
  {
    "state": "Himachal Pradesh",
    "name": "Hamirpur",
    "lat": 31.75,
    "lng": 76.5
  },
  {
    "state": "Himachal Pradesh",
    "name": "Jawala Mukhi",
    "lat": 31.87456,
    "lng": 76.32013
  },
  {
    "state": "Himachal Pradesh",
    "name": "Jogindarnagar",
    "lat": 31.98727,
    "lng": 76.78906
  },
  {
    "state": "Himachal Pradesh",
    "name": "Jubbal",
    "lat": 31.10923,
    "lng": 77.65085
  },
  {
    "state": "Himachal Pradesh",
    "name": "Jutogh",
    "lat": 31.1,
    "lng": 77.11667
  },
  {
    "state": "Himachal Pradesh",
    "name": "Kalka",
    "lat": 30.83982,
    "lng": 76.94065
  },
  {
    "state": "Himachal Pradesh",
    "name": "Kangar",
    "lat": 32.09135,
    "lng": 76.26267
  },
  {
    "state": "Himachal Pradesh",
    "name": "Kangra",
    "lat": 32.16667,
    "lng": 76.25
  },
  {
    "state": "Himachal Pradesh",
    "name": "Kasauli",
    "lat": 30.89856,
    "lng": 76.96587
  },
  {
    "state": "Himachal Pradesh",
    "name": "Kinnaur",
    "lat": 31.58333,
    "lng": 78.41667
  },
  {
    "state": "Himachal Pradesh",
    "name": "Kotkhai",
    "lat": 31.11728,
    "lng": 77.53936
  },
  {
    "state": "Himachal Pradesh",
    "name": "Kotla",
    "lat": 32.25,
    "lng": 76.03333
  },
  {
    "state": "Himachal Pradesh",
    "name": "Kulu",
    "lat": 32,
    "lng": 77.25
  },
  {
    "state": "Himachal Pradesh",
    "name": "Kyelang",
    "lat": 32.5717,
    "lng": 77.02448
  },
  {
    "state": "Himachal Pradesh",
    "name": "Lahul and Spiti",
    "lat": 32.5,
    "lng": 77.83333
  },
  {
    "state": "Himachal Pradesh",
    "name": "Manali",
    "lat": 32.2574,
    "lng": 77.17481
  },
  {
    "state": "Himachal Pradesh",
    "name": "Mandi",
    "lat": 31.71194,
    "lng": 76.93273
  },
  {
    "state": "Himachal Pradesh",
    "name": "Nadaun",
    "lat": 31.78303,
    "lng": 76.3431
  },
  {
    "state": "Himachal Pradesh",
    "name": "Nagar",
    "lat": 32.13808,
    "lng": 77.17393
  },
  {
    "state": "Himachal Pradesh",
    "name": "Nagrota",
    "lat": 32.0571,
    "lng": 76.09139
  },
  {
    "state": "Himachal Pradesh",
    "name": "Nahan",
    "lat": 30.56029,
    "lng": 77.29426
  },
  {
    "state": "Himachal Pradesh",
    "name": "Nalagarh",
    "lat": 31.04168,
    "lng": 76.72285
  },
  {
    "state": "Himachal Pradesh",
    "name": "Palampur",
    "lat": 32.11453,
    "lng": 76.55681
  },
  {
    "state": "Himachal Pradesh",
    "name": "Pandoh",
    "lat": 31.66902,
    "lng": 77.05359
  },
  {
    "state": "Himachal Pradesh",
    "name": "Paonta Sahib",
    "lat": 30.43666,
    "lng": 77.62462
  },
  {
    "state": "Himachal Pradesh",
    "name": "Parwanoo",
    "lat": 30.83716,
    "lng": 76.96143
  },
  {
    "state": "Himachal Pradesh",
    "name": "Rajgarh",
    "lat": 30.85142,
    "lng": 77.30066
  },
  {
    "state": "Himachal Pradesh",
    "name": "Rampur",
    "lat": 31.44943,
    "lng": 77.63087
  },
  {
    "state": "Himachal Pradesh",
    "name": "Rohru",
    "lat": 31.20269,
    "lng": 77.75484
  },
  {
    "state": "Himachal Pradesh",
    "name": "Sabathu",
    "lat": 30.97494,
    "lng": 76.99137
  },
  {
    "state": "Himachal Pradesh",
    "name": "Santokhgarh",
    "lat": 31.35205,
    "lng": 76.31775
  },
  {
    "state": "Himachal Pradesh",
    "name": "Sarahan",
    "lat": 31.50988,
    "lng": 77.79395
  },
  {
    "state": "Himachal Pradesh",
    "name": "Sarka Ghat",
    "lat": 31.69887,
    "lng": 76.73529
  },
  {
    "state": "Himachal Pradesh",
    "name": "Seoni",
    "lat": 31.24188,
    "lng": 77.12362
  },
  {
    "state": "Himachal Pradesh",
    "name": "Shimla",
    "lat": 31.16667,
    "lng": 77.58333
  },
  {
    "state": "Himachal Pradesh",
    "name": "Sirmaur",
    "lat": 30.75,
    "lng": 77.5
  },
  {
    "state": "Himachal Pradesh",
    "name": "Solan",
    "lat": 31.08333,
    "lng": 76.83333
  },
  {
    "state": "Himachal Pradesh",
    "name": "Sundarnagar",
    "lat": 31.53523,
    "lng": 76.905
  },
  {
    "state": "Himachal Pradesh",
    "name": "Theog",
    "lat": 31.12155,
    "lng": 77.35838
  },
  {
    "state": "Himachal Pradesh",
    "name": "Tira Sujanpur",
    "lat": 31.83364,
    "lng": 76.50539
  },
  {
    "state": "Himachal Pradesh",
    "name": "Una",
    "lat": 31.46493,
    "lng": 76.26914
  },
  {
    "state": "Himachal Pradesh",
    "name": "Yol",
    "lat": 32.16423,
    "lng": 76.19622
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Akhnur",
    "lat": 32.86667,
    "lng": 74.73333
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Anantnag",
    "lat": 33.73068,
    "lng": 75.15418
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Awantipur",
    "lat": 33.91978,
    "lng": 75.01515
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Badgam",
    "lat": 33.89001,
    "lng": 74.66297
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Bandipore",
    "lat": 34.50404,
    "lng": 74.82832
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Bandipura",
    "lat": 34.41728,
    "lng": 74.64308
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Banihal",
    "lat": 33.43647,
    "lng": 75.19684
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Baramula",
    "lat": 34.19287,
    "lng": 74.3692
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Batoti",
    "lat": 33.11826,
    "lng": 75.30889
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Bhadarwah",
    "lat": 32.97941,
    "lng": 75.71723
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Bijbehara",
    "lat": 33.79378,
    "lng": 75.107
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Bishnah",
    "lat": 32.6106,
    "lng": 74.85557
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Doda",
    "lat": 33.14916,
    "lng": 75.54746
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Gandarbal",
    "lat": 34.22619,
    "lng": 74.77478
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Ganderbal",
    "lat": 34.29467,
    "lng": 75.19996
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Gho Brahmanan de",
    "lat": 32.5559,
    "lng": 74.9539
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Hajan",
    "lat": 34.29895,
    "lng": 74.61681
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Hiranagar",
    "lat": 32.45493,
    "lng": 75.27187
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Jammu",
    "lat": 32.75,
    "lng": 74.83333
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Jaurian",
    "lat": 32.83255,
    "lng": 74.57612
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Kathua",
    "lat": 32.58333,
    "lng": 75.5
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Katra",
    "lat": 32.99167,
    "lng": 74.93195
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Khaur",
    "lat": 32.6027,
    "lng": 74.80918
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Kishtwar",
    "lat": 33.52958,
    "lng": 76.01462
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Kud",
    "lat": 33.07246,
    "lng": 75.28727
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Kulgam",
    "lat": 33.64456,
    "lng": 75.01923
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Kupwara",
    "lat": 34.53193,
    "lng": 74.26605
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Ladakh",
    "lat": 34.33333,
    "lng": 77.41667
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Magam",
    "lat": 34.09256,
    "lng": 74.59016
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Nawanshahr",
    "lat": 32.76505,
    "lng": 74.52772
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Noria",
    "lat": 32.52095,
    "lng": 74.79845
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Padam",
    "lat": 33.46659,
    "lng": 76.88488
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Pahlgam",
    "lat": 34.01592,
    "lng": 75.31899
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Parol",
    "lat": 32.34598,
    "lng": 75.43441
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Pattan",
    "lat": 34.16125,
    "lng": 74.55634
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Pulwama",
    "lat": 33.87405,
    "lng": 74.89955
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Punch",
    "lat": 33.70178,
    "lng": 74.19916
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Qazigund",
    "lat": 33.63828,
    "lng": 75.14261
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Rajaori",
    "lat": 33.37526,
    "lng": 74.3092
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Rajauri",
    "lat": 33.25,
    "lng": 74.25
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Ramban",
    "lat": 33.32301,
    "lng": 75.1861
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Ramgarh",
    "lat": 33.40379,
    "lng": 74.22388
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Ramnagar",
    "lat": 32.80728,
    "lng": 75.31119
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Riasi",
    "lat": 33.08115,
    "lng": 74.83242
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Samba",
    "lat": 32.57523,
    "lng": 75.10929
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Shupiyan",
    "lat": 33.73067,
    "lng": 74.81869
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Sopur",
    "lat": 34.28671,
    "lng": 74.47228
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Soyibug",
    "lat": 34.07677,
    "lng": 74.7057
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Srinagar",
    "lat": 34.08565,
    "lng": 74.80555
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Sumbal",
    "lat": 34.23072,
    "lng": 74.6472
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Thang",
    "lat": 34.9274,
    "lng": 76.79336
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Thanna Mandi",
    "lat": 33.54204,
    "lng": 74.381
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Tral",
    "lat": 33.92708,
    "lng": 75.11585
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Tsrar Sharif",
    "lat": 33.86319,
    "lng": 74.76524
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Udhampur",
    "lat": 33,
    "lng": 75.16667
  },
  {
    "state": "Jammu and Kashmir",
    "name": "Uri",
    "lat": 34.08064,
    "lng": 74.05088
  },
  {
    "state": "Jharkhand",
    "name": "Bagra",
    "lat": 23.73333,
    "lng": 86.31667
  },
  {
    "state": "Jharkhand",
    "name": "Barka Kana",
    "lat": 23.62118,
    "lng": 85.46748
  },
  {
    "state": "Jharkhand",
    "name": "Barki Saria",
    "lat": 24.17594,
    "lng": 85.88938
  },
  {
    "state": "Jharkhand",
    "name": "Barwadih",
    "lat": 23.8478,
    "lng": 84.11049
  },
  {
    "state": "Jharkhand",
    "name": "Bhojudih",
    "lat": 23.63962,
    "lng": 86.44105
  },
  {
    "state": "Jharkhand",
    "name": "Bokaro",
    "lat": 23.68562,
    "lng": 85.99026
  },
  {
    "state": "Jharkhand",
    "name": "Bundu",
    "lat": 23.16095,
    "lng": 85.59007
  },
  {
    "state": "Jharkhand",
    "name": "Chaibasa",
    "lat": 22.55038,
    "lng": 85.80249
  },
  {
    "state": "Jharkhand",
    "name": "Chakradharpur",
    "lat": 22.67611,
    "lng": 85.62892
  },
  {
    "state": "Jharkhand",
    "name": "Chakulia",
    "lat": 22.48301,
    "lng": 86.71793
  },
  {
    "state": "Jharkhand",
    "name": "Chandil",
    "lat": 22.95745,
    "lng": 86.05331
  },
  {
    "state": "Jharkhand",
    "name": "Chas",
    "lat": 23.63556,
    "lng": 86.16712
  },
  {
    "state": "Jharkhand",
    "name": "Chatra",
    "lat": 24.20645,
    "lng": 84.87085
  },
  {
    "state": "Jharkhand",
    "name": "Chiria",
    "lat": 22.31093,
    "lng": 85.27601
  },
  {
    "state": "Jharkhand",
    "name": "Daltonganj",
    "lat": 24.03971,
    "lng": 84.0658
  },
  {
    "state": "Jharkhand",
    "name": "Deogarh",
    "lat": 24.44382,
    "lng": 86.72607
  },
  {
    "state": "Jharkhand",
    "name": "Dhanbad",
    "lat": 23.80199,
    "lng": 86.44324
  },
  {
    "state": "Jharkhand",
    "name": "Dhanwar",
    "lat": 24.41074,
    "lng": 85.98183
  },
  {
    "state": "Jharkhand",
    "name": "Dugda",
    "lat": 23.74516,
    "lng": 86.17175
  },
  {
    "state": "Jharkhand",
    "name": "Dumka",
    "lat": 24.3,
    "lng": 87.25
  },
  {
    "state": "Jharkhand",
    "name": "Garhwa",
    "lat": 24.07494,
    "lng": 83.71023
  },
  {
    "state": "Jharkhand",
    "name": "Ghatsila",
    "lat": 22.58531,
    "lng": 86.47682
  },
  {
    "state": "Jharkhand",
    "name": "Giridih",
    "lat": 24.25,
    "lng": 85.91667
  },
  {
    "state": "Jharkhand",
    "name": "Gobindpur",
    "lat": 22.63393,
    "lng": 86.07162
  },
  {
    "state": "Jharkhand",
    "name": "Godda",
    "lat": 24.83333,
    "lng": 87.21667
  },
  {
    "state": "Jharkhand",
    "name": "Gomoh",
    "lat": 23.87355,
    "lng": 86.1516
  },
  {
    "state": "Jharkhand",
    "name": "Gopinathpur",
    "lat": 22.66301,
    "lng": 86.075
  },
  {
    "state": "Jharkhand",
    "name": "Gua",
    "lat": 22.21361,
    "lng": 85.38774
  },
  {
    "state": "Jharkhand",
    "name": "Gumia",
    "lat": 23.7975,
    "lng": 85.82523
  },
  {
    "state": "Jharkhand",
    "name": "Gumla",
    "lat": 23.08055,
    "lng": 84.53834
  },
  {
    "state": "Jharkhand",
    "name": "Hazaribag",
    "lat": 24,
    "lng": 85.25
  },
  {
    "state": "Jharkhand",
    "name": "Hazaribagh",
    "lat": 23.99241,
    "lng": 85.36162
  },
  {
    "state": "Jharkhand",
    "name": "Hesla",
    "lat": 24.06313,
    "lng": 85.87905
  },
  {
    "state": "Jharkhand",
    "name": "Husainabad",
    "lat": 24.52849,
    "lng": 84
  },
  {
    "state": "Jharkhand",
    "name": "Jagannathpur",
    "lat": 22.22115,
    "lng": 85.63917
  },
  {
    "state": "Jharkhand",
    "name": "Jamadoba",
    "lat": 23.71667,
    "lng": 86.4
  },
  {
    "state": "Jharkhand",
    "name": "Jamshedpur",
    "lat": 22.80278,
    "lng": 86.18545
  },
  {
    "state": "Jharkhand",
    "name": "Jamtara",
    "lat": 24,
    "lng": 86.85
  },
  {
    "state": "Jharkhand",
    "name": "Jasidih",
    "lat": 24.51379,
    "lng": 86.64576
  },
  {
    "state": "Jharkhand",
    "name": "Jharia",
    "lat": 23.74079,
    "lng": 86.41456
  },
  {
    "state": "Jharkhand",
    "name": "Jugsalai",
    "lat": 22.77668,
    "lng": 86.18351
  },
  {
    "state": "Jharkhand",
    "name": "Jumri Tilaiya",
    "lat": 24.4349,
    "lng": 85.52951
  },
  {
    "state": "Jharkhand",
    "name": "Kalikapur",
    "lat": 22.61662,
    "lng": 86.2881
  },
  {
    "state": "Jharkhand",
    "name": "Kandra",
    "lat": 22.8517,
    "lng": 86.05192
  },
  {
    "state": "Jharkhand",
    "name": "Kanke",
    "lat": 23.43478,
    "lng": 85.32059
  },
  {
    "state": "Jharkhand",
    "name": "Katras",
    "lat": 23.79752,
    "lng": 86.29834
  },
  {
    "state": "Jharkhand",
    "name": "Kenduadih",
    "lat": 23.77574,
    "lng": 86.37609
  },
  {
    "state": "Jharkhand",
    "name": "Kharsawan",
    "lat": 22.79093,
    "lng": 85.83102
  },
  {
    "state": "Jharkhand",
    "name": "Khunti",
    "lat": 23.07602,
    "lng": 85.27818
  },
  {
    "state": "Jharkhand",
    "name": "Kodarma",
    "lat": 24.46753,
    "lng": 85.59397
  },
  {
    "state": "Jharkhand",
    "name": "Kuju",
    "lat": 23.72536,
    "lng": 85.51023
  },
  {
    "state": "Jharkhand",
    "name": "Latehar",
    "lat": 23.75,
    "lng": 84.4
  },
  {
    "state": "Jharkhand",
    "name": "Lohardaga",
    "lat": 23.5,
    "lng": 84.6
  },
  {
    "state": "Jharkhand",
    "name": "Madhupur",
    "lat": 24.27419,
    "lng": 86.63929
  },
  {
    "state": "Jharkhand",
    "name": "Malkera",
    "lat": 23.78213,
    "lng": 86.28767
  },
  {
    "state": "Jharkhand",
    "name": "Manoharpur",
    "lat": 22.37456,
    "lng": 85.19234
  },
  {
    "state": "Jharkhand",
    "name": "Mugma",
    "lat": 23.77015,
    "lng": 86.72746
  },
  {
    "state": "Jharkhand",
    "name": "Mushabani",
    "lat": 22.51135,
    "lng": 86.45713
  },
  {
    "state": "Jharkhand",
    "name": "Neturhat",
    "lat": 23.47457,
    "lng": 84.2678
  },
  {
    "state": "Jharkhand",
    "name": "Nirsa",
    "lat": 23.78438,
    "lng": 86.70692
  },
  {
    "state": "Jharkhand",
    "name": "Noamundi",
    "lat": 22.16094,
    "lng": 85.50416
  },
  {
    "state": "Jharkhand",
    "name": "Pakur",
    "lat": 24.63925,
    "lng": 87.84239
  },
  {
    "state": "Jharkhand",
    "name": "Palamu",
    "lat": 23.91667,
    "lng": 84.08333
  },
  {
    "state": "Jharkhand",
    "name": "Pashchim Singhbhum",
    "lat": 22.5,
    "lng": 85.5
  },
  {
    "state": "Jharkhand",
    "name": "patamda",
    "lat": 24.3,
    "lng": 85.41667
  },
  {
    "state": "Jharkhand",
    "name": "Pathardih",
    "lat": 23.6658,
    "lng": 86.43166
  },
  {
    "state": "Jharkhand",
    "name": "Purba Singhbhum",
    "lat": 22.59238,
    "lng": 86.48341
  },
  {
    "state": "Jharkhand",
    "name": "Ramgarh",
    "lat": 23.63073,
    "lng": 85.56057
  },
  {
    "state": "Jharkhand",
    "name": "Ranchi",
    "lat": 23.34316,
    "lng": 85.3094
  },
  {
    "state": "Jharkhand",
    "name": "Ray",
    "lat": 23.6843,
    "lng": 85.05457
  },
  {
    "state": "Jharkhand",
    "name": "Sahibganj",
    "lat": 24.99354,
    "lng": 87.67333
  },
  {
    "state": "Jharkhand",
    "name": "Saraikela",
    "lat": 22.69963,
    "lng": 85.93126
  },
  {
    "state": "Jharkhand",
    "name": "Sarubera",
    "lat": 23.81813,
    "lng": 85.99628
  },
  {
    "state": "Jharkhand",
    "name": "Sijua",
    "lat": 23.77617,
    "lng": 86.33028
  },
  {
    "state": "Jharkhand",
    "name": "Simdega",
    "lat": 22.61523,
    "lng": 84.50208
  },
  {
    "state": "Jharkhand",
    "name": "Sini",
    "lat": 22.79325,
    "lng": 85.94543
  },
  {
    "state": "Jharkhand",
    "name": "Topchanchi",
    "lat": 23.90381,
    "lng": 86.19792
  },
  {
    "state": "Karnataka",
    "name": "Afzalpur",
    "lat": 17.19986,
    "lng": 76.36018
  },
  {
    "state": "Karnataka",
    "name": "Ajjampur",
    "lat": 13.72794,
    "lng": 76.0068
  },
  {
    "state": "Karnataka",
    "name": "Aland",
    "lat": 17.56425,
    "lng": 76.56854
  },
  {
    "state": "Karnataka",
    "name": "Alnavar",
    "lat": 15.42727,
    "lng": 74.74111
  },
  {
    "state": "Karnataka",
    "name": "Alur",
    "lat": 12.97805,
    "lng": 75.99094
  },
  {
    "state": "Karnataka",
    "name": "Anekal",
    "lat": 12.7111,
    "lng": 77.69557
  },
  {
    "state": "Karnataka",
    "name": "Ankola",
    "lat": 14.66049,
    "lng": 74.3047
  },
  {
    "state": "Karnataka",
    "name": "Annigeri",
    "lat": 15.42513,
    "lng": 75.4335
  },
  {
    "state": "Karnataka",
    "name": "Arkalgud",
    "lat": 12.76171,
    "lng": 76.06035
  },
  {
    "state": "Karnataka",
    "name": "Arsikere",
    "lat": 13.31446,
    "lng": 76.25704
  },
  {
    "state": "Karnataka",
    "name": "Athni",
    "lat": 16.72613,
    "lng": 75.06421
  },
  {
    "state": "Karnataka",
    "name": "Aurad",
    "lat": 18.25397,
    "lng": 77.41761
  },
  {
    "state": "Karnataka",
    "name": "Badami",
    "lat": 15.91495,
    "lng": 75.67683
  },
  {
    "state": "Karnataka",
    "name": "Bagalkot",
    "lat": 16.18,
    "lng": 75.69
  },
  {
    "state": "Karnataka",
    "name": "Bagepalli",
    "lat": 13.78338,
    "lng": 77.79667
  },
  {
    "state": "Karnataka",
    "name": "Bail-Hongal",
    "lat": 15.8137,
    "lng": 74.85895
  },
  {
    "state": "Karnataka",
    "name": "Ballari",
    "lat": 15.15,
    "lng": 76.55
  },
  {
    "state": "Karnataka",
    "name": "Ballary",
    "lat": 15.14205,
    "lng": 76.92398
  },
  {
    "state": "Karnataka",
    "name": "Banavar",
    "lat": 13.41029,
    "lng": 76.16314
  },
  {
    "state": "Karnataka",
    "name": "Bangalore Rural",
    "lat": 13.22567,
    "lng": 77.57501
  },
  {
    "state": "Karnataka",
    "name": "Bangalore Urban",
    "lat": 13,
    "lng": 77.58333
  },
  {
    "state": "Karnataka",
    "name": "Bangarapet",
    "lat": 12.99116,
    "lng": 78.17804
  },
  {
    "state": "Karnataka",
    "name": "Bannur",
    "lat": 12.33295,
    "lng": 76.86201
  },
  {
    "state": "Karnataka",
    "name": "Bantval",
    "lat": 12.8905,
    "lng": 75.03489
  },
  {
    "state": "Karnataka",
    "name": "Basavakalyan",
    "lat": 17.87445,
    "lng": 76.94972
  },
  {
    "state": "Karnataka",
    "name": "Basavana Bagevadi",
    "lat": 16.57278,
    "lng": 75.97252
  },
  {
    "state": "Karnataka",
    "name": "Belagavi",
    "lat": 16.33333,
    "lng": 74.75
  },
  {
    "state": "Karnataka",
    "name": "Belluru",
    "lat": 12.9814,
    "lng": 76.73308
  },
  {
    "state": "Karnataka",
    "name": "Beltangadi",
    "lat": 13.98333,
    "lng": 75.3
  },
  {
    "state": "Karnataka",
    "name": "Belur",
    "lat": 13.16558,
    "lng": 75.86519
  },
  {
    "state": "Karnataka",
    "name": "Bengaluru",
    "lat": 12.97194,
    "lng": 77.59369
  },
  {
    "state": "Karnataka",
    "name": "Bhadravati",
    "lat": 13.84846,
    "lng": 75.70502
  },
  {
    "state": "Karnataka",
    "name": "Bhalki",
    "lat": 18.04348,
    "lng": 77.206
  },
  {
    "state": "Karnataka",
    "name": "Bhatkal",
    "lat": 13.98534,
    "lng": 74.55531
  },
  {
    "state": "Karnataka",
    "name": "Bidar",
    "lat": 18.08333,
    "lng": 77.33333
  },
  {
    "state": "Karnataka",
    "name": "Bilgi",
    "lat": 16.34714,
    "lng": 75.61804
  },
  {
    "state": "Karnataka",
    "name": "Birur",
    "lat": 13.59723,
    "lng": 75.97167
  },
  {
    "state": "Karnataka",
    "name": "Byadgi",
    "lat": 14.67325,
    "lng": 75.4868
  },
  {
    "state": "Karnataka",
    "name": "Byndoor",
    "lat": 13.86667,
    "lng": 74.63333
  },
  {
    "state": "Karnataka",
    "name": "Canacona",
    "lat": 14.9959,
    "lng": 74.05056
  },
  {
    "state": "Karnataka",
    "name": "Challakere",
    "lat": 14.318,
    "lng": 76.65165
  },
  {
    "state": "Karnataka",
    "name": "Chamrajnagar",
    "lat": 11.96,
    "lng": 77.09
  },
  {
    "state": "Karnataka",
    "name": "Channagiri",
    "lat": 14.02399,
    "lng": 75.92577
  },
  {
    "state": "Karnataka",
    "name": "Channapatna",
    "lat": 12.65143,
    "lng": 77.20672
  },
  {
    "state": "Karnataka",
    "name": "Channarayapatna",
    "lat": 12.90642,
    "lng": 76.38775
  },
  {
    "state": "Karnataka",
    "name": "Chik Ballapur",
    "lat": 13.43512,
    "lng": 77.72787
  },
  {
    "state": "Karnataka",
    "name": "Chikkaballapur",
    "lat": 13.55,
    "lng": 77.87
  },
  {
    "state": "Karnataka",
    "name": "Chikkamagaluru",
    "lat": 13.49,
    "lng": 75.73
  },
  {
    "state": "Karnataka",
    "name": "Chiknayakanhalli",
    "lat": 13.41609,
    "lng": 76.62063
  },
  {
    "state": "Karnataka",
    "name": "Chikodi",
    "lat": 16.42898,
    "lng": 74.58591
  },
  {
    "state": "Karnataka",
    "name": "Chincholi",
    "lat": 17.46508,
    "lng": 77.41874
  },
  {
    "state": "Karnataka",
    "name": "Chintamani",
    "lat": 13.40051,
    "lng": 78.05172
  },
  {
    "state": "Karnataka",
    "name": "Chitapur",
    "lat": 17.12357,
    "lng": 77.0824
  },
  {
    "state": "Karnataka",
    "name": "Chitradurga",
    "lat": 14.2,
    "lng": 76.5
  },
  {
    "state": "Karnataka",
    "name": "Closepet",
    "lat": 12.72181,
    "lng": 77.28149
  },
  {
    "state": "Karnataka",
    "name": "Coondapoor",
    "lat": 13.63126,
    "lng": 74.6902
  },
  {
    "state": "Karnataka",
    "name": "Dakshina Kannada",
    "lat": 12.84,
    "lng": 75.29
  },
  {
    "state": "Karnataka",
    "name": "Dandeli",
    "lat": 15.26667,
    "lng": 74.61667
  },
  {
    "state": "Karnataka",
    "name": "Davanagere",
    "lat": 14.43,
    "lng": 75.9
  },
  {
    "state": "Karnataka",
    "name": "Devanhalli",
    "lat": 13.24655,
    "lng": 77.71183
  },
  {
    "state": "Karnataka",
    "name": "Dharwad",
    "lat": 15.37,
    "lng": 75.14
  },
  {
    "state": "Karnataka",
    "name": "Dod Ballapur",
    "lat": 13.29452,
    "lng": 77.53777
  },
  {
    "state": "Karnataka",
    "name": "French Rocks",
    "lat": 12.50094,
    "lng": 76.67416
  },
  {
    "state": "Karnataka",
    "name": "Gadag",
    "lat": 15.49835,
    "lng": 75.65187
  },
  {
    "state": "Karnataka",
    "name": "Gadag-Betageri",
    "lat": 15.4167,
    "lng": 75.6167
  },
  {
    "state": "Karnataka",
    "name": "Gajendragarh",
    "lat": 15.73628,
    "lng": 75.96976
  },
  {
    "state": "Karnataka",
    "name": "Gangawati",
    "lat": 15.4313,
    "lng": 76.52933
  },
  {
    "state": "Karnataka",
    "name": "Gangolli",
    "lat": 13.65024,
    "lng": 74.67072
  },
  {
    "state": "Karnataka",
    "name": "Gokak",
    "lat": 16.16901,
    "lng": 74.82393
  },
  {
    "state": "Karnataka",
    "name": "Gokarna",
    "lat": 14.55,
    "lng": 74.31667
  },
  {
    "state": "Karnataka",
    "name": "Goribidnur",
    "lat": 13.61072,
    "lng": 77.51738
  },
  {
    "state": "Karnataka",
    "name": "Gorur",
    "lat": 12.82297,
    "lng": 76.06463
  },
  {
    "state": "Karnataka",
    "name": "Gubbi",
    "lat": 13.31216,
    "lng": 76.94102
  },
  {
    "state": "Karnataka",
    "name": "Gudibanda",
    "lat": 13.67099,
    "lng": 77.70414
  },
  {
    "state": "Karnataka",
    "name": "Guledagudda",
    "lat": 16.05025,
    "lng": 75.78997
  },
  {
    "state": "Karnataka",
    "name": "Gundlupēt",
    "lat": 11.81004,
    "lng": 76.69027
  },
  {
    "state": "Karnataka",
    "name": "Gurmatkal",
    "lat": 16.86773,
    "lng": 77.39088
  },
  {
    "state": "Karnataka",
    "name": "Hadagalli",
    "lat": 15.02048,
    "lng": 75.93185
  },
  {
    "state": "Karnataka",
    "name": "Haliyal",
    "lat": 15.32864,
    "lng": 74.75638
  },
  {
    "state": "Karnataka",
    "name": "Hampi",
    "lat": 15.3352,
    "lng": 76.4603
  },
  {
    "state": "Karnataka",
    "name": "Hangal",
    "lat": 14.76465,
    "lng": 75.1246
  },
  {
    "state": "Karnataka",
    "name": "Harihar",
    "lat": 14.51288,
    "lng": 75.80716
  },
  {
    "state": "Karnataka",
    "name": "Harpanahalli",
    "lat": 14.78766,
    "lng": 75.98863
  },
  {
    "state": "Karnataka",
    "name": "Hassan",
    "lat": 12.95,
    "lng": 76.08333
  },
  {
    "state": "Karnataka",
    "name": "Haveri",
    "lat": 14.73732,
    "lng": 75.41062
  },
  {
    "state": "Karnataka",
    "name": "Heggadadevankote",
    "lat": 12.08809,
    "lng": 76.32957
  },
  {
    "state": "Karnataka",
    "name": "Hirekerur",
    "lat": 14.45506,
    "lng": 75.3952
  },
  {
    "state": "Karnataka",
    "name": "Hiriyur",
    "lat": 13.94455,
    "lng": 76.61723
  },
  {
    "state": "Karnataka",
    "name": "Holalkere",
    "lat": 14.04295,
    "lng": 76.18496
  },
  {
    "state": "Karnataka",
    "name": "Hole Narsipur",
    "lat": 12.78635,
    "lng": 76.24331
  },
  {
    "state": "Karnataka",
    "name": "Homnabad",
    "lat": 17.77074,
    "lng": 77.12519
  },
  {
    "state": "Karnataka",
    "name": "Honavar",
    "lat": 14.28088,
    "lng": 74.44497
  },
  {
    "state": "Karnataka",
    "name": "Honnali",
    "lat": 14.23976,
    "lng": 75.64507
  },
  {
    "state": "Karnataka",
    "name": "Hosanagara",
    "lat": 13.91387,
    "lng": 75.06503
  },
  {
    "state": "Karnataka",
    "name": "Hosangadi",
    "lat": 13.69756,
    "lng": 74.95427
  },
  {
    "state": "Karnataka",
    "name": "Hosdurga",
    "lat": 13.79631,
    "lng": 76.28408
  },
  {
    "state": "Karnataka",
    "name": "Hoskote",
    "lat": 13.0707,
    "lng": 77.79814
  },
  {
    "state": "Karnataka",
    "name": "Hospet",
    "lat": 15.26954,
    "lng": 76.3871
  },
  {
    "state": "Karnataka",
    "name": "Hubballi",
    "lat": 15.34776,
    "lng": 75.13378
  },
  {
    "state": "Karnataka",
    "name": "Hukeri",
    "lat": 16.23082,
    "lng": 74.60244
  },
  {
    "state": "Karnataka",
    "name": "Hungund",
    "lat": 16.06213,
    "lng": 76.0586
  },
  {
    "state": "Karnataka",
    "name": "Hunsur",
    "lat": 12.30359,
    "lng": 76.29275
  },
  {
    "state": "Karnataka",
    "name": "Ilkal",
    "lat": 15.95923,
    "lng": 76.11351
  },
  {
    "state": "Karnataka",
    "name": "Indi",
    "lat": 17.17735,
    "lng": 75.9526
  },
  {
    "state": "Karnataka",
    "name": "Jagalur",
    "lat": 14.51957,
    "lng": 76.33915
  },
  {
    "state": "Karnataka",
    "name": "Jamkhandi",
    "lat": 16.50461,
    "lng": 75.29146
  },
  {
    "state": "Karnataka",
    "name": "Jevargi",
    "lat": 17.01394,
    "lng": 76.77317
  },
  {
    "state": "Karnataka",
    "name": "Kadur",
    "lat": 13.55285,
    "lng": 76.01164
  },
  {
    "state": "Karnataka",
    "name": "Kalaburgi",
    "lat": 17.16667,
    "lng": 77.08333
  },
  {
    "state": "Karnataka",
    "name": "Kalghatgi",
    "lat": 15.18315,
    "lng": 74.97099
  },
  {
    "state": "Karnataka",
    "name": "Kampli",
    "lat": 15.40626,
    "lng": 76.60013
  },
  {
    "state": "Karnataka",
    "name": "Kankanhalli",
    "lat": 12.54654,
    "lng": 77.42005
  },
  {
    "state": "Karnataka",
    "name": "Karkala",
    "lat": 13.21428,
    "lng": 74.99234
  },
  {
    "state": "Karnataka",
    "name": "Karwar",
    "lat": 14.81361,
    "lng": 74.12972
  },
  {
    "state": "Karnataka",
    "name": "Kavalur",
    "lat": 15.28829,
    "lng": 75.9433
  },
  {
    "state": "Karnataka",
    "name": "Kerur",
    "lat": 16.01384,
    "lng": 75.54631
  },
  {
    "state": "Karnataka",
    "name": "Khanapur",
    "lat": 15.63969,
    "lng": 74.50847
  },
  {
    "state": "Karnataka",
    "name": "Kodagu",
    "lat": 12.41667,
    "lng": 75.75
  },
  {
    "state": "Karnataka",
    "name": "Kodigenahalli",
    "lat": 13.72136,
    "lng": 77.38629
  },
  {
    "state": "Karnataka",
    "name": "Kodlipet",
    "lat": 12.80087,
    "lng": 75.88662
  },
  {
    "state": "Karnataka",
    "name": "Kolar",
    "lat": 13.13,
    "lng": 78.23
  },
  {
    "state": "Karnataka",
    "name": "Kollegal",
    "lat": 12.15449,
    "lng": 77.11051
  },
  {
    "state": "Karnataka",
    "name": "Konanur",
    "lat": 12.63016,
    "lng": 76.05037
  },
  {
    "state": "Karnataka",
    "name": "Konnur",
    "lat": 16.20138,
    "lng": 74.74886
  },
  {
    "state": "Karnataka",
    "name": "Koppa",
    "lat": 13.53044,
    "lng": 75.36329
  },
  {
    "state": "Karnataka",
    "name": "Koppal",
    "lat": 15.5,
    "lng": 76.2
  },
  {
    "state": "Karnataka",
    "name": "Koratagere",
    "lat": 13.522,
    "lng": 77.2373
  },
  {
    "state": "Karnataka",
    "name": "Kotturu",
    "lat": 14.82442,
    "lng": 76.22005
  },
  {
    "state": "Karnataka",
    "name": "Krishnarajpet",
    "lat": 12.66621,
    "lng": 76.4877
  },
  {
    "state": "Karnataka",
    "name": "Kudachi",
    "lat": 16.62784,
    "lng": 74.85408
  },
  {
    "state": "Karnataka",
    "name": "Kudligi",
    "lat": 14.905,
    "lng": 76.38527
  },
  {
    "state": "Karnataka",
    "name": "Kumsi",
    "lat": 14.05455,
    "lng": 75.39992
  },
  {
    "state": "Karnataka",
    "name": "Kumta",
    "lat": 14.42853,
    "lng": 74.4189
  },
  {
    "state": "Karnataka",
    "name": "Kundgol",
    "lat": 15.25612,
    "lng": 75.24735
  },
  {
    "state": "Karnataka",
    "name": "Kunigal",
    "lat": 13.02319,
    "lng": 77.02518
  },
  {
    "state": "Karnataka",
    "name": "Kurgunta",
    "lat": 17.19321,
    "lng": 77.35772
  },
  {
    "state": "Karnataka",
    "name": "Kushalnagar",
    "lat": 12.45795,
    "lng": 75.95904
  },
  {
    "state": "Karnataka",
    "name": "Kushtagi",
    "lat": 15.75623,
    "lng": 76.19112
  },
  {
    "state": "Karnataka",
    "name": "Lakshmeshwar",
    "lat": 15.12689,
    "lng": 75.46935
  },
  {
    "state": "Karnataka",
    "name": "Lingsugur",
    "lat": 16.15876,
    "lng": 76.52174
  },
  {
    "state": "Karnataka",
    "name": "Londa",
    "lat": 15.46907,
    "lng": 74.51906
  },
  {
    "state": "Karnataka",
    "name": "Maddagiri",
    "lat": 13.66035,
    "lng": 77.21239
  },
  {
    "state": "Karnataka",
    "name": "Maddur",
    "lat": 12.58283,
    "lng": 77.04294
  },
  {
    "state": "Karnataka",
    "name": "Madikeri",
    "lat": 12.42602,
    "lng": 75.7382
  },
  {
    "state": "Karnataka",
    "name": "Magadi",
    "lat": 12.95706,
    "lng": 77.22374
  },
  {
    "state": "Karnataka",
    "name": "Mahalingpur",
    "lat": 16.3888,
    "lng": 75.10873
  },
  {
    "state": "Karnataka",
    "name": "Malavalli",
    "lat": 12.38556,
    "lng": 77.06045
  },
  {
    "state": "Karnataka",
    "name": "Malpe",
    "lat": 13.34962,
    "lng": 74.70394
  },
  {
    "state": "Karnataka",
    "name": "Malur",
    "lat": 13.00322,
    "lng": 77.93798
  },
  {
    "state": "Karnataka",
    "name": "Mandya",
    "lat": 12.5223,
    "lng": 76.89746
  },
  {
    "state": "Karnataka",
    "name": "Mangaluru",
    "lat": 12.91723,
    "lng": 74.85603
  },
  {
    "state": "Karnataka",
    "name": "Manipal",
    "lat": 13.35,
    "lng": 74.78333
  },
  {
    "state": "Karnataka",
    "name": "Manvi",
    "lat": 15.99126,
    "lng": 77.05034
  },
  {
    "state": "Karnataka",
    "name": "Mayakonda",
    "lat": 14.28894,
    "lng": 76.08305
  },
  {
    "state": "Karnataka",
    "name": "Melukote",
    "lat": 12.66258,
    "lng": 76.64861
  },
  {
    "state": "Karnataka",
    "name": "Mudbidri",
    "lat": 13.06653,
    "lng": 74.99525
  },
  {
    "state": "Karnataka",
    "name": "Muddebihal",
    "lat": 16.33782,
    "lng": 76.13173
  },
  {
    "state": "Karnataka",
    "name": "Mudgal",
    "lat": 16.01191,
    "lng": 76.44203
  },
  {
    "state": "Karnataka",
    "name": "Mudgere",
    "lat": 13.13353,
    "lng": 75.6416
  },
  {
    "state": "Karnataka",
    "name": "Mudhol",
    "lat": 16.33354,
    "lng": 75.28305
  },
  {
    "state": "Karnataka",
    "name": "Mulbagal",
    "lat": 13.16352,
    "lng": 78.39346
  },
  {
    "state": "Karnataka",
    "name": "Mulgund",
    "lat": 15.2807,
    "lng": 75.52132
  },
  {
    "state": "Karnataka",
    "name": "Mulki",
    "lat": 13.09101,
    "lng": 74.79353
  },
  {
    "state": "Karnataka",
    "name": "Mundargi",
    "lat": 15.20677,
    "lng": 75.8839
  },
  {
    "state": "Karnataka",
    "name": "Mundgod",
    "lat": 14.97144,
    "lng": 75.03658
  },
  {
    "state": "Karnataka",
    "name": "Munirabad",
    "lat": 15.30928,
    "lng": 76.3383
  },
  {
    "state": "Karnataka",
    "name": "Murudeshwara",
    "lat": 14.0943,
    "lng": 74.4845
  },
  {
    "state": "Karnataka",
    "name": "Mysuru",
    "lat": 12.23,
    "lng": 76.42
  },
  {
    "state": "Karnataka",
    "name": "Nagamangala",
    "lat": 12.81939,
    "lng": 76.75456
  },
  {
    "state": "Karnataka",
    "name": "Nanjangud",
    "lat": 12.11764,
    "lng": 76.68397
  },
  {
    "state": "Karnataka",
    "name": "Narasimharajapura",
    "lat": 13.61075,
    "lng": 75.512
  },
  {
    "state": "Karnataka",
    "name": "Naregal",
    "lat": 15.57316,
    "lng": 75.80805
  },
  {
    "state": "Karnataka",
    "name": "Nargund",
    "lat": 15.72299,
    "lng": 75.38666
  },
  {
    "state": "Karnataka",
    "name": "Navalgund",
    "lat": 15.55877,
    "lng": 75.35305
  },
  {
    "state": "Karnataka",
    "name": "Nelamangala",
    "lat": 13.09978,
    "lng": 77.39364
  },
  {
    "state": "Karnataka",
    "name": "Nyamti",
    "lat": 14.14869,
    "lng": 75.57641
  },
  {
    "state": "Karnataka",
    "name": "Pangala",
    "lat": 13.25,
    "lng": 74.75
  },
  {
    "state": "Karnataka",
    "name": "Pavugada",
    "lat": 14.09953,
    "lng": 77.28018
  },
  {
    "state": "Karnataka",
    "name": "Piriyapatna",
    "lat": 12.33497,
    "lng": 76.10073
  },
  {
    "state": "Karnataka",
    "name": "Ponnampet",
    "lat": 12.14473,
    "lng": 75.94514
  },
  {
    "state": "Karnataka",
    "name": "Puttur",
    "lat": 12.75975,
    "lng": 75.20169
  },
  {
    "state": "Karnataka",
    "name": "Rabkavi",
    "lat": 16.47567,
    "lng": 75.1106
  },
  {
    "state": "Karnataka",
    "name": "Raichur",
    "lat": 16.16,
    "lng": 76.91
  },
  {
    "state": "Karnataka",
    "name": "Ramanagara",
    "lat": 12.65,
    "lng": 77.35
  },
  {
    "state": "Karnataka",
    "name": "Ranibennur",
    "lat": 14.62239,
    "lng": 75.62951
  },
  {
    "state": "Karnataka",
    "name": "Raybag",
    "lat": 16.49178,
    "lng": 74.77391
  },
  {
    "state": "Karnataka",
    "name": "Robertsonpet",
    "lat": 12.95629,
    "lng": 78.27539
  },
  {
    "state": "Karnataka",
    "name": "Ron",
    "lat": 15.69935,
    "lng": 75.73408
  },
  {
    "state": "Karnataka",
    "name": "Sadalgi",
    "lat": 16.5587,
    "lng": 74.53211
  },
  {
    "state": "Karnataka",
    "name": "Sagar",
    "lat": 14.16498,
    "lng": 75.02901
  },
  {
    "state": "Karnataka",
    "name": "Sakleshpur",
    "lat": 12.94119,
    "lng": 75.78467
  },
  {
    "state": "Karnataka",
    "name": "Sandur",
    "lat": 15.08613,
    "lng": 76.54692
  },
  {
    "state": "Karnataka",
    "name": "Sanivarsante",
    "lat": 12.72824,
    "lng": 75.88669
  },
  {
    "state": "Karnataka",
    "name": "Sankeshwar",
    "lat": 16.25649,
    "lng": 74.48195
  },
  {
    "state": "Karnataka",
    "name": "Sargur",
    "lat": 11.99971,
    "lng": 76.39611
  },
  {
    "state": "Karnataka",
    "name": "Saundatti",
    "lat": 15.76615,
    "lng": 75.11778
  },
  {
    "state": "Karnataka",
    "name": "Savanur",
    "lat": 14.97335,
    "lng": 75.33724
  },
  {
    "state": "Karnataka",
    "name": "Seram",
    "lat": 17.17859,
    "lng": 77.28998
  },
  {
    "state": "Karnataka",
    "name": "Shahabad",
    "lat": 17.1307,
    "lng": 76.94361
  },
  {
    "state": "Karnataka",
    "name": "Shahpur",
    "lat": 16.69605,
    "lng": 76.8422
  },
  {
    "state": "Karnataka",
    "name": "Shiggaon",
    "lat": 14.99053,
    "lng": 75.22499
  },
  {
    "state": "Karnataka",
    "name": "Shikarpur",
    "lat": 14.2698,
    "lng": 75.35643
  },
  {
    "state": "Karnataka",
    "name": "Shimoga",
    "lat": 14.05,
    "lng": 75.16
  },
  {
    "state": "Karnataka",
    "name": "Shirhatti",
    "lat": 15.23352,
    "lng": 75.57996
  },
  {
    "state": "Karnataka",
    "name": "Shorapur",
    "lat": 16.521,
    "lng": 76.75738
  },
  {
    "state": "Karnataka",
    "name": "Shrirangapattana",
    "lat": 12.42264,
    "lng": 76.68439
  },
  {
    "state": "Karnataka",
    "name": "Siddapur",
    "lat": 14.34322,
    "lng": 74.894
  },
  {
    "state": "Karnataka",
    "name": "Sidlaghatta",
    "lat": 13.38896,
    "lng": 77.86444
  },
  {
    "state": "Karnataka",
    "name": "Sindgi",
    "lat": 16.91883,
    "lng": 76.23368
  },
  {
    "state": "Karnataka",
    "name": "Sindhnur",
    "lat": 15.76983,
    "lng": 76.75581
  },
  {
    "state": "Karnataka",
    "name": "Sira",
    "lat": 13.74155,
    "lng": 76.9043
  },
  {
    "state": "Karnataka",
    "name": "Sirsi",
    "lat": 14.62072,
    "lng": 74.83554
  },
  {
    "state": "Karnataka",
    "name": "Siruguppa",
    "lat": 15.63,
    "lng": 76.89217
  },
  {
    "state": "Karnataka",
    "name": "Someshwar",
    "lat": 13.49112,
    "lng": 75.06646
  },
  {
    "state": "Karnataka",
    "name": "Somvarpet",
    "lat": 12.59698,
    "lng": 75.84957
  },
  {
    "state": "Karnataka",
    "name": "Sorab",
    "lat": 14.38144,
    "lng": 75.09183
  },
  {
    "state": "Karnataka",
    "name": "Sravana Belgola",
    "lat": 12.85737,
    "lng": 76.48886
  },
  {
    "state": "Karnataka",
    "name": "Sringeri",
    "lat": 13.41698,
    "lng": 75.25271
  },
  {
    "state": "Karnataka",
    "name": "Srinivaspur",
    "lat": 13.33914,
    "lng": 78.21175
  },
  {
    "state": "Karnataka",
    "name": "Sulya",
    "lat": 12.561,
    "lng": 75.38741
  },
  {
    "state": "Karnataka",
    "name": "Suntikoppa",
    "lat": 12.45594,
    "lng": 75.8297
  },
  {
    "state": "Karnataka",
    "name": "Talikota",
    "lat": 16.47311,
    "lng": 76.31085
  },
  {
    "state": "Karnataka",
    "name": "Tarikere",
    "lat": 13.70954,
    "lng": 75.81382
  },
  {
    "state": "Karnataka",
    "name": "Tekkalakote",
    "lat": 15.53444,
    "lng": 76.87703
  },
  {
    "state": "Karnataka",
    "name": "Terdal",
    "lat": 16.49379,
    "lng": 75.04667
  },
  {
    "state": "Karnataka",
    "name": "Tiptur",
    "lat": 13.2563,
    "lng": 76.47768
  },
  {
    "state": "Karnataka",
    "name": "Tirthahalli",
    "lat": 13.68835,
    "lng": 75.24548
  },
  {
    "state": "Karnataka",
    "name": "Tirumakudal Narsipur",
    "lat": 12.21207,
    "lng": 76.9018
  },
  {
    "state": "Karnataka",
    "name": "Tumakuru",
    "lat": 13.5,
    "lng": 77
  },
  {
    "state": "Karnataka",
    "name": "Turuvekere",
    "lat": 13.16374,
    "lng": 76.66641
  },
  {
    "state": "Karnataka",
    "name": "Udupi",
    "lat": 13.5,
    "lng": 74.87
  },
  {
    "state": "Karnataka",
    "name": "Ullal",
    "lat": 12.80569,
    "lng": 74.86058
  },
  {
    "state": "Karnataka",
    "name": "Uttar Kannada",
    "lat": 14.88333,
    "lng": 74.58333
  },
  {
    "state": "Karnataka",
    "name": "Vadigenhalli",
    "lat": 13.29724,
    "lng": 77.80184
  },
  {
    "state": "Karnataka",
    "name": "Vijayapura",
    "lat": 16.82442,
    "lng": 75.71537
  },
  {
    "state": "Karnataka",
    "name": "Virarajendrapet",
    "lat": 12.19644,
    "lng": 75.80512
  },
  {
    "state": "Karnataka",
    "name": "Wadi",
    "lat": 17.05183,
    "lng": 76.99048
  },
  {
    "state": "Karnataka",
    "name": "Yadgir",
    "lat": 16.73,
    "lng": 76.94
  },
  {
    "state": "Karnataka",
    "name": "Yelahanka",
    "lat": 13.10073,
    "lng": 77.59632
  },
  {
    "state": "Karnataka",
    "name": "Yelandur",
    "lat": 12.04629,
    "lng": 77.03034
  },
  {
    "state": "Karnataka",
    "name": "Yelbarga",
    "lat": 15.61545,
    "lng": 76.01184
  },
  {
    "state": "Karnataka",
    "name": "Yellapur",
    "lat": 14.9637,
    "lng": 74.70929
  },
  {
    "state": "Kerala",
    "name": "Adur",
    "lat": 9.15595,
    "lng": 76.73192
  },
  {
    "state": "Kerala",
    "name": "Alappuzha",
    "lat": 9.49004,
    "lng": 76.3264
  },
  {
    "state": "Kerala",
    "name": "Aluva",
    "lat": 10.10764,
    "lng": 76.35158
  },
  {
    "state": "Kerala",
    "name": "Alwaye",
    "lat": 10.10649,
    "lng": 76.35484
  },
  {
    "state": "Kerala",
    "name": "Angamali",
    "lat": 10.19055,
    "lng": 76.38789
  },
  {
    "state": "Kerala",
    "name": "Aroor",
    "lat": 9.8694,
    "lng": 76.30498
  },
  {
    "state": "Kerala",
    "name": "Arukutti",
    "lat": 9.86667,
    "lng": 76.35
  },
  {
    "state": "Kerala",
    "name": "Attingal",
    "lat": 8.69609,
    "lng": 76.81507
  },
  {
    "state": "Kerala",
    "name": "Avanoor",
    "lat": 10.60826,
    "lng": 76.1762
  },
  {
    "state": "Kerala",
    "name": "Azhikkal",
    "lat": 11.91524,
    "lng": 75.34761
  },
  {
    "state": "Kerala",
    "name": "Badagara",
    "lat": 11.59776,
    "lng": 75.58142
  },
  {
    "state": "Kerala",
    "name": "Beypore",
    "lat": 11.17151,
    "lng": 75.80611
  },
  {
    "state": "Kerala",
    "name": "Changanacheri",
    "lat": 9.44203,
    "lng": 76.53604
  },
  {
    "state": "Kerala",
    "name": "Chēlakara",
    "lat": 10.69289,
    "lng": 76.34387
  },
  {
    "state": "Kerala",
    "name": "Chengannur",
    "lat": 9.31575,
    "lng": 76.61513
  },
  {
    "state": "Kerala",
    "name": "Cherpulassery",
    "lat": 10.87655,
    "lng": 76.30932
  },
  {
    "state": "Kerala",
    "name": "Cherthala",
    "lat": 9.68444,
    "lng": 76.33558
  },
  {
    "state": "Kerala",
    "name": "Chetwayi",
    "lat": 10.52885,
    "lng": 76.04793
  },
  {
    "state": "Kerala",
    "name": "Chittur",
    "lat": 10.69967,
    "lng": 76.7471
  },
  {
    "state": "Kerala",
    "name": "Cochin",
    "lat": 9.93988,
    "lng": 76.26022
  },
  {
    "state": "Kerala",
    "name": "Dharmadam",
    "lat": 11.77538,
    "lng": 75.46459
  },
  {
    "state": "Kerala",
    "name": "Edakkulam",
    "lat": 10.6102,
    "lng": 76.18352
  },
  {
    "state": "Kerala",
    "name": "Elur",
    "lat": 10.06667,
    "lng": 76.28333
  },
  {
    "state": "Kerala",
    "name": "Erattupetta",
    "lat": 9.68747,
    "lng": 76.77891
  },
  {
    "state": "Kerala",
    "name": "Ernakulam",
    "lat": 10,
    "lng": 76.5
  },
  {
    "state": "Kerala",
    "name": "Ferokh",
    "lat": 11.17989,
    "lng": 75.84141
  },
  {
    "state": "Kerala",
    "name": "Guruvayur",
    "lat": 10.5943,
    "lng": 76.0411
  },
  {
    "state": "Kerala",
    "name": "Idukki",
    "lat": 10,
    "lng": 77
  },
  {
    "state": "Kerala",
    "name": "Iringal",
    "lat": 11.55929,
    "lng": 75.61663
  },
  {
    "state": "Kerala",
    "name": "Irinjalakuda",
    "lat": 10.34238,
    "lng": 76.21124
  },
  {
    "state": "Kerala",
    "name": "Kadakkavoor",
    "lat": 8.67921,
    "lng": 76.76714
  },
  {
    "state": "Kerala",
    "name": "Kalamassery",
    "lat": 10.0614,
    "lng": 76.32631
  },
  {
    "state": "Kerala",
    "name": "Kalavoor",
    "lat": 9.57046,
    "lng": 76.32756
  },
  {
    "state": "Kerala",
    "name": "Kalpatta",
    "lat": 11.60871,
    "lng": 76.08343
  },
  {
    "state": "Kerala",
    "name": "Kannangad",
    "lat": 12.30814,
    "lng": 75.10632
  },
  {
    "state": "Kerala",
    "name": "Kannavam",
    "lat": 11.8445,
    "lng": 75.66266
  },
  {
    "state": "Kerala",
    "name": "Kannur",
    "lat": 12.16667,
    "lng": 75.33333
  },
  {
    "state": "Kerala",
    "name": "Kasaragod",
    "lat": 12.49838,
    "lng": 74.98959
  },
  {
    "state": "Kerala",
    "name": "Kasaragod District",
    "lat": 12.49246,
    "lng": 74.99062
  },
  {
    "state": "Kerala",
    "name": "Kattanam",
    "lat": 9.17614,
    "lng": 76.56325
  },
  {
    "state": "Kerala",
    "name": "Kayankulam",
    "lat": 9.18173,
    "lng": 76.50093
  },
  {
    "state": "Kerala",
    "name": "Kizhake Chalakudi",
    "lat": 10.30067,
    "lng": 76.33763
  },
  {
    "state": "Kerala",
    "name": "Kodungallur",
    "lat": 10.23263,
    "lng": 76.19513
  },
  {
    "state": "Kerala",
    "name": "Kollam",
    "lat": 8.88113,
    "lng": 76.58469
  },
  {
    "state": "Kerala",
    "name": "Kotamangalam",
    "lat": 10.06435,
    "lng": 76.62843
  },
  {
    "state": "Kerala",
    "name": "Kottayam",
    "lat": 9.66667,
    "lng": 76.66667
  },
  {
    "state": "Kerala",
    "name": "Kovalam",
    "lat": 8.36667,
    "lng": 76.99667
  },
  {
    "state": "Kerala",
    "name": "Kozhikode",
    "lat": 11.5,
    "lng": 76
  },
  {
    "state": "Kerala",
    "name": "Kumbalam",
    "lat": 9.9063,
    "lng": 76.31127
  },
  {
    "state": "Kerala",
    "name": "Kunnamangalam",
    "lat": 11.30459,
    "lng": 75.87772
  },
  {
    "state": "Kerala",
    "name": "Kunnamkulam",
    "lat": 10.64667,
    "lng": 76.06695
  },
  {
    "state": "Kerala",
    "name": "Kunnumma",
    "lat": 9.35672,
    "lng": 76.41343
  },
  {
    "state": "Kerala",
    "name": "Kutiatodu",
    "lat": 9.8,
    "lng": 76.33333
  },
  {
    "state": "Kerala",
    "name": "Kuttampuzha",
    "lat": 10.15033,
    "lng": 76.73544
  },
  {
    "state": "Kerala",
    "name": "Lalam",
    "lat": 9.71667,
    "lng": 76.7
  },
  {
    "state": "Kerala",
    "name": "Mahē",
    "lat": 11.70172,
    "lng": 75.53474
  },
  {
    "state": "Kerala",
    "name": "Malappuram",
    "lat": 11,
    "lng": 76.16667
  },
  {
    "state": "Kerala",
    "name": "Manjeri",
    "lat": 11.12018,
    "lng": 76.11996
  },
  {
    "state": "Kerala",
    "name": "Manjēshvar",
    "lat": 12.71287,
    "lng": 74.88857
  },
  {
    "state": "Kerala",
    "name": "Mannarakkat",
    "lat": 10.99223,
    "lng": 76.46418
  },
  {
    "state": "Kerala",
    "name": "Marayur",
    "lat": 10.27641,
    "lng": 77.16205
  },
  {
    "state": "Kerala",
    "name": "Mattanur",
    "lat": 11.93018,
    "lng": 75.57152
  },
  {
    "state": "Kerala",
    "name": "Mavelikara",
    "lat": 9.25929,
    "lng": 76.55642
  },
  {
    "state": "Kerala",
    "name": "Mavoor",
    "lat": 11.26667,
    "lng": 75.91667
  },
  {
    "state": "Kerala",
    "name": "Muluppilagadu",
    "lat": 11.79788,
    "lng": 75.45111
  },
  {
    "state": "Kerala",
    "name": "Munnar",
    "lat": 10.08818,
    "lng": 77.06239
  },
  {
    "state": "Kerala",
    "name": "Muvattupula",
    "lat": 9.98493,
    "lng": 76.57728
  },
  {
    "state": "Kerala",
    "name": "Muvattupuzha",
    "lat": 9.97985,
    "lng": 76.57381
  },
  {
    "state": "Kerala",
    "name": "Nadapuram",
    "lat": 11.68465,
    "lng": 75.65493
  },
  {
    "state": "Kerala",
    "name": "Naduvannur",
    "lat": 11.48772,
    "lng": 75.77511
  },
  {
    "state": "Kerala",
    "name": "Nedumangad",
    "lat": 8.60267,
    "lng": 77.00139
  },
  {
    "state": "Kerala",
    "name": "Neyyattinkara",
    "lat": 8.39854,
    "lng": 77.08586
  },
  {
    "state": "Kerala",
    "name": "Nilēshwar",
    "lat": 12.25953,
    "lng": 75.1352
  },
  {
    "state": "Kerala",
    "name": "Ottappalam",
    "lat": 10.7735,
    "lng": 76.37758
  },
  {
    "state": "Kerala",
    "name": "Palackattumala",
    "lat": 9.74356,
    "lng": 76.6294
  },
  {
    "state": "Kerala",
    "name": "Palakkad district",
    "lat": 10.775,
    "lng": 76.651
  },
  {
    "state": "Kerala",
    "name": "Palghat",
    "lat": 10.77319,
    "lng": 76.65366
  },
  {
    "state": "Kerala",
    "name": "Panamaram",
    "lat": 11.74014,
    "lng": 76.07369
  },
  {
    "state": "Kerala",
    "name": "Pappinisshēri",
    "lat": 11.95655,
    "lng": 75.34034
  },
  {
    "state": "Kerala",
    "name": "Paravur Tekkumbhagam",
    "lat": 8.7947,
    "lng": 76.66798
  },
  {
    "state": "Kerala",
    "name": "Pariyapuram",
    "lat": 11.01667,
    "lng": 75.86667
  },
  {
    "state": "Kerala",
    "name": "Pathanamthitta",
    "lat": 9.26667,
    "lng": 76.78333
  },
  {
    "state": "Kerala",
    "name": "Pattanamtitta",
    "lat": 9.28068,
    "lng": 76.86967
  },
  {
    "state": "Kerala",
    "name": "Payyannur",
    "lat": 12.0935,
    "lng": 75.20249
  },
  {
    "state": "Kerala",
    "name": "Perumbavoor",
    "lat": 10.10695,
    "lng": 76.47366
  },
  {
    "state": "Kerala",
    "name": "Perumpavur",
    "lat": 10.11544,
    "lng": 76.47611
  },
  {
    "state": "Kerala",
    "name": "Perya",
    "lat": 11.83334,
    "lng": 75.85408
  },
  {
    "state": "Kerala",
    "name": "Piravam",
    "lat": 9.86667,
    "lng": 76.5
  },
  {
    "state": "Kerala",
    "name": "Ponmana",
    "lat": 9.00798,
    "lng": 76.52023
  },
  {
    "state": "Kerala",
    "name": "Ponnani",
    "lat": 10.76695,
    "lng": 75.92523
  },
  {
    "state": "Kerala",
    "name": "Punalur",
    "lat": 9.01956,
    "lng": 76.92261
  },
  {
    "state": "Kerala",
    "name": "Ramamangalam",
    "lat": 9.93333,
    "lng": 76.5
  },
  {
    "state": "Kerala",
    "name": "Shertallai",
    "lat": 9.68581,
    "lng": 76.33996
  },
  {
    "state": "Kerala",
    "name": "Shōranur",
    "lat": 10.76181,
    "lng": 76.27078
  },
  {
    "state": "Kerala",
    "name": "Talipparamba",
    "lat": 12.04161,
    "lng": 75.35927
  },
  {
    "state": "Kerala",
    "name": "Tellicherry",
    "lat": 11.74811,
    "lng": 75.4929
  },
  {
    "state": "Kerala",
    "name": "Thanniyam",
    "lat": 10.41667,
    "lng": 76.13333
  },
  {
    "state": "Kerala",
    "name": "Thiruvananthapuram",
    "lat": 8.60399,
    "lng": 76.98574
  },
  {
    "state": "Kerala",
    "name": "Thrissur",
    "lat": 10.51667,
    "lng": 76.21667
  },
  {
    "state": "Kerala",
    "name": "Thrissur District",
    "lat": 10.52022,
    "lng": 76.2204
  },
  {
    "state": "Kerala",
    "name": "Tirur",
    "lat": 10.91368,
    "lng": 75.92118
  },
  {
    "state": "Kerala",
    "name": "Tiruvalla",
    "lat": 9.3816,
    "lng": 76.57489
  },
  {
    "state": "Kerala",
    "name": "Vaikam",
    "lat": 9.74858,
    "lng": 76.39637
  },
  {
    "state": "Kerala",
    "name": "Varkala",
    "lat": 8.7333,
    "lng": 76.7167
  },
  {
    "state": "Kerala",
    "name": "Vayalar",
    "lat": 9.71158,
    "lng": 76.33888
  },
  {
    "state": "Kerala",
    "name": "Vettur",
    "lat": 8.71742,
    "lng": 76.72582
  },
  {
    "state": "Kerala",
    "name": "Wayanad",
    "lat": 11.605,
    "lng": 76.083
  },
  {
    "state": "Ladakh",
    "name": "Kargil",
    "lat": 34.55765,
    "lng": 76.12622
  },
  {
    "state": "Ladakh",
    "name": "Leh",
    "lat": 34.16504,
    "lng": 77.58402
  },
  {
    "state": "Lakshadweep",
    "name": "Kavaratti",
    "lat": 10.56688,
    "lng": 72.64203
  },
  {
    "state": "Madhya Pradesh",
    "name": "Agar",
    "lat": 23.71177,
    "lng": 76.01571
  },
  {
    "state": "Madhya Pradesh",
    "name": "Ajaigarh",
    "lat": 24.89879,
    "lng": 80.25921
  },
  {
    "state": "Madhya Pradesh",
    "name": "Akodia",
    "lat": 23.38027,
    "lng": 76.59875
  },
  {
    "state": "Madhya Pradesh",
    "name": "Alampur",
    "lat": 26.02514,
    "lng": 78.79697
  },
  {
    "state": "Madhya Pradesh",
    "name": "Alirajpur",
    "lat": 22.31384,
    "lng": 74.36452
  },
  {
    "state": "Madhya Pradesh",
    "name": "Alot",
    "lat": 23.76336,
    "lng": 75.55662
  },
  {
    "state": "Madhya Pradesh",
    "name": "Amanganj",
    "lat": 24.42664,
    "lng": 80.03579
  },
  {
    "state": "Madhya Pradesh",
    "name": "Amarkantak",
    "lat": 22.67486,
    "lng": 81.75908
  },
  {
    "state": "Madhya Pradesh",
    "name": "Amarpatan",
    "lat": 24.31371,
    "lng": 80.97703
  },
  {
    "state": "Madhya Pradesh",
    "name": "Amarwara",
    "lat": 22.2978,
    "lng": 79.16943
  },
  {
    "state": "Madhya Pradesh",
    "name": "Ambah",
    "lat": 26.70423,
    "lng": 78.22678
  },
  {
    "state": "Madhya Pradesh",
    "name": "Amla",
    "lat": 21.92485,
    "lng": 78.12786
  },
  {
    "state": "Madhya Pradesh",
    "name": "Anjad",
    "lat": 22.04171,
    "lng": 75.05519
  },
  {
    "state": "Madhya Pradesh",
    "name": "Antri",
    "lat": 26.05804,
    "lng": 78.21027
  },
  {
    "state": "Madhya Pradesh",
    "name": "Anuppur",
    "lat": 23.05674,
    "lng": 81.68399
  },
  {
    "state": "Madhya Pradesh",
    "name": "Aron",
    "lat": 24.38109,
    "lng": 77.41739
  },
  {
    "state": "Madhya Pradesh",
    "name": "Ashoknagar",
    "lat": 24.58,
    "lng": 77.73
  },
  {
    "state": "Madhya Pradesh",
    "name": "Ashta",
    "lat": 23.01754,
    "lng": 76.72208
  },
  {
    "state": "Madhya Pradesh",
    "name": "Babai",
    "lat": 22.70256,
    "lng": 77.93494
  },
  {
    "state": "Madhya Pradesh",
    "name": "Badarwas",
    "lat": 24.97516,
    "lng": 77.5649
  },
  {
    "state": "Madhya Pradesh",
    "name": "Badnawar",
    "lat": 23.02181,
    "lng": 75.23268
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bag",
    "lat": 22.35905,
    "lng": 74.79052
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bagli",
    "lat": 22.64124,
    "lng": 76.34877
  },
  {
    "state": "Madhya Pradesh",
    "name": "Baihar",
    "lat": 22.10133,
    "lng": 80.54967
  },
  {
    "state": "Madhya Pradesh",
    "name": "Baikunthpur",
    "lat": 24.72768,
    "lng": 81.40975
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bakshwaho",
    "lat": 24.25106,
    "lng": 79.28618
  },
  {
    "state": "Madhya Pradesh",
    "name": "Balaghat",
    "lat": 21.96667,
    "lng": 80.33333
  },
  {
    "state": "Madhya Pradesh",
    "name": "Baldeogarh",
    "lat": 24.75619,
    "lng": 79.06715
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bamna",
    "lat": 23.09454,
    "lng": 74.76164
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bamor Kalan",
    "lat": 24.89298,
    "lng": 78.15105
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bamora",
    "lat": 24.05539,
    "lng": 78.08925
  },
  {
    "state": "Madhya Pradesh",
    "name": "Banda",
    "lat": 24.04488,
    "lng": 78.96094
  },
  {
    "state": "Madhya Pradesh",
    "name": "Barela",
    "lat": 23.09678,
    "lng": 80.05084
  },
  {
    "state": "Madhya Pradesh",
    "name": "Barghat",
    "lat": 22.03065,
    "lng": 79.7328
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bargi",
    "lat": 22.99138,
    "lng": 79.8755
  },
  {
    "state": "Madhya Pradesh",
    "name": "Barhi",
    "lat": 23.90326,
    "lng": 80.81516
  },
  {
    "state": "Madhya Pradesh",
    "name": "Barwani",
    "lat": 22.02485,
    "lng": 74.91805
  },
  {
    "state": "Madhya Pradesh",
    "name": "Basoda",
    "lat": 23.85153,
    "lng": 77.93652
  },
  {
    "state": "Madhya Pradesh",
    "name": "Begamganj",
    "lat": 23.59917,
    "lng": 78.34064
  },
  {
    "state": "Madhya Pradesh",
    "name": "Beohari",
    "lat": 24.02423,
    "lng": 81.37831
  },
  {
    "state": "Madhya Pradesh",
    "name": "Berasia",
    "lat": 23.63134,
    "lng": 77.43351
  },
  {
    "state": "Madhya Pradesh",
    "name": "Betma",
    "lat": 22.68653,
    "lng": 75.61456
  },
  {
    "state": "Madhya Pradesh",
    "name": "Betul",
    "lat": 21.83333,
    "lng": 77.83333
  },
  {
    "state": "Madhya Pradesh",
    "name": "Betul Bazar",
    "lat": 21.85572,
    "lng": 77.92913
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bhabhra",
    "lat": 22.53048,
    "lng": 74.32846
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bhainsdehi",
    "lat": 21.64491,
    "lng": 77.63023
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bhander",
    "lat": 25.73581,
    "lng": 78.74555
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bhanpura",
    "lat": 24.513,
    "lng": 75.7469
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bhawaniganj",
    "lat": 24.41582,
    "lng": 75.83552
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bhikangaon",
    "lat": 21.86764,
    "lng": 75.96391
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bhind",
    "lat": 26.5,
    "lng": 78.75
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bhitarwar",
    "lat": 25.79216,
    "lng": 78.11085
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bhopal",
    "lat": 23.25469,
    "lng": 77.40289
  },
  {
    "state": "Madhya Pradesh",
    "name": "Biaora",
    "lat": 23.9205,
    "lng": 76.91074
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bijawar",
    "lat": 24.62351,
    "lng": 79.48994
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bijrauni",
    "lat": 24.93296,
    "lng": 77.64352
  },
  {
    "state": "Madhya Pradesh",
    "name": "Bodri",
    "lat": 23.16524,
    "lng": 81.43262
  },
  {
    "state": "Madhya Pradesh",
    "name": "Burhanpur",
    "lat": 21.31,
    "lng": 76.23
  },
  {
    "state": "Madhya Pradesh",
    "name": "Burhar",
    "lat": 23.21494,
    "lng": 81.53204
  },
  {
    "state": "Madhya Pradesh",
    "name": "Chanderi",
    "lat": 24.71312,
    "lng": 78.13809
  },
  {
    "state": "Madhya Pradesh",
    "name": "Chandia",
    "lat": 23.65647,
    "lng": 80.70911
  },
  {
    "state": "Madhya Pradesh",
    "name": "Chandla",
    "lat": 25.07148,
    "lng": 80.19294
  },
  {
    "state": "Madhya Pradesh",
    "name": "Chhatarpur",
    "lat": 24.75,
    "lng": 79.75
  },
  {
    "state": "Madhya Pradesh",
    "name": "Chhindwara",
    "lat": 22.05697,
    "lng": 78.93958
  },
  {
    "state": "Madhya Pradesh",
    "name": "Chichli",
    "lat": 22.83363,
    "lng": 78.82611
  },
  {
    "state": "Madhya Pradesh",
    "name": "Chorhat",
    "lat": 24.42743,
    "lng": 81.66948
  },
  {
    "state": "Madhya Pradesh",
    "name": "Daboh",
    "lat": 26.00239,
    "lng": 78.87658
  },
  {
    "state": "Madhya Pradesh",
    "name": "Dabra",
    "lat": 25.88572,
    "lng": 78.33221
  },
  {
    "state": "Madhya Pradesh",
    "name": "Damoh",
    "lat": 23.75,
    "lng": 79.58333
  },
  {
    "state": "Madhya Pradesh",
    "name": "Datia",
    "lat": 25.75,
    "lng": 78.5
  },
  {
    "state": "Madhya Pradesh",
    "name": "Deori Khas",
    "lat": 23.39017,
    "lng": 79.0163
  },
  {
    "state": "Madhya Pradesh",
    "name": "Depalpur",
    "lat": 22.85095,
    "lng": 75.54224
  },
  {
    "state": "Madhya Pradesh",
    "name": "Dewas",
    "lat": 23,
    "lng": 76.16667
  },
  {
    "state": "Madhya Pradesh",
    "name": "Dhamnod",
    "lat": 22.20928,
    "lng": 75.47057
  },
  {
    "state": "Madhya Pradesh",
    "name": "Dhana",
    "lat": 23.74697,
    "lng": 78.86234
  },
  {
    "state": "Madhya Pradesh",
    "name": "Dhar",
    "lat": 22.59373,
    "lng": 75.29774
  },
  {
    "state": "Madhya Pradesh",
    "name": "Dharampuri",
    "lat": 22.14951,
    "lng": 75.34439
  },
  {
    "state": "Madhya Pradesh",
    "name": "Dindori",
    "lat": 22.8,
    "lng": 81.1
  },
  {
    "state": "Madhya Pradesh",
    "name": "Etawa",
    "lat": 24.18351,
    "lng": 78.20289
  },
  {
    "state": "Madhya Pradesh",
    "name": "Gadarwara",
    "lat": 22.9235,
    "lng": 78.7849
  },
  {
    "state": "Madhya Pradesh",
    "name": "Garha Brahman",
    "lat": 23.86873,
    "lng": 77.35731
  },
  {
    "state": "Madhya Pradesh",
    "name": "Garhakota",
    "lat": 23.7791,
    "lng": 79.14321
  },
  {
    "state": "Madhya Pradesh",
    "name": "Gautampura",
    "lat": 22.98664,
    "lng": 75.51921
  },
  {
    "state": "Madhya Pradesh",
    "name": "Ghansor",
    "lat": 22.65976,
    "lng": 79.95013
  },
  {
    "state": "Madhya Pradesh",
    "name": "Gogapur",
    "lat": 23.55746,
    "lng": 75.51665
  },
  {
    "state": "Madhya Pradesh",
    "name": "Gohadi",
    "lat": 26.43278,
    "lng": 78.44205
  },
  {
    "state": "Madhya Pradesh",
    "name": "Govindgarh",
    "lat": 24.37845,
    "lng": 81.29644
  },
  {
    "state": "Madhya Pradesh",
    "name": "Guna",
    "lat": 24.55464,
    "lng": 77.20082
  },
  {
    "state": "Madhya Pradesh",
    "name": "Gurh",
    "lat": 24.50265,
    "lng": 81.50037
  },
  {
    "state": "Madhya Pradesh",
    "name": "Gwalior",
    "lat": 26.22983,
    "lng": 78.17337
  },
  {
    "state": "Madhya Pradesh",
    "name": "Harda",
    "lat": 22.23406,
    "lng": 76.96431
  },
  {
    "state": "Madhya Pradesh",
    "name": "Harda Khas",
    "lat": 22.34414,
    "lng": 77.09536
  },
  {
    "state": "Madhya Pradesh",
    "name": "Harpalpur",
    "lat": 25.28773,
    "lng": 79.33279
  },
  {
    "state": "Madhya Pradesh",
    "name": "Harrai",
    "lat": 22.61428,
    "lng": 79.22207
  },
  {
    "state": "Madhya Pradesh",
    "name": "Harsud",
    "lat": 22.09947,
    "lng": 76.73423
  },
  {
    "state": "Madhya Pradesh",
    "name": "Hatod",
    "lat": 22.79378,
    "lng": 75.73928
  },
  {
    "state": "Madhya Pradesh",
    "name": "Hatta",
    "lat": 24.13406,
    "lng": 79.60119
  },
  {
    "state": "Madhya Pradesh",
    "name": "Hindoria",
    "lat": 23.90345,
    "lng": 79.56861
  },
  {
    "state": "Madhya Pradesh",
    "name": "Hoshangabad",
    "lat": 22.58827,
    "lng": 77.98887
  },
  {
    "state": "Madhya Pradesh",
    "name": "Iawar",
    "lat": 23.00943,
    "lng": 76.5007
  },
  {
    "state": "Madhya Pradesh",
    "name": "Ichhawar",
    "lat": 23.02816,
    "lng": 77.01729
  },
  {
    "state": "Madhya Pradesh",
    "name": "Iklehra",
    "lat": 23.14667,
    "lng": 76.39044
  },
  {
    "state": "Madhya Pradesh",
    "name": "Indore",
    "lat": 22.66667,
    "lng": 75.75
  },
  {
    "state": "Madhya Pradesh",
    "name": "Isagarh",
    "lat": 24.83906,
    "lng": 77.88274
  },
  {
    "state": "Madhya Pradesh",
    "name": "Itarsi",
    "lat": 22.61477,
    "lng": 77.76222
  },
  {
    "state": "Madhya Pradesh",
    "name": "Jabalpur",
    "lat": 23.16,
    "lng": 79.95
  },
  {
    "state": "Madhya Pradesh",
    "name": "Jaisinghnagar",
    "lat": 23.68582,
    "lng": 81.39085
  },
  {
    "state": "Madhya Pradesh",
    "name": "Jaithari",
    "lat": 23.20856,
    "lng": 78.61487
  },
  {
    "state": "Madhya Pradesh",
    "name": "Jamai",
    "lat": 22.19644,
    "lng": 78.59191
  },
  {
    "state": "Madhya Pradesh",
    "name": "Jaora",
    "lat": 23.63783,
    "lng": 75.12711
  },
  {
    "state": "Madhya Pradesh",
    "name": "Jatara",
    "lat": 25.00964,
    "lng": 79.04869
  },
  {
    "state": "Madhya Pradesh",
    "name": "Jawad",
    "lat": 24.59916,
    "lng": 74.86261
  },
  {
    "state": "Madhya Pradesh",
    "name": "Jhabua",
    "lat": 22.76772,
    "lng": 74.59087
  },
  {
    "state": "Madhya Pradesh",
    "name": "Jiran",
    "lat": 24.30871,
    "lng": 74.89087
  },
  {
    "state": "Madhya Pradesh",
    "name": "Jobat",
    "lat": 22.41599,
    "lng": 74.56828
  },
  {
    "state": "Madhya Pradesh",
    "name": "Kailaras",
    "lat": 26.30498,
    "lng": 77.616
  },
  {
    "state": "Madhya Pradesh",
    "name": "Kaimori",
    "lat": 23.38465,
    "lng": 79.7442
  },
  {
    "state": "Madhya Pradesh",
    "name": "Kannod",
    "lat": 22.66764,
    "lng": 76.74286
  },
  {
    "state": "Madhya Pradesh",
    "name": "Kareli",
    "lat": 22.91533,
    "lng": 79.06378
  },
  {
    "state": "Madhya Pradesh",
    "name": "Karera",
    "lat": 25.45815,
    "lng": 78.13583
  },
  {
    "state": "Madhya Pradesh",
    "name": "Karrapur",
    "lat": 23.94891,
    "lng": 78.86584
  },
  {
    "state": "Madhya Pradesh",
    "name": "Kasrawad",
    "lat": 22.12745,
    "lng": 75.61101
  },
  {
    "state": "Madhya Pradesh",
    "name": "Katangi",
    "lat": 21.77369,
    "lng": 79.80513
  },
  {
    "state": "Madhya Pradesh",
    "name": "Katni",
    "lat": 23.83555,
    "lng": 80.39417
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khachrod",
    "lat": 23.42322,
    "lng": 75.28185
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khailar",
    "lat": 25.34127,
    "lng": 78.53133
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khajuraho Group of Monuments",
    "lat": 24.84809,
    "lng": 79.93351
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khamaria",
    "lat": 23.22558,
    "lng": 79.88007
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khandwa",
    "lat": 21.82427,
    "lng": 76.35086
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khandwa district",
    "lat": 21.75,
    "lng": 76.58333
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khargapur",
    "lat": 24.823,
    "lng": 79.144
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khargone",
    "lat": 21.82306,
    "lng": 75.61028
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khategaon",
    "lat": 22.59573,
    "lng": 76.9133
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khilchipur",
    "lat": 24.03943,
    "lng": 76.578
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khirkiyan",
    "lat": 22.16732,
    "lng": 76.86137
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khujner",
    "lat": 23.78597,
    "lng": 76.61773
  },
  {
    "state": "Madhya Pradesh",
    "name": "Khurai",
    "lat": 24.04372,
    "lng": 78.33014
  },
  {
    "state": "Madhya Pradesh",
    "name": "Kolaras",
    "lat": 25.21928,
    "lng": 77.61167
  },
  {
    "state": "Madhya Pradesh",
    "name": "Korwai",
    "lat": 24.11774,
    "lng": 78.04007
  },
  {
    "state": "Madhya Pradesh",
    "name": "Kotar",
    "lat": 24.69802,
    "lng": 80.98073
  },
  {
    "state": "Madhya Pradesh",
    "name": "Kothi",
    "lat": 24.7526,
    "lng": 80.77751
  },
  {
    "state": "Madhya Pradesh",
    "name": "Kotma",
    "lat": 23.20383,
    "lng": 81.97904
  },
  {
    "state": "Madhya Pradesh",
    "name": "Kotwa",
    "lat": 25.0308,
    "lng": 81.31908
  },
  {
    "state": "Madhya Pradesh",
    "name": "Kukshi",
    "lat": 22.20677,
    "lng": 74.75788
  },
  {
    "state": "Madhya Pradesh",
    "name": "Kumbhraj",
    "lat": 24.37338,
    "lng": 77.04841
  },
  {
    "state": "Madhya Pradesh",
    "name": "Lahar",
    "lat": 26.19401,
    "lng": 78.94137
  },
  {
    "state": "Madhya Pradesh",
    "name": "Lakhnadon",
    "lat": 22.60049,
    "lng": 79.60094
  },
  {
    "state": "Madhya Pradesh",
    "name": "Leteri",
    "lat": 24.05979,
    "lng": 77.40858
  },
  {
    "state": "Madhya Pradesh",
    "name": "Lodhikheda",
    "lat": 21.58235,
    "lng": 78.85911
  },
  {
    "state": "Madhya Pradesh",
    "name": "Machalpur",
    "lat": 24.12767,
    "lng": 76.31672
  },
  {
    "state": "Madhya Pradesh",
    "name": "Madhogarh",
    "lat": 24.56401,
    "lng": 80.91126
  },
  {
    "state": "Madhya Pradesh",
    "name": "Maheshwar",
    "lat": 22.17592,
    "lng": 75.58715
  },
  {
    "state": "Madhya Pradesh",
    "name": "Mahgawan",
    "lat": 26.49471,
    "lng": 78.61593
  },
  {
    "state": "Madhya Pradesh",
    "name": "Maihar",
    "lat": 24.26594,
    "lng": 80.76063
  },
  {
    "state": "Madhya Pradesh",
    "name": "Majholi",
    "lat": 23.50114,
    "lng": 79.92396
  },
  {
    "state": "Madhya Pradesh",
    "name": "Maksi",
    "lat": 23.25999,
    "lng": 76.14567
  },
  {
    "state": "Madhya Pradesh",
    "name": "Malhargarh",
    "lat": 24.28286,
    "lng": 74.99024
  },
  {
    "state": "Madhya Pradesh",
    "name": "Manasa",
    "lat": 24.47764,
    "lng": 75.14095
  },
  {
    "state": "Madhya Pradesh",
    "name": "Manawar",
    "lat": 22.23566,
    "lng": 75.08917
  },
  {
    "state": "Madhya Pradesh",
    "name": "Mandideep",
    "lat": 23.08166,
    "lng": 77.53328
  },
  {
    "state": "Madhya Pradesh",
    "name": "Mandla",
    "lat": 22.64041,
    "lng": 80.51344
  },
  {
    "state": "Madhya Pradesh",
    "name": "Mandleshwar",
    "lat": 22.17598,
    "lng": 75.65995
  },
  {
    "state": "Madhya Pradesh",
    "name": "Mandsaur",
    "lat": 24.33333,
    "lng": 75.25
  },
  {
    "state": "Madhya Pradesh",
    "name": "Mangawan",
    "lat": 24.66754,
    "lng": 81.54644
  },
  {
    "state": "Madhya Pradesh",
    "name": "Manpur",
    "lat": 22.43151,
    "lng": 75.62107
  },
  {
    "state": "Madhya Pradesh",
    "name": "Mau",
    "lat": 26.26584,
    "lng": 78.67108
  },
  {
    "state": "Madhya Pradesh",
    "name": "Mauganj",
    "lat": 24.66721,
    "lng": 81.87339
  },
  {
    "state": "Madhya Pradesh",
    "name": "Mihona",
    "lat": 26.28373,
    "lng": 78.98048
  },
  {
    "state": "Madhya Pradesh",
    "name": "Mohgaon",
    "lat": 21.63941,
    "lng": 78.73638
  },
  {
    "state": "Madhya Pradesh",
    "name": "Morar",
    "lat": 26.2264,
    "lng": 78.22482
  },
  {
    "state": "Madhya Pradesh",
    "name": "Morena",
    "lat": 26.16667,
    "lng": 77.5
  },
  {
    "state": "Madhya Pradesh",
    "name": "Multai",
    "lat": 21.77463,
    "lng": 78.25756
  },
  {
    "state": "Madhya Pradesh",
    "name": "Mundi",
    "lat": 22.06693,
    "lng": 76.49326
  },
  {
    "state": "Madhya Pradesh",
    "name": "Mungaoli",
    "lat": 24.40837,
    "lng": 78.09588
  },
  {
    "state": "Madhya Pradesh",
    "name": "Murwara",
    "lat": 23.83776,
    "lng": 80.39405
  },
  {
    "state": "Madhya Pradesh",
    "name": "Nagda",
    "lat": 23.45834,
    "lng": 75.41759
  },
  {
    "state": "Madhya Pradesh",
    "name": "Nagod",
    "lat": 24.56924,
    "lng": 80.58809
  },
  {
    "state": "Madhya Pradesh",
    "name": "Naigarhi",
    "lat": 24.78686,
    "lng": 81.77868
  },
  {
    "state": "Madhya Pradesh",
    "name": "Nainpur",
    "lat": 22.42996,
    "lng": 80.10561
  },
  {
    "state": "Madhya Pradesh",
    "name": "Namli",
    "lat": 23.46115,
    "lng": 75.06036
  },
  {
    "state": "Madhya Pradesh",
    "name": "Naraini",
    "lat": 25.19033,
    "lng": 80.475
  },
  {
    "state": "Madhya Pradesh",
    "name": "Narayangarh",
    "lat": 24.27083,
    "lng": 75.05007
  },
  {
    "state": "Madhya Pradesh",
    "name": "Narsimhapur",
    "lat": 22.91667,
    "lng": 79.16667
  },
  {
    "state": "Madhya Pradesh",
    "name": "Narsinghgarh",
    "lat": 23.70758,
    "lng": 77.09319
  },
  {
    "state": "Madhya Pradesh",
    "name": "Narwar",
    "lat": 25.6439,
    "lng": 77.9129
  },
  {
    "state": "Madhya Pradesh",
    "name": "Nasrullahganj",
    "lat": 22.6837,
    "lng": 77.27069
  },
  {
    "state": "Madhya Pradesh",
    "name": "Neemuch",
    "lat": 24.47,
    "lng": 74.87
  },
  {
    "state": "Madhya Pradesh",
    "name": "Nepanagar",
    "lat": 21.4538,
    "lng": 76.39335
  },
  {
    "state": "Madhya Pradesh",
    "name": "Orchha",
    "lat": 25.35192,
    "lng": 78.64033
  },
  {
    "state": "Madhya Pradesh",
    "name": "Pachmarhi",
    "lat": 22.46791,
    "lng": 78.43312
  },
  {
    "state": "Madhya Pradesh",
    "name": "Palera",
    "lat": 25.02013,
    "lng": 79.22818
  },
  {
    "state": "Madhya Pradesh",
    "name": "Pali",
    "lat": 23.36453,
    "lng": 81.04374
  },
  {
    "state": "Madhya Pradesh",
    "name": "Panagar",
    "lat": 23.28539,
    "lng": 79.99509
  },
  {
    "state": "Madhya Pradesh",
    "name": "Panara",
    "lat": 22.20568,
    "lng": 78.55093
  },
  {
    "state": "Madhya Pradesh",
    "name": "Pandhana",
    "lat": 21.69816,
    "lng": 76.22487
  },
  {
    "state": "Madhya Pradesh",
    "name": "Pandhurna",
    "lat": 21.59556,
    "lng": 78.52628
  },
  {
    "state": "Madhya Pradesh",
    "name": "Panna",
    "lat": 24.5,
    "lng": 80.25
  },
  {
    "state": "Madhya Pradesh",
    "name": "Pansemal",
    "lat": 21.65981,
    "lng": 74.69937
  },
  {
    "state": "Madhya Pradesh",
    "name": "Parasia",
    "lat": 22.1913,
    "lng": 78.75904
  },
  {
    "state": "Madhya Pradesh",
    "name": "Patan",
    "lat": 23.28636,
    "lng": 79.68962
  },
  {
    "state": "Madhya Pradesh",
    "name": "Patharia",
    "lat": 23.89921,
    "lng": 79.19393
  },
  {
    "state": "Madhya Pradesh",
    "name": "Pawai",
    "lat": 24.26635,
    "lng": 80.16196
  },
  {
    "state": "Madhya Pradesh",
    "name": "Petlawad",
    "lat": 23.01102,
    "lng": 74.79772
  },
  {
    "state": "Madhya Pradesh",
    "name": "Piploda",
    "lat": 23.35,
    "lng": 75.43333
  },
  {
    "state": "Madhya Pradesh",
    "name": "Pithampur",
    "lat": 22.60197,
    "lng": 75.69649
  },
  {
    "state": "Madhya Pradesh",
    "name": "Porsa",
    "lat": 26.67444,
    "lng": 78.37081
  },
  {
    "state": "Madhya Pradesh",
    "name": "Punasa",
    "lat": 22.23507,
    "lng": 76.39335
  },
  {
    "state": "Madhya Pradesh",
    "name": "Raghogarh",
    "lat": 24.44318,
    "lng": 77.19768
  },
  {
    "state": "Madhya Pradesh",
    "name": "Rahatgarh",
    "lat": 23.78968,
    "lng": 78.39473
  },
  {
    "state": "Madhya Pradesh",
    "name": "Raisen",
    "lat": 23.25,
    "lng": 78.08333
  },
  {
    "state": "Madhya Pradesh",
    "name": "Rajgarh",
    "lat": 22.67821,
    "lng": 74.94483
  },
  {
    "state": "Madhya Pradesh",
    "name": "Rajnagar",
    "lat": 24.88929,
    "lng": 79.91178
  },
  {
    "state": "Madhya Pradesh",
    "name": "Rajpur",
    "lat": 22.30393,
    "lng": 74.35568
  },
  {
    "state": "Madhya Pradesh",
    "name": "Rampura",
    "lat": 24.467,
    "lng": 75.43996
  },
  {
    "state": "Madhya Pradesh",
    "name": "Ranapur",
    "lat": 22.64704,
    "lng": 74.52118
  },
  {
    "state": "Madhya Pradesh",
    "name": "Ratangarh",
    "lat": 24.81667,
    "lng": 75.11667
  },
  {
    "state": "Madhya Pradesh",
    "name": "Ratlam",
    "lat": 23.33033,
    "lng": 75.04032
  },
  {
    "state": "Madhya Pradesh",
    "name": "Rehli",
    "lat": 23.63722,
    "lng": 79.06275
  },
  {
    "state": "Madhya Pradesh",
    "name": "Rehti",
    "lat": 22.73781,
    "lng": 77.43399
  },
  {
    "state": "Madhya Pradesh",
    "name": "Rewa",
    "lat": 24.53256,
    "lng": 81.29234
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sabalgarh",
    "lat": 26.24918,
    "lng": 77.40786
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sagar",
    "lat": 23.75,
    "lng": 78.75
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sailana",
    "lat": 23.46219,
    "lng": 74.92318
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sanawad",
    "lat": 22.17391,
    "lng": 76.06993
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sanchi",
    "lat": 23.48646,
    "lng": 77.7378
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sanwer",
    "lat": 22.97415,
    "lng": 75.8271
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sarangpur",
    "lat": 23.56651,
    "lng": 76.47306
  },
  {
    "state": "Madhya Pradesh",
    "name": "Satna",
    "lat": 24.5,
    "lng": 81
  },
  {
    "state": "Madhya Pradesh",
    "name": "Satwas",
    "lat": 22.53628,
    "lng": 76.68452
  },
  {
    "state": "Madhya Pradesh",
    "name": "Saugor",
    "lat": 23.83877,
    "lng": 78.73874
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sausar",
    "lat": 21.65576,
    "lng": 78.79669
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sehore",
    "lat": 23.2,
    "lng": 77.08333
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sendhwa",
    "lat": 21.68562,
    "lng": 75.09622
  },
  {
    "state": "Madhya Pradesh",
    "name": "Seondha",
    "lat": 26.15422,
    "lng": 78.7812
  },
  {
    "state": "Madhya Pradesh",
    "name": "Seoni",
    "lat": 22.08503,
    "lng": 79.55037
  },
  {
    "state": "Madhya Pradesh",
    "name": "Seoni Malwa",
    "lat": 22.45046,
    "lng": 77.4665
  },
  {
    "state": "Madhya Pradesh",
    "name": "Shahdol",
    "lat": 23.5,
    "lng": 81.5
  },
  {
    "state": "Madhya Pradesh",
    "name": "Shahgarh",
    "lat": 24.31365,
    "lng": 79.11806
  },
  {
    "state": "Madhya Pradesh",
    "name": "Shahpur",
    "lat": 21.23742,
    "lng": 76.22558
  },
  {
    "state": "Madhya Pradesh",
    "name": "Shahpura",
    "lat": 23.13663,
    "lng": 79.66402
  },
  {
    "state": "Madhya Pradesh",
    "name": "Shajapur",
    "lat": 23.5,
    "lng": 76.25
  },
  {
    "state": "Madhya Pradesh",
    "name": "Shamgarh",
    "lat": 24.18817,
    "lng": 75.63903
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sheopur",
    "lat": 25.8,
    "lng": 77
  },
  {
    "state": "Madhya Pradesh",
    "name": "Shivpuri",
    "lat": 25.42378,
    "lng": 77.66223
  },
  {
    "state": "Madhya Pradesh",
    "name": "Shujalpur",
    "lat": 23.40673,
    "lng": 76.7098
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sidhi",
    "lat": 24.25,
    "lng": 82
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sihora",
    "lat": 23.4871,
    "lng": 80.10404
  },
  {
    "state": "Madhya Pradesh",
    "name": "Simaria",
    "lat": 24.79497,
    "lng": 81.152
  },
  {
    "state": "Madhya Pradesh",
    "name": "Singoli",
    "lat": 24.96667,
    "lng": 75.3
  },
  {
    "state": "Madhya Pradesh",
    "name": "Singrauli",
    "lat": 24.19973,
    "lng": 82.67535
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sirmaur",
    "lat": 24.83648,
    "lng": 81.36448
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sironj",
    "lat": 24.10313,
    "lng": 77.69055
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sitamau",
    "lat": 24.01473,
    "lng": 75.35324
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sohagi",
    "lat": 24.98181,
    "lng": 81.69558
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sohagpur",
    "lat": 22.70055,
    "lng": 78.19522
  },
  {
    "state": "Madhya Pradesh",
    "name": "Sultanpur",
    "lat": 23.13812,
    "lng": 77.93404
  },
  {
    "state": "Madhya Pradesh",
    "name": "Susner",
    "lat": 23.94667,
    "lng": 76.08825
  },
  {
    "state": "Madhya Pradesh",
    "name": "Tal",
    "lat": 23.71979,
    "lng": 75.38514
  },
  {
    "state": "Madhya Pradesh",
    "name": "Talen",
    "lat": 23.56949,
    "lng": 76.72821
  },
  {
    "state": "Madhya Pradesh",
    "name": "Tarana",
    "lat": 23.33383,
    "lng": 76.04253
  },
  {
    "state": "Madhya Pradesh",
    "name": "Tekanpur",
    "lat": 25.99401,
    "lng": 78.28322
  },
  {
    "state": "Madhya Pradesh",
    "name": "Tendukheda",
    "lat": 23.3962,
    "lng": 79.53947
  },
  {
    "state": "Madhya Pradesh",
    "name": "Teonthar",
    "lat": 24.98207,
    "lng": 81.64194
  },
  {
    "state": "Madhya Pradesh",
    "name": "Thandla",
    "lat": 23.00959,
    "lng": 74.57747
  },
  {
    "state": "Madhya Pradesh",
    "name": "Tikamgarh",
    "lat": 24.74327,
    "lng": 78.83061
  },
  {
    "state": "Madhya Pradesh",
    "name": "Tirodi",
    "lat": 21.68522,
    "lng": 79.71906
  },
  {
    "state": "Madhya Pradesh",
    "name": "Udaipura",
    "lat": 23.07434,
    "lng": 78.51108
  },
  {
    "state": "Madhya Pradesh",
    "name": "Ujjain",
    "lat": 23.41667,
    "lng": 75.5
  },
  {
    "state": "Madhya Pradesh",
    "name": "Ukwa",
    "lat": 21.97102,
    "lng": 80.46625
  },
  {
    "state": "Madhya Pradesh",
    "name": "Umaria",
    "lat": 23.52473,
    "lng": 80.83716
  },
  {
    "state": "Madhya Pradesh",
    "name": "Umaria District",
    "lat": 23.52874,
    "lng": 80.83054
  },
  {
    "state": "Madhya Pradesh",
    "name": "Umri",
    "lat": 26.51056,
    "lng": 78.93667
  },
  {
    "state": "Madhya Pradesh",
    "name": "Unhel",
    "lat": 23.33794,
    "lng": 75.55931
  },
  {
    "state": "Madhya Pradesh",
    "name": "Vidisha",
    "lat": 23.91667,
    "lng": 78
  },
  {
    "state": "Madhya Pradesh",
    "name": "Waraseoni",
    "lat": 21.76184,
    "lng": 80.04301
  },
  {
    "state": "Maharashtra",
    "name": "Achalpur",
    "lat": 21.25665,
    "lng": 77.51006
  },
  {
    "state": "Maharashtra",
    "name": "Adawad",
    "lat": 21.21666667,
    "lng": 75.45
  },
  {
    "state": "Maharashtra",
    "name": "Agar Panchaitan",
    "lat": 18.173692,
    "lng": 72.988533
  },
  {
    "state": "Maharashtra",
    "name": "Aheri",
    "lat": 19.41166667,
    "lng": 80.00388889
  },
  {
    "state": "Maharashtra",
    "name": "Ahiri",
    "lat": 19.41386,
    "lng": 80.00359
  },
  {
    "state": "Maharashtra",
    "name": "Ahmadnagar",
    "lat": 19.09457,
    "lng": 74.73843
  },
  {
    "state": "Maharashtra",
    "name": "Ahmadpur",
    "lat": 18.70622,
    "lng": 76.93731
  },
  {
    "state": "Maharashtra",
    "name": "Ahmednagar",
    "lat": 19.08333333,
    "lng": 74.73333333
  },
  {
    "state": "Maharashtra",
    "name": "Airoli",
    "lat": 19.15096,
    "lng": 72.99625
  },
  {
    "state": "Maharashtra",
    "name": "Ajra",
    "lat": 16.11601,
    "lng": 74.21097
  },
  {
    "state": "Maharashtra",
    "name": "Akalkot",
    "lat": 17.52532,
    "lng": 76.20611
  },
  {
    "state": "Maharashtra",
    "name": "Akkalkot",
    "lat": 17.51666667,
    "lng": 76.2
  },
  {
    "state": "Maharashtra",
    "name": "Akluj",
    "lat": 17.88333333,
    "lng": 75.01666667
  },
  {
    "state": "Maharashtra",
    "name": "Akola",
    "lat": 20.5,
    "lng": 77.16667
  },
  {
    "state": "Maharashtra",
    "name": "Akolner",
    "lat": 18.98333333,
    "lng": 74.66666667
  },
  {
    "state": "Maharashtra",
    "name": "Akot",
    "lat": 21.0963,
    "lng": 77.0588
  },
  {
    "state": "Maharashtra",
    "name": "Akrani",
    "lat": 21.82423611,
    "lng": 74.21687222
  },
  {
    "state": "Maharashtra",
    "name": "Alandi",
    "lat": 18.67756,
    "lng": 73.89868
  },
  {
    "state": "Maharashtra",
    "name": "Ale",
    "lat": 19.17,
    "lng": 74.12
  },
  {
    "state": "Maharashtra",
    "name": "Alibag",
    "lat": 18.64813,
    "lng": 72.87579
  },
  {
    "state": "Maharashtra",
    "name": "Alkuti",
    "lat": 19.05,
    "lng": 74.23
  },
  {
    "state": "Maharashtra",
    "name": "Allapalli",
    "lat": 19.43172,
    "lng": 80.06377
  },
  {
    "state": "Maharashtra",
    "name": "Amalner",
    "lat": 21.03983,
    "lng": 75.05887
  },
  {
    "state": "Maharashtra",
    "name": "Amarnath",
    "lat": 19.2,
    "lng": 73.16667
  },
  {
    "state": "Maharashtra",
    "name": "Ambad",
    "lat": 19.61301,
    "lng": 75.78906
  },
  {
    "state": "Maharashtra",
    "name": "Ambajogai",
    "lat": 18.73312,
    "lng": 76.38616
  },
  {
    "state": "Maharashtra",
    "name": "Ambarnath",
    "lat": 19.209,
    "lng": 73.186
  },
  {
    "state": "Maharashtra",
    "name": "Ambegaon",
    "lat": 19.11666667,
    "lng": 73.73333333
  },
  {
    "state": "Maharashtra",
    "name": "Amgaon",
    "lat": 20.65,
    "lng": 79.95
  },
  {
    "state": "Maharashtra",
    "name": "Amravati",
    "lat": 20.93333,
    "lng": 77.75
  },
  {
    "state": "Maharashtra",
    "name": "Amravati Division",
    "lat": 20.93483,
    "lng": 77.75694
  },
  {
    "state": "Maharashtra",
    "name": "Andheri",
    "lat": 19.11916667,
    "lng": 72.84694444
  },
  {
    "state": "Maharashtra",
    "name": "Andura",
    "lat": 20.88333333,
    "lng": 76.86666667
  },
  {
    "state": "Maharashtra",
    "name": "Anjangaon",
    "lat": 21.16516,
    "lng": 77.3091
  },
  {
    "state": "Maharashtra",
    "name": "Anjarle",
    "lat": 17.85,
    "lng": 73.09
  },
  {
    "state": "Maharashtra",
    "name": "Anshing",
    "lat": 20.0409,
    "lng": 77.31501
  },
  {
    "state": "Maharashtra",
    "name": "Arag",
    "lat": 16.78,
    "lng": 74.8
  },
  {
    "state": "Maharashtra",
    "name": "Arangaon",
    "lat": 19.02681,
    "lng": 74.71487
  },
  {
    "state": "Maharashtra",
    "name": "Ardhapur",
    "lat": 19.28333333,
    "lng": 77.38333333
  },
  {
    "state": "Maharashtra",
    "name": "Argaon",
    "lat": 16.778999,
    "lng": 73.64553
  },
  {
    "state": "Maharashtra",
    "name": "Artist Village",
    "lat": 19.03227,
    "lng": 73.04276
  },
  {
    "state": "Maharashtra",
    "name": "Arvi",
    "lat": 20.99585,
    "lng": 78.22914
  },
  {
    "state": "Maharashtra",
    "name": "Ashta",
    "lat": 16.94943,
    "lng": 74.40936
  },
  {
    "state": "Maharashtra",
    "name": "Ashti",
    "lat": 19.37671,
    "lng": 76.2252
  },
  {
    "state": "Maharashtra",
    "name": "Asoda",
    "lat": 21.03333333,
    "lng": 75.6
  },
  {
    "state": "Maharashtra",
    "name": "Assaye",
    "lat": 20.24512778,
    "lng": 75.88739722
  },
  {
    "state": "Maharashtra",
    "name": "Astagaon",
    "lat": 19.66666667,
    "lng": 74.5
  },
  {
    "state": "Maharashtra",
    "name": "Aurangabad",
    "lat": 19.88467,
    "lng": 75.33986
  },
  {
    "state": "Maharashtra",
    "name": "Ausa",
    "lat": 18.24728,
    "lng": 76.4993
  },
  {
    "state": "Maharashtra",
    "name": "Badlapur",
    "lat": 19.15516,
    "lng": 73.26553
  },
  {
    "state": "Maharashtra",
    "name": "Badnapur",
    "lat": 19.86666667,
    "lng": 75.73333333
  },
  {
    "state": "Maharashtra",
    "name": "Badnera",
    "lat": 20.85463056,
    "lng": 77.72931111
  },
  {
    "state": "Maharashtra",
    "name": "Bagewadi",
    "lat": 16.29,
    "lng": 74.6
  },
  {
    "state": "Maharashtra",
    "name": "Balapur",
    "lat": 20.66612,
    "lng": 76.77386
  },
  {
    "state": "Maharashtra",
    "name": "Ballalpur",
    "lat": 19.84696,
    "lng": 79.34578
  },
  {
    "state": "Maharashtra",
    "name": "Ballard Estate",
    "lat": 18.95,
    "lng": 72.84
  },
  {
    "state": "Maharashtra",
    "name": "Ballarpur",
    "lat": 19.83333333,
    "lng": 79.35
  },
  {
    "state": "Maharashtra",
    "name": "Bandra",
    "lat": 19.05444444,
    "lng": 72.84055556
  },
  {
    "state": "Maharashtra",
    "name": "Baner",
    "lat": 18.56,
    "lng": 73.79027778
  },
  {
    "state": "Maharashtra",
    "name": "Bankot",
    "lat": 17.98333333,
    "lng": 73.05
  },
  {
    "state": "Maharashtra",
    "name": "Baramati",
    "lat": 18.15174,
    "lng": 74.57767
  },
  {
    "state": "Maharashtra",
    "name": "Barsi",
    "lat": 18.23454,
    "lng": 75.69275
  },
  {
    "state": "Maharashtra",
    "name": "Basmat",
    "lat": 19.32872,
    "lng": 77.15746
  },
  {
    "state": "Maharashtra",
    "name": "Basmath",
    "lat": 19.3167,
    "lng": 77.1667
  },
  {
    "state": "Maharashtra",
    "name": "Bavdhan",
    "lat": 18.53527778,
    "lng": 73.78277778
  },
  {
    "state": "Maharashtra",
    "name": "Bawanbir",
    "lat": 21.08333333,
    "lng": 76.71666667
  },
  {
    "state": "Maharashtra",
    "name": "Beed",
    "lat": 18.98921,
    "lng": 75.75634
  },
  {
    "state": "Maharashtra",
    "name": "Bhandara",
    "lat": 21.18333,
    "lng": 80
  },
  {
    "state": "Maharashtra",
    "name": "Bhandardara",
    "lat": 19.52916667,
    "lng": 73.75138889
  },
  {
    "state": "Maharashtra",
    "name": "Bhandup",
    "lat": 19.14,
    "lng": 72.93
  },
  {
    "state": "Maharashtra",
    "name": "Bhayandar",
    "lat": 19.30157,
    "lng": 72.85107
  },
  {
    "state": "Maharashtra",
    "name": "Bhigvan",
    "lat": 18.3007,
    "lng": 74.76701
  },
  {
    "state": "Maharashtra",
    "name": "Bhiwandi",
    "lat": 19.30023,
    "lng": 73.05881
  },
  {
    "state": "Maharashtra",
    "name": "Bhiwapur",
    "lat": 20.83555556,
    "lng": 79.50111111
  },
  {
    "state": "Maharashtra",
    "name": "Bhokar",
    "lat": 19.217803,
    "lng": 77.669392
  },
  {
    "state": "Maharashtra",
    "name": "Bhokardan",
    "lat": 20.27,
    "lng": 75.77
  },
  {
    "state": "Maharashtra",
    "name": "Bhoom",
    "lat": 18.45972222,
    "lng": 75.66083333
  },
  {
    "state": "Maharashtra",
    "name": "Bhor",
    "lat": 18.14861,
    "lng": 73.84336
  },
  {
    "state": "Maharashtra",
    "name": "Bhudgaon",
    "lat": 16.90742,
    "lng": 74.59954
  },
  {
    "state": "Maharashtra",
    "name": "Bhugaon",
    "lat": 18.501284,
    "lng": 73.750161
  },
  {
    "state": "Maharashtra",
    "name": "Bhum",
    "lat": 18.45908,
    "lng": 75.65877
  },
  {
    "state": "Maharashtra",
    "name": "Bhusaval",
    "lat": 21.04365,
    "lng": 75.78506
  },
  {
    "state": "Maharashtra",
    "name": "Bhusawal",
    "lat": 21.05,
    "lng": 75.77
  },
  {
    "state": "Maharashtra",
    "name": "Bid",
    "lat": 18.83333,
    "lng": 75.75
  },
  {
    "state": "Maharashtra",
    "name": "Bijur",
    "lat": 13.84388889,
    "lng": 74.63972222
  },
  {
    "state": "Maharashtra",
    "name": "Bilashi",
    "lat": 16.98333,
    "lng": 74.03333
  },
  {
    "state": "Maharashtra",
    "name": "Biloli",
    "lat": 18.77385,
    "lng": 77.72463
  },
  {
    "state": "Maharashtra",
    "name": "Boisar",
    "lat": 19.80362,
    "lng": 72.75598
  },
  {
    "state": "Maharashtra",
    "name": "Borgaon Manju",
    "lat": 20.71944444,
    "lng": 77.15277778
  },
  {
    "state": "Maharashtra",
    "name": "Borivali",
    "lat": 19.23,
    "lng": 72.86
  },
  {
    "state": "Maharashtra",
    "name": "Borivli",
    "lat": 19.23496,
    "lng": 72.85976
  },
  {
    "state": "Maharashtra",
    "name": "Brahmapuri",
    "lat": 20.6084,
    "lng": 79.8559
  },
  {
    "state": "Maharashtra",
    "name": "Breach Candy",
    "lat": 18.967,
    "lng": 72.805
  },
  {
    "state": "Maharashtra",
    "name": "Buldana",
    "lat": 20.58333,
    "lng": 76.41667
  },
  {
    "state": "Maharashtra",
    "name": "Buldhana",
    "lat": 20.53333333,
    "lng": 76.18333333
  },
  {
    "state": "Maharashtra",
    "name": "Byculla",
    "lat": 18.98,
    "lng": 72.835
  },
  {
    "state": "Maharashtra",
    "name": "Chakan",
    "lat": 18.76059,
    "lng": 73.86351
  },
  {
    "state": "Maharashtra",
    "name": "Chakur",
    "lat": 18.51305556,
    "lng": 76.87527778
  },
  {
    "state": "Maharashtra",
    "name": "Chalisgaon",
    "lat": 20.45781,
    "lng": 75.01596
  },
  {
    "state": "Maharashtra",
    "name": "Chanda",
    "lat": 19.95076,
    "lng": 79.29523
  },
  {
    "state": "Maharashtra",
    "name": "Chandgad",
    "lat": 15,
    "lng": 74
  },
  {
    "state": "Maharashtra",
    "name": "Chandor",
    "lat": 20.3306,
    "lng": 74.24467
  },
  {
    "state": "Maharashtra",
    "name": "Chandrapur",
    "lat": 20.11793,
    "lng": 79.44377
  },
  {
    "state": "Maharashtra",
    "name": "Chandur",
    "lat": 19.73444,
    "lng": 79.17167
  },
  {
    "state": "Maharashtra",
    "name": "Chandur Bazar",
    "lat": 21.23853,
    "lng": 77.74713
  },
  {
    "state": "Maharashtra",
    "name": "Chausala",
    "lat": 18.708692,
    "lng": 75.691595
  },
  {
    "state": "Maharashtra",
    "name": "Chembur",
    "lat": 19.05871111,
    "lng": 72.89969444
  },
  {
    "state": "Maharashtra",
    "name": "Chicholi",
    "lat": 21.46926,
    "lng": 79.70151
  },
  {
    "state": "Maharashtra",
    "name": "Chichondi Patil",
    "lat": 19,
    "lng": 74.91666667
  },
  {
    "state": "Maharashtra",
    "name": "Chikhli (Buldhana)",
    "lat": 20.35046,
    "lng": 76.25774
  },
  {
    "state": "Maharashtra",
    "name": "Chikhli (Jalna)",
    "lat": 20.02193,
    "lng": 75.78544
  },
  {
    "state": "Maharashtra",
    "name": "Chimur",
    "lat": 20.49694444,
    "lng": 79.37666667
  },
  {
    "state": "Maharashtra",
    "name": "Chinchani",
    "lat": 19.87458,
    "lng": 72.6851
  },
  {
    "state": "Maharashtra",
    "name": "Chinchpokli",
    "lat": 18.98333333,
    "lng": 72.83333333
  },
  {
    "state": "Maharashtra",
    "name": "Chiplun",
    "lat": 17.53339,
    "lng": 73.50935
  },
  {
    "state": "Maharashtra",
    "name": "Chopda",
    "lat": 21.24578,
    "lng": 75.29946
  },
  {
    "state": "Maharashtra",
    "name": "Colaba",
    "lat": 18.91,
    "lng": 72.81
  },
  {
    "state": "Maharashtra",
    "name": "Dabhol",
    "lat": 17.58971,
    "lng": 73.18001
  },
  {
    "state": "Maharashtra",
    "name": "Daddi",
    "lat": 16.06666667,
    "lng": 74.43333333
  },
  {
    "state": "Maharashtra",
    "name": "Dahanu",
    "lat": 19.96778,
    "lng": 72.71263
  },
  {
    "state": "Maharashtra",
    "name": "Dahivel",
    "lat": 21.06666667,
    "lng": 74.16666667
  },
  {
    "state": "Maharashtra",
    "name": "Dapoli",
    "lat": 17.75888889,
    "lng": 73.18555556
  },
  {
    "state": "Maharashtra",
    "name": "Darwha",
    "lat": 20.31017,
    "lng": 77.77257
  },
  {
    "state": "Maharashtra",
    "name": "Daryapur",
    "lat": 20.92489,
    "lng": 77.32644
  },
  {
    "state": "Maharashtra",
    "name": "Dattapur",
    "lat": 20.78075,
    "lng": 78.1407
  },
  {
    "state": "Maharashtra",
    "name": "Daulatabad",
    "lat": 19.93611,
    "lng": 75.22148
  },
  {
    "state": "Maharashtra",
    "name": "Daund",
    "lat": 18.46515,
    "lng": 74.58375
  },
  {
    "state": "Maharashtra",
    "name": "Deccan Gymkhana",
    "lat": 18.5184,
    "lng": 73.8406
  },
  {
    "state": "Maharashtra",
    "name": "Deglur",
    "lat": 18.54777778,
    "lng": 77.57722222
  },
  {
    "state": "Maharashtra",
    "name": "Dehu",
    "lat": 18.71851,
    "lng": 73.76635
  },
  {
    "state": "Maharashtra",
    "name": "Deolali",
    "lat": 19.94404,
    "lng": 73.83441
  },
  {
    "state": "Maharashtra",
    "name": "Deolapar",
    "lat": 21.58611111,
    "lng": 79.36944444
  },
  {
    "state": "Maharashtra",
    "name": "Deoli",
    "lat": 20.6492,
    "lng": 78.48023
  },
  {
    "state": "Maharashtra",
    "name": "Deoni",
    "lat": 18.26388889,
    "lng": 77.08222222
  },
  {
    "state": "Maharashtra",
    "name": "Deulgaon Raja",
    "lat": 20.01757,
    "lng": 76.03755
  },
  {
    "state": "Maharashtra",
    "name": "Devrukh",
    "lat": 17.065,
    "lng": 73.61583333
  },
  {
    "state": "Maharashtra",
    "name": "Dharangaon",
    "lat": 21.01187,
    "lng": 75.27407
  },
  {
    "state": "Maharashtra",
    "name": "Dharavi",
    "lat": 19.05,
    "lng": 72.86667
  },
  {
    "state": "Maharashtra",
    "name": "Dharmabad",
    "lat": 18.89116,
    "lng": 77.8494
  },
  {
    "state": "Maharashtra",
    "name": "Dharur",
    "lat": 18.82017,
    "lng": 76.10937
  },
  {
    "state": "Maharashtra",
    "name": "Dhawalpuri",
    "lat": 19.16666667,
    "lng": 74.51666667
  },
  {
    "state": "Maharashtra",
    "name": "Dhule",
    "lat": 21.06852,
    "lng": 74.58837
  },
  {
    "state": "Maharashtra",
    "name": "Dhulia",
    "lat": 20.9013,
    "lng": 74.77737
  },
  {
    "state": "Maharashtra",
    "name": "Dighori",
    "lat": 20.8862,
    "lng": 79.9342
  },
  {
    "state": "Maharashtra",
    "name": "Diglur",
    "lat": 18.54829,
    "lng": 77.57695
  },
  {
    "state": "Maharashtra",
    "name": "Digras",
    "lat": 20.1035,
    "lng": 77.71846
  },
  {
    "state": "Maharashtra",
    "name": "Diveagar",
    "lat": 18.17333333,
    "lng": 72.99166667
  },
  {
    "state": "Maharashtra",
    "name": "Dombivli",
    "lat": 19.21667,
    "lng": 73.08333
  },
  {
    "state": "Maharashtra",
    "name": "Dondaicha",
    "lat": 21.3236,
    "lng": 74.56804
  },
  {
    "state": "Maharashtra",
    "name": "Dongri",
    "lat": 19.28333333,
    "lng": 72.78333333
  },
  {
    "state": "Maharashtra",
    "name": "Dudhani",
    "lat": 17.35792,
    "lng": 76.36688
  },
  {
    "state": "Maharashtra",
    "name": "Durgapur",
    "lat": 20.0054,
    "lng": 79.30273
  },
  {
    "state": "Maharashtra",
    "name": "Erandol",
    "lat": 20.92206,
    "lng": 75.32641
  },
  {
    "state": "Maharashtra",
    "name": "Faizpur",
    "lat": 21.16766,
    "lng": 75.86006
  },
  {
    "state": "Maharashtra",
    "name": "Fort",
    "lat": 18.935,
    "lng": 72.8359
  },
  {
    "state": "Maharashtra",
    "name": "Gadchiroli",
    "lat": 19.8,
    "lng": 80.2
  },
  {
    "state": "Maharashtra",
    "name": "Gadhinglaj",
    "lat": 16.22291,
    "lng": 74.3501
  },
  {
    "state": "Maharashtra",
    "name": "Gangakher",
    "lat": 18.96962,
    "lng": 76.74946
  },
  {
    "state": "Maharashtra",
    "name": "Gangapur",
    "lat": 19.69718,
    "lng": 75.01045
  },
  {
    "state": "Maharashtra",
    "name": "Ganpatipule",
    "lat": 17.1448,
    "lng": 73.2666
  },
  {
    "state": "Maharashtra",
    "name": "Gevrai",
    "lat": 19.26372,
    "lng": 75.75007
  },
  {
    "state": "Maharashtra",
    "name": "Ghargaon",
    "lat": 18.748684,
    "lng": 74.636734
  },
  {
    "state": "Maharashtra",
    "name": "Ghatanji",
    "lat": 20.14183,
    "lng": 78.31333
  },
  {
    "state": "Maharashtra",
    "name": "Ghatkopar",
    "lat": 19.08,
    "lng": 72.91
  },
  {
    "state": "Maharashtra",
    "name": "Ghoti Budrukh",
    "lat": 19.71641,
    "lng": 73.62821
  },
  {
    "state": "Maharashtra",
    "name": "Ghugus",
    "lat": 19.9381,
    "lng": 79.11192
  },
  {
    "state": "Maharashtra",
    "name": "Girgaon",
    "lat": 18.953,
    "lng": 72.813
  },
  {
    "state": "Maharashtra",
    "name": "Gondia",
    "lat": 21.45,
    "lng": 80.2
  },
  {
    "state": "Maharashtra",
    "name": "Gondiya",
    "lat": 21.05,
    "lng": 80.25
  },
  {
    "state": "Maharashtra",
    "name": "Gorai",
    "lat": 19.250057,
    "lng": 72.782021
  },
  {
    "state": "Maharashtra",
    "name": "Goregaon",
    "lat": 18.15483,
    "lng": 73.29147
  },
  {
    "state": "Maharashtra",
    "name": "Guhagar",
    "lat": 17.48415,
    "lng": 73.19289
  },
  {
    "state": "Maharashtra",
    "name": "Hadgaon",
    "lat": 19.49552,
    "lng": 77.65863
  },
  {
    "state": "Maharashtra",
    "name": "Halkarni",
    "lat": 16.16666667,
    "lng": 74.46666667
  },
  {
    "state": "Maharashtra",
    "name": "Harangul",
    "lat": 18.9,
    "lng": 76.66666667
  },
  {
    "state": "Maharashtra",
    "name": "Harnai",
    "lat": 17.8134,
    "lng": 73.09668
  },
  {
    "state": "Maharashtra",
    "name": "Helwak",
    "lat": 17.385,
    "lng": 73.735
  },
  {
    "state": "Maharashtra",
    "name": "Hinganghat",
    "lat": 20.54875,
    "lng": 78.83978
  },
  {
    "state": "Maharashtra",
    "name": "Hingoli",
    "lat": 19.7,
    "lng": 77.15
  },
  {
    "state": "Maharashtra",
    "name": "Hirapur",
    "lat": 21.53,
    "lng": 79.77
  },
  {
    "state": "Maharashtra",
    "name": "Hirapur Hamesha",
    "lat": 21.55546,
    "lng": 79.78581
  },
  {
    "state": "Maharashtra",
    "name": "Hotgi",
    "lat": 17.58333333,
    "lng": 75.98333333
  },
  {
    "state": "Maharashtra",
    "name": "Ichalkaranji",
    "lat": 16.69117,
    "lng": 74.46054
  },
  {
    "state": "Maharashtra",
    "name": "Igatpuri",
    "lat": 19.69522,
    "lng": 73.5626
  },
  {
    "state": "Maharashtra",
    "name": "Indapur",
    "lat": 18.3,
    "lng": 73.25
  },
  {
    "state": "Maharashtra",
    "name": "Jaisingpur",
    "lat": 16.77639,
    "lng": 74.55361
  },
  {
    "state": "Maharashtra",
    "name": "Jaitapur",
    "lat": 16.59,
    "lng": 73.35
  },
  {
    "state": "Maharashtra",
    "name": "Jakhangaon",
    "lat": 17.64639,
    "lng": 74.32111
  },
  {
    "state": "Maharashtra",
    "name": "Jalgaon",
    "lat": 21.00292,
    "lng": 75.56602
  },
  {
    "state": "Maharashtra",
    "name": "Jalgaon Jamod",
    "lat": 21.05194,
    "lng": 76.53464
  },
  {
    "state": "Maharashtra",
    "name": "Jalkot",
    "lat": 18.62916667,
    "lng": 77.18111111
  },
  {
    "state": "Maharashtra",
    "name": "Jalna",
    "lat": 19.8,
    "lng": 75.9
  },
  {
    "state": "Maharashtra",
    "name": "Jamkhed",
    "lat": 18.72,
    "lng": 75.32
  },
  {
    "state": "Maharashtra",
    "name": "Jamod",
    "lat": 21.1,
    "lng": 76.6
  },
  {
    "state": "Maharashtra",
    "name": "Janephal",
    "lat": 20.29361111,
    "lng": 76.57583333
  },
  {
    "state": "Maharashtra",
    "name": "Jaoli",
    "lat": 17.9,
    "lng": 76.4
  },
  {
    "state": "Maharashtra",
    "name": "Jategaon",
    "lat": 19.91666667,
    "lng": 73.65
  },
  {
    "state": "Maharashtra",
    "name": "Jawhar",
    "lat": 19.91213,
    "lng": 73.22679
  },
  {
    "state": "Maharashtra",
    "name": "Jaysingpur",
    "lat": 16.78350556,
    "lng": 74.56644167
  },
  {
    "state": "Maharashtra",
    "name": "Jejuri",
    "lat": 18.27658,
    "lng": 74.16008
  },
  {
    "state": "Maharashtra",
    "name": "Jintur",
    "lat": 19.61186,
    "lng": 76.6874
  },
  {
    "state": "Maharashtra",
    "name": "Jogeshwari",
    "lat": 19.12,
    "lng": 72.85
  },
  {
    "state": "Maharashtra",
    "name": "Juhu",
    "lat": 19.1,
    "lng": 72.83
  },
  {
    "state": "Maharashtra",
    "name": "Junnar",
    "lat": 19.20815,
    "lng": 73.8752
  },
  {
    "state": "Maharashtra",
    "name": "Kachurwahi",
    "lat": 21.3333,
    "lng": 79.3833
  },
  {
    "state": "Maharashtra",
    "name": "Kadegaon",
    "lat": 17.3,
    "lng": 74.35
  },
  {
    "state": "Maharashtra",
    "name": "Kadus",
    "lat": 18.88333333,
    "lng": 73.81666667
  },
  {
    "state": "Maharashtra",
    "name": "Kagal",
    "lat": 16.57702,
    "lng": 74.31544
  },
  {
    "state": "Maharashtra",
    "name": "Kaij",
    "lat": 18.7,
    "lng": 76.08333333
  },
  {
    "state": "Maharashtra",
    "name": "Kalamb",
    "lat": 19.04437,
    "lng": 73.95554
  },
  {
    "state": "Maharashtra",
    "name": "Kalamboli",
    "lat": 19.03333,
    "lng": 73.1
  },
  {
    "state": "Maharashtra",
    "name": "Kalamnuri",
    "lat": 19.67386,
    "lng": 77.31149
  },
  {
    "state": "Maharashtra",
    "name": "Kalas",
    "lat": 18.17241,
    "lng": 74.79045
  },
  {
    "state": "Maharashtra",
    "name": "Kali(DK)",
    "lat": 19.938778,
    "lng": 77.732857
  },
  {
    "state": "Maharashtra",
    "name": "Kalmeshwar",
    "lat": 21.23219,
    "lng": 78.91988
  },
  {
    "state": "Maharashtra",
    "name": "Kalundri",
    "lat": 18.9802,
    "lng": 73.12708
  },
  {
    "state": "Maharashtra",
    "name": "Kalyan",
    "lat": 19.2437,
    "lng": 73.13554
  },
  {
    "state": "Maharashtra",
    "name": "Kalyani Nagar",
    "lat": 18.5481,
    "lng": 73.9033
  },
  {
    "state": "Maharashtra",
    "name": "Kamargaon",
    "lat": 20.61666667,
    "lng": 77.5
  },
  {
    "state": "Maharashtra",
    "name": "Kamatgi",
    "lat": 16.119,
    "lng": 75.8482
  },
  {
    "state": "Maharashtra",
    "name": "Kamptee",
    "lat": 21.2333,
    "lng": 79.2
  },
  {
    "state": "Maharashtra",
    "name": "Kamthi",
    "lat": 21.21615,
    "lng": 79.1973
  },
  {
    "state": "Maharashtra",
    "name": "Kandri",
    "lat": 21.4203,
    "lng": 79.27663
  },
  {
    "state": "Maharashtra",
    "name": "Kankauli",
    "lat": 16.26609,
    "lng": 73.71217
  },
  {
    "state": "Maharashtra",
    "name": "Kankavli",
    "lat": 16.28551111,
    "lng": 73.68446111
  },
  {
    "state": "Maharashtra",
    "name": "Kannad",
    "lat": 20.25684,
    "lng": 75.13786
  },
  {
    "state": "Maharashtra",
    "name": "Karad",
    "lat": 17.28937,
    "lng": 74.18183
  },
  {
    "state": "Maharashtra",
    "name": "Karajagi",
    "lat": 17.11666667,
    "lng": 75.58333333
  },
  {
    "state": "Maharashtra",
    "name": "Karanja",
    "lat": 20.48273,
    "lng": 77.48857
  },
  {
    "state": "Maharashtra",
    "name": "Karanja Lad",
    "lat": 20.4833,
    "lng": 77.4833
  },
  {
    "state": "Maharashtra",
    "name": "Karjat",
    "lat": 18.9107,
    "lng": 73.32354
  },
  {
    "state": "Maharashtra",
    "name": "Karkamb",
    "lat": 17.8653,
    "lng": 75.2964
  },
  {
    "state": "Maharashtra",
    "name": "Karmala",
    "lat": 18.4077,
    "lng": 75.19386
  },
  {
    "state": "Maharashtra",
    "name": "Kasara",
    "lat": 19.6333,
    "lng": 73.4833
  },
  {
    "state": "Maharashtra",
    "name": "Kasoda",
    "lat": 20.81666667,
    "lng": 75.3
  },
  {
    "state": "Maharashtra",
    "name": "Kati",
    "lat": 17.96137,
    "lng": 75.88895
  },
  {
    "state": "Maharashtra",
    "name": "Katol",
    "lat": 21.27388,
    "lng": 78.5858
  },
  {
    "state": "Maharashtra",
    "name": "Katral",
    "lat": 17.16666667,
    "lng": 75.63333333
  },
  {
    "state": "Maharashtra",
    "name": "Khadki",
    "lat": 18.5635,
    "lng": 73.85205
  },
  {
    "state": "Maharashtra",
    "name": "Khalapur",
    "lat": 18.81666667,
    "lng": 73.26666667
  },
  {
    "state": "Maharashtra",
    "name": "Khallar",
    "lat": 21.0402869,
    "lng": 77.4656296
  },
  {
    "state": "Maharashtra",
    "name": "Khamgaon",
    "lat": 20.70738,
    "lng": 76.56827
  },
  {
    "state": "Maharashtra",
    "name": "Khanapur",
    "lat": 17.26111111,
    "lng": 74.70166667
  },
  {
    "state": "Maharashtra",
    "name": "Khandala",
    "lat": 18.05918056,
    "lng": 74.01262778
  },
  {
    "state": "Maharashtra",
    "name": "Khangaon",
    "lat": 20.5,
    "lng": 78.61666667
  },
  {
    "state": "Maharashtra",
    "name": "Khapa",
    "lat": 21.42243,
    "lng": 78.98168
  },
  {
    "state": "Maharashtra",
    "name": "Kharakvasla",
    "lat": 18.43997,
    "lng": 73.77545
  },
  {
    "state": "Maharashtra",
    "name": "Kharda",
    "lat": 18.63753,
    "lng": 75.47513
  },
  {
    "state": "Maharashtra",
    "name": "Kharghar",
    "lat": 19.03614722,
    "lng": 73.06172222
  },
  {
    "state": "Maharashtra",
    "name": "Kharsundi",
    "lat": 17.341585,
    "lng": 74.775996
  },
  {
    "state": "Maharashtra",
    "name": "Khed",
    "lat": 17.71888,
    "lng": 73.39693
  },
  {
    "state": "Maharashtra",
    "name": "Khede",
    "lat": 20.91,
    "lng": 74.63
  },
  {
    "state": "Maharashtra",
    "name": "Khetia",
    "lat": 21.67124,
    "lng": 74.58535
  },
  {
    "state": "Maharashtra",
    "name": "Khoni",
    "lat": 19.3113,
    "lng": 73.0544
  },
  {
    "state": "Maharashtra",
    "name": "Khopoli",
    "lat": 18.78562,
    "lng": 73.34589
  },
  {
    "state": "Maharashtra",
    "name": "Khuldabad",
    "lat": 20.00671,
    "lng": 75.19245
  },
  {
    "state": "Maharashtra",
    "name": "Kinwat",
    "lat": 19.62557,
    "lng": 78.1987
  },
  {
    "state": "Maharashtra",
    "name": "Kodoli",
    "lat": 16.87639,
    "lng": 74.1909
  },
  {
    "state": "Maharashtra",
    "name": "Kolhapur",
    "lat": 16.69013,
    "lng": 74.22981
  },
  {
    "state": "Maharashtra",
    "name": "Kondalwadi",
    "lat": 18.80727,
    "lng": 77.77031
  },
  {
    "state": "Maharashtra",
    "name": "Kondhali",
    "lat": 21.15,
    "lng": 78.61666667
  },
  {
    "state": "Maharashtra",
    "name": "Kopar Khairane",
    "lat": 19.10305556,
    "lng": 73.01055556
  },
  {
    "state": "Maharashtra",
    "name": "Kopargaon",
    "lat": 19.88239,
    "lng": 74.47605
  },
  {
    "state": "Maharashtra",
    "name": "Kopela",
    "lat": 18.83,
    "lng": 80.23
  },
  {
    "state": "Maharashtra",
    "name": "Koradi",
    "lat": 21.24758,
    "lng": 79.10575
  },
  {
    "state": "Maharashtra",
    "name": "Koregaon",
    "lat": 18.64573,
    "lng": 74.05909
  },
  {
    "state": "Maharashtra",
    "name": "Koynanagar",
    "lat": 17.4,
    "lng": 73.76667
  },
  {
    "state": "Maharashtra",
    "name": "Kudal",
    "lat": 16.01148,
    "lng": 73.68867
  },
  {
    "state": "Maharashtra",
    "name": "Kuhi",
    "lat": 21.01082222,
    "lng": 79.35242222
  },
  {
    "state": "Maharashtra",
    "name": "Kurandvad",
    "lat": 16.68317,
    "lng": 74.58892
  },
  {
    "state": "Maharashtra",
    "name": "Kurankhed",
    "lat": 20.70194444,
    "lng": 77.24972222
  },
  {
    "state": "Maharashtra",
    "name": "Kurduvadi",
    "lat": 18.09339,
    "lng": 75.41567
  },
  {
    "state": "Maharashtra",
    "name": "Kusumba",
    "lat": 20.91666667,
    "lng": 74.65
  },
  {
    "state": "Maharashtra",
    "name": "Lakhandur",
    "lat": 20.75,
    "lng": 79.88333333
  },
  {
    "state": "Maharashtra",
    "name": "Lanja",
    "lat": 16.86086,
    "lng": 73.54993
  },
  {
    "state": "Maharashtra",
    "name": "Lasalgaon",
    "lat": 20.1427,
    "lng": 74.23946
  },
  {
    "state": "Maharashtra",
    "name": "Latur",
    "lat": 18.4,
    "lng": 76.8
  },
  {
    "state": "Maharashtra",
    "name": "Lavasa",
    "lat": 18.40528056,
    "lng": 73.50626944
  },
  {
    "state": "Maharashtra",
    "name": "Lohogaon",
    "lat": 18.59921,
    "lng": 73.92701
  },
  {
    "state": "Maharashtra",
    "name": "Lonar",
    "lat": 19.98533,
    "lng": 76.52046
  },
  {
    "state": "Maharashtra",
    "name": "Lonavla",
    "lat": 18.75275,
    "lng": 73.40575
  },
  {
    "state": "Maharashtra",
    "name": "Mahabaleshwar",
    "lat": 17.56,
    "lng": 73.4
  },
  {
    "state": "Maharashtra",
    "name": "Mahad",
    "lat": 18.08333,
    "lng": 73.41667
  },
  {
    "state": "Maharashtra",
    "name": "Mahape",
    "lat": 19.11776,
    "lng": 73.026938
  },
  {
    "state": "Maharashtra",
    "name": "Mahim",
    "lat": 19.035,
    "lng": 72.84
  },
  {
    "state": "Maharashtra",
    "name": "Maindargi",
    "lat": 17.45739,
    "lng": 76.2932
  },
  {
    "state": "Maharashtra",
    "name": "Majalgaon",
    "lat": 19.15988,
    "lng": 76.20832
  },
  {
    "state": "Maharashtra",
    "name": "Makhjan",
    "lat": 17.2698,
    "lng": 73.50031
  },
  {
    "state": "Maharashtra",
    "name": "Malabar Hill",
    "lat": 18.95,
    "lng": 72.795
  },
  {
    "state": "Maharashtra",
    "name": "Malad",
    "lat": 19.18611111,
    "lng": 72.84861111
  },
  {
    "state": "Maharashtra",
    "name": "Malegaon",
    "lat": 20.54966,
    "lng": 74.53462
  },
  {
    "state": "Maharashtra",
    "name": "Malkapur",
    "lat": 17.26214,
    "lng": 74.17574
  },
  {
    "state": "Maharashtra",
    "name": "Malvan",
    "lat": 16.05981,
    "lng": 73.4629
  },
  {
    "state": "Maharashtra",
    "name": "Manchar",
    "lat": 19.00436,
    "lng": 73.94346
  },
  {
    "state": "Maharashtra",
    "name": "Mandangad",
    "lat": 17.98333333,
    "lng": 73.25
  },
  {
    "state": "Maharashtra",
    "name": "Mandhal",
    "lat": 20.95,
    "lng": 79.46666667
  },
  {
    "state": "Maharashtra",
    "name": "Mandwa",
    "lat": 18.803,
    "lng": 72.882
  },
  {
    "state": "Maharashtra",
    "name": "Mangaon",
    "lat": 18.23333333,
    "lng": 73.28333333
  },
  {
    "state": "Maharashtra",
    "name": "Mangrul Pir",
    "lat": 20.31379,
    "lng": 77.34178
  },
  {
    "state": "Maharashtra",
    "name": "Manjlegaon",
    "lat": 19.15,
    "lng": 76.23
  },
  {
    "state": "Maharashtra",
    "name": "Mankeshwar",
    "lat": 18.35416667,
    "lng": 75.63916667
  },
  {
    "state": "Maharashtra",
    "name": "Mankhurd",
    "lat": 19.05,
    "lng": 72.93
  },
  {
    "state": "Maharashtra",
    "name": "Manmad",
    "lat": 20.25334,
    "lng": 74.43755
  },
  {
    "state": "Maharashtra",
    "name": "Manor",
    "lat": 19.7244,
    "lng": 72.90966
  },
  {
    "state": "Maharashtra",
    "name": "Mansar",
    "lat": 21.39602,
    "lng": 79.2635
  },
  {
    "state": "Maharashtra",
    "name": "Manwat",
    "lat": 19.30133,
    "lng": 76.49735
  },
  {
    "state": "Maharashtra",
    "name": "Manwath",
    "lat": 19.3,
    "lng": 76.5
  },
  {
    "state": "Maharashtra",
    "name": "Maregaon",
    "lat": 20.1,
    "lng": 78.81666667
  },
  {
    "state": "Maharashtra",
    "name": "Mastiholi",
    "lat": 16.08333333,
    "lng": 74.55
  },
  {
    "state": "Maharashtra",
    "name": "Matheran",
    "lat": 18.98281,
    "lng": 73.2652
  },
  {
    "state": "Maharashtra",
    "name": "Matunga",
    "lat": 19.01798056,
    "lng": 72.84476389
  },
  {
    "state": "Maharashtra",
    "name": "Mazagaon",
    "lat": 18.97,
    "lng": 72.85
  },
  {
    "state": "Maharashtra",
    "name": "Mehekar",
    "lat": 20.1505,
    "lng": 76.56841
  },
  {
    "state": "Maharashtra",
    "name": "Mehergaon",
    "lat": 20.96666667,
    "lng": 74.63333333
  },
  {
    "state": "Maharashtra",
    "name": "Mehkar",
    "lat": 20.15,
    "lng": 76.575
  },
  {
    "state": "Maharashtra",
    "name": "Mhasla",
    "lat": 18.1334,
    "lng": 73.11162
  },
  {
    "state": "Maharashtra",
    "name": "Mhasvad",
    "lat": 17.63359,
    "lng": 74.78773
  },
  {
    "state": "Maharashtra",
    "name": "Miraj",
    "lat": 16.83,
    "lng": 74.63
  },
  {
    "state": "Maharashtra",
    "name": "Mohadi",
    "lat": 21.30833333,
    "lng": 79.675
  },
  {
    "state": "Maharashtra",
    "name": "Mohol",
    "lat": 17.8167,
    "lng": 75.6667
  },
  {
    "state": "Maharashtra",
    "name": "Mohpa",
    "lat": 21.31012,
    "lng": 78.82969
  },
  {
    "state": "Maharashtra",
    "name": "Mokhada taluka",
    "lat": 19.93333333,
    "lng": 73.33333333
  },
  {
    "state": "Maharashtra",
    "name": "Moram",
    "lat": 17.78812,
    "lng": 76.47077
  },
  {
    "state": "Maharashtra",
    "name": "Morsi",
    "lat": 21.3403,
    "lng": 78.01258
  },
  {
    "state": "Maharashtra",
    "name": "Mowad",
    "lat": 21.46475,
    "lng": 78.45103
  },
  {
    "state": "Maharashtra",
    "name": "Mudkhed",
    "lat": 19.15657,
    "lng": 77.50304
  },
  {
    "state": "Maharashtra",
    "name": "Mukher",
    "lat": 18.70636,
    "lng": 77.36795
  },
  {
    "state": "Maharashtra",
    "name": "Mul",
    "lat": 20.06987,
    "lng": 79.67826
  },
  {
    "state": "Maharashtra",
    "name": "Mulher",
    "lat": 20.78138889,
    "lng": 74.06388889
  },
  {
    "state": "Maharashtra",
    "name": "Mulund",
    "lat": 19.17168056,
    "lng": 72.956
  },
  {
    "state": "Maharashtra",
    "name": "Mumbai",
    "lat": 19.07283,
    "lng": 72.88261
  },
  {
    "state": "Maharashtra",
    "name": "Mumbai Suburban",
    "lat": 19.12636,
    "lng": 72.84897
  },
  {
    "state": "Maharashtra",
    "name": "Murbad",
    "lat": 19.25395,
    "lng": 73.38993
  },
  {
    "state": "Maharashtra",
    "name": "Murgud",
    "lat": 16.39604,
    "lng": 74.19142
  },
  {
    "state": "Maharashtra",
    "name": "Murtajapur",
    "lat": 20.73299,
    "lng": 77.36694
  },
  {
    "state": "Maharashtra",
    "name": "Murud (Raigad)",
    "lat": 18.32817,
    "lng": 72.9621
  },
  {
    "state": "Maharashtra",
    "name": "Murud (Ratnagiri)",
    "lat": 17.77494444,
    "lng": 73.11815
  },
  {
    "state": "Maharashtra",
    "name": "Murum",
    "lat": 17.78777778,
    "lng": 76.47
  },
  {
    "state": "Maharashtra",
    "name": "Nadgaon",
    "lat": 20.90101389,
    "lng": 76.01396389
  },
  {
    "state": "Maharashtra",
    "name": "Nagapur",
    "lat": 18.87,
    "lng": 76.43
  },
  {
    "state": "Maharashtra",
    "name": "Nagothana",
    "lat": 18.54225,
    "lng": 73.13493
  },
  {
    "state": "Maharashtra",
    "name": "Nagpur",
    "lat": 21.14631,
    "lng": 79.08491
  },
  {
    "state": "Maharashtra",
    "name": "Nagpur Division",
    "lat": 21.14911,
    "lng": 79.10748
  },
  {
    "state": "Maharashtra",
    "name": "Nala Sopara",
    "lat": 19.4154,
    "lng": 72.8613
  },
  {
    "state": "Maharashtra",
    "name": "Naldurg",
    "lat": 17.81667,
    "lng": 76.28182
  },
  {
    "state": "Maharashtra",
    "name": "Nalegaon",
    "lat": 18.41666667,
    "lng": 76.81666667
  },
  {
    "state": "Maharashtra",
    "name": "Nampur",
    "lat": 20.72861111,
    "lng": 74.31083333
  },
  {
    "state": "Maharashtra",
    "name": "Nanded",
    "lat": 18.91667,
    "lng": 77.5
  },
  {
    "state": "Maharashtra",
    "name": "Nandgaon",
    "lat": 20.3068,
    "lng": 74.65501
  },
  {
    "state": "Maharashtra",
    "name": "Nandnee",
    "lat": 17.455,
    "lng": 75.84555556
  },
  {
    "state": "Maharashtra",
    "name": "Nandura",
    "lat": 20.83333333,
    "lng": 76.45972222
  },
  {
    "state": "Maharashtra",
    "name": "Nandura Buzurg",
    "lat": 20.83417,
    "lng": 76.45924
  },
  {
    "state": "Maharashtra",
    "name": "Nandurbar",
    "lat": 21.37,
    "lng": 74.2
  },
  {
    "state": "Maharashtra",
    "name": "Narayangaon",
    "lat": 19.07,
    "lng": 73.97
  },
  {
    "state": "Maharashtra",
    "name": "Nardana",
    "lat": 21.2,
    "lng": 74.81666667
  },
  {
    "state": "Maharashtra",
    "name": "Nariman Point",
    "lat": 18.92,
    "lng": 72.83
  },
  {
    "state": "Maharashtra",
    "name": "Narkhed",
    "lat": 21.47,
    "lng": 78.53
  },
  {
    "state": "Maharashtra",
    "name": "Nashik",
    "lat": 19.99727,
    "lng": 73.79096
  },
  {
    "state": "Maharashtra",
    "name": "Nashik Division",
    "lat": 19.98295,
    "lng": 73.78942
  },
  {
    "state": "Maharashtra",
    "name": "Navapur",
    "lat": 21.17,
    "lng": 73.78
  },
  {
    "state": "Maharashtra",
    "name": "Navi Mumbai",
    "lat": 19.03681,
    "lng": 73.01582
  },
  {
    "state": "Maharashtra",
    "name": "Neral",
    "lat": 19.02475,
    "lng": 73.31688
  },
  {
    "state": "Maharashtra",
    "name": "Nerur",
    "lat": 15.98333333,
    "lng": 73.65
  },
  {
    "state": "Maharashtra",
    "name": "Nevasa",
    "lat": 19.53333333,
    "lng": 74.93333333
  },
  {
    "state": "Maharashtra",
    "name": "Nighoj",
    "lat": 18.95972222,
    "lng": 74.27694444
  },
  {
    "state": "Maharashtra",
    "name": "Nilanga",
    "lat": 18.11675,
    "lng": 76.75279
  },
  {
    "state": "Maharashtra",
    "name": "Nipani",
    "lat": 16.399,
    "lng": 74.38285
  },
  {
    "state": "Maharashtra",
    "name": "Niphad",
    "lat": 20.0833,
    "lng": 73.8
  },
  {
    "state": "Maharashtra",
    "name": "Nira Narsingpur",
    "lat": 17.9835,
    "lng": 75.12396
  },
  {
    "state": "Maharashtra",
    "name": "Osmanabad",
    "lat": 18.25,
    "lng": 76.16667
  },
  {
    "state": "Maharashtra",
    "name": "Ozar",
    "lat": 20.09473,
    "lng": 73.92816
  },
  {
    "state": "Maharashtra",
    "name": "Pabal",
    "lat": 18.83083333,
    "lng": 74.05277778
  },
  {
    "state": "Maharashtra",
    "name": "Pachora",
    "lat": 20.66727,
    "lng": 75.35305
  },
  {
    "state": "Maharashtra",
    "name": "Paithan",
    "lat": 19.47506,
    "lng": 75.38558
  },
  {
    "state": "Maharashtra",
    "name": "Palghar",
    "lat": 19.69693,
    "lng": 72.76543
  },
  {
    "state": "Maharashtra",
    "name": "Palso",
    "lat": 20.76666667,
    "lng": 77.23333333
  },
  {
    "state": "Maharashtra",
    "name": "Panchgani",
    "lat": 17.92449,
    "lng": 73.8008
  },
  {
    "state": "Maharashtra",
    "name": "Pandharpur",
    "lat": 17.67924,
    "lng": 75.33098
  },
  {
    "state": "Maharashtra",
    "name": "Pandhurli",
    "lat": 19.829052,
    "lng": 73.854745
  },
  {
    "state": "Maharashtra",
    "name": "Panhala",
    "lat": 16.8121,
    "lng": 74.11007
  },
  {
    "state": "Maharashtra",
    "name": "Panvel",
    "lat": 18.98878,
    "lng": 73.11013
  },
  {
    "state": "Maharashtra",
    "name": "Parbhani",
    "lat": 19.5,
    "lng": 76.75
  },
  {
    "state": "Maharashtra",
    "name": "Parel",
    "lat": 18.99,
    "lng": 72.84
  },
  {
    "state": "Maharashtra",
    "name": "Parli Vaijnath",
    "lat": 18.85057,
    "lng": 76.53163
  },
  {
    "state": "Maharashtra",
    "name": "Parner",
    "lat": 19.003,
    "lng": 74.438
  },
  {
    "state": "Maharashtra",
    "name": "Parola",
    "lat": 20.88098,
    "lng": 75.11937
  },
  {
    "state": "Maharashtra",
    "name": "Parseoni",
    "lat": 21.38333333,
    "lng": 79.15
  },
  {
    "state": "Maharashtra",
    "name": "Partur",
    "lat": 19.59925,
    "lng": 76.21541
  },
  {
    "state": "Maharashtra",
    "name": "Patan",
    "lat": 17.37513,
    "lng": 73.90143
  },
  {
    "state": "Maharashtra",
    "name": "Pathardi",
    "lat": 19.17279,
    "lng": 75.17425
  },
  {
    "state": "Maharashtra",
    "name": "Pathri",
    "lat": 19.2588,
    "lng": 76.43412
  },
  {
    "state": "Maharashtra",
    "name": "Patur",
    "lat": 20.46093,
    "lng": 76.93725
  },
  {
    "state": "Maharashtra",
    "name": "Paturda",
    "lat": 20.95,
    "lng": 76.71666667
  },
  {
    "state": "Maharashtra",
    "name": "Paud",
    "lat": 18.52416667,
    "lng": 73.61583333
  },
  {
    "state": "Maharashtra",
    "name": "Pauni",
    "lat": 20.78,
    "lng": 79.63
  },
  {
    "state": "Maharashtra",
    "name": "Pawni",
    "lat": 20.79229,
    "lng": 79.63644
  },
  {
    "state": "Maharashtra",
    "name": "Pedgaon",
    "lat": 18.51166667,
    "lng": 74.7075
  },
  {
    "state": "Maharashtra",
    "name": "Peint",
    "lat": 20.25844722,
    "lng": 73.50305278
  },
  {
    "state": "Maharashtra",
    "name": "Pen",
    "lat": 18.73734,
    "lng": 73.09603
  },
  {
    "state": "Maharashtra",
    "name": "Phaltan",
    "lat": 17.99113,
    "lng": 74.43177
  },
  {
    "state": "Maharashtra",
    "name": "Phulambri",
    "lat": 20.1,
    "lng": 75.41666667
  },
  {
    "state": "Maharashtra",
    "name": "Piliv",
    "lat": 17.678842,
    "lng": 74.966412
  },
  {
    "state": "Maharashtra",
    "name": "Pimpalgaon Baswant",
    "lat": 20.16666667,
    "lng": 73.98333333
  },
  {
    "state": "Maharashtra",
    "name": "Pimpalgaon Raja",
    "lat": 20.71666667,
    "lng": 76.43333333
  },
  {
    "state": "Maharashtra",
    "name": "Pimpri",
    "lat": 18.62292,
    "lng": 73.80696
  },
  {
    "state": "Maharashtra",
    "name": "Pimpri-Chinchwad",
    "lat": 18.62777778,
    "lng": 73.81305556
  },
  {
    "state": "Maharashtra",
    "name": "Pipri",
    "lat": 19.79371,
    "lng": 75.53519
  },
  {
    "state": "Maharashtra",
    "name": "Powai",
    "lat": 19.1164,
    "lng": 72.90471
  },
  {
    "state": "Maharashtra",
    "name": "Prabhadevi",
    "lat": 19.016905,
    "lng": 72.828649
  },
  {
    "state": "Maharashtra",
    "name": "Prakasha",
    "lat": 21.51666667,
    "lng": 74.31666667
  },
  {
    "state": "Maharashtra",
    "name": "Pulgaon",
    "lat": 20.72204,
    "lng": 78.32056
  },
  {
    "state": "Maharashtra",
    "name": "Pune",
    "lat": 18.51957,
    "lng": 73.85535
  },
  {
    "state": "Maharashtra",
    "name": "Pune Division",
    "lat": 18.74673,
    "lng": 73.75465
  },
  {
    "state": "Maharashtra",
    "name": "Puntamba",
    "lat": 19.75,
    "lng": 74.63333333
  },
  {
    "state": "Maharashtra",
    "name": "Pural",
    "lat": 16.45,
    "lng": 73.36666667
  },
  {
    "state": "Maharashtra",
    "name": "Purna",
    "lat": 19.1817,
    "lng": 77.02566
  },
  {
    "state": "Maharashtra",
    "name": "Pusad",
    "lat": 19.91274,
    "lng": 77.57838
  },
  {
    "state": "Maharashtra",
    "name": "Radhanagari",
    "lat": 16.41388889,
    "lng": 73.99777778
  },
  {
    "state": "Maharashtra",
    "name": "Rahata",
    "lat": 19.71666667,
    "lng": 74.48333333
  },
  {
    "state": "Maharashtra",
    "name": "Rahimatpur",
    "lat": 17.5921,
    "lng": 74.19966
  },
  {
    "state": "Maharashtra",
    "name": "Rahuri",
    "lat": 19.39069,
    "lng": 74.64979
  },
  {
    "state": "Maharashtra",
    "name": "Raigarh",
    "lat": 18.57,
    "lng": 73.13
  },
  {
    "state": "Maharashtra",
    "name": "Raireshwar",
    "lat": 18.05,
    "lng": 73.73333333
  },
  {
    "state": "Maharashtra",
    "name": "Rajapur",
    "lat": 16.65679,
    "lng": 73.51701
  },
  {
    "state": "Maharashtra",
    "name": "Rajgurunagar",
    "lat": 18.86667,
    "lng": 73.9
  },
  {
    "state": "Maharashtra",
    "name": "Rajur",
    "lat": 20.11087,
    "lng": 78.89311
  },
  {
    "state": "Maharashtra",
    "name": "Rajura",
    "lat": 19.77947,
    "lng": 79.36459
  },
  {
    "state": "Maharashtra",
    "name": "Ralegaon",
    "lat": 20.25,
    "lng": 79.81
  },
  {
    "state": "Maharashtra",
    "name": "Ramewadi",
    "lat": 16.03333333,
    "lng": 74.35
  },
  {
    "state": "Maharashtra",
    "name": "Ramtek",
    "lat": 21.39562,
    "lng": 79.32725
  },
  {
    "state": "Maharashtra",
    "name": "Ratnagiri",
    "lat": 17,
    "lng": 73.5
  },
  {
    "state": "Maharashtra",
    "name": "Raver",
    "lat": 21.24757,
    "lng": 76.03509
  },
  {
    "state": "Maharashtra",
    "name": "Renapur",
    "lat": 18.51666667,
    "lng": 76.6
  },
  {
    "state": "Maharashtra",
    "name": "Renavi",
    "lat": 17.26972222,
    "lng": 74.61055556
  },
  {
    "state": "Maharashtra",
    "name": "Revadanda",
    "lat": 18.55363,
    "lng": 72.92559
  },
  {
    "state": "Maharashtra",
    "name": "Revdanda",
    "lat": 18.55,
    "lng": 72.93333333
  },
  {
    "state": "Maharashtra",
    "name": "Risod",
    "lat": 19.97671,
    "lng": 76.78799
  },
  {
    "state": "Maharashtra",
    "name": "Roha",
    "lat": 18.43687,
    "lng": 73.11964
  },
  {
    "state": "Maharashtra",
    "name": "Sailu",
    "lat": 19.47,
    "lng": 76.47
  },
  {
    "state": "Maharashtra",
    "name": "Sakol",
    "lat": 18.2825,
    "lng": 76.88444444
  },
  {
    "state": "Maharashtra",
    "name": "Sakoli",
    "lat": 21.08,
    "lng": 79.98
  },
  {
    "state": "Maharashtra",
    "name": "Sakri",
    "lat": 20.99027778,
    "lng": 74.31444444
  },
  {
    "state": "Maharashtra",
    "name": "Samudrapur",
    "lat": 20.65,
    "lng": 78.96666667
  },
  {
    "state": "Maharashtra",
    "name": "Sangameshwar",
    "lat": 17.18694444,
    "lng": 73.55305556
  },
  {
    "state": "Maharashtra",
    "name": "Sangamner",
    "lat": 19.56784,
    "lng": 74.21154
  },
  {
    "state": "Maharashtra",
    "name": "Sangli",
    "lat": 17.11202,
    "lng": 74.7699
  },
  {
    "state": "Maharashtra",
    "name": "Sangola",
    "lat": 17.43948,
    "lng": 75.19379
  },
  {
    "state": "Maharashtra",
    "name": "Sangole",
    "lat": 17.43944444,
    "lng": 75.19388889
  },
  {
    "state": "Maharashtra",
    "name": "Saoli",
    "lat": 20.08133056,
    "lng": 79.78286111
  },
  {
    "state": "Maharashtra",
    "name": "Saoner",
    "lat": 21.3851,
    "lng": 78.92155
  },
  {
    "state": "Maharashtra",
    "name": "Sarangkheda",
    "lat": 21.433273,
    "lng": 74.526421
  },
  {
    "state": "Maharashtra",
    "name": "Sasvad",
    "lat": 18.34351,
    "lng": 74.03102
  },
  {
    "state": "Maharashtra",
    "name": "Saswad",
    "lat": 18.55,
    "lng": 74
  },
  {
    "state": "Maharashtra",
    "name": "Satana",
    "lat": 20.59483,
    "lng": 74.20301
  },
  {
    "state": "Maharashtra",
    "name": "Satara",
    "lat": 17.68589,
    "lng": 73.99333
  },
  {
    "state": "Maharashtra",
    "name": "Satara Division",
    "lat": 17.72601,
    "lng": 74.06433
  },
  {
    "state": "Maharashtra",
    "name": "Satpati",
    "lat": 19.71666667,
    "lng": 72.7
  },
  {
    "state": "Maharashtra",
    "name": "Savantvadi",
    "lat": 15.90413,
    "lng": 73.82191
  },
  {
    "state": "Maharashtra",
    "name": "Savda",
    "lat": 21.15054,
    "lng": 75.88938
  },
  {
    "state": "Maharashtra",
    "name": "Savlaj",
    "lat": 17.1,
    "lng": 74.78
  },
  {
    "state": "Maharashtra",
    "name": "Sawantvadi",
    "lat": 16,
    "lng": 73.75
  },
  {
    "state": "Maharashtra",
    "name": "Selu",
    "lat": 19.45512,
    "lng": 76.44073
  },
  {
    "state": "Maharashtra",
    "name": "Sevagram",
    "lat": 20.73499167,
    "lng": 78.66256944
  },
  {
    "state": "Maharashtra",
    "name": "Sewri",
    "lat": 19,
    "lng": 72.86
  },
  {
    "state": "Maharashtra",
    "name": "Shahada",
    "lat": 21.54538,
    "lng": 74.47106
  },
  {
    "state": "Maharashtra",
    "name": "Shahapur",
    "lat": 19.45231,
    "lng": 73.32572
  },
  {
    "state": "Maharashtra",
    "name": "Shedbal",
    "lat": 16.68916667,
    "lng": 74.75425556
  },
  {
    "state": "Maharashtra",
    "name": "Shegaon",
    "lat": 20.7932,
    "lng": 76.69921
  },
  {
    "state": "Maharashtra",
    "name": "Shevgaon",
    "lat": 19.35,
    "lng": 75.23333333
  },
  {
    "state": "Maharashtra",
    "name": "Shikrapur",
    "lat": 18.69361111,
    "lng": 74.13805556
  },
  {
    "state": "Maharashtra",
    "name": "Shiraguppi",
    "lat": 16.61875,
    "lng": 74.70907
  },
  {
    "state": "Maharashtra",
    "name": "Shirala",
    "lat": 16.98401111,
    "lng": 74.12415278
  },
  {
    "state": "Maharashtra",
    "name": "Shirdi",
    "lat": 19.76616,
    "lng": 74.47738
  },
  {
    "state": "Maharashtra",
    "name": "Shirgaon",
    "lat": 19.69589,
    "lng": 72.71527
  },
  {
    "state": "Maharashtra",
    "name": "Shirol",
    "lat": 16.73333333,
    "lng": 74.6
  },
  {
    "state": "Maharashtra",
    "name": "Shirpur",
    "lat": 21.34821,
    "lng": 74.88035
  },
  {
    "state": "Maharashtra",
    "name": "Shirud",
    "lat": 20.71666667,
    "lng": 74.9
  },
  {
    "state": "Maharashtra",
    "name": "Shirwal",
    "lat": 18.15059,
    "lng": 73.97788
  },
  {
    "state": "Maharashtra",
    "name": "Shivaji Nagar",
    "lat": 18.53017,
    "lng": 73.85263
  },
  {
    "state": "Maharashtra",
    "name": "Shrigonda",
    "lat": 18.61527,
    "lng": 74.69895
  },
  {
    "state": "Maharashtra",
    "name": "Sillod",
    "lat": 20.30303,
    "lng": 75.65284
  },
  {
    "state": "Maharashtra",
    "name": "Sindewahi",
    "lat": 20.28333333,
    "lng": 79.65
  },
  {
    "state": "Maharashtra",
    "name": "Sindhudurg",
    "lat": 16.17,
    "lng": 73.7
  },
  {
    "state": "Maharashtra",
    "name": "Sindi",
    "lat": 20.80509,
    "lng": 78.88752
  },
  {
    "state": "Maharashtra",
    "name": "Sindkheda",
    "lat": 21.26666667,
    "lng": 74.73333333
  },
  {
    "state": "Maharashtra",
    "name": "Sinnar",
    "lat": 19.84505,
    "lng": 73.99866
  },
  {
    "state": "Maharashtra",
    "name": "Sironcha",
    "lat": 18.83,
    "lng": 79.96
  },
  {
    "state": "Maharashtra",
    "name": "Sirur",
    "lat": 18.8276,
    "lng": 74.37475
  },
  {
    "state": "Maharashtra",
    "name": "Solapur",
    "lat": 17.75,
    "lng": 75.5
  },
  {
    "state": "Maharashtra",
    "name": "Sonala",
    "lat": 21.11666667,
    "lng": 76.73333333
  },
  {
    "state": "Maharashtra",
    "name": "Sonegaon",
    "lat": 20.62915,
    "lng": 78.69207
  },
  {
    "state": "Maharashtra",
    "name": "Songir",
    "lat": 21.08333333,
    "lng": 74.78333333
  },
  {
    "state": "Maharashtra",
    "name": "Sonvad",
    "lat": 21.08333333,
    "lng": 75.35
  },
  {
    "state": "Maharashtra",
    "name": "Soygaon",
    "lat": 20.59606,
    "lng": 75.61765
  },
  {
    "state": "Maharashtra",
    "name": "Srivardhan",
    "lat": 18.04592,
    "lng": 73.01552
  },
  {
    "state": "Maharashtra",
    "name": "Surgana",
    "lat": 20.55956,
    "lng": 73.63747
  },
  {
    "state": "Maharashtra",
    "name": "Taklibhan",
    "lat": 19.6167,
    "lng": 74.8
  },
  {
    "state": "Maharashtra",
    "name": "Talbid",
    "lat": 17.35,
    "lng": 74.13
  },
  {
    "state": "Maharashtra",
    "name": "Talegaon Dabhade",
    "lat": 18.73502,
    "lng": 73.67561
  },
  {
    "state": "Maharashtra",
    "name": "Talegaon Dhamdhere",
    "lat": 18.6678,
    "lng": 74.1536
  },
  {
    "state": "Maharashtra",
    "name": "Taloda",
    "lat": 21.56128,
    "lng": 74.21238
  },
  {
    "state": "Maharashtra",
    "name": "Talode",
    "lat": 21.56074167,
    "lng": 74.83
  },
  {
    "state": "Maharashtra",
    "name": "Tarapur",
    "lat": 19.86499,
    "lng": 72.68426
  },
  {
    "state": "Maharashtra",
    "name": "Tardeo",
    "lat": 18.97,
    "lng": 72.81
  },
  {
    "state": "Maharashtra",
    "name": "Tasgaon",
    "lat": 17.037,
    "lng": 74.60171
  },
  {
    "state": "Maharashtra",
    "name": "Telhara",
    "lat": 21.02694,
    "lng": 76.83889
  },
  {
    "state": "Maharashtra",
    "name": "Thalner",
    "lat": 21.25,
    "lng": 74.9667
  },
  {
    "state": "Maharashtra",
    "name": "Thane",
    "lat": 19.33333,
    "lng": 73.25
  },
  {
    "state": "Maharashtra",
    "name": "Trimbak",
    "lat": 19.93268,
    "lng": 73.52907
  },
  {
    "state": "Maharashtra",
    "name": "Trombay",
    "lat": 19,
    "lng": 72.9
  },
  {
    "state": "Maharashtra",
    "name": "Tuljapur",
    "lat": 18.00804,
    "lng": 76.07011
  },
  {
    "state": "Maharashtra",
    "name": "Tumsar",
    "lat": 21.38333,
    "lng": 79.73333
  },
  {
    "state": "Maharashtra",
    "name": "Udgir",
    "lat": 18.39258,
    "lng": 77.11756
  },
  {
    "state": "Maharashtra",
    "name": "Ulhasnagar",
    "lat": 19.21667,
    "lng": 73.15
  },
  {
    "state": "Maharashtra",
    "name": "Umarga",
    "lat": 17.83841,
    "lng": 76.62331
  },
  {
    "state": "Maharashtra",
    "name": "Umarkhed",
    "lat": 19.60144,
    "lng": 77.68878
  },
  {
    "state": "Maharashtra",
    "name": "Umred",
    "lat": 20.85396,
    "lng": 79.32466
  },
  {
    "state": "Maharashtra",
    "name": "Uran",
    "lat": 18.87813,
    "lng": 72.93924
  },
  {
    "state": "Maharashtra",
    "name": "Uruli Kanchan",
    "lat": 18.48333333,
    "lng": 74.13333333
  },
  {
    "state": "Maharashtra",
    "name": "Vada",
    "lat": 19.65347,
    "lng": 73.14811
  },
  {
    "state": "Maharashtra",
    "name": "Vadgaon",
    "lat": 18.7486,
    "lng": 73.641
  },
  {
    "state": "Maharashtra",
    "name": "Vadner",
    "lat": 20.25,
    "lng": 74.0333
  },
  {
    "state": "Maharashtra",
    "name": "Vaijapur",
    "lat": 19.92672,
    "lng": 74.7275
  },
  {
    "state": "Maharashtra",
    "name": "Vairag",
    "lat": 18.05,
    "lng": 75.8
  },
  {
    "state": "Maharashtra",
    "name": "Valsang",
    "lat": 17.6,
    "lng": 76.0833
  },
  {
    "state": "Maharashtra",
    "name": "Vangaon",
    "lat": 19.86666667,
    "lng": 72.75
  },
  {
    "state": "Maharashtra",
    "name": "Varangaon",
    "lat": 21.01767,
    "lng": 75.91042
  },
  {
    "state": "Maharashtra",
    "name": "Vashi",
    "lat": 19.08,
    "lng": 73.01
  },
  {
    "state": "Maharashtra",
    "name": "Vasind",
    "lat": 19.40844,
    "lng": 73.26285
  },
  {
    "state": "Maharashtra",
    "name": "Vatul",
    "lat": 16.75,
    "lng": 73.6
  },
  {
    "state": "Maharashtra",
    "name": "Velneshwar",
    "lat": 17.3833,
    "lng": 73.2
  },
  {
    "state": "Maharashtra",
    "name": "Vengurla",
    "lat": 15.86125,
    "lng": 73.63182
  },
  {
    "state": "Maharashtra",
    "name": "Vijaydurg",
    "lat": 16.5667,
    "lng": 73.3333
  },
  {
    "state": "Maharashtra",
    "name": "Vikhroli",
    "lat": 19.11,
    "lng": 72.94
  },
  {
    "state": "Maharashtra",
    "name": "Vile Parle",
    "lat": 19.1,
    "lng": 72.83
  },
  {
    "state": "Maharashtra",
    "name": "Vinchur",
    "lat": 20.11666667,
    "lng": 74.28333333
  },
  {
    "state": "Maharashtra",
    "name": "Virar",
    "lat": 19.45591,
    "lng": 72.81136
  },
  {
    "state": "Maharashtra",
    "name": "Vite",
    "lat": 17.27343,
    "lng": 74.53792
  },
  {
    "state": "Maharashtra",
    "name": "Wadala",
    "lat": 19.02163056,
    "lng": 72.86458889
  },
  {
    "state": "Maharashtra",
    "name": "Wadgaon",
    "lat": 18.7392,
    "lng": 73.63945
  },
  {
    "state": "Maharashtra",
    "name": "Wadner",
    "lat": 20.84972222,
    "lng": 76.33333333
  },
  {
    "state": "Maharashtra",
    "name": "Wadwani",
    "lat": 18.98333333,
    "lng": 76.05
  },
  {
    "state": "Maharashtra",
    "name": "Wagholi",
    "lat": 17.9,
    "lng": 74.083
  },
  {
    "state": "Maharashtra",
    "name": "Wai",
    "lat": 17.95276,
    "lng": 73.89058
  },
  {
    "state": "Maharashtra",
    "name": "Wakad",
    "lat": 18.5993,
    "lng": 73.7625
  },
  {
    "state": "Maharashtra",
    "name": "Walgaon",
    "lat": 20.9989,
    "lng": 77.7064
  },
  {
    "state": "Maharashtra",
    "name": "Walki",
    "lat": 18.95,
    "lng": 74.75
  },
  {
    "state": "Maharashtra",
    "name": "Wani",
    "lat": 20.05507,
    "lng": 78.95313
  },
  {
    "state": "Maharashtra",
    "name": "Wardha",
    "lat": 20.73933,
    "lng": 78.59784
  },
  {
    "state": "Maharashtra",
    "name": "Warora",
    "lat": 20.22885,
    "lng": 79.00277
  },
  {
    "state": "Maharashtra",
    "name": "Warud",
    "lat": 21.47101,
    "lng": 78.26965
  },
  {
    "state": "Maharashtra",
    "name": "Washim",
    "lat": 20.2,
    "lng": 77.2
  },
  {
    "state": "Maharashtra",
    "name": "Worli",
    "lat": 19,
    "lng": 72.815
  },
  {
    "state": "Maharashtra",
    "name": "Yaval",
    "lat": 21.16772,
    "lng": 75.69762
  },
  {
    "state": "Maharashtra",
    "name": "Yavatmal",
    "lat": 20.15,
    "lng": 78.35
  },
  {
    "state": "Maharashtra",
    "name": "Yeola",
    "lat": 20.0424,
    "lng": 74.48944
  },
  {
    "state": "Manipur",
    "name": "Bishnupur",
    "lat": 24.60769,
    "lng": 93.77998
  },
  {
    "state": "Manipur",
    "name": "Churachandpur",
    "lat": 24.33333,
    "lng": 93.68333
  },
  {
    "state": "Manipur",
    "name": "Imphal",
    "lat": 24.80805,
    "lng": 93.9442
  },
  {
    "state": "Manipur",
    "name": "Kakching",
    "lat": 24.4982,
    "lng": 93.98126
  },
  {
    "state": "Manipur",
    "name": "Mayang Imphal",
    "lat": 24.60998,
    "lng": 93.88873
  },
  {
    "state": "Manipur",
    "name": "Moirang",
    "lat": 24.4975,
    "lng": 93.77791
  },
  {
    "state": "Manipur",
    "name": "Phek",
    "lat": 25.66667,
    "lng": 94.5
  },
  {
    "state": "Manipur",
    "name": "Senapati",
    "lat": 25.26705,
    "lng": 94.02237
  },
  {
    "state": "Manipur",
    "name": "Tamenglong",
    "lat": 24.97548,
    "lng": 93.51563
  },
  {
    "state": "Manipur",
    "name": "Thoubal",
    "lat": 24.62205,
    "lng": 94.01001
  },
  {
    "state": "Manipur",
    "name": "Ukhrul",
    "lat": 25.04828,
    "lng": 94.35883
  },
  {
    "state": "Manipur",
    "name": "Wangjing",
    "lat": 24.58921,
    "lng": 94.06386
  },
  {
    "state": "Manipur",
    "name": "Yairipok",
    "lat": 24.67792,
    "lng": 94.04767
  },
  {
    "state": "Meghalaya",
    "name": "Cherrapunji",
    "lat": 25.30089,
    "lng": 91.69619
  },
  {
    "state": "Meghalaya",
    "name": "East Garo Hills",
    "lat": 25.61372,
    "lng": 90.62426
  },
  {
    "state": "Meghalaya",
    "name": "East Jaintia Hills",
    "lat": 25.35976,
    "lng": 92.3668
  },
  {
    "state": "Meghalaya",
    "name": "East Khasi Hills",
    "lat": 25.3805,
    "lng": 91.78905
  },
  {
    "state": "Meghalaya",
    "name": "Mairang",
    "lat": 25.56165,
    "lng": 91.63602
  },
  {
    "state": "Meghalaya",
    "name": "Mankachar",
    "lat": 25.53347,
    "lng": 89.86373
  },
  {
    "state": "Meghalaya",
    "name": "Nongpoh",
    "lat": 25.9023,
    "lng": 91.87694
  },
  {
    "state": "Meghalaya",
    "name": "Nongstoin",
    "lat": 25.51704,
    "lng": 91.26484
  },
  {
    "state": "Meghalaya",
    "name": "North Garo Hills",
    "lat": 25.89682,
    "lng": 90.61602
  },
  {
    "state": "Meghalaya",
    "name": "Ri-Bhoi",
    "lat": 25.88997,
    "lng": 91.82707
  },
  {
    "state": "Meghalaya",
    "name": "Shillong",
    "lat": 25.56892,
    "lng": 91.88313
  },
  {
    "state": "Meghalaya",
    "name": "South Garo Hills",
    "lat": 25.30162,
    "lng": 90.5853
  },
  {
    "state": "Meghalaya",
    "name": "South West Garo Hills",
    "lat": 25.47245,
    "lng": 89.93399
  },
  {
    "state": "Meghalaya",
    "name": "South West Khasi Hills",
    "lat": 25.32155,
    "lng": 91.29462
  },
  {
    "state": "Meghalaya",
    "name": "Tura",
    "lat": 25.51421,
    "lng": 90.20239
  },
  {
    "state": "Meghalaya",
    "name": "West Garo Hills",
    "lat": 25.56794,
    "lng": 90.22447
  },
  {
    "state": "Meghalaya",
    "name": "West Jaintia Hills",
    "lat": 25.5,
    "lng": 92.25
  },
  {
    "state": "Meghalaya",
    "name": "West Khasi Hills",
    "lat": 25.54776,
    "lng": 91.26957
  },
  {
    "state": "Mizoram",
    "name": "Aizawl",
    "lat": 23.8,
    "lng": 92.9
  },
  {
    "state": "Mizoram",
    "name": "Champhai",
    "lat": 23.47444,
    "lng": 93.32556
  },
  {
    "state": "Mizoram",
    "name": "Darlawn",
    "lat": 24.01336,
    "lng": 92.92439
  },
  {
    "state": "Mizoram",
    "name": "Khawhai",
    "lat": 23.37807,
    "lng": 93.12797
  },
  {
    "state": "Mizoram",
    "name": "Kolasib",
    "lat": 24.22388,
    "lng": 92.67869
  },
  {
    "state": "Mizoram",
    "name": "Kolasib district",
    "lat": 24.22215,
    "lng": 92.67697
  },
  {
    "state": "Mizoram",
    "name": "Lawngtlai",
    "lat": 22.53,
    "lng": 92.9
  },
  {
    "state": "Mizoram",
    "name": "Lunglei",
    "lat": 22.9,
    "lng": 92.75
  },
  {
    "state": "Mizoram",
    "name": "Mamit",
    "lat": 23.78492,
    "lng": 92.46939
  },
  {
    "state": "Mizoram",
    "name": "North Vanlaiphai",
    "lat": 23.13227,
    "lng": 93.06532
  },
  {
    "state": "Mizoram",
    "name": "Saiha",
    "lat": 22.49183,
    "lng": 92.98143
  },
  {
    "state": "Mizoram",
    "name": "Sairang",
    "lat": 23.81034,
    "lng": 92.65226
  },
  {
    "state": "Mizoram",
    "name": "Saitlaw",
    "lat": 23.97187,
    "lng": 92.57454
  },
  {
    "state": "Mizoram",
    "name": "Serchhip",
    "lat": 23.28172,
    "lng": 92.90039
  },
  {
    "state": "Mizoram",
    "name": "Thenzawl",
    "lat": 23.31667,
    "lng": 92.75
  },
  {
    "state": "Nagaland",
    "name": "Dimapur",
    "lat": 25.77852,
    "lng": 93.78508
  },
  {
    "state": "Nagaland",
    "name": "Kohima",
    "lat": 25.67467,
    "lng": 94.11099
  },
  {
    "state": "Nagaland",
    "name": "Mokokchung",
    "lat": 26.31393,
    "lng": 94.51675
  },
  {
    "state": "Nagaland",
    "name": "Mon",
    "lat": 26.75,
    "lng": 94.83333
  },
  {
    "state": "Nagaland",
    "name": "Peren",
    "lat": 25.51276,
    "lng": 93.73716
  },
  {
    "state": "Nagaland",
    "name": "Phek",
    "lat": 25.75,
    "lng": 94.5
  },
  {
    "state": "Nagaland",
    "name": "Tuensang",
    "lat": 26.26704,
    "lng": 94.82415
  },
  {
    "state": "Nagaland",
    "name": "Tuensang District",
    "lat": 26.25,
    "lng": 94.75
  },
  {
    "state": "Nagaland",
    "name": "Wokha",
    "lat": 26.16667,
    "lng": 94.25
  },
  {
    "state": "Nagaland",
    "name": "Zunheboto",
    "lat": 26,
    "lng": 94.5
  },
  {
    "state": "Odisha",
    "name": "Angul",
    "lat": 20.84089,
    "lng": 85.10192
  },
  {
    "state": "Odisha",
    "name": "Angul District",
    "lat": 20.84903,
    "lng": 85.06079
  },
  {
    "state": "Odisha",
    "name": "Asika",
    "lat": 19.61114,
    "lng": 84.65998
  },
  {
    "state": "Odisha",
    "name": "Athagarh",
    "lat": 20.51999,
    "lng": 85.62965
  },
  {
    "state": "Odisha",
    "name": "Bada Barabil",
    "lat": 22.11186,
    "lng": 85.38684
  },
  {
    "state": "Odisha",
    "name": "Balangir",
    "lat": 20.75,
    "lng": 83.25
  },
  {
    "state": "Odisha",
    "name": "Balasore",
    "lat": 21.49266,
    "lng": 86.93348
  },
  {
    "state": "Odisha",
    "name": "Baleshwar",
    "lat": 21.5,
    "lng": 86.75
  },
  {
    "state": "Odisha",
    "name": "Balimila",
    "lat": 18.25167,
    "lng": 82.10659
  },
  {
    "state": "Odisha",
    "name": "Balugaon",
    "lat": 20.17838,
    "lng": 85.11327
  },
  {
    "state": "Odisha",
    "name": "Banapur",
    "lat": 19.77889,
    "lng": 85.17033
  },
  {
    "state": "Odisha",
    "name": "Banki",
    "lat": 20.37912,
    "lng": 85.52953
  },
  {
    "state": "Odisha",
    "name": "Banposh",
    "lat": 22.24834,
    "lng": 84.81044
  },
  {
    "state": "Odisha",
    "name": "Baragarh",
    "lat": 21.33333,
    "lng": 83.61667
  },
  {
    "state": "Odisha",
    "name": "Barbil",
    "lat": 22.10194,
    "lng": 85.37752
  },
  {
    "state": "Odisha",
    "name": "Bargarh",
    "lat": 21.33348,
    "lng": 83.61905
  },
  {
    "state": "Odisha",
    "name": "Barpali",
    "lat": 21.19005,
    "lng": 83.58721
  },
  {
    "state": "Odisha",
    "name": "Basudebpur",
    "lat": 21.11974,
    "lng": 86.72896
  },
  {
    "state": "Odisha",
    "name": "Baud",
    "lat": 20.83773,
    "lng": 84.32618
  },
  {
    "state": "Odisha",
    "name": "Baudh",
    "lat": 20.833,
    "lng": 84.333
  },
  {
    "state": "Odisha",
    "name": "Belaguntha",
    "lat": 19.88249,
    "lng": 84.63801
  },
  {
    "state": "Odisha",
    "name": "Bhadrak",
    "lat": 21,
    "lng": 86.6
  },
  {
    "state": "Odisha",
    "name": "Bhadrakh",
    "lat": 21.05447,
    "lng": 86.5156
  },
  {
    "state": "Odisha",
    "name": "Bhanjanagar",
    "lat": 19.92719,
    "lng": 84.58201
  },
  {
    "state": "Odisha",
    "name": "Bhawanipatna",
    "lat": 19.90717,
    "lng": 83.16697
  },
  {
    "state": "Odisha",
    "name": "Bhuban",
    "lat": 20.88197,
    "lng": 85.83334
  },
  {
    "state": "Odisha",
    "name": "Bhubaneshwar",
    "lat": 20.27241,
    "lng": 85.83385
  },
  {
    "state": "Odisha",
    "name": "Binka",
    "lat": 21.02626,
    "lng": 83.81197
  },
  {
    "state": "Odisha",
    "name": "Birmitrapur",
    "lat": 22.4,
    "lng": 84.76667
  },
  {
    "state": "Odisha",
    "name": "Bolanikhodan",
    "lat": 22.11312,
    "lng": 85.33645
  },
  {
    "state": "Odisha",
    "name": "Brahmapur",
    "lat": 19.31151,
    "lng": 84.7929
  },
  {
    "state": "Odisha",
    "name": "Brajarajnagar",
    "lat": 21.81667,
    "lng": 83.91667
  },
  {
    "state": "Odisha",
    "name": "Buguda",
    "lat": 19.80806,
    "lng": 84.79084
  },
  {
    "state": "Odisha",
    "name": "Burla",
    "lat": 21.50976,
    "lng": 83.87259
  },
  {
    "state": "Odisha",
    "name": "Champua",
    "lat": 22.06734,
    "lng": 85.66463
  },
  {
    "state": "Odisha",
    "name": "Chandbali",
    "lat": 20.77519,
    "lng": 86.74139
  },
  {
    "state": "Odisha",
    "name": "Chatrapur",
    "lat": 19.35574,
    "lng": 84.98359
  },
  {
    "state": "Odisha",
    "name": "Chikitigarh",
    "lat": 19.20233,
    "lng": 84.6145
  },
  {
    "state": "Odisha",
    "name": "Chittarkonda",
    "lat": 18.12533,
    "lng": 82.1089
  },
  {
    "state": "Odisha",
    "name": "Cuttack",
    "lat": 20.5,
    "lng": 86.25
  },
  {
    "state": "Odisha",
    "name": "Daitari",
    "lat": 21.1,
    "lng": 85.75
  },
  {
    "state": "Odisha",
    "name": "Deogarh",
    "lat": 21.53827,
    "lng": 84.73337
  },
  {
    "state": "Odisha",
    "name": "Dhenkanal",
    "lat": 20.75,
    "lng": 85.5
  },
  {
    "state": "Odisha",
    "name": "Digapahandi",
    "lat": 19.37275,
    "lng": 84.57184
  },
  {
    "state": "Odisha",
    "name": "Gajapati",
    "lat": 18.91,
    "lng": 84.2
  },
  {
    "state": "Odisha",
    "name": "Ganjam",
    "lat": 19.38705,
    "lng": 85.05079
  },
  {
    "state": "Odisha",
    "name": "Gopalpur",
    "lat": 19.25861,
    "lng": 84.90517
  },
  {
    "state": "Odisha",
    "name": "Gudari",
    "lat": 19.34762,
    "lng": 83.78128
  },
  {
    "state": "Odisha",
    "name": "Gunupur",
    "lat": 19.0804,
    "lng": 83.80879
  },
  {
    "state": "Odisha",
    "name": "Hinjilikatu",
    "lat": 19.48166,
    "lng": 84.74489
  },
  {
    "state": "Odisha",
    "name": "Hirakud",
    "lat": 21.52502,
    "lng": 83.87275
  },
  {
    "state": "Odisha",
    "name": "Jagatsinghapur",
    "lat": 20.2557,
    "lng": 86.17112
  },
  {
    "state": "Odisha",
    "name": "Jagatsinghpur",
    "lat": 20.2,
    "lng": 86.3
  },
  {
    "state": "Odisha",
    "name": "Jajpur",
    "lat": 20.84149,
    "lng": 86.31237
  },
  {
    "state": "Odisha",
    "name": "Jaleshwar",
    "lat": 21.80176,
    "lng": 87.2225
  },
  {
    "state": "Odisha",
    "name": "Jatani",
    "lat": 20.15975,
    "lng": 85.70742
  },
  {
    "state": "Odisha",
    "name": "Jeypore",
    "lat": 18.8563,
    "lng": 82.5716
  },
  {
    "state": "Odisha",
    "name": "Jharsuguda",
    "lat": 21.85531,
    "lng": 84.00698
  },
  {
    "state": "Odisha",
    "name": "Jharsuguda District",
    "lat": 21.85,
    "lng": 84
  },
  {
    "state": "Odisha",
    "name": "Kaintragarh",
    "lat": 20.72115,
    "lng": 84.53514
  },
  {
    "state": "Odisha",
    "name": "Kalahandi",
    "lat": 19.75,
    "lng": 83
  },
  {
    "state": "Odisha",
    "name": "Kamakhyanagar",
    "lat": 20.93385,
    "lng": 85.54489
  },
  {
    "state": "Odisha",
    "name": "Kandhamal",
    "lat": 20.3,
    "lng": 84
  },
  {
    "state": "Odisha",
    "name": "Kantabanji",
    "lat": 20.46709,
    "lng": 82.92042
  },
  {
    "state": "Odisha",
    "name": "Kantilo",
    "lat": 20.36152,
    "lng": 85.19212
  },
  {
    "state": "Odisha",
    "name": "Kendrapara",
    "lat": 20.5,
    "lng": 86.5
  },
  {
    "state": "Odisha",
    "name": "Kendraparha",
    "lat": 20.50166,
    "lng": 86.42227
  },
  {
    "state": "Odisha",
    "name": "Kendujhar",
    "lat": 21.5,
    "lng": 85.5
  },
  {
    "state": "Odisha",
    "name": "Kesinga",
    "lat": 20.18778,
    "lng": 83.21949
  },
  {
    "state": "Odisha",
    "name": "Khallikot",
    "lat": 19.60908,
    "lng": 85.08609
  },
  {
    "state": "Odisha",
    "name": "Kharhial",
    "lat": 20.28845,
    "lng": 82.7606
  },
  {
    "state": "Odisha",
    "name": "Khordha",
    "lat": 20.2,
    "lng": 85.6
  },
  {
    "state": "Odisha",
    "name": "Khurda",
    "lat": 20.18268,
    "lng": 85.61629
  },
  {
    "state": "Odisha",
    "name": "Kiri Buru",
    "lat": 22.08333,
    "lng": 85.35
  },
  {
    "state": "Odisha",
    "name": "Kodala",
    "lat": 19.62425,
    "lng": 84.94075
  },
  {
    "state": "Odisha",
    "name": "Konarka",
    "lat": 19.89758,
    "lng": 86.11413
  },
  {
    "state": "Odisha",
    "name": "Koraput",
    "lat": 19,
    "lng": 83
  },
  {
    "state": "Odisha",
    "name": "Kuchaiburi",
    "lat": 22.26675,
    "lng": 86.17385
  },
  {
    "state": "Odisha",
    "name": "Kuchinda",
    "lat": 21.74356,
    "lng": 84.34848
  },
  {
    "state": "Odisha",
    "name": "Malakanagiri",
    "lat": 18.36428,
    "lng": 81.888
  },
  {
    "state": "Odisha",
    "name": "Malkangiri",
    "lat": 18.25,
    "lng": 81.95
  },
  {
    "state": "Odisha",
    "name": "Mayurbhanj",
    "lat": 21.75,
    "lng": 86.5
  },
  {
    "state": "Odisha",
    "name": "Nabarangpur",
    "lat": 19.2333,
    "lng": 82.55
  },
  {
    "state": "Odisha",
    "name": "Nayagarh",
    "lat": 20.12882,
    "lng": 85.09626
  },
  {
    "state": "Odisha",
    "name": "Nayagarh District",
    "lat": 20.13,
    "lng": 85.1
  },
  {
    "state": "Odisha",
    "name": "Nilgiri",
    "lat": 21.46235,
    "lng": 86.76794
  },
  {
    "state": "Odisha",
    "name": "Nimaparha",
    "lat": 20.05756,
    "lng": 86.00436
  },
  {
    "state": "Odisha",
    "name": "Nowrangapur",
    "lat": 19.23114,
    "lng": 82.54826
  },
  {
    "state": "Odisha",
    "name": "Nuapada",
    "lat": 20.6,
    "lng": 82.5
  },
  {
    "state": "Odisha",
    "name": "Padampur",
    "lat": 20.99932,
    "lng": 83.06325
  },
  {
    "state": "Odisha",
    "name": "Paradip Garh",
    "lat": 20.31641,
    "lng": 86.6085
  },
  {
    "state": "Odisha",
    "name": "Patamundai",
    "lat": 20.57806,
    "lng": 86.56063
  },
  {
    "state": "Odisha",
    "name": "Patnagarh",
    "lat": 20.70833,
    "lng": 83.13263
  },
  {
    "state": "Odisha",
    "name": "Phulbani",
    "lat": 20.48101,
    "lng": 84.23063
  },
  {
    "state": "Odisha",
    "name": "Pipili",
    "lat": 20.11357,
    "lng": 85.83147
  },
  {
    "state": "Odisha",
    "name": "Polasara",
    "lat": 19.69386,
    "lng": 84.81401
  },
  {
    "state": "Odisha",
    "name": "Puri",
    "lat": 19.9,
    "lng": 85.6
  },
  {
    "state": "Odisha",
    "name": "Purushottampur",
    "lat": 19.52024,
    "lng": 84.88514
  },
  {
    "state": "Odisha",
    "name": "Rambha",
    "lat": 19.51667,
    "lng": 85.1
  },
  {
    "state": "Odisha",
    "name": "Raurkela",
    "lat": 22.22496,
    "lng": 84.86414
  },
  {
    "state": "Odisha",
    "name": "Rayagada",
    "lat": 19.4,
    "lng": 83.5
  },
  {
    "state": "Odisha",
    "name": "Remuna",
    "lat": 21.52798,
    "lng": 86.87156
  },
  {
    "state": "Odisha",
    "name": "Rengali",
    "lat": 21.64602,
    "lng": 84.05311
  },
  {
    "state": "Odisha",
    "name": "Sambalpur",
    "lat": 21.4,
    "lng": 83.88333
  },
  {
    "state": "Odisha",
    "name": "Sonepur",
    "lat": 20.83333,
    "lng": 83.91667
  },
  {
    "state": "Odisha",
    "name": "Sorada",
    "lat": 19.76082,
    "lng": 84.42997
  },
  {
    "state": "Odisha",
    "name": "Soro",
    "lat": 21.27851,
    "lng": 86.68833
  },
  {
    "state": "Odisha",
    "name": "Subarnapur",
    "lat": 20.93154,
    "lng": 83.82486
  },
  {
    "state": "Odisha",
    "name": "Sundargarh",
    "lat": 22.25,
    "lng": 84.5
  },
  {
    "state": "Odisha",
    "name": "Talcher",
    "lat": 20.94927,
    "lng": 85.23354
  },
  {
    "state": "Odisha",
    "name": "Tarabha",
    "lat": 20.73252,
    "lng": 83.67443
  },
  {
    "state": "Odisha",
    "name": "Titlagarh",
    "lat": 20.28961,
    "lng": 83.15233
  },
  {
    "state": "Odisha",
    "name": "Udayagiri",
    "lat": 20.12416,
    "lng": 84.36869
  },
  {
    "state": "Puducherry",
    "name": "Karaikal",
    "lat": 10.92209,
    "lng": 79.83353
  },
  {
    "state": "Puducherry",
    "name": "Mahe",
    "lat": 11.7,
    "lng": 75.53333
  },
  {
    "state": "Puducherry",
    "name": "Yanam",
    "lat": 16.73463,
    "lng": 82.21773
  },
  {
    "state": "Punjab",
    "name": "Abohar",
    "lat": 30.14453,
    "lng": 74.19552
  },
  {
    "state": "Punjab",
    "name": "Adampur",
    "lat": 31.43224,
    "lng": 75.71484
  },
  {
    "state": "Punjab",
    "name": "Ajitgarh",
    "lat": 30.65,
    "lng": 76.7
  },
  {
    "state": "Punjab",
    "name": "Ajnala",
    "lat": 31.84473,
    "lng": 74.76295
  },
  {
    "state": "Punjab",
    "name": "Akalgarh",
    "lat": 29.82074,
    "lng": 75.89078
  },
  {
    "state": "Punjab",
    "name": "Alawalpur",
    "lat": 31.43161,
    "lng": 75.65614
  },
  {
    "state": "Punjab",
    "name": "Amloh",
    "lat": 30.60837,
    "lng": 76.23199
  },
  {
    "state": "Punjab",
    "name": "Amritsar",
    "lat": 31.67,
    "lng": 74.84
  },
  {
    "state": "Punjab",
    "name": "Anandpur Sahib",
    "lat": 31.23926,
    "lng": 76.50253
  },
  {
    "state": "Punjab",
    "name": "Badhni Kalan",
    "lat": 30.6813,
    "lng": 75.29087
  },
  {
    "state": "Punjab",
    "name": "Bagha Purana",
    "lat": 30.68809,
    "lng": 75.09838
  },
  {
    "state": "Punjab",
    "name": "Bakloh",
    "lat": 32.47939,
    "lng": 75.91874
  },
  {
    "state": "Punjab",
    "name": "Balachor",
    "lat": 31.06062,
    "lng": 76.30166
  },
  {
    "state": "Punjab",
    "name": "Banga",
    "lat": 31.18874,
    "lng": 75.99495
  },
  {
    "state": "Punjab",
    "name": "Banur",
    "lat": 30.55407,
    "lng": 76.71948
  },
  {
    "state": "Punjab",
    "name": "Barnala",
    "lat": 30.37451,
    "lng": 75.5487
  },
  {
    "state": "Punjab",
    "name": "Batala",
    "lat": 31.80921,
    "lng": 75.20294
  },
  {
    "state": "Punjab",
    "name": "Begowal",
    "lat": 31.61152,
    "lng": 75.52135
  },
  {
    "state": "Punjab",
    "name": "Bhadaur",
    "lat": 30.47651,
    "lng": 75.33049
  },
  {
    "state": "Punjab",
    "name": "Bhatinda",
    "lat": 30.20747,
    "lng": 74.93893
  },
  {
    "state": "Punjab",
    "name": "Bhawanigarh",
    "lat": 30.26685,
    "lng": 76.03854
  },
  {
    "state": "Punjab",
    "name": "Bhikhi",
    "lat": 30.05918,
    "lng": 75.535
  },
  {
    "state": "Punjab",
    "name": "Bhogpur",
    "lat": 31.55442,
    "lng": 75.64271
  },
  {
    "state": "Punjab",
    "name": "Bholath",
    "lat": 31.54277778,
    "lng": 75.5075
  },
  {
    "state": "Punjab",
    "name": "Budhlada",
    "lat": 29.92799,
    "lng": 75.56205
  },
  {
    "state": "Punjab",
    "name": "Chima",
    "lat": 30.6854,
    "lng": 76.08643
  },
  {
    "state": "Punjab",
    "name": "Dasuya",
    "lat": 31.81679,
    "lng": 75.6531
  },
  {
    "state": "Punjab",
    "name": "Dera Baba Nanak",
    "lat": 32.03733,
    "lng": 75.02787
  },
  {
    "state": "Punjab",
    "name": "Dera Bassi",
    "lat": 30.5872,
    "lng": 76.8428
  },
  {
    "state": "Punjab",
    "name": "Dhanaula",
    "lat": 30.28216,
    "lng": 75.57341
  },
  {
    "state": "Punjab",
    "name": "Dhariwal",
    "lat": 31.95616,
    "lng": 75.32386
  },
  {
    "state": "Punjab",
    "name": "Dhilwan",
    "lat": 31.51432,
    "lng": 75.34574
  },
  {
    "state": "Punjab",
    "name": "Dhudi",
    "lat": 30.69636,
    "lng": 74.85246
  },
  {
    "state": "Punjab",
    "name": "Dhuri",
    "lat": 30.36846,
    "lng": 75.86791
  },
  {
    "state": "Punjab",
    "name": "Dina Nagar",
    "lat": 32.13664,
    "lng": 75.47291
  },
  {
    "state": "Punjab",
    "name": "Dirba",
    "lat": 30.07222,
    "lng": 75.99607
  },
  {
    "state": "Punjab",
    "name": "Doraha",
    "lat": 30.79953,
    "lng": 76.02355
  },
  {
    "state": "Punjab",
    "name": "Faridkot",
    "lat": 30.67399,
    "lng": 74.75579
  },
  {
    "state": "Punjab",
    "name": "Fatehgarh Churian",
    "lat": 31.86431,
    "lng": 74.95665
  },
  {
    "state": "Punjab",
    "name": "Fatehgarh Sahib",
    "lat": 30.64379,
    "lng": 76.34787
  },
  {
    "state": "Punjab",
    "name": "Fazilka",
    "lat": 30.40207,
    "lng": 74.02836
  },
  {
    "state": "Punjab",
    "name": "Firozpur",
    "lat": 30.92574,
    "lng": 74.61311
  },
  {
    "state": "Punjab",
    "name": "Firozpur District",
    "lat": 30.89,
    "lng": 74.56
  },
  {
    "state": "Punjab",
    "name": "Gardhiwala",
    "lat": 31.74147,
    "lng": 75.75567
  },
  {
    "state": "Punjab",
    "name": "Garhshankar",
    "lat": 31.21537,
    "lng": 76.14149
  },
  {
    "state": "Punjab",
    "name": "Ghanaur",
    "lat": 30.33092,
    "lng": 76.61203
  },
  {
    "state": "Punjab",
    "name": "Giddarbaha",
    "lat": 30.19953,
    "lng": 74.66627
  },
  {
    "state": "Punjab",
    "name": "Gurdaspur",
    "lat": 31.92,
    "lng": 75.27
  },
  {
    "state": "Punjab",
    "name": "Guru Har Sahai",
    "lat": 30.70862,
    "lng": 74.40407
  },
  {
    "state": "Punjab",
    "name": "Hajipur",
    "lat": 31.97714,
    "lng": 75.75438
  },
  {
    "state": "Punjab",
    "name": "Hariana",
    "lat": 31.63512,
    "lng": 75.83887
  },
  {
    "state": "Punjab",
    "name": "Hoshiarpur",
    "lat": 31.53723,
    "lng": 75.91269
  },
  {
    "state": "Punjab",
    "name": "Ishanpur",
    "lat": 30.63929,
    "lng": 76.11761
  },
  {
    "state": "Punjab",
    "name": "Jagraon",
    "lat": 30.78783,
    "lng": 75.47391
  },
  {
    "state": "Punjab",
    "name": "Jaito",
    "lat": 30.45126,
    "lng": 74.89189
  },
  {
    "state": "Punjab",
    "name": "Jalalabad",
    "lat": 30.60622,
    "lng": 74.25727
  },
  {
    "state": "Punjab",
    "name": "Jalandhar",
    "lat": 31.41667,
    "lng": 75.61667
  },
  {
    "state": "Punjab",
    "name": "Jandiala",
    "lat": 31.1593,
    "lng": 75.61755
  },
  {
    "state": "Punjab",
    "name": "Jandiala Guru",
    "lat": 31.56198,
    "lng": 75.0277
  },
  {
    "state": "Punjab",
    "name": "Kalanaur",
    "lat": 32.01227,
    "lng": 75.15063
  },
  {
    "state": "Punjab",
    "name": "Kapurthala",
    "lat": 31.38011,
    "lng": 75.38105
  },
  {
    "state": "Punjab",
    "name": "Kartarpur",
    "lat": 31.44268,
    "lng": 75.49847
  },
  {
    "state": "Punjab",
    "name": "Khamanon",
    "lat": 30.81725,
    "lng": 76.35478
  },
  {
    "state": "Punjab",
    "name": "Khanna",
    "lat": 30.70547,
    "lng": 76.22196
  },
  {
    "state": "Punjab",
    "name": "Kharar",
    "lat": 30.74632,
    "lng": 76.64689
  },
  {
    "state": "Punjab",
    "name": "Khemkaran",
    "lat": 31.14443,
    "lng": 74.55938
  },
  {
    "state": "Punjab",
    "name": "Kot Isa Khan",
    "lat": 30.94659,
    "lng": 75.1378
  },
  {
    "state": "Punjab",
    "name": "Kotkapura",
    "lat": 30.5819,
    "lng": 74.83298
  },
  {
    "state": "Punjab",
    "name": "Laungowal",
    "lat": 30.19393,
    "lng": 75.68089
  },
  {
    "state": "Punjab",
    "name": "Ludhiana",
    "lat": 30.91204,
    "lng": 75.85379
  },
  {
    "state": "Punjab",
    "name": "Machhiwara",
    "lat": 30.91557,
    "lng": 76.20016
  },
  {
    "state": "Punjab",
    "name": "Majitha",
    "lat": 31.75711,
    "lng": 74.95891
  },
  {
    "state": "Punjab",
    "name": "Makhu",
    "lat": 31.10335,
    "lng": 74.99631
  },
  {
    "state": "Punjab",
    "name": "Malaut",
    "lat": 30.21121,
    "lng": 74.4818
  },
  {
    "state": "Punjab",
    "name": "Malerkotla",
    "lat": 30.5309,
    "lng": 75.87949
  },
  {
    "state": "Punjab",
    "name": "Mansa",
    "lat": 29.98844,
    "lng": 75.40167
  },
  {
    "state": "Punjab",
    "name": "Maur Mandi",
    "lat": 30.08333,
    "lng": 75.25
  },
  {
    "state": "Punjab",
    "name": "Moga",
    "lat": 30.80376,
    "lng": 75.14938
  },
  {
    "state": "Punjab",
    "name": "Mohali",
    "lat": 30.67995,
    "lng": 76.72211
  },
  {
    "state": "Punjab",
    "name": "Morinda",
    "lat": 30.79014,
    "lng": 76.49883
  },
  {
    "state": "Punjab",
    "name": "Mukerian",
    "lat": 31.95394,
    "lng": 75.61716
  },
  {
    "state": "Punjab",
    "name": "Nabha",
    "lat": 30.37577,
    "lng": 76.15292
  },
  {
    "state": "Punjab",
    "name": "Nakodar",
    "lat": 31.12586,
    "lng": 75.47508
  },
  {
    "state": "Punjab",
    "name": "Nangal",
    "lat": 31.38966,
    "lng": 76.37574
  },
  {
    "state": "Punjab",
    "name": "Nawanshahr",
    "lat": 31.1245,
    "lng": 76.11613
  },
  {
    "state": "Punjab",
    "name": "Nurmahal",
    "lat": 31.09662,
    "lng": 75.59386
  },
  {
    "state": "Punjab",
    "name": "Nurpur Kalan",
    "lat": 31.16667,
    "lng": 76.48333
  },
  {
    "state": "Punjab",
    "name": "Pathankot",
    "lat": 32.27484,
    "lng": 75.65287
  },
  {
    "state": "Punjab",
    "name": "Patiala",
    "lat": 30.33625,
    "lng": 76.3922
  },
  {
    "state": "Punjab",
    "name": "Patti",
    "lat": 31.28092,
    "lng": 74.85849
  },
  {
    "state": "Punjab",
    "name": "Phagwara",
    "lat": 31.22452,
    "lng": 75.77387
  },
  {
    "state": "Punjab",
    "name": "Phillaur",
    "lat": 31.01887,
    "lng": 75.79111
  },
  {
    "state": "Punjab",
    "name": "Qadian",
    "lat": 31.82198,
    "lng": 75.37663
  },
  {
    "state": "Punjab",
    "name": "Rahon",
    "lat": 31.05275,
    "lng": 76.11907
  },
  {
    "state": "Punjab",
    "name": "Raikot",
    "lat": 30.65,
    "lng": 75.6
  },
  {
    "state": "Punjab",
    "name": "Rajasansi",
    "lat": 31.72021,
    "lng": 74.8008
  },
  {
    "state": "Punjab",
    "name": "Rajpura",
    "lat": 30.47856,
    "lng": 76.59284
  },
  {
    "state": "Punjab",
    "name": "Ram Das",
    "lat": 31.96739,
    "lng": 74.9087
  },
  {
    "state": "Punjab",
    "name": "Rampura",
    "lat": 30.256,
    "lng": 75.24116
  },
  {
    "state": "Punjab",
    "name": "Rupnagar",
    "lat": 31.04,
    "lng": 76.52
  },
  {
    "state": "Punjab",
    "name": "Samrala",
    "lat": 30.83601,
    "lng": 76.19324
  },
  {
    "state": "Punjab",
    "name": "Sanaur",
    "lat": 30.30182,
    "lng": 76.45786
  },
  {
    "state": "Punjab",
    "name": "Sangrur",
    "lat": 30.24506,
    "lng": 75.84488
  },
  {
    "state": "Punjab",
    "name": "Sardulgarh",
    "lat": 29.69224,
    "lng": 75.23608
  },
  {
    "state": "Punjab",
    "name": "Shahid Bhagat Singh Nagar",
    "lat": 31.13183,
    "lng": 76.13328
  },
  {
    "state": "Punjab",
    "name": "Shahkot",
    "lat": 31.08173,
    "lng": 75.33708
  },
  {
    "state": "Punjab",
    "name": "Sham Churasi",
    "lat": 31.50028,
    "lng": 75.74917
  },
  {
    "state": "Punjab",
    "name": "Sirhind-Fategarh",
    "lat": 30.64321,
    "lng": 76.38421
  },
  {
    "state": "Punjab",
    "name": "Sri Muktsar Sahib",
    "lat": 30.47426,
    "lng": 74.5166
  },
  {
    "state": "Punjab",
    "name": "Sultanpur Lodhi",
    "lat": 31.21468,
    "lng": 75.19602
  },
  {
    "state": "Punjab",
    "name": "Sunam",
    "lat": 30.12883,
    "lng": 75.79943
  },
  {
    "state": "Punjab",
    "name": "Talwandi Bhai",
    "lat": 30.85584,
    "lng": 74.92979
  },
  {
    "state": "Punjab",
    "name": "Talwara",
    "lat": 31.9376,
    "lng": 75.88657
  },
  {
    "state": "Punjab",
    "name": "Tarn Taran Sahib",
    "lat": 31.45191,
    "lng": 74.92777
  },
  {
    "state": "Punjab",
    "name": "Zira",
    "lat": 30.96853,
    "lng": 74.99106
  },
  {
    "state": "Rajasthan",
    "name": "Abhaneri",
    "lat": 27.00743,
    "lng": 76.6076
  },
  {
    "state": "Rajasthan",
    "name": "Abu",
    "lat": 24.59365,
    "lng": 72.71756
  },
  {
    "state": "Rajasthan",
    "name": "Abu Road",
    "lat": 24.48012,
    "lng": 72.78186
  },
  {
    "state": "Rajasthan",
    "name": "Ajmer",
    "lat": 26.25,
    "lng": 74.66667
  },
  {
    "state": "Rajasthan",
    "name": "Aklera",
    "lat": 24.41288,
    "lng": 76.56719
  },
  {
    "state": "Rajasthan",
    "name": "Alwar",
    "lat": 27.5,
    "lng": 76.5
  },
  {
    "state": "Rajasthan",
    "name": "Amet",
    "lat": 25.30609,
    "lng": 73.9258
  },
  {
    "state": "Rajasthan",
    "name": "Anta",
    "lat": 25.15,
    "lng": 76.3
  },
  {
    "state": "Rajasthan",
    "name": "Anupgarh",
    "lat": 29.19111,
    "lng": 73.20861
  },
  {
    "state": "Rajasthan",
    "name": "Asind",
    "lat": 25.7342,
    "lng": 74.33278
  },
  {
    "state": "Rajasthan",
    "name": "Bagar",
    "lat": 28.18784,
    "lng": 75.50012
  },
  {
    "state": "Rajasthan",
    "name": "Bakani",
    "lat": 24.28624,
    "lng": 76.23709
  },
  {
    "state": "Rajasthan",
    "name": "Bali",
    "lat": 25.19725,
    "lng": 73.29117
  },
  {
    "state": "Rajasthan",
    "name": "Balotra",
    "lat": 25.83242,
    "lng": 72.24
  },
  {
    "state": "Rajasthan",
    "name": "Bandikui",
    "lat": 27.05087,
    "lng": 76.57325
  },
  {
    "state": "Rajasthan",
    "name": "Banswara",
    "lat": 23.54109,
    "lng": 74.4425
  },
  {
    "state": "Rajasthan",
    "name": "Baran",
    "lat": 25.09,
    "lng": 76.66
  },
  {
    "state": "Rajasthan",
    "name": "Bari",
    "lat": 26.64661,
    "lng": 77.61634
  },
  {
    "state": "Rajasthan",
    "name": "Bari Sadri",
    "lat": 24.41339,
    "lng": 74.47331
  },
  {
    "state": "Rajasthan",
    "name": "Barmer",
    "lat": 25.75,
    "lng": 71.5
  },
  {
    "state": "Rajasthan",
    "name": "Basi",
    "lat": 26.8315,
    "lng": 76.04856
  },
  {
    "state": "Rajasthan",
    "name": "Basni",
    "lat": 27.17232,
    "lng": 73.64519
  },
  {
    "state": "Rajasthan",
    "name": "Baswa",
    "lat": 27.14955,
    "lng": 76.58345
  },
  {
    "state": "Rajasthan",
    "name": "Bayana",
    "lat": 26.90791,
    "lng": 77.28985
  },
  {
    "state": "Rajasthan",
    "name": "Beawar",
    "lat": 26.10119,
    "lng": 74.32028
  },
  {
    "state": "Rajasthan",
    "name": "Begun",
    "lat": 24.98333,
    "lng": 75
  },
  {
    "state": "Rajasthan",
    "name": "Behror",
    "lat": 27.88832,
    "lng": 76.28108
  },
  {
    "state": "Rajasthan",
    "name": "Bhadasar",
    "lat": 28.31457,
    "lng": 74.28952
  },
  {
    "state": "Rajasthan",
    "name": "Bhadra",
    "lat": 29.10298,
    "lng": 75.17138
  },
  {
    "state": "Rajasthan",
    "name": "Bharatpur",
    "lat": 27.21,
    "lng": 77.29
  },
  {
    "state": "Rajasthan",
    "name": "Bhasawar",
    "lat": 27.03895,
    "lng": 77.04849
  },
  {
    "state": "Rajasthan",
    "name": "Bhilwara",
    "lat": 25.5,
    "lng": 74.75
  },
  {
    "state": "Rajasthan",
    "name": "Bhindar",
    "lat": 24.50235,
    "lng": 74.18551
  },
  {
    "state": "Rajasthan",
    "name": "Bhinmal",
    "lat": 24.99944,
    "lng": 72.27141
  },
  {
    "state": "Rajasthan",
    "name": "Bhiwadi",
    "lat": 28.21024,
    "lng": 76.86056
  },
  {
    "state": "Rajasthan",
    "name": "Bhuma",
    "lat": 27.78333,
    "lng": 74.93333
  },
  {
    "state": "Rajasthan",
    "name": "Bikaner",
    "lat": 28.01762,
    "lng": 73.31495
  },
  {
    "state": "Rajasthan",
    "name": "Bilara",
    "lat": 26.18067,
    "lng": 73.7055
  },
  {
    "state": "Rajasthan",
    "name": "Bissau",
    "lat": 28.24737,
    "lng": 75.07666
  },
  {
    "state": "Rajasthan",
    "name": "Borkhera",
    "lat": 25.52115,
    "lng": 75.64028
  },
  {
    "state": "Rajasthan",
    "name": "Bundi",
    "lat": 25.43855,
    "lng": 75.63735
  },
  {
    "state": "Rajasthan",
    "name": "Chaksu",
    "lat": 26.6051,
    "lng": 75.94814
  },
  {
    "state": "Rajasthan",
    "name": "Chechat",
    "lat": 24.76667,
    "lng": 75.88333
  },
  {
    "state": "Rajasthan",
    "name": "Chhabra",
    "lat": 24.66472,
    "lng": 76.84379
  },
  {
    "state": "Rajasthan",
    "name": "Chhapar",
    "lat": 27.819,
    "lng": 74.43936
  },
  {
    "state": "Rajasthan",
    "name": "Chhoti Sadri",
    "lat": 24.38145,
    "lng": 74.7012
  },
  {
    "state": "Rajasthan",
    "name": "Chidawa",
    "lat": 28.23937,
    "lng": 75.64035
  },
  {
    "state": "Rajasthan",
    "name": "Chittaurgarh",
    "lat": 24.5,
    "lng": 74.5
  },
  {
    "state": "Rajasthan",
    "name": "Churu",
    "lat": 28.30415,
    "lng": 74.96718
  },
  {
    "state": "Rajasthan",
    "name": "Dariba",
    "lat": 24.94865,
    "lng": 74.1342
  },
  {
    "state": "Rajasthan",
    "name": "Dausa",
    "lat": 26.88269,
    "lng": 76.57053
  },
  {
    "state": "Rajasthan",
    "name": "Deoli",
    "lat": 25.75728,
    "lng": 75.37991
  },
  {
    "state": "Rajasthan",
    "name": "Deshnoke",
    "lat": 27.79836,
    "lng": 73.34297
  },
  {
    "state": "Rajasthan",
    "name": "Devgarh",
    "lat": 25.52533,
    "lng": 73.90812
  },
  {
    "state": "Rajasthan",
    "name": "Dhaulpur",
    "lat": 26.71183,
    "lng": 77.73956
  },
  {
    "state": "Rajasthan",
    "name": "Didwana",
    "lat": 27.40096,
    "lng": 74.57537
  },
  {
    "state": "Rajasthan",
    "name": "Dig",
    "lat": 27.47188,
    "lng": 77.32564
  },
  {
    "state": "Rajasthan",
    "name": "Dungarpur",
    "lat": 23.84306,
    "lng": 73.71466
  },
  {
    "state": "Rajasthan",
    "name": "Fatehpur",
    "lat": 27.99486,
    "lng": 74.95628
  },
  {
    "state": "Rajasthan",
    "name": "Galiakot",
    "lat": 23.51995,
    "lng": 74.02028
  },
  {
    "state": "Rajasthan",
    "name": "Ganganagar",
    "lat": 29.92009,
    "lng": 73.87496
  },
  {
    "state": "Rajasthan",
    "name": "Gangapur",
    "lat": 26.47249,
    "lng": 76.71744
  },
  {
    "state": "Rajasthan",
    "name": "Govindgarh",
    "lat": 27.50423,
    "lng": 76.99938
  },
  {
    "state": "Rajasthan",
    "name": "Gulabpura",
    "lat": 25.90448,
    "lng": 74.66025
  },
  {
    "state": "Rajasthan",
    "name": "Hanumangarh",
    "lat": 29.11,
    "lng": 74.6
  },
  {
    "state": "Rajasthan",
    "name": "Hindaun",
    "lat": 26.73411,
    "lng": 77.03519
  },
  {
    "state": "Rajasthan",
    "name": "Jahazpur",
    "lat": 25.61994,
    "lng": 75.27609
  },
  {
    "state": "Rajasthan",
    "name": "Jaipur",
    "lat": 27,
    "lng": 76
  },
  {
    "state": "Rajasthan",
    "name": "Jaisalmer",
    "lat": 26.99382,
    "lng": 71.00889
  },
  {
    "state": "Rajasthan",
    "name": "Jaitaran",
    "lat": 26.20446,
    "lng": 73.93676
  },
  {
    "state": "Rajasthan",
    "name": "Jalor",
    "lat": 25.34558,
    "lng": 72.61559
  },
  {
    "state": "Rajasthan",
    "name": "Jalore",
    "lat": 25.08,
    "lng": 72.29
  },
  {
    "state": "Rajasthan",
    "name": "Jhalawar",
    "lat": 24.59633,
    "lng": 76.16499
  },
  {
    "state": "Rajasthan",
    "name": "Jhalrapatan",
    "lat": 24.54205,
    "lng": 76.17242
  },
  {
    "state": "Rajasthan",
    "name": "Jhunjhunun",
    "lat": 28.12559,
    "lng": 75.39797
  },
  {
    "state": "Rajasthan",
    "name": "Jobner",
    "lat": 26.97257,
    "lng": 75.38752
  },
  {
    "state": "Rajasthan",
    "name": "Jodhpur",
    "lat": 26.75,
    "lng": 72.75
  },
  {
    "state": "Rajasthan",
    "name": "Kaman",
    "lat": 27.65791,
    "lng": 77.26908
  },
  {
    "state": "Rajasthan",
    "name": "Kanor",
    "lat": 24.43437,
    "lng": 74.26546
  },
  {
    "state": "Rajasthan",
    "name": "Kapren",
    "lat": 25.40529,
    "lng": 76.07431
  },
  {
    "state": "Rajasthan",
    "name": "Karanpur",
    "lat": 29.84042,
    "lng": 73.45519
  },
  {
    "state": "Rajasthan",
    "name": "Karauli",
    "lat": 26.58,
    "lng": 77.1
  },
  {
    "state": "Rajasthan",
    "name": "Kekri",
    "lat": 25.97132,
    "lng": 75.14992
  },
  {
    "state": "Rajasthan",
    "name": "Keshorai Patan",
    "lat": 25.29275,
    "lng": 75.93948
  },
  {
    "state": "Rajasthan",
    "name": "Khandela",
    "lat": 27.60499,
    "lng": 75.502
  },
  {
    "state": "Rajasthan",
    "name": "Khanpur",
    "lat": 24.73241,
    "lng": 76.39601
  },
  {
    "state": "Rajasthan",
    "name": "Khetri",
    "lat": 28.00069,
    "lng": 75.78644
  },
  {
    "state": "Rajasthan",
    "name": "Kishangarh",
    "lat": 26.59006,
    "lng": 74.85397
  },
  {
    "state": "Rajasthan",
    "name": "Kota",
    "lat": 25.17512,
    "lng": 75.84412
  },
  {
    "state": "Rajasthan",
    "name": "Kotputli",
    "lat": 27.70207,
    "lng": 76.19911
  },
  {
    "state": "Rajasthan",
    "name": "Kuchaman",
    "lat": 27.14745,
    "lng": 74.85655
  },
  {
    "state": "Rajasthan",
    "name": "Kuchera",
    "lat": 26.98747,
    "lng": 73.97108
  },
  {
    "state": "Rajasthan",
    "name": "Kumher",
    "lat": 27.31657,
    "lng": 77.37079
  },
  {
    "state": "Rajasthan",
    "name": "Kushalgarh",
    "lat": 23.19899,
    "lng": 74.45074
  },
  {
    "state": "Rajasthan",
    "name": "Lachhmangarh Sikar",
    "lat": 27.82294,
    "lng": 75.02754
  },
  {
    "state": "Rajasthan",
    "name": "Ladnun",
    "lat": 27.65312,
    "lng": 74.39993
  },
  {
    "state": "Rajasthan",
    "name": "Lakheri",
    "lat": 25.67237,
    "lng": 76.17692
  },
  {
    "state": "Rajasthan",
    "name": "Lalsot",
    "lat": 26.55951,
    "lng": 76.32915
  },
  {
    "state": "Rajasthan",
    "name": "Losal",
    "lat": 27.4,
    "lng": 74.91667
  },
  {
    "state": "Rajasthan",
    "name": "Mahwah",
    "lat": 27.04594,
    "lng": 76.93152
  },
  {
    "state": "Rajasthan",
    "name": "Makrana",
    "lat": 27.04361,
    "lng": 74.72445
  },
  {
    "state": "Rajasthan",
    "name": "Malpura",
    "lat": 26.2838,
    "lng": 75.36458
  },
  {
    "state": "Rajasthan",
    "name": "Mandal",
    "lat": 25.44126,
    "lng": 74.56979
  },
  {
    "state": "Rajasthan",
    "name": "Mandalgarh",
    "lat": 25.19407,
    "lng": 75.07215
  },
  {
    "state": "Rajasthan",
    "name": "Mandawar",
    "lat": 27.86374,
    "lng": 76.54999
  },
  {
    "state": "Rajasthan",
    "name": "Mangrol",
    "lat": 25.33061,
    "lng": 76.50973
  },
  {
    "state": "Rajasthan",
    "name": "Manohar Thana",
    "lat": 24.24,
    "lng": 76.80182
  },
  {
    "state": "Rajasthan",
    "name": "Manoharpur",
    "lat": 27.29769,
    "lng": 75.9495
  },
  {
    "state": "Rajasthan",
    "name": "Meethari Marwar",
    "lat": 27.57615,
    "lng": 74.68661
  },
  {
    "state": "Rajasthan",
    "name": "Merta",
    "lat": 26.64859,
    "lng": 74.03414
  },
  {
    "state": "Rajasthan",
    "name": "Mundwa",
    "lat": 27.0631,
    "lng": 73.82304
  },
  {
    "state": "Rajasthan",
    "name": "Nadbai",
    "lat": 27.22288,
    "lng": 77.19569
  },
  {
    "state": "Rajasthan",
    "name": "Nagar",
    "lat": 27.42397,
    "lng": 77.09922
  },
  {
    "state": "Rajasthan",
    "name": "Nagaur",
    "lat": 27.20201,
    "lng": 73.73394
  },
  {
    "state": "Rajasthan",
    "name": "Nainwa",
    "lat": 25.77145,
    "lng": 75.84978
  },
  {
    "state": "Rajasthan",
    "name": "Napasar",
    "lat": 27.96059,
    "lng": 73.55913
  },
  {
    "state": "Rajasthan",
    "name": "Naraina",
    "lat": 26.79069,
    "lng": 75.20608
  },
  {
    "state": "Rajasthan",
    "name": "Nasirabad",
    "lat": 26.30473,
    "lng": 74.73364
  },
  {
    "state": "Rajasthan",
    "name": "Nathdwara",
    "lat": 24.93805,
    "lng": 73.82392
  },
  {
    "state": "Rajasthan",
    "name": "Nawa",
    "lat": 27.0195,
    "lng": 75.00226
  },
  {
    "state": "Rajasthan",
    "name": "Nawalgarh",
    "lat": 27.85161,
    "lng": 75.27384
  },
  {
    "state": "Rajasthan",
    "name": "Neem ka Thana",
    "lat": 27.73976,
    "lng": 75.78652
  },
  {
    "state": "Rajasthan",
    "name": "Nimaj",
    "lat": 26.14995,
    "lng": 74.00094
  },
  {
    "state": "Rajasthan",
    "name": "Nimbahera",
    "lat": 24.62166,
    "lng": 74.67999
  },
  {
    "state": "Rajasthan",
    "name": "Niwai",
    "lat": 26.36073,
    "lng": 75.91836
  },
  {
    "state": "Rajasthan",
    "name": "Nohar",
    "lat": 29.18292,
    "lng": 74.77064
  },
  {
    "state": "Rajasthan",
    "name": "Nokha",
    "lat": 27.56155,
    "lng": 73.47141
  },
  {
    "state": "Rajasthan",
    "name": "Padampur",
    "lat": 29.70885,
    "lng": 73.62539
  },
  {
    "state": "Rajasthan",
    "name": "Pali",
    "lat": 25.77276,
    "lng": 73.32335
  },
  {
    "state": "Rajasthan",
    "name": "Partapur",
    "lat": 23.59276,
    "lng": 74.17396
  },
  {
    "state": "Rajasthan",
    "name": "Parvatsar",
    "lat": 26.88604,
    "lng": 74.76602
  },
  {
    "state": "Rajasthan",
    "name": "Phalodi",
    "lat": 27.13102,
    "lng": 72.36826
  },
  {
    "state": "Rajasthan",
    "name": "Phulera",
    "lat": 26.87401,
    "lng": 75.24171
  },
  {
    "state": "Rajasthan",
    "name": "Pilani",
    "lat": 28.36725,
    "lng": 75.60352
  },
  {
    "state": "Rajasthan",
    "name": "Pilibangan",
    "lat": 29.44964,
    "lng": 74.10093
  },
  {
    "state": "Rajasthan",
    "name": "Pindwara",
    "lat": 24.79749,
    "lng": 73.05505
  },
  {
    "state": "Rajasthan",
    "name": "Pipar",
    "lat": 26.38441,
    "lng": 73.54394
  },
  {
    "state": "Rajasthan",
    "name": "Pirawa",
    "lat": 24.15506,
    "lng": 76.02728
  },
  {
    "state": "Rajasthan",
    "name": "Pokaran",
    "lat": 26.92007,
    "lng": 71.91631
  },
  {
    "state": "Rajasthan",
    "name": "Pratapgarh",
    "lat": 24.03,
    "lng": 74.78
  },
  {
    "state": "Rajasthan",
    "name": "Pushkar",
    "lat": 26.49022,
    "lng": 74.55211
  },
  {
    "state": "Rajasthan",
    "name": "Raipur",
    "lat": 26.04259,
    "lng": 74.02373
  },
  {
    "state": "Rajasthan",
    "name": "Raisinghnagar",
    "lat": 29.53583,
    "lng": 73.44917
  },
  {
    "state": "Rajasthan",
    "name": "Rajakhera",
    "lat": 26.89802,
    "lng": 78.171
  },
  {
    "state": "Rajasthan",
    "name": "Rajaldesar",
    "lat": 28.02849,
    "lng": 74.47442
  },
  {
    "state": "Rajasthan",
    "name": "Rajgarh",
    "lat": 27.23731,
    "lng": 76.62243
  },
  {
    "state": "Rajasthan",
    "name": "Rajsamand",
    "lat": 25.23822,
    "lng": 73.93503
  },
  {
    "state": "Rajasthan",
    "name": "Ramganj Mandi",
    "lat": 24.64648,
    "lng": 75.94325
  },
  {
    "state": "Rajasthan",
    "name": "Ramgarh",
    "lat": 27.25097,
    "lng": 75.17893
  },
  {
    "state": "Rajasthan",
    "name": "Rani",
    "lat": 25.35031,
    "lng": 73.30885
  },
  {
    "state": "Rajasthan",
    "name": "Ratangarh",
    "lat": 28.08137,
    "lng": 74.61854
  },
  {
    "state": "Rajasthan",
    "name": "Rawatbhata",
    "lat": 24.92981,
    "lng": 75.59209
  },
  {
    "state": "Rajasthan",
    "name": "Rawatsar",
    "lat": 29.26724,
    "lng": 74.40288
  },
  {
    "state": "Rajasthan",
    "name": "Ringas",
    "lat": 27.3636,
    "lng": 75.56838
  },
  {
    "state": "Rajasthan",
    "name": "Sadri",
    "lat": 25.18555,
    "lng": 73.45288
  },
  {
    "state": "Rajasthan",
    "name": "Salumbar",
    "lat": 24.13524,
    "lng": 74.04442
  },
  {
    "state": "Rajasthan",
    "name": "Sambhar",
    "lat": 26.90806,
    "lng": 75.19137
  },
  {
    "state": "Rajasthan",
    "name": "Samdari",
    "lat": 25.81299,
    "lng": 72.57879
  },
  {
    "state": "Rajasthan",
    "name": "Sanchor",
    "lat": 24.75361,
    "lng": 71.7728
  },
  {
    "state": "Rajasthan",
    "name": "Sangaria",
    "lat": 29.79886,
    "lng": 74.46683
  },
  {
    "state": "Rajasthan",
    "name": "Sangod",
    "lat": 24.92707,
    "lng": 76.28649
  },
  {
    "state": "Rajasthan",
    "name": "Sardarshahr",
    "lat": 28.44062,
    "lng": 74.491
  },
  {
    "state": "Rajasthan",
    "name": "Sarwar",
    "lat": 26.06272,
    "lng": 75.01104
  },
  {
    "state": "Rajasthan",
    "name": "Sawai Madhopur",
    "lat": 26.02301,
    "lng": 76.34408
  },
  {
    "state": "Rajasthan",
    "name": "Shahpura",
    "lat": 25.62094,
    "lng": 74.92487
  },
  {
    "state": "Rajasthan",
    "name": "Sheoganj",
    "lat": 25.13915,
    "lng": 73.06784
  },
  {
    "state": "Rajasthan",
    "name": "Sikar",
    "lat": 27.61206,
    "lng": 75.13996
  },
  {
    "state": "Rajasthan",
    "name": "Sirohi",
    "lat": 24.83333,
    "lng": 72.75
  },
  {
    "state": "Rajasthan",
    "name": "Siwana",
    "lat": 25.65154,
    "lng": 72.42243
  },
  {
    "state": "Rajasthan",
    "name": "Sojat",
    "lat": 25.92493,
    "lng": 73.66633
  },
  {
    "state": "Rajasthan",
    "name": "Sri Dungargarh",
    "lat": 28.09617,
    "lng": 74.00868
  },
  {
    "state": "Rajasthan",
    "name": "Sri Madhopur",
    "lat": 27.46599,
    "lng": 75.59736
  },
  {
    "state": "Rajasthan",
    "name": "Sujangarh",
    "lat": 27.7,
    "lng": 74.46667
  },
  {
    "state": "Rajasthan",
    "name": "Suket",
    "lat": 24.64609,
    "lng": 76.0417
  },
  {
    "state": "Rajasthan",
    "name": "Sunel",
    "lat": 24.37065,
    "lng": 75.95708
  },
  {
    "state": "Rajasthan",
    "name": "Surajgarh",
    "lat": 28.31005,
    "lng": 75.73271
  },
  {
    "state": "Rajasthan",
    "name": "Suratgarh",
    "lat": 29.3215,
    "lng": 73.89979
  },
  {
    "state": "Rajasthan",
    "name": "Takhatgarh",
    "lat": 25.32235,
    "lng": 73.00487
  },
  {
    "state": "Rajasthan",
    "name": "Taranagar",
    "lat": 28.6686,
    "lng": 75.03207
  },
  {
    "state": "Rajasthan",
    "name": "Tijara",
    "lat": 27.93411,
    "lng": 76.85541
  },
  {
    "state": "Rajasthan",
    "name": "Todabhim",
    "lat": 26.91667,
    "lng": 76.81667
  },
  {
    "state": "Rajasthan",
    "name": "Todaraisingh",
    "lat": 26.02401,
    "lng": 75.48182
  },
  {
    "state": "Rajasthan",
    "name": "Tonk",
    "lat": 26.16667,
    "lng": 75.58333
  },
  {
    "state": "Rajasthan",
    "name": "Udaipur",
    "lat": 24.33,
    "lng": 73.77
  },
  {
    "state": "Rajasthan",
    "name": "Udpura",
    "lat": 24.73355,
    "lng": 75.97514
  },
  {
    "state": "Rajasthan",
    "name": "Uniara",
    "lat": 26.15336,
    "lng": 75.21523
  },
  {
    "state": "Rajasthan",
    "name": "Wer",
    "lat": 27.0186,
    "lng": 77.17636
  },
  {
    "state": "Sikkim",
    "name": "East District",
    "lat": 27.33333,
    "lng": 88.66667
  },
  {
    "state": "Sikkim",
    "name": "Gangtok",
    "lat": 27.32574,
    "lng": 88.61216
  },
  {
    "state": "Sikkim",
    "name": "Gyalshing",
    "lat": 27.28952,
    "lng": 88.25764
  },
  {
    "state": "Sikkim",
    "name": "Jorethang",
    "lat": 27.10696,
    "lng": 88.32332
  },
  {
    "state": "Sikkim",
    "name": "Mangan",
    "lat": 27.50965,
    "lng": 88.52206
  },
  {
    "state": "Sikkim",
    "name": "Namchi",
    "lat": 27.16494,
    "lng": 88.3638
  },
  {
    "state": "Sikkim",
    "name": "Naya Bazar",
    "lat": 27.13082,
    "lng": 88.23972
  },
  {
    "state": "Sikkim",
    "name": "North District",
    "lat": 27.66667,
    "lng": 88.5
  },
  {
    "state": "Sikkim",
    "name": "Rangpo",
    "lat": 27.17733,
    "lng": 88.53358
  },
  {
    "state": "Sikkim",
    "name": "Singtam",
    "lat": 27.23467,
    "lng": 88.50168
  },
  {
    "state": "Sikkim",
    "name": "South District",
    "lat": 27.33333,
    "lng": 88.41667
  },
  {
    "state": "Sikkim",
    "name": "West District",
    "lat": 27.33333,
    "lng": 88.25
  },
  {
    "state": "Tamil Nadu",
    "name": "Abiramam",
    "lat": 9.4423,
    "lng": 78.4399
  },
  {
    "state": "Tamil Nadu",
    "name": "Adirampattinam",
    "lat": 10.34059,
    "lng": 79.37905
  },
  {
    "state": "Tamil Nadu",
    "name": "Aduthurai",
    "lat": 11.01542,
    "lng": 79.48093
  },
  {
    "state": "Tamil Nadu",
    "name": "Alagapuram",
    "lat": 11.88705,
    "lng": 78.91758
  },
  {
    "state": "Tamil Nadu",
    "name": "Alandur",
    "lat": 13.0025,
    "lng": 80.20611
  },
  {
    "state": "Tamil Nadu",
    "name": "Alanganallur",
    "lat": 10.04697,
    "lng": 78.09033
  },
  {
    "state": "Tamil Nadu",
    "name": "Alangayam",
    "lat": 12.62235,
    "lng": 78.75207
  },
  {
    "state": "Tamil Nadu",
    "name": "Alangudi",
    "lat": 10.3606,
    "lng": 78.98492
  },
  {
    "state": "Tamil Nadu",
    "name": "Alangulam",
    "lat": 8.86404,
    "lng": 77.49937
  },
  {
    "state": "Tamil Nadu",
    "name": "Alappakkam",
    "lat": 11.59895,
    "lng": 79.71893
  },
  {
    "state": "Tamil Nadu",
    "name": "Alwa Tirunagari",
    "lat": 8.60635,
    "lng": 77.93983
  },
  {
    "state": "Tamil Nadu",
    "name": "Ambasamudram",
    "lat": 8.71068,
    "lng": 77.4519
  },
  {
    "state": "Tamil Nadu",
    "name": "Ambattur",
    "lat": 13.09818,
    "lng": 80.16152
  },
  {
    "state": "Tamil Nadu",
    "name": "Ambur",
    "lat": 12.79163,
    "lng": 78.71644
  },
  {
    "state": "Tamil Nadu",
    "name": "Ammapettai",
    "lat": 10.79476,
    "lng": 79.31986
  },
  {
    "state": "Tamil Nadu",
    "name": "Anamalais",
    "lat": 10.58303,
    "lng": 76.93441
  },
  {
    "state": "Tamil Nadu",
    "name": "Andippatti",
    "lat": 9.99797,
    "lng": 77.62097
  },
  {
    "state": "Tamil Nadu",
    "name": "Annamalainagar",
    "lat": 11.4,
    "lng": 79.73333
  },
  {
    "state": "Tamil Nadu",
    "name": "Annavasal",
    "lat": 10.4606,
    "lng": 78.70029
  },
  {
    "state": "Tamil Nadu",
    "name": "Annur",
    "lat": 11.23616,
    "lng": 77.10514
  },
  {
    "state": "Tamil Nadu",
    "name": "Anthiyur",
    "lat": 11.57506,
    "lng": 77.59043
  },
  {
    "state": "Tamil Nadu",
    "name": "Arakkonam",
    "lat": 13.08449,
    "lng": 79.67053
  },
  {
    "state": "Tamil Nadu",
    "name": "Arantangi",
    "lat": 10.17235,
    "lng": 78.99118
  },
  {
    "state": "Tamil Nadu",
    "name": "Arcot",
    "lat": 12.90569,
    "lng": 79.31897
  },
  {
    "state": "Tamil Nadu",
    "name": "Arimalam",
    "lat": 10.25498,
    "lng": 78.88403
  },
  {
    "state": "Tamil Nadu",
    "name": "Ariyalur",
    "lat": 11.15,
    "lng": 79.25
  },
  {
    "state": "Tamil Nadu",
    "name": "Arni",
    "lat": 12.66771,
    "lng": 79.28529
  },
  {
    "state": "Tamil Nadu",
    "name": "Arumbavur",
    "lat": 11.38096,
    "lng": 78.72965
  },
  {
    "state": "Tamil Nadu",
    "name": "Arumuganeri",
    "lat": 8.5688,
    "lng": 78.09091
  },
  {
    "state": "Tamil Nadu",
    "name": "Aruppukkottai",
    "lat": 9.5096,
    "lng": 78.09588
  },
  {
    "state": "Tamil Nadu",
    "name": "Aruvankad",
    "lat": 11.36315,
    "lng": 76.7579
  },
  {
    "state": "Tamil Nadu",
    "name": "Attayyampatti",
    "lat": 11.53272,
    "lng": 78.05363
  },
  {
    "state": "Tamil Nadu",
    "name": "Attur",
    "lat": 11.59414,
    "lng": 78.60143
  },
  {
    "state": "Tamil Nadu",
    "name": "Auroville",
    "lat": 12.00549,
    "lng": 79.80885
  },
  {
    "state": "Tamil Nadu",
    "name": "Avadi",
    "lat": 13.1147,
    "lng": 80.10981
  },
  {
    "state": "Tamil Nadu",
    "name": "Avinashi",
    "lat": 11.19297,
    "lng": 77.26865
  },
  {
    "state": "Tamil Nadu",
    "name": "Ayakudi",
    "lat": 10.44992,
    "lng": 77.55198
  },
  {
    "state": "Tamil Nadu",
    "name": "Ayyampettai",
    "lat": 10.90141,
    "lng": 79.17984
  },
  {
    "state": "Tamil Nadu",
    "name": "Belur",
    "lat": 11.70752,
    "lng": 78.41437
  },
  {
    "state": "Tamil Nadu",
    "name": "Bhavani",
    "lat": 11.44553,
    "lng": 77.68215
  },
  {
    "state": "Tamil Nadu",
    "name": "Bodinayakkanur",
    "lat": 10.01171,
    "lng": 77.34976
  },
  {
    "state": "Tamil Nadu",
    "name": "Chengam",
    "lat": 12.30889,
    "lng": 78.79137
  },
  {
    "state": "Tamil Nadu",
    "name": "Chennai",
    "lat": 13.08784,
    "lng": 80.27847
  },
  {
    "state": "Tamil Nadu",
    "name": "Chennimalai",
    "lat": 11.16378,
    "lng": 77.60388
  },
  {
    "state": "Tamil Nadu",
    "name": "Chetput",
    "lat": 13.07,
    "lng": 80.24083
  },
  {
    "state": "Tamil Nadu",
    "name": "Chettipalaiyam",
    "lat": 10.91248,
    "lng": 77.03699
  },
  {
    "state": "Tamil Nadu",
    "name": "Cheyyar",
    "lat": 12.66052,
    "lng": 79.54308
  },
  {
    "state": "Tamil Nadu",
    "name": "Cheyyur",
    "lat": 12.34948,
    "lng": 80.00304
  },
  {
    "state": "Tamil Nadu",
    "name": "Chidambaram",
    "lat": 11.39933,
    "lng": 79.69144
  },
  {
    "state": "Tamil Nadu",
    "name": "Chingleput",
    "lat": 12.69184,
    "lng": 79.97661
  },
  {
    "state": "Tamil Nadu",
    "name": "Chinna Salem",
    "lat": 11.63422,
    "lng": 78.87412
  },
  {
    "state": "Tamil Nadu",
    "name": "Chinnamanur",
    "lat": 9.83999,
    "lng": 77.38109
  },
  {
    "state": "Tamil Nadu",
    "name": "Chinnasekkadu",
    "lat": 13.16089,
    "lng": 80.25727
  },
  {
    "state": "Tamil Nadu",
    "name": "Cholapuram",
    "lat": 9.35193,
    "lng": 77.56839
  },
  {
    "state": "Tamil Nadu",
    "name": "Coimbatore",
    "lat": 10.8,
    "lng": 77.09
  },
  {
    "state": "Tamil Nadu",
    "name": "Colachel",
    "lat": 8.17938,
    "lng": 77.25818
  },
  {
    "state": "Tamil Nadu",
    "name": "Cuddalore",
    "lat": 11.52,
    "lng": 79.51
  },
  {
    "state": "Tamil Nadu",
    "name": "Cumbum",
    "lat": 9.73647,
    "lng": 77.2847
  },
  {
    "state": "Tamil Nadu",
    "name": "Denkanikota",
    "lat": 12.5301,
    "lng": 77.78887
  },
  {
    "state": "Tamil Nadu",
    "name": "Desur",
    "lat": 12.43727,
    "lng": 79.48145
  },
  {
    "state": "Tamil Nadu",
    "name": "Devadanappatti",
    "lat": 10.14673,
    "lng": 77.6439
  },
  {
    "state": "Tamil Nadu",
    "name": "Devakottai",
    "lat": 9.94704,
    "lng": 78.8233
  },
  {
    "state": "Tamil Nadu",
    "name": "Dhali",
    "lat": 10.51049,
    "lng": 77.18806
  },
  {
    "state": "Tamil Nadu",
    "name": "Dharapuram",
    "lat": 10.73828,
    "lng": 77.53223
  },
  {
    "state": "Tamil Nadu",
    "name": "Dharmapuri",
    "lat": 12.1277,
    "lng": 78.15794
  },
  {
    "state": "Tamil Nadu",
    "name": "Dindigul",
    "lat": 10.4,
    "lng": 77.8
  },
  {
    "state": "Tamil Nadu",
    "name": "Dusi",
    "lat": 12.77574,
    "lng": 79.67892
  },
  {
    "state": "Tamil Nadu",
    "name": "Elayirampannai",
    "lat": 9.27033,
    "lng": 77.82494
  },
  {
    "state": "Tamil Nadu",
    "name": "Elumalai",
    "lat": 9.86501,
    "lng": 77.69923
  },
  {
    "state": "Tamil Nadu",
    "name": "Eral",
    "lat": 8.62584,
    "lng": 78.02282
  },
  {
    "state": "Tamil Nadu",
    "name": "Eraniel",
    "lat": 8.20589,
    "lng": 77.31726
  },
  {
    "state": "Tamil Nadu",
    "name": "Erode",
    "lat": 11.34,
    "lng": 77.55
  },
  {
    "state": "Tamil Nadu",
    "name": "Erumaippatti",
    "lat": 11.14671,
    "lng": 78.28996
  },
  {
    "state": "Tamil Nadu",
    "name": "Ettaiyapuram",
    "lat": 9.14405,
    "lng": 77.99066
  },
  {
    "state": "Tamil Nadu",
    "name": "Gandhi Nagar",
    "lat": 13.00639,
    "lng": 80.25417
  },
  {
    "state": "Tamil Nadu",
    "name": "Gangaikondan",
    "lat": 8.85785,
    "lng": 77.78019
  },
  {
    "state": "Tamil Nadu",
    "name": "Gangavalli",
    "lat": 11.49828,
    "lng": 78.64966
  },
  {
    "state": "Tamil Nadu",
    "name": "Gingee",
    "lat": 12.25282,
    "lng": 79.41727
  },
  {
    "state": "Tamil Nadu",
    "name": "Gobichettipalayam",
    "lat": 11.45496,
    "lng": 77.4422
  },
  {
    "state": "Tamil Nadu",
    "name": "Gudalur",
    "lat": 9.67826,
    "lng": 77.24951
  },
  {
    "state": "Tamil Nadu",
    "name": "Gudiyatham",
    "lat": 12.94601,
    "lng": 78.87377
  },
  {
    "state": "Tamil Nadu",
    "name": "Guduvancheri",
    "lat": 12.84519,
    "lng": 80.06055
  },
  {
    "state": "Tamil Nadu",
    "name": "Gummidipundi",
    "lat": 13.40765,
    "lng": 80.10879
  },
  {
    "state": "Tamil Nadu",
    "name": "Harur",
    "lat": 12.05267,
    "lng": 78.48023
  },
  {
    "state": "Tamil Nadu",
    "name": "Hosur",
    "lat": 12.73647,
    "lng": 77.83264
  },
  {
    "state": "Tamil Nadu",
    "name": "Idappadi",
    "lat": 11.58624,
    "lng": 77.83891
  },
  {
    "state": "Tamil Nadu",
    "name": "Ilampillai",
    "lat": 11.60659,
    "lng": 78.00676
  },
  {
    "state": "Tamil Nadu",
    "name": "Iluppur",
    "lat": 10.51347,
    "lng": 78.62357
  },
  {
    "state": "Tamil Nadu",
    "name": "Injambakkam",
    "lat": 12.9162,
    "lng": 80.2488
  },
  {
    "state": "Tamil Nadu",
    "name": "Irugur",
    "lat": 11.01782,
    "lng": 77.06285
  },
  {
    "state": "Tamil Nadu",
    "name": "Jalakandapuram",
    "lat": 11.69779,
    "lng": 77.87298
  },
  {
    "state": "Tamil Nadu",
    "name": "Jalarpet",
    "lat": 12.57025,
    "lng": 78.57318
  },
  {
    "state": "Tamil Nadu",
    "name": "Jayamkondacholapuram",
    "lat": 11.21266,
    "lng": 79.36369
  },
  {
    "state": "Tamil Nadu",
    "name": "Kadambur",
    "lat": 8.99739,
    "lng": 77.86191
  },
  {
    "state": "Tamil Nadu",
    "name": "Kadayanallur",
    "lat": 9.07277,
    "lng": 77.34152
  },
  {
    "state": "Tamil Nadu",
    "name": "Kalakkadu",
    "lat": 8.5138,
    "lng": 77.54944
  },
  {
    "state": "Tamil Nadu",
    "name": "Kalavai",
    "lat": 12.77029,
    "lng": 79.41999
  },
  {
    "state": "Tamil Nadu",
    "name": "Kallakkurichchi",
    "lat": 11.7404,
    "lng": 78.959
  },
  {
    "state": "Tamil Nadu",
    "name": "Kallidaikurichi",
    "lat": 8.68591,
    "lng": 77.46592
  },
  {
    "state": "Tamil Nadu",
    "name": "Kallupatti",
    "lat": 9.71667,
    "lng": 77.86667
  },
  {
    "state": "Tamil Nadu",
    "name": "Kalugumalai",
    "lat": 9.14941,
    "lng": 77.70569
  },
  {
    "state": "Tamil Nadu",
    "name": "Kamuthi",
    "lat": 9.40732,
    "lng": 78.37337
  },
  {
    "state": "Tamil Nadu",
    "name": "Kanadukattan",
    "lat": 10.17209,
    "lng": 78.77935
  },
  {
    "state": "Tamil Nadu",
    "name": "Kancheepuram",
    "lat": 12.67,
    "lng": 79.99
  },
  {
    "state": "Tamil Nadu",
    "name": "Kanchipuram",
    "lat": 12.83515,
    "lng": 79.70006
  },
  {
    "state": "Tamil Nadu",
    "name": "Kangayam",
    "lat": 11.00599,
    "lng": 77.5609
  },
  {
    "state": "Tamil Nadu",
    "name": "Kanniyakumari",
    "lat": 8.32,
    "lng": 77.34
  },
  {
    "state": "Tamil Nadu",
    "name": "Karaikkudi",
    "lat": 10.06615,
    "lng": 78.76784
  },
  {
    "state": "Tamil Nadu",
    "name": "Karamadai",
    "lat": 11.24058,
    "lng": 76.96009
  },
  {
    "state": "Tamil Nadu",
    "name": "Karambakkudi",
    "lat": 10.45866,
    "lng": 79.14101
  },
  {
    "state": "Tamil Nadu",
    "name": "Kariapatti",
    "lat": 9.67505,
    "lng": 78.09992
  },
  {
    "state": "Tamil Nadu",
    "name": "Karumbakkam",
    "lat": 12.70203,
    "lng": 80.0911
  },
  {
    "state": "Tamil Nadu",
    "name": "Karur",
    "lat": 10.95771,
    "lng": 78.08095
  },
  {
    "state": "Tamil Nadu",
    "name": "Katpadi",
    "lat": 12.96951,
    "lng": 79.14552
  },
  {
    "state": "Tamil Nadu",
    "name": "Kattivakkam",
    "lat": 13.21667,
    "lng": 80.31667
  },
  {
    "state": "Tamil Nadu",
    "name": "Kattupputtur",
    "lat": 10.99385,
    "lng": 78.21929
  },
  {
    "state": "Tamil Nadu",
    "name": "Kaveripatnam",
    "lat": 12.42186,
    "lng": 78.2188
  },
  {
    "state": "Tamil Nadu",
    "name": "Kayalpattinam",
    "lat": 8.57143,
    "lng": 78.11992
  },
  {
    "state": "Tamil Nadu",
    "name": "Kayattar",
    "lat": 8.94834,
    "lng": 77.77424
  },
  {
    "state": "Tamil Nadu",
    "name": "Keelakarai",
    "lat": 9.23183,
    "lng": 78.78545
  },
  {
    "state": "Tamil Nadu",
    "name": "Kelamangalam",
    "lat": 12.60307,
    "lng": 77.85193
  },
  {
    "state": "Tamil Nadu",
    "name": "Kil Bhuvanagiri",
    "lat": 11.44216,
    "lng": 79.64763
  },
  {
    "state": "Tamil Nadu",
    "name": "Kilvelur",
    "lat": 10.76721,
    "lng": 79.74186
  },
  {
    "state": "Tamil Nadu",
    "name": "Kiranur",
    "lat": 10.56988,
    "lng": 78.78682
  },
  {
    "state": "Tamil Nadu",
    "name": "Kodaikanal",
    "lat": 10.23925,
    "lng": 77.48932
  },
  {
    "state": "Tamil Nadu",
    "name": "Kodumudi",
    "lat": 11.07751,
    "lng": 77.88363
  },
  {
    "state": "Tamil Nadu",
    "name": "Kombai",
    "lat": 9.84745,
    "lng": 77.29603
  },
  {
    "state": "Tamil Nadu",
    "name": "Konganapuram",
    "lat": 11.57105,
    "lng": 77.9004
  },
  {
    "state": "Tamil Nadu",
    "name": "Koothanallur",
    "lat": 10.7199,
    "lng": 79.5157
  },
  {
    "state": "Tamil Nadu",
    "name": "Koradachcheri",
    "lat": 10.77019,
    "lng": 79.49158
  },
  {
    "state": "Tamil Nadu",
    "name": "Korampallam",
    "lat": 8.77506,
    "lng": 78.09158
  },
  {
    "state": "Tamil Nadu",
    "name": "Kotagiri",
    "lat": 11.42072,
    "lng": 76.86035
  },
  {
    "state": "Tamil Nadu",
    "name": "Kottaiyur",
    "lat": 10.10956,
    "lng": 78.7956
  },
  {
    "state": "Tamil Nadu",
    "name": "Kovilpatti",
    "lat": 9.17167,
    "lng": 77.86989
  },
  {
    "state": "Tamil Nadu",
    "name": "Krishnagiri",
    "lat": 12.58,
    "lng": 77.96
  },
  {
    "state": "Tamil Nadu",
    "name": "Kulattur",
    "lat": 9.0032,
    "lng": 78.1928
  },
  {
    "state": "Tamil Nadu",
    "name": "Kulittalai",
    "lat": 10.93487,
    "lng": 78.41251
  },
  {
    "state": "Tamil Nadu",
    "name": "Kumaralingam",
    "lat": 10.48936,
    "lng": 77.3499
  },
  {
    "state": "Tamil Nadu",
    "name": "Kumbakonam",
    "lat": 10.96209,
    "lng": 79.39124
  },
  {
    "state": "Tamil Nadu",
    "name": "Kunnattur",
    "lat": 12.34782,
    "lng": 78.51046
  },
  {
    "state": "Tamil Nadu",
    "name": "Kurinjippadi",
    "lat": 11.55028,
    "lng": 79.59066
  },
  {
    "state": "Tamil Nadu",
    "name": "Kuttalam",
    "lat": 8.9303,
    "lng": 77.26951
  },
  {
    "state": "Tamil Nadu",
    "name": "Kuzhithurai",
    "lat": 8.31792,
    "lng": 77.19192
  },
  {
    "state": "Tamil Nadu",
    "name": "Lalgudi",
    "lat": 10.87419,
    "lng": 78.81935
  },
  {
    "state": "Tamil Nadu",
    "name": "Madambakkam",
    "lat": 12.8525,
    "lng": 80.04667
  },
  {
    "state": "Tamil Nadu",
    "name": "Madipakkam",
    "lat": 12.96226,
    "lng": 80.19864
  },
  {
    "state": "Tamil Nadu",
    "name": "Madukkarai",
    "lat": 10.90568,
    "lng": 76.96344
  },
  {
    "state": "Tamil Nadu",
    "name": "Madukkur",
    "lat": 10.48098,
    "lng": 79.39939
  },
  {
    "state": "Tamil Nadu",
    "name": "Madurai",
    "lat": 9.89,
    "lng": 78.03
  },
  {
    "state": "Tamil Nadu",
    "name": "Madurantakam",
    "lat": 12.51167,
    "lng": 79.88485
  },
  {
    "state": "Tamil Nadu",
    "name": "Mallapuram",
    "lat": 11.98231,
    "lng": 78.24796
  },
  {
    "state": "Tamil Nadu",
    "name": "Mallasamudram",
    "lat": 11.49333,
    "lng": 78.03119
  },
  {
    "state": "Tamil Nadu",
    "name": "Mallur",
    "lat": 11.54424,
    "lng": 78.14078
  },
  {
    "state": "Tamil Nadu",
    "name": "Manali",
    "lat": 13.16667,
    "lng": 80.26667
  },
  {
    "state": "Tamil Nadu",
    "name": "Manalurpettai",
    "lat": 12.00788,
    "lng": 79.09184
  },
  {
    "state": "Tamil Nadu",
    "name": "Manamadurai",
    "lat": 9.67318,
    "lng": 78.47096
  },
  {
    "state": "Tamil Nadu",
    "name": "Manappakkam",
    "lat": 13.01083,
    "lng": 80.16861
  },
  {
    "state": "Tamil Nadu",
    "name": "Manapparai",
    "lat": 10.60772,
    "lng": 78.42582
  },
  {
    "state": "Tamil Nadu",
    "name": "Manavalakurichi",
    "lat": 8.14776,
    "lng": 77.30552
  },
  {
    "state": "Tamil Nadu",
    "name": "Mandapam",
    "lat": 9.27571,
    "lng": 79.12362
  },
  {
    "state": "Tamil Nadu",
    "name": "Mangalam",
    "lat": 9.76473,
    "lng": 78.64037
  },
  {
    "state": "Tamil Nadu",
    "name": "Mannargudi",
    "lat": 10.66626,
    "lng": 79.45064
  },
  {
    "state": "Tamil Nadu",
    "name": "Marakkanam",
    "lat": 12.19214,
    "lng": 79.94193
  },
  {
    "state": "Tamil Nadu",
    "name": "Marandahalli",
    "lat": 12.38826,
    "lng": 78.00316
  },
  {
    "state": "Tamil Nadu",
    "name": "Masinigudi",
    "lat": 11.56831,
    "lng": 76.64087
  },
  {
    "state": "Tamil Nadu",
    "name": "Mattur",
    "lat": 11.32147,
    "lng": 79.20245
  },
  {
    "state": "Tamil Nadu",
    "name": "Mayiladuthurai",
    "lat": 11.10354,
    "lng": 79.655
  },
  {
    "state": "Tamil Nadu",
    "name": "Melur",
    "lat": 10.03241,
    "lng": 78.3393
  },
  {
    "state": "Tamil Nadu",
    "name": "Mettuppalaiyam",
    "lat": 11.16806,
    "lng": 78.44944
  },
  {
    "state": "Tamil Nadu",
    "name": "Mettur",
    "lat": 11.78796,
    "lng": 77.8008
  },
  {
    "state": "Tamil Nadu",
    "name": "Minjur",
    "lat": 13.27951,
    "lng": 80.25815
  },
  {
    "state": "Tamil Nadu",
    "name": "Mohanur",
    "lat": 11.05936,
    "lng": 78.13965
  },
  {
    "state": "Tamil Nadu",
    "name": "Mudukulattur",
    "lat": 9.34169,
    "lng": 78.51388
  },
  {
    "state": "Tamil Nadu",
    "name": "Mulanur",
    "lat": 10.79426,
    "lng": 77.7115
  },
  {
    "state": "Tamil Nadu",
    "name": "Musiri",
    "lat": 10.95299,
    "lng": 78.44427
  },
  {
    "state": "Tamil Nadu",
    "name": "Muttupet",
    "lat": 10.39505,
    "lng": 79.49353
  },
  {
    "state": "Tamil Nadu",
    "name": "Naduvattam",
    "lat": 11.48075,
    "lng": 76.54365
  },
  {
    "state": "Tamil Nadu",
    "name": "Nagapattinam",
    "lat": 10.85,
    "lng": 79.74
  },
  {
    "state": "Tamil Nadu",
    "name": "Nagercoil",
    "lat": 8.17899,
    "lng": 77.43227
  },
  {
    "state": "Tamil Nadu",
    "name": "Namagiripettai",
    "lat": 11.45513,
    "lng": 78.26818
  },
  {
    "state": "Tamil Nadu",
    "name": "Namakkal",
    "lat": 11.3,
    "lng": 78.13
  },
  {
    "state": "Tamil Nadu",
    "name": "Nambiyur",
    "lat": 11.35811,
    "lng": 77.32115
  },
  {
    "state": "Tamil Nadu",
    "name": "Nambutalai",
    "lat": 9.72766,
    "lng": 79.00707
  },
  {
    "state": "Tamil Nadu",
    "name": "Nandambakkam",
    "lat": 12.97795,
    "lng": 80.06781
  },
  {
    "state": "Tamil Nadu",
    "name": "Nangavalli",
    "lat": 11.76189,
    "lng": 77.89093
  },
  {
    "state": "Tamil Nadu",
    "name": "Nangilickondan",
    "lat": 12.25539,
    "lng": 79.47508
  },
  {
    "state": "Tamil Nadu",
    "name": "Nanguneri",
    "lat": 8.49326,
    "lng": 77.65806
  },
  {
    "state": "Tamil Nadu",
    "name": "Nannilam",
    "lat": 10.87933,
    "lng": 79.61062
  },
  {
    "state": "Tamil Nadu",
    "name": "Naravarikuppam",
    "lat": 13.19133,
    "lng": 80.18473
  },
  {
    "state": "Tamil Nadu",
    "name": "Nattam",
    "lat": 10.22776,
    "lng": 78.22969
  },
  {
    "state": "Tamil Nadu",
    "name": "Nattarasankottai",
    "lat": 9.86905,
    "lng": 78.55305
  },
  {
    "state": "Tamil Nadu",
    "name": "Needamangalam",
    "lat": 10.77378,
    "lng": 79.41875
  },
  {
    "state": "Tamil Nadu",
    "name": "Neelankarai",
    "lat": 12.9495,
    "lng": 80.2592
  },
  {
    "state": "Tamil Nadu",
    "name": "Negapatam",
    "lat": 10.76377,
    "lng": 79.84313
  },
  {
    "state": "Tamil Nadu",
    "name": "Nellikkuppam",
    "lat": 11.77554,
    "lng": 79.67016
  },
  {
    "state": "Tamil Nadu",
    "name": "Nilakottai",
    "lat": 10.165,
    "lng": 77.85024
  },
  {
    "state": "Tamil Nadu",
    "name": "Nilgiris",
    "lat": 11.46,
    "lng": 76.64
  },
  {
    "state": "Tamil Nadu",
    "name": "Odugattur",
    "lat": 12.76793,
    "lng": 78.88304
  },
  {
    "state": "Tamil Nadu",
    "name": "Omalur",
    "lat": 11.74099,
    "lng": 78.04559
  },
  {
    "state": "Tamil Nadu",
    "name": "Ooty",
    "lat": 11.4134,
    "lng": 76.69521
  },
  {
    "state": "Tamil Nadu",
    "name": "Padmanabhapuram",
    "lat": 8.24462,
    "lng": 77.32581
  },
  {
    "state": "Tamil Nadu",
    "name": "Palakkodu",
    "lat": 12.30696,
    "lng": 78.07022
  },
  {
    "state": "Tamil Nadu",
    "name": "Palamedu",
    "lat": 10.10501,
    "lng": 78.11336
  },
  {
    "state": "Tamil Nadu",
    "name": "Palani",
    "lat": 10.45034,
    "lng": 77.5209
  },
  {
    "state": "Tamil Nadu",
    "name": "Palavakkam",
    "lat": 12.9535,
    "lng": 80.2572
  },
  {
    "state": "Tamil Nadu",
    "name": "Palladam",
    "lat": 10.99175,
    "lng": 77.28633
  },
  {
    "state": "Tamil Nadu",
    "name": "Pallappatti",
    "lat": 10.72057,
    "lng": 77.87951
  },
  {
    "state": "Tamil Nadu",
    "name": "Pallattur",
    "lat": 10.14609,
    "lng": 78.80309
  },
  {
    "state": "Tamil Nadu",
    "name": "Pallavaram",
    "lat": 12.96796,
    "lng": 80.15025
  },
  {
    "state": "Tamil Nadu",
    "name": "Pallikondai",
    "lat": 12.90518,
    "lng": 78.9427
  },
  {
    "state": "Tamil Nadu",
    "name": "Pallipattu",
    "lat": 13.3386,
    "lng": 79.44489
  },
  {
    "state": "Tamil Nadu",
    "name": "Pallippatti",
    "lat": 11.9399,
    "lng": 78.40161
  },
  {
    "state": "Tamil Nadu",
    "name": "Panruti",
    "lat": 11.77662,
    "lng": 79.55269
  },
  {
    "state": "Tamil Nadu",
    "name": "Papanasam",
    "lat": 10.92687,
    "lng": 79.27056
  },
  {
    "state": "Tamil Nadu",
    "name": "Papireddippatti",
    "lat": 11.91774,
    "lng": 78.36865
  },
  {
    "state": "Tamil Nadu",
    "name": "Papparappatti",
    "lat": 12.22086,
    "lng": 78.0592
  },
  {
    "state": "Tamil Nadu",
    "name": "Paramagudi",
    "lat": 9.54633,
    "lng": 78.5907
  },
  {
    "state": "Tamil Nadu",
    "name": "Pattukkottai",
    "lat": 10.42358,
    "lng": 79.31949
  },
  {
    "state": "Tamil Nadu",
    "name": "Pennadam",
    "lat": 11.40389,
    "lng": 79.24156
  },
  {
    "state": "Tamil Nadu",
    "name": "Pennagaram",
    "lat": 12.13433,
    "lng": 77.89525
  },
  {
    "state": "Tamil Nadu",
    "name": "Pennathur",
    "lat": 12.24681,
    "lng": 79.22592
  },
  {
    "state": "Tamil Nadu",
    "name": "Peraiyur",
    "lat": 9.73579,
    "lng": 77.78955
  },
  {
    "state": "Tamil Nadu",
    "name": "Perambalur",
    "lat": 11.272,
    "lng": 78.8738
  },
  {
    "state": "Tamil Nadu",
    "name": "Peranamallur",
    "lat": 12.57052,
    "lng": 79.43332
  },
  {
    "state": "Tamil Nadu",
    "name": "Peranampattu",
    "lat": 12.9343,
    "lng": 78.7189
  },
  {
    "state": "Tamil Nadu",
    "name": "Peravurani",
    "lat": 10.29035,
    "lng": 79.20156
  },
  {
    "state": "Tamil Nadu",
    "name": "Periyakulam",
    "lat": 10.12268,
    "lng": 77.54372
  },
  {
    "state": "Tamil Nadu",
    "name": "Periyanayakkanpalaiyam",
    "lat": 11.15255,
    "lng": 76.95159
  },
  {
    "state": "Tamil Nadu",
    "name": "Periyanegamam",
    "lat": 10.74317,
    "lng": 77.10296
  },
  {
    "state": "Tamil Nadu",
    "name": "Periyapatti",
    "lat": 10.75812,
    "lng": 77.27087
  },
  {
    "state": "Tamil Nadu",
    "name": "Periyapattinam",
    "lat": 9.27263,
    "lng": 78.90232
  },
  {
    "state": "Tamil Nadu",
    "name": "Perundurai",
    "lat": 11.27564,
    "lng": 77.58794
  },
  {
    "state": "Tamil Nadu",
    "name": "Perungudi",
    "lat": 12.96095,
    "lng": 80.24094
  },
  {
    "state": "Tamil Nadu",
    "name": "Perur",
    "lat": 10.97519,
    "lng": 76.91292
  },
  {
    "state": "Tamil Nadu",
    "name": "Pollachi",
    "lat": 10.65825,
    "lng": 77.0085
  },
  {
    "state": "Tamil Nadu",
    "name": "Polur",
    "lat": 12.51217,
    "lng": 79.12405
  },
  {
    "state": "Tamil Nadu",
    "name": "Ponnamaravati",
    "lat": 10.28032,
    "lng": 78.53601
  },
  {
    "state": "Tamil Nadu",
    "name": "Ponneri",
    "lat": 13.33868,
    "lng": 80.19487
  },
  {
    "state": "Tamil Nadu",
    "name": "Poonamalle",
    "lat": 13.04888,
    "lng": 80.11488
  },
  {
    "state": "Tamil Nadu",
    "name": "Porur",
    "lat": 13.03565,
    "lng": 80.15821
  },
  {
    "state": "Tamil Nadu",
    "name": "Pudukkottai",
    "lat": 10.35,
    "lng": 78.9
  },
  {
    "state": "Tamil Nadu",
    "name": "Puduppatti",
    "lat": 11.15217,
    "lng": 78.21205
  },
  {
    "state": "Tamil Nadu",
    "name": "Pudur",
    "lat": 12.99801,
    "lng": 79.14352
  },
  {
    "state": "Tamil Nadu",
    "name": "Puduvayal",
    "lat": 13.33015,
    "lng": 80.14577
  },
  {
    "state": "Tamil Nadu",
    "name": "Puliyangudi",
    "lat": 9.17489,
    "lng": 77.39799
  },
  {
    "state": "Tamil Nadu",
    "name": "Puliyur",
    "lat": 10.63375,
    "lng": 78.84139
  },
  {
    "state": "Tamil Nadu",
    "name": "Pullambadi",
    "lat": 10.9411,
    "lng": 78.91041
  },
  {
    "state": "Tamil Nadu",
    "name": "Punjai Puliyampatti",
    "lat": 11.35163,
    "lng": 77.16671
  },
  {
    "state": "Tamil Nadu",
    "name": "Rajapalaiyam",
    "lat": 9.45296,
    "lng": 77.55335
  },
  {
    "state": "Tamil Nadu",
    "name": "Ramanathapuram",
    "lat": 9.37158,
    "lng": 78.83077
  },
  {
    "state": "Tamil Nadu",
    "name": "Rameswaram",
    "lat": 9.2885,
    "lng": 79.31271
  },
  {
    "state": "Tamil Nadu",
    "name": "Ranipet",
    "lat": 12.9534749,
    "lng": 79.2815916
  },
  {
    "state": "Tamil Nadu",
    "name": "Rasipuram",
    "lat": 11.46009,
    "lng": 78.18635
  },
  {
    "state": "Tamil Nadu",
    "name": "Saint Thomas Mount",
    "lat": 13.00334,
    "lng": 80.19614
  },
  {
    "state": "Tamil Nadu",
    "name": "Salem",
    "lat": 11.6537012,
    "lng": 77.9982106
  },
  {
    "state": "Tamil Nadu",
    "name": "Sathankulam",
    "lat": 8.44164,
    "lng": 77.91349
  },
  {
    "state": "Tamil Nadu",
    "name": "Sathyamangalam",
    "lat": 11.50526,
    "lng": 77.23826
  },
  {
    "state": "Tamil Nadu",
    "name": "Sattur",
    "lat": 9.35592,
    "lng": 77.92457
  },
  {
    "state": "Tamil Nadu",
    "name": "Sayalkudi",
    "lat": 9.16925,
    "lng": 78.44702
  },
  {
    "state": "Tamil Nadu",
    "name": "Seven Pagodas",
    "lat": 12.62091,
    "lng": 80.19331
  },
  {
    "state": "Tamil Nadu",
    "name": "Sholinghur",
    "lat": 13.1181,
    "lng": 79.42025
  },
  {
    "state": "Tamil Nadu",
    "name": "Singanallur",
    "lat": 10.99898,
    "lng": 77.03238
  },
  {
    "state": "Tamil Nadu",
    "name": "Singapperumalkovil",
    "lat": 12.75947,
    "lng": 80.0075
  },
  {
    "state": "Tamil Nadu",
    "name": "Sirkazhi",
    "lat": 11.23725,
    "lng": 79.73585
  },
  {
    "state": "Tamil Nadu",
    "name": "Sirumugai",
    "lat": 11.32137,
    "lng": 77.00521
  },
  {
    "state": "Tamil Nadu",
    "name": "Sivaganga",
    "lat": 9.92762,
    "lng": 78.53763
  },
  {
    "state": "Tamil Nadu",
    "name": "Sivagiri",
    "lat": 9.34461,
    "lng": 77.42911
  },
  {
    "state": "Tamil Nadu",
    "name": "Sivakasi",
    "lat": 9.44999,
    "lng": 77.79797
  },
  {
    "state": "Tamil Nadu",
    "name": "Srimushnam",
    "lat": 11.40118,
    "lng": 79.40384
  },
  {
    "state": "Tamil Nadu",
    "name": "Sriperumbudur",
    "lat": 12.96763,
    "lng": 79.94197
  },
  {
    "state": "Tamil Nadu",
    "name": "Srivaikuntam",
    "lat": 8.62931,
    "lng": 77.91281
  },
  {
    "state": "Tamil Nadu",
    "name": "Srivilliputhur",
    "lat": 9.51272,
    "lng": 77.63369
  },
  {
    "state": "Tamil Nadu",
    "name": "Suchindram",
    "lat": 8.15442,
    "lng": 77.46704
  },
  {
    "state": "Tamil Nadu",
    "name": "Sulur",
    "lat": 11.02427,
    "lng": 77.12565
  },
  {
    "state": "Tamil Nadu",
    "name": "Surandai",
    "lat": 8.97574,
    "lng": 77.41923
  },
  {
    "state": "Tamil Nadu",
    "name": "Swamimalai",
    "lat": 10.95747,
    "lng": 79.32931
  },
  {
    "state": "Tamil Nadu",
    "name": "Tambaram",
    "lat": 12.9246,
    "lng": 80.12707
  },
  {
    "state": "Tamil Nadu",
    "name": "Tanjore",
    "lat": 10.78523,
    "lng": 79.13909
  },
  {
    "state": "Tamil Nadu",
    "name": "Taramangalam",
    "lat": 11.69403,
    "lng": 77.97035
  },
  {
    "state": "Tamil Nadu",
    "name": "Tattayyangarpettai",
    "lat": 11.12417,
    "lng": 78.44916
  },
  {
    "state": "Tamil Nadu",
    "name": "Thanjavur",
    "lat": 10.64,
    "lng": 79.22
  },
  {
    "state": "Tamil Nadu",
    "name": "Tharangambadi",
    "lat": 11.02764,
    "lng": 79.85425
  },
  {
    "state": "Tamil Nadu",
    "name": "Theni",
    "lat": 9.85,
    "lng": 77.42
  },
  {
    "state": "Tamil Nadu",
    "name": "Thenkasi",
    "lat": 8.96003,
    "lng": 77.31525
  },
  {
    "state": "Tamil Nadu",
    "name": "Thirukattupalli",
    "lat": 10.84431,
    "lng": 78.95647
  },
  {
    "state": "Tamil Nadu",
    "name": "Thiruthani",
    "lat": 13.17594,
    "lng": 79.61637
  },
  {
    "state": "Tamil Nadu",
    "name": "Thiruvaiyaru",
    "lat": 10.88405,
    "lng": 79.10362
  },
  {
    "state": "Tamil Nadu",
    "name": "Thiruvallur",
    "lat": 13.25,
    "lng": 80
  },
  {
    "state": "Tamil Nadu",
    "name": "Thiruvarur",
    "lat": 10.77269,
    "lng": 79.6368
  },
  {
    "state": "Tamil Nadu",
    "name": "Thiruvidaimaruthur",
    "lat": 10.99857,
    "lng": 79.45227
  },
  {
    "state": "Tamil Nadu",
    "name": "Thoothukudi",
    "lat": 8.76735,
    "lng": 78.13425
  },
  {
    "state": "Tamil Nadu",
    "name": "Tindivanam",
    "lat": 12.234,
    "lng": 79.65551
  },
  {
    "state": "Tamil Nadu",
    "name": "Tinnanur",
    "lat": 13.11448,
    "lng": 80.02713
  },
  {
    "state": "Tamil Nadu",
    "name": "Tiruchchendur",
    "lat": 8.49725,
    "lng": 78.11906
  },
  {
    "state": "Tamil Nadu",
    "name": "Tiruchengode",
    "lat": 11.38016,
    "lng": 77.89444
  },
  {
    "state": "Tamil Nadu",
    "name": "Tiruchirappalli",
    "lat": 10.97,
    "lng": 78.65
  },
  {
    "state": "Tamil Nadu",
    "name": "Tirukkoyilur",
    "lat": 11.9662,
    "lng": 79.20259
  },
  {
    "state": "Tamil Nadu",
    "name": "Tirumullaivasal",
    "lat": 11.23996,
    "lng": 79.83705
  },
  {
    "state": "Tamil Nadu",
    "name": "Tirunelveli",
    "lat": 8.72742,
    "lng": 77.6838
  },
  {
    "state": "Tamil Nadu",
    "name": "Tirunelveli Kattabo",
    "lat": 8.7927,
    "lng": 77.57409
  },
  {
    "state": "Tamil Nadu",
    "name": "Tiruppalaikudi",
    "lat": 9.54606,
    "lng": 78.91721
  },
  {
    "state": "Tamil Nadu",
    "name": "Tirupparangunram",
    "lat": 9.88151,
    "lng": 78.07306
  },
  {
    "state": "Tamil Nadu",
    "name": "Tiruppur",
    "lat": 11.11541,
    "lng": 77.35456
  },
  {
    "state": "Tamil Nadu",
    "name": "Tiruppuvanam",
    "lat": 9.82564,
    "lng": 78.25795
  },
  {
    "state": "Tamil Nadu",
    "name": "Tiruttangal",
    "lat": 9.48333,
    "lng": 77.83333
  },
  {
    "state": "Tamil Nadu",
    "name": "Tiruvannamalai",
    "lat": 12.51,
    "lng": 79.09
  },
  {
    "state": "Tamil Nadu",
    "name": "Tiruvottiyur",
    "lat": 13.15823,
    "lng": 80.30181
  },
  {
    "state": "Tamil Nadu",
    "name": "Tisaiyanvilai",
    "lat": 8.33702,
    "lng": 77.86776
  },
  {
    "state": "Tamil Nadu",
    "name": "Tondi",
    "lat": 9.74173,
    "lng": 79.01774
  },
  {
    "state": "Tamil Nadu",
    "name": "Turaiyur",
    "lat": 11.14968,
    "lng": 78.5987
  },
  {
    "state": "Tamil Nadu",
    "name": "Udangudi",
    "lat": 8.42918,
    "lng": 78.02968
  },
  {
    "state": "Tamil Nadu",
    "name": "Udumalaippettai",
    "lat": 10.58806,
    "lng": 77.24779
  },
  {
    "state": "Tamil Nadu",
    "name": "Uppiliyapuram",
    "lat": 11.26356,
    "lng": 78.5139
  },
  {
    "state": "Tamil Nadu",
    "name": "Usilampatti",
    "lat": 9.96936,
    "lng": 77.78621
  },
  {
    "state": "Tamil Nadu",
    "name": "Uttamapalaiyam",
    "lat": 9.80701,
    "lng": 77.32718
  },
  {
    "state": "Tamil Nadu",
    "name": "Uttiramerur",
    "lat": 12.61433,
    "lng": 79.75748
  },
  {
    "state": "Tamil Nadu",
    "name": "Uttukkuli",
    "lat": 11.16892,
    "lng": 77.45431
  },
  {
    "state": "Tamil Nadu",
    "name": "V.S.K.Valasai (Dindigul-Dist.)",
    "lat": 10.31549,
    "lng": 78.15141
  },
  {
    "state": "Tamil Nadu",
    "name": "Vadakku Valliyur",
    "lat": 8.38286,
    "lng": 77.61221
  },
  {
    "state": "Tamil Nadu",
    "name": "Vadakku Viravanallur",
    "lat": 8.69786,
    "lng": 77.51916
  },
  {
    "state": "Tamil Nadu",
    "name": "Vadamadurai",
    "lat": 10.44081,
    "lng": 78.09784
  },
  {
    "state": "Tamil Nadu",
    "name": "Vadippatti",
    "lat": 10.08481,
    "lng": 77.96113
  },
  {
    "state": "Tamil Nadu",
    "name": "Valangaiman",
    "lat": 10.89012,
    "lng": 79.39322
  },
  {
    "state": "Tamil Nadu",
    "name": "Valavanur",
    "lat": 11.92094,
    "lng": 79.58239
  },
  {
    "state": "Tamil Nadu",
    "name": "Vallam",
    "lat": 10.71988,
    "lng": 79.05981
  },
  {
    "state": "Tamil Nadu",
    "name": "Valparai",
    "lat": 10.32691,
    "lng": 76.95116
  },
  {
    "state": "Tamil Nadu",
    "name": "Vandalur",
    "lat": 12.8924,
    "lng": 80.08079
  },
  {
    "state": "Tamil Nadu",
    "name": "Vandavasi",
    "lat": 12.50429,
    "lng": 79.60556
  },
  {
    "state": "Tamil Nadu",
    "name": "Vaniyambadi",
    "lat": 12.68162,
    "lng": 78.62014
  },
  {
    "state": "Tamil Nadu",
    "name": "Vasudevanallur",
    "lat": 9.24171,
    "lng": 77.41177
  },
  {
    "state": "Tamil Nadu",
    "name": "Vattalkundu",
    "lat": 10.16069,
    "lng": 77.75883
  },
  {
    "state": "Tamil Nadu",
    "name": "Vedaraniyam",
    "lat": 10.37208,
    "lng": 79.85095
  },
  {
    "state": "Tamil Nadu",
    "name": "Vedasandur",
    "lat": 10.53102,
    "lng": 77.95019
  },
  {
    "state": "Tamil Nadu",
    "name": "Velankanni",
    "lat": 10.68333,
    "lng": 79.83333
  },
  {
    "state": "Tamil Nadu",
    "name": "Vellanur",
    "lat": 13.15804,
    "lng": 80.10634
  },
  {
    "state": "Tamil Nadu",
    "name": "Vellore",
    "lat": 12.86,
    "lng": 79.035
  },
  {
    "state": "Tamil Nadu",
    "name": "Velur",
    "lat": 11.10825,
    "lng": 78.00113
  },
  {
    "state": "Tamil Nadu",
    "name": "Vengavasal",
    "lat": 12.89911,
    "lng": 80.169
  },
  {
    "state": "Tamil Nadu",
    "name": "Vettaikkaranpudur",
    "lat": 10.56207,
    "lng": 76.91305
  },
  {
    "state": "Tamil Nadu",
    "name": "Vettavalam",
    "lat": 12.10769,
    "lng": 79.24516
  },
  {
    "state": "Tamil Nadu",
    "name": "Vijayapuri",
    "lat": 11.2453,
    "lng": 77.50066
  },
  {
    "state": "Tamil Nadu",
    "name": "Vikravandi",
    "lat": 12.0369,
    "lng": 79.54595
  },
  {
    "state": "Tamil Nadu",
    "name": "Vilattikulam",
    "lat": 9.13227,
    "lng": 78.16635
  },
  {
    "state": "Tamil Nadu",
    "name": "Villupuram",
    "lat": 11.99,
    "lng": 79.37
  },
  {
    "state": "Tamil Nadu",
    "name": "Viraganur",
    "lat": 11.47613,
    "lng": 78.73553
  },
  {
    "state": "Tamil Nadu",
    "name": "Virudhunagar",
    "lat": 9.45,
    "lng": 77.92
  },
  {
    "state": "Tamil Nadu",
    "name": "Vriddhachalam",
    "lat": 11.5183,
    "lng": 79.32411
  },
  {
    "state": "Tamil Nadu",
    "name": "Walajapet",
    "lat": 12.9251,
    "lng": 79.36626
  },
  {
    "state": "Tamil Nadu",
    "name": "Wallajahbad",
    "lat": 12.79041,
    "lng": 79.82358
  },
  {
    "state": "Tamil Nadu",
    "name": "Wellington",
    "lat": 11.36552,
    "lng": 76.78442
  },
  {
    "state": "Telangana",
    "name": "Adilabad",
    "lat": 19.5,
    "lng": 78.5
  },
  {
    "state": "Telangana",
    "name": "Alampur",
    "lat": 15.87987,
    "lng": 78.13352
  },
  {
    "state": "Telangana",
    "name": "Andol",
    "lat": 17.81458,
    "lng": 78.07713
  },
  {
    "state": "Telangana",
    "name": "Asifabad",
    "lat": 19.35851,
    "lng": 79.28415
  },
  {
    "state": "Telangana",
    "name": "Balapur",
    "lat": 17.31018,
    "lng": 78.49969
  },
  {
    "state": "Telangana",
    "name": "Banswada",
    "lat": 18.37725,
    "lng": 77.88007
  },
  {
    "state": "Telangana",
    "name": "Bellampalli",
    "lat": 19.05577,
    "lng": 79.493
  },
  {
    "state": "Telangana",
    "name": "Bhadrachalam",
    "lat": 17.66846,
    "lng": 80.88887
  },
  {
    "state": "Telangana",
    "name": "Bhadradri Kothagudem",
    "lat": 17.5546,
    "lng": 80.61976
  },
  {
    "state": "Telangana",
    "name": "Bhaisa",
    "lat": 19.11285,
    "lng": 77.96336
  },
  {
    "state": "Telangana",
    "name": "Bhongir",
    "lat": 17.51544,
    "lng": 78.88563
  },
  {
    "state": "Telangana",
    "name": "Bodhan",
    "lat": 18.66208,
    "lng": 77.88581
  },
  {
    "state": "Telangana",
    "name": "Chandur",
    "lat": 17.87455,
    "lng": 78.10017
  },
  {
    "state": "Telangana",
    "name": "Chatakonda",
    "lat": 17.55303,
    "lng": 80.6477
  },
  {
    "state": "Telangana",
    "name": "Dasnapur",
    "lat": 19.65399,
    "lng": 78.51213
  },
  {
    "state": "Telangana",
    "name": "Devarkonda",
    "lat": 16.69186,
    "lng": 78.92073
  },
  {
    "state": "Telangana",
    "name": "Dornakal",
    "lat": 17.44475,
    "lng": 80.14905
  },
  {
    "state": "Telangana",
    "name": "Farrukhnagar",
    "lat": 17.07787,
    "lng": 78.20339
  },
  {
    "state": "Telangana",
    "name": "Gaddi Annaram",
    "lat": 17.36687,
    "lng": 78.5242
  },
  {
    "state": "Telangana",
    "name": "Gadwal",
    "lat": 16.23504,
    "lng": 77.79556
  },
  {
    "state": "Telangana",
    "name": "Ghatkesar",
    "lat": 17.45081,
    "lng": 78.68366
  },
  {
    "state": "Telangana",
    "name": "Gopalur",
    "lat": 16.6122,
    "lng": 77.80728
  },
  {
    "state": "Telangana",
    "name": "Gudur",
    "lat": 17.49174,
    "lng": 78.82302
  },
  {
    "state": "Telangana",
    "name": "Hyderabad",
    "lat": 17.38405,
    "lng": 78.45636
  },
  {
    "state": "Telangana",
    "name": "Jagtial",
    "lat": 18.79473,
    "lng": 78.91661
  },
  {
    "state": "Telangana",
    "name": "Jangaon",
    "lat": 17.72602,
    "lng": 79.15236
  },
  {
    "state": "Telangana",
    "name": "Jangoan",
    "lat": 17.72943,
    "lng": 79.16096
  },
  {
    "state": "Telangana",
    "name": "Jayashankar Bhupalapally",
    "lat": 18.19678,
    "lng": 79.93976
  },
  {
    "state": "Telangana",
    "name": "Jogulamba Gadwal",
    "lat": 16.23401,
    "lng": 77.80564
  },
  {
    "state": "Telangana",
    "name": "Kagaznagar",
    "lat": 19.33159,
    "lng": 79.46605
  },
  {
    "state": "Telangana",
    "name": "Kamareddi",
    "lat": 18.32001,
    "lng": 78.34177
  },
  {
    "state": "Telangana",
    "name": "Kamareddy",
    "lat": 18.32567,
    "lng": 78.33416
  },
  {
    "state": "Telangana",
    "name": "Karimnagar",
    "lat": 18.33844,
    "lng": 79.22938
  },
  {
    "state": "Telangana",
    "name": "Khammam",
    "lat": 17.5,
    "lng": 80.33333
  },
  {
    "state": "Telangana",
    "name": "Kodar",
    "lat": 16.9985,
    "lng": 79.9656
  },
  {
    "state": "Telangana",
    "name": "Koratla",
    "lat": 18.82154,
    "lng": 78.71186
  },
  {
    "state": "Telangana",
    "name": "Kothapet",
    "lat": 19.35176,
    "lng": 79.48323
  },
  {
    "state": "Telangana",
    "name": "Kottagudem",
    "lat": 17.55106,
    "lng": 80.61779
  },
  {
    "state": "Telangana",
    "name": "Kottapalli",
    "lat": 18.49543,
    "lng": 79.0943
  },
  {
    "state": "Telangana",
    "name": "Kukatpalli",
    "lat": 17.48486,
    "lng": 78.41376
  },
  {
    "state": "Telangana",
    "name": "Kyathampalle",
    "lat": 19.66781,
    "lng": 78.5289
  },
  {
    "state": "Telangana",
    "name": "Lakshettipet",
    "lat": 18.86667,
    "lng": 79.21667
  },
  {
    "state": "Telangana",
    "name": "Lal Bahadur Nagar",
    "lat": 17.34769,
    "lng": 78.55757
  },
  {
    "state": "Telangana",
    "name": "Mahabubabad",
    "lat": 17.6004,
    "lng": 80.00543
  },
  {
    "state": "Telangana",
    "name": "Mahbubnagar",
    "lat": 16.63171,
    "lng": 77.75556
  },
  {
    "state": "Telangana",
    "name": "Malkajgiri",
    "lat": 17.44781,
    "lng": 78.52633
  },
  {
    "state": "Telangana",
    "name": "Mancheral",
    "lat": 18.87074,
    "lng": 79.42863
  },
  {
    "state": "Telangana",
    "name": "Mandamarri",
    "lat": 18.96506,
    "lng": 79.47475
  },
  {
    "state": "Telangana",
    "name": "Manthani",
    "lat": 18.65087,
    "lng": 79.66501
  },
  {
    "state": "Telangana",
    "name": "Manuguru",
    "lat": 17.98102,
    "lng": 80.7547
  },
  {
    "state": "Telangana",
    "name": "Medak",
    "lat": 17.75,
    "lng": 78.25
  },
  {
    "state": "Telangana",
    "name": "Medchal",
    "lat": 17.62972,
    "lng": 78.48139
  },
  {
    "state": "Telangana",
    "name": "Medchal Malkajgiri",
    "lat": 17.60644,
    "lng": 78.54007
  },
  {
    "state": "Telangana",
    "name": "Mirialguda",
    "lat": 16.8722,
    "lng": 79.56247
  },
  {
    "state": "Telangana",
    "name": "Nagar Karnul",
    "lat": 16.4821,
    "lng": 78.32471
  },
  {
    "state": "Telangana",
    "name": "Nalgonda",
    "lat": 17.16667,
    "lng": 79.5
  },
  {
    "state": "Telangana",
    "name": "Narayanpet",
    "lat": 16.74799,
    "lng": 77.4954
  },
  {
    "state": "Telangana",
    "name": "Narsingi",
    "lat": 18.04468,
    "lng": 78.42516
  },
  {
    "state": "Telangana",
    "name": "Naspur",
    "lat": 18.84577,
    "lng": 79.46165
  },
  {
    "state": "Telangana",
    "name": "Nirmal",
    "lat": 19.09685,
    "lng": 78.34407
  },
  {
    "state": "Telangana",
    "name": "Nizamabad",
    "lat": 18.75,
    "lng": 78.25
  },
  {
    "state": "Telangana",
    "name": "Paloncha",
    "lat": 17.60184,
    "lng": 80.70509
  },
  {
    "state": "Telangana",
    "name": "Palwancha",
    "lat": 17.58152,
    "lng": 80.67651
  },
  {
    "state": "Telangana",
    "name": "Patancheru",
    "lat": 17.53334,
    "lng": 78.2645
  },
  {
    "state": "Telangana",
    "name": "Peddapalli",
    "lat": 18.61357,
    "lng": 79.37442
  },
  {
    "state": "Telangana",
    "name": "Quthbullapur",
    "lat": 17.50107,
    "lng": 78.45818
  },
  {
    "state": "Telangana",
    "name": "Rajanna Sircilla",
    "lat": 18.38629,
    "lng": 78.8156
  },
  {
    "state": "Telangana",
    "name": "Ramagundam",
    "lat": 18.755,
    "lng": 79.474
  },
  {
    "state": "Telangana",
    "name": "Ramgundam",
    "lat": 18.80084,
    "lng": 79.45206
  },
  {
    "state": "Telangana",
    "name": "Rangareddi",
    "lat": 17.27883,
    "lng": 78.16844
  },
  {
    "state": "Telangana",
    "name": "Sadaseopet",
    "lat": 17.61925,
    "lng": 77.95263
  },
  {
    "state": "Telangana",
    "name": "Sangareddi",
    "lat": 17.62477,
    "lng": 78.08669
  },
  {
    "state": "Telangana",
    "name": "Sathupalli",
    "lat": 17.24968,
    "lng": 80.86899
  },
  {
    "state": "Telangana",
    "name": "Secunderabad",
    "lat": 17.50427,
    "lng": 78.54263
  },
  {
    "state": "Telangana",
    "name": "Serilingampalle",
    "lat": 17.49313,
    "lng": 78.30196
  },
  {
    "state": "Telangana",
    "name": "Siddipet",
    "lat": 18.10483,
    "lng": 78.84858
  },
  {
    "state": "Telangana",
    "name": "Singapur",
    "lat": 17.46982,
    "lng": 78.12574
  },
  {
    "state": "Telangana",
    "name": "Sirpur",
    "lat": 19.47953,
    "lng": 79.57558
  },
  {
    "state": "Telangana",
    "name": "Sirsilla",
    "lat": 18.38865,
    "lng": 78.81048
  },
  {
    "state": "Telangana",
    "name": "Sriramnagar",
    "lat": 17.26652,
    "lng": 78.25544
  },
  {
    "state": "Telangana",
    "name": "Suriapet",
    "lat": 17.14054,
    "lng": 79.62045
  },
  {
    "state": "Telangana",
    "name": "Tandur",
    "lat": 17.24849,
    "lng": 77.57698
  },
  {
    "state": "Telangana",
    "name": "Uppal Kalan",
    "lat": 17.40577,
    "lng": 78.55911
  },
  {
    "state": "Telangana",
    "name": "Vemalwada",
    "lat": 18.46523,
    "lng": 78.86894
  },
  {
    "state": "Telangana",
    "name": "Vikarabad",
    "lat": 17.3381,
    "lng": 77.90441
  },
  {
    "state": "Telangana",
    "name": "Wanparti",
    "lat": 16.36738,
    "lng": 78.06889
  },
  {
    "state": "Telangana",
    "name": "Warangal",
    "lat": 18,
    "lng": 79.83333
  },
  {
    "state": "Telangana",
    "name": "Yellandu",
    "lat": 17.59064,
    "lng": 80.32146
  },
  {
    "state": "Telangana",
    "name": "Zahirabad",
    "lat": 17.68138,
    "lng": 77.60743
  },
  {
    "state": "Tripura",
    "name": "Agartala",
    "lat": 23.83605,
    "lng": 91.27939
  },
  {
    "state": "Tripura",
    "name": "Amarpur",
    "lat": 23.5257,
    "lng": 91.65879
  },
  {
    "state": "Tripura",
    "name": "Ambasa",
    "lat": 23.936,
    "lng": 91.85436
  },
  {
    "state": "Tripura",
    "name": "Barjala",
    "lat": 23.6182,
    "lng": 91.35596
  },
  {
    "state": "Tripura",
    "name": "Belonia",
    "lat": 23.25178,
    "lng": 91.45407
  },
  {
    "state": "Tripura",
    "name": "Dhalai",
    "lat": 23.84307,
    "lng": 91.92591
  },
  {
    "state": "Tripura",
    "name": "Dharmanagar",
    "lat": 24.36667,
    "lng": 92.16667
  },
  {
    "state": "Tripura",
    "name": "Gomati",
    "lat": 23.53399,
    "lng": 91.48122
  },
  {
    "state": "Tripura",
    "name": "Kailashahar",
    "lat": 24.33199,
    "lng": 92.00391
  },
  {
    "state": "Tripura",
    "name": "Kamalpur",
    "lat": 24.19593,
    "lng": 91.83438
  },
  {
    "state": "Tripura",
    "name": "Khowai",
    "lat": 24.07964,
    "lng": 91.59972
  },
  {
    "state": "Tripura",
    "name": "North Tripura",
    "lat": 24.1305,
    "lng": 92.15552
  },
  {
    "state": "Tripura",
    "name": "Ranir Bazar",
    "lat": 23.83463,
    "lng": 91.36614
  },
  {
    "state": "Tripura",
    "name": "Sabrum",
    "lat": 23.00153,
    "lng": 91.72427
  },
  {
    "state": "Tripura",
    "name": "Sonamura",
    "lat": 23.47547,
    "lng": 91.2659
  },
  {
    "state": "Tripura",
    "name": "South Tripura",
    "lat": 23.1671,
    "lng": 91.60953
  },
  {
    "state": "Tripura",
    "name": "Udaipur",
    "lat": 23.53333,
    "lng": 91.48333
  },
  {
    "state": "Tripura",
    "name": "Unakoti",
    "lat": 24.32781,
    "lng": 92.00377
  },
  {
    "state": "Tripura",
    "name": "West Tripura",
    "lat": 23.91667,
    "lng": 91.5
  },
  {
    "state": "Uttar Pradesh",
    "name": "Achhnera",
    "lat": 27.17826,
    "lng": 77.75674
  },
  {
    "state": "Uttar Pradesh",
    "name": "Afzalgarh",
    "lat": 29.3937,
    "lng": 78.67393
  },
  {
    "state": "Uttar Pradesh",
    "name": "Agra",
    "lat": 27.18333,
    "lng": 78.01667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ahraura",
    "lat": 25.01579,
    "lng": 83.03294
  },
  {
    "state": "Uttar Pradesh",
    "name": "Aidalpur",
    "lat": 26.13333333,
    "lng": 79.45
  },
  {
    "state": "Uttar Pradesh",
    "name": "Airwa",
    "lat": 26.9,
    "lng": 79.43333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Akbarpur",
    "lat": 26.42953,
    "lng": 82.53431
  },
  {
    "state": "Uttar Pradesh",
    "name": "Akola",
    "lat": 27.06547,
    "lng": 77.88084
  },
  {
    "state": "Uttar Pradesh",
    "name": "Aliganj",
    "lat": 27.49358,
    "lng": 79.17127
  },
  {
    "state": "Uttar Pradesh",
    "name": "Aligarh",
    "lat": 27.83333,
    "lng": 78.16667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Allahabad",
    "lat": 25.45,
    "lng": 81.85
  },
  {
    "state": "Uttar Pradesh",
    "name": "Allahganj",
    "lat": 27.5454,
    "lng": 79.68715
  },
  {
    "state": "Uttar Pradesh",
    "name": "Amanpur",
    "lat": 27.71222,
    "lng": 78.73788
  },
  {
    "state": "Uttar Pradesh",
    "name": "Amauli",
    "lat": 26.01666667,
    "lng": 80.3
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ambahta",
    "lat": 29.85706,
    "lng": 77.33583
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ambedkar Nagar",
    "lat": 26.40544,
    "lng": 82.69762
  },
  {
    "state": "Uttar Pradesh",
    "name": "Amethi",
    "lat": 28.01667,
    "lng": 81.05
  },
  {
    "state": "Uttar Pradesh",
    "name": "Amroha",
    "lat": 28.90314,
    "lng": 78.46984
  },
  {
    "state": "Uttar Pradesh",
    "name": "Anandnagar",
    "lat": 27.10062,
    "lng": 83.27156
  },
  {
    "state": "Uttar Pradesh",
    "name": "Antu",
    "lat": 26.05654,
    "lng": 81.90267
  },
  {
    "state": "Uttar Pradesh",
    "name": "Anupshahr",
    "lat": 28.35748,
    "lng": 78.26914
  },
  {
    "state": "Uttar Pradesh",
    "name": "Aonla",
    "lat": 28.27402,
    "lng": 79.16521
  },
  {
    "state": "Uttar Pradesh",
    "name": "Araul",
    "lat": 26.917,
    "lng": 80.033
  },
  {
    "state": "Uttar Pradesh",
    "name": "Asalatganj",
    "lat": 26.68333333,
    "lng": 79.85
  },
  {
    "state": "Uttar Pradesh",
    "name": "Atarra",
    "lat": 25.28618,
    "lng": 80.57155
  },
  {
    "state": "Uttar Pradesh",
    "name": "Atrauli",
    "lat": 28.02964,
    "lng": 78.28571
  },
  {
    "state": "Uttar Pradesh",
    "name": "Atraulia",
    "lat": 26.3333,
    "lng": 82.94727
  },
  {
    "state": "Uttar Pradesh",
    "name": "Auraiya",
    "lat": 26.64692,
    "lng": 79.42858
  },
  {
    "state": "Uttar Pradesh",
    "name": "Auras",
    "lat": 26.91414,
    "lng": 80.50792
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ayodhya",
    "lat": 26.79909,
    "lng": 82.2047
  },
  {
    "state": "Uttar Pradesh",
    "name": "Azamgarh",
    "lat": 26.06832,
    "lng": 83.18358
  },
  {
    "state": "Uttar Pradesh",
    "name": "Azizpur",
    "lat": 26.97638889,
    "lng": 79.22138889
  },
  {
    "state": "Uttar Pradesh",
    "name": "Baberu",
    "lat": 25.54711,
    "lng": 80.70443
  },
  {
    "state": "Uttar Pradesh",
    "name": "Babina",
    "lat": 25.23947,
    "lng": 78.47028
  },
  {
    "state": "Uttar Pradesh",
    "name": "Babrala",
    "lat": 28.26419,
    "lng": 78.4056
  },
  {
    "state": "Uttar Pradesh",
    "name": "Babugarh",
    "lat": 28.72353,
    "lng": 77.84677
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bachhraon",
    "lat": 28.92694,
    "lng": 78.23456
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bachhrawan",
    "lat": 26.4709,
    "lng": 81.1158
  },
  {
    "state": "Uttar Pradesh",
    "name": "Baghpat",
    "lat": 28.95,
    "lng": 77.2167
  },
  {
    "state": "Uttar Pradesh",
    "name": "Baghra",
    "lat": 29.46666667,
    "lng": 77.58333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bah",
    "lat": 26.86912,
    "lng": 78.59385
  },
  {
    "state": "Uttar Pradesh",
    "name": "Baheri",
    "lat": 28.77416,
    "lng": 79.4974
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bahjoi",
    "lat": 28.39502,
    "lng": 78.62659
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bahraich",
    "lat": 27.80021,
    "lng": 81.51855
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bahraigh",
    "lat": 27.57429,
    "lng": 81.59474
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bahsuma",
    "lat": 29.20063,
    "lng": 77.97221
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bahua",
    "lat": 25.83942,
    "lng": 80.62255
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bajna",
    "lat": 27.89793,
    "lng": 77.67836
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bakewar",
    "lat": 26.66226,
    "lng": 79.17625
  },
  {
    "state": "Uttar Pradesh",
    "name": "Baksar",
    "lat": 28.76666667,
    "lng": 78.01666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Balamau",
    "lat": 27.16666667,
    "lng": 80.35
  },
  {
    "state": "Uttar Pradesh",
    "name": "Baldeo",
    "lat": 27.41666667,
    "lng": 77.81666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Baldev",
    "lat": 27.40684,
    "lng": 77.82214
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ballia",
    "lat": 25.83333,
    "lng": 84.16667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Balrampur",
    "lat": 27.43449,
    "lng": 82.40281
  },
  {
    "state": "Uttar Pradesh",
    "name": "Banat",
    "lat": 29.46355,
    "lng": 77.35478
  },
  {
    "state": "Uttar Pradesh",
    "name": "Banbasa",
    "lat": 28.99132,
    "lng": 80.07608
  },
  {
    "state": "Uttar Pradesh",
    "name": "Banda",
    "lat": 25.5,
    "lng": 80.5
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bangarmau",
    "lat": 26.8912,
    "lng": 80.21149
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bansdih",
    "lat": 25.88377,
    "lng": 84.21827
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bansgaon",
    "lat": 26.55032,
    "lng": 83.34503
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bansi",
    "lat": 27.17749,
    "lng": 82.93442
  },
  {
    "state": "Uttar Pradesh",
    "name": "Banthra",
    "lat": 27.9172,
    "lng": 79.8174
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bara Banki",
    "lat": 26.93864,
    "lng": 81.3274
  },
  {
    "state": "Uttar Pradesh",
    "name": "Baragaon",
    "lat": 25.47554,
    "lng": 78.71224
  },
  {
    "state": "Uttar Pradesh",
    "name": "Baraut",
    "lat": 29.10199,
    "lng": 77.26334
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bareilly",
    "lat": 28.41667,
    "lng": 79.38333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Barhalganj",
    "lat": 26.28333333,
    "lng": 83.5
  },
  {
    "state": "Uttar Pradesh",
    "name": "Barkhera",
    "lat": 28.45,
    "lng": 79.8
  },
  {
    "state": "Uttar Pradesh",
    "name": "Barkhera Kalan",
    "lat": 28.45209,
    "lng": 79.80655
  },
  {
    "state": "Uttar Pradesh",
    "name": "Barokhar",
    "lat": 24.91666667,
    "lng": 81.96666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Barsana",
    "lat": 27.64802,
    "lng": 77.3764
  },
  {
    "state": "Uttar Pradesh",
    "name": "Barwar (Lakhimpur Kheri)",
    "lat": 25.50583333,
    "lng": 79.13972222
  },
  {
    "state": "Uttar Pradesh",
    "name": "Basti",
    "lat": 26.82816,
    "lng": 82.77924
  },
  {
    "state": "Uttar Pradesh",
    "name": "Behat",
    "lat": 30.1718,
    "lng": 77.6139
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bela",
    "lat": 25.92058,
    "lng": 81.99629
  },
  {
    "state": "Uttar Pradesh",
    "name": "Belthara",
    "lat": 26.12694444,
    "lng": 83.89138889
  },
  {
    "state": "Uttar Pradesh",
    "name": "Beniganj",
    "lat": 27.29293,
    "lng": 80.44364
  },
  {
    "state": "Uttar Pradesh",
    "name": "Beswan",
    "lat": 27.63792,
    "lng": 77.88019
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bewar",
    "lat": 27.21869,
    "lng": 79.29761
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bhadarsa",
    "lat": 26.66027778,
    "lng": 82.12416667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bhadohi",
    "lat": 25.39526,
    "lng": 82.5703
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bhagwantnagar",
    "lat": 26.22383,
    "lng": 80.7575
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bharatpura",
    "lat": 25.23333333,
    "lng": 78.96666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bhargain",
    "lat": 27.615,
    "lng": 79.14416667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bharthana",
    "lat": 26.75231,
    "lng": 79.2218
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bharwari",
    "lat": 25.56078,
    "lng": 81.49164
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bhaupur",
    "lat": 26.91666667,
    "lng": 79.21666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bhimtal",
    "lat": 29.34444444,
    "lng": 79.56305556
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bhinga",
    "lat": 27.70283,
    "lng": 81.9343
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bhognipur",
    "lat": 26.24,
    "lng": 79.8
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bhongaon",
    "lat": 27.25515,
    "lng": 79.18118
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bidhnu",
    "lat": 26.33333333,
    "lng": 80.28333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bidhuna",
    "lat": 26.80172,
    "lng": 79.50829
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bighapur",
    "lat": 26.35,
    "lng": 80.68
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bighapur Khurd",
    "lat": 26.34734,
    "lng": 80.65698
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bijnor",
    "lat": 29.41667,
    "lng": 78.51667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bikapur",
    "lat": 26.59534,
    "lng": 82.13272
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bilari",
    "lat": 28.62146,
    "lng": 78.80361
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bilariaganj",
    "lat": 26.19593,
    "lng": 83.2269
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bilaspur",
    "lat": 28.88655,
    "lng": 79.2703
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bilgram",
    "lat": 27.17509,
    "lng": 80.03201
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bilhaur",
    "lat": 26.84345,
    "lng": 80.06388
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bilsanda",
    "lat": 28.24341,
    "lng": 79.95135
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bilsi",
    "lat": 28.12941,
    "lng": 78.9109
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bilthra",
    "lat": 26.12705,
    "lng": 83.89148
  },
  {
    "state": "Uttar Pradesh",
    "name": "Binauli",
    "lat": 29.09416667,
    "lng": 77.40083333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Binaur",
    "lat": 26.38333333,
    "lng": 80.16666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bindki",
    "lat": 26.03613,
    "lng": 80.57617
  },
  {
    "state": "Uttar Pradesh",
    "name": "Birdpur",
    "lat": 27.3833,
    "lng": 83.1167
  },
  {
    "state": "Uttar Pradesh",
    "name": "Birpur",
    "lat": 26.53,
    "lng": 86.25
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bisalpur",
    "lat": 28.29253,
    "lng": 79.80472
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bisanda Buzurg",
    "lat": 25.41666667,
    "lng": 80.61666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bisauli",
    "lat": 28.30772,
    "lng": 78.93678
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bisenda Buzurg",
    "lat": 25.4035,
    "lng": 80.61889
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bishunpur Urf Maharajganj",
    "lat": 26.25914,
    "lng": 83.11643
  },
  {
    "state": "Uttar Pradesh",
    "name": "Biswan",
    "lat": 27.49581,
    "lng": 80.99618
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bithur",
    "lat": 26.60664,
    "lng": 80.27098
  },
  {
    "state": "Uttar Pradesh",
    "name": "Budaun",
    "lat": 28.11667,
    "lng": 78.98333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Budhana",
    "lat": 29.28805,
    "lng": 77.47534
  },
  {
    "state": "Uttar Pradesh",
    "name": "Bulandshahr",
    "lat": 28.41667,
    "lng": 77.83333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Captainganj",
    "lat": 26.9264,
    "lng": 83.71334
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chail",
    "lat": 25.42654,
    "lng": 81.63198
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chakia",
    "lat": 25.04891,
    "lng": 83.22155
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chandauli",
    "lat": 25.25803,
    "lng": 83.26825
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chandauli District",
    "lat": 25.26134,
    "lng": 83.26408
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chandausi",
    "lat": 28.45,
    "lng": 78.77
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chandpur",
    "lat": 29.13489,
    "lng": 78.27187
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chanduasi",
    "lat": 28.45178,
    "lng": 78.78277
  },
  {
    "state": "Uttar Pradesh",
    "name": "Charkhari",
    "lat": 25.40304,
    "lng": 79.74877
  },
  {
    "state": "Uttar Pradesh",
    "name": "Charthawal",
    "lat": 29.54687,
    "lng": 77.59438
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chhaprauli",
    "lat": 29.20989,
    "lng": 77.17454
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chharra",
    "lat": 27.9247,
    "lng": 78.40102
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chhata",
    "lat": 27.72374,
    "lng": 77.5081
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chhibramau",
    "lat": 27.14872,
    "lng": 79.50078
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chhitauni",
    "lat": 27.11666667,
    "lng": 83.98333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chhutmalpur",
    "lat": 30.03209,
    "lng": 77.75329
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chillupar",
    "lat": 26.28221,
    "lng": 83.5064
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chirgaon",
    "lat": 25.57198,
    "lng": 78.81432
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chitrakoot",
    "lat": 25.20511,
    "lng": 81.08962
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chitrakoot Dham",
    "lat": 25.2,
    "lng": 80.9
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chopan",
    "lat": 24.51954,
    "lng": 83.02287
  },
  {
    "state": "Uttar Pradesh",
    "name": "Chunar",
    "lat": 25.12776,
    "lng": 82.8821
  },
  {
    "state": "Uttar Pradesh",
    "name": "Churk",
    "lat": 24.65,
    "lng": 83.1
  },
  {
    "state": "Uttar Pradesh",
    "name": "Colonelganj",
    "lat": 27.13432,
    "lng": 81.69868
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dadri",
    "lat": 28.55257,
    "lng": 77.55403
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dalmau",
    "lat": 26.06477,
    "lng": 81.0298
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dankaur",
    "lat": 28.35121,
    "lng": 77.55508
  },
  {
    "state": "Uttar Pradesh",
    "name": "Daraganj",
    "lat": 25.43333333,
    "lng": 81.88333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Daranagar",
    "lat": 25.6816208,
    "lng": 81.3497579
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dasna",
    "lat": 28.67736,
    "lng": 77.52252
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dataganj",
    "lat": 28.0253,
    "lng": 79.40819
  },
  {
    "state": "Uttar Pradesh",
    "name": "Daurala",
    "lat": 29.11344,
    "lng": 77.70467
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dayal Bagh",
    "lat": 27.22122,
    "lng": 78.01095
  },
  {
    "state": "Uttar Pradesh",
    "name": "Deoband",
    "lat": 29.69505,
    "lng": 77.67964
  },
  {
    "state": "Uttar Pradesh",
    "name": "Deogarh",
    "lat": 24.526,
    "lng": 78.238
  },
  {
    "state": "Uttar Pradesh",
    "name": "Deoranian",
    "lat": 28.62989,
    "lng": 79.47648
  },
  {
    "state": "Uttar Pradesh",
    "name": "Deoria",
    "lat": 26.66667,
    "lng": 83.75
  },
  {
    "state": "Uttar Pradesh",
    "name": "Derapur",
    "lat": 26.41666667,
    "lng": 79.8
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dewa",
    "lat": 27.03621,
    "lng": 81.16692
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dhampur",
    "lat": 29.30883,
    "lng": 78.51083
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dhanaura",
    "lat": 28.95912,
    "lng": 78.25629
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dhanghata",
    "lat": 26.55419444,
    "lng": 83.00806111
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dharau",
    "lat": 26.38333333,
    "lng": 79.96666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dhaurahra",
    "lat": 27.99814,
    "lng": 81.08975
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dibai",
    "lat": 28.20849,
    "lng": 78.26173
  },
  {
    "state": "Uttar Pradesh",
    "name": "Divrasai",
    "lat": 26.819,
    "lng": 79.149
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dohrighat",
    "lat": 26.27217,
    "lng": 83.50916
  },
  {
    "state": "Uttar Pradesh",
    "name": "Domariaganj",
    "lat": 27.22,
    "lng": 82.67
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dostpur",
    "lat": 26.27486,
    "lng": 82.47091
  },
  {
    "state": "Uttar Pradesh",
    "name": "Dudhi",
    "lat": 24.21357,
    "lng": 83.24067
  },
  {
    "state": "Uttar Pradesh",
    "name": "Etah",
    "lat": 27.5,
    "lng": 78.75
  },
  {
    "state": "Uttar Pradesh",
    "name": "Etawah",
    "lat": 26.75,
    "lng": 79.25
  },
  {
    "state": "Uttar Pradesh",
    "name": "Etmadpur",
    "lat": 27.23971944,
    "lng": 78.2
  },
  {
    "state": "Uttar Pradesh",
    "name": "Faizabad",
    "lat": 26.75,
    "lng": 82
  },
  {
    "state": "Uttar Pradesh",
    "name": "Farah",
    "lat": 27.32081,
    "lng": 77.76185
  },
  {
    "state": "Uttar Pradesh",
    "name": "Faridnagar",
    "lat": 28.76923,
    "lng": 77.62934
  },
  {
    "state": "Uttar Pradesh",
    "name": "Faridpur",
    "lat": 28.20997,
    "lng": 79.54149
  },
  {
    "state": "Uttar Pradesh",
    "name": "Farrukhabad",
    "lat": 27.5,
    "lng": 79.5
  },
  {
    "state": "Uttar Pradesh",
    "name": "Fatehabad",
    "lat": 27.02645,
    "lng": 78.3027
  },
  {
    "state": "Uttar Pradesh",
    "name": "Fatehganj West",
    "lat": 28.4662,
    "lng": 79.30657
  },
  {
    "state": "Uttar Pradesh",
    "name": "Fatehgarh",
    "lat": 27.36409,
    "lng": 79.63111
  },
  {
    "state": "Uttar Pradesh",
    "name": "Fatehpur",
    "lat": 25.75,
    "lng": 80.75
  },
  {
    "state": "Uttar Pradesh",
    "name": "Fatehpur (Barabanki)",
    "lat": 27.17,
    "lng": 81.22
  },
  {
    "state": "Uttar Pradesh",
    "name": "Fatehpur Chaurasi",
    "lat": 26.78925,
    "lng": 80.26547
  },
  {
    "state": "Uttar Pradesh",
    "name": "Fatehpur Sikri",
    "lat": 27.0937,
    "lng": 77.66003
  },
  {
    "state": "Uttar Pradesh",
    "name": "Firozabad",
    "lat": 27.20072,
    "lng": 78.42867
  },
  {
    "state": "Uttar Pradesh",
    "name": "Fyzabad",
    "lat": 26.77549,
    "lng": 82.15018
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gahlon",
    "lat": 26.53333333,
    "lng": 79.96666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gahmar",
    "lat": 25.497,
    "lng": 83.822
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gaini",
    "lat": 28.21,
    "lng": 79.16
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gajraula",
    "lat": 28.8457,
    "lng": 78.2396
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gangoh",
    "lat": 29.78004,
    "lng": 77.26346
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ganj Dundawara",
    "lat": 27.73277778,
    "lng": 78.94166667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ganj Dundwara",
    "lat": 27.73308,
    "lng": 78.94119
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ganj Muradabad",
    "lat": 26.95733,
    "lng": 80.184
  },
  {
    "state": "Uttar Pradesh",
    "name": "Garautha",
    "lat": 25.5719,
    "lng": 79.29764
  },
  {
    "state": "Uttar Pradesh",
    "name": "Garhi Pukhta",
    "lat": 29.5498,
    "lng": 77.30881
  },
  {
    "state": "Uttar Pradesh",
    "name": "Garhmuktesar",
    "lat": 28.78732,
    "lng": 78.10214
  },
  {
    "state": "Uttar Pradesh",
    "name": "Garhwa",
    "lat": 24.18,
    "lng": 83.82
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gauriganj",
    "lat": 26.206,
    "lng": 81.69
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gautam Buddha Nagar",
    "lat": 28.35898,
    "lng": 77.55076
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gawan",
    "lat": 28.41969,
    "lng": 78.35186
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ghatampur",
    "lat": 26.15272,
    "lng": 80.16803
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ghaziabad",
    "lat": 28.66535,
    "lng": 77.43915
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ghazipur",
    "lat": 25.58333,
    "lng": 83.58526
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ghiror",
    "lat": 27.18912,
    "lng": 78.79312
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ghorawal",
    "lat": 24.75459,
    "lng": 82.77965
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ghosi",
    "lat": 26.10587,
    "lng": 83.5393
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gohand",
    "lat": 25.69871,
    "lng": 79.54567
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gokul",
    "lat": 27.43926,
    "lng": 77.72019
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gola Bazar",
    "lat": 26.3446,
    "lng": 83.35303
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gola Gokarannath",
    "lat": 28.07837,
    "lng": 80.47054
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gonda",
    "lat": 27.18581,
    "lng": 81.96693
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gonda (Aligarh)",
    "lat": 27.8333,
    "lng": 77.8833
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gonda City",
    "lat": 27.13181,
    "lng": 81.95332
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gopamau",
    "lat": 27.53468,
    "lng": 80.28507
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gorakhpur",
    "lat": 26.91667,
    "lng": 83.25
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gosainganj",
    "lat": 26.77,
    "lng": 81.12
  },
  {
    "state": "Uttar Pradesh",
    "name": "Goshainganj",
    "lat": 26.57115,
    "lng": 82.38091
  },
  {
    "state": "Uttar Pradesh",
    "name": "Govardhan",
    "lat": 27.49658,
    "lng": 77.46263
  },
  {
    "state": "Uttar Pradesh",
    "name": "Greater Noida",
    "lat": 28.49615,
    "lng": 77.53601
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gulaothi",
    "lat": 28.58938,
    "lng": 77.79318
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gunnaur",
    "lat": 28.23995,
    "lng": 78.43994
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gursahaiganj",
    "lat": 27.11518,
    "lng": 79.73174
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gursarai",
    "lat": 25.61677,
    "lng": 79.18053
  },
  {
    "state": "Uttar Pradesh",
    "name": "Gyanpur",
    "lat": 25.33268,
    "lng": 82.46637
  },
  {
    "state": "Uttar Pradesh",
    "name": "Haldaur",
    "lat": 29.28988,
    "lng": 78.28437
  },
  {
    "state": "Uttar Pradesh",
    "name": "Hamirpur",
    "lat": 25.75,
    "lng": 80
  },
  {
    "state": "Uttar Pradesh",
    "name": "Handia",
    "lat": 25.36379,
    "lng": 82.18655
  },
  {
    "state": "Uttar Pradesh",
    "name": "Hapur",
    "lat": 28.72985,
    "lng": 77.78068
  },
  {
    "state": "Uttar Pradesh",
    "name": "Haraipur",
    "lat": 26.9,
    "lng": 79.7
  },
  {
    "state": "Uttar Pradesh",
    "name": "Haraiya",
    "lat": 26.79477,
    "lng": 82.46436
  },
  {
    "state": "Uttar Pradesh",
    "name": "Harchandpur",
    "lat": 26.36,
    "lng": 81.17
  },
  {
    "state": "Uttar Pradesh",
    "name": "Hardoi",
    "lat": 27.41667,
    "lng": 80.25
  },
  {
    "state": "Uttar Pradesh",
    "name": "Harduaganj",
    "lat": 27.94361,
    "lng": 78.15789
  },
  {
    "state": "Uttar Pradesh",
    "name": "Hasanpur",
    "lat": 28.72249,
    "lng": 78.28436
  },
  {
    "state": "Uttar Pradesh",
    "name": "Hastinapur",
    "lat": 29.16042,
    "lng": 78.00762
  },
  {
    "state": "Uttar Pradesh",
    "name": "Hata",
    "lat": 26.7412,
    "lng": 83.74526
  },
  {
    "state": "Uttar Pradesh",
    "name": "Hata (India)",
    "lat": 26.75,
    "lng": 83.74
  },
  {
    "state": "Uttar Pradesh",
    "name": "Hathras",
    "lat": 27.59551,
    "lng": 78.05201
  },
  {
    "state": "Uttar Pradesh",
    "name": "Hulas",
    "lat": 29.69027778,
    "lng": 77.36027778
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ibrahimpur",
    "lat": 26.01027778,
    "lng": 83.16861111
  },
  {
    "state": "Uttar Pradesh",
    "name": "Iglas",
    "lat": 27.711,
    "lng": 77.93967
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ikauna",
    "lat": 27.53097,
    "lng": 81.96917
  },
  {
    "state": "Uttar Pradesh",
    "name": "Indergarh",
    "lat": 26.93521,
    "lng": 79.6712
  },
  {
    "state": "Uttar Pradesh",
    "name": "Indragarh",
    "lat": 29.91299444,
    "lng": 74.32284167
  },
  {
    "state": "Uttar Pradesh",
    "name": "Islamnagar",
    "lat": 28.32896,
    "lng": 78.72524
  },
  {
    "state": "Uttar Pradesh",
    "name": "Islamnagar (Badaun)",
    "lat": 28.33,
    "lng": 78.72
  },
  {
    "state": "Uttar Pradesh",
    "name": "Itaunja",
    "lat": 27.08347,
    "lng": 80.89672
  },
  {
    "state": "Uttar Pradesh",
    "name": "Itimadpur",
    "lat": 27.23541,
    "lng": 78.19829
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jagdishpur",
    "lat": 26.74967,
    "lng": 80.5451
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jagnair",
    "lat": 26.8636,
    "lng": 77.60231
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jahanabad",
    "lat": 28.63025,
    "lng": 79.71818
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jahanabad (Pilibhit)",
    "lat": 28.6333,
    "lng": 79.8
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jahangirabad",
    "lat": 28.40549,
    "lng": 78.10588
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jahangirpur",
    "lat": 28.17919,
    "lng": 77.70501
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jainpur",
    "lat": 26.15389,
    "lng": 83.33505
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jais",
    "lat": 26.2649,
    "lng": 81.54855
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jalalabad",
    "lat": 29.61853,
    "lng": 77.43908
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jalali",
    "lat": 27.8668,
    "lng": 78.25267
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jalalpur",
    "lat": 26.31162,
    "lng": 82.73859
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jalaun",
    "lat": 26,
    "lng": 79.5
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jalesar",
    "lat": 27.47315,
    "lng": 78.3031
  },
  {
    "state": "Uttar Pradesh",
    "name": "Janghai",
    "lat": 25.55,
    "lng": 82.31666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jansath",
    "lat": 29.32502,
    "lng": 77.85044
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jarwa",
    "lat": 27.65,
    "lng": 82.51666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jarwal",
    "lat": 27.1629,
    "lng": 81.54179
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jasrana",
    "lat": 27.23587,
    "lng": 78.65244
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jaswantnagar",
    "lat": 26.88271,
    "lng": 78.90256
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jaunpur",
    "lat": 25.75,
    "lng": 82.75
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jewar",
    "lat": 28.122,
    "lng": 77.55734
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jhajhar",
    "lat": 27.86,
    "lng": 75.28
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jhalu",
    "lat": 29.33609,
    "lng": 78.22608
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jhansi",
    "lat": 25.5,
    "lng": 78.5
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jhinjhak",
    "lat": 26.56093,
    "lng": 79.73423
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jhinjhana",
    "lat": 29.52118,
    "lng": 77.2247
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jhusi",
    "lat": 25.43745,
    "lng": 81.9055
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jiyanpur",
    "lat": 26.15,
    "lng": 83.33
  },
  {
    "state": "Uttar Pradesh",
    "name": "Jyotiba Phule Nagar",
    "lat": 28.7716,
    "lng": 78.33871
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kabrai",
    "lat": 25.40281,
    "lng": 79.9997
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kachhwa",
    "lat": 25.20615,
    "lng": 82.71442
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kadaura",
    "lat": 25.98537,
    "lng": 79.83842
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kadipur",
    "lat": 26.16779,
    "lng": 82.37028
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kagarol",
    "lat": 27.01666667,
    "lng": 77.85
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kaimganj",
    "lat": 27.55441,
    "lng": 79.33525
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kairana",
    "lat": 29.39541,
    "lng": 77.2054
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kakori",
    "lat": 26.868,
    "lng": 80.7857
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kakrala",
    "lat": 27.89269,
    "lng": 79.1945
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kalinagar",
    "lat": 28.62019,
    "lng": 80.08152
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kalpi",
    "lat": 26.11667,
    "lng": 79.73333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kalyanpur",
    "lat": 26.51912222,
    "lng": 80.24980556
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kamalganj",
    "lat": 27.26181,
    "lng": 79.63134
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kampil",
    "lat": 27.61268,
    "lng": 79.27687
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kandhla",
    "lat": 29.32104,
    "lng": 77.27101
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kannauj",
    "lat": 27.0177,
    "lng": 79.67846
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kanpur",
    "lat": 26.46523,
    "lng": 80.34975
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kanpur Dehat",
    "lat": 26.41506,
    "lng": 79.98957
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kant",
    "lat": 27.81049,
    "lng": 79.79185
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kanth",
    "lat": 29.05939,
    "lng": 78.62951
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kaptanganj",
    "lat": 26.93,
    "lng": 83.72
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kara",
    "lat": 25.7,
    "lng": 81.35
  },
  {
    "state": "Uttar Pradesh",
    "name": "Karari",
    "lat": 25.45241,
    "lng": 81.42675
  },
  {
    "state": "Uttar Pradesh",
    "name": "Karbigwan",
    "lat": 26.2,
    "lng": 80.5
  },
  {
    "state": "Uttar Pradesh",
    "name": "Karchana",
    "lat": 25.28,
    "lng": 81.93
  },
  {
    "state": "Uttar Pradesh",
    "name": "Karhal",
    "lat": 27.00089,
    "lng": 78.93935
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kasganj",
    "lat": 27.80882,
    "lng": 78.64579
  },
  {
    "state": "Uttar Pradesh",
    "name": "Katra",
    "lat": 27.50871,
    "lng": 82.02636
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kausani",
    "lat": 29.84305556,
    "lng": 79.60333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kaushambi District",
    "lat": 25.53074,
    "lng": 81.37729
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kemri",
    "lat": 28.80673,
    "lng": 79.2048
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khada",
    "lat": 27.18333,
    "lng": 83.88333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khaga",
    "lat": 25.77215,
    "lng": 81.10393
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khailar",
    "lat": 25.35,
    "lng": 78.53
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khair",
    "lat": 27.94195,
    "lng": 77.84243
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khairabad",
    "lat": 27.52698,
    "lng": 80.75461
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khalilabad",
    "lat": 26.77268,
    "lng": 83.07179
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khanpur",
    "lat": 28.53446,
    "lng": 78.06546
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kharela",
    "lat": 25.54277,
    "lng": 79.81235
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khargupur",
    "lat": 27.37611,
    "lng": 81.9882
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kharkhauda",
    "lat": 28.83644,
    "lng": 77.74159
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khatauli",
    "lat": 29.27844,
    "lng": 77.73302
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khekra",
    "lat": 28.86586,
    "lng": 77.2841
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kheri",
    "lat": 28.11667,
    "lng": 80.71667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khudaganj",
    "lat": 28.14607,
    "lng": 79.71472
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khurja",
    "lat": 28.25382,
    "lng": 77.85535
  },
  {
    "state": "Uttar Pradesh",
    "name": "Khutar",
    "lat": 28.20307,
    "lng": 80.27046
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kirakat",
    "lat": 25.63745,
    "lng": 82.91596
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kiraoli",
    "lat": 27.13768,
    "lng": 77.78516
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kiratpur",
    "lat": 29.50671,
    "lng": 78.20613
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kishanpur",
    "lat": 25.64232,
    "lng": 81.0227
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kishanpur baral",
    "lat": 29.2,
    "lng": 77.28333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kishni",
    "lat": 27.02487,
    "lng": 79.262
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kithor",
    "lat": 28.86684,
    "lng": 77.93861
  },
  {
    "state": "Uttar Pradesh",
    "name": "Konch",
    "lat": 25.99451,
    "lng": 79.15127
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kopaganj",
    "lat": 26.01923,
    "lng": 83.5663
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kosi",
    "lat": 27.79449,
    "lng": 77.4368
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kota",
    "lat": 24.44643,
    "lng": 83.13063
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kotra",
    "lat": 25.8077,
    "lng": 79.30909
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kuchesar",
    "lat": 28.68333333,
    "lng": 77.95
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kudarkot",
    "lat": 26.81666667,
    "lng": 79.4
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kulpahar",
    "lat": 25.32007,
    "lng": 79.63931
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kunda",
    "lat": 25.71702,
    "lng": 81.51396
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kundarkhi",
    "lat": 28.68304,
    "lng": 78.78559
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kundarki",
    "lat": 28.683,
    "lng": 78.785
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kurara",
    "lat": 25.98046,
    "lng": 79.98984
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kushinagar",
    "lat": 26.74028,
    "lng": 83.88889
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kusmara",
    "lat": 27.11666667,
    "lng": 79.28333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Kuthaund",
    "lat": 26.36666667,
    "lng": 79.41666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Laharpur",
    "lat": 27.70827,
    "lng": 80.90256
  },
  {
    "state": "Uttar Pradesh",
    "name": "Lakhimpur",
    "lat": 27.94822,
    "lng": 80.77935
  },
  {
    "state": "Uttar Pradesh",
    "name": "Lakhna",
    "lat": 26.64822,
    "lng": 79.1477
  },
  {
    "state": "Uttar Pradesh",
    "name": "Lalganj",
    "lat": 25.93182,
    "lng": 81.70478
  },
  {
    "state": "Uttar Pradesh",
    "name": "Lalitpur",
    "lat": 24.5,
    "lng": 78.5
  },
  {
    "state": "Uttar Pradesh",
    "name": "Lambhua",
    "lat": 26.15,
    "lng": 82.21
  },
  {
    "state": "Uttar Pradesh",
    "name": "Lar",
    "lat": 26.20394,
    "lng": 83.96906
  },
  {
    "state": "Uttar Pradesh",
    "name": "Lawar",
    "lat": 29.11666667,
    "lng": 77.76666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Lawar Khas",
    "lat": 29.11091,
    "lng": 77.77767
  },
  {
    "state": "Uttar Pradesh",
    "name": "Loni",
    "lat": 28.75143,
    "lng": 77.29023
  },
  {
    "state": "Uttar Pradesh",
    "name": "Lucknow",
    "lat": 26.83928,
    "lng": 80.92313
  },
  {
    "state": "Uttar Pradesh",
    "name": "Lucknow District",
    "lat": 26.75,
    "lng": 81
  },
  {
    "state": "Uttar Pradesh",
    "name": "Machhali Shahar",
    "lat": 25.68,
    "lng": 82.42
  },
  {
    "state": "Uttar Pradesh",
    "name": "Machhlishahr",
    "lat": 25.68564,
    "lng": 82.41106
  },
  {
    "state": "Uttar Pradesh",
    "name": "Madhoganj",
    "lat": 27.11807,
    "lng": 80.14058
  },
  {
    "state": "Uttar Pradesh",
    "name": "Madhogarh",
    "lat": 26.27522,
    "lng": 79.1859
  },
  {
    "state": "Uttar Pradesh",
    "name": "Maghar",
    "lat": 26.75586,
    "lng": 83.12773
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mahaban",
    "lat": 27.43262,
    "lng": 77.74338
  },
  {
    "state": "Uttar Pradesh",
    "name": "Maharajganj",
    "lat": 27.16945,
    "lng": 83.50667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mahmudabad",
    "lat": 27.29191,
    "lng": 81.11775
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mahoba",
    "lat": 25.2921,
    "lng": 79.87242
  },
  {
    "state": "Uttar Pradesh",
    "name": "Maholi",
    "lat": 27.66368,
    "lng": 80.47371
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mahrajganj",
    "lat": 26.26666667,
    "lng": 83.11666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mahrajganj (Raebareli)",
    "lat": 26.38333333,
    "lng": 81.28333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mahroni",
    "lat": 24.58624,
    "lng": 78.72771
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mahul",
    "lat": 26.13333333,
    "lng": 82.81666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mailani",
    "lat": 28.29088,
    "lng": 80.3438
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mainpuri",
    "lat": 27.16667,
    "lng": 79
  },
  {
    "state": "Uttar Pradesh",
    "name": "Majhupur",
    "lat": 27.03333333,
    "lng": 79.41666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Makanpur",
    "lat": 26.90222222,
    "lng": 79.97805556
  },
  {
    "state": "Uttar Pradesh",
    "name": "Malasa",
    "lat": 26.26755,
    "lng": 79.94489
  },
  {
    "state": "Uttar Pradesh",
    "name": "Malihabad",
    "lat": 26.92223,
    "lng": 80.71078
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mandawar",
    "lat": 29.48655,
    "lng": 78.12732
  },
  {
    "state": "Uttar Pradesh",
    "name": "Maniar",
    "lat": 25.98546,
    "lng": 84.17233
  },
  {
    "state": "Uttar Pradesh",
    "name": "Manikpur",
    "lat": 25.06083,
    "lng": 81.09961
  },
  {
    "state": "Uttar Pradesh",
    "name": "Manjhanpur",
    "lat": 25.53046,
    "lng": 81.37566
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mankapur",
    "lat": 27.05189,
    "lng": 82.22961
  },
  {
    "state": "Uttar Pradesh",
    "name": "Marahra",
    "lat": 27.7368,
    "lng": 78.56891
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mariahu",
    "lat": 25.60404,
    "lng": 82.60379
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mataundh",
    "lat": 25.43594,
    "lng": 80.15653
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mathura",
    "lat": 27.63333,
    "lng": 77.58333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mau",
    "lat": 26.0294,
    "lng": 83.50756
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mau Aima",
    "lat": 25.7,
    "lng": 81.91666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mau Aimma",
    "lat": 25.69515,
    "lng": 81.92336
  },
  {
    "state": "Uttar Pradesh",
    "name": "Maudaha",
    "lat": 25.68312,
    "lng": 80.11419
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mauranwan",
    "lat": 26.42876,
    "lng": 80.88008
  },
  {
    "state": "Uttar Pradesh",
    "name": "Maurawan",
    "lat": 26.43,
    "lng": 80.88
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mawana",
    "lat": 29.10288,
    "lng": 77.92199
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mawar",
    "lat": 26.30416667,
    "lng": 79.92111111
  },
  {
    "state": "Uttar Pradesh",
    "name": "Meerut",
    "lat": 28.91667,
    "lng": 77.68333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mehdawal",
    "lat": 26.98333333,
    "lng": 83.11666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mehnagar",
    "lat": 25.87889,
    "lng": 83.11611
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mehndawal",
    "lat": 26.97579,
    "lng": 83.10995
  },
  {
    "state": "Uttar Pradesh",
    "name": "Milak",
    "lat": 28.61031,
    "lng": 79.16997
  },
  {
    "state": "Uttar Pradesh",
    "name": "Milkipur",
    "lat": 26.6,
    "lng": 81.91
  },
  {
    "state": "Uttar Pradesh",
    "name": "Miranpur",
    "lat": 29.29026,
    "lng": 77.94939
  },
  {
    "state": "Uttar Pradesh",
    "name": "Miranpur Katra",
    "lat": 28.02963,
    "lng": 79.66778
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mirganj",
    "lat": 28.54012,
    "lng": 79.20817
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mirzapur",
    "lat": 25.1449,
    "lng": 82.56534
  },
  {
    "state": "Uttar Pradesh",
    "name": "Misrikh",
    "lat": 27.43137,
    "lng": 80.53157
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mohan",
    "lat": 26.78008,
    "lng": 80.67497
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mohanpur",
    "lat": 28.25261,
    "lng": 80.24498
  },
  {
    "state": "Uttar Pradesh",
    "name": "Moradabad",
    "lat": 28.8525,
    "lng": 78.79703
  },
  {
    "state": "Uttar Pradesh",
    "name": "Moth",
    "lat": 25.72595,
    "lng": 78.95029
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mubarakpur",
    "lat": 26.08866,
    "lng": 83.29088
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mughal Sarai",
    "lat": 25.28307,
    "lng": 83.11968
  },
  {
    "state": "Uttar Pradesh",
    "name": "Muhammadabad",
    "lat": 25.61907,
    "lng": 83.75576
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mukteshwar",
    "lat": 29.4722,
    "lng": 79.6479
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mungra Badshahpur",
    "lat": 25.65,
    "lng": 82.18
  },
  {
    "state": "Uttar Pradesh",
    "name": "Munsyari",
    "lat": 30.06741389,
    "lng": 80.23856111
  },
  {
    "state": "Uttar Pradesh",
    "name": "Muradabad",
    "lat": 28.83888889,
    "lng": 78.77694444
  },
  {
    "state": "Uttar Pradesh",
    "name": "Muradnagar",
    "lat": 28.78069,
    "lng": 77.49865
  },
  {
    "state": "Uttar Pradesh",
    "name": "Mursan",
    "lat": 27.57788,
    "lng": 77.94091
  },
  {
    "state": "Uttar Pradesh",
    "name": "Musafir-Khana",
    "lat": 26.37837,
    "lng": 81.79607
  },
  {
    "state": "Uttar Pradesh",
    "name": "Musafirkhana",
    "lat": 26.45,
    "lng": 81.8
  },
  {
    "state": "Uttar Pradesh",
    "name": "Muzaffarnagar",
    "lat": 29.45,
    "lng": 77.58333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nadigaon",
    "lat": 26.10784,
    "lng": 79.02283
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nagina",
    "lat": 29.44433,
    "lng": 78.43646
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nagla",
    "lat": 29.01,
    "lng": 79.51
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nagram",
    "lat": 26.61872,
    "lng": 81.14043
  },
  {
    "state": "Uttar Pradesh",
    "name": "Najibabad",
    "lat": 29.61194,
    "lng": 78.34274
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nakur",
    "lat": 29.91964,
    "lng": 77.30438
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nanauta",
    "lat": 29.71215,
    "lng": 77.41728
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nandgaon",
    "lat": 27.71102,
    "lng": 77.38653
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nanpara",
    "lat": 27.86459,
    "lng": 81.50036
  },
  {
    "state": "Uttar Pradesh",
    "name": "Narauli",
    "lat": 28.48547,
    "lng": 78.71484
  },
  {
    "state": "Uttar Pradesh",
    "name": "Naraura",
    "lat": 28.20147,
    "lng": 78.38723
  },
  {
    "state": "Uttar Pradesh",
    "name": "Narora",
    "lat": 28.19666667,
    "lng": 78.38138889
  },
  {
    "state": "Uttar Pradesh",
    "name": "Naugama",
    "lat": 27.7,
    "lng": 79.65
  },
  {
    "state": "Uttar Pradesh",
    "name": "Naurangpur",
    "lat": 27.16666667,
    "lng": 79.78333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nautanwa",
    "lat": 27.42752,
    "lng": 83.41789
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nawabganj",
    "lat": 26.93129,
    "lng": 81.19841
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nawabganj (Barabanki)",
    "lat": 26.94,
    "lng": 81.19
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nawabganj (Bareilly)",
    "lat": 28.54,
    "lng": 79.633
  },
  {
    "state": "Uttar Pradesh",
    "name": "Newara",
    "lat": 27.76666667,
    "lng": 79.28333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nichlaul",
    "lat": 27.31247,
    "lng": 83.7253
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nigoh",
    "lat": 26.75,
    "lng": 79.15
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nihtaur",
    "lat": 29.32416,
    "lng": 78.38724
  },
  {
    "state": "Uttar Pradesh",
    "name": "Niwari",
    "lat": 28.87611,
    "lng": 77.5382
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nizamabad",
    "lat": 26.05295,
    "lng": 83.05787
  },
  {
    "state": "Uttar Pradesh",
    "name": "Noida",
    "lat": 28.58,
    "lng": 77.33
  },
  {
    "state": "Uttar Pradesh",
    "name": "Nurpur",
    "lat": 29.14956,
    "lng": 78.4084
  },
  {
    "state": "Uttar Pradesh",
    "name": "Obra",
    "lat": 24.41863,
    "lng": 82.98797
  },
  {
    "state": "Uttar Pradesh",
    "name": "Orai",
    "lat": 25.99023,
    "lng": 79.45334
  },
  {
    "state": "Uttar Pradesh",
    "name": "Oran",
    "lat": 25.36882,
    "lng": 80.7423
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pachperwa",
    "lat": 27.51234,
    "lng": 82.64297
  },
  {
    "state": "Uttar Pradesh",
    "name": "Padrauna",
    "lat": 26.90403,
    "lng": 83.98087
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pahasu",
    "lat": 28.1722,
    "lng": 78.06376
  },
  {
    "state": "Uttar Pradesh",
    "name": "Paigaon",
    "lat": 27.78333333,
    "lng": 77.53333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pali",
    "lat": 24.49188,
    "lng": 78.41617
  },
  {
    "state": "Uttar Pradesh",
    "name": "Palia Kalan",
    "lat": 28.43205,
    "lng": 80.58137
  },
  {
    "state": "Uttar Pradesh",
    "name": "Paras Rampur",
    "lat": 31.32388889,
    "lng": 75.67472222
  },
  {
    "state": "Uttar Pradesh",
    "name": "Parichha",
    "lat": 25.50789,
    "lng": 78.75954
  },
  {
    "state": "Uttar Pradesh",
    "name": "Parichhatgarh",
    "lat": 28.97841,
    "lng": 77.93422
  },
  {
    "state": "Uttar Pradesh",
    "name": "Parshadepur",
    "lat": 26.07354,
    "lng": 81.49207
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pathakpura",
    "lat": 26.84441,
    "lng": 78.74037
  },
  {
    "state": "Uttar Pradesh",
    "name": "Patiali",
    "lat": 27.69086,
    "lng": 78.99823
  },
  {
    "state": "Uttar Pradesh",
    "name": "Patti",
    "lat": 25.9215,
    "lng": 82.20048
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pawayan",
    "lat": 28.06626,
    "lng": 80.10305
  },
  {
    "state": "Uttar Pradesh",
    "name": "Payagpur",
    "lat": 27.4,
    "lng": 81.8
  },
  {
    "state": "Uttar Pradesh",
    "name": "Phalauda",
    "lat": 29.18824,
    "lng": 77.82996
  },
  {
    "state": "Uttar Pradesh",
    "name": "Phaphamau",
    "lat": 25.53333333,
    "lng": 81.86666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Phaphund",
    "lat": 26.59888,
    "lng": 79.46437
  },
  {
    "state": "Uttar Pradesh",
    "name": "Phariha",
    "lat": 27.32166,
    "lng": 78.47267
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pheona",
    "lat": 29.08333333,
    "lng": 78.35
  },
  {
    "state": "Uttar Pradesh",
    "name": "Phulpur",
    "lat": 25.54895,
    "lng": 82.0895
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pichhaura",
    "lat": 26.33333333,
    "lng": 79.31666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pihani",
    "lat": 27.61987,
    "lng": 80.20343
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pilibhit",
    "lat": 28.63124,
    "lng": 79.80436
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pilkhua",
    "lat": 28.71271,
    "lng": 77.656
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pilkhuwa",
    "lat": 28.71196944,
    "lng": 77.65445556
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pinahat",
    "lat": 26.88487,
    "lng": 78.37647
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pipraich",
    "lat": 26.82745,
    "lng": 83.52632
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pipri",
    "lat": 24.18,
    "lng": 83
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pratapgarh",
    "lat": 25.75,
    "lng": 81.75
  },
  {
    "state": "Uttar Pradesh",
    "name": "Prayagraj (Allahabad)",
    "lat": 25.42012,
    "lng": 81.88385
  },
  {
    "state": "Uttar Pradesh",
    "name": "Pukhrayan",
    "lat": 26.22375,
    "lng": 79.83739
  },
  {
    "state": "Uttar Pradesh",
    "name": "Puranpur",
    "lat": 28.51283,
    "lng": 80.14829
  },
  {
    "state": "Uttar Pradesh",
    "name": "Purmafi",
    "lat": 29.55,
    "lng": 77.26666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Purwa",
    "lat": 26.45756,
    "lng": 80.77403
  },
  {
    "state": "Uttar Pradesh",
    "name": "Qadirganj",
    "lat": 27.78333333,
    "lng": 79.06666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Rabupura",
    "lat": 28.25153,
    "lng": 77.60253
  },
  {
    "state": "Uttar Pradesh",
    "name": "Radha Kund",
    "lat": 27.52444444,
    "lng": 77.49027778
  },
  {
    "state": "Uttar Pradesh",
    "name": "Radhakund",
    "lat": 27.52432,
    "lng": 77.49101
  },
  {
    "state": "Uttar Pradesh",
    "name": "Raebareli",
    "lat": 26.2309,
    "lng": 81.23315
  },
  {
    "state": "Uttar Pradesh",
    "name": "Rajapur",
    "lat": 25.38725,
    "lng": 81.15125
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ramkola",
    "lat": 26.90172,
    "lng": 83.83758
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ramnagar",
    "lat": 25.26907,
    "lng": 83.02971
  },
  {
    "state": "Uttar Pradesh",
    "name": "Rampur",
    "lat": 28.81014,
    "lng": 79.02699
  },
  {
    "state": "Uttar Pradesh",
    "name": "Rampura",
    "lat": 26.34967,
    "lng": 79.18234
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ranipur",
    "lat": 25.25034,
    "lng": 79.06204
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ranipur Barsi",
    "lat": 29.9,
    "lng": 77.21666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Rasra",
    "lat": 25.8576,
    "lng": 83.85487
  },
  {
    "state": "Uttar Pradesh",
    "name": "Rasulabad",
    "lat": 26.74491,
    "lng": 80.49012
  },
  {
    "state": "Uttar Pradesh",
    "name": "Rath",
    "lat": 25.59474,
    "lng": 79.5666
  },
  {
    "state": "Uttar Pradesh",
    "name": "Raya",
    "lat": 27.55607,
    "lng": 77.78972
  },
  {
    "state": "Uttar Pradesh",
    "name": "Rehar",
    "lat": 29.36666667,
    "lng": 78.76666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Renukoot",
    "lat": 24.2,
    "lng": 83.03
  },
  {
    "state": "Uttar Pradesh",
    "name": "Renukut",
    "lat": 24.21641,
    "lng": 83.0358
  },
  {
    "state": "Uttar Pradesh",
    "name": "Reoti",
    "lat": 25.85091,
    "lng": 84.3778
  },
  {
    "state": "Uttar Pradesh",
    "name": "Reotipur",
    "lat": 25.55,
    "lng": 83.71666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Richha",
    "lat": 28.69467,
    "lng": 79.52284
  },
  {
    "state": "Uttar Pradesh",
    "name": "Robertsganj",
    "lat": 24.6886,
    "lng": 83.06784
  },
  {
    "state": "Uttar Pradesh",
    "name": "Rudarpur",
    "lat": 26.44467,
    "lng": 83.61302
  },
  {
    "state": "Uttar Pradesh",
    "name": "Rudauli",
    "lat": 26.75,
    "lng": 81.75
  },
  {
    "state": "Uttar Pradesh",
    "name": "Rura",
    "lat": 26.49001,
    "lng": 79.90108
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sabalpur",
    "lat": 27.176049,
    "lng": 79.42012
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sachendi",
    "lat": 26.371165,
    "lng": 80.1123
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sadabad",
    "lat": 27.43818,
    "lng": 78.03758
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sadat",
    "lat": 25.67117,
    "lng": 83.30269
  },
  {
    "state": "Uttar Pradesh",
    "name": "Safipur",
    "lat": 26.73783,
    "lng": 80.3435
  },
  {
    "state": "Uttar Pradesh",
    "name": "Saharanpur",
    "lat": 29.9,
    "lng": 77.68333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sahaspur",
    "lat": 29.12125,
    "lng": 78.62273
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sahaswan",
    "lat": 28.07227,
    "lng": 78.75082
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sahawar",
    "lat": 27.79603,
    "lng": 78.83373
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sahibabad",
    "lat": 28.68333333,
    "lng": 77.4
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sahpau",
    "lat": 27.43527778,
    "lng": 78.14138889
  },
  {
    "state": "Uttar Pradesh",
    "name": "Saidpur",
    "lat": 25.53749,
    "lng": 83.22378
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sakhanu",
    "lat": 27.95472222,
    "lng": 79.2275
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sakit",
    "lat": 27.43463,
    "lng": 78.77903
  },
  {
    "state": "Uttar Pradesh",
    "name": "Salempur",
    "lat": 26.3,
    "lng": 83.91666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Salon",
    "lat": 26.02857,
    "lng": 81.45403
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sambhal",
    "lat": 28.58498,
    "lng": 78.56959
  },
  {
    "state": "Uttar Pradesh",
    "name": "Samthar",
    "lat": 25.84348,
    "lng": 78.90683
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sandi",
    "lat": 27.28867,
    "lng": 79.9519
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sandila",
    "lat": 27.06989,
    "lng": 80.51497
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sant Kabir Nagar",
    "lat": 26.79016,
    "lng": 83.03481
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sant Ravi Das Nagar",
    "lat": 25.35792,
    "lng": 82.4308
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sarai Akil",
    "lat": 25.3789,
    "lng": 81.51035
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sarai Ekdil",
    "lat": 26.74442,
    "lng": 79.09353
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sarai Mir",
    "lat": 26.02705,
    "lng": 82.91843
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sarauli",
    "lat": 28.49404,
    "lng": 79.09177
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sardhana",
    "lat": 29.14551,
    "lng": 77.61433
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sarila",
    "lat": 25.77579,
    "lng": 79.67535
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sarurpur",
    "lat": 29.03333333,
    "lng": 77.23333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sasni",
    "lat": 27.70287,
    "lng": 78.08278
  },
  {
    "state": "Uttar Pradesh",
    "name": "Satrikh",
    "lat": 26.86045,
    "lng": 81.19567
  },
  {
    "state": "Uttar Pradesh",
    "name": "Saurikh",
    "lat": 27.03051,
    "lng": 79.48813
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sector",
    "lat": 28.5708,
    "lng": 77.3261
  },
  {
    "state": "Uttar Pradesh",
    "name": "Seohara",
    "lat": 29.20904,
    "lng": 78.58837
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shahabad",
    "lat": 27.6431,
    "lng": 79.9402
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shahganj",
    "lat": 26.04965,
    "lng": 82.68423
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shahi",
    "lat": 28.55023,
    "lng": 79.31761
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shahjahanpur",
    "lat": 28,
    "lng": 79.83333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shahpur",
    "lat": 29.3501,
    "lng": 77.5516
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shamli",
    "lat": 29.4497,
    "lng": 77.30959
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shamsabad",
    "lat": 27.01718,
    "lng": 78.12358
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shankargarh",
    "lat": 25.182,
    "lng": 81.61769
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shergarh",
    "lat": 28.65128,
    "lng": 79.36815
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sherkot",
    "lat": 29.32704,
    "lng": 78.57429
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shibnagar",
    "lat": 28.5,
    "lng": 79.98333333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shikarpur",
    "lat": 28.28072,
    "lng": 78.01411
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shikarpur (Bulandshahr)",
    "lat": 28.28,
    "lng": 78.02
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shikohabad",
    "lat": 27.108,
    "lng": 78.58661
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shishgarh",
    "lat": 28.72928,
    "lng": 79.31469
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shivrajpur",
    "lat": 26.85722222,
    "lng": 79.115
  },
  {
    "state": "Uttar Pradesh",
    "name": "Shrawasti",
    "lat": 27.50746,
    "lng": 82.0047
  },
  {
    "state": "Uttar Pradesh",
    "name": "Siddharthnagar",
    "lat": 27.25797,
    "lng": 83.01465
  },
  {
    "state": "Uttar Pradesh",
    "name": "Siddhaur",
    "lat": 26.76944444,
    "lng": 81.41805556
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sidhauli",
    "lat": 27.28202,
    "lng": 80.8345
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sidhpura",
    "lat": 27.63312,
    "lng": 78.86918
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sikandarabad",
    "lat": 28.45226,
    "lng": 77.70004
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sikandarpur",
    "lat": 26.04327,
    "lng": 84.05298
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sikandra",
    "lat": 26.36722,
    "lng": 79.6298
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sikandra Rao",
    "lat": 27.68859,
    "lng": 78.37985
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sikandrabad",
    "lat": 28.449525,
    "lng": 77.69415278
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sirathu",
    "lat": 25.64292,
    "lng": 81.31855
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sirsa",
    "lat": 25.2634,
    "lng": 82.0919
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sirsaganj",
    "lat": 27.05715,
    "lng": 78.68661
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sirsi",
    "lat": 28.63916,
    "lng": 78.64303
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sisauli",
    "lat": 29.41386,
    "lng": 77.4689
  },
  {
    "state": "Uttar Pradesh",
    "name": "Siswa Bazar",
    "lat": 27.14652,
    "lng": 83.75803
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sitapur",
    "lat": 27.5,
    "lng": 80.91667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sonbhadra",
    "lat": 24.40212,
    "lng": 83.05352
  },
  {
    "state": "Uttar Pradesh",
    "name": "Soron",
    "lat": 27.89055,
    "lng": 78.74621
  },
  {
    "state": "Uttar Pradesh",
    "name": "Suar",
    "lat": 29.02841,
    "lng": 79.05654
  },
  {
    "state": "Uttar Pradesh",
    "name": "Sultanpur",
    "lat": 26.25,
    "lng": 82
  },
  {
    "state": "Uttar Pradesh",
    "name": "Surianwan",
    "lat": 25.46387,
    "lng": 82.41922
  },
  {
    "state": "Uttar Pradesh",
    "name": "Tajpur",
    "lat": 29.16242,
    "lng": 78.48458
  },
  {
    "state": "Uttar Pradesh",
    "name": "Talbahat",
    "lat": 25.04357,
    "lng": 78.43441
  },
  {
    "state": "Uttar Pradesh",
    "name": "Talgram",
    "lat": 27.04753,
    "lng": 79.64811
  },
  {
    "state": "Uttar Pradesh",
    "name": "Tanda",
    "lat": 28.97621,
    "lng": 78.94187
  },
  {
    "state": "Uttar Pradesh",
    "name": "Terha",
    "lat": 25.8333,
    "lng": 80.25
  },
  {
    "state": "Uttar Pradesh",
    "name": "Thakurdwara",
    "lat": 29.19203,
    "lng": 78.86145
  },
  {
    "state": "Uttar Pradesh",
    "name": "Thana Bhawan",
    "lat": 29.58605,
    "lng": 77.41811
  },
  {
    "state": "Uttar Pradesh",
    "name": "Tigri",
    "lat": 28.51083333,
    "lng": 77.23888889
  },
  {
    "state": "Uttar Pradesh",
    "name": "Tikaitnagar",
    "lat": 26.94612,
    "lng": 81.56583
  },
  {
    "state": "Uttar Pradesh",
    "name": "Tikri",
    "lat": 29.2291,
    "lng": 77.35479
  },
  {
    "state": "Uttar Pradesh",
    "name": "Tilhar",
    "lat": 27.96282,
    "lng": 79.73827
  },
  {
    "state": "Uttar Pradesh",
    "name": "Tilsahri",
    "lat": 26.3333,
    "lng": 80.4167
  },
  {
    "state": "Uttar Pradesh",
    "name": "Tindwari",
    "lat": 25.61739,
    "lng": 80.52718
  },
  {
    "state": "Uttar Pradesh",
    "name": "Titron",
    "lat": 29.66824,
    "lng": 77.32391
  },
  {
    "state": "Uttar Pradesh",
    "name": "Tori Fatehpur",
    "lat": 25.45,
    "lng": 79.1333
  },
  {
    "state": "Uttar Pradesh",
    "name": "Tori-Fatehpur",
    "lat": 25.45505,
    "lng": 79.11428
  },
  {
    "state": "Uttar Pradesh",
    "name": "Tulsipur",
    "lat": 27.5337,
    "lng": 82.41653
  },
  {
    "state": "Uttar Pradesh",
    "name": "Tundla",
    "lat": 27.2146,
    "lng": 78.23683
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ugu",
    "lat": 26.79681,
    "lng": 80.32093
  },
  {
    "state": "Uttar Pradesh",
    "name": "Ujhani",
    "lat": 28.00311,
    "lng": 79.00821
  },
  {
    "state": "Uttar Pradesh",
    "name": "Umri",
    "lat": 26.33333333,
    "lng": 79.25
  },
  {
    "state": "Uttar Pradesh",
    "name": "Un",
    "lat": 29.58479,
    "lng": 77.2554
  },
  {
    "state": "Uttar Pradesh",
    "name": "Unnao",
    "lat": 26.5,
    "lng": 80.5
  },
  {
    "state": "Uttar Pradesh",
    "name": "Usawan",
    "lat": 27.81583333,
    "lng": 79.34861111
  },
  {
    "state": "Uttar Pradesh",
    "name": "Usehat",
    "lat": 27.79796,
    "lng": 79.23763
  },
  {
    "state": "Uttar Pradesh",
    "name": "Uska",
    "lat": 27.2,
    "lng": 83.11666667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Utraula",
    "lat": 27.31933,
    "lng": 82.41872
  },
  {
    "state": "Uttar Pradesh",
    "name": "Varanasi",
    "lat": 25.31668,
    "lng": 83.01041
  },
  {
    "state": "Uttar Pradesh",
    "name": "Vindhyachal",
    "lat": 25.1667,
    "lng": 82.5
  },
  {
    "state": "Uttar Pradesh",
    "name": "Vrindavan",
    "lat": 27.58105,
    "lng": 77.69662
  },
  {
    "state": "Uttar Pradesh",
    "name": "Walterganj",
    "lat": 26.8667,
    "lng": 82.7167
  },
  {
    "state": "Uttar Pradesh",
    "name": "Wazirganj",
    "lat": 28.21145,
    "lng": 79.05665
  },
  {
    "state": "Uttar Pradesh",
    "name": "Yusufpur",
    "lat": 25.6667,
    "lng": 83.4667
  },
  {
    "state": "Uttar Pradesh",
    "name": "Zafarabad",
    "lat": 25.69867,
    "lng": 82.73354
  },
  {
    "state": "Uttar Pradesh",
    "name": "Zaidpur",
    "lat": 26.83093,
    "lng": 81.32929
  },
  {
    "state": "Uttar Pradesh",
    "name": "Zamania",
    "lat": 25.41961,
    "lng": 83.55786
  },
  {
    "state": "Uttarakhand",
    "name": "Almora",
    "lat": 29.69223,
    "lng": 79.49789
  },
  {
    "state": "Uttarakhand",
    "name": "Bageshwar",
    "lat": 29.97315,
    "lng": 79.83224
  },
  {
    "state": "Uttarakhand",
    "name": "Barkot",
    "lat": 30.80861,
    "lng": 78.20596
  },
  {
    "state": "Uttarakhand",
    "name": "Bazpur",
    "lat": 29.15299,
    "lng": 79.10814
  },
  {
    "state": "Uttarakhand",
    "name": "Bhim Tal",
    "lat": 29.34447,
    "lng": 79.56336
  },
  {
    "state": "Uttarakhand",
    "name": "Bhowali",
    "lat": 29.38985,
    "lng": 79.50481
  },
  {
    "state": "Uttarakhand",
    "name": "Birbhaddar",
    "lat": 30.0712,
    "lng": 78.28189
  },
  {
    "state": "Uttarakhand",
    "name": "Chakrata",
    "lat": 30.70369,
    "lng": 77.86386
  },
  {
    "state": "Uttarakhand",
    "name": "Chamoli",
    "lat": 30.5,
    "lng": 79.5
  },
  {
    "state": "Uttarakhand",
    "name": "Champawat",
    "lat": 29.28756,
    "lng": 80.03737
  },
  {
    "state": "Uttarakhand",
    "name": "Clement Town",
    "lat": 30.26361,
    "lng": 78.00862
  },
  {
    "state": "Uttarakhand",
    "name": "Dehradun",
    "lat": 30.33,
    "lng": 78.06
  },
  {
    "state": "Uttarakhand",
    "name": "Devaprayag",
    "lat": 30.14603,
    "lng": 78.60272
  },
  {
    "state": "Uttarakhand",
    "name": "Dharchula",
    "lat": 29.84707,
    "lng": 80.51951
  },
  {
    "state": "Uttarakhand",
    "name": "Doiwala",
    "lat": 30.17667,
    "lng": 78.11659
  },
  {
    "state": "Uttarakhand",
    "name": "Dugadda",
    "lat": 29.80673,
    "lng": 78.61109
  },
  {
    "state": "Uttarakhand",
    "name": "Dwarahat",
    "lat": 29.77785,
    "lng": 79.42731
  },
  {
    "state": "Uttarakhand",
    "name": "Garhwal",
    "lat": 29.96366,
    "lng": 78.92853
  },
  {
    "state": "Uttarakhand",
    "name": "Haldwani",
    "lat": 29.22254,
    "lng": 79.5286
  },
  {
    "state": "Uttarakhand",
    "name": "Harbatpur",
    "lat": 30.43863,
    "lng": 77.74058
  },
  {
    "state": "Uttarakhand",
    "name": "Haridwar",
    "lat": 29.94791,
    "lng": 78.16025
  },
  {
    "state": "Uttarakhand",
    "name": "Jaspur",
    "lat": 29.27919,
    "lng": 78.82798
  },
  {
    "state": "Uttarakhand",
    "name": "Joshimath",
    "lat": 30.55543,
    "lng": 79.56436
  },
  {
    "state": "Uttarakhand",
    "name": "Kaladhungi",
    "lat": 29.28351,
    "lng": 79.351
  },
  {
    "state": "Uttarakhand",
    "name": "Kalagarh Project Colony",
    "lat": 29.4778,
    "lng": 78.78449
  },
  {
    "state": "Uttarakhand",
    "name": "Kashipur",
    "lat": 29.21399,
    "lng": 78.95693
  },
  {
    "state": "Uttarakhand",
    "name": "Khatima",
    "lat": 28.92134,
    "lng": 79.97075
  },
  {
    "state": "Uttarakhand",
    "name": "Kichha",
    "lat": 28.91154,
    "lng": 79.52009
  },
  {
    "state": "Uttarakhand",
    "name": "Kotdwara",
    "lat": 29.74612,
    "lng": 78.52219
  },
  {
    "state": "Uttarakhand",
    "name": "Laksar",
    "lat": 29.7587,
    "lng": 78.04148
  },
  {
    "state": "Uttarakhand",
    "name": "Lansdowne",
    "lat": 29.84183,
    "lng": 78.68014
  },
  {
    "state": "Uttarakhand",
    "name": "Lohaghat",
    "lat": 29.40356,
    "lng": 80.08965
  },
  {
    "state": "Uttarakhand",
    "name": "Manglaur",
    "lat": 29.79094,
    "lng": 77.87836
  },
  {
    "state": "Uttarakhand",
    "name": "Mussoorie",
    "lat": 30.45498,
    "lng": 78.07068
  },
  {
    "state": "Uttarakhand",
    "name": "Naini Tal",
    "lat": 29.39743,
    "lng": 79.44686
  },
  {
    "state": "Uttarakhand",
    "name": "Narendranagar",
    "lat": 30.16173,
    "lng": 78.28712
  },
  {
    "state": "Uttarakhand",
    "name": "Pauri",
    "lat": 30.15286,
    "lng": 78.7771
  },
  {
    "state": "Uttarakhand",
    "name": "Pipalkoti",
    "lat": 30.42553,
    "lng": 79.43066
  },
  {
    "state": "Uttarakhand",
    "name": "Pithoragarh",
    "lat": 30,
    "lng": 80.25
  },
  {
    "state": "Uttarakhand",
    "name": "Raipur",
    "lat": 30.31097,
    "lng": 78.08979
  },
  {
    "state": "Uttarakhand",
    "name": "Raiwala Bara",
    "lat": 30.01864,
    "lng": 78.2293
  },
  {
    "state": "Uttarakhand",
    "name": "Ramnagar",
    "lat": 29.3925,
    "lng": 79.1283
  },
  {
    "state": "Uttarakhand",
    "name": "Ranikhet",
    "lat": 29.64082,
    "lng": 79.43229
  },
  {
    "state": "Uttarakhand",
    "name": "Rishikesh",
    "lat": 30.10778,
    "lng": 78.29255
  },
  {
    "state": "Uttarakhand",
    "name": "Roorkee",
    "lat": 29.86632,
    "lng": 77.89118
  },
  {
    "state": "Uttarakhand",
    "name": "Rudraprayag",
    "lat": 30.60872,
    "lng": 79.06517
  },
  {
    "state": "Uttarakhand",
    "name": "Sitarganj",
    "lat": 28.9293,
    "lng": 79.70436
  },
  {
    "state": "Uttarakhand",
    "name": "Srinagar",
    "lat": 30.22243,
    "lng": 78.78341
  },
  {
    "state": "Uttarakhand",
    "name": "Sultanpur",
    "lat": 29.75534,
    "lng": 78.11034
  },
  {
    "state": "Uttarakhand",
    "name": "Tanakpur",
    "lat": 29.074,
    "lng": 80.11139
  },
  {
    "state": "Uttarakhand",
    "name": "Tehri",
    "lat": 30.39086,
    "lng": 78.4803
  },
  {
    "state": "Uttarakhand",
    "name": "Tehri-Garhwal",
    "lat": 30.5,
    "lng": 78.66667
  },
  {
    "state": "Uttarakhand",
    "name": "Udham Singh Nagar",
    "lat": 29.02746,
    "lng": 79.52347
  },
  {
    "state": "Uttarakhand",
    "name": "Uttarkashi",
    "lat": 30.72986,
    "lng": 78.44342
  },
  {
    "state": "Uttarakhand",
    "name": "Vikasnagar",
    "lat": 30.46944,
    "lng": 77.77275
  },
  {
    "state": "West Bengal",
    "name": "Ahmedpur",
    "lat": 23.83009,
    "lng": 87.68661
  },
  {
    "state": "West Bengal",
    "name": "Aistala",
    "lat": 23.18,
    "lng": 88.58
  },
  {
    "state": "West Bengal",
    "name": "Aknapur",
    "lat": 18.38576389,
    "lng": 77.27225278
  },
  {
    "state": "West Bengal",
    "name": "Alipurduar",
    "lat": 26.49136,
    "lng": 89.52796
  },
  {
    "state": "West Bengal",
    "name": "Amlagora",
    "lat": 22.84616,
    "lng": 87.33559
  },
  {
    "state": "West Bengal",
    "name": "Amta",
    "lat": 22.57333333,
    "lng": 88.01611111
  },
  {
    "state": "West Bengal",
    "name": "Amtala",
    "lat": 22.22,
    "lng": 88.17
  },
  {
    "state": "West Bengal",
    "name": "Andal",
    "lat": 23.6,
    "lng": 87.2
  },
  {
    "state": "West Bengal",
    "name": "Arambagh community development block",
    "lat": 22.88,
    "lng": 87.78
  },
  {
    "state": "West Bengal",
    "name": "Asansol",
    "lat": 23.68333333,
    "lng": 86.96666667
  },
  {
    "state": "West Bengal",
    "name": "Ashoknagar Kalyangarh",
    "lat": 22.833,
    "lng": 88.633
  },
  {
    "state": "West Bengal",
    "name": "Badkulla",
    "lat": 23.28,
    "lng": 88.53
  },
  {
    "state": "West Bengal",
    "name": "Baduria",
    "lat": 22.74,
    "lng": 88.79
  },
  {
    "state": "West Bengal",
    "name": "Bagdogra",
    "lat": 26.699804,
    "lng": 88.319392
  },
  {
    "state": "West Bengal",
    "name": "Bagnan",
    "lat": 22.47,
    "lng": 87.97
  },
  {
    "state": "West Bengal",
    "name": "Bagula",
    "lat": 23.335,
    "lng": 88.644
  },
  {
    "state": "West Bengal",
    "name": "Bahula",
    "lat": 23.657419,
    "lng": 87.195974
  },
  {
    "state": "West Bengal",
    "name": "Baidyabati",
    "lat": 22.79,
    "lng": 88.32
  },
  {
    "state": "West Bengal",
    "name": "Bakreswar",
    "lat": 23.8832,
    "lng": 87.37265
  },
  {
    "state": "West Bengal",
    "name": "Balarampur",
    "lat": 23.09714,
    "lng": 86.22292
  },
  {
    "state": "West Bengal",
    "name": "Bali Chak",
    "lat": 22.36482,
    "lng": 87.55304
  },
  {
    "state": "West Bengal",
    "name": "Bally",
    "lat": 22.65,
    "lng": 88.34
  },
  {
    "state": "West Bengal",
    "name": "Balurghat",
    "lat": 25.21666667,
    "lng": 88.76666667
  },
  {
    "state": "West Bengal",
    "name": "Bamangola community development block",
    "lat": 25.17,
    "lng": 88.335
  },
  {
    "state": "West Bengal",
    "name": "Baneswar",
    "lat": 26.65,
    "lng": 89.81666667
  },
  {
    "state": "West Bengal",
    "name": "Bangaon",
    "lat": 23.07,
    "lng": 88.82
  },
  {
    "state": "West Bengal",
    "name": "Bankra",
    "lat": 22.63,
    "lng": 88.3
  },
  {
    "state": "West Bengal",
    "name": "Bankura",
    "lat": 23.25,
    "lng": 87.06666667
  },
  {
    "state": "West Bengal",
    "name": "Bansberia",
    "lat": 22.97,
    "lng": 88.4
  },
  {
    "state": "West Bengal",
    "name": "Bansihari community development block",
    "lat": 25.4,
    "lng": 88.4167
  },
  {
    "state": "West Bengal",
    "name": "Barabazar",
    "lat": 23.36,
    "lng": 86.65
  },
  {
    "state": "West Bengal",
    "name": "Baranagar",
    "lat": 22.64,
    "lng": 88.37
  },
  {
    "state": "West Bengal",
    "name": "Barasat",
    "lat": 22.23333333,
    "lng": 88.45
  },
  {
    "state": "West Bengal",
    "name": "Bardhaman",
    "lat": 23.25,
    "lng": 87.85
  },
  {
    "state": "West Bengal",
    "name": "Barjora",
    "lat": 23.43333333,
    "lng": 87.28333333
  },
  {
    "state": "West Bengal",
    "name": "Barrackpore",
    "lat": 22.75,
    "lng": 88.36666667
  },
  {
    "state": "West Bengal",
    "name": "Baruipur",
    "lat": 22.35,
    "lng": 88.44
  },
  {
    "state": "West Bengal",
    "name": "Basanti",
    "lat": 22.1891534,
    "lng": 88.6705685
  },
  {
    "state": "West Bengal",
    "name": "Basirhat",
    "lat": 22.65722222,
    "lng": 88.89416667
  },
  {
    "state": "West Bengal",
    "name": "Bawali",
    "lat": 22.42563,
    "lng": 88.19336
  },
  {
    "state": "West Bengal",
    "name": "Begampur",
    "lat": 22.74,
    "lng": 88.24
  },
  {
    "state": "West Bengal",
    "name": "Belda",
    "lat": 22.08,
    "lng": 87.35
  },
  {
    "state": "West Bengal",
    "name": "Beldanga",
    "lat": 23.93,
    "lng": 88.25
  },
  {
    "state": "West Bengal",
    "name": "Beliatore",
    "lat": 23.33333333,
    "lng": 87.21666667
  },
  {
    "state": "West Bengal",
    "name": "Berhampore",
    "lat": 24.1,
    "lng": 88.25
  },
  {
    "state": "West Bengal",
    "name": "Bhadreswar",
    "lat": 22.82,
    "lng": 88.35
  },
  {
    "state": "West Bengal",
    "name": "Bhandardaha",
    "lat": 22.62,
    "lng": 88.21
  },
  {
    "state": "West Bengal",
    "name": "Bhatpara",
    "lat": 22.86666667,
    "lng": 88.41666667
  },
  {
    "state": "West Bengal",
    "name": "Birbhum district",
    "lat": 24,
    "lng": 87.58333
  },
  {
    "state": "West Bengal",
    "name": "Birpara",
    "lat": 26.5,
    "lng": 89.5
  },
  {
    "state": "West Bengal",
    "name": "Bishnupur",
    "lat": 22.38,
    "lng": 88.27
  },
  {
    "state": "West Bengal",
    "name": "Bolpur",
    "lat": 23.67,
    "lng": 87.72
  },
  {
    "state": "West Bengal",
    "name": "Budge Budge",
    "lat": 22.47,
    "lng": 88.17
  },
  {
    "state": "West Bengal",
    "name": "Canning",
    "lat": 22.32,
    "lng": 88.67
  },
  {
    "state": "West Bengal",
    "name": "Chakapara",
    "lat": 22.63,
    "lng": 88.35
  },
  {
    "state": "West Bengal",
    "name": "Chakdaha",
    "lat": 23.08,
    "lng": 88.52
  },
  {
    "state": "West Bengal",
    "name": "Champadanga",
    "lat": 22.83,
    "lng": 87.96
  },
  {
    "state": "West Bengal",
    "name": "Champahati",
    "lat": 22.40026,
    "lng": 88.49209
  },
  {
    "state": "West Bengal",
    "name": "Champdani",
    "lat": 22.8,
    "lng": 88.37
  },
  {
    "state": "West Bengal",
    "name": "Chandannagar",
    "lat": 22.86666667,
    "lng": 88.38333333
  },
  {
    "state": "West Bengal",
    "name": "Chandrakona",
    "lat": 22.73,
    "lng": 87.52
  },
  {
    "state": "West Bengal",
    "name": "Chittaranjan",
    "lat": 23.87,
    "lng": 86.87
  },
  {
    "state": "West Bengal",
    "name": "Churulia",
    "lat": 23.78,
    "lng": 87.08
  },
  {
    "state": "West Bengal",
    "name": "Contai",
    "lat": 21.78,
    "lng": 87.75
  },
  {
    "state": "West Bengal",
    "name": "Cooch Behar",
    "lat": 26.31666667,
    "lng": 89.43333333
  },
  {
    "state": "West Bengal",
    "name": "Cossimbazar",
    "lat": 24.12,
    "lng": 88.28
  },
  {
    "state": "West Bengal",
    "name": "Dakshin Dinajpur district",
    "lat": 25.22,
    "lng": 88.76
  },
  {
    "state": "West Bengal",
    "name": "Dalkola",
    "lat": 25.87577,
    "lng": 87.84009
  },
  {
    "state": "West Bengal",
    "name": "Dam Dam",
    "lat": 22.63333333,
    "lng": 88.42277778
  },
  {
    "state": "West Bengal",
    "name": "Darjeeling",
    "lat": 27.04166667,
    "lng": 88.26305556
  },
  {
    "state": "West Bengal",
    "name": "Daulatpur",
    "lat": 25.32605,
    "lng": 88.32989
  },
  {
    "state": "West Bengal",
    "name": "Debagram",
    "lat": 23.68333333,
    "lng": 88.28333333
  },
  {
    "state": "West Bengal",
    "name": "Debipur",
    "lat": 24.25029,
    "lng": 88.61824
  },
  {
    "state": "West Bengal",
    "name": "Dhaniakhali community development block",
    "lat": 22.97,
    "lng": 88.1
  },
  {
    "state": "West Bengal",
    "name": "Dhulagari",
    "lat": 22.58222222,
    "lng": 88.17111111
  },
  {
    "state": "West Bengal",
    "name": "Dhulian",
    "lat": 24.68,
    "lng": 87.97
  },
  {
    "state": "West Bengal",
    "name": "Dhupguri",
    "lat": 26.6,
    "lng": 89.02
  },
  {
    "state": "West Bengal",
    "name": "Diamond Harbour",
    "lat": 22.2,
    "lng": 88.2
  },
  {
    "state": "West Bengal",
    "name": "Digha",
    "lat": 21.68,
    "lng": 87.55
  },
  {
    "state": "West Bengal",
    "name": "Dinhata",
    "lat": 26.13,
    "lng": 89.47
  },
  {
    "state": "West Bengal",
    "name": "Domjur",
    "lat": 22.64,
    "lng": 88.22
  },
  {
    "state": "West Bengal",
    "name": "Dubrajpur",
    "lat": 23.8,
    "lng": 87.38
  },
  {
    "state": "West Bengal",
    "name": "Durgapur",
    "lat": 23.55,
    "lng": 87.32
  },
  {
    "state": "West Bengal",
    "name": "Egra",
    "lat": 21.9,
    "lng": 87.53
  },
  {
    "state": "West Bengal",
    "name": "Falakata",
    "lat": 26.53,
    "lng": 89.2
  },
  {
    "state": "West Bengal",
    "name": "Farakka",
    "lat": 24.81667,
    "lng": 87.9
  },
  {
    "state": "West Bengal",
    "name": "Fort Gloster",
    "lat": 22.50444444,
    "lng": 88.18333333
  },
  {
    "state": "West Bengal",
    "name": "Gaighata community development block",
    "lat": 22.93,
    "lng": 88.73
  },
  {
    "state": "West Bengal",
    "name": "Gairkata",
    "lat": 26.68,
    "lng": 89.03
  },
  {
    "state": "West Bengal",
    "name": "Gangadharpur",
    "lat": 22.7604,
    "lng": 88.2218
  },
  {
    "state": "West Bengal",
    "name": "Gangarampur",
    "lat": 25.4,
    "lng": 88.52
  },
  {
    "state": "West Bengal",
    "name": "Garui",
    "lat": 22.63333333,
    "lng": 88.4
  },
  {
    "state": "West Bengal",
    "name": "Garulia",
    "lat": 22.82,
    "lng": 88.37
  },
  {
    "state": "West Bengal",
    "name": "Ghatal",
    "lat": 22.67,
    "lng": 87.72
  },
  {
    "state": "West Bengal",
    "name": "Giria",
    "lat": 24.51666667,
    "lng": 88.06666667
  },
  {
    "state": "West Bengal",
    "name": "Gobardanga",
    "lat": 22.87,
    "lng": 88.76
  },
  {
    "state": "West Bengal",
    "name": "Gobindapur",
    "lat": 22.59306,
    "lng": 88.09139
  },
  {
    "state": "West Bengal",
    "name": "Gopalpur",
    "lat": 22.61845,
    "lng": 88.75119
  },
  {
    "state": "West Bengal",
    "name": "Gopinathpur",
    "lat": 23.22,
    "lng": 88.15
  },
  {
    "state": "West Bengal",
    "name": "Gorubathan",
    "lat": 26.97,
    "lng": 88.7
  },
  {
    "state": "West Bengal",
    "name": "Gosaba",
    "lat": 22.16,
    "lng": 88.8
  },
  {
    "state": "West Bengal",
    "name": "Gosanimari",
    "lat": 26.15,
    "lng": 89.36666667
  },
  {
    "state": "West Bengal",
    "name": "Gurdaha",
    "lat": 22.73472222,
    "lng": 88.75944444
  },
  {
    "state": "West Bengal",
    "name": "Guskhara",
    "lat": 23.49277778,
    "lng": 87.73472222
  },
  {
    "state": "West Bengal",
    "name": "Habra",
    "lat": 22.83,
    "lng": 88.63
  },
  {
    "state": "West Bengal",
    "name": "Haldia",
    "lat": 22.06046,
    "lng": 88.10975
  },
  {
    "state": "West Bengal",
    "name": "Haldibari",
    "lat": 26.33,
    "lng": 88.77
  },
  {
    "state": "West Bengal",
    "name": "Halisahar",
    "lat": 22.95,
    "lng": 88.42
  },
  {
    "state": "West Bengal",
    "name": "Harindanga",
    "lat": 22.03333333,
    "lng": 88.31666667
  },
  {
    "state": "West Bengal",
    "name": "Haringhata",
    "lat": 22.95,
    "lng": 88.57
  },
  {
    "state": "West Bengal",
    "name": "Haripur",
    "lat": 22.93611,
    "lng": 88.23194
  },
  {
    "state": "West Bengal",
    "name": "Hasimara",
    "lat": 26.75,
    "lng": 89.35
  },
  {
    "state": "West Bengal",
    "name": "Hindusthan Cables Town",
    "lat": 23.82,
    "lng": 86.9
  },
  {
    "state": "West Bengal",
    "name": "Hooghly district",
    "lat": 22.91,
    "lng": 88.39
  },
  {
    "state": "West Bengal",
    "name": "Howrah",
    "lat": 22.57688,
    "lng": 88.31857
  },
  {
    "state": "West Bengal",
    "name": "Ichapur",
    "lat": 22.80499,
    "lng": 88.37088
  },
  {
    "state": "West Bengal",
    "name": "Indpur community development block",
    "lat": 23.1667,
    "lng": 86.9333
  },
  {
    "state": "West Bengal",
    "name": "Ingraj Bazar",
    "lat": 25.00447,
    "lng": 88.14573
  },
  {
    "state": "West Bengal",
    "name": "Islampur",
    "lat": 26.27,
    "lng": 88.2
  },
  {
    "state": "West Bengal",
    "name": "Jafarpur",
    "lat": 22.32,
    "lng": 88.23
  },
  {
    "state": "West Bengal",
    "name": "Jaigaon",
    "lat": 26.86666667,
    "lng": 89.38333333
  },
  {
    "state": "West Bengal",
    "name": "Jalpaiguri",
    "lat": 26.51666667,
    "lng": 88.73333333
  },
  {
    "state": "West Bengal",
    "name": "Jamuria",
    "lat": 23.7,
    "lng": 87.08
  },
  {
    "state": "West Bengal",
    "name": "Jangipur",
    "lat": 24.47001,
    "lng": 88.07659
  },
  {
    "state": "West Bengal",
    "name": "Jaynagar Majilpur",
    "lat": 22.17722222,
    "lng": 88.42583333
  },
  {
    "state": "West Bengal",
    "name": "Jejur",
    "lat": 22.88,
    "lng": 88.12
  },
  {
    "state": "West Bengal",
    "name": "Jhalida",
    "lat": 23.36541,
    "lng": 85.97581
  },
  {
    "state": "West Bengal",
    "name": "Jhargram",
    "lat": 22.45,
    "lng": 86.98
  },
  {
    "state": "West Bengal",
    "name": "Jhilimili",
    "lat": 22.8167,
    "lng": 86.6167
  },
  {
    "state": "West Bengal",
    "name": "Kakdwip",
    "lat": 21.8833,
    "lng": 88.1833
  },
  {
    "state": "West Bengal",
    "name": "Kalaikunda",
    "lat": 22.33916667,
    "lng": 87.22638889
  },
  {
    "state": "West Bengal",
    "name": "Kaliaganj",
    "lat": 25.63,
    "lng": 88.32
  },
  {
    "state": "West Bengal",
    "name": "Kalimpong",
    "lat": 27.07059,
    "lng": 88.47529
  },
  {
    "state": "West Bengal",
    "name": "Kalna",
    "lat": 23.22,
    "lng": 88.37
  },
  {
    "state": "West Bengal",
    "name": "Kalyani",
    "lat": 22.975,
    "lng": 88.43444444
  },
  {
    "state": "West Bengal",
    "name": "Kamarhati",
    "lat": 22.67,
    "lng": 88.37
  },
  {
    "state": "West Bengal",
    "name": "Kamarpukur",
    "lat": 22.91,
    "lng": 87.65
  },
  {
    "state": "West Bengal",
    "name": "Kanchrapara",
    "lat": 22.97,
    "lng": 88.43
  },
  {
    "state": "West Bengal",
    "name": "Kandi",
    "lat": 23.95,
    "lng": 88.03
  },
  {
    "state": "West Bengal",
    "name": "Karimpur",
    "lat": 23.96666667,
    "lng": 88.61666667
  },
  {
    "state": "West Bengal",
    "name": "Katwa",
    "lat": 23.65,
    "lng": 88.13
  },
  {
    "state": "West Bengal",
    "name": "Kenda",
    "lat": 23.2,
    "lng": 86.53
  },
  {
    "state": "West Bengal",
    "name": "Keshabpur",
    "lat": 22.97,
    "lng": 88.26
  },
  {
    "state": "West Bengal",
    "name": "Kharagpur",
    "lat": 22.330239,
    "lng": 87.323653
  },
  {
    "state": "West Bengal",
    "name": "Kharar",
    "lat": 22.7,
    "lng": 87.68
  },
  {
    "state": "West Bengal",
    "name": "Kharba",
    "lat": 25.42,
    "lng": 88.07
  },
  {
    "state": "West Bengal",
    "name": "Khardaha",
    "lat": 22.72,
    "lng": 88.38
  },
  {
    "state": "West Bengal",
    "name": "Khatra",
    "lat": 22.98,
    "lng": 86.85
  },
  {
    "state": "West Bengal",
    "name": "Kirnahar",
    "lat": 23.75,
    "lng": 87.87
  },
  {
    "state": "West Bengal",
    "name": "Kolkata",
    "lat": 22.54111111,
    "lng": 88.33777778
  },
  {
    "state": "West Bengal",
    "name": "Konnagar",
    "lat": 22.7,
    "lng": 88.35
  },
  {
    "state": "West Bengal",
    "name": "Krishnanagar",
    "lat": 23.4,
    "lng": 88.5
  },
  {
    "state": "West Bengal",
    "name": "Krishnapur",
    "lat": 22.67,
    "lng": 88.26
  },
  {
    "state": "West Bengal",
    "name": "Kshirpai",
    "lat": 22.7109664,
    "lng": 87.6174038
  },
  {
    "state": "West Bengal",
    "name": "Kulpi",
    "lat": 22.08,
    "lng": 88.24
  },
  {
    "state": "West Bengal",
    "name": "Kultali",
    "lat": 21.9,
    "lng": 88.4
  },
  {
    "state": "West Bengal",
    "name": "Kulti",
    "lat": 23.73,
    "lng": 86.85
  },
  {
    "state": "West Bengal",
    "name": "Kurseong",
    "lat": 26.88,
    "lng": 88.28
  },
  {
    "state": "West Bengal",
    "name": "Lalgarh",
    "lat": 22.58,
    "lng": 87.05
  },
  {
    "state": "West Bengal",
    "name": "Lalgola",
    "lat": 24.42,
    "lng": 88.25
  },
  {
    "state": "West Bengal",
    "name": "Loyabad",
    "lat": 23.67,
    "lng": 86.67
  },
  {
    "state": "West Bengal",
    "name": "Madanpur",
    "lat": 23.02,
    "lng": 88.48
  },
  {
    "state": "West Bengal",
    "name": "Madhyamgram",
    "lat": 22.7,
    "lng": 88.45
  },
  {
    "state": "West Bengal",
    "name": "Mahiari",
    "lat": 22.59,
    "lng": 88.24
  },
  {
    "state": "West Bengal",
    "name": "Mahishadal community development block",
    "lat": 22.183333,
    "lng": 87.983333
  },
  {
    "state": "West Bengal",
    "name": "Mainaguri",
    "lat": 26.57,
    "lng": 88.82
  },
  {
    "state": "West Bengal",
    "name": "Manikpara",
    "lat": 22.36666667,
    "lng": 87.11666667
  },
  {
    "state": "West Bengal",
    "name": "Masila",
    "lat": 22.58083,
    "lng": 88.23278
  },
  {
    "state": "West Bengal",
    "name": "Mathabhanga",
    "lat": 26.34197,
    "lng": 89.21555
  },
  {
    "state": "West Bengal",
    "name": "Matiali community development block",
    "lat": 26.927159,
    "lng": 88.8133049
  },
  {
    "state": "West Bengal",
    "name": "Matigara community development block",
    "lat": 26.716667,
    "lng": 88.383333
  },
  {
    "state": "West Bengal",
    "name": "Medinipur",
    "lat": 22.43333333,
    "lng": 87.33333333
  },
  {
    "state": "West Bengal",
    "name": "Mejia community development block",
    "lat": 23.57,
    "lng": 87.1
  },
  {
    "state": "West Bengal",
    "name": "Memari",
    "lat": 23.2,
    "lng": 88.12
  },
  {
    "state": "West Bengal",
    "name": "Mirik",
    "lat": 26.887,
    "lng": 88.187
  },
  {
    "state": "West Bengal",
    "name": "Mohanpur community development block",
    "lat": 21.83856,
    "lng": 87.43145
  },
  {
    "state": "West Bengal",
    "name": "Monoharpur",
    "lat": 22.68,
    "lng": 88.3
  },
  {
    "state": "West Bengal",
    "name": "Muragacha",
    "lat": 23.53631,
    "lng": 88.39425
  },
  {
    "state": "West Bengal",
    "name": "Muri",
    "lat": 23.37,
    "lng": 85.86
  },
  {
    "state": "West Bengal",
    "name": "Murshidabad",
    "lat": 24.18,
    "lng": 88.27
  },
  {
    "state": "West Bengal",
    "name": "Nabadwip",
    "lat": 23.40722222,
    "lng": 88.37777778
  },
  {
    "state": "West Bengal",
    "name": "Nabagram",
    "lat": 22.29,
    "lng": 88.51
  },
  {
    "state": "West Bengal",
    "name": "Nadia district",
    "lat": 23.4,
    "lng": 88.5
  },
  {
    "state": "West Bengal",
    "name": "Nagarukhra",
    "lat": 22.94099,
    "lng": 88.63701
  },
  {
    "state": "West Bengal",
    "name": "Nagrakata",
    "lat": 26.9,
    "lng": 88.9667
  },
  {
    "state": "West Bengal",
    "name": "Naihati",
    "lat": 22.9,
    "lng": 88.42
  },
  {
    "state": "West Bengal",
    "name": "Naksalbari",
    "lat": 26.68333333,
    "lng": 88.21666667
  },
  {
    "state": "West Bengal",
    "name": "Nalhati",
    "lat": 24.3,
    "lng": 87.82
  },
  {
    "state": "West Bengal",
    "name": "Nalpur",
    "lat": 22.53,
    "lng": 88.19
  },
  {
    "state": "West Bengal",
    "name": "Namkhana community development block",
    "lat": 21.7,
    "lng": 88.14
  },
  {
    "state": "West Bengal",
    "name": "Nandigram",
    "lat": 22.01,
    "lng": 87.99
  },
  {
    "state": "West Bengal",
    "name": "Nangi",
    "lat": 22.50833333,
    "lng": 88.21527778
  },
  {
    "state": "West Bengal",
    "name": "Nayagram community development block",
    "lat": 22.0319,
    "lng": 87.1781
  },
  {
    "state": "West Bengal",
    "name": "North 24 Parganas district",
    "lat": 22.13,
    "lng": 88.5
  },
  {
    "state": "West Bengal",
    "name": "Odlabari",
    "lat": 26.83638889,
    "lng": 88.62944444
  },
  {
    "state": "West Bengal",
    "name": "Paikpara",
    "lat": 24.77121,
    "lng": 87.92251
  },
  {
    "state": "West Bengal",
    "name": "Panagarh",
    "lat": 23.45,
    "lng": 87.43
  },
  {
    "state": "West Bengal",
    "name": "Panchla",
    "lat": 22.54,
    "lng": 88.14
  },
  {
    "state": "West Bengal",
    "name": "Panchmura",
    "lat": 22.9667,
    "lng": 87.1667
  },
  {
    "state": "West Bengal",
    "name": "Pandua",
    "lat": 23.08,
    "lng": 88.28
  },
  {
    "state": "West Bengal",
    "name": "Panihati",
    "lat": 22.69,
    "lng": 88.37
  },
  {
    "state": "West Bengal",
    "name": "Panskura",
    "lat": 22.42,
    "lng": 87.7
  },
  {
    "state": "West Bengal",
    "name": "Parbatipur",
    "lat": 22.6625,
    "lng": 88.22222
  },
  {
    "state": "West Bengal",
    "name": "Paschim Medinipur district",
    "lat": 22.43333333,
    "lng": 87.33333333
  },
  {
    "state": "West Bengal",
    "name": "Patiram",
    "lat": 25.31666667,
    "lng": 88.75
  },
  {
    "state": "West Bengal",
    "name": "Patrasaer",
    "lat": 23.19697,
    "lng": 87.53319
  },
  {
    "state": "West Bengal",
    "name": "Patuli",
    "lat": 23.55,
    "lng": 88.25
  },
  {
    "state": "West Bengal",
    "name": "Pujali",
    "lat": 22.47,
    "lng": 88.15
  },
  {
    "state": "West Bengal",
    "name": "Puncha community development block",
    "lat": 23.123,
    "lng": 86.653
  },
  {
    "state": "West Bengal",
    "name": "Purba Medinipur district",
    "lat": 22.3,
    "lng": 87.91666667
  },
  {
    "state": "West Bengal",
    "name": "Purulia",
    "lat": 23.33333333,
    "lng": 86.36666667
  },
  {
    "state": "West Bengal",
    "name": "Raghudebbati",
    "lat": 22.53,
    "lng": 88.2
  },
  {
    "state": "West Bengal",
    "name": "Raghunathpur",
    "lat": 23.55,
    "lng": 86.67
  },
  {
    "state": "West Bengal",
    "name": "Raiganj",
    "lat": 25.61666667,
    "lng": 88.11666667
  },
  {
    "state": "West Bengal",
    "name": "Rajmahal",
    "lat": 25.05,
    "lng": 87.84
  },
  {
    "state": "West Bengal",
    "name": "Rajnagar community development block",
    "lat": 23.9472,
    "lng": 87.3625
  },
  {
    "state": "West Bengal",
    "name": "Ramchandrapur",
    "lat": 22.9,
    "lng": 88.48
  },
  {
    "state": "West Bengal",
    "name": "Ramjibanpur",
    "lat": 22.83,
    "lng": 87.62
  },
  {
    "state": "West Bengal",
    "name": "Ramnagar",
    "lat": 22.77778,
    "lng": 88.24639
  },
  {
    "state": "West Bengal",
    "name": "Rampur Hat",
    "lat": 24.17737,
    "lng": 87.78275
  },
  {
    "state": "West Bengal",
    "name": "Ranaghat",
    "lat": 23.18,
    "lng": 88.58
  },
  {
    "state": "West Bengal",
    "name": "Raniganj",
    "lat": 23.62,
    "lng": 87.13
  },
  {
    "state": "West Bengal",
    "name": "Raypur",
    "lat": 22.41083,
    "lng": 88.50944
  },
  {
    "state": "West Bengal",
    "name": "Rishra",
    "lat": 22.71,
    "lng": 88.35
  },
  {
    "state": "West Bengal",
    "name": "Sahapur",
    "lat": 22.52,
    "lng": 88.17
  },
  {
    "state": "West Bengal",
    "name": "Sainthia",
    "lat": 23.95,
    "lng": 87.67
  },
  {
    "state": "West Bengal",
    "name": "Salanpur community development block",
    "lat": 23.76702,
    "lng": 86.87492
  },
  {
    "state": "West Bengal",
    "name": "Sankarpur",
    "lat": 23.6,
    "lng": 87.2
  },
  {
    "state": "West Bengal",
    "name": "Sankrail",
    "lat": 22.57,
    "lng": 88.24
  },
  {
    "state": "West Bengal",
    "name": "Santipur",
    "lat": 23.25,
    "lng": 88.43
  },
  {
    "state": "West Bengal",
    "name": "Santoshpur",
    "lat": 22.5,
    "lng": 88.17
  },
  {
    "state": "West Bengal",
    "name": "Santuri community development block",
    "lat": 23.5272,
    "lng": 86.85709
  },
  {
    "state": "West Bengal",
    "name": "Sarenga",
    "lat": 22.54,
    "lng": 88.21
  },
  {
    "state": "West Bengal",
    "name": "Serampore",
    "lat": 22.75,
    "lng": 88.34
  },
  {
    "state": "West Bengal",
    "name": "Serpur",
    "lat": 24.13,
    "lng": 88
  },
  {
    "state": "West Bengal",
    "name": "Siliguri",
    "lat": 26.71004,
    "lng": 88.42851
  },
  {
    "state": "West Bengal",
    "name": "Singur",
    "lat": 22.81,
    "lng": 88.23
  },
  {
    "state": "West Bengal",
    "name": "Sodpur",
    "lat": 22.70416667,
    "lng": 88.39166667
  },
  {
    "state": "West Bengal",
    "name": "Solap",
    "lat": 22.12777778,
    "lng": 88.15861111
  },
  {
    "state": "West Bengal",
    "name": "Sonada",
    "lat": 27,
    "lng": 88.14
  },
  {
    "state": "West Bengal",
    "name": "Sonamukhi",
    "lat": 23.3,
    "lng": 87.42
  },
  {
    "state": "West Bengal",
    "name": "Sonarpur community development block",
    "lat": 22.44259,
    "lng": 88.43044
  },
  {
    "state": "West Bengal",
    "name": "South 24 Parganas district",
    "lat": 22.16197,
    "lng": 88.4317
  },
  {
    "state": "West Bengal",
    "name": "Srikhanda",
    "lat": 23.6,
    "lng": 88.0833
  },
  {
    "state": "West Bengal",
    "name": "Srirampur",
    "lat": 23.35,
    "lng": 88.12
  },
  {
    "state": "West Bengal",
    "name": "Suri",
    "lat": 23.91666667,
    "lng": 87.53333333
  },
  {
    "state": "West Bengal",
    "name": "Swarupnagar community development block",
    "lat": 22.8333,
    "lng": 88.8667
  },
  {
    "state": "West Bengal",
    "name": "Takdah",
    "lat": 27.0333,
    "lng": 88.3667
  },
  {
    "state": "West Bengal",
    "name": "Taki",
    "lat": 22.59,
    "lng": 88.92
  },
  {
    "state": "West Bengal",
    "name": "Tamluk",
    "lat": 22.3,
    "lng": 87.91666667
  },
  {
    "state": "West Bengal",
    "name": "Tarakeswar",
    "lat": 22.89,
    "lng": 88.02
  },
  {
    "state": "West Bengal",
    "name": "Titagarh",
    "lat": 22.74,
    "lng": 88.37
  },
  {
    "state": "West Bengal",
    "name": "Tufanganj",
    "lat": 26.32,
    "lng": 89.67
  },
  {
    "state": "West Bengal",
    "name": "Tulin",
    "lat": 23.37,
    "lng": 85.9
  },
  {
    "state": "West Bengal",
    "name": "Uchalan",
    "lat": 23.0333,
    "lng": 87.7833
  },
  {
    "state": "West Bengal",
    "name": "Ula",
    "lat": 22.7225,
    "lng": 88.55556
  },
  {
    "state": "West Bengal",
    "name": "Uluberia",
    "lat": 22.47,
    "lng": 88.11
  },
  {
    "state": "West Bengal",
    "name": "Uttar Dinajpur district",
    "lat": 25.62,
    "lng": 88.12
  },
  {
    "state": "West Bengal",
    "name": "Uttarpara Kotrung",
    "lat": 22.67,
    "lng": 88.35
  }
];
