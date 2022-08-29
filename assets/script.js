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
        answer: 'b answer'
    },
    
    {
        problem: "This is quetion 3",
        answerSelection: ['i answer', 'j answer', 'k answer', 'l answer'],
        answer: 'b answer'
    },

]


//define variables for div spots via getElementById

var showTime = document.getElementById('spot-1')
var showScore = document.getElementById('spot-2')
var button = document.getElementById('button')
var showQuestion = document.getElementById('spot-3')
var questionNum = 0 //This is to give the array vallue of the questions
var choices = document.getElementById('spot-4')

//Function to start timer
var timeLeft = 10
function startTimer () {
    
    let startTime = setInterval(function thisFunction (){
        timeLeft--;
        showTime.textContent = timeLeft

        if(timeLeft === 0){
            console.log('game over')
            clearInterval(startTime)
            timeLeft = 10
            
        }else{

        }
    },1000)
      
};

function displayQuestion() {
    showQuestion.innerHTML = questions[questionNum].problem//This is the order to target questions
    choices.innerText = " "
    
    //Create for loop to go through questions
    for ( i =0; i<questions[questionNum].answerSelection.length; i++) {
        let selection = document.createElement("button")
        selection.setAttribute('data-id', i)
        selection.innerText = questions[questionNum].answerSelection[i]
        choices.appendChild(selection)
        selection.addEventListener('click', function(event) {
            event.stopPropagation();

            showQuestion.innerHTML = "";
            

            if(selection.innerText === questions[questionNum].answer) {
                questionNum ++;
                displayQuestion();
                return
            }else{
                questionNum ++;
                displayQuestion();
                return
            }
            
        })
        selection.append()
    };


    
};







//Finction to Display the question


//Button functionalites

button.addEventListener('click', startTimer)
button.addEventListener('click', displayQuestion)







