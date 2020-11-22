alert("Prepare to be dismayed!")

var button = document.getElementById("button");
var input = document.getElementById("input");
var answer = document.getElementById("answer");
var eight = document.getElementById("eight");
var options = [
    "It is most certain",
    "I will make it so",
    "Yes - without a doubt", 
    "You may depend on it",
    "As I see it, maybe",
    "Sure, why not",
    "Outlook decent enough",
    "100%",
    "Signs point to yeah",
    "I wouldn't count on it",
    "Hells to the naw naw",
    "Sources say not likely",
    "Outlook is horrid",
    "I doubt it my friend",
    "The future is hella hazy, keep trying",
    "Ask again later",
    "I ain't telling",
    "This path is unclear",
    "Focus your mind and try agan"
];

button.addEventListener("click", function() {
    if (input.value.length <1) {
    alert("Please Enter A Question!");
    } else {
        eight.innerText ="";
        var num = input.value.length % options.length;
        answer.innerText = options[num];
    }
});

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("button").click();
    }
  });