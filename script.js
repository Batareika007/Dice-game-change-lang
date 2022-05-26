// random number 1 - 6

var random_num = Math.floor(Math.random() * 6) + 1;


const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

// generate number on button click -- main function 
document.getElementById("btn").addEventListener("click", start_game);

function start_game() {
    let player1_dice = ("dice" + (Math.floor(Math.random() * 6) + 1));
    let player2_dice = ("dice" + (Math.floor(Math.random() * 6) + 1));
    player1.classList.remove(player1.classList[0]);
    player1.classList.add(player1_dice);
    player2.classList.remove(player2.classList[0]);
    player2.classList.add(player2_dice);
    if (player1_dice > player2_dice) {

        if (leng === 'rus') {
            console.log("Первый Игрок Выиграл");
            document.querySelector("#result").textContent = "Первый Игрок Выиграл";
        } else if (leng === 'heb') {
            console.log("שחקן ראשון ניצח");
            document.querySelector("#result").textContent = "שחקן ראשון ניצח";
        } else {
            console.log("Player One wins");
            document.querySelector("#result").textContent = "Player One wins";
        }

    } else if (player1_dice < player2_dice) {

        if (leng === 'rus') {
            console.log("Второй Игрок Выиграл");
            document.querySelector("#result").textContent = "Второй Игрок Выиграл";
        } else if (leng === 'heb') {
            console.log("שחקן שני ניצח");
            document.querySelector("#result").textContent = "שחקן שני ניצח";
        } else

        {
            console.log("Player Two wins");
            document.querySelector("#result").textContent = "Player Two wins";
        }
    } else {

        if (leng === 'rus') {
            console.log("Ничья")
            document.querySelector("#result").textContent = "Ничья";
        } else if (leng === 'heb') {
            console.log("תיקו")
            document.querySelector("#result").textContent = "תיקו";

        } else {
            console.log("it's a draw")
            document.querySelector("#result").textContent = "It's Draw";
        }
    }
    console.log("player1: " + player1_dice);
    console.log("player2: " + player2_dice);
}


// change lang
let leng = ''

document.getElementById("russia").addEventListener("click", russian_leng);

function russian_leng() {
    leng = 'rus';
    document.querySelector(".player1").textContent = "Первый игрок";
    document.querySelector(".player2").textContent = "Второй игрок";
    document.querySelector("h1").textContent = "Игра в кости";
    document.querySelector("h3").textContent = "Нажми на кнопку чтоб начать игру";
    document.querySelector("#btn").textContent = "Кидай Кубики";
}

document.getElementById("english").addEventListener("click", english_leng);

function english_leng() {
    leng = 'eng';
    document.querySelector(".player1").textContent = "Player One";
    document.querySelector(".player2").textContent = "Player Two";
    document.querySelector("h1").textContent = "The Dice Games";
    document.querySelector("h3").textContent = "Push the button to start";
    document.querySelector("#btn").textContent = "roll the dice";
}

document.getElementById("hebrew").addEventListener("click", hebrew_leng);

function hebrew_leng() {
    leng = 'heb';
    document.querySelector(".player1").textContent = "שחקן ראשון";
    document.querySelector(".player2").textContent = "שחקן שני";
    document.querySelector("h1").textContent = "משחק הקוביות";
    document.querySelector("h3").textContent = "לחץ על הכפתור כדי להתחיל";
    document.querySelector("#btn").textContent = "גלגל את הקוביות";
}