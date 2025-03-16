// Mapping des liens Wikipédia pour chaque élément
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

const elements = [
  { name: "Hydrogène", symbol: "H", number: 1, category: "non-metal" },
  { name: "Hélium", symbol: "He", number: 2, category: "noble-gas" },
  { name: "Lithium", symbol: "Li", number: 3, category: "metal" },
  { name: "Béryllium", symbol: "Be", number: 4, category: "metal" },
  { name: "Bore", symbol: "B", number: 5, category: "non-metal" },
  { name: "Carbone", symbol: "C", number: 6, category: "non-metal" },
  { name: "Azote", symbol: "N", number: 7, category: "non-metal" },
  { name: "Oxygène", symbol: "O", number: 8, category: "non-metal" },
  { name: "Fluor", symbol: "F", number: 9, category: "non-metal" },
  { name: "Néon", symbol: "Ne", number: 10, category: "noble-gas" },
  { name: "Sodium", symbol: "Na", number: 11, category: "metal" },
  { name: "Magnésium", symbol: "Mg", number: 12, category: "metal" },
  { name: "Aluminium", symbol: "Al", number: 13, category: "metal" },
  { name: "Silicium", symbol: "Si", number: 14, category: "non-metal" },
  { name: "Phosphore", symbol: "P", number: 15, category: "non-metal" },
  { name: "Soufre", symbol: "S", number: 16, category: "non-metal" },
  { name: "Chlore", symbol: "Cl", number: 17, category: "non-metal" },
  { name: "Argon", symbol: "Ar", number: 18, category: "noble-gas" },
  { name: "Potassium", symbol: "K", number: 19, category: "metal" },
  { name: "Calcium", symbol: "Ca", number: 20, category: "metal" },
  { name: "Scandium", symbol: "Sc", number: 21, category: "metal" },
  { name: "Titane", symbol: "Ti", number: 22, category: "metal" },
  { name: "Vanadium", symbol: "V", number: 23, category: "metal" },
  { name: "Chrome", symbol: "Cr", number: 24, category: "metal" },
  { name: "Manganèse", symbol: "Mn", number: 25, category: "metal" }
];

// Créer le tableau périodique
function createPeriodicTable() {
  const container = document.getElementById('periodicTable');
  elements.forEach(element => {
    const div = document.createElement('div');
    div.className = `element ${element.category}`;
    div.innerHTML = `<div>${element.symbol}</div><div>${element.number}</div>`;
    div.addEventListener('click', () => showElementDetails(element));
    container.appendChild(div);
  });
}

// Affiche les détails de l'élément sélectionné
function showElementDetails(element) {
  document.getElementById('elementName').textContent = `${element.name} (${element.symbol})`;
  document.getElementById('elementProperties').textContent = `Numéro atomique : ${element.number}`;
  document.getElementById('wikiLink').href = wikiLinks[element.name];
  document.getElementById('wikiLink').style.display = "block";
}

// Quiz
let score = 0;
function startQuiz() {
  const quizResults = document.getElementById('quizResults');
  quizResults.innerHTML = '';
  elements.forEach(element => {
    const button = document.createElement('button');
    button.textContent = element.symbol;
    button.onclick = () => {
      score++;
      quizResults.innerHTML = `Score : ${score} / 25`;
    };
    quizResults.appendChild(button);
  });
}

// Initialisation
document.addEventListener('DOMContentLoaded', createPeriodicTable);
