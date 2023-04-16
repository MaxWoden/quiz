"use strict";
//====================================================
const $ = document.querySelector.bind(document);

const quiz = $(".quiz");
const warning = $(".warning");
const btnNext = $(".quiz_footer__btn-next");
let count = 0;
let userScore = 0;

if(typeof questions !== "undefined" && questions.length > 0){
    questions.sort(() => Math.random() - 0.5);
    questions.forEach(item => item.options.sort(() => Math.random() - 0.5));
    quiz.classList.remove("hidden");
    showQuestion(count);
} else warning.classList.remove("hidden");


function showQuestion(index){
    const title = $(".quiz_content__title");
    const list = $(".quiz_list");
    const total = $(".quiz_footer__total");
    const progress = $(".quiz__progress-inner");
    const code = $(".quiz_content__code-wrapper")

    if(questions[index].code){
        code.classList.remove("hidden");
        code.textContent = questions[index].code;
    } else code.classList.add("hidden");

    title.textContent = questions[index].question;

    list.innerHTML = "";
    questions[index].options.forEach(item => list.insertAdjacentHTML("beforeend", `<li class="quiz_list__option">${item}</li>`));

    const options = list.querySelectorAll(".quiz_list__option");
    options.forEach(item => item.setAttribute("onclick", "optionSelected(this)"));

    progress.style.width = Math.round((index + 1) * (100 / questions.length)) + "%";
    total.textContent = `${count + 1} из ${questions.length}`;
}


function optionSelected(answer){
    const userAnswer = answer.textContent;
    const correctAnswer = questions[count].answer;
    const options = document.querySelectorAll(".quiz_list__option");
    const iconCorrect = "<span>&#10004;</span>";
    const iconIncorrect = "<span>&#9940;</span>";

    if(userAnswer === correctAnswer) {
        userScore ++;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", iconCorrect);
    }
    else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", iconIncorrect);

        options.forEach(item =>{
            if(item.textContent === correctAnswer){
                setTimeout(() => {
                    item.classList.add("correct");
                    item.insertAdjacentHTML("beforeend", iconCorrect);
                }, 150);
            }
        })
    }
    options.forEach(item => item.classList.add("disabled"));
}


function nextQuestion(){
    const option = $(".quiz_list__option");
    const result = $(".result");
    const resultText = $(".result__text");

    if(count === questions.length - 1 && option.classList.contains("disabled")){
        quiz.classList.add("hidden");
        result.classList.remove("hidden");
        resultText.textContent = `Из ${questions.length} вопросов вы ответили правильно на ${userScore}`;
        return;
    }

    if(option.classList.contains("disabled")){
        count++;
        showQuestion(count);
    } else alert("Выберите вариант ответа");
}

$(".quiz_footer__btn-next").addEventListener("click", nextQuestion)












