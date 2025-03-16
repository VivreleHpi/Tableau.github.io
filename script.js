// Mapping des liens Wikipédia pour chaque élément
const wikiLinks = {
  "Hydrogène": "https://fr.wikipedia.org/wiki/Hydrog%C3%A8ne",
  "Hélium": "https://fr.wikipedia.org/wiki/H%C3%A9lium",
  "Lithium": "https://fr.wikipedia.org/wiki/Lithium",
  "Béryllium": "https://fr.wikipedia.org/wiki/B%C3%A9ryllium",
  "Sodium": "https://fr.wikipedia.org/wiki/Sodium",
  "Magnésium": "https://fr.wikipedia.org/wiki/Magn%C3%A9sium",
  "Aluminium": "https://fr.wikipedia.org/wiki/Aluminium",
  "Potassium": "https://fr.wikipedia.org/wiki/Potassium",
  "Calcium": "https://fr.wikipedia.org/wiki/Calcium",
  "Fer": "https://fr.wikipedia.org/wiki/Fer",
  "Cuivre": "https://fr.wikipedia.org/wiki/Cuivre",
  "Zinc": "https://fr.wikipedia.org/wiki/Zinc",
  "Argent": "https://fr.wikipedia.org/wiki/Argent_(m%C3%A9tal)",
  "Or": "https://fr.wikipedia.org/wiki/Or",
  "Carbone": "https://fr.wikipedia.org/wiki/Carbone",
  "Oxygène": "https://fr.wikipedia.org/wiki/Oxyg%C3%A8ne",
  "Azote": "https://fr.wikipedia.org/wiki/Azote",
  "Fluor": "https://fr.wikipedia.org/wiki/Fluor",
  "Phosphore": "https://fr.wikipedia.org/wiki/Phosphore",
  "Soufre": "https://fr.wikipedia.org/wiki/Soufre",
  "Chlore": "https://fr.wikipedia.org/wiki/Chlore",
  "Néon": "https://fr.wikipedia.org/wiki/N%C3%A9on",
  "Argon": "https://fr.wikipedia.org/wiki/Argon",
  "Krypton": "https://fr.wikipedia.org/wiki/Krypton",
  "Xénon": "https://fr.wikipedia.org/wiki/X%C3%A9non"
};

