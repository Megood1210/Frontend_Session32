const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
// Them nhiem khi bam nut 
addTaskBtn.onclick = function () {
    const taskText = taskInput.value;
    // Tạo phần tử nhiệm vụ mới
    const li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="btn btn-danger btn-sm delete-btn">X</button>
    `;
    // Thêm vào danh sách
    taskList.appendChild(li);
    taskInput.value = "";
    // Xóa nhiệm vụ
    li.querySelector(".delete-btn").onclick = function () {
        if (confirm("Ban co muon xoa nhiem vu nay khong")) {
            li.remove();// Xóa
        }
    };
};