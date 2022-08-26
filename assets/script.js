//Create object for questions

var questions = [

    {
        question: "This is quetion 1?",
        qanswerSelection: ['a answer', 'b answer', 'c answer', 'd answer'],
        answer: 'a answer'
    },

    {
        question: "This is quetion 1?",
        qanswerSelection: ['a answer', 'b answer', 'c answer', 'd answer'],
        answer: 'a answer'
    },
    
    {
        question: "This is quetion 1?",
        qanswerSelection: ['a answer', 'b answer', 'c answer', 'd answer'],
        answer: 'a answer'
    },


]

//define variables for div spots via getElementById

var showTime = document.getElementById('spot-1')
var showScore = document.getElementById('spot-2')
var button = document.getElementById('button')



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






//Finction to Display the question


//Button functionalites

button.addEventListener('click', startTimer)







