const startEl = document.getElementById("start")       // these const are targeting the button id from HTML
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const timerEl = document.getElementById("timer")


let interval                             //whenever you create a variable you have to start with the word let
let timeLeft = 1500;                        // this is a variable and timeLeft is showing how much time in this case 25 minutes

function updateTimer(){

    let minutes= Math.floor(timeLeft / 60);
    let seconds= timeLeft % 60;
    let formattedTime = `${minutes.toString(). 
    padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;


    timerEl.innerHTML = formattedTime;
    

}

function startTimer(){
   // console.log("start");

   interval= setInterval (()=>{

    timeLeft--;

    updateTimer();

    if(timeLeft === 0){
        clearInterval(interval)
        alert("Times Up!");      //if is an alert function basically its saying that if the time reaches 0 however much time is left once it reaches it, a message pops up
        timeLeft = 1500;
        updateTimer();
    }

   }, 1000);

    

 


   
}



function stopTimer(){
   // console.log("stop");
   clearInterval(interval);            // in this case were clearing the time stopping it




}

function resetTimer(){
    //console.log("reset");


    clearInterval(interval);  
    timeLeft = 1500;
    updateTimer();
}



startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)
resetEl.addEventListener("click", resetTimer)
