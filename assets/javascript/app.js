
// GLOBAL VARIABLES================================================================================================
var time = 30;
var intervalId;
// var question1 = document.question1.question1.value;

var temp;
// FUNCTIONS=======================================================================================================
// When user clicks the start button, start disappears and is replaced by the first question.
$("#start").click(function start() {
    $("#start").remove();
    $("#questionOne").show();
    time = 30;
    intervalId = setInterval(count, 1000);

});

//Time counter function
function count() {
    time--;
    $("#timeRemaining").html("Time Remaining: " + time);
}


$(".question").click(check);

function check(event) {
    temp = this;
    console.log(this);
    console.log(this.value);
    if (this.getAttribute("data-value") === "Lane Cake") {
        $("#results").text("Correct!")
        console.log("correct");
    }
    else {
        $("#results").text("Inorrect! The correct answer was: ")
        console.log("incorrect");
    }
    $("#questionOne").remove();
    // $("#results").show();
    document.getElementById("results").style.visibility = "visible";

}

//Time up function
setTimeout(timeUp, 1000 * 30);
function timeUp() {
    console.log("time up");
    // notAnswered++;
    console.log("not answered")
    $("#questionOne").remove();
    // $("#results").show();
    document.getElementById("results").style.visibility = "visible";
    $("#results").text("Time's up! The correct answer was ")
}

