const playTo = document.querySelector('#playto');
const p1But = document.querySelector('#p1Button');
const p2But = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#resetButton');

let isGameOver = false;
let winningScore = parseInt(playTo.value);
let p1Score = 0;
let p2Score = 0;

p1But.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1
        if (p1Score === winningScore) {
            p1Display.style.color="green";
            p2Display.style.color="red";
            p1But.style.opacity="0.5"
            p2But.style.opacity="0.5"
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }


}
)
p2But.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1
        if (p2Score === winningScore) {
            p1Display.style.color="red";
            p2Display.style.color="green";
            p1But.style.opacity="0.5"
            p2But.style.opacity="0.5"
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
}
)

playTo.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);


function reset(){
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.style.color="black";
    p2Display.style.color="black";
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1But.style.opacity="1"
    p2But.style.opacity="1"
}