# 🎨Color Flipper 만들기

>프로젝트에서 제시해준 방법은 다음과 같다.
+ arrays
+ document.getElementById()
+ document.querySelector()
+ addEventListener()
+ document.body.style.backgroundColor
+ Math.floor()
+ Math.random()
+ array.length

이걸로 버튼을 누르면 배열에 저장되어있던 색이 랜덤하게 이름이 표시되면서, 바탕색이 바뀌는 그럼 컬러 플립퍼였다.

```javascript
const colorChangeBtn = document.querySelector(".colorChange");
const h1 = document.querySelector('h1');

let colors = [
    {name: 'RED', color: 'red'},
    {name: 'BLUE', color: 'blue'},
    {name: 'YELLOW', color: 'yellow'},
    {name: 'BLACK', color: 'black'},
    {name: 'BEIGE', color: 'beige'},
    {name: 'BROWN', color: 'brown'},
    {name: 'PURPLE', color: 'purple'},
    {name: 'ORANGE', color: 'orange'},
    {name: 'GRAY', color: 'gray'},
    {name: 'SKY BLUE', color: 'skyblue'}
];

colorChangeBtn.addEventListener("click", function(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor.color;
    h1.textContent = randomColor.name;
});
```
이런식으로 배열에 색상들의 이름과 색을 넣어주고, 버튼을 클릭 했을 때 랜덤 컬러가 나오게 해주었다. `colors[Math.floor(Math.random() * colors.length)];`이 부분으로 색이 랜덤으로 나오는 건데 설명을 덧붙이자면!

☑️ 일단 colos[]<-요 인덱스 번호를 랜덤으로 만들 수 있게 해줘야하니
☑️ `math.random()`으로  0보다 크거나 1보다 작은 부동 소수점 의사 난수를 반환하고
☑️ 거기에 colors배열의 길이를 곱해준다면 ➡️ 길이 만큼의 부동 소수점 난수 반환
☑️ 그 값을 `math.floor()`로 소수점이 없는 정수로 만들어준다!

==> 그럼 인덱스의 번호가 배열의 길이만큼만 랜덤하게 나오죠?😊

그 뒤에 이제 `body` 에다가 색을 넣어줬다 ! `.color`로
그리고 h1에도 색상의 이름을 넣어주기 위해서 `.name`로

완성 !!!!!!!!!

![](https://velog.velcdn.com/images/whkfk12/post/a9dc873c-3547-4b69-9658-79ae8c83d153/image.gif)


> 다음은 프로젝트의 조건대로하지 않고 내가 하고 싶은 방법으로 구현!
+ 색상을 rgb로 가져 올 것
+ rgb로 표현 할 수 있는 모든 색이 랜덤하게 나올 것
+ 색상의 이름이 h1에 표시 될 것

```javascript
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
```
배열보다 더 다양한 색들의 컬러 플립퍼를 만들고 싶어서 이 방법으로 했다.
rgb 색상의 특성상 0~255의 숫자 세가지로 색이 만들어지는 점을 이용했다,
아예 함수 `colorChanger()` 만들어주고 위와 같은 방법으로 랜덤에 내림해서 정수를 반환하게 만들었다. 
그리고 리턴`rgb(${r},${g},${b})` ❗❗❗❗❗😘

그 뒤에 버튼 이벤트 리스너에 클릭할 때 이 함수의 컬러가 들어갈 수 있게 해주고,
h1에 색상 이름도 넣어주었다.

완성 !!!!!!!!!!!!!!!!!

![](https://velog.velcdn.com/images/whkfk12/post/a580cd78-9892-447f-939e-2cbdba0d9566/image.gif)


<hr>

# 🔢카운터 만들기

> 프로젝트에서 제시 한 방법은 이렇다.
+ document.querySelectorAll()
+ forEach()
+ addEventListener()
+ currentTarget 속성
+ classList
+ textContent

```javascript
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
```
이 코드도 설명하자면, 일단은 `count`가 숫자가 바뀌는 부분이다.
그리고 버튼은 `querySelectorAll`로 갖고 와줬다.

☑️ 일단 초기값을 0으로 주고 시작했다.
☑️ 그 안에 새롭게 카운트 되는 숫자를 할당해주고, 그걸 카운트 안에!
☑️ 색상에다가 `count.classList.remove('red', 'yellow', 'green');`준 이유는 아무래도 색이 바뀐 상태로 그대로 남아있기 때문에 계속 초기화를 주려는 용도로!
☑️ 버튼을 `forEhch()`메서드를 사용해서 돌게 만들어주고서 ` const clickedButtonId = e.currentTarget.id;`로 이미 클릭 된 아이디를 주었다.
☑️`clickedButtonId === 'decrease'`,`clickedButtonId ==='reset'`,`clickedButtonId === 'increase'`로 어떤 버튼이 클릭이 되었는지를 조건식으로 주고 결과를 도출했다.
☑️ updateCount(0); 그리고 0으로 계속 초기화까지!

이건 좀 헷갈리는 부분이 많았었다. 색상 초기화 부분에서 한 번 헤맸었다(😖)
하지만 잘 완성!!!!!!!!!!!!!!

![](https://velog.velcdn.com/images/whkfk12/post/2b76e560-befd-4f54-baef-1602911ec0c1/image.gif)

> 하지만 나는 그냥 내가 리셋을 누르기 전까지 멈추지않고 감소, 증가되는 카운터를 만들고 싶었다. 왜냐? 어제 걷기반에서 `setInterval()`을 배웠기 때문이지.
이걸 보자마자 바로 저걸로 만들어 보고 싶단 생각을 했다.

```javascript
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');
const number = document.querySelector('#number-counter');

let count = 0; 
let intervalId;

function updateDisplay() {
    number.textContent = count;
    if (count < 0) {
        number.style.color = "red";
    } else if (count === 0) {
        number.style.color = "yellow";
    } else {
        number.style.color = "green";
    }
}

function startInterval(direction) {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        count += direction;
        updateDisplay();
    }, 1000);
}

decrease.addEventListener("click", function (){
    clearInterval(intervalId);
    if (count > 0) {
        count -= 1;
        updateDisplay();
    }
    startInterval(-1);
});

increase.addEventListener("click", function (){
    clearInterval(intervalId);
    count += 1;
    updateDisplay();
    startInterval(1);
});

reset.addEventListener("click", function() {
    clearInterval(intervalId);
    count = 0;
    updateDisplay();
});

updateDisplay(); 
```
각 버튼마다 이벤트 리스너를 추가 해줬는데,`setInterval()`방식으로 줬다는 것이다. 함수를 만들어 주고 1초마다 증가나 감소를 하게 해주었다!

여기에는 양수 음수 0마다 초기값을 주지않고 조건문으로 양수라면 음수라면 0이라면 이 색으로 할거야!라고 주었다. `clearInterval()`도 잊지않고 넣어줬다(😘❗)

완성 !!!!!!!!!!!!

![](https://velog.velcdn.com/images/whkfk12/post/772eb158-a387-43cf-a8da-8799226d07c4/image.gif)

<hr>

한가지 프로젝트라도 여러 방식으로 도전하면서 만들어보니까 재미있었다.
사실 이론과 기본 예제들만 보고 있으면 이걸 그래서 어디디가 사용하는데라는 생각이
강했었는데, 이렇게 한두가지씩 주말에 만들어보니까 뿌듯하고 대견!

