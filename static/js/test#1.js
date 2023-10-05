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
        question: "Медленный нагрев, медленное остывание - это?",
        a: "Отжиг",
        b: "Плавление",
        c: "Выгорание",
        d: "Согревание",
        correct: "a",
    },
    {
        question: "Сколько существует родов отжига?",
        a: "1",
        b: "4",
        c: "2",
        d: "3",
        correct: "c",
    },
    {
        question: "Металлическая заготовка медленно разогревается и быстро остужается - это?",
        a: "Скалка",
        b: "Закалка",
        c: "Резкое охлаждение",
        d: "Химико-термическая обработка",
        correct: "b",
    },
    {
        question: "Поверхность металла могут насыщать углеродом - это?",
        a: "Цементизация",
        b: "Цианирование",
        c: "Диффузная металлизация",
        d: "Борирование",
        correct: "a",
    },
    {
        question: "Миша крутой?",
        a: "Крут",
        b: "Это неправильный ответ",
        c: "Это неправильный ответ",
        d: "Это неправильный ответ",
        correct: "a",
    },
    {
        question: "Староста топ?",
        a: "Так точно",
        b: "Это неправильный ответ",
        c: "Это неправильный ответ",
        d: "Это неправильный ответ",
        correct: "a",
    },
    {
        question: "Леня крутой? Леня гигачат?",
        a: "Леня лучший",
        b: "Леня гигачад",
        c: "Леня лучший и гигачат",
        d: "Это неправильный ответ",
        correct: "c",
    }
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