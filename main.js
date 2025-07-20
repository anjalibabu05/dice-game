const diceImages={
    1:"images/dice-1.webp",
    2:"images/dice-2.webp",
    3:"images/dice-3.webp",
    4:"images/dice-4.webp",
    5:"images/dice-5.webp",
    6:"images/dice-6.webp",
}
let score1=0;
let score2=0;
const rollSound=new Audio("images/dice-142528 (1).mp3");


function rolldice(){

    const player1Name=document.getElementById("player1Name").value || "Player-1"
    const player2Name=document.getElementById("player2Name").value || "Player-2"

    document.getElementById("p1Label").innerText=player1Name;
    document.getElementById("p2Label").innerText=player2Name;

    const  player1=Math.floor(Math.random()*6)+1;
    const  player2=Math.floor(Math.random()*6)+1;
    // console.log(player1);
    // console.log(player2);
    
    const dice1container= document.getElementById("dice1-container");
    const dice2container=document.getElementById("dice2-container");

    dice1container.innerHTML="";
    dice2container.innerHTML="";

    const img1=document.createElement("img");
    img1.src=diceImages[player1];
    img1.alt = `Dice ${player1}`;
    img1.className = "dice-img";


    const img2=document.createElement('img')
    img2.src=diceImages[player2];
    img2.alt = `Dice ${player2}`;
    img2.className = "dice-img";

    dice1container.appendChild(img1);
    dice2container.appendChild(img2);

    const results=document.getElementById("result");
    if(player1>player2){
        results.innerText=`${player1Name} Wins!! `
        results.className="text-success fs-4";
        score1++;
    }else if(player2>player1){
        results.innerText=`${player2Name} Wins!! `
        results.className="text-primary fs-4"
        score2++;
    } else {
    results.innerText = "It's a Draw!  ";
    results.className = "text-warning fs-4";
  }
  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;

  if (typeof rollSound.play === "function") {
    rollSound.play().catch(() => {});
  }
}