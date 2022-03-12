// function computerPlay randomly return either "rock", "paper" or "scissors"
// function playRound takes two parameters and then declares the winner

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
