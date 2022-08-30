//Create object for questions

var questions = [

    {
        problem: "This is quetion 1?",
        answerSelection: ['a answer', 'b answer', 'c answer', 'd answer'],
        answer: 'a answer'
    },

    {
        problem: "This is quetion 2?",
        answerSelection: ['e answer', 'f answer', 'g answer', 'h answer'],
        answer: 'e answer'
    },
    
    {
        problem: "This is quetion 3?",
        answerSelection: ['i answer', 'j answer', 'k answer', 'l answer'],
        answer: 'i answer'
    },

    {
        problem: 'game over',
        answerSelection: ['game over'],
        answer: 'game over',
    }

];


//define variables for div spots via getElementById

var showTime = document.getElementById('spot-1')
var showScore = document.getElementById('spot-2')
var button = document.getElementById('button')
var showQuestion = document.getElementById('spot-3')
var questionNum = 0 //This is to give the array vallue of the questions
var choices = document.getElementById('spot-4')
var showScore = document.getElementById('spot-5')
var score = 0
var problem = 0

//Function to start timer
var timeLeft = 10
function startTimer () {
    
    let startTime = setInterval(function thisFunction (){
        timeLeft--;
        showTime.innerHTML = 'Time: ' + timeLeft

        if(timeLeft === 0){
            console.log('game over')
            clearInterval(startTime)
            timeLeft = 10
            
        }else{

        }
    },1000)
      
};

//Finction to Display the question

function displayQuestion() {
    //showQuestion.innerHTML = questions[questionNum].problem//This is the order to target questions
    choices.innerText = " "
    removeEls(button)
    showScore.innerHTML = `Score:${score}`
    
    
    //Creates answer selection buttons
    for ( i =0; i<4; i++) {
        showQuestion.innerHTML =questions[questionNum].problem
        let selection = document.createElement("button")
        selection.setAttribute('data-id', i)
        selection.innerText = questions[questionNum].answerSelection[i]
        choices.appendChild(selection)
        selection.addEventListener('click', function(event) {
            event.stopPropagation();

            showQuestion.innerHTML = "";
            

                if(selection.innerText === questions[questionNum].answer && timeLeft > 0) {
                    questionNum ++;
                    console.log(questionNum)
                    timeLeft+= 2
                    score++;
                    displayQuestion();
                    return
                } else if(selection.innerText === questions[questionNum].answer && timeleft > 0) {
                    questionNum ++;
                    console.log(questionNum)
                    timeLeft -= 2;
                    score--;
                    displayQuestion();
                    return
                }else if (selection.innerText === 'game over'){
                    gameOver();
                }
                if(selection.innerText === 'game over') {
                    gameOver();
                }

                showQuestion.innerHTML = "";
            })       
        }
        //selection.append()
    };

//Function to add score

//function addScore(){
//let currentScore = document.createElement('div')
//currentScore.setAttribute("id", "current-score")
//for (i=0)
//}


//Button functionalites

button.addEventListener('click', startTimer)
button.addEventListener('click', displayQuestion)


//Function to delete elements
const removeEls = (...els) => {
    for (let el of els) el.remove();
  }

//Fyunction to run end of game
function gameOver () {
    console.log('game-over')
}




