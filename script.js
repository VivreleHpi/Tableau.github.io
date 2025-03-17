/* Mapping des liens Wikipédia pour chaque élément */
const wikiLinks = {
  "Hydrogène": "https://fr.wikipedia.org/wiki/Hydrog%C3%A8ne",
  "Hélium": "https://fr.wikipedia.org/wiki/H%C3%A9lium",
  "Lithium": "https://fr.wikipedia.org/wiki/Lithium",
  "Béryllium": "https://fr.wikipedia.org/wiki/B%C3%A9ryllium",
  "Bore": "https://fr.wikipedia.org/wiki/Bore",
  "Carbone": "https://fr.wikipedia.org/wiki/Carbone",
  "Azote": "https://fr.wikipedia.org/wiki/Azote",
  "Oxygène": "https://fr.wikipedia.org/wiki/Oxyg%C3%A8ne",
  "Fluor": "https://fr.wikipedia.org/wiki/Fluor",
  "Néon": "https://fr.wikipedia.org/wiki/N%C3%A9on",
  "Sodium": "https://fr.wikipedia.org/wiki/Sodium",
  "Magnésium": "https://fr.wikipedia.org/wiki/Magn%C3%A9sium",
  "Aluminium": "https://fr.wikipedia.org/wiki/Aluminium",
  "Silicium": "https://fr.wikipedia.org/wiki/Silicium",
  "Phosphore": "https://fr.wikipedia.org/wiki/Phosphore",
  "Soufre": "https://fr.wikipedia.org/wiki/Soufre",
  "Chlore": "https://fr.wikipedia.org/wiki/Chlore",
  "Argon": "https://fr.wikipedia.org/wiki/Argon",
  "Potassium": "https://fr.wikipedia.org/wiki/Potassium",
  "Calcium": "https://fr.wikipedia.org/wiki/Calcium",
  "Scandium": "https://fr.wikipedia.org/wiki/Scandium",
  "Titane": "https://fr.wikipedia.org/wiki/Titane",
  "Vanadium": "https://fr.wikipedia.org/wiki/Vanadium",
  "Chrome": "https://fr.wikipedia.org/wiki/Chrome",
  "Manganèse": "https://fr.wikipedia.org/wiki/Mangan%C3%A8se"
};

