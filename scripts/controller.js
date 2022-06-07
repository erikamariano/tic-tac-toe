//This is the interface that makes the connection with backend and frontend, it's the Model View Controller pattern.
//This file is called with the moves of the players.


//To make sure that the HTML was loaded:
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((object) => {
        object.addEventListener('click', handleClick);
    })
})

function handleClick(event){
    let square = event.target;
    let position = square.id //number of the square that was clicked.

    if(handleMove(position)){
                
        let msg = document.getElementById("msg");
        let btn = document.getElementById("btn");


        let win = (playerTime == 0)? "Noughts" : "Crosses"
        msg.innerText = `The winner is: ${win}!`;

        btn.style.display = "block";  
    };

    updateSquare(position); //define the square symbol, accordingly to the player.  
}

function updateSquare(position){
    let square = document.getElementById(position.toString());

    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}


function reset(){
    board = ['','','','','','','','',''];
    playerTime = 0;
    gameOver = false;

    updateAllSquares();
}

function updateAllSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((object) => {

        let position = object.id;
        symbol = board[position]; //symbol is gonna be 'o' or 'x', defined by the handleMove function.

        object.innerHTML = `<div class='${symbol}'></div>`
        msg.innerText = "";
        btn.style.display = "none";
    })
}
