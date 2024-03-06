//HTML elements turned into variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const timerDisplay = document.getElementById('timer');

// variables
let timeLeft = 60; // time in seconds (example 300 seconds => 5 minutes)
let timer;

function startTimer(duration, display) {
  let minutes, seconds;
  timer = setInterval(() => {
    // Calculate minutes and the seconds from "duration"
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    // Format minutes and seconds to have two digits
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the timer display on the page
    display.textContent = minutes + ':' + seconds;

    // Decrease the duration
    if (--duration < 0) {
      // If the timer runs out, stop the timer and show the results
      clearInterval(timer);
      showResults();
    } else {
      // Update 'timeLeft' with the current duration
      timeLeft = duration;
    }
  }, 1000);
}

const myQuestions = [
  {
    question: 'Who is the first President of the United States?',
    answers: {
      a: 'Abraham Lincoln',
      b: 'George Washington',
      c: 'Thomas Jefferson',
    },
    correctAnswer: 'b',
  },
  {
    question: 'What is the capital of France?',
    answers: {
      a: 'London',
      b: 'Berlin',
      c: 'Paris',
    },
    correctAnswer: 'c',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: {
      a: 'Mars',
      b: 'Jupiter',
      c: 'Saturn',
    },
    correctAnswer: 'a',
  },
];

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question}</div>
      <div class="answers"> ${answers.join('')} </div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  clearInterval(timer); // stop the timer
  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} correct`;
}

buildQuiz();
startTimer(timeLeft, timerDisplay);


// event listner 
submitButton.addEventListener('click', showResults);
