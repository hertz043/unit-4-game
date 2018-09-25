
//Globally declaring variables that are needed throughout

 var totalWins = 0;
 var totalLosses = 0;

function mainGame() {

        //set Current Score counter to 0
        var currentScore = 0;
        $("#currentScore").text("Current Score: " + currentScore);

        //Genereate target score
        var targetScore = Math.floor(Math.random() * (101 + 1) + 19);

        //Write TargetScore to the DOM
        $("#targetDisplay").text("Target Score: " + targetScore);

        //Generate and assign random numbers (1-12) for each crystal
        var bluePoints = Math.floor(Math.random() * 12 + 1);
        var greenPoints = Math.floor(Math.random() * 12 + 1);
        var redPoints = Math.floor(Math.random() * 12 + 1);
        var orangePoints = Math.floor(Math.random() * 12 + 1);

        //a function to reset current score and gem point values
        function reset() {
            currentScore = 0;
            $("#currentScore").text("Current Score: " + currentScore);
            bluePoints = 0;
            greenPoints = 0;
            redPoints = 0;
            orangePoints = 0;
        }

        //Win and loss conditions
        function checkScore() {
            if (currentScore === targetScore) {
                totalWins++;
                $("#wins").text("Wins: " + totalWins);
                reset();
                mainGame();
            }

            else if (currentScore > targetScore) {
                totalLosses++
                $("#losses").text("Losses: " + totalLosses);
                reset();
                mainGame();
            }
        }

        //Assign point values to each gem and add points into current score on click, then checks the score to see if a win or loss
        $("#blue-gemstone").on("click", function() {
            currentScore = currentScore + bluePoints;

            $("#currentScore").text("Current Score: " + currentScore);

            checkScore();
        });

        $("#green-gemstone").on("click", function() {
            currentScore = currentScore + greenPoints;

            $("#currentScore").text("Current Score: " + currentScore);
            checkScore();

        });

        $("#red-gemstone").on("click", function() {
            currentScore = currentScore + redPoints;

            $("#currentScore").text("Current Score: " + currentScore);
            checkScore();

        });

        $("#orange-gemstone").on("click", function() {
            currentScore = currentScore + orangePoints;

            $("#currentScore").text("Current Score: " + currentScore);
            checkScore();

        });
    }
