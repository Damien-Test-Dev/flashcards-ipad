// app.js
// Sprint 4 :
// - deck de 40 cartes avec id type "card1"... "card40"
// - navigation via boutons Précédente / Suivante
// - bouton Mélanger (🔀) qui shuffle le deck
// - numérotation en bas = position dans le deck (1/40, 2/40, ...)

// --- Utilitaire debug (affiche les messages dans la page + console) ---
function debug(message) {
  var debugEl = document.getElementById("debug-log");
  if (debugEl) {
    var line = document.createElement("div");
    line.textContent = message;
    debugEl.appendChild(line);
    debugEl.scrollTop = debugEl.scrollHeight;
  }

  if (window.console && console.log) {
    console.log(message);
  }
}

// 1) Deck de 40 cartes (générées en JS)
// cardId = identifiant unique de collection (card1, card2, ...),
// la position d'affichage dépend de l'ordre dans le tableau "cards".
var cards = [];
for (var i = 1; i <= 40; i++) {
  cards.push({
    cardId: "card" + i,
    theme: "MODÈLE",
    title: "Carte " + i,
    icon: "★",
    imageLabel: "IMAGE " + i,
    text: "Contenu de placeholder pour la carte " + i + "."
  });
}

// Index de la carte actuellement affichée (0 = première carte du deck)
var currentIndex = 0;

// 2) Rendu d'une carte dans le DOM
function renderCard(card) {
  var themeEl = document.getElementById("card-theme");
  var titleEl = document.getElementById("card-title");
  var iconEl = document.getElementById("card-icon");
  var imageEl = document.getElementById("card-image");
  var textEl = document.getElementById("card-text");
  var numberEl = document.getElementById("card-number");

  if (!themeEl || !titleEl || !iconEl || !imageEl || !textEl || !numberEl) {
    debug("Erreur: un élément de la carte est introuvable dans le DOM.");
    return;
  }

  themeEl.textContent = card.theme;
  titleEl.textContent = card.title;
  iconEl.textContent = card.icon || "★";
  imageEl.textContent = card.imageLabel || "IMAGE";
  textEl.textContent = card.text;

  var total = cards.length;
  var currentNumber = currentIndex + 1; // position dans le deck
  var formatted = ("000" + currentNumber).slice(-3);
  var formattedTotal = ("000" + total).slice(-3);

  numberEl.textContent = "Carte " + formatted + " / " + formattedTotal;

  debug("Carte affichée: index=" + currentIndex + " (cardId=" + card.cardId + ")");
}

// 3) Fonctions de navigation
function showNextCard() {
  if (cards.length === 0) {
    debug("Aucune carte dans le deck.");
    return;
  }
  currentIndex = (currentIndex + 1) % cards.length;
  debug("showNextCard -> nouvel index = " + currentIndex);
  renderCard(cards[currentIndex]);
}

function showPrevCard() {
  if (cards.length === 0) {
    debug("Aucune carte dans le deck.");
    return;
  }
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  debug("showPrevCard -> nouvel index = " + currentIndex);
  renderCard(cards[currentIndex]);
}

// 4) Mélange du deck (Fisher-Yates shuffle)
function shuffleDeck() {
  if (cards.length <= 1) {
    debug("Pas assez de cartes pour mélanger.");
    return;
  }

  debug("Mélange du deck...");

  // Algorithme de Fisher-Yates
  for (var i = cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }

  // Après mélange, on revient à la première position du deck
  currentIndex = 0;
  renderCard(cards[currentIndex]);
  debug("Deck mélangé. Nouvelle première carte: cardId=" + cards[0].cardId);
}

// 5) Initialisation quand la page est prête
document.addEventListener("DOMContentLoaded", function () {
  debug("DOMContentLoaded déclenché.");

  if (cards.length === 0) {
    debug("Aucune carte définie pour le moment.");
    return;
  }

  currentIndex = 0;
  renderCard(cards[currentIndex]);

  // Boutons navigation
  var btnPrev = document.getElementById("btn-prev");
  var btnNext = document.getElementById("btn-next");
  var btnShuffle = document.getElementById("btn-shuffle");

  if (btnPrev) {
    btnPrev.addEventListener("click", function () {
      debug("Click sur bouton Précédente");
      showPrevCard();
    });
  } else {
    debug("Bouton btn-prev introuvable");
  }

  if (btnNext) {
    btnNext.addEventListener("click", function () {
      debug("Click sur bouton Suivante");
      showNextCard();
    });
  } else {
    debug("Bouton btn-next introuvable");
  }

  if (btnShuffle) {
    btnShuffle.addEventListener("click", function () {
      debug("Click sur bouton Mélanger (🔀)");
      shuffleDeck();
    });
  } else {
    debug("Bouton btn-shuffle introuvable");
  }

  debug("Initialisation terminée.");
});
