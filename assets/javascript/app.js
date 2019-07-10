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
    console.log(page);
    $(".timer").text("Time Remaining: " + timeLeft + " Seconds");
    if (timeLeft === 0 && page === 1) {
        $("#question-1").hide();
        $("#unanswered-1").show();
        timerReset();
        setTimeout(function(){ $("#unanswered-1").hide() }, 5000);
        setTimeout(function(){ $("#question-2").show() }, 5000);
        setTimeout(function(){ timer() }, 5000);
        unansweredCount++;
        page = 2;
    } else if (timeLeft === 0 && page === 2) {
        $("#question-2").hide();
        $("#unanswered-2").show();
        timerReset();
        setTimeout(function(){ $("#unanswered-2").hide() }, 5000);
        setTimeout(function(){ $("#question-3").show() }, 5000);
        setTimeout(function(){ timer() }, 5000);
        unansweredCount++;
        page = 3;
    } else if (timeLeft === 0 && page === 3) {
        $("#question-3").hide();
        $("#unanswered-3").show();
        timerReset();
        setTimeout(function(){ $("#unanswered-3").hide() }, 5000);
        setTimeout(function(){ $("#question-4").show() }, 5000);
        setTimeout(function(){ timer() }, 5000);
        unansweredCount++;
        page = 4;
    } else if (timeLeft === 0 && page === 4) {
        $("#question-4").hide();
        $("#unanswered-4").show();
        timerReset();
        setTimeout(function(){ $("#unanswered-4").hide() }, 5000);
        setTimeout(function(){ $("#question-5").show() }, 5000);
        setTimeout(function(){ timer() }, 5000);
        unansweredCount++;
        page = 5;
    } else if (timeLeft === 0 && page === 5) {
        $("#question-5").hide();
        $("#unanswered-5").show();
        timerReset();
        setTimeout(function(){ $("#unanswered-5").hide() }, 5000);
        setTimeout(function(){ $("#question-6").show() }, 5000);
        setTimeout(function(){ timer() }, 5000);
        unansweredCount++;
        page = 6;
    } else if (timeLeft === 0 && page === 6) {
        $("#question-6").hide();
        $("#unanswered-6").show();
        timerReset();
        setTimeout(function(){ $("#unanswered-6").hide() }, 5000);
        setTimeout(function(){ $("#question-7").show() }, 5000);
        setTimeout(function(){ timer() }, 5000);
        unansweredCount++;
        page = 7;
    } else if (timeLeft === 0 && page === 7) {
        $("#question-7").hide();
        $("#unanswered-7").show();
        timerReset();
        setTimeout(function(){ $("#unanswered-7").hide() }, 5000);
        setTimeout(function(){ $("#question-8").show() }, 5000);
        setTimeout(function(){ timer() }, 5000);
        unansweredCount++;
        page = 8;
    } else if (timeLeft === 0 && page === 8) {
        $("#question-8").hide();
        $("#unanswered-8").show();
        timerReset();
        setTimeout(function(){ $("#unanswered-8").hide() }, 5000);
        unansweredCount++;
        tally();
        setTimeout(function(){ $("#results").show() }, 5000);
    }
}

const timerReset = () => {
    $(".timer").text("Time Remaining: 30 Seconds");
    clearInterval(intervalID);
    timeLeft = 30;
}

let correctCount = 0;

let incorrectCount = 0;

let unansweredCount = 0;

let page;

const tally = () => {
    $("#correct-count").text("Correct Answers: " + correctCount);
    $("#incorrect-count").text("Incorrect Answers: " + incorrectCount);
    $("#unanswered-count").text("Unanswered: " + unansweredCount);
}


// runs when window is first loaded
// -----------------------------------------------------------------------

$(window).on('load', function() {

    // hide content so it can be revealed at the appropriate time
    $("#question-1").hide();
    $(".correct-1").hide();
    $("#incorrect-1").hide();
    $("#unanswered-1").hide();
    $("#question-2").hide();
    $(".correct-2").hide();
    $("#incorrect-2").hide();
    $("#unanswered-2").hide();
    $("#question-3").hide();
    $(".correct-3").hide();
    $("#incorrect-3").hide();
    $("#unanswered-3").hide();
    $("#question-4").hide();
    $(".correct-4").hide();
    $("#incorrect-4").hide();
    $("#unanswered-4").hide();
    $("#question-5").hide();
    $(".correct-5").hide();
    $("#incorrect-5").hide();
    $("#unanswered-5").hide();
    $("#question-6").hide();
    $(".correct-6").hide();
    $("#incorrect-6").hide();
    $("#unanswered-6").hide();
    $("#question-7").hide();
    $(".correct-7").hide();
    $("#incorrect-7").hide();
    $("#unanswered-7").hide();
    $("#question-8").hide();
    $(".correct-8").hide();
    $("#incorrect-8").hide();
    $("#unanswered-8").hide();
    $("#results").hide();  

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
        page = 1;
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
            page = 2;
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
            page = 2;
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
            page = 3;
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
            page = 3;
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
            page = 4;
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
            page = 4;
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
            page = 5;
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
            page = 5;
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
            page = 6;
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
            page = 6;
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
            page = 7;
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
            page = 7;
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
            page = 8;
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
            page = 8;
        });

    // Question 8
    // -----------------------------------------
    
        // Correct
        $("#correct-8").on('click', function() {
            $("#question-8").hide();
            $(".correct-8").show();
            timerReset();
            setTimeout(function(){ $(".correct-8").hide() }, 5000);
            correctCount++;
            tally();
            setTimeout(function(){ $("#results").show() }, 5000);
        });

        // Incorrect
        $(".incorrect-8").on('click', function() {
            $("#question-8").hide();
            $("#incorrect-8").show();
            timerReset();
            setTimeout(function(){ $("#incorrect-8").hide() }, 5000);
            incorrectCount++;
            tally();
            setTimeout(function(){ $("#results").show() }, 5000);
        });

    // Start Over
    $("#start-over").on('click', function() {
        window.location.reload(true);
    });
    
});