// Tableau des 25 éléments avec informations détaillées
const elements = [
  // Métaux
  {
    name: "Lithium",
    symbol: "Li",
    number: 3,
    category: "metal",
    fact: "Utilisé dans les piles 🔋",
    example: "Li₂O (Oxyde de lithium)",
    wiki: wikiLinks["Lithium"]
  },
  {
    name: "Béryllium",
    symbol: "Be",
    number: 4,
    category: "metal",
    fact: "Utilisé dans l'aérospatiale 🚀",
    example: "BeO (Oxyde de béryllium)",
    wiki: wikiLinks["Béryllium"]
  },
  {
    name: "Sodium",
    symbol: "Na",
    number: 11,
    category: "metal",
    fact: "Composant du sel de table 🧂",
    example: "NaCl (Chlorure de sodium)",
    wiki: wikiLinks["Sodium"]
  },
  {
    name: "Magnésium",
    symbol: "Mg",
    number: 12,
    category: "metal",
    fact: "Utilisé dans les feux d'artifice 🎆",
    example: "MgO (Oxyde de magnésium)",
    wiki: wikiLinks["Magnésium"]
  },
  {
    name: "Aluminium",
    symbol: "Al",
    number: 13,
    category: "metal",
    fact: "Utilisé pour les canettes 🥤",
    example: "Al₂O₃ (Oxyde d'aluminium)",
    wiki: wikiLinks["Aluminium"]
  },
  {
    name: "Potassium",
    symbol: "K",
    number: 19,
    category: "metal",
    fact: "Présent dans les bananes 🍌",
    example: "KCl (Chlorure de potassium)",
    wiki: wikiLinks["Potassium"]
  },
  {
    name: "Calcium",
    symbol: "Ca",
    number: 20,
    category: "metal",
    fact: "Essentiel pour les os 🦴",
    example: "CaCO₃ (Carbonate de calcium)",
    wiki: wikiLinks["Calcium"]
  },
  {
    name: "Fer",
    symbol: "Fe",
    number: 26,
    category: "metal",
    fact: "Utilisé dans les aimants 🧲",
    example: "Fe₂O₃ (Oxyde de fer)",
    wiki: wikiLinks["Fer"]
  },
  {
    name: "Cuivre",
    symbol: "Cu",
    number: 29,
    category: "metal",
    fact: "Utilisé dans les fils électriques ⚡",
    example: "CuO (Oxyde de cuivre)",
    wiki: wikiLinks["Cuivre"]
  },
  {
    name: "Zinc",
    symbol: "Zn",
    number: 30,
    category: "metal",
    fact: "Utilisé dans les galvanisations 🔧",
    example: "ZnO (Oxyde de zinc)",
    wiki: wikiLinks["Zinc"]
  },
  {
    name: "Argent",
    symbol: "Ag",
    number: 47,
    category: "metal",
    fact: "Utilisé dans la bijouterie 💍",
    example: "AgCl (Chlorure d'argent)",
    wiki: wikiLinks["Argent"]
  },
  {
    name: "Or",
    symbol: "Au",
    number: 79,
    category: "metal",
    fact: "Symbole du luxe 🏅",
    example: "Au (Or pur)",
    wiki: wikiLinks["Or"]
  },
  // Non-métaux
  {
    name: "Hydrogène",
    symbol: "H",
    number: 1,
    category: "non-metal",
    fact: "Le plus léger des éléments 🌬️",
    example: "H₂O (Eau)",
    wiki: wikiLinks["Hydrogène"]
  },
  {
    name: "Carbone",
    symbol: "C",
    number: 6,
    category: "non-metal",
    fact: "Base de la chimie organique 🌱",
    example: "CO₂ (Dioxyde de carbone)",
    wiki: wikiLinks["Carbone"]
  },
  {
    name: "Oxygène",
    symbol: "O",
    number: 8,
    category: "non-metal",
    fact: "Essentiel à la respiration 🌬️",
    example: "O₂ (Dioxygène)",
    wiki: wikiLinks["Oxygène"]
  },
  {
    name: "Azote",
    symbol: "N",
    number: 7,
    category: "non-metal",
    fact: "Constituant principal de l'air 🌫️",
    example: "N₂ (Dinitrogène)",
    wiki: wikiLinks["Azote"]
  },
  {
    name: "Fluor",
    symbol: "F",
    number: 9,
    category: "non-metal",
    fact: "Présent dans le dentifrice 🦷",
    example: "F₂ (Difluor)",
    wiki: wikiLinks["Fluor"]
  },
  {
    name: "Phosphore",
    symbol: "P",
    number: 15,
    category: "non-metal",
    fact: "Utilisé dans les allumettes 🔥",
    example: "P₄ (Tétraphosphore)",
    wiki: wikiLinks["Phosphore"]
  },
  {
    name: "Soufre",
    symbol: "S",
    number: 16,
    category: "non-metal",
    fact: "Connue pour son odeur d'œuf pourri 🥚",
    example: "SO₂ (Dioxyde de soufre)",
    wiki: wikiLinks["Soufre"]
  },
  {
    name: "Chlore",
    symbol: "Cl",
    number: 17,
    category: "non-metal",
    fact: "Utilisé pour désinfecter les piscines 🏊",
    example: "NaCl (Chlorure de sodium) – en solution, le chlore est libéré",
    wiki: wikiLinks["Chlore"]
  },
  // Gaz nobles
  {
    name: "Hélium",
    symbol: "He",
    number: 2,
    category: "noble-gas",
    fact: "Utilisé dans les ballons 🎈",
    example: "He (Gaz hélium)",
    wiki: wikiLinks["Hélium"]
  },
  {
    name: "Néon",
    symbol: "Ne",
    number: 10,
    category: "noble-gas",
    fact: "Utilisé dans les enseignes lumineuses 💡",
    example: "Ne (Gaz néon)",
    wiki: wikiLinks["Néon"]
  },
  {
    name: "Argon",
    symbol: "Ar",
    number: 18,
    category: "noble-gas",
    fact: "Utilisé dans les ampoules électriques 💡",
    example: "Ar (Gaz argon)",
    wiki: wikiLinks["Argon"]
  },
  {
    name: "Krypton",
    symbol: "Kr",
    number: 36,
    category: "noble-gas",
    fact: "Utilisé dans certains éclairages 🔦",
    example: "Kr (Gaz krypton)",
    wiki: wikiLinks["Krypton"]
  },
  {
    name: "Xénon",
    symbol: "Xe",
    number: 54,
    category: "noble-gas",
    fact: "Utilisé dans les lampes flash 📸",
    example: "Xe (Gaz xénon)",
    wiki: wikiLinks["Xénon"]
  }
];

