const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    // Add more questions with options and correct answers
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const answerButtonsContainer = document.getElementById("answer-buttons");
const feedbackContainer = document.getElementById("feedback-container");
const scoreContainer = document.getElementById("score");

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const question = quizData[currentQuestion];
    questionContainer.innerText = question.question;
    answerButtonsContainer.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("btn");
        button.addEventListener("click", () => checkAnswer(option));
        answerButtonsContainer.appendChild(button);
    });
}

function checkAnswer(answer) {
    const question = quizData[currentQuestion];
    if (answer === question.correctAnswer) {
        feedbackContainer.innerText = "Correct!";
        feedbackContainer.style.color = "#2ecc71"; // Green
        score++;
    } else {
        feedbackContainer.innerText = "Incorrect!";
        feedbackContainer.style.color = "#e74c3c"; // Red
    }

    // Disable answer buttons after selecting an option
    answerButtonsContainer.innerHTML = "";

    // Display the correct answer
    const correctAnswerIndex = question.options.indexOf(question.correctAnswer);
    answerButtonsContainer.innerHTML = `<p>Correct Answer: ${question.options[correctAnswerIndex]}</p>`;

    // Move to the next question
    currentQuestion++;

    // Update the score
    scoreContainer.innerText = score;

    // Show next button or end the quiz
    if (currentQuestion < quizData.length) {
        document.getElementById("next-button").style.display = "block";
    } else {
        document.getElementById("next-button").style.display = "none";
        feedbackContainer.innerText = `Quiz completed! Your final score is ${score}/${quizData.length}`;
    }
}

function nextQuestion() {
    showQuestion();
    feedbackContainer.innerText = "";
}
