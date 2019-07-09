$(window).on('load', function() {

    // hide questions so they can be revealed sequentially
    $("#question-1").hide();
    $("#question-2").hide();
    $("#question-3").hide();
    $("#question-4").hide();
    $("#question-5").hide();
    $("#question-6").hide();
    $("#question-7").hide();
    $("#question-8").hide();
    


});






$(document).ready(function() {

    // hide start button once clicked
    $("#start-button").on('click', function() {
        $("#start-button").hide();
        $("#question-1").show();
    });

    $("#correct-1").on('click', function() {
        $("#question-1").hide();
        $("#question-2").show();
    });

    $("#correct-2").on('click', function() {
        $("#question-2").hide();
        $("#question-3").show();
    });

    $("#correct-3").on('click', function() {
        $("#question-3").hide();
        $("#question-4").show();
    });

    $("#correct-4").on('click', function() {
        $("#question-4").hide();
        $("#question-5").show();
    });

    $("#correct-5").on('click', function() {
        $("#question-5").hide();
        $("#question-6").show();
    });

    $("#correct-6").on('click', function() {
        $("#question-6").hide();
        $("#question-7").show();
    });

    $("#correct-7").on('click', function() {
        $("#question-7").hide();
        $("#question-8").show();
    });

});