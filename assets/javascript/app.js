// Declare global variables & functions
// -----------------------------------------------------------------------

let timeLeft = 30;

let intervalID;

const timer = () => {
    clearInterval(intervalID);
    intervalID = setInterval(countDown, 1000);
}

const countDown = () => {
    timeLeft--;
    console.log(timeLeft);
    $(".timer").text("Time Remaining: " + timeLeft + " Seconds");
}

const timerReset = () => {
    $(".timer").text("Time Remaining: 30 Seconds");
    clearInterval(intervalID);
    timeLeft = 30;
}

let correctCount = 0;

let incorrectCount = 0;


// runs when window is first loaded
// -----------------------------------------------------------------------

$(window).on('load', function() {

    // hide questions so they can be revealed sequentially
    $("#question-1").hide();
    $(".correct-1").hide();
    $("#incorrect-1").hide();
    $("#question-2").hide();
    $(".correct-2").hide();
    $("#incorrect-2").hide();
    $("#question-3").hide();
    $(".correct-3").hide();
    $("#incorrect-3").hide();
    $("#question-4").hide();
    $(".correct-4").hide();
    $("#incorrect-4").hide();
    $("#question-5").hide();
    $(".correct-5").hide();
    $("#incorrect-5").hide();
    $("#question-6").hide();
    $(".correct-6").hide();
    $("#incorrect-6").hide();
    $("#question-7").hide();
    $(".correct-7").hide();
    $("#incorrect-7").hide();
    $("#question-8").hide();
    $(".correct-8").hide();
    $("#incorrect-8").hide();
    


});

// jQuery event handlers
// ----------------------------------------------------------------------

$(document).ready(function() {

    // Start
    // ----------------------------------------------------
    $("#start-button").on('click', function() {
        $("#start-button").hide();
        $("#question-1").show();
        timer();
    });

    // Question 1
    // -----------------------------------------
    
        // Correct
        $("#correct-1").on('click', function() {
            $("#question-1").hide();
            $(".correct-1").show();
            timerReset();
            setTimeout(function(){ $(".correct-1").hide() }, 5000);
            setTimeout(function(){ $("#question-2").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            correctCount++;
        });

        // Incorrect
        $(".incorrect-1").on('click', function() {
            $("#question-1").hide();
            $("#incorrect-1").show();
            timerReset();
            setTimeout(function(){ $("#incorrect-1").hide() }, 5000);
            setTimeout(function(){ $("#question-2").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            incorrectCount++;
        });

    // Question 2
    // -----------------------------------------
    
        // Correct
        $("#correct-2").on('click', function() {
            $("#question-2").hide();
            $(".correct-2").show();
            timerReset();
            setTimeout(function(){ $(".correct-2").hide() }, 5000);
            setTimeout(function(){ $("#question-3").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            correctCount++;
        });

        // Incorrect
        $(".incorrect-2").on('click', function() {
            $("#question-2").hide();
            $("#incorrect-2").show();
            timerReset();
            setTimeout(function(){ $("#incorrect-2").hide() }, 5000);
            setTimeout(function(){ $("#question-3").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            incorrectCount++;
        });

    // Question 3
    // -----------------------------------------
    
        // Correct
        $("#correct-3").on('click', function() {
            $("#question-3").hide();
            $(".correct-3").show();
            timerReset();
            setTimeout(function(){ $(".correct-3").hide() }, 5000);
            setTimeout(function(){ $("#question-4").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            correctCount++;
        });

        // Incorrect
        $(".incorrect-3").on('click', function() {
            $("#question-3").hide();
            $("#incorrect-3").show();
            timerReset();
            setTimeout(function(){ $("#incorrect-3").hide() }, 5000);
            setTimeout(function(){ $("#question-4").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            incorrectCount++;
        });

    // Question 4
    // -----------------------------------------
    
        // Correct
        $("#correct-4").on('click', function() {
            $("#question-4").hide();
            $(".correct-4").show();
            timerReset();
            setTimeout(function(){ $(".correct-4").hide() }, 5000);
            setTimeout(function(){ $("#question-5").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            correctCount++;
        });

        // Incorrect
        $(".incorrect-4").on('click', function() {
            $("#question-4").hide();
            $("#incorrect-4").show();
            timerReset();
            setTimeout(function(){ $("#incorrect-4").hide() }, 5000);
            setTimeout(function(){ $("#question-5").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            incorrectCount++;
        });

    // Question 5
    // -----------------------------------------
    
        // Correct
        $("#correct-5").on('click', function() {
            $("#question-5").hide();
            $(".correct-5").show();
            timerReset();
            setTimeout(function(){ $(".correct-5").hide() }, 5000);
            setTimeout(function(){ $("#question-6").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            correctCount++;
        });

        // Incorrect
        $(".incorrect-5").on('click', function() {
            $("#question-5").hide();
            $("#incorrect-5").show();
            timerReset();
            setTimeout(function(){ $("#incorrect-5").hide() }, 5000);
            setTimeout(function(){ $("#question-6").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            incorrectCount++;
        });

    // Question 6
    // -----------------------------------------
    
        // Correct
        $("#correct-6").on('click', function() {
            $("#question-6").hide();
            $(".correct-6").show();
            timerReset();
            setTimeout(function(){ $(".correct-6").hide() }, 5000);
            setTimeout(function(){ $("#question-7").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            correctCount++;
        });

        // Incorrect
        $(".incorrect-6").on('click', function() {
            $("#question-6").hide();
            $("#incorrect-6").show();
            timerReset();
            setTimeout(function(){ $("#incorrect-6").hide() }, 5000);
            setTimeout(function(){ $("#question-7").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            incorrectCount++;
        });

    // Question 7
    // -----------------------------------------
    
        // Correct
        $("#correct-7").on('click', function() {
            $("#question-7").hide();
            $(".correct-7").show();
            timerReset();
            setTimeout(function(){ $(".correct-7").hide() }, 5000);
            setTimeout(function(){ $("#question-8").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            correctCount++;
        });

        // Incorrect
        $(".incorrect-7").on('click', function() {
            $("#question-7").hide();
            $("#incorrect-7").show();
            timerReset();
            setTimeout(function(){ $("#incorrect-7").hide() }, 5000);
            setTimeout(function(){ $("#question-8").show() }, 5000);
            setTimeout(function(){ timer() }, 5000);
            incorrectCount++;
        });

    // Question 8
    // -----------------------------------------
    
        // Correct
        $("#correct-8").on('click', function() {
            $("#question-8").hide();
            $(".correct-8").show();
            timerReset();
            setTimeout(function(){ $(".correct-8").hide() }, 5000);
            // setTimeout(function(){ $("#question-3").show() }, 5000);
            // setTimeout(function(){ timer() }, 5000);
            correctCount++;
        });

        // Incorrect
        $(".incorrect-8").on('click', function() {
            $("#question-8").hide();
            $("#incorrect-8").show();
            timerReset();
            setTimeout(function(){ $("#incorrect-8").hide() }, 5000);
            // setTimeout(function(){ $("#question-3").show() }, 5000);
            // setTimeout(function(){ timer() }, 5000);
            incorrectCount++;
        });
    
});