function TaskDesk(task) {
    const taskDesk = document.getElementById("detalhesTarefa");
    
    if(taskDesk.style.display == "none") {
        taskDesk.style.display = "flex";
    } else {
        taskDesk.style.display = "none";
    }
}