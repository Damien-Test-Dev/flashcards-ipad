# flashcards-ipad
Flashcards iPad Project 



## Historique des sprints

### Sprint 1 – Initialisation & mise en ligne

**Objectif :** Avoir une première app web fonctionnelle sur iPad, servie via GitHub Pages.

**Travaux réalisés :**
- Création de la structure minimale du projet :
  - `index.html` avec une première carte statique (maquette type carte de jeu).
  - `style.css` pour le layout (carte centrée, fond, ombre, bordure, etc.).
  - `app.js` initialisé comme point d’entrée JS.
- Activation de **GitHub Pages** sur le dépôt `flashcards-ipad`.
- Vérification de l’affichage sur l’iPad et possibilité d’ajouter l’app à l’écran d’accueil.

---

### Sprint 2 – Cartes pilotées par les données + navigation

**Objectif :** Sortir du HTML “en dur” et rendre la carte dynamique via des données JS, avec début de navigation entre plusieurs cartes.

**Travaux réalisés :**
- Ajout d’identifiants (`id`) sur les éléments HTML (titre, texte, image, footer) pour permettre la mise à jour par JavaScript.
- Création d’un tableau `cards` dans `app.js` contenant plusieurs cartes (objets JS).
- Mise en place de la fonction `renderCard(card)` pour injecter les données d’une carte dans le DOM.
- Introduction d’une logique de navigation entre cartes :
  - d’abord avec des zones tactiles (gauche/droite),
  - stabilisation ensuite avec deux boutons : **“Précédente”** et **“Suivante”**.
- Ajustements UI :
  - réduction de la taille de l’image,
  - plus d’espace pour le texte,
  - meilleure lisibilité globale sur l’écran de l’iPad.

---

### Sprint 3 – Passage à 40 cartes & simplification visuelle

**Objectif :** Passer d’un petit set de cartes à un **deck de 40 cartes** et épurer les éléments purement “jeu vidéo”.

**Travaux réalisés :**
- Suppression des champs visuels type **ATK / DEF** et autres stats de jeu.
- Simplification du bas de la carte : affichage d’un simple compteur de type  
  `Carte XXX / 040`.
- Extension du deck à **40 cartes** :
  - génération programmatique via une boucle JS pour éviter la duplication manuelle.
- Correction de bugs de navigation :
  - gestion propre de l’index courant,
  - pas de blocage sur la carte 1,
  - cohérence du compteur d’affichage.

---

### Sprint 4 – Identité des cartes & bouton “Mélanger”

**Objectif :** Donner une vraie identité aux cartes (comme une collection) et introduire un bouton pour mélanger le deck.

**Travaux réalisés :**
- Ajout d’un identifiant unique par carte :  
  `cardId: "card1", "card2", ..., "card40"`.
- Distinction claire entre :
  - **l’ID de carte** (`cardId`) = identité permanente de la carte,
  - **la position dans le deck** = ordre courant d’affichage.
- Ajout d’un bouton **🔀 Mélanger** dans le header.
- Implémentation d’un **shuffle** du deck (algorithme de Fisher-Yates) pour randomiser l’ordre des cartes.
- Conservation de la navigation précédente/suivante à ce stade (boutons actifs en parallèle du mélange).

---

### Sprint 5 – Navigation “Shuffle only” & cycle sans répétition

**Objectif :** Simplifier l’expérience utilisateur : un seul bouton pour avancer, avec la garantie de ne pas voir deux fois la même carte dans un cycle.

**Travaux réalisés :**
- Suppression des boutons **“Précédente”** et **“Suivante”** de l’UI et du JS.
- Mise en place d’un mécanisme de tirage basé sur :
  - un tableau `shuffledOrder` contenant une permutation des indices 0..39,
  - un pointeur `shufflePosition` qui avance à chaque clic.
- Logique de tirage :
  - **1 clic = carte suivante dans l’ordre mélangé**,
  - **40 clics = 40 cartes distinctes** (pas de répétition sur un cycle),
  - au 41ᵉ clic : génération d’un **nouveau mélange** et démarrage d’un nouveau cycle.
- Mise à jour du compteur pour afficher la position dans le cycle :  
  `Carte 001 / 040`, `Carte 002 / 040`, …, `Carte 040 / 040`.

---

### Sprint 6 – Refactor UI : carte de départ & layout épuré

**Objectif :** Aligner l’interface avec un usage “flashcards de révision” propre, sans bruit visuel.

**Travaux réalisés :**
- Suppression définitive :
  - des notions de “thème”,
  - de l’icône décorative type étoile,
  - des indicateurs visuels en bas de carte.
