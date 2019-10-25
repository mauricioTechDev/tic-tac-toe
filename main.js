
let gameBoard = document.querySelectorAll(".pushForResult")
const gamePlay = {
  click: 1,
  score: function(){
    for(let i=0; i < gameBoard.length; i++){
       gameBoard[i].addEventListener('click', () =>{
         // gameBoard[i].innerHTML = "X"
         if (gameBoard[i].innerHTML !== "X" && gameBoard[i].innerHTML !== "O"){
           if (this.click % 2 == 0){
             gameBoard[i].innerHTML = "X"
           } else {
             gameBoard[i].innerHTML = "O"
           }
           this.click++
         }
         // checking for winner
         if(gameBoard[0].innerHTML === "O" && gameBoard[1].innerHTML === "O" && gameBoard[2].innerHTML === "O"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[3].innerHTML === "O" && gameBoard[4].innerHTML === "O" && gameBoard[5].innerHTML === "O"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[6].innerHTML === "O" && gameBoard[7].innerHTML === "O" && gameBoard[8].innerHTML === "O"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[0].innerHTML === "O" && gameBoard[3].innerHTML === "O" && gameBoard[6].innerHTML === "O"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[1].innerHTML === "O" && gameBoard[4].innerHTML === "O" && gameBoard[7].innerHTML === "O"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[2].innerHTML === "O" && gameBoard[5].innerHTML === "O" && gameBoard[8].innerHTML === "O"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[0].innerHTML === "O" && gameBoard[4].innerHTML === "O" && gameBoard[8].innerHTML === "O"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }if(gameBoard[2].innerHTML === "O" && gameBoard[4].innerHTML === "O" && gameBoard[6].innerHTML === "O"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[0].innerHTML === "X" && gameBoard[1].innerHTML === "X" && gameBoard[2].innerHTML === "X"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[3].innerHTML === "X" && gameBoard[4].innerHTML === "X" && gameBoard[5].innerHTML === "X"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[6].innerHTML === "X" && gameBoard[7].innerHTML === "X" && gameBoard[8].innerHTML === "X"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[0].innerHTML === "X" && gameBoard[3].innerHTML === "X" && gameBoard[6].innerHTML === "X"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[1].innerHTML === "X" && gameBoard[4].innerHTML === "X" && gameBoard[7].innerHTML === "X"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[2].innerHTML === "X" && gameBoard[5].innerHTML === "X" && gameBoard[8].innerHTML === "X"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
         if(gameBoard[0].innerHTML === "X" && gameBoard[4].innerHTML === "X" && gameBoard[8].innerHTML === "X"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }if(gameBoard[2].innerHTML === "X" && gameBoard[4].innerHTML === "X" && gameBoard[6].innerHTML === "X"){
           document.querySelector(".winner").innerHTML = "you won booiiii";
         }
        })
      }
    }
}
gamePlay.score();


// function validateCol(row) {
//  for(i=0; i<row.length - 1; i++){
//    if(row[i] !== row[i+1]){
//      return false;
//    }
//  }
//  return true;
//
// }
//
// validateCol("rowOne");
// validateCol("rowTwo");
// validateCol("rowThree");
