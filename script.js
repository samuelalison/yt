// const main = document.querySelector('.main');
// const counter = document.querySelector('.counter');
const number = document.querySelector('.number');
 


function incrementNumber() {
    let currentValue = parseInt(number.innerHTML);
    if (currentValue === 9) {
        number.innerHTML = 0;
      } else {
        number.innerHTML = currentValue + 1;
      }
    
  number.style.animation = 'flipup 1s';

   number.addEventListener("animationend", function() {
    number.style.animation = '';
      });
  }

  setInterval(incrementNumber, 2000);