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
