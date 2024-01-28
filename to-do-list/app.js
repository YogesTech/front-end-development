document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    document.getElementById("addTask").addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;

            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });
});
