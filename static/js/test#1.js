const quizData = [
    {
        question: "Сколько всего существует видов способов изменения характеристик металла?",
        a: "7",
        b: "2",
        c: "4",
        d: "3",
        correct: "с",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Cars SUVs Sailboats",
        c: "Central Style Sheets",
        d: "3",
        correct: "a",
    },
    {
        question: "What year did JavaScript appear?",
        a: "1899",
        b: "2005",
        c: "1995",
        d: "3",
        correct: "c",
    },
    {
        question: "Who is the author of the JavaScript language?",
        a: "Bill Gates",
        b: "Brendan Eich",
        c: "Steve Jobs",
        d: "3",
        correct: "b",
    },
    {
        question: "What language is this project written in?",
        a: "JavaScript",
        b: "Ruby",
        c: "C++",
        d: "3",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Правильно отвеченные: ${score} из ${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Повторить</button>
            `;
        }
    }
});