/* Liste des 25 éléments avec infos, émojis, exemples, utilités et réactions/calculs */
const elements = [
  { name: "Hydrogène", symbol: "H", number: 1, category: "non-metal", fact: "Présent dans l'eau 💧", examples: ["H₂O", "H₂"], emoji: "💧", reaction: "2H → H₂   ou   2H + O → H₂O" },
  { name: "Hélium", symbol: "He", number: 2, category: "noble-gas", fact: "Utilisé dans les ballons 🎈", examples: ["He"], emoji: "🎈", reaction: "Inerte" },
  { name: "Lithium", symbol: "Li", number: 3, category: "metal", fact: "Utilisé dans les batteries 🔋", examples: ["Li₂O"], emoji: "🔋", reaction: "2Li + ½O₂ → Li₂O" },
  { name: "Béryllium", symbol: "Be", number: 4, category: "metal", fact: "Utilisé dans l'aérospatiale 🚀", examples: ["BeO"], emoji: "🚀", reaction: "Be + ½O₂ → BeO" },
  { name: "Bore", symbol: "B", number: 5, category: "non-metal", fact: "Utilisé dans le verre résistant 🏺", examples: ["B₂O₃"], emoji: "🏺", reaction: "2B + 3/2O₂ → B₂O₃" },
  { name: "Carbone", symbol: "C", number: 6, category: "non-metal", fact: "Essentiel à la vie 🌱", examples: ["CO₂", "CH₄"], emoji: "🌱", reaction: "C + O₂ → CO₂" },
  { name: "Azote", symbol: "N", number: 7, category: "non-metal", fact: "Majoritaire dans l'air 🌬️", examples: ["N₂", "NH₃"], emoji: "🌬️", reaction: "2N → N₂" },
  { name: "Oxygène", symbol: "O", number: 8, category: "non-metal", fact: "Essentiel à la respiration 🌬️", examples: ["O₂", "H₂O"], emoji: "🌬️", reaction: "2O → O₂" },
  { name: "Fluor", symbol: "F", number: 9, category: "non-metal", fact: "Utilisé dans le dentifrice 🪥", examples: ["NaF"], emoji: "🪥", reaction: "2F → F₂" },
  { name: "Néon", symbol: "Ne", number: 10, category: "noble-gas", fact: "Utilisé dans les enseignes lumineuses 💡", examples: ["Ne"], emoji: "💡", reaction: "Inerte" },
  { name: "Sodium", symbol: "Na", number: 11, category: "metal", fact: "Composant du sel de table 🧂", examples: ["NaCl"], emoji: "🧂", reaction: "2Na + Cl₂ → 2NaCl" },
  { name: "Magnésium", symbol: "Mg", number: 12, category: "metal", fact: "Utilisé dans les feux d'artifice 🎆", examples: ["MgO"], emoji: "🎆", reaction: "2Mg + O₂ → 2MgO" },
  { name: "Aluminium", symbol: "Al", number: 13, category: "metal", fact: "Utilisé pour les canettes 🥫", examples: ["Al₂O₃"], emoji: "🥫", reaction: "4Al + 3O₂ → 2Al₂O₃" },
  { name: "Silicium", symbol: "Si", number: 14, category: "non-metal", fact: "Utilisé dans les ordinateurs 💻", examples: ["SiO₂"], emoji: "💻", reaction: "Si + O₂ → SiO₂" },
  { name: "Phosphore", symbol: "P", number: 15, category: "non-metal", fact: "Utilisé dans les allumettes 🔥", examples: ["P₄O₁₀"], emoji: "🔥", reaction: "P₄ + 5O₂ → 2P₂O₅" },
  { name: "Soufre", symbol: "S", number: 16, category: "non-metal", fact: "Odeur d'œuf pourri 🥚", examples: ["H₂S"], emoji: "🥚", reaction: "S₈ + 8O₂ → 8SO₂" },
  { name: "Chlore", symbol: "Cl", number: 17, category: "non-metal", fact: "Utilisé pour désinfecter les piscines 🏊", examples: ["NaCl"], emoji: "🏊", reaction: "2Cl → Cl₂" },
  { name: "Argon", symbol: "Ar", number: 18, category: "noble-gas", fact: "Utilisé dans les ampoules 💡", examples: ["Ar"], emoji: "💡", reaction: "Inerte" },
  { name: "Potassium", symbol: "K", number: 19, category: "metal", fact: "Présent dans les bananes 🍌", examples: ["KCl"], emoji: "🍌", reaction: "2K + Cl₂ → 2KCl" },
  { name: "Calcium", symbol: "Ca", number: 20, category: "metal", fact: "Indispensable pour les os 🦴", examples: ["CaCO₃"], emoji: "🦴", reaction: "Ca + ½O₂ → CaO   ou   CaO + CO₂ → CaCO₃" },
  { name: "Scandium", symbol: "Sc", number: 21, category: "metal", fact: "Métal rare en aérospatiale ✈️", examples: ["Sc₂O₃"], emoji: "✈️", reaction: "4Sc + 3O₂ → 2Sc₂O₃" },
  { name: "Titane", symbol: "Ti", number: 22, category: "metal", fact: "Utilisé dans les implants médicaux 🏥", examples: ["TiO₂"], emoji: "🏥", reaction: "Ti + O₂ → TiO₂" },
  { name: "Vanadium", symbol: "V", number: 23, category: "metal", fact: "Renforce les aciers ⚙️", examples: ["V₂O₅"], emoji: "⚙️", reaction: "4V + 5O₂ → 2V₂O₅" },
  { name: "Chrome", symbol: "Cr", number: 24, category: "metal", fact: "Utilisé en placage décoratif ✨", examples: ["Cr₂O₃"], emoji: "✨", reaction: "4Cr + 3O₂ → 2Cr₂O₃" },
  { name: "Manganèse", symbol: "Mn", number: 25, category: "metal", fact: "Utilisé dans les alliages pour batteries 🔋", examples: ["MnO₂"], emoji: "🔋", reaction: "Mn + O₂ → MnO₂" }
];

