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
        return `You Lose`;
}   else if (playerSel == `rock` && computerSel == `scissors`) {
    return `You win`;
}   else if (playerSel == `paper` && computerSel == `rock`) {
    return `You win`;
}   else if (playerSel == `paper` && computerSel == `scissors`) {
    return `You Lose`;
}   else if (playerSel == `paper` && computerSel == `paper`) {
    return `It's a tie!`;
}   else if (playerSel == `scissors` && computerSel == `scissors`) {
    return `It's a tie!`;
}   else if (playerSel == `scissors` && computerSel == `paper`) {
    return `You win`;
}   else if (playerSel == `scissors` && computerSel == `rock`) {
    return `You Lose`;
}
}


const playerSel = prompt(`let's play rock, paper, scissors`).toLowerCase();
const computerSel = computerPlay();
console.log(playRound(playerSel, computerSel));