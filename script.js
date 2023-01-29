let starterPage = document.getElementById("starterPage");
let startBttnEl = document.createElement("button");
startBttnEl.id = "bttn";
let introEl1 = document.createElement("h1");
let introEl2 = document.createElement("h2");
let introEl3 = document.createElement("h3");
let introEl4 = document.createElement("h3");
let introEl5 = document.createElement("h3");

let quizPageEl = document.getElementById("quizPage");
let highScoresEl = document.getElementById("highScores");
let timerEl = document.getElementById("timer");
let questionEl = document.getElementById("question");
let optionsEl = document.getElementById("options");

let optionbtn1 = document.createElement("button");
optionbtn1.className = "optionsButtons";
let optionbtn2 = document.createElement("button");
optionbtn2.className = "optionsButtons";
let optionbtn3 = document.createElement("button");
optionbtn3.className = "optionsButtons";
let optionbtn4 = document.createElement("button");
optionbtn4.className = "optionsButtons";
var questionNumber = 0;
var start = 60;
let confirmationLine = document.createElement("div");

var confirmation = "";

let confirmationEl = document.createElement("h3");
confirmationEl.id = "confirmationText";

let resultPageEl = document.getElementById("resultPage");
let resultEl1 = document.createElement("h1");
resultEl1.id = "AllDoneP"
let resultEl2 = document.createElement("h2");
let resultEl3 = document.createElement("h3");
let intputEl = document.createElement("input");
intputEl.id = "input";
let submitBtnEl = document.createElement("button");
submitBtnEl.id = "submitBtn";
let resultInitals = document.createElement("div");
resultInitals.className = "resultInitials";
var score = 0;
let finalPageEl = document.getElementById("finalPage");
let scoreLineEl = document.createElement("div")
   scoreLineEl.id = "scoreLine";
let highScoresParagraphEl = document.createElement("h2")
  highScoresParagraphEl.id = "highScoresParagraph";
let goBackBtn = document.createElement("button");
  goBackBtn.className = "goBackBtn"
let clearHighScoresBtn = document.createElement("button");
clearHighScoresBtn.className = "clearScoreBtn"



// function running introduction page
let StarterPage = function () {
  quizPageEl.style.visibility = "hidden";
  introEl1.textContent = "Quiz";
  introEl2.textContent = "Coding challenge";
  introEl3.textContent = "Test your knowledge of JavaScript with a multiple choice quiz.";
  introEl4.textContent = "Rules: you have 60 seconds to answer 5 questions, 1 second equals 1 point, if your answer is wrong you lose 5 points, correct answers do not add points, remaing seconds is your final score .";
  introEl5.textContent = "Good Luck!";
  startBttnEl.textContent = "START";

  starterPage.appendChild(introEl1);
  starterPage.appendChild(introEl2);
  starterPage.appendChild(introEl3);
  starterPage.appendChild(introEl4);
  starterPage.appendChild(introEl5);
  starterPage.appendChild(startBttnEl);
};

StarterPage();

let questions = [
  {
    question: "How to stop an interval timer in Javascript?",
    options: ["clearInterval", "clearTimer", "timerOver", "all of the above"],
    answer: "clearInterval",
  },
  {
    question: "Determine the result: String(“Hello”) === “Hello”;",
    options: ["SyntaxError", "undefiend", "true", "false"],
    answer: "true",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    options: ["var", "let", "constant", "const"],
    answer: "const",
  },
  {
    question:"Which function is used to serialize an object into a JSON string in Javascript?",
    options: ["stringify()", "parse()", "convert()", "all of the above"],
    answer: "stringify()",
  },
  {
    question:"Which of the following will write the message 'Hello World!' in an alert box?",
    options: ["alertBox('Hello World!')"," alert(Hello World)","msgAlert('Hello World!')","alert('Hello World!')",],
    answer: "alert('Hello World!')",
  },
];

function hideStarterPage() {
  starterPage.style.visibility = "hidden";
  starterPage.style.display = "none";
}

function showHighScoresEl() {
  highScoresEl.innerText = "View High Scores";
}

function showQuizPage() {
  console.log("showQuestions");
  quizPageEl.style.visibility = "visible";

  runTimer();
  showHighScoresEl();
  showQuestions();
}
function showQuestions() {
  if (questionNumber > questions.length - 1) {
    showResultsPage();
  } else {
    questionEl.innerText = questions[questionNumber].question;
    showOptions(questionNumber);
  }
}

