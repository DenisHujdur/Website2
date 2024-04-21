// JavaScript for handling input and displaying it
document.getElementById("printButton").addEventListener("click", function() {
    var userInput = document.getElementById("userInput").value;
    document.getElementById("output").innerText = userInput;
  });
  