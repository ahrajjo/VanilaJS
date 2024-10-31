// const decrease = document.querySelector('#decrease');
// const reset = document.querySelector('#reset');
// const increase = document.querySelector('#increase');
// const number = document.querySelector('#number-counter');

// let count = 0; 
// let intervalId;

// function updateDisplay() {
//     number.textContent = count;
//     if (count < 0) {
//         number.style.color = "red";
//     } else if (count === 0) {
//         number.style.color = "yellow";
//     } else {
//         number.style.color = "green";
//     }
// }

// function startInterval(direction) {
//     clearInterval(intervalId);
//     intervalId = setInterval(() => {
//         count += direction;
//         updateDisplay();
//     }, 1000);
// }

// decrease.addEventListener("click", function (){
//     clearInterval(intervalId);
//     if (count > 0) {
//         count -= 1;
//         updateDisplay();
//     }
//     startInterval(-1);
// });

// increase.addEventListener("click", function (){
//     clearInterval(intervalId);
//     count += 1;
//     updateDisplay();
//     startInterval(1);
// });

// reset.addEventListener("click", function() {
//     clearInterval(intervalId);
//     count = 0;
//     updateDisplay();
// });

// updateDisplay(); 

const count = document.querySelector('#number-counter');
const buttons = document.querySelectorAll('button');

let currentCount = 0;

function updateCount(newCount) {
    currentCount = newCount;
    count.textContent = currentCount;
    
    count.classList.remove('red', 'yellow', 'green');
    if (currentCount < 0) {
        count.style.color='red';
    } else if (currentCount === 0) {
        count.style.color='yellow';
    } else {
        count.style.color='green';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const clickedButtonId = e.currentTarget.id;
        
        if (clickedButtonId === 'decrease') {
            updateCount(currentCount - 1);
        } else if (clickedButtonId === 'reset') {
            updateCount(0);
        } else if (clickedButtonId === 'increase') {
            updateCount(currentCount + 1);
        }
    });
});

updateCount(0);