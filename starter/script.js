'use strict';
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🏆 Correct Number!"

// document.querySelector(".number").textContent = 50
// document.querySelector(".score").textContent = 55

// document.querySelector(".guess").value = 25
// console.log(document.querySelector(".guess").value); //i got this down, because now we can see 25 in our console instead of a empty line
//to get values from input areas we use .value

//.textContent gives the text
// what is DOM? Document Object Model - tructured presentation of HTML documents.allows javascript to access HTML elements and  styles to  manipulates them.
//document is the entry point to the DOM. we nned to select elemts(document.querySelector)


//............Listening to the events........

//..Secret Number..

let secretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent =
  message;
}


document.querySelector(".check").addEventListener
("click", function(){
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);


  //when there is no input
if (!guess) {
  //document.querySelector(".message").textContent =
  displayMessage("No Number");

  //when player wins
} else if (guess === secretNumber) {
  //document.querySelector(".message").textContent = "🏆 Correct Number!";
displayMessage("🏆 Correct Number!");

  document.querySelector(".number").textContent =
  secretNumber;
  document.querySelector("body").style.backgroundColor = "#60b347";

  document.querySelector(".number").style.width = "35rem";

//make high score reamining when play again and again
  if (score > highscore) {
  highscore = score;
  document.querySelector(".highscore").textContent =
  highscore;
  }

//when guess is wrong ......refactoring code, main the DRY concept
} else if (guess !== secretNumber) {
  if (score > 1) {
    // document.querySelector(".message").textContent =
    // guess > secretNumber ?
    // "Too high!" : "Too low";

    displayMessage( guess > secretNumber ?
      "Too high!" : "Too low");


    score--;
    document.querySelector(".score").textContent =
    score;

    } else {
      // document.querySelector(".message").textContent =
      // "You lost the game!";
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent =
      0;
    }
  }


//   //when guess is too high
// } else if (guess > secretNumber) {
//   if (score > 1) {
//   document.querySelector(".message").textContent =
//   "Too high!";
//   score--;
//   document.querySelector(".score").textContent =
//   score;
//   } else {
//     document.querySelector(".message").textContent =
//     "You lost the game!";
//     document.querySelector(".score").textContent =
//     0;
//   }


// //when guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//   document.querySelector(".message").textContent =
//   "Too low!";
//   score--;
//   document.querySelector(".score").textContent =
//   score;
//   } else {
//     document.querySelector(".message").textContent =
//     "You lost the game!";
//     document.querySelector(".score").textContent =
//     0;
// }
// }
});

//when value is zero result gives falsy value, it will converts to false
//(!guess)here not operator gives a true value. then we can say something like "no value"

//:::::::Part 2 :::::://

//Again btn function

document.querySelector(".again").addEventListener
("click" , function (){
  score = 20;
  let secretNumber = Math.trunc(Math.random()*20) +1;

  // document.querySelector(".message").textContent =
  // "Start guessing..."
  displayMessage("Start guessing...")
  document.querySelector(".score").textContent =
  20;
  document.querySelector(".number").textContent =
  "?";
  document.querySelector(".guess").value =
  " ";
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
