
const questionOne = document.querySelector('#question-1');
const questionTwo = document.querySelector('#question-2');
const questionThree = document.querySelector('#question-3');
const questionFour = document.querySelector('#question-4');
const questionFive = document.querySelector('#question-5');
const quizContainer = document.querySelector('#quiz-container');


let questionsRemaining = 5;
let totalScore = 0;


quizContainer.addEventListener('click',checkAnswer);



function checkAnswer(e){
  //get answer
  let userButton = e.target;
  let userAnswer = e.target.getAttribute('value');
  let correctAnswer = e.target.parentNode.querySelector('.correct-button');


  if (userAnswer == 'correct'){
    totalScore += 1;
  }

  if(userButton.classList.contains('incorrect-button') ||(userButton.classList.contains('correct-button'))){
    questionsRemaining -=1;

    let incorrectButtons = e.target.parentNode.getElementsByClassName('incorrect-button');
    let correctButtons = e.target.parentNode.getElementsByClassName('correct-button');

    for(i = 0; i < incorrectButtons.length; i++){
      incorrectButtons[i].disabled = true;
    }
    for(i = 0; i < correctButtons.length; i++){
      correctButtons[i].disabled = true;
    }

     //call function for displaying icons
     displayAnswerIcons(userButton,userAnswer,correctAnswer);

     //call function for calculating score and displaying when questions remaining = 0
     questionTracker(questionsRemaining,totalScore);
    
  }
  e.preventDefault();
}

function displayAnswerIcons(userButton,userAnswer,correctAnswer){
  //create element for the icon and attach the class to the element for incorrect icons
  let incorrectIcon = document.createElement('i');
  incorrectIcon.className = 'fas fa-times';

  //create element,attach class for correct icons
  let correctIcon = document.createElement('i');
  correctIcon.className = 'fas fa-check';

  if(userAnswer == 'incorrect'){
    userButton.appendChild(incorrectIcon);
    correctAnswer.appendChild(correctIcon);

  }else{
    correctAnswer.appendChild(correctIcon);
    
  }

  correctAnswer.classList.add('.answers');
 
}

function questionTracker(questionsRemaining,totalScore){
  
  let questionsRemainingOutput = document.querySelector('.questions-remaining-output');
  questionsRemainingOutput.textContent = questionsRemaining;
  
  let totalScoreOutput = document.querySelector('.total-score-output');
  if(questionsRemaining == 0){
    totalScoreOutput.textContent = `${totalScore} / 5`;

    console.log(totalScoreOutput);
     
  }
}



