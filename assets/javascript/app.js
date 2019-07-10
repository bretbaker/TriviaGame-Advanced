// Declare global variables & functions
// -----------------------------------------------------------------------
let page = 0;
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


// runs when window is first loaded
// -----------------------------------------------------------------------
$(window).on('load', function() {

    // hide questions so they can be revealed sequentially
    $("#question-1").hide();
    $(".correct-1").hide();
    $("#incorrect-1").hide();
    $("#question-2").hide();
    $("#question-3").hide();
    $("#question-4").hide();
    $("#question-5").hide();
    $("#question-6").hide();
    $("#question-7").hide();
    $("#question-8").hide();
    


});

// jQuery event handlers
// ----------------------------------------------------------------------
$(document).ready(function() {

    // Start => Question 1
    // ----------------------------------------------------
    $("#start-button").on('click', function() {
        $("#start-button").hide();
        $("#question-1").show();
        page = 1;
        timer();
    });

        // Answer 1
        // -----------------------------------------
        
            // Correct
            $("#correct-1").on('click', function() {
                $("#question-1").hide();
                $(".correct-1").show();
            });

            // Incorrect
            $(".incorrect-1").on('click', function() {
                $("#question-1").hide();
                $("#incorrect-1").show();
            });

    // Question 2
    // ----------------------------------------------------
    // $("#correct-1").on('click', function() {
    //     $("#question-1").hide();
    //     $("#question-2").show();
    //     page = 2;
    //     timerReset();
    //     timer();
    // });

    // Question 3
    // ----------------------------------------------------
    $("#correct-2").on('click', function() {
        $("#question-2").hide();
        $("#question-3").show();
        page = 3;
        timerReset();
        timer();
    });

    // Question 4
    // ----------------------------------------------------
    $("#correct-3").on('click', function() {
        $("#question-3").hide();
        $("#question-4").show();
        page = 4;
        timerReset();
        timer();
    });

    // Question 5
    // ----------------------------------------------------
    $("#correct-4").on('click', function() {
        $("#question-4").hide();
        $("#question-5").show();
        page = 5;
        timerReset();
        timer();
    });

    // Question 6
    // ----------------------------------------------------
    $("#correct-5").on('click', function() {
        $("#question-5").hide();
        $("#question-6").show();
        page = 6;
        timerReset();
        timer();
    });

    // Question 7
    // ----------------------------------------------------
    $("#correct-6").on('click', function() {
        $("#question-6").hide();
        $("#question-7").show();
        page = 7;
        timerReset();
        timer();
    });

    // Question 8
    // ----------------------------------------------------
    $("#correct-7").on('click', function() {
        $("#question-7").hide();
        $("#question-8").show();
        page = 8;
        timerReset();
        timer();
    });

});