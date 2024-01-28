document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    document.getElementById("addTask").addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;

            // You can add more functionality here (e.g., marking tasks as done, deleting tasks).

            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });
});
