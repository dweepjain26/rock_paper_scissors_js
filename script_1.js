let images=document.querySelectorAll("img");
let playgame=document.querySelectorAll(".games");
let scoreUser=document.querySelector(".scoreY");
let scoreComp=document.querySelector(".scoreC");
let winning=document.querySelector(".winsStat");
let newGame=document.querySelector(".newg");
let userScore=0;
let compScore=0;


images.forEach((image)=>{
    image.addEventListener("click",()=>{
        let userChoice = image.getAttribute("id");
        console.log(userChoice);
        let userCho;
        let arr=["rock","paper","scissors"];
        ranIdx=Math.floor(Math.random()*3);
        compChoice=arr[ranIdx];
        console.log(compChoice);
        if(userChoice===compChoice){
            console.log("match draw");
            userDraw="true";
        }else if(userChoice==="rock" && compChoice==="paper"){
            console.log("comp wins");
            userCho="false";
            userDraw="false";
        }else if(userChoice==="paper" && compChoice==="scissors"){
            console.log("comp wins");
            userCho="false";
            userDraw="false";
        }else if(userChoice==="scissors" && compChoice==="rock"){
            console.log("comp wins");
            userCho="false";
            userDraw="false";
        }else{
            console.log("you win");
            userCho="true";
            userDraw="false";
        }
        if(userCho==="true" && userDraw==="false"){
            userScore++;
            console.log(userScore);
            scoreUser.innerText= userScore;
            winning.innerText=`You won! ${userChoice} beats ${compChoice}`;
            winning.classList.add("winuser");
            winning.classList.remove("wincom");
            winning.classList.remove("windraw"); 
        }
        else if(userDraw==="true"){
            winning.innerText=`Draw! You Choose ${userChoice} and Computer also choose ${compChoice}`;
            winning.classList.add("windraw");
            winning.classList.remove("winuser");
            winning.classList.remove("wincom");
            return userScore;
            return compScore;
        }else
        {
            compScore++;
            console.log(compScore);
            scoreComp.innerText=compScore;
            winning.innerText=`Computer Won! ${compChoice} beats ${userChoice}`;
            winning.classList.add("wincom");
            winning.classList.remove("winuser");
            winning.classList.remove("windraw");
        }
        
})
});

newGame.addEventListener("click",()=>{
      userScore=0;
      compScore=0;
     scoreUser.innerText= userScore;
     scoreComp.innerText= compScore;
     winning.innerText="Play your Move";
     winning.classList.remove("winuser");
     winning.classList.remove("windraw");
     winning.classList.remove("wincom");
})