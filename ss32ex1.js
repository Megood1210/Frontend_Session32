const changeColor = document.getElementById("btn-1");
const switchColor = document.getElementById("btn-2");
changeColor.addEventListener("click", function() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    let firstBlock = document.querySelector(".block-1");
    firstBlock.style.background = randomColor;
});
switchColor.addEventListener("click", function() {
    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    let secondBlock = document.querySelector(".block-2");
    secondBlock.style.background = color;
});


