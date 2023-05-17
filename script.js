var noButton = document.getElementById("noButton");

noButton.addEventListener("click", function() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var randomX = Math.floor(Math.random() * (windowWidth - 100));
  var randomY = Math.floor(Math.random() * (windowHeight - 40));

  noButton.style.position = "fixed";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});

var simButton = document.getElementById("simButton");
var messageDisplayed = false;

simButton.addEventListener("click", function() {
  if (!messageDisplayed) {
    alert("Obrigado pela confirmação, agora uma musiquinha para relaxar....");
    messageDisplayed = true;
  }
});
