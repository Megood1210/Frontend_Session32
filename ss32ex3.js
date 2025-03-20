const formElement = document.querySelector("#form");
const inputElement = document.querySelector("#subject-name");
const btnElement = document.querySelector("#btn-submit");
const errorElement = document.querySelector("#error");
const listSubjectElement = document.querySelector("#list-job");
let subjects = [];

function renderSubject() {
  listSubjectElement.innerText = "";  // Xóa danh sách cũ
  // Duyệt qua danh sach đẻ thêm li, nội dung
  subjects.forEach((subject) => {
    const liElement = document.createElement("li");
    liElement.textContent = subject.name;
    listSubjectElement.appendChild(liElement);
  });
}
//Lấy dữ liệu khi bấm nút
formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const subjectName = inputElement.value.trim(); 

  //Không nhập thì thông báo lỗi
  if (!subjectName) {
    alert("tên môn học không được để trống!");
    errorElement.style.display = "block";
    return;
  }
 //Thêm môn vào danh sách
  errorElement.style.display = "none";
  const newSubject = {
    id: Math.ceil(Math.random() * 10000),
    name: subjectName,
    status: false,
  };
  subjects.push(newSubject);
  inputElement.value = "";
  renderSubject();
  console.log("subjects: ", subjects);
});
