"use strict";

const answerEls = $a(".answer");
const quizEl = $(".quiz_text");
const a_text = $("#a_text");
const b_text = $("#b_text");
const c_text = $("#c_text");
const d_text = $("#d_text");
const submitBtn = $(".submit-btn");
const quiz = $("#quiz");
const restartBtn=$(".restarting");





let currentQuiz = 0;
let score = 0;
loadQuiz();

// data dan malumotlarni dynamic joylash func
function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    quizEl.innerHTML = currentQuizData.questions;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

};

function getSelected() {

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });

    return answer
};

// delete checked 
function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
};


// keyingi savolga o'tish func
submitBtn.addEventListener("click", () => {

    //check to see answer
    const answerr = getSelected();
    console.log(answerr);
    // && answerrr  === quizData[currentQuiz]
    if (answerr) {
        if (answerr === quizData[currentQuiz].currects) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2 class="text-center mx-4 my-3">You answered correctly at ${score} / ${quizData.length} questions.</h2> <button onclick="location.reload()" class="restarting">Reload</button>`
            
          
            // alert("Ajpyib! Savol-javob tugadi, agar qo'lim bo'lganida sizga besh tashlardim");
        }
    }


});







