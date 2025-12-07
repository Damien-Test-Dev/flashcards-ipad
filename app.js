// app.js
// Sprint 1 : rien de fonctionnel, juste un point d'entrée propre.
// On utilisera ce fichier au Sprint 2 pour afficher plusieurs cartes,
// gérer la navigation, et plus tard le stockage local.

console.log("Flashcards iPad - app.js chargé");

// app.js
// Sprint 2 : une carte pilotée par des données JS.

// 1) Définition d'une flashcard (modèle)
const cards = [
  {
    id: 1,
    theme: "MAGIE",
    title: "Force Mentale",
    icon: "★",
    imageLabel: "FOCUS",
    text: "Cette carte représente ta capacité à te concentrer sur l'essentiel. Chaque session de révision te donne +1 en force mentale.",
    atk: 1800,
    def: 1200
  }
];

// 2) Fonction qui injecte les données de la carte dans le HTML
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

  statsEl.textContent = `ATK ${card.atk} / DEF ${card.def}`;
  numberEl.textContent = `N° ${String(card.id).padStart(3, "0")}`;
}

// 3) Quand la page est prête, on affiche la première carte
document.addEventListener("DOMContentLoaded", function () {
  if (cards.length === 0) {
    console.warn("Aucune carte définie pour le moment.");
    return;
  }

  const firstCard = cards[0];
  renderCard(firstCard);
  console.log("Flashcards iPad - Première carte affichée.");
});
