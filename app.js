// app.js
// Sprint 3 : deck de 40 cartes + navigation via boutons, sans ATK/DEF.

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

// 1) Deck de 40 cartes (modèles)
// Tu pourras modifier theme / title / imageLabel / text pour tes vrais contenus.
var cards = [
  {
    id: 1,
    theme: "MODÈLE",
    title: "Carte 1",
    icon: "★",
    imageLabel: "IMAGE 1",
    text: "Contenu de placeholder pour la carte 1."
  },
  {
    id: 2,
    theme: "MODÈLE",
    title: "Carte 2",
    icon: "★",
    imageLabel: "IMAGE 2",
    text: "Contenu de placeholder pour la carte 2."
  },
  {
    id: 3,
    theme: "MODÈLE",
    title: "Carte 3",
    icon: "★",
    imageLabel: "IMAGE 3",
    text: "Contenu de placeholder pour la carte 3."
  },
  {
    id: 4,
    theme: "MODÈLE",
    title: "Carte 4",
    icon: "★",
    imageLabel: "IMAGE 4",
    text: "Contenu de placeholder pour la carte 4."
  },
  {
    id: 5,
    theme: "MODÈLE",
    title: "Carte 5",
    icon: "★",
    imageLabel: "IMAGE 5",
    text: "Contenu de placeholder pour la carte 5."
  },
  {
    id: 6,
    theme: "MODÈLE",
    title: "Carte 6",
    icon: "★",
    imageLabel: "IMAGE 6",
    text: "Contenu de placeholder pour la carte 6."
  },
  {
    id: 7,
    theme: "MODÈLE",
    title: "Carte 7",
    icon: "★",
    imageLabel: "IMAGE 7",
    text: "Contenu de placeholder pour la carte 7."
  },
  {
    id: 8,
    theme: "MODÈLE",
    title: "Carte 8",
    icon: "★",
    imageLabel: "IMAGE 8",
    text: "Contenu de placeholder pour la carte 8."
  },
  {
    id: 9,
    theme: "MODÈLE",
    title: "Carte 9",
    icon: "★",
    imageLabel: "IMAGE 9",
    text: "Contenu de placeholder pour la carte 9."
  },
  {
    id: 10,
    theme: "MODÈLE",
    title: "Carte 10",
    icon: "★",
    imageLabel: "IMAGE 10",
    text: "Contenu de placeholder pour la carte 10."
  },
  {
    id: 11,
    theme: "MODÈLE",
    title: "Carte 11",
    icon: "★",
    imageLabel: "IMAGE 11",
    text: "Contenu de placeholder pour la carte 11."
  },
  {
    id: 12,
    theme: "MODÈLE",
    title: "Carte 12",
    icon: "★",
    imageLabel: "IMAGE 12",
    text: "Contenu de placeholder pour la carte 12."
  },
  {
    id: 13,
    theme: "MODÈLE",
    title: "Carte 13",
    icon: "★",
    imageLabel: "IMAGE 13",
    text: "Contenu de placeholder pour la carte 13."
  },
  {
    id: 14,
    theme: "MODÈLE",
    title: "Carte 14",
    icon: "★",
    imageLabel: "IMAGE 14",
    text: "Contenu de placeholder pour la carte 14."
  },
  {
    id: 15,
    theme: "MODÈLE",
    title: "Carte 15",
    icon: "★",
    imageLabel: "IMAGE 15",
    text: "Contenu de placeholder pour la carte 15."
  },
  {
    id: 16,
    theme: "MODÈLE",
    title: "Carte 16",
    icon: "★",
    imageLabel: "IMAGE 16",
    text: "Contenu de placeholder pour la carte 16."
  },
  {
    id: 17,
    theme: "MODÈLE",
    title: "Carte 17",
    icon: "★",
    imageLabel: "IMAGE 17",
    text: "Contenu de placeholder pour la carte 17."
  },
  {
    id: 18,
    theme: "MODÈLE",
    title: "Carte 18",
    icon: "★",
    imageLabel: "IMAGE 18",
    text: "Contenu de placeholder pour la carte 18."
  },
  {
    id: 19,
    theme: "MODÈLE",
    title: "Carte 19",
    icon: "★",
    imageLabel: "IMAGE 19",
    text: "Contenu de placeholder pour la carte 19."
  },
  {
    id: 20,
    theme: "MODÈLE",
    title: "Carte 20",
    icon: "★",
    imageLabel: "IMAGE 20",
    text: "Contenu de placeholder pour la carte 20."
  },
  {
    id: 21,
    theme: "MODÈLE",
    title: "Carte 21",
    icon: "★",
    imageLabel: "IMAGE 21",
    text: "Contenu de placeholder pour la carte 21."
  },
  {
    id: 22,
    theme: "MODÈLE",
    title: "Carte 22",
    icon: "★",
    imageLabel: "IMAGE 22",
    text: "Contenu de placeholder pour la carte 22."
  },
  {
    id: 23,
    theme: "MODÈLE",
    title: "Carte 23",
    icon: "★",
    imageLabel: "IMAGE 23",
    text: "Contenu de placeholder pour la carte 23."
  },
  {
    id: 24,
    theme: "MODÈLE",
    title: "Carte 24",
    icon: "★",
    imageLabel: "IMAGE 24",
    text: "Contenu de placeholder pour la carte 24."
  },
  {
    id: 25,
    theme: "MODÈLE",
    title: "Carte 25",
    icon: "★",
    imageLabel: "IMAGE 25",
    text: "Contenu de placeholder pour la carte 25."
  },
  {
    id: 26,
    theme: "MODÈLE",
    title: "Carte 26",
    icon: "★",
    imageLabel: "IMAGE 26",
    text: "Contenu de placeholder pour la carte 26."
  },
  {
    id: 27,
    theme: "MODÈLE",
    title: "Carte 27",
    icon: "★",
    imageLabel: "IMAGE 27",
    text: "Contenu de placeholder pour la carte 27."
  },
  {
    id: 28,
    theme: "MODÈLE",
    title: "Carte 28",
    icon: "★",
    imageLabel: "IMAGE 28",
    text: "Contenu de placeholder pour la carte 28."
  },
  {
    id: 29,
    theme: "MODÈLE",
    title: "Carte 29",
    icon: "★",
    imageLabel: "IMAGE 29",
    text: "Contenu de placeholder pour la carte 29."
  },
  {
    id: 30,
    theme: "MODÈLE",
    title: "Carte 30",
    icon: "★",
    imageLabel: "IMAGE 30",
    text: "Contenu de placeholder pour la carte 30."
  },
  {
    id: 31,
    theme: "MODÈLE",
    title: "Carte 31",
    icon: "★",
    imageLabel: "IMAGE 31",
    text: "Contenu de placeholder pour la carte 31."
  },
  {
    id: 32,
    theme: "MODÈLE",
    title: "Carte 32",
    icon: "★",
    imageLabel: "IMAGE 32",
    text: "Contenu de placeholder pour la carte 32."
  },
  {
    id: 33,
    theme: "MODÈLE",
    title: "Carte 33",
    icon: "★",
    imageLabel: "IMAGE 33",
    text: "Contenu de placeholder pour la carte 33."
  },
  {
    id: 34,
    theme: "MODÈLE",
    title: "Carte 34",
    icon: "★",
    imageLabel: "IMAGE 34",
    text: "Contenu de placeholder pour la carte 34."
  },
  {
    id: 35,
    theme: "MODÈLE",
    title: "Carte 35",
    icon: "★",
    imageLabel: "IMAGE 35",
    text: "Contenu de placeholder pour la carte 35."
  },
  {
    id: 36,
    theme: "MODÈLE",
    title: "Carte 36",
    icon: "★",
    imageLabel: "IMAGE 36",
    text: "Contenu de placeholder pour la carte 36."
  },
  {
    id: 37,
    theme: "MODÈLE",
    title: "Carte 37",
    icon: "★",
    imageLabel: "IMAGE 37",
    text: "Contenu de placeholder pour la carte 37."
  },
  {
    id: 38,
    theme: "MODÈLE",
    title: "Carte 38",
    icon: "★",
    imageLabel: "IMAGE 38",
    text: "Contenu de placeholder pour la carte 38."
  },
  {
    id: 39,
    theme: "MODÈLE",
    title: "Carte 39",
    icon: "★",
    imageLabel: "IMAGE 39",
    text: "Contenu de placeholder pour la carte 39."
  },
  {
    id: 40,
    theme: "MODÈLE",
    title: "Carte 40",
    icon: "★",
    imageLabel: "IMAGE 40",
    text: "Contenu de placeholder pour la carte 40."
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
    btnPrev.addEventListener("touchstart", function (event) {
      event.preventDefault();
      debug("Touch sur bouton Précédente");
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
    btnNext.addEventListener("touchstart", function (event) {
      event.preventDefault();
      debug("Touch sur bouton Suivante");
      showNextCard();
    });
  } else {
    debug("Bouton btn-next introuvable");
  }

  debug("Initialisation terminée.");
});
