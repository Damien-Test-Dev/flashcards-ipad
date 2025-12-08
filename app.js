// app.js
// Sprint :
// - carte de départ "click to start" au chargement
// - 40 cartes avec id card1..card40
// - bouton 🔀 : 40 clics = 40 cartes différentes, puis nouveau cycle
// - compteur Carte XXX / 040 à côté du bouton
// - debug-log caché, affiché via bouton Debug et masqué via bouton Close

// --- Utilitaire debug (affiche les messages dans la zone dédiée + console) ---
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
// cardId = identifiant unique de la carte, indépendant de sa position.
var cards = [];
for (var i = 1; i <= 40; i++) {
  cards.push({
    cardId: "card" + i,
    title: "Carte " + i,
    imageLabel: "IMAGE " + i,
    text: "Contenu de placeholder pour la carte " + i + "."
  });
}

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
  debug("Nouveau mélange généré.");
}

// 3) Rendu d'une carte dans le DOM
function renderCard(card, positionInCycle) {
  var titleEl = document.getElementById("card-title");
  var imageEl = document.getElementById("card-image");
  var textEl = document.getElementById("card-text");
  var cycleEl = document.getElementById("card-cycle");

  if (!titleEl || !imageEl || !textEl || !cycleEl) {
    debug("Erreur: un élément de la carte est introuvable dans le DOM.");
    return;
  }

  titleEl.textContent = card.title;
  imageEl.textContent = card.imageLabel || "IMAGE";
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

  debug(
    "Carte affichée: index=" +
      currentIndex +
      " (cardId=" +
      card.cardId +
      "), position dans le cycle=" +
      currentNumber
  );
}

// 4) Tirer la carte suivante de l'ordre mélangé
function drawNextCardFromShuffle() {
  if (cards.length === 0) {
    debug("Aucune carte dans le deck.");
    return;
  }

  // Si on a consommé toutes les cartes du cycle, on régénère un ordre
  if (shuffledOrder.length === 0 || shufflePosition >= shuffledOrder.length) {
    debug("Fin du cycle, génération d'un nouveau mélange.");
    buildNewShuffleOrder();
  }

  var index = shuffledOrder[shufflePosition];
  currentIndex = index;

  // position dans le cycle = 1..40
  var positionInCycle = shufflePosition + 1;

  shufflePosition++;

  var card = cards[currentIndex];
  renderCard(card, positionInCycle);

  debug(
    "Carte tirée: index=" +
      currentIndex +
      " (cardId=" +
      card.cardId +
      "), position dans le cycle=" +
      positionInCycle
  );
}

// 5) Gestion de l'affichage du panneau debug
function setupDebugPanel() {
  var container = document.getElementById("card-debug-container");
  var btnToggle = document.getElementById("btn-debug-toggle");
  var btnClose = document.getElementById("btn-debug-close");

  if (!container || !btnToggle || !btnClose) {
    debug("Impossible de configurer le panneau debug (élément manquant).");
    return;
  }

  // Caché par défaut
  container.style.display = "none";

  btnToggle.addEventListener("click", function () {
    if (container.style.display === "none") {
      container.style.display = "block";
      debug("Panneau debug: affiché.");
    } else {
      container.style.display = "none";
      debug("Panneau debug: masqué via bouton Debug.");
    }
  });

  btnClose.addEventListener("click", function () {
    container.style.display = "none";
    debug("Panneau debug: masqué via bouton Close.");
  });
}

// 6) Initialisation quand la page est prête
document.addEventListener("DOMContentLoaded", function () {
  debug("DOMContentLoaded déclenché.");

  if (cards.length === 0) {
    debug("Aucune carte définie pour le moment.");
    return;
  }

  // Préparer un premier ordre mélangé, mais ne pas tirer de carte tant que l'utilisateur n'a pas cliqué.
  buildNewShuffleOrder();

  var btnShuffle = document.getElementById("btn-shuffle");
  if (btnShuffle) {
    btnShuffle.addEventListener("click", function () {
      debug("Click sur bouton Mélanger (🔀)");
      drawNextCardFromShuffle();
    });
  } else {
    debug("Bouton btn-shuffle introuvable");
  }

  setupDebugPanel();

  debug("Initialisation terminée. Prêt pour le premier tirage.");
});
