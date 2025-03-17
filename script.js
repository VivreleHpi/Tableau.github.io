const elements = [
  { symbol: 'H', name: 'Hydrogène', examples: 'H2, H2O', applications: 'Carburant, Eau', emoji: '💧' },
  { symbol: 'He', name: 'Hélium', examples: 'He', applications: 'Ballons, Cryogénie', emoji: '🎈' },
  { symbol: 'Li', name: 'Lithium', examples: 'Li', applications: 'Batteries, Médicaments', emoji: '🔋' },
  { symbol: 'Be', name: 'Béryllium', examples: 'Be', applications: 'Aérospatiale, Alliages', emoji: '🚀' },
  { symbol: 'B', name: 'Bore', examples: 'B2O3', applications: 'Fibres, Verre', emoji: '🪵' },
  { symbol: 'C', name: 'Carbone', examples: 'C, CO2', applications: 'Vie, Combustion', emoji: '🌱' },
  { symbol: 'N', name: 'Azote', examples: 'N2, NH3', applications: 'Engrais, Réfrigération', emoji: '❄️' },
  { symbol: 'O', name: 'Oxygène', examples: 'O2, H2O', applications: 'Respiration, Combustion', emoji: '🌬️' },
  { symbol: 'F', name: 'Fluor', examples: 'F2', applications: 'Dentifrice, Industrie', emoji: '🪥' },
  { symbol: 'Ne', name: 'Néon', examples: 'Ne', applications: 'Enseignes lumineuses', emoji: '💡' },
  { symbol: 'Na', name: 'Sodium', examples: 'NaCl', applications: 'Sel, Lampes', emoji: '🧂' },
  { symbol: 'Mg', name: 'Magnésium', examples: 'MgO', applications: 'Feux d’artifice, Santé', emoji: '🎆' },
  { symbol: 'Al', name: 'Aluminium', examples: 'Al2O3', applications: 'Aérospatiale, Emballages', emoji: '✈️' },
  { symbol: 'Si', name: 'Silicium', examples: 'SiO2', applications: 'Électronique, Verre', emoji: '💻' },
  { symbol: 'P', name: 'Phosphore', examples: 'P4', applications: 'Allumettes, Engrais', emoji: '🔥' },
  { symbol: 'S', name: 'Soufre', examples: 'S8', applications: 'Allumettes, Caoutchouc', emoji: '🧅' },
  { symbol: 'Cl', name: 'Chlore', examples: 'Cl2', applications: 'Désinfection, PVC', emoji: '🏊' },
  { symbol: 'Ar', name: 'Argon', examples: 'Ar', applications: 'Soudure, Ampoules', emoji: '💡' },
  { symbol: 'K', name: 'Potassium', examples: 'KCl', applications: 'Engrais, Santé', emoji: '🥔' },
  { symbol: 'Ca', name: 'Calcium', examples: 'CaCO3', applications: 'Os, Construction', emoji: '🦴' },
  { symbol: 'Sc', name: 'Scandium', examples: 'Sc', applications: 'Aérospatiale, Alliages', emoji: '🚀' },
  { symbol: 'Ti', name: 'Titane', examples: 'TiO2', applications: 'Implants, Aérospatiale', emoji: '🏋️' },
  { symbol: 'V', name: 'Vanadium', examples: 'V2O5', applications: 'Acier, Pigments', emoji: '⚙️' },
  { symbol: 'Cr', name: 'Chrome', examples: 'Cr2O3', applications: 'Acier inoxydable, Colorants', emoji: '🌈' },
  { symbol: 'Mn', name: 'Manganèse', examples: 'MnO2', applications: 'Batteries, Acier', emoji: '🔋' },
];

const periodicTable = document.getElementById('periodicTable');
const elementDetails = document.getElementById('elementDetails');
const quizContainer = document.getElementById('quiz-container');
const popup = document.getElementById('popup');

let quizIndex = 0;
let score = 0;
let quizActive = false;

function loadTable() {
  elements.forEach((el, index) => {
    const elementDiv = document.createElement('div');
    elementDiv.classList.add('element');
    elementDiv.textContent = `${el.symbol}`;
    elementDiv.onclick = () => selectElement(el, index);
    periodicTable.appendChild(elementDiv);
  });
}

function selectElement(element, index) {
  if (quizActive) {
    if (index === quizIndex) {
      score++;
      showPopup('Bonne réponse ! ✅', 'green');
    } else {
      showPopup('Mauvaise réponse ❌', 'red');
    }
    quizIndex++;
    if (quizIndex < elements.length) {
      askQuestion();
    } else {
      endQuiz();
    }
  } else {
    elementDetails.innerHTML = `
      <h2>${element.name} ${element.emoji}</h2>
      <p>Exemples : ${element.examples}</p>
      <p>Applications : ${element.applications}</p>
    `;
  }
}

function startQuiz() {
  quizActive = true;
  quizIndex = 0;
  score = 0;
  askQuestion();
  quizContainer.querySelector('button').style.display = 'none';
  quizContainer.querySelector('button[onclick="resetQuiz()"]').style.display = 'inline';
}

function askQuestion() {
  quizContainer.querySelector('#quiz-question').textContent = `Clique sur : ${elements[quizIndex].name}`;
}

function endQuiz() {
  quizActive = false;
  quizContainer.querySelector('#quiz-score').textContent = `Score final : ${score} / ${elements.length}`;
}

function resetQuiz() {
  quizActive = false;
  quizContainer.querySelector('#quiz-question').textContent = 'Quiz annulé. Cliquez sur "Démarrer le Quiz" pour recommencer !';
  quizContainer.querySelector('button').style.display = 'inline';
  quizContainer.querySelector('button[onclick="resetQuiz()"]').style.display = 'none';
}

function showPopup(message, color) {
  popup.textContent = message;
  popup.style.color = color;
  popup.style.display = 'block';
  setTimeout(() => popup.style.display = 'none', 1500);
}

document.addEventListener('DOMContentLoaded', loadTable);
