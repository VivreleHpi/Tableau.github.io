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
  "Argon": "https://fr.wikipedia.org/wiki/Argon"
};

// Liste des éléments triés par numéro atomique
const elements = [
  { name: "Hydrogène", symbol: "H", number: 1, category: "non-metal", fact: "Présent dans l'eau 💧", details: "Exemple de molécule : H₂O." },
  { name: "Hélium", symbol: "He", number: 2, category: "noble-gas", fact: "Utilisé dans les ballons 🎈", details: "Gaz inerte et léger." },
  { name: "Lithium", symbol: "Li", number: 3, category: "metal", fact: "Utilisé dans les batteries 🔋", details: "Exemple de molécule : Li₂O." },
  { name: "Béryllium", symbol: "Be", number: 4, category: "metal", fact: "Utilisé dans l'aérospatial 🚀", details: "Exemple de molécule : BeO." },
  { name: "Bore", symbol: "B", number: 5, category: "metalloid", fact: "Utilisé dans les fibres de verre 🏗️", details: "Exemple : B₂O₃." },
  { name: "Carbone", symbol: "C", number: 6, category: "non-metal", fact: "Diamants 💎", details: "Exemple de molécule : CO₂." },
  { name: "Azote", symbol: "N", number: 7, category: "non-metal", fact: "Composant de l'air 🌬️", details: "Exemple : NH₃." },
  { name: "Oxygène", symbol: "O", number: 8, category: "non-metal", fact: "Respiration 🌫️", details: "Exemple : H₂O." },
  { name: "Fluor", symbol: "F", number: 9, category: "halogen", fact: "Dentifrice 🦷", details: "Exemple : NaF." },
  { name: "Néon", symbol: "Ne", number: 10, category: "noble-gas", fact: "Enseignes lumineuses 💡", details: "Gaz noble émettant une lumière rouge-orange." },
  { name: "Sodium", symbol: "Na", number: 11, category: "metal", fact: "Sel de table 🧂", details: "Exemple : NaCl." },
  { name: "Magnésium", symbol: "Mg", number: 12, category: "metal", fact: "Présent dans le corps humain 💪", details: "Exemple : MgO." },
  { name: "Aluminium", symbol: "Al", number: 13, category: "metal", fact: "Utilisé en aéronautique ✈️", details: "Exemple : Al₂O₃." },
  { name: "Silicium", symbol: "Si", number: 14, category: "metalloid", fact: "Présent dans les puces électroniques 💾", details: "Exemple : SiO₂." },
  { name: "Phosphore", symbol: "P", number: 15, category: "non-metal", fact: "Allumettes 🔥", details: "Exemple : P₄O₁₀." },
  { name: "Soufre", symbol: "S", number: 16, category: "non-metal", fact: "Odeur des œufs pourris 🥚", details: "Exemple : SO₂." },
  { name: "Chlore", symbol: "Cl", number: 17, category: "halogen", fact: "Désinfectant des piscines 🏊", details: "Exemple : NaCl." },
  { name: "Argon", symbol: "Ar", number: 18, category: "noble-gas", fact: "Présent dans l'air 🌬️", details: "Utilisé dans les ampoules." }
];

// Ajout du jeu de quiz amélioré
function startQuiz() {
  const question = elements[Math.floor(Math.random() * elements.length)];
  document.getElementById('quizQuestion').textContent = `Clique sur l'élément : ${question.name} (${question.symbol})`;
  document.getElementById('quizSection').dataset.answer = question.symbol;
}

function checkAnswer(symbol) {
  const correct = document.getElementById('quizSection').dataset.answer;
  if (symbol === correct) {
    alert('Bonne réponse !');
  } else {
    alert(`Mauvaise réponse ! C'était ${correct}.`);
  }
  startQuiz();
}

// Initialisation du tableau et du quiz
createPeriodicTable();
startQuiz();
