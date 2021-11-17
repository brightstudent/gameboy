var knopA = document.querySelector(".knop-a");
var knopB = document.querySelector(".richtingknoppen");
var schermDisplay = document.querySelector(".display");


function schermRood() {
    schermDisplay.classList.remove("gameover2x");
    schermDisplay.classList.toggle("gameover");
}

function schermZwart() {
    schermDisplay.classList.remove("gameover");
    schermDisplay.classList.toggle("gameover2x");
}

knopA.addEventListener("click", schermRood);
knopB.addEventListener("click", schermZwart);
