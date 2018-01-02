var currentQuestion = 0;
var score = 0;
var totalQues = questions.length;

var container = document.getElementById("quizContainer");
var quesElement = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextBtn = document.getElementById("nextButton");
var resultCount = document.getElementById("result");

function loadQuestion(queIndex){
    var q = questions[queIndex];
    quesElement.textContent = (queIndex + 1) + ". " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

function loadNextQuestion(){
    var selectedOpt = document.querySelector("input[type=radio]:checked");
    if(!selectedOpt){
        alert("Please Select your Value");
        return;
    }
    var answer = selectedOpt.value;
    if(questions[currentQuestion].answer == answer)
    score +=10;

    selectedOpt.checked = false;
    currentQuestion++;

    if(currentQuestion == totalQues - 1){
        nextBtn.textContent = "Finish";
    }

    if(currentQuestion == totalQues){
        container.style.display = "none";
        resultCount.style.display = "";
        resultCount.textContent = "Your Score:  " + score;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
