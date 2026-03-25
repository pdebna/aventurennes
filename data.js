const enigmes = [

  {
    id: 1,
    question: "Combien de colonnes compte-t-on sur la façade de la Cathédrale Saint-Pierre ?",
    answers: ["42"],
    intro: "Commençons notre voyage à travers le pays Rennais en rendant visite à ces arrêts. Tracez soigneusement la route empruntée entre chaque, à vol d'oiseau, à l'aide d'un fluo !",
    stops: ["Centre de loisirs - 74", "Hallerais - 62", "Corps-Nuds Gare - 73", "Bel-Air - 73"],
    letter: "N",
    message: "Clin d'oeil de l'architecte, on en trouve exactement le même nombre à l'intérieur ! Comptez, vous verrez 😜",
    image: "images/stpierre.jpg" 
  },

  {
    id: 2,
    question: "Quel journal avait son siège au 38 rue du Pré Botté, dans un hôtel construit en 1912 ?",
    answers: ["Ouest-France", "Ouest France"],
    intro: "Poursuivons notre route :",
    stops: ["Champs-Péans - 67", "Moulin de Joué - 67", "En suivant la voie ferrée, gagnez Rond-Point de Bray - 67 ; puis rebroussez chemin", "Le Blosne - a", "Bois de Soeuvres - 73"],
    letter: "E1",
    message: "L’hôtel particulier de 1912, de style Louis-XVI, fut remanié après la guerre avec un auvent Art nouveau très distinctif.",
    image: "images/ouestfrance.jpg" 
  },

  {
    id: 3,
    question: "Quelle oeuvre de Georges de La Tour est conservée au Musée des Beaux-Arts de Rennes ?",
    answers: ["Le Nouveau-Né", "le nouveau né"],
    intro: "Poursuivons notre route :",
    stops: ["Institu Agro - 53", "Pont de Bretagne - 53", "Chèques Postaux - 53", "Maltière - C7"],
    letter: "T3",
    message: "Peinte vers 1648, il s'agit de la plus célèbre toile du peintre lorrain. Sa présence mérite bien une petit visite au musée, quai Zola !",
    image: "images/nouveaune.jpg" 
  },

  {
    id: 4,
    question: "Combien d'étages compte le plus haut immeuble de Rennes, les Horizons ?",
    answers: ["30"],
    intro: "Ne nous arrêtons pas en si bon chemin !",
    message: "Construit en 1970 par Georges Maillols, il s'agit à l'époque de l'un des plus hauts immeubles d'habitation du pays. On le qualifie même de gratte-ciel !",
    stops: ["Pont-Brand - 78", "CHP Saint Grégoire - 178ex", "Maison Blanche - 70", "Betton Centre - 71"],
    letter: "U1",
    image: "images/horizons.jpg" 
  },

  {
    id: 5,
    question: "Depuis quelle année est organisé le marché des Lices, chaque samedi matin ?",
    answers: ["1622"],
    stops: ["Petite Hulotais - 70", "Curien - 83", "Juteauderies - 50", "Château de Vaux - 50"],
    letter: "X",
    message: "Et c'est aujourd'hui le deuxième plus grand marché alimentaire de France !"
  },

  {
    id: 6,
    question: "De quel siècle datent les maisons les plus anciennes de Rennes, toujours debout ?",
    answers: ["XVe siècle", "15e siècle", "XV siècle", "15 siècle", "XV", "15"],
    stops: ["Viennais - 52", "Parthenay Fontaine - 65", "Placis de la Touche - 65", "Pâtis Roussel - 77", "PLacis de la Touche - 65", "Haute Rabine - 65", "Décoparc - Metrie - 168ex"],
    letter: "E2",
    message: "On les trouve notamment rue de la Psalette et rue du Chapitre."
  },

  {
    id: 7,
    question: "Quel évêque a donné à la cathédrale de Rennes son visage actuel ?",
    answers: ["Mgr Brossay Saint Marc", "Brossay Saint Marc", "Brossay-Saint-Marc", "Mgr Brossay-Saint-Marc"],
    stops: ["Bécherel Centre - 82", "Mettrie Templiers - 82", "Chapelle-Chaussée - 82"],
    letter: "V",
    message: "Il voulait en faire le pendant de St Pierre de Rome. Pas si mal réussi !"
  },

  {
    id: 8,
    question: "Quel événement a marqué la ville en 1720 ?",
    answers: ["Un incendie", "incendie"],
    stops: ["Pôle Sud - 91", "Rivaudière - 79", "Château d'eau - 80", "Surcouf - 74", "Monts Gaultier - 91", "Pôle Sud - 91"],
    letter: "O",
    message: "Il ravagea 40% de la ville..."
  },

  {
    id: 9,
    question: "De quel commerce est parti l'incendie de 1720 ?",
    answers: ["menuisier", "menuiserie"],
    stops: ["Molière - 61", "Perelle - 74"],
    letter: "I",
    message: "Ivre, le menuisier se serait disputé avec sa femme et aurait fait tomber une bougie sur un tas de copeaux."
  },

  {
    id: 10,
    question: "Combien de variétés de roses abrite la roseraie du Thabor ?",
    answers: ["900"],
    stops: ["Merlin - 53","Tertre - 53", "Les Pins - 54", "Berthault - 54", "Les Pins - 54", "Pont d'Avoine - 56"],
    letter: "E3",
    message: "Plus exactement, 2500 roses de 900 variétés différentes."
  },

  {
    id: 11,
    question: "Quel château rennais fut détruit en 1967 ?",
    answers: ["Bréquigny", "Château de Bréquigny"],
    stops: ["Gingouillère - 79", "Lande du Pont - C7", "Mare de la Salle - 91", "Croix aux Potiers - 72", "Point du Jour - 79"],
    letter: "M",
    message: "Il a été racheté par la Ville de Rennes. Après avoir servi d'HLM durant quelques années, il a été rasé pour construire le lycée actuel."
  },

  {
    id: 12,
    question: "Combien de couvents comptait Rennes à la Révolution ?",
    answers: ["24"],
    stops: ["Fréville - a", "République - a", "Robidou - 67", "Jacques Cartier - a", "Triangle - a"],
    letter: "R",
    message: "Il en retse bien peu de communautés... Mais bon nombre de bâtiments sont toujours présents."
  },

  {
    id: 13,
    question: "QUESTION 13",
    answers: ["reponse 13"],
    stops: ["ARRET K1", "ARRET L1", "ARRET M1"],
    letter: "M",
    message: "Eh bien, ça en fait des colonnes !"
  },

  {
    id: 14,
    question: "QUESTION 14",
    answers: ["reponse 14"],
    stops: ["ARRET N1", "ARRET O1", "ARRET P1"],
    letter: "O",
    message: "Eh bien, ça en fait des colonnes !"
  },

  {
    id: 15,
    question: "QUESTION 15",
    answers: ["reponse 15"],
    stops: ["ARRET Q1", "ARRET R1", "ARRET S1"],
    letter: "I",
    message: "Eh bien, ça en fait des colonnes !"
  },

  {
    id: 16,
    question: "QUESTION 16",
    answers: ["reponse 16"],
    stops: ["ARRET T1", "ARRET U1", "ARRET V1"],
    letter: "N",
    message: "Eh bien, ça en fait des colonnes !"
  }

];
