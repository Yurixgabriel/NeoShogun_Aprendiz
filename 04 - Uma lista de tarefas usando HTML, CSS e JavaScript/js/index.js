var taskReference = "";

function TaskDesk(task) {
    const taskDesk = document.getElementById("detalhesTarefa");
    var taskTitle = document.getElementById("taskTitle");
    var taskDescription = document.getElementById("taskDescription");
    const popupDeletTask = document.getElementById("popupDeletTask");
    const btn = document.getElementById("btnTrash");
    
    if(taskDesk.style.display == "none") {
        taskDesk.style.display = "flex";
        
        var desk = task.querySelector(".tarefaDesk");
        var h4 = desk.querySelector("h4");
        var p = desk.querySelector("div p")

        taskTitle.textContent = h4.textContent;
        taskDescription.textContent = p.textContent;
    } else {
        taskDesk.style.display = "none";

        if(popupDeletTask.style.display !== "none") {
            popupDeletTask.style.display = "none";
            btn.classList.remove("btnAtiveted");
        }
    }

    taskReference = task;
}

function deletarTarefa() {
    const taskDesk = document.getElementById("detalhesTarefa");
    const popupDeletTask = document.getElementById("popupDeletTask");
    const btn = document.getElementById("btnTrash");

    taskReference.remove();

    if(popupDeletTask.style.display !== "none") {
        popupDeletTask.style.display = "none";
        btn.classList.remove("btnAtiveted");
    }
    if(taskDesk.style.display !== "none") {
        taskDesk.style.display = "none";
    }
};

function deletTask() {
    const popupDeletTask = document.getElementById("popupDeletTask");
    const btn = document.getElementById("btnTrash");

    if(popupDeletTask.style.display == "none") {
        popupDeletTask.style.display = "flex";
        btn.className = "btnAtiveted";
    } else {
        popupDeletTask.style.display = "none";
        btn.classList.remove("btnAtiveted");
    }
}