/* Variables du quiz */
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let wrongAnswers = [];
let quizActive = false;

/* Créer le tableau périodique */
function createPeriodicTable() {
  const container = document.getElementById('periodicTable');
  container.innerHTML = '';
  elements.forEach(element => {
    const div = document.createElement('div');
    div.className = `element ${element.category}`;
    div.innerHTML = `<div class="symbol">${element.symbol}</div><div class="number">${element.number}</div><div class="emoji">${element.emoji}</div>`;
    // Si le quiz est actif, le clic sert à répondre, sinon affiche les détails
    div.addEventListener('click', () => {
      if (quizActive) {
        checkQuizAnswer(element);
      } else {
        showElementDetails(element);
      }
    });
    container.appendChild(div);
  });
}

/* Afficher les détails d'un élément */
function showElementDetails(element) {
  document.getElementById('elementName').textContent = `${element.name} (${element.symbol}) ${element.emoji}`;
  document.getElementById('elementProperties').textContent = `Numéro Atomique : ${element.number}`;
  document.getElementById('elementExample').textContent = `Exemples : ${element.examples.join(', ')}`;
  document.getElementById('elementApplications').textContent = `Utilité : ${element.fact}`;
  document.getElementById('elementReaction').textContent = `Calcul : ${element.reaction}`;
  const wikiLink = document.getElementById('wikiLink');
  wikiLink.href = wikiLinks[element.name] || '#';
  wikiLink.style.display = 'inline';
}

/* Initialiser le quiz */
function initQuiz() {
  quizQuestions = [...elements];
  shuffleArray(quizQuestions);
  currentQuizIndex = 0;
  quizScore = 0;
  wrongAnswers = [];
  quizActive = true;
  document.getElementById('scoreQuiz').textContent = quizScore;
  document.getElementById('quizScore').style.display = 'block';
  nextQuizQuestion();
}

/* Mélanger un tableau (algorithme de Fisher-Yates) */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/* Afficher la prochaine question du quiz */
function nextQuizQuestion() {
  if (currentQuizIndex < quizQuestions.length) {
    const currentQuestion = quizQuestions[currentQuizIndex];
    document.getElementById('quizQuestion').textContent = `Quel est le symbole de : ${currentQuestion.name} ?`;
    document.getElementById('quizFeedback').textContent = '';
  } else {
    endQuiz();
  }
}

/* Vérifier la réponse lorsque l'utilisateur clique sur un élément */
function checkQuizAnswer(selectedElement) {
  const currentQuestion = quizQuestions[currentQuizIndex];
  if (selectedElement.symbol === currentQuestion.symbol) {
    quizScore++;
    document.getElementById('quizFeedback').textContent = 'Bonne réponse ! 👍';
  } else {
    document.getElementById('quizFeedback').textContent = `Mauvaise réponse ! La bonne réponse était ${currentQuestion.symbol}. 👎`;
    wrongAnswers.push({ name: currentQuestion.name, symbol: currentQuestion.symbol });
  }
  document.getElementById('scoreQuiz').textContent = quizScore;
  currentQuizIndex++;
  setTimeout(nextQuizQuestion, 1000);
}

/* Fin du quiz et récapitulatif */
function endQuiz() {
  quizActive = false;
  let recap = 'Quiz terminé !\n';
  recap += `Score final : ${quizScore} / ${quizQuestions.length}\n\nÀ réviser :\n`;
  wrongAnswers.forEach(item => {
    recap += `${item.name} (${item.symbol})\n`;
  });
  alert(recap);
}

/* Démarrer le quiz via le bouton */
function startQuiz() {
  initQuiz();
}

/* Initialisation générale */
window.onload = () => {
  createPeriodicTable();
};

