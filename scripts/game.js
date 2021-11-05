//Rules of the game
//This file was created to be totally independent from the controller. Thus, it could be used in any other game with the same style.

//Creating the variables:
let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ['o','x'];
let gameOver = false;
let winnerPossibilities = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleMove(position){

    if(gameOver){
        return;
    }

    if(board[position] == ''){
        board[position] = symbols[playerTime];

        gameOver = winner();

        if(!gameOver){ // if it is game over, the player stays the same. So the winner can be defined easily.
            playerTime = (playerTime == 0)? 1 : 0;
        }    
           
    }  
    return gameOver;
}

function winner(){

    for(let i = 0; i < winnerPossibilities.length; i++){
        let sequence = winnerPossibilities[i];

        //Ex.: winnerPossibilities[8] = [2,4,6]
        //sequence = [2,4,6]
        //position1 = 2
        //position2 = 4
        //position3 = 6 

        let position1 = sequence[0];
        let position2 = sequence[1];
        let position3 = sequence[2];

        if(board[position1] == board[position2] && board[position1] == board[position3] && board[position1] != ""){
            return true;
        }
    }
    return false;
}




