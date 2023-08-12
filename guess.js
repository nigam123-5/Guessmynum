

//generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

//Switch from section1 to section2
function start() {
    sec1.style.display = "none";
    sec2.style.display = "flex";
}

//check plural
function plural(a) {
    return a <= 1 ? "Guess" : "Guesses";
}

let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");
let esy = document.getElementById("esy");
let med = document.getElementById("med");
let hrd = document.getElementById("hrd");
let max = document.getElementById("max");
let num = document.getElementById("num");
let msg = document.getElementById("msg");
let tri = document.getElementById("tri");
let again = document.getElementById("again");
let list = document.getElementById("list");
let result = document.getElementById("result");
let st = document.getElementById("st");
let remaining = document.getElementById("remaining");

let guess, left, noOfGuess;

function add() {
    list.innerHTML += `<li>${num.value} (${msg.innerHTML})</li>`;
    num.value = "";
    left--;
    rem.innerHTML = `${left} ${plural(left)} left`;
}

function success() {
    tri.style.display = "none";
    again.style.display = "block";
    num.style.display = "none";
    st.style.display = "none";
}

//main function run check higher lower and equal
function play() {
    if (num.value == "") {
        alert("Please enter some value");
    } else if (left < 1) {
        msg.innerHTML = "";
        result.innerHTML = "Better luck next time!!";
        alert(`You lose the game, number is: ${guess}`);
        success();
    } else if (num.value < 1 || num.value > maximum) {
        alert(`You must enter value between 1 and ${maximum}`);
        add();
    } else if (num.value > guess && left > 0) {
        msg.innerHTML = "Go Lower";
        add();
    } else if (num.value < guess && left > 0) {
        msg.innerHTML = "Go Higher";
        add();
    } else if (num.value == guess) {
        result.innerHTML = "Congratulations";
        msg.innerHTML = "you guessed";
        add();
        msg.innerHTML = `You guess the number ${guess} <br/>And you exactly take ${Number(
            noOfGuess - left
        )} ${plural(Number(noOfGuess - left))} `;
        success();
    }
}

//when easy button calls
function start1() {
    start();
    max.innerHTML = 10;
    guess = randomNumber(1, 10);
    maximum = 10;
    left = remaining.innerHTML = 5;
    noOfGuess = 5;
}

//when medium button calls
function start2() {
    start();
    max.innerHTML = 100;
    guess = randomNumber(1, 100);
    maximum = 100;
    left = remaining.innerHTML = 10;
    noOfGuess = 10;
}

//when hard button calls
function start3() {
    start();
    max.innerHTML = 1000;
    guess = randomNumber(1, 1000);
    maximum = 1000;
    left = remaining.innerHTML = 15;
    noOfGuess = 15;
}

//for play again
function restart() {
    location.reload();
    // sec1.style.display = "flex";
    // sec2.style.display = "none";
}

//By pressing enter values are accepted
num.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        tri.click();
    }
});