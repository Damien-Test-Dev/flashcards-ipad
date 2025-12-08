// app.js
// Sprint 8 :
// - 40 cartes remplies avec du contenu ISTQB Foundation (FR)
// - 40 clics = 40 cartes différentes, puis nouveau cycle
// - carte de départ statique avant le premier clic

// 1) Deck de 40 cartes ISTQB
// cardId = identifiant unique de la carte, indépendant de sa position.
var cards = [
  {
    cardId: "card1",
    title: "Objectifs du test logiciel",
    imageLabel: "OBJECTIF",
    text: "Les tests servent à mettre en évidence des défauts, fournir de l’information sur la qualité et réduire le risque avant mise en production. Ils aident à prendre des décisions, mais ne prouvent jamais l’absence totale de défauts."
  },
  {
    cardId: "card2",
    title: "Erreur, défaut, échec",
    imageLabel: "DÉFINITIONS",
    text: "Une erreur est une action humaine à l’origine d’un problème. Un défaut est une imperfection dans le code ou les artefacts. Un échec est un comportement du logiciel qui diffère de l’attendu pendant l’exécution."
  },
  {
    cardId: "card3",
    title: "Qualité et test",
    imageLabel: "QUALITÉ",
    text: "Les tests mesurent et rendent visible le niveau de qualité, mais ne créent pas la qualité à eux seuls. La qualité résulte d’exigences claires, d’un développement maîtrisé et de feedback régulier fourni par les tests."
  },
  {
    cardId: "card4",
    title: "Principe 1 – Présence de défauts",
    imageLabel: "PRINCIPE",
    text: "Les tests montrent la présence de défauts, jamais leur absence. Même si aucun défaut n’est trouvé, il reste toujours une part de risque, qu’il faut accepter ou réduire par d’autres activités."
  },
  {
    cardId: "card5",
    title: "Principe 2 – Testing exhaustif impossible",
    imageLabel: "PRINCIPE",
    text: "Tester toutes les combinaisons d’entrées et de chemins d’exécution est irréaliste. Il faut donc sélectionner les tests les plus pertinents en fonction du risque, de la couverture et des priorités projet."
  },
  {
    cardId: "card6",
    title: "Principe 3 – Tester le plus tôt possible",
    imageLabel: "PRINCIPE",
    text: "Plus un défaut est détecté tard, plus il est coûteux à corriger. Introduire des tests et des revues dès les exigences et la conception permet de réduire fortement le coût global de non-qualité."
  },
  {
    cardId: "card7",
    title: "Principe 4 – Regroupement des défauts",
    imageLabel: "PRINCIPE",
    text: "Les défauts ont tendance à se concentrer dans certaines zones du produit, par exemple des modules complexes ou très modifiés. Ces zones méritent une attention de test renforcée et ciblée."
  },
  {
    cardId: "card8",
    title: "Principe 5 – Paradoxe du pesticide",
    imageLabel: "PRINCIPE",
    text: "Répéter toujours les mêmes tests finit par en réduire l’efficacité. Il faut régulièrement analyser, revoir et enrichir le jeu de tests pour détecter de nouveaux types de défauts."
  },
  {
    cardId: "card9",
    title: "Principe 6 – Tests dépendants du contexte",
    imageLabel: "PRINCIPE",
    text: "On ne teste pas une application critique embarquée comme un site vitrine. Le niveau de rigueur, le type de tests et la documentation attendue dépendent du domaine, du risque et des contraintes réglementaires."
  },
  {
    cardId: "card10",
    title: "Principe 7 – Illusion d’absence de défauts",
    imageLabel: "PRINCIPE",
    text: "Un produit sans défauts connus n’est pas forcément utilisable ni conforme aux besoins. L’alignement sur les exigences, l’ergonomie et le contexte métier restent essentiels au-delà des seules anomalies corrigées."
  },
  {
    cardId: "card11",
    title: "Processus de test – Vue d’ensemble",
    imageLabel: "PROCESSUS",
    text: "Le processus de test inclut : planification et contrôle, analyse et conception, implémentation et exécution, évaluation des critères de sortie, et activités de clôture. Ces étapes s’alignent sur le cycle de vie du projet."
  },
  {
    cardId: "card12",
    title: "Planifier et contrôler les tests",
    imageLabel: "PROCESSUS",
    text: "Planifier consiste à définir la portée, l’approche, les ressources et les échéances des tests. Contrôler, c’est suivre l’avancement, comparer au plan initial et ajuster la stratégie et les priorités si nécessaire."
  },
  {
    cardId: "card13",
    title: "Analyser et concevoir les tests",
    imageLabel: "PROCESSUS",
    text: "Analyser les tests signifie dériver les conditions de test à partir des exigences ou spécifications. Concevoir les tests consiste à transformer ces conditions en cas de test concrets avec entrées, résultats attendus et préconditions."
  },
  {
    cardId: "card14",
    title: "Implémenter et exécuter les tests",
    imageLabel: "PROCESSUS",
    text: "Implémenter les tests revient à préparer les scripts, les données et l’environnement. Exécuter les tests, c’est lancer les cas définis, observer les résultats, consigner les incidents et tracer précisément ce qui a été exécuté."
  },
  {
    cardId: "card15",
    title: "Clôture des tests",
    imageLabel: "PROCESSUS",
    text: "La clôture des tests comprend le bilan, la consolidation des métriques, l’archivage des artefacts et le retour d’expérience. Cette étape permet de capitaliser pour les projets suivants et d’améliorer la stratégie de test."
  },
  {
    cardId: "card16",
    title: "Niveaux de test",
    imageLabel: "NIVEAUX",
    text: "Les niveaux de test classiques sont : test de composant, test d’intégration, test système et test d’acceptation. Chaque niveau a ses objectifs, son périmètre et ses responsabilités spécifiques."
  },
  {
    cardId: "card17",
    title: "Tests fonctionnels",
    imageLabel: "TYPE",
    text: "Les tests fonctionnels vérifient ce que le système fait, en comparant le comportement observé aux exigences ou cas d’utilisation. Ils se concentrent sur les fonctions, règles métier et flux d’utilisation."
  },
  {
    cardId: "card18",
    title: "Tests non fonctionnels",
    imageLabel: "TYPE",
    text: "Les tests non fonctionnels évaluent comment le système se comporte : performance, sécurité, ergonomie, fiabilité, compatibilité, etc. Ils sont essentiels pour la qualité perçue par l’utilisateur final."
  },
  {
    cardId: "card19",
    title: "Tests de régression et de confirmation",
    imageLabel: "RÉGRESSION",
    text: "Le test de confirmation vérifie qu’un défaut corrigé ne se reproduit plus. Le test de régression vérifie que les corrections et évolutions n’ont pas introduit de nouveaux défauts dans des fonctionnalités déjà testées."
  },
  {
    cardId: "card20",
    title: "Tests statiques vs dynamiques",
    imageLabel: "STATIQUE",
    text: "Les tests statiques examinent les artefacts (code, spécifications) sans exécuter le logiciel, par exemple au moyen de revues. Les tests dynamiques impliquent l’exécution du logiciel et l’observation du comportement réel."
  },
  {
    cardId: "card21",
    title: "Revues et inspections",
    imageLabel: "REVUE",
    text: "Les revues structurées (walkthrough, revue technique, inspection) permettent de détecter très tôt des défauts dans les exigences, la conception ou le code. Elles complètent efficacement les tests dynamiques."
  },
  {
    cardId: "card22",
    title: "Partition d’équivalence",
    imageLabel: "BOÎTE NOIRE",
    text: "La partition d’équivalence consiste à regrouper des valeurs d’entrée en classes supposées se comporter de la même manière. On choisit un ou quelques représentants par classe pour réduire le nombre de cas de test."
  },
  {
    cardId: "card23",
    title: "Analyse des valeurs limites",
    imageLabel: "BOÎTE NOIRE",
    text: "L’analyse des valeurs limites cible les frontières entre classes de valeur. On teste les valeurs juste en dessous, à la limite et juste au-dessus, car les défauts se situent fréquemment sur ces frontières."
  },
  {
    cardId: "card24",
    title: "Tables de décision",
    imageLabel: "BOÎTE NOIRE",
    text: "Les tables de décision représentent les combinaisons de conditions et leurs actions associées. Elles sont utiles pour tester des règles métier complexes avec plusieurs conditions logiques combinées."
  },
  {
    cardId: "card25",
    title: "Tests de transition d’état",
    imageLabel: "BOÎTE NOIRE",
    text: "Les tests de transition d’état modélisent le comportement du système sous forme d’états et de transitions. On vérifie que les changements d’état autorisés ou interdits sont correctement gérés selon les événements."
  },
  {
    cardId: "card26",
    title: "Couverture des instructions",
    imageLabel: "BOÎTE BLANCHE",
    text: "La couverture des instructions mesure la proportion d’instructions exécutées par les tests. L’objectif est de s’assurer qu’aucune partie du code n’est totalement ignorée, au moins pour les zones critiques."
  },
  {
    cardId: "card27",
    title: "Couverture des décisions",
    imageLabel: "BOÎTE BLANCHE",
    text: "La couverture des décisions exige que chaque branche vraie et fausse d’une condition soit exécutée au moins une fois. Elle donne une vision plus fine que la simple couverture des instructions."
  },
  {
    cardId: "card28",
    title: "Test exploratoire",
    imageLabel: "EXPÉRIENCE",
    text: "Le test exploratoire combine apprentissage, conception et exécution des tests en parallèle. Le testeur s’appuie sur son expérience et sur le comportement observé pour adapter dynamiquement les scénarios."
  },
  {
    cardId: "card29",
    title: "Tests basés sur les défauts connus",
    imageLabel: "EXPÉRIENCE",
    text: "Les tests basés sur les défauts connus utilisent l’historique des anomalies, des échecs passés et des pièges classiques pour concevoir des cas de test ciblés. Ils capitalisent sur l’expérience projet et métier."
  },
  {
    cardId: "card30",
    title: "Plan de test",
    imageLabel: "GESTION",
    text: "Le plan de test décrit la stratégie, le périmètre, les ressources, l’organisation, les risques et le calendrier des activités de test. C’est la référence de pilotage pour l’équipe de test et les parties prenantes."
  },
  {
    cardId: "card31",
    title: "Risque et priorisation des tests",
    imageLabel: "GESTION",
    text: "La priorisation par le risque consiste à concentrer les efforts de test sur les fonctionnalités les plus critiques, les plus complexes ou les plus exposées à l’utilisateur. Elle permet d’optimiser la couverture avec des moyens limités."
  },
  {
    cardId: "card32",
    title: "Environnement et données de test",
    imageLabel: "GESTION",
    text: "Un environnement de test réaliste et des données de test représentatives sont essentiels pour obtenir des résultats fiables. Il faut gérer aussi la confidentialité et l’anonymisation des données sensibles."
  },
  {
    cardId: "card33",
    title: "Mesures et rapports de test",
    imageLabel: "GESTION",
    text: "Les métriques de test peuvent inclure le nombre de cas exécutés, le taux de réussite, les défauts par priorité, la couverture ou l’avancement par exigence. Les rapports de test synthétisent ces informations pour la décision."
  },
  {
    cardId: "card34",
    title: "Outils de gestion de tests",
    imageLabel: "OUTIL",
    text: "Les outils de gestion de tests aident à gérer les exigences, les cas de test, les campagnes et les résultats. Ils facilitent la traçabilité, le suivi de la couverture et la collaboration entre testeurs et autres rôles."
  },
  {
    cardId: "card35",
    title: "Outils de gestion des défauts",
    imageLabel: "OUTIL",
    text: "Les outils de gestion des défauts centralisent la création, le suivi et la résolution des anomalies. Ils permettent de suivre l’état, la priorité, l’historique de chaque défaut et d’alimenter le retour d’expérience."
  },
  {
    cardId: "card36",
    title: "Outils d’automatisation",
    imageLabel: "OUTIL",
    text: "Les outils d’automatisation exécutent des suites de tests répétitives ou longues, par exemple des tests de régression. L’investissement doit être justifié par la durée de vie du produit, la fréquence des exécutions et le gain attendu."
  },
  {
    cardId: "card37",
    title: "Indépendance des tests",
    imageLabel: "ORGANISATION",
    text: "L’indépendance des tests signifie que la personne qui teste n’est pas la seule responsable du développement de ce qu’elle teste. Cela réduit le biais et favorise une vision plus critique et objective du produit."
  },
  {
    cardId: "card38",
    title: "Compétences du testeur",
    imageLabel: "COMPÉTENCES",
    text: "Un testeur efficace combine compréhension métier, connaissances techniques, esprit critique et communication claire. La curiosité, la rigueur et la capacité à remettre en cause les évidences sont des atouts clés."
  },
  {
    cardId: "card39",
    title: "ISTQB Foundation – Examen",
    imageLabel: "EXAMEN",
    text: "L’examen ISTQB Foundation se présente sous forme de 40 questions à choix multiple à réaliser en 60 minutes, avec un score minimal requis pour réussir. L’accent est mis sur la compréhension des concepts de base et de leur application."
  },
  {
    cardId: "card40",
    title: "Stratégie de révision ISTQB",
    imageLabel: "RÉVISION",
    text: "Pour réviser l’ISTQB Foundation, combine syllabus officiel, cartes de révision, questions d’entraînement et relectures courtes mais régulières. L’objectif est de consolider les concepts plutôt que de mémoriser mécaniquement."
  }
];

// Index de la carte actuellement affichée (dans le tableau cards)
var currentIndex = -1;

// Ordre mélangé des indices (0..39)
var shuffledOrder = [];
// Position actuelle dans l'ordre mélangé (0..39)
var shufflePosition = 0;

// 2) Construire un nouvel ordre mélangé (Fisher-Yates)
function buildNewShuffleOrder() {
  shuffledOrder = [];
  for (var i = 0; i < cards.length; i++) {
    shuffledOrder.push(i);
  }

  // Fisher-Yates
  for (var j = shuffledOrder.length - 1; j > 0; j--) {
    var k = Math.floor(Math.random() * (j + 1));
    var tmp = shuffledOrder[j];
    shuffledOrder[j] = shuffledOrder[k];
    shuffledOrder[k] = tmp;
  }

  shufflePosition = 0;
}

// 3) Rendu d'une carte dans le DOM
function renderCard(card, positionInCycle) {
  var titleEl = document.getElementById("card-title");
  var imageEl = document.getElementById("card-image");
  var textEl = document.getElementById("card-text");
  var cycleEl = document.getElementById("card-cycle");

  if (!titleEl || !imageEl || !textEl || !cycleEl) {
    return;
  }

  titleEl.textContent = card.title;
  imageEl.textContent = card.imageLabel || "ISTQB";
  textEl.textContent = card.text;

  var total = cards.length;
  var currentNumber = typeof positionInCycle === "number" ? positionInCycle : 0;

  var formatted = ("000" + currentNumber).slice(-3);
  var formattedTotal = ("000" + total).slice(-3);

  if (currentNumber === 0) {
    cycleEl.textContent = "Carte 000 / " + formattedTotal;
  } else {
    cycleEl.textContent = "Carte " + formatted + " / " + formattedTotal;
  }
}

// 4) Tirer la carte suivante de l'ordre mélangé
function drawNextCardFromShuffle() {
  if (cards.length === 0) {
    return;
  }

  // Si on a consommé toutes les cartes du cycle, on régénère un ordre
  if (shuffledOrder.length === 0 || shufflePosition >= shuffledOrder.length) {
    buildNewShuffleOrder();
  }

  var index = shuffledOrder[shufflePosition];
  currentIndex = index;

  // position dans le cycle = 1..40
  var positionInCycle = shufflePosition + 1;

  shufflePosition++;

  var card = cards[currentIndex];
  renderCard(card, positionInCycle);
}

// 5) Initialisation quand la page est prête
document.addEventListener("DOMContentLoaded", function () {
  if (cards.length === 0) {
    return;
  }

  // Préparer un premier ordre mélangé, mais ne pas tirer de carte tant que l'utilisateur n'a pas cliqué.
  buildNewShuffleOrder();

  var btnShuffle = document.getElementById("btn-shuffle");
  if (btnShuffle) {
    btnShuffle.addEventListener("click", function () {
      drawNextCardFromShuffle();
    });
  }
});
