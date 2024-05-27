const startBtn = document.getElementById('start-btn');
const questionScreen = document.getElementById('question-screen');
const endScreen = document.getElementById('end-screen');
const highscoresScreen = document.getElementById('highscores-screen');
const questionTitle = document.getElementById('question-title');
const choicesList = document.getElementById('choices');
const timerDisplay = document.getElementById('timer');
const finalScoreDisplay = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const scoreForm = document.getElementById('score-form');
const highscoresList = document.getElementById('highscores');
const goBackBtn = document.getElementById('go-back-btn');
const clearScoresBtn = document.getElementById('clear-scores-btn');

let currentQuestionIndex = 0;
let time = 60;
let timer;

function startQuiz() {
  document.querySelector('.screen.active').classList.remove('active');
  questionScreen.classList.add('active');
  timer = setInterval(updateTimer, 1000);
  showQuestion();
}

function updateTimer() {
  time--;
  timerDisplay.textContent = `Time: ${time}`;
  if (time <= 0) {
    endQuiz();
  }
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.question;
  choicesList.innerHTML = '';
  currentQuestion.choices.forEach(choice => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = choice;
    button.onclick = checkAnswer;
    li.appendChild(button);
    choicesList.appendChild(li);
  });
}

function checkAnswer(event) {
  const selectedAnswer = event.target.textContent;
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedAnswer !== correctAnswer) {
    time -= 10;
    if (time < 0) time = 0;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
  clearInterval(timer);
  questionScreen.classList.remove('active');
  endScreen.classList.add('active');
  finalScoreDisplay.textContent = time;
}

function saveScore(event) {
  event.preventDefault();
  const initials = initialsInput.value.trim();
  if (initials) {
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    const newScore = { initials, score: time };
    highscores.push(newScore);
    localStorage.setItem('highscores', JSON.stringify(highscores));
    showHighscores();
  }
}

function showHighscores() {
  document.querySelector('.screen.active').classList.remove('active');
  highscoresScreen.classList.add('active');
  highscoresList.innerHTML = '';
  const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
  highscores.sort((a, b) => b.score - a.score);
  highscores.forEach(score => {
    const li = document.createElement('li');
    li.textContent = `${score.initials} - ${score.score}`;
    highscoresList.appendChild(li);
  });
}

function clearHighscores() {
  localStorage.removeItem('highscores');
  showHighscores();
}

function goBack() {
  highscoresScreen.classList.remove('active');
  document.getElementById('start-screen').classList.add('active');
  currentQuestionIndex = 0;
  time = 60;
  timerDisplay.textContent = `Time: ${time}`;
}

startBtn.addEventListener('click', startQuiz);
scoreForm.addEventListener('submit', saveScore);
goBackBtn.addEventListener('click', goBack);
clearScoresBtn.addEventListener('click', clearHighscores);
