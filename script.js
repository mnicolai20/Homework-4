// Define variables
var start = document.getElementById("start");
var timeEl = document.getElementById("time");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question")
var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var score = document.getElementById("score");
var secondsLeft = 60;
var highscore = localStorage.getItem("highscore")

// Set quiz questions
let questions = [
    {
        question: "Bootstrap is a free and open-source ___ framework.",
        choiceA: "Javascript",
        choiceB: "CSS",
        choiceC: "JQuery",

        correct: "B"
    },
    {
        question: "Who created Javascript?",
        choiceA: "Brendan Eich",
        choiceB: "Bill Gates",
        choiceC: "Hakon Wium Lie",

        correct: "A"
    },
    {
        question: "What year did Javascript first appear?",
        choiceA: "2006",
        choiceB: "1999",
        choiceC: "1995",

        correct: "C"
    }
]

// Set variables for question rendering
const lastQuestionindex = questions.length - 1;
let runningQuestionIndex = 0;

// Function to render questions
function renderQuestion(){
   let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

// Function to proceed after correct answer
function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct === answer){
        score++;
    
    }
    else if(runningQuestionIndex < lastQuestionindex){
        runningQuestionIndex++;
        renderQuestion();
    }
    else if(runningQuestionIndex == lastQuestionindex){
        alert("You Scored "+score+ " point(s)"  )
    }
    else{
        scoreRender();
    }
}

// Function to being quiz to use with onClick event
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "initial";
}

// Function to create time interval to use with onClick event
 function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " Time Remaining";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
  
//   Function to alert message if time expires
  function sendMessage() {
    timeEl.textContent = " ";
  
    alert("Time is up! You Scored "+score+ " point(s)" )
  
  }

  score = 0;

//   Store highscores in local storage
 if(highscore !== null){
     if(score > highscore){
         localStorage.setItem("highscore", score);
     }
 }
 else{
     localStorage.setItem("highscore", JSON.stringify(score));
 }

//  onCLick events to begin quiz and start timer
 start.addEventListener("click", setTime);
 start.addEventListener("click", startQuiz);