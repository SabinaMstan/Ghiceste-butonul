document.addEventListener('DOMContentLoaded', function() {
  let container = document.getElementById('container');
  let winButton = getRandomNumber();
  for (let i = 0; i < 3; ++i) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'Pick me';
    button.className = 'btn-styled';
    button.onclick = function() {
        if (winButton === i) {
          alert('Excelent!');
          location.reload();
        } else {
          alert('Duh');
        }
    };

    container.appendChild(button);
  }
}, false);


function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}
