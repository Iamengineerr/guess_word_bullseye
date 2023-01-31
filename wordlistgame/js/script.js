
const input = document.querySelector(".inputs");
reserbtn = document.querySelector(".reset-btn");
hint = document.querySelector(".hint span");
typingInput = document.querySelector(".typing-input");

let word;

function randomWord() {
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    let word = ranObj.word;
    console.log(ranObj);

    hint.innerText = ranObj.hint;

    let html  = "";
    for (let i = 0; i < array.length; i++) {
        html += '<input type="text" disabled>';
        
    }
    inputs.innerHTML = html;



}
randomWord();
function initGame(e) {
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/)){
    console.log(key);
    if(word.include(key)){
        console.log("letter found");
    } else {
        console.log("not fount");
    }
    }
}

resetBtn.addEventListener("click", randomWord);
resetBtn.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());