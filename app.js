// app.js
// Sprint 1 : rien de fonctionnel, juste un point d'entrée propre.
// On utilisera ce fichier au Sprint 2 pour afficher plusieurs cartes,
// gérer la navigation, et plus tard le stockage local.

console.log("Flashcards iPad - app.js chargé");

// app.js
// Sprint 2 : plusieurs cartes + navigation gauche/droite.

// 1) Deck de cartes (exemples de démonstration)
const cards = [
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
let currentIndex = 0;

// 2) Rendu d'une carte dans le DOM
function renderCard(card) {
  const themeEl = document.getElementById("card-theme");
  const titleEl = document.getElementById("card-title");
  const iconEl = document.getElementById("card-icon");
  const imageEl = document.getElementById("card-image");
  const textEl = document.getElementById("card-text");
  const statsEl = document.getElementById("card-stats");
  const numberEl = document.getElementById("card-number");

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
  var formatted = String(currentNumber).padStart(3, "0");
  var formattedTotal = String(total).padStart(3, "0");

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

// 4) Initialisation quand la page est prête
document.addEventListener("DOMContentLoaded", function () {
  if (cards.length === 0) {
    console.warn("Aucune carte définie pour le moment.");
    return;
  }

  // Afficher la première carte
  currentIndex = 0;
  renderCard(cards[currentIndex]);

  // Récupérer les zones de navigation
  var navLeft = document.getElementById("nav-left");
  var navRight = document.getElementById("nav-right");

  if (navLeft) {
    navLeft.addEventListener("click", function () {
      showPrevCard();
    });
    // Optionnel : touchstart pour iOS
    navLeft.addEventListener("touchstart", function (event) {
      event.preventDefault();
      showPrevCard();
    });
  }

  if (navRight) {
    navRight.addEventListener("click", function () {
      showNextCard();
    });
    // Optionnel : touchstart pour iOS
    navRight.addEventListener("touchstart", function (event) {
      event.preventDefault();
      showNextCard();
    });
  }

  console.log("Flashcards iPad - navigation gauche/droite initialisée.");
});
