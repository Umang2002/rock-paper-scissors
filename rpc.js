const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const model = document.querySelector(".model");


const scoreboard = {
    player : 0,
    computer : 0
}

function play(e){
const playerchoice = e.target.id;
restart.style.display = "inline-block";
const computerchoice = getcomputerchoice();
const winner = getwinner(playerchoice,computerchoice)
showwinner(winner,computerchoice);
restart.addEventListener("click",resetgame);

}

//events


//get computer choice

function getcomputerchoice() {
const rand = Math.random();
if (rand <0.34){
    return "rock";

}else if(rand <= 0.67){
     return "paper";
}else {
    return "scissors";
}

}

 function getwinner(p,c){
     if (p===c){
         return "draw";

     }else if (p === "rock"){
           if(c=== "paper"){
               return "computer";
           }else {
               return "player";
           }
        }
        else if (p==="paper"){
            if (c === "rock"){
                return "player";

            }else{
                return "computer";
            }

        }
        else if (p === "scissors"){
            if (c === "rock"){
                  return "computer";
            }
            else {
                return "player";
            }
        }
 }
 
 function showwinner(winner,computerchoice){
     if (winner === "player"){
         scoreboard.player++;
         result.innerHTML= `
         <button id = "button">X</button>
         <h1 class = "text-win"> You Win </h1>
           <i class = "fas fa-hand-${computerchoice} fa-10x" id = "player"></i>
           <p>computer chose <strong>${computerchoice}</strong></p>
         `;
     }
     else if (winner === "computer"){
        scoreboard.computer++;
        result.innerHTML= `
        <button id = "button">X</button>
        <h1 class = "text-lose"> You Lose </h1>
          <i class = "fas fa-hand-${computerchoice} fa-10x" id = "player"></i>
          <p>Computer Chose <strong>${computerchoice}</strong></p>
        `;
     }else {
        result.innerHTML= `
        <button id = "button">X</button>
        <h1>It's Draw </h1>
        <i class = "fas fa-hand-${computerchoice} fa-10x" id = "player"></i>
        <p>Computer Chose <strong>${computerchoice}</strong></p>
      `;
     }
     score.innerHTML = `<p>Player : ${scoreboard.player}</p>
     <p>Computer : ${scoreboard.computer}</p>
     `;
     model.style.display = "block";
 }
 function clearmodel(e){
     if(e.target == model){
         model.style.display= "none";
     }

 }
 function resetgame(){
      scoreboard.player = 0;
      scoreboard.computer= 0;
      score.innerHTML= `
      <p>Player : 0</p>
      <p>computer : 0 </p>
      `;
 }
 


 choices.forEach(choice => choice.addEventListener("click",play));
 window.addEventListener("click",clearmodel);
 