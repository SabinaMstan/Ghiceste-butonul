function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

function restartGame() {
  location.reload();
}

function getInputFromTextBox() {
  let input = document.getElementById('userInput').value;
  getPickButtons(input);
}

function feelingLucky() {
  let input = getRandomNumber(25);
  getPickButtons(input);
}

function getPickButtons(input) {
  document.getElementById("lucky").disabled = true;
  document.getElementById("start").disabled = true;
  if (input >= 3 && input <= 25) {
    let container = document.getElementById('container');
    let winButton = getRandomNumber(input);
    for (let i = 0; i < input; ++i) {
      let button = document.createElement('button');
      button.type = 'button';
      button.innerHTML = 'Pick me';
      button.className = 'pickButton';
      button.onclick = function() {
          if (winButton === i) {
            alert('Excelent!');
            restartGame();
          } else {
            alert('Duh');
          }
      };
      container.appendChild(button);
    }
  } else {
    alert('Choose a number between 3 and 25.');
    restartGame();
  }
}
