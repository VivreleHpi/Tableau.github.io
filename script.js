// JavaScript pour le Tableau Périodique Interactif - Vivre le HPI!

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
  "Neon": "https://fr.wikipedia.org/wiki/N%C3%A9on",
  "Sodium": "https://fr.wikipedia.org/wiki/Sodium",
  "Magnésium": "https://fr.wikipedia.org/wiki/Magn%C3%A9sium",
  "Aluminium": "https://fr.wikipedia.org/wiki/Aluminium",
  "Silicium": "https://fr.wikipedia.org/wiki/Silicium",
  "Phosphore": "https://fr.wikipedia.org/wiki/Phosphore",
  "Soufre": "https://fr.wikipedia.org/wiki/Soufre",
  "Chlore": "https://fr.wikipedia.org/wiki/Chlore",
  "Argon": "https://fr.wikipedia.org/wiki/Argon",
  "Potassium": "https://fr.wikipedia.org/wiki/Potassium",
  "Calcium": "https://fr.wikipedia.org/wiki/Calcium"
};

// Liste des éléments avec infos et émojis
const elements = [
  { name: "Hydrogène", symbol: "H", number: 1, category: "non-metal", fact: "Présent dans l'eau 💧", examples: ["H₂O", "H₂"] },
  { name: "Hélium", symbol: "He", number: 2, category: "noble-gas", fact: "Ballons 🎈", examples: ["He"] },
  { name: "Lithium", symbol: "Li", number: 3, category: "metal", fact: "Piles 🔋", examples: ["Li₂O"] },
  { name: "Béryllium", symbol: "Be", number: 4, category: "metal", fact: "Fusées 🚀", examples: ["BeO"] },
  { name: "Bore", symbol: "B", number: 5, category: "non-metal", fact: "Verres résistants 🏺", examples: ["B₂O₃"] },
  { name: "Carbone", symbol: "C", number: 6, category: "non-metal", fact: "Diamants 💎", examples: ["CO₂"] },
  { name: "Azote", symbol: "N", number: 7, category: "non-metal", fact: "Engrais 🌱", examples: ["NH₃"] },
  { name: "Oxygène", symbol: "O", number: 8, category: "non-metal", fact: "Respiration 🌬️", examples: ["O₂", "H₂O"] },
  { name: "Fluor", symbol: "F", number: 9, category: "non-metal", fact: "Dentifrice 🪥", examples: ["NaF"] },
  { name: "Neon", symbol: "Ne", number: 10, category: "noble-gas", fact: "Lumières 💡", examples: ["Ne"] },
  { name: "Sodium", symbol: "Na", number: 11, category: "metal", fact: "Sel de cuisine 🧂", examples: ["NaCl"] },
  { name: "Magnésium", symbol: "Mg", number: 12, category: "metal", fact: "Chocolat 🍫", examples: ["MgO"] },
  { name: "Aluminium", symbol: "Al", number: 13, category: "metal", fact: "Canettes 🥫", examples: ["Al₂O₃"] },
  { name: "Silicium", symbol: "Si", number: 14, category: "non-metal", fact: "Ordinateurs 💻", examples: ["SiO₂"] },
  { name: "Phosphore", symbol: "P", number: 15, category: "non-metal", fact: "Allumettes 🔥", examples: ["P₄O₁₀"] },
  { name: "Soufre", symbol: "S", number: 16, category: "non-metal", fact: "Odeur d'œuf 🥚", examples: ["H₂S"] },
  { name: "Chlore", symbol: "Cl", number: 17, category: "non-metal", fact: "Piscines 🏊", examples: ["NaCl"] },
  { name: "Argon", symbol: "Ar", number: 18, category: "noble-gas", fact: "Ampoules 💡", examples: ["Ar"] },
  { name: "Potassium", symbol: "K", number: 19, category: "metal", fact: "Bananes 🍌", examples: ["KCl"] },
  { name: "Calcium", symbol: "Ca", number: 20, category: "metal", fact: "Os solides 🦴", examples: ["CaCO₃"] }
];

// Initialisation du tableau
function createPeriodicTable() {
  const container = document.getElementById('periodicTable');
  container.innerHTML = '';
  elements.forEach(element => {
    const div = document.createElement('div');
    div.className = `element ${element.category}`;
    div.innerHTML = `<div class="symbol">${element.symbol}</div><div class="number">${element.number}</div>`;
    div.addEventListener('click', () => showElementDetails(element));
    container.appendChild(div);
  });
}

// Affichage des détails
function showElementDetails(element) {
  document.getElementById('elementName').textContent = `${element.name} (${element.symbol})`;
  document.getElementById('elementProperties').textContent = `Numéro Atomique : ${element.number}`;
  document.getElementById('elementApplications').textContent = element.fact;
  document.getElementById('elementExample').textContent = `Exemples de molécules : ${element.examples.join(', ')}`;
  const wikiLink = document.getElementById('wikiLink');
  wikiLink.href = wikiLinks[element.name] || '#';
  wikiLink.style.display = 'inline';
}

// Démarrage
createPeriodicTable();

