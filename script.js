// === script.js ===
const elements = [
  { symbol: 'H', name: 'Hydrogène', examples: 'H2, H2O', applications: 'Carburant, Eau', emoji: '💧', wiki: 'https://fr.wikipedia.org/wiki/Hydrog%C3%A8ne' },
  { symbol: 'He', name: 'Hélium', examples: 'He', applications: 'Ballons, Cryogénie', emoji: '🎈', wiki: 'https://fr.wikipedia.org/wiki/H%C3%A9lium' },
  { symbol: 'Li', name: 'Lithium', examples: 'Li', applications: 'Batteries, Médicaments', emoji: '🔋', wiki: 'https://fr.wikipedia.org/wiki/Lithium' },
  { symbol: 'Be', name: 'Béryllium', examples: 'Be', applications: 'Aérospatiale, Alliages', emoji: '🚀', wiki: 'https://fr.wikipedia.org/wiki/B%C3%A9ryllium' },
  { symbol: 'B', name: 'Bore', examples: 'B2O3', applications: 'Fibres, Verre', emoji: '🪵', wiki: 'https://fr.wikipedia.org/wiki/Bore' },
  { symbol: 'C', name: 'Carbone', examples: 'C, CO2, CH4', applications: 'Vie, Combustion, Plastiques', emoji: '🌱', wiki: 'https://fr.wikipedia.org/wiki/Carbone' },
  { symbol: 'N', name: 'Azote', examples: 'N2, NH3', applications: 'Engrais, Réfrigération', emoji: '❄️', wiki: 'https://fr.wikipedia.org/wiki/Azote' },
  { symbol: 'O', name: 'Oxygène', examples: 'O2, H2O', applications: 'Respiration, Combustion', emoji: '🌬️', wiki: 'https://fr.wikipedia.org/wiki/Oxyg%C3%A8ne' },
  { symbol: 'F', name: 'Fluor', examples: 'F2', applications: 'Dentifrice, Industrie', emoji: '🪥', wiki: 'https://fr.wikipedia.org/wiki/Fluor' },
  { symbol: 'Ne', name: 'Néon', examples: 'Ne', applications: 'Enseignes lumineuses', emoji: '💡', wiki: 'https://fr.wikipedia.org/wiki/N%C3%A9on' },
];

// Initialisation du quiz
let quizActive = false;
let quizIndex = 0;
let score = 0;

// Mélanger les éléments pour un quiz aléatoire
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Lancer le quiz
function startQuiz() {
  quizActive = true;
  quizIndex = 0;
  score = 0;
  shuffle(elements);
  askQuestion();
}

// Afficher la question du quiz
function askQuestion() {
  const element = elements[quizIndex];
  document.getElementById('quizQuestion').innerText = `Trouve : ${element.name} ${element.emoji}`;
}

// Sélectionner un élément
function selectElement(index) {
  if (quizActive) {
    if (elements[quizIndex].symbol === elements[index].symbol) {
      score++;
      alert(`Bonne réponse ! ✅\nScore : ${score}`);
    } else {
      alert(`Mauvaise réponse ❌\nLa bonne réponse était : ${elements[quizIndex].name}`);
    }
    quizIndex++;
    if (quizIndex < elements.length) {
      askQuestion();
    } else {
      alert(`Quiz terminé ! Score : ${score} / ${elements.length}`);
      quizActive = false;
    }
  } else {
    const element = elements[index];
    alert(`${element.name} ${element.emoji}\nExemples : ${element.examples}\nApplications : ${element.applications}\nWiki : ${element.wiki}`);
  }
}

document.addEventListener('DOMContentLoaded', startQuiz);
