window.onload = function() {

    var userChoice = 0;
    var guesses = 10;
    var computerGuess = computerGuess;
    var usedArray = [];
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    function compGuess() {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
    }

    document.onkeyup = function(event) {
        var userGuess = event.key;

        //If then statements go here.
        if (userChoice === computerGuess) {
            wins++;
            guesses = 10;
            usedArray = [];
        } 

        compGuess();
        if (userChoice !== computerGuess) {
            guesses--;
        }

        if (guesses == 0) {
            losses++;
            usedArray = [];
            guesses = 10;
        }

        if (usedArray.indexOf(userChoice) >= 0) {

        } else {
            usedArray.push(userChoice);
            document.getElementById('userChoice').innerHTML = usedArray;
            console.log(usedArray);
        }

        document.getElementById('wins').innerHTML = wins;
        document.getElementById('losses').innerHTML = losses;
        document.getElementById('guesses').innerHTML = guesses;
        document.getElementById('usedArray').innerHTML = usedArray;
    }
}