// app.js
// Sprint 3 (fix) : 40 cartes générées proprement + navigation via boutons (click uniquement).

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
// Tu pourras ensuite modifier chaque carte comme tu veux.
var cards = [];
for (var i = 1; i <= 40; i++) {
  cards.push({
    id: i,
    theme: "MODÈLE",
    title: "Carte " + i,
    icon: "★",
    imageLabel: "IMAGE " + i,
    text: "Contenu de placeholder pour la carte " + i + "."
  });
}

// Index de la carte actuellement affichée
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
  var currentNumber = currentIndex + 1;
  var formatted = ("000" + currentNumber).slice(-3);
  var formattedTotal = ("000" + total).slice(-3);

  numberEl.textContent = "Carte " + formatted + " / " + formattedTotal;

  debug("Carte affichée: index=" + currentIndex + " (id=" + card.id + ")");
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

// 4) Initialisation quand la page est prête
document.addEventListener("DOMContentLoaded", function () {
  debug("DOMContentLoaded déclenché.");

  if (cards.length === 0) {
    debug("Aucune carte définie pour le moment.");
    return;
  }

  currentIndex = 0;
  renderCard(cards[currentIndex]);

  // Boutons
  var btnPrev = document.getElementById("btn-prev");
  var btnNext = document.getElementById("btn-next");

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

  debug("Initialisation terminée.");
});
