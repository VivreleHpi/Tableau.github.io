const elements = [
    // Métaux
    { name: "Lithium", symbol: "Li", number: 3, category: "metal", fact: "Utilisé dans les piles 🔋", emoji: "🔋" },
    { name: "Béryllium", symbol: "Be", number: 4, category: "metal", fact: "Dans les fusées 🚀", emoji: "🚀" },
    { name: "Sodium", symbol: "Na", number: 11, category: "metal", fact: "Sel de cuisine 🧂", emoji: "🧂" },
    { name: "Magnésium", symbol: "Mg", number: 12, category: "metal", fact: "Feux d'artifice 🎆", emoji: "🎆" },
    { name: "Aluminium", symbol: "Al", number: 13, category: "metal", fact: "Cannettes 🥤", emoji: "🥤" },
    { name: "Potassium", symbol: "K", number: 19, category: "metal", fact: "Bananes 🍌", emoji: "🍌" },
    { name: "Calcium", symbol: "Ca", number: 20, category: "metal", fact: "Os 🦴", emoji: "🦴" },
    { name: "Fer", symbol: "Fe", number: 26, category: "metal", fact: "Aimants 🧲", emoji: "🧲" },
    { name: "Cuivre", symbol: "Cu", number: 29, category: "metal", fact: "Pièces 💰", emoji: "💰" },
    { name: "Zinc", symbol: "Zn", number: 30, category: "metal", fact: "Crème solaire 🌞", emoji: "🌞" },
    { name: "Argent", symbol: "Ag", number: 47, category: "metal", fact: "Bijoux 💍", emoji: "💍" },
    { name: "Or", symbol: "Au", number: 79, category: "metal", fact: "Trésor 💰", emoji: "🏅" },

    // Non-métaux
    { name: "Hydrogène", symbol: "H", number: 1, category: "non-metal", fact: "Eau 💧", emoji: "💧" },
    { name: "Carbone", symbol: "C", number: 6, category: "non-metal", fact: "Diamants 💎", emoji: "💎" },
    { name: "Azote", symbol: "N", number: 7, category: "non-metal", fact: "Air 🌬️", emoji: "🌬️" },
    { name: "Oxygène", symbol: "O", number: 8, category: "non-metal", fact: "Respiration 🌫️", emoji: "🌫️" },
    { name: "Fluor", symbol: "F", number: 9, category: "non-metal", fact: "Dentifrice 🦷", emoji: "🦷" },
    { name: "Phosphore", symbol: "P", number: 15, category: "non-metal", fact: "Allumettes 🔥", emoji: "🔥" },
    { name: "Soufre", symbol: "S", number: 16, category: "non-metal", fact: "Odeur d'œuf 🥚", emoji: "🥚" },
    { name: "Chlore", symbol: "Cl", number: 17, category: "non-metal", fact: "Piscine 🏊", emoji: "🏊♂️" },

    // Gaz nobles
    { name: "Hélium", symbol: "He", number: 2, category: "noble-gas", fact: "Ballons 🎈", emoji: "🎈" },
    { name: "Néon", symbol: "Ne", number: 10, category: "noble-gas", fact: "Enseignes 💡", emoji: "💡" },
    { name: "Argon", symbol: "Ar", number: 18, category: "noble-gas", fact: "Ampoules 💡", emoji: "💡" },
    { name: "Krypton", symbol: "Kr", number: 36, category: "noble-gas", fact: "Projecteurs 🎥", emoji: "🎥" },
    { name: "Xénon", symbol: "Xe", number: 54, category: "noble-gas", fact: "Phares de voiture 🚗", emoji: "🚗" }
];

// Système de jeu
let score = 0;
let currentQuestion = null;

function createPeriodicTable() {
    const container = document.getElementById('periodicTable');
    
    elements.sort((a, b) => a.number - b.number).forEach(element => {
        const div = document.createElement('div');
        div.className = `element ${element.category}`;
        div.innerHTML = `
            <div class="symbol">${element.symbol}</div>
            <div class="number">${element.number}</div>
        `;
        div.addEventListener('click', () => showElementInfo(element));
        container.appendChild(div);
    });
    
    startQuiz();
}

function showElementInfo(element) {
    document.getElementById('elementTitle').textContent = `${element.name} (${element.symbol})`;
    document.getElementById('elementEmoji').textContent = element.emoji;
    document.getElementById('elementFact').textContent = element.fact;
    document.getElementById('infoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Système de quiz
function startQuiz() {
    generateQuestion();
}

function generateQuestion() {
    currentQuestion = elements[Math.floor(Math.random() * elements.length)];
    const options = [currentQuestion];
    
    while(options.length < 4) {
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        if(!options.includes(randomElement)) options.push(randomElement);
    }

    options.sort(() => Math.random() - 0.5);

    document.getElementById('question').innerHTML = `
        <div class="question-emoji">${currentQuestion.emoji}</div>
        <p>${currentQuestion.fact}</p>
        <p>Quel est cet élément ?</p>
    `;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.name;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedElement) {
    if(selectedElement === currentQuestion) {
        score++;
        alert('Bravo ! 🎉 +1 point');
    } else {
        alert(`Oops ! C'était ${currentQuestion.name} ❌`);
    }
    document.getElementById('score').textContent = score;
    generateQuestion();
}

function resetGame() {
    score = 0;
    document.getElementById('score').textContent = '0';
    generateQuestion();
}

// Initialisation
window.onload = createPeriodicTable;