/* Nouvelles fonctionnalités du quiz */
let timeElapsed = 0;
let timerInterval;
let quizConfig = {
  questionCount: 10,
  questionTypes: ['symbol']
};

function startQuiz() {
  // Récupération de la configuration
  quizConfig.questionCount = parseInt(document.getElementById('questionCount').value);
  quizConfig.questionTypes = [];
  if(document.getElementById('symbolQuestions').checked) quizConfig.questionTypes.push('symbol');
  if(document.getElementById('numberQuestions').checked) quizConfig.questionTypes.push('number');
  if(document.getElementById('categoryQuestions').checked) quizConfig.questionTypes.push('category');

  // Initialisation
  quizQuestions = generateQuestions();
  currentQuizIndex = 0;
  quizScore = 0;
  wrongAnswers = [];
  timeElapsed = 0;
  
  // Démarrage du chrono
  timerInterval = setInterval(() => {
    timeElapsed++;
    document.getElementById('time').textContent = 
      `${Math.floor(timeElapsed/60).toString().padStart(2,'0')}:${(timeElapsed%60).toString().padStart(2,'0')}`;
  }, 1000);

  // Affichage
  document.getElementById('quizScore').style.display = 'block';
  document.getElementById('currentQ').textContent = 1;
  document.getElementById('totalQ').textContent = quizConfig.questionCount;
  nextQuizQuestion();
}

function generateQuestions() {
  const questions = [];
  const shuffledElements = [...elements].sort(() => Math.random() - 0.5);
  
  shuffledElements.slice(0, quizConfig.questionCount).forEach(element => {
    const questionType = quizConfig.questionTypes[Math.floor(Math.random() * quizConfig.questionTypes.length)];
    
    let question;
    switch(questionType) {
      case 'symbol':
        question = {
          type: 'symbol',
          text: `Quel est le symbole du ${element.name} ?`,
          answer: element.symbol,
          element: element
        };
        break;
      case 'number':
        question = {
          type: 'number',
          text: `Quel est le numéro atomique du ${element.name} ?`,
          answer: element.number,
          element: element
        };
        break;
      case 'category':
        question = {
          type: 'category',
          text: `À quelle catégorie appartient le ${element.name} ?`,
          answer: element.category,
          element: element
        };
        break;
    }
    questions.push(question);
  });
  
  return questions;
}

function checkQuizAnswer(selectedElement) {
  const question = quizQuestions[currentQuizIndex];
  let isCorrect = false;
  
  switch(question.type) {
    case 'symbol':
      isCorrect = (selectedElement.symbol === question.answer);
      break;
    case 'number':
      isCorrect = (selectedElement.number === question.answer);
      break;
    case 'category':
      isCorrect = (selectedElement.category === question.answer);
      break;
  }

  // Feedback visuel
  document.getElementById('periodicTable').querySelectorAll('.element').forEach(el => {
    el.classList.remove('highlight-correct', 'highlight-wrong');
    const elementName = el.querySelector('.symbol').textContent;
    const realElement = elements.find(e => e.symbol === elementName);
    
    if(realElement[question.type] === question.answer) {
      el.classList.add('highlight-correct');
    }
    if(realElement === selectedElement && !isCorrect) {
      el.classList.add('highlight-wrong');
    }
  });

  // Gestion score et feedback
  const feedback = document.getElementById('feedbackText');
  if(isCorrect) {
    quizScore++;
    feedback.innerHTML = `✅ Correct !<br>${getFactMessage(question.element)}`;
  } else {
    feedback.innerHTML = `❌ Incorrect !<br>La bonne réponse était : ${formatAnswer(question)}<br>
                         ${getFactMessage(question.element)}`;
    wrongAnswers.push(question);
  }

  document.getElementById('scoreQuiz').textContent = quizScore;
  document.getElementById('nextButton').style.display = 'block';
}

function formatAnswer(question) {
  switch(question.type) {
    case 'symbol': return question.answer;
    case 'number': return question.answer;
    case 'category': return translateCategory(question.answer);
  }
}

function translateCategory(category) {
  const categories = {
    'metal': 'Métal',
    'non-metal': 'Non-métal',
    'noble-gas': 'Gaz noble'
  };
  return categories[category] || category;
}

function getFactMessage(element) {
  return `Le saviez-vous ? ${element.fact} ${element.emoji}`;
}

function endQuiz() {
  clearInterval(timerInterval);
  // Affichage des résultats dans une modale
  const modalContent = `
    <h2>Résultats du Quiz 🎉</h2>
    <p>Score final : ${quizScore}/${quizQuestions.length}</p>
    <p>Temps écoulé : ${document.getElementById('time').textContent}</p>
    ${wrongAnswers.length > 0 ? `
    <div class="wrong-answers">
      <h3>Réponses à réviser :</h3>
      ${wrongAnswers.map(q => `
        <div class="wrong-answer">
          <p><strong>${q.element.name}</strong></p>
          <p>Question : ${q.text}</p>
          <p>Votre réponse : ${formatAnswer(q)}</p>
        </div>
      `).join('')}
    </div>` : ''}
    <button onclick="location.reload()">Rejouer 🔄</button>
  `;
  
  // Afficher la modale avec les résultats
  showModal("Résultats du Quiz", modalContent);
}
