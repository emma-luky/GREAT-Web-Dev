let button = document.querySelector(".button");
button.addEventListener("click", btnClicked);

function btnClicked() {
  let answers = [
    "It is certain",
    "Absolutely not",
    "Maybe",
    "Ask again later",
    "Reply hazy, ask again later",
    "Yes definitely",
    "Very doubtful",
    "Wouldn't count on it",
    "I don't know",
    "Yes",
    "No way jose",
    "Yuh huh",
    "Nuh uh",
    "Oh yeah",
  ];

  let randomChoice = Math.floor(Math.random() * answers.length);
  document.querySelector(".eight").style.visibility = "hidden";
  document.querySelector(".answer").style.visibility = "visible";
  document.querySelector(".answer").innerHTML = answers[randomChoice];

  document.querySelector(".triangle").style.visibility = "visible";
  document.querySelector(".whiteCircle").style.width = "250px";
  document.querySelector(".whiteCircle").style.height = "250px";
  document.querySelector(".whiteCircle").style.background = "gray";
}
