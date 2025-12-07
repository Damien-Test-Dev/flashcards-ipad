// app.js
// Sprint 1 : rien de fonctionnel, juste un point d'entrée propre.
// On utilisera ce fichier au Sprint 2 pour afficher plusieurs cartes,
// gérer la navigation, et plus tard le stockage local.

console.log("Flashcards iPad - app.js chargé");

// app.js
// Sprint 2 : plusieurs cartes + navigation gauche/droite.
// Navigation entre cartes en touchant à gauche / à droite de la carte.

// 1) Deck de cartes (exemples de démonstration)
var cards = [
  {
    id: 1,
    theme: "FOCUS",
    title: "Force Mentale",
    icon: "★",
    imageLabel: "CONCENTRATION",
    text: "Chaque session de révision où tu restes concentré jusqu'au bout renforce ta force mentale. Objectif : avancer sans regarder ton téléphone.",
    atk: 1800,
    def: 1200
  },
  {
    id: 2,
    theme: "HABITUDE",
    title: "Répétition",
    icon: "◎",
    imageLabel: "RITUEL",
    text: "Les flashcards deviennent puissantes quand tu les utilises tous les jours. Même 10 minutes par jour créent un effet cumulatif énorme.",
    atk: 1500,
    def: 2000
  },
  {
    id: 3,
    theme: "APPRENTISSAGE",
    title: "Erreur Utile",
    icon: "✧",
    imageLabel: "FEEDBACK",
    text: "Chaque erreur est un signal de ce que tu dois revoir. Une erreur notée et corrigée vaut plus que dix réponses au hasard.",
    atk: 2100,
    def: 800
  }
];

// Index de la carte actuellement affichée
var currentIndex = 0;

// 2) Rendu d'une carte dans le DOM
function renderCard(card) {
  var themeEl = document.getElementById("card-theme");
  var titleEl = document.getElementById("card-title");
  var iconEl = document.getElementById("card-icon");
  var imageEl = document.getElementById("card-image");
  var textEl = document.getElementById("card-text");
  var statsEl = document.getElementById("card-stats");
  var numberEl = document.getElementById("card-number");

  if (!themeEl || !titleEl || !iconEl || !imageEl || !textEl || !statsEl || !numberEl) {
    console.error("Un des éléments de la carte est introuvable dans le DOM.");
    return;
  }

  themeEl.textContent = card.theme;
  titleEl.textContent = card.title;
  iconEl.textContent = card.icon || "★";
  imageEl.textContent = card.imageLabel || "IMAGE";
  textEl.textContent = card.text;

  statsEl.textContent = "ATK " + card.atk + " / DEF " + card.def;

  var total = cards.length;
  var currentNumber = card.id != null ? card.id : (currentIndex + 1);
  var formatted = ("000" + currentNumber).slice(-3);
  var formattedTotal = ("000" + total).slice(-3);

  numberEl.textContent = "N° " + formatted + " / " + formattedTotal;
}

// 3) Fonctions de navigation
function showNextCard() {
  if (cards.length === 0) {
    return;
  }
  currentIndex = (currentIndex + 1) % cards.length;
  renderCard(cards[currentIndex]);
}

function showPrevCard() {
  if (cards.length === 0) {
    return;
  }
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  renderCard(cards[currentIndex]);
}

// 4) Gestion du tap sur la carte (gauche/droite)
function setupCardNavigation() {
  var cardEl = document.getElementById("card");
  if (!cardEl) {
    console.error("Élément .card introuvable");
    return;
  }

  function handleTap(clientX) {
    var rect = cardEl.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;

    if (clientX < centerX) {
      showPrevCard();
    } else {
      showNextCard();
    }
  }

  // Click (desktop ou iPad quand il génère un click)
  cardEl.addEventListener("click", function (event) {
    handleTap(event.clientX);
  });

  // Touch (iPad)
  cardEl.addEventListener("touchstart", function (event) {
    if (event.touches && event.touches.length > 0) {
      var touch = event.touches[0];
      handleTap(touch.clientX);
      event.preventDefault(); // évite certains comportements par défaut
    }
  });
}

// 5) Initialisation
document.addEventListener("DOMContentLoaded", function () {
  if (cards.length === 0) {
    console.warn("Aucune carte définie pour le moment.");
    return;
  }

  currentIndex = 0;
  renderCard(cards[currentIndex]);
  setupCardNavigation();

  console.log("Flashcards iPad - navigation via tap gauche/droite initialisée.");
});

