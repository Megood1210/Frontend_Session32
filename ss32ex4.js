const errorElement = document.querySelector("#error");
const inputElement = document.querySelector("#email");
const btnElement = document.querySelector("#btn");

btnElement.addEventListener("click", function (event) {
    event.preventDefault();
    const emailValue = inputElement.value; // Lấy giá trị nhập vào
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
     // Hiện thị dòng kiểm tra email
    if (!emailPattern.test(emailValue)) { // test để kiểm tra đúng định dạng 
        errorElement.style.display = "block";
        errorElement.textContent = "email không hợp lệ!";
        errorElement.style.color = "red";
    } else {
        errorElement.style.display = "block";
        errorElement.textContent = "email hợp lệ!";
        errorElement.style.color = "green";
    }
});
