const colors = ['red', 'green', 'blue', 'yellow'];
let sequence = [];
let userSequence = [];
let level = 1;
let score = 0;

function startGame() {
    sequence = [];
    userSequence = [];
    level = 1;
    score = 0;
    updateScore();
    nextSequence();
}

function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score:  ${score}`;
}

function nextSequence() {
    userSequence = [];
    AddRandomColor();
    playSequence();
}

function AddRandomColor() {
    const randomColor = colors[Math.floor(Math.random() * 4)];
    sequence.push(randomColor);
}

function playSequence() {
    let i = 0;
    const intervalId = setInterval(() => {
        highlight(sequence[i]);
        console.log(sequence[i]); 
        i++;
        if (i >= sequence.length) {
            clearInterval(intervalId);
        }
    }, 1000);
}

function highlight(color) {
    const element = document.querySelector(`.${color}`);
    element.classList.add("active");
    setTimeout(() => {
        element.classList.remove("active");
    }, 500);
}

function checkUserClick() {
    if (userSequence.length === sequence.length) {
        if (arraysEqual(userSequence, sequence)) {
            level++;
            score++;
            updateScore();
            setTimeout(nextSequence, 1000);
        } else {
            alert(`Perdu! score:  ${score}`);
            startGame();
        }
    }
}

function userClick(color) {
    userSequence.push(color);
    checkUserClick();
}

function arraysEqual(arr1, arr2) {
    return arr1.every((value, index) => value === arr2[index]);
}

const button = document.querySelector('button');
button.addEventListener('click', startGame);

const red = document.querySelector('.red');
red.addEventListener('click', () => {
    userClick('red');
    // console.log('red'); 
});

const green = document.querySelector('.green');
green.addEventListener('click', () => {
    userClick('green');
    // console.log('green'); 
});

const blue = document.querySelector('.blue');
blue.addEventListener('click', () => {
    userClick('blue');
    // console.log('blue'); 
});

const yellow = document.querySelector('.yellow');
yellow.addEventListener('click', () => {
    userClick('yellow');
    // console.log('yellow'); 
});
