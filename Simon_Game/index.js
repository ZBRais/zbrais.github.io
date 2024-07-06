var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var start = false;
var level = 0;

//Start of the program by pressing any key
$(document).keydown(function() {
    if(!start) {
        //$("#level-title").text("Level" + " " + level);
        nextSequence();
        start = true;
    }
});

//Computer generated sequence for colour
function nextSequence(){  
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = randomIntFromInterval(0, 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    var colorId = "#" + randomChosenColour;
    $(colorId).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
}

//User selection of colour
$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
    animatePress(userChosenColour);
  
    checkAnswer(userClickedPattern.length-1);
  });


//Compare user selected colour with computer generated colour
  function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

//Generate random integer
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//Play Sound
function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

//Click button animations
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//Start again
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }

//Reset Button Work
$("#reset").click(function(){
    location.reload();
}); 