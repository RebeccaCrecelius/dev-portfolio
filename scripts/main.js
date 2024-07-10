/*$(document).ready(function () {
    window.addEventListener("scroll", runOnScroll);

    function runOnScroll() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
        window.removeEventListener("scroll", runOnScroll);
    };
/*
    $('.hotspot').click(function () {
        $(this).toggleClass('clicked');
    });
});
*/

const questions = [
    {
        question: "Which languages were used to make this website?",
        choices: ["HTML, Ruby, and React", "HTML, CSS, and JavaScript", "CSS, Python, and French"],
        correct: 1
    },

    {
        question: "The best baseball team in Texas is which of the following?",
        choices: ["Cowboys", "Vikings", "Texas Rangers"],
        correct: 1
    },

    {
        question: "Which of the following is the ideal ice cream flavor?",
        choices: ["Rocky Road", "Pistachio", "Bacon"],
        correct: 1
    },
];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.textContent = questions[currentQuestion].choices[index];
});


    const feedback = document.getElementById("feedback");
        feedback.textContent = "";
}



function checkAnswer(selected) {
const feedback = document.getElementById("feedback");
if (selected === questions[currentQuestion].correct) {
    feedback.textContent = "Correct!";
    correctAnswers++;
} else {
    feedback.textContent = "Incorrect.";
}

setTimeOut (() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
    }
}, 2000);
}

showQuestion();

document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.nav-links').style.display = 
    (document.querySelector('.nav-links').style.display == 'none') ? 'block' : 'none';
 });