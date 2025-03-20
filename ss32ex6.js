let textElement = document.getElementById("text");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let fontSize = 20;  // Kích thước mặc định
//Tăng size chữ
increaseBtn.addEventListener("click", function () {
    if (fontSize < 50) { // Giới hạn tối đa
        fontSize += 2;
        textElement.style.fontSize = fontSize + "px";
    }
});
//Giảm size chữ
decreaseBtn.addEventListener("click", function () {
    if (fontSize > 10) { // Giới hạn tối thiểu
        fontSize -= 2;
        textElement.style.fontSize = fontSize + "px";
    }
});