// function computerPlay randomly return either "rock", "paper" or "scissors"

function computerPlay () {
    let number = Math.floor(Math.random()*3);
    if (number == 0) {
        return `rock`;
    } else if (number== 1) {
        return `paper`;
    } else {
        return `scissors`;
    }
}

// function playRound takes two parameters and then declares the winner

function playRound (playerSel, computerSel) {
    if (playerSel == `rock` && computerSel == `rock`) {
        return `It's a tie!`;
    } else if (playerSel == `rock` && computerSel == `paper`) {
        return `You lose`;
}   else if (playerSel == `rock` && computerSel == `scissors`) {
        return `You win`;
}   else if (playerSel == `paper` && computerSel == `rock`) {
        return `You win`;
}   else if (playerSel == `paper` && computerSel == `scissors`) {
        return `You lose`;
}   else if (playerSel == `paper` && computerSel == `paper`) {
        return `It's a tie!`;
}   else if (playerSel == `scissors` && computerSel == `scissors`) {
        return `It's a tie!`;
}   else if (playerSel == `scissors` && computerSel == `paper`) {
        return `You win`;
}   else if (playerSel == `scissors` && computerSel == `rock`) {
        return `You lose`;
}
}

// const playerSel = prompt(`let's play rock, paper, scissors`).toLowerCase();
let computerSel = computerPlay();
// console.log(playRound(playerSel, computerSel));
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {alert(playRound('rock',computerPlay()))});
paper.addEventListener('click', () => {alert(playRound('paper',computerPlay()))});
scissors.addEventListener('click', () => {alert(playRound('scissors',computerPlay()))});

// function game () {
//         let yourScore = 0;
//         let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         const playerSel = prompt(`let's play rock, paper, scissors`).toLowerCase();
//         // console.log(playRound(playerSel, computerSel));

//     if (playRound=`You win`) {
//         yourScore++;
//     }   else if (playRound=`You lose`) {
//         computerScore++;
//     }}
    
//     if (yourScore > computerScore) {
//         console.log(`You won!`)
//     } else if (yourScore < computerScore) {
//         console.log(`You lost!`)
//     } else {console.log(`It is a tie!`)}
// }

// game();

