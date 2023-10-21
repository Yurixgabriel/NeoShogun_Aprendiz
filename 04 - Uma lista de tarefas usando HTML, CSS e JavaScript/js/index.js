function TaskDesk(task) {
    const taskDesk = document.getElementById("detalhesTarefa");
    var taskTitle = document.getElementById("taskTitle");
    var taskDescription = document.getElementById("taskDescription");
    
    if(taskDesk.style.display == "none") {
        taskDesk.style.display = "flex";
        
        var desk = task.querySelector(".tarefaDesk");
        var h4 = desk.querySelector("h4");
        var p = desk.querySelector("div p")

        taskTitle.textContent = h4.textContent;
        taskDescription.textContent = p.textContent;
    } else {
        taskDesk.style.display = "none";
    }
}