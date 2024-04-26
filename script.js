let userscore = 0;
let compscore = 0;
let boxes = document.querySelectorAll(".box");
let win = document.querySelector("#win");
const genCompChoice = ( ) =>{
    const option = [ "rock","paper","scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
};
let userscore1 = document.querySelector("#user-score");
let compscore1 = document.querySelector("#comp-score");

const showWinner =(userWin ,userChoice ,CompChoice) => {
    if(userWin){
        userscore++;
        userscore1.innerText = userscore;
        win.innerText = `you win! ${userChoice} beats ${CompChoice}`;
        win.style.background = "green"
    }
    else{
        compscore++;
        compscore1.innerText = compscore;
        win.innerText =`you lose... ${userChoice} beats ${CompChoice}`;
        win.style.background = "red"
    }
}
const playgame =(userChoice)=>
{
    console.log("userChoice=",userChoice);
    const CompChoice = genCompChoice();
    console.log("compChoice=", CompChoice);

    if(userChoice === CompChoice)
    {
        console.log("Game was draw..");
        win.innerText = `game was draw play again... ${userChoice} beats ${CompChoice}`;
        win.style.background = "rgb(56, 55, 55)"
    }
    else{
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = CompChoice === "paper"? false : true;
        }
        else if(userChoice === "paper")
            {
                userWin = CompChoice === "scissor"? false : true;
            
        }
        else
        {
            userWin = CompChoice === "rock"? false : true;
        
        }
        showWinner(userWin ,userChoice ,CompChoice);
    }
};
boxes.forEach((box)=>{
box.addEventListener("click" ,() => {
    const userChoice = box.getAttribute("id")
   
    playgame(userChoice);
});
});