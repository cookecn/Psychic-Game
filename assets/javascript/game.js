    var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessed = [];
    var guessesLeft = 9;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    function init () {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guessed = "";
        guessesLeft = 9;
    }

    document.onkeyup = function (event) {
        var userGuess = event.key;
        guessed = event.key;
        document.getElementById("guessed").append(guessed);
        wins = 0;
        losses = 0;
        document.getElementById('guessesLeft').innerHTML = guessesLeft;
        console.log(computerGuess);

        //If then statements go here.
        if (userGuess !== computerGuess) {
            guessesLeft--;
            document.getElementById("guessesLeft").innerHTMl = guessesLeft;
        } 
            

        if (guessesLeft === 0) {
            alert("Wrong answers, try again");
            losses++;
            document.getElementById('losses').innerHTML = losses;
            document.getElementById('guessed').innerHTML = "";
            document.getElementById('guessesLeft').innerHTML = 9;
            init();
        } 

        else if (userGuess === computerGuess) {
            wins++;
            document.getElementById('wins').innerHTML = wins;
            document.getElementById('guessesLeft').innerHTML = 9;
            document.getElementById('guessed').innerHTML = "";
            init();
            alert("Correct! The answer was " + userGuess);
        }
    };

    function restarted () {
        location.reload()
    }