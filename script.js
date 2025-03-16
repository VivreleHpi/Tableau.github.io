// Mapping des liens Wikipédia pour chaque élément
const wikiLinks = {
  "Lithium": "https://fr.wikipedia.org/wiki/Lithium",
  "Béryllium": "https://fr.wikipedia.org/wiki/Béryllium",
  "Sodium": "https://fr.wikipedia.org/wiki/Sodium",
  "Hydrogène": "https://fr.wikipedia.org/wiki/Hydrogène",
  "Carbone": "https://fr.wikipedia.org/wiki/Carbone",
  "Oxygène": "https://fr.wikipedia.org/wiki/Oxygène",
  "Hélium": "https://fr.wikipedia.org/wiki/Hélium",
  "Néon": "https://fr.wikipedia.org/wiki/Néon",
  "Argon": "https://fr.wikipedia.org/wiki/Argon",
  "Krypton": "https://fr.wikipedia.org/wiki/Krypton",
  "Xénon": "https://fr.wikipedia.org/wiki/Xénon"
};

// Liste des éléments avec quelques infos de base
const elements = [
  // Métaux
  { name: "Lithium", symbol: "Li", number: 3, category: "metal", fact: "Utilisé dans les piles 🔋", details: "Le lithium est léger et réagit facilement. Exemple de molécule : Li₂O. Utilisé dans la fabrication des batteries." },
  { name: "Béryllium", symbol: "Be", number: 4, category: "metal", fact: "Dans les fusées 🚀", details: "Le béryllium est utilisé dans l'aéronautique. Exemple : BeO, avec une structure céramique robuste." },
  { name: "Sodium", symbol: "Na", number: 11, category: "metal", fact: "Sel de cuisine 🧂", details: "Le sodium se combine facilement pour former du sel (NaCl). Essentiel pour la vie cellulaire." },
  // Non-métaux
  { name: "Hydrogène", symbol: "H", number: 1, category: "non-metal", fact: "Présent dans l'eau 💧", details: "L'hydrogène est l'élément le plus léger. Exemple de molécule : H₂O (2 x H + O). Utilisé comme carburant dans certaines piles à combustible." },
  { name: "Carbone", symbol: "C", number: 6, category: "non-metal", fact: "Diamants 💎", details: "Le carbone forme une infinité de structures. Exemple : CO₂. Il est essentiel pour la chimie organique." },
  { name: "Oxygène", symbol: "O", number: 8, category: "non-metal", fact: "Pour la respiration 🌫️", details: "L'oxygène est indispensable à la respiration. Exemple : H₂O (2 x H + O). Utilisé dans la combustion et la respiration cellulaire." },
  // Gaz nobles
  { name: "Hélium", symbol: "He", number: 2, category: "noble-gas", fact: "Ballons 🎈", details: "L'hélium est léger et inerte. Utilisé dans les ballons et pour refroidir les aimants des IRM." },
  { name: "Néon", symbol: "Ne", number: 10, category: "noble-gas", fact: "Enseignes lumineuses 💡", details: "Le néon émet une lumière rouge-orange dans les tubes. Il est utilisé pour les enseignes." },
  { name: "Argon", symbol: "Ar", number: 18, category: "noble-gas", fact: "Ampoules 💡", details: "L'argon est souvent utilisé pour remplir les ampoules électriques afin d'éviter l'oxydation." },
  { name: "Krypton", symbol: "Kr", number: 36, category: "noble-gas", fact: "Projecteurs 🎥", details: "Le krypton est utilisé dans certains projecteurs et lampes flash." },
  { name: "Xénon", symbol: "Xe", number: 54, category: "noble-gas", fact: "Phares de voiture 🚗", details: "Le xénon est utilisé dans les phares haute intensité et certaines lampes de cinéma." }
];

let currentElement = null;

// Création du tableau périodique
function createPeriodicTable() {
  const container = document.getElementById('periodicTable');
  // Tri par numéro atomique
  elements.sort((a, b) => a.number - b.number).forEach(element => {
    const div = document.createElement('div');
    div.className = `element ${element.category}`;
    div.innerHTML = `
      <div class="symbol">${element.symbol}</div>
      <div class="number">${element.number}</div>
    `;
    // Au clic, affiche les infos de l'élément dans la section détails
    div.addEventListener('click', () => showElementDetails(element));
    container.appendChild(div);
  });
}

// Mise à jour de la section Détails de l'Élément
function showElementDetails(element) {
  currentElement = element;
  document.getElementById('elementName').textContent = `${element.name} (${element.symbol})`;
  document.getElementById('elementProperties').textContent = `Nombre de protons : ${element.number} - Catégorie : ${element.category}`;
  
  // Exemple de molécule (pour certains éléments, on donne un exemple prédéfini)
  let exampleText = "";
  if(element.name === "Hydrogène") {
    exampleText = "Exemple de molécule : H₂O (2 x H + O)";
  } else if(element.name === "Carbone") {
    exampleText = "Exemple de molécule : CO₂ (1 x C + 2 x O)";
  } else if(element.name === "Oxygène") {
    exampleText = "Exemple de molécule : H₂O (2 x H + O)";
  } else {
    exampleText = "Exemple de molécule : Voir plus d'infos en cliquant sur 'Voir plus'";
  }
  document.getElementById('elementExample').textContent = exampleText;
  
  // Applications ou faits marquants
  document.getElementById('elementApplications').textContent = `Application/Fait : ${element.fact}`;
  
  // Mise à jour du lien Wikipédia en utilisant la map wikiLinks
  document.getElementById('wikiLink').href = wikiLinks[element.name] || "https://fr.wikipedia.org/wiki/" + encodeURIComponent(element.name);
  document.getElementById('wikiLink').style.display = "inline";
  
  // Afficher le bouton "Voir plus"
  document.getElementById('voirPlusBtn').style.display = "inline-block";
}

// Ouvre la fenêtre modale avec les infos complémentaires
function openModal() {
  if(currentElement) {
    document.getElementById('modalElementTitle').textContent = `${currentElement.name} - Détails complémentaires`;
    document.getElementById('modalContent').textContent = currentElement.details || "Aucune information complémentaire pour cet élément.";
    document.getElementById('infoModal').style.display = 'block';
  }
}

// Ferme la fenêtre modale
function closeModal() {
  document.getElementById('infoModal').style.display = 'none';
}

// Initialisation du tableau périodique
createPeriodicTable();
