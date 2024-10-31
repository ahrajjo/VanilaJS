const colorChangeBtn = document.querySelector(".colorChange");
const h1 = document.querySelector('h1');

colorChangeBtn.addEventListener("click", function(){
    const newColor = colorChanger();
    document.body.style.backgroundColor = newColor;
    h1.innerHTML = colorChanger();
})

function colorChanger(){
    const r = Math.floor(Math.random() * 256);
    const g =  Math.floor(Math.random() * 256);
    const b =  Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};

// let colors = [
//     {name: 'RED', color: 'red'},
//     {name: 'BLUE', color: 'blue'},
//     {name: 'YELLOW', color: 'yellow'},
//     {name: 'BLACK', color: 'black'},
//     {name: 'BEIGE', color: 'beige'},
//     {name: 'BROWN', color: 'brown'},
//     {name: 'PURPLE', color: 'purple'},
//     {name: 'ORANGE', color: 'orange'},
//     {name: 'GRAY', color: 'gray'},
//     {name: 'SKY BLUE', color: 'skyblue'}
// ];

// colorChangeBtn.addEventListener("click", function(){
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor = randomColor.color;
//     h1.textContent = randomColor.name;
// });