function showOptions(itterable) {
  optionbtn1.textContent = questions[itterable].options[0];
  optionbtn2.textContent = questions[itterable].options[1];
  optionbtn3.textContent = questions[itterable].options[2];
  optionbtn4.textContent = questions[itterable].options[3];

  optionsEl.appendChild(optionbtn1);
  optionsEl.appendChild(optionbtn2);
  optionsEl.appendChild(optionbtn3);
  optionsEl.appendChild(optionbtn4);
}

var theTimer;

function runTimer() {
  function doThis() {
    var end = 0;
    start--;
    //console.log(start);
    timerEl.innerText = "Timer: " + start.toString();
    if (start <= end) {
      window.clearInterval(theTimer);
      
      showResultsPage();
    }
  }

theTimer = window.setInterval(doThis, 1000);
  console.log("timer starts");
}

function runQuiz() {
  console.log("quiz button clicked");
  hideStarterPage();
  showQuizPage();
}

function checkedOption(event) {
  let buttonClicked = event.target.textContent;
  //console.log(buttonClicked);
  if (buttonClicked === questions[questionNumber].answer) {
    console.log(
      "inside if statement ",
      questions[questionNumber].answer,
      " ",
      questionNumber
    );
    score++;
    confirmation = "Correct!";
  } else {
    start = start - 5;
    confirmation = "Wrong!";
  }
  confirmationEl.textContent = confirmation;
  quizPageEl.appendChild(confirmationLine);
  quizPageEl.appendChild(confirmationEl);
  questionNumber++;
  confirmationLine.className = "line";
  if (start <= 0 || questionNumber > questions.length - 1) {
    console.log("checking condition");
    confirmationEl.textContent = confirmation;
    confirmationLine.className = "line";
   
  }

  showQuestions();
}
function showResultsPage() {
  window.clearInterval(theTimer);
  quizPageEl.style.display = "none";
  let finalTime = start.toString();
  resultEl1.textContent = "All done!";
  resultEl2.textContent = `Your final score is: ${finalTime}`;
  resultEl3.textContent = "Enter initials";
  intputEl.type = "text";
  submitBtnEl.textContent = "submit";

  resultPageEl.appendChild(resultEl1);
  resultPageEl.appendChild(resultEl2);
  resultPageEl.appendChild(resultEl3);
  resultInitals.appendChild(intputEl);
  resultInitals.appendChild(submitBtnEl);
  resultPageEl.appendChild(resultInitals);
  
  resultPageEl.appendChild(confirmationLine);
  resultPageEl.appendChild(confirmationEl);
  
}
function submitFunc() {
 console.log(intputEl.value)
 localStorage.setItem(intputEl.value, start.toString())
 console.log({...localStorage})
 showHighScorePage()
}

function showHighScorePage(){
    resultPageEl.style.display = "none"
    var keyList = Object.keys(localStorage)
    var dataMap = new Map();
    keyList.forEach((key)=>{
        dataMap.set(localStorage.getItem(key),key);
    });
    console.log(dataMap);
    dataMap.forEach((key, value)=>{
        console.log(key, value)
        var dumpP = document.createElement('p')
        dumpP.id = "dumpP"
        dumpP.textContent = `${key}: ${value}`
        scoreLineEl.appendChild(dumpP)
    })
    goBackBtn.textContent = "Go Back"
    clearHighScoresBtn.textContent = "Clear High Scores"
    highScoresParagraphEl.textContent = "High Scores"
    ///////////
    var highScoresPageBtnsEl = document.createElement("div");
    highScoresPageBtnsEl.id = "highScoresPageBtns";
    highScoresPageBtnsEl.appendChild(goBackBtn);
    highScoresPageBtnsEl.appendChild(clearHighScoresBtn)
    finalPageEl.appendChild(highScoresPageBtnsEl)
    ///////////
    finalPageEl.appendChild(highScoresParagraphEl)
    finalPageEl.appendChild(scoreLineEl)
    finalPageEl.appendChild(highScoresPageBtnsEl)
    // finalPageEl.appendChild(goBackBtn)
    // finalPageEl.appendChild(clearHighScoresBtn)
}
//////////////////
// function clearStorage() {
    
//     console.log("clear high scores button clicked");
//     localStorage.clear();
// }


// function goBackToStarterPage(){
//     console.log("go back button clicked")
//     quizPageEl.style.visibility = "visible";
//     StarterPage();
// }
var goBackToStarterPage = function() {
	location.reload();
	};


////////////////

optionsEl.addEventListener("click", checkedOption);

startBttnEl.addEventListener("click", runQuiz);

submitBtnEl.addEventListener("click",submitFunc);

////////////////
goBackBtn.addEventListener("click",goBackToStarterPage);

// clearHighScoresBtn.addEventListener("click",clearStorage);
// ///////////////