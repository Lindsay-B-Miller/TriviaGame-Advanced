
// GLOBAL VARIABLES================================================================================================
var time = 10;
var intervalId;

var questions = [
    {
        question: "What is the state dessert of Arizona?",
        answer: "Lane Cake",
        option1: "Lane Cake",
        option2: "Raspberry Popsicles",
        option3: "Toffee",
        option4: "Oatmeal Cookies"
    },
    {
        question: "In 1963, which state sold the first fried dill pickle?",
        answer: "Arkansas",
        option1: "Kentucky",
        option2: "New York",
        option3: "Alabama",
        option4: "Arkansas"
    },
    {
        question: "Which state is the birthplace of the Cheeseburger?",
        answer: "Colorado",
        option1: "Colorado",
        option2: "Texas",
        option3: "Idaho",
        opttion4: "Iowa"
    }
]
// var question1 = document.question1.question1.value;

var temp;
// FUNCTIONS=======================================================================================================
// When user clicks the start button, start disappears and is replaced by the first question.
$("#start").click(function start() {
    $("#start").remove();
    $("#question").html(function (n) {
        return ("<h2>" + questions[n].question + "</h2>" + questions[n].option1 + "<br>" + questions[n].option2 + "<br>" + questions[n].option3 + "<br>" + questions[n].option4);
    });

    // questions[0].option1, questions[0].option2)
    // $("#question").html(q, p);


    // $("#question").show();
    // questions[0].option1, questions[0].option2);
    time = 10;
    clearInterval(intervalId);
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
    setTimeout(buffer, 1000 * 3);
}

//Time up function
setTimeout(timeUp, 1000 * 10);
function timeUp() {
    console.log("time up");
    // notAnswered++;
    console.log("not answered")
    $("#questionOne").remove();
    // $("#results").show();
    document.getElementById("results").style.visibility = "visible";
    $("#results").text("Time's up! The correct answer was ")
}

function buffer() {
    clearInterval(intervalId);
    time--;
    intervalId = setInterval(buffer, 1000);
    alert("buffer done")
}