let currentElement = null;

// ----------------------------
// Partie Tableau Périodique
// ----------------------------

// Crée et affiche le tableau périodique dans l'élément ayant l'ID "periodicTable"
function createPeriodicTable() {
  const container = document.getElementById('periodicTable');
  container.innerHTML = ""; // Réinitialiser le conteneur
  elements.forEach(element => {
    const div = document.createElement('div');
    div.className = `element ${element.category}`;
    div.innerHTML = `
      <div class="symbol">${element.symbol}</div>
      <div class="number">${element.number}</div>
    `;
    div.addEventListener('click', () => showElementDetails(element));
    container.appendChild(div);
  });
}

// Affiche les détails d'un élément dans la section dédiée (avec les IDs appropriés)
function showElementDetails(element) {
  currentElement = element;
  document.getElementById('elementName').textContent = `${element.name} (${element.symbol})`;
  document.getElementById('elementProperties').textContent = `Numéro atomique : ${element.number} - Catégorie : ${element.category}`;
  document.getElementById('elementExample').textContent = `Exemple de molécule : ${element.example}`;
  document.getElementById('elementApplications').textContent = `Fait intéressant : ${element.fact}`;
  document.getElementById('wikiLink').href = element.wiki;
  document.getElementById('wikiLink').style.display = "inline";
}

// ----------------------------
// Partie Quiz Interactif
// ----------------------------

// Définition d'une liste de questions (exemples) pour le quiz
const quizQuestions = [
  {
    question: "Quel est le symbole chimique de l'Hydrogène ?",
    correctAnswer: "H"
  },
  {
    question: "Quel élément a pour symbole 'O' ?",
    correctAnswer: "Oxygène"
  },
  {
    question: "Quel métal est utilisé dans les piles ?",
    correctAnswer: "Lithium"
  },
  {
    question: "Quel gaz noble est utilisé dans les enseignes lumineuses ?",
    correctAnswer: "Néon"
  },
  {
    question: "Quel non-métal est à la base de la chimie organique ?",
    correctAnswer: "Carbone"
  }
];

let currentQuestionIndex = 0;
let quizScore = 0;
let wrongAnswers = [];

// Affiche la question actuelle dans l'élément "quizQuestion"
function displayQuizQuestion() {
  if (currentQuestionIndex < quizQuestions.length) {
    const q = quizQuestions[currentQuestionIndex];
    document.getElementById('quizQuestion').textContent = q.question;
    document.getElementById('quizAnswer').value = '';
  } else {
    endQuiz();
  }
}

// Vérifie la réponse de l'utilisateur et passe à la question suivante
function checkQuizAnswer() {
  const userAnswer = document.getElementById('quizAnswer').value.trim();
  const currentQ = quizQuestions[currentQuestionIndex];
  if (userAnswer.toLowerCase() === currentQ.correctAnswer.toLowerCase()) {
    quizScore++;
  } else {
    wrongAnswers.push(currentQ);
  }
  currentQuestionIndex++;
  displayQuizQuestion();
  document.getElementById('quizScore').textContent = quizScore;
}

// Affiche le résultat final du quiz et liste les questions ratées
function endQuiz() {
  document.getElementById('quizContainer').innerHTML = `
    <h3>Quiz terminé !</h3>
    <p>Score : ${quizScore} sur ${quizQuestions.length}</p>
    <h4>Éléments à réviser :</h4>
    <ul id="mistakesList"></ul>
  `;
  const list = document.getElementById('mistakesList');
  wrongAnswers.forEach(q => {
    const li = document.createElement('li');
    li.textContent = q.question + " (Réponse attendue : " + q.correctAnswer + ")";
    list.appendChild(li);
  });
}

// ----------------------------
// Initialisation au chargement de la page
// ----------------------------
document.addEventListener("DOMContentLoaded", () => {
  createPeriodicTable();
  displayQuizQuestion();
});
  
// Pour le quiz, on attend qu'un bouton déclenche la vérification (assure-toi que ton HTML possède un bouton avec l'ID "submitQuiz")
document.getElementById('submitQuiz').addEventListener('click', checkQuizAnswer);