- Refonte du layout :
  - compteur `Carte XXX / 040` positionné à
 
### Sprint 7 – Nettoyage du debug et stabilisation de la version “clean”

**Objectif :** Obtenir une version stable, simple et utilisable au quotidien, sans aucun élément technique (debug) visible dans l’interface.

**Travaux réalisés :**
- Suppression complète de toute la couche de debug côté UI :
  - retrait de la zone `debug-log` du HTML,
  - suppression des boutons **Debug** et **Close**,
  - suppression du conteneur visuel de debug et de son style CSS associé.
- Simplification du JavaScript :
  - suppression de la fonction de log visuel et de toute la logique liée à l’affichage/masquage du panneau debug,
  - conservation exclusive de la logique métier de l’application : deck, mélange, tirage et mise à jour de la carte.
- Consolidation du moteur de tirage :
  - génération d’un ordre mélangé via `shuffledOrder`,
  - **40 clics successifs sur le bouton 🔀 = 40 cartes différentes**, puis régénération d’un nouvel ordre pour un nouveau cycle,
  - mise à jour du compteur `Carte XXX / 040` en cohérence avec la position dans le cycle.
- UX finale avant contenu ISTQB :
  - au chargement : **carte de départ** (“Carte de départ / CLICK TO START”) affichée statiquement,
  - après clic sur 🔀 : cartes de révision affichées une par une,
  - interface visuellement épurée, sans bruit technique, prête à recevoir du vrai contenu pédagogique.


### Sprint 8 – Remplissage des 40 cartes avec du contenu ISTQB Foundation

**Objectif :** Transformer le deck vide en véritable outil de révision ISTQB Foundation (version française), tout en conservant la mécanique simple de tirage aléatoire.

**Travaux réalisés :**
- Remplacement du deck généré automatiquement par **40 cartes réelles** couvrant les principaux concepts ISTQB Foundation :
  - objectifs du test logiciel, notions d’erreur/défaut/échec, lien avec la qualité,
  - les 7 principes du test,
  - processus de test et principales activités,
  - niveaux et types de test (fonctionnels, non fonctionnels, régression, confirmation),
  - tests statiques, dynamiques et revues,
  - techniques de conception de tests (boîte noire, boîte blanche, tests basés sur l’expérience),
  - gestion des tests (plan, risque, environnement, données, métriques),
  - outils de test (gestion de tests, gestion des défauts, automatisation),
  - indépendance des tests, compétences du testeur,
  - rappel de la structure de l’examen ISTQB Foundation et conseils de révision.
- Maintien de la mécanique de navigation :
  - un seul bouton 🔀,
  - **40 clics successifs = 40 cartes différentes**, puis nouveau mélange du deck pour un nouveau cycle.
- Ajustement de la carte de départ pour refléter le contexte :
  - Titre : `ISTQB – Carte de départ`,
  - Message d’introduction orienté révision ISTQB Foundation,
  - zone “image” utilisée comme étiquette de catégorie (CONCEPT, PRINCIPE, TECHNIQUE, etc.).



### Sprint 9 – Icônes visuelles pour les cartes ISTQB

**Objectif :** Enrichir visuellement le deck ISTQB en utilisant la zone “image” comme support d’icônes (émojis), pour coder le sens de chaque carte et favoriser la mémorisation.

**Travaux réalisés :**
- Ajout d’une **combinaison d’émojis** pour chacune des 40 cartes ISTQB, par exemple :
  - concepts et objectifs : `🎯📘`, `💡🚨`, `💡⏱️`…
  - processus et organisation : `⚙️🧭`, `🗂️📊`, `🧾🧭`…
  - techniques de test (boîte noire / boîte blanche / expérience) : `📊🧮`, `📏🚧`, `🧭🧪`…
  - risques, couverture, régression : `⚠️🎯`, `🔁🧪`, `📏📄`…
  - outils et automatisation : `💻🗂️`, `💻🧯`, `🤖▶️`…
  - examen et révision : `📝⏱️`, `🔁📚`, etc.
- Chaque carte dispose désormais d’une **zone “image” expressive** :
  - au moins deux émojis par carte,
  - combinaisons choisies en fonction du contenu (principe, technique, outil, risque…),
  - cohérence visuelle avec le titre et le texte de la carte.
- Maintien de la mécanique de navigation :
  - un seul bouton 🔀,
  - **40 clics successifs = 40 cartes différentes**, puis régénération d’un nouvel ordre pour un nouveau cycle.
- Adaptation de la carte de départ :
  - zone “image” initiale affichant `💡📘 CLICK TO START` pour marquer le contexte de révision ISTQB.



