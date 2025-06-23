const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');

const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Tiger", correct: false },
            { text: "Lion", correct: true },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What color do you get when you mix red and white?",
        answers: [
            { text: "Pink", correct: true },
            { text: "Orange", correct: false },
            { text: "Purple", correct: false },
            { text: "Brown", correct: false }
        ]
    },
    {
        question: "In which country did the game of chess originate?",
        answers: [
            { text: "China", correct: false },
            { text: "India", correct: true },
            { text: "Persia", correct: false },
            { text: "Egypt", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Which superhero is known as the 'Caped Crusader'?",
        answers: [
            { text: "Superman", correct: false },
            { text: "Iron Man", correct: false },
            { text: "Batman", correct: true },
            { text: "Spider-Man", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hidden');
    scoreContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerHTML = "";
    const questionElement = document.createElement('h3');
    questionElement.innerText = question.question;
    questionContainer.appendChild(questionElement);

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-button');
        button.addEventListener('click', () => selectAnswer(answer));
        questionContainer.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
        alert("🎉 Correct! Well done.");
    } else {
        alert("❌ Oops! Better luck on the next one.");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    
    let message = `You scored ${score} out of ${questions.length}!`;

    if (score === questions.length) {
        message += " 🏆 Perfect score! You're a genius!";
    } else if (score >= questions.length / 2) {
        message += " 🎉 Great job!";
    } else {
        message += " 😅 Keep practicing!";
    }

    scoreContainer.innerText = message;
    nextButton.classList.remove('hidden');
}

nextButton.addEventListener('click', startQuiz);
startQuiz();
