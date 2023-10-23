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

function pop_upAddTask() {
    const popupAddTask = document.getElementById("popupAddTask");

    if(popupAddTask.style.display == "none") {
        popupAddTask.style.display = "flex";
    } else {
        popupAddTask.style.display = "none";
    }
}

function addTask(newTask) {
    const popup = document.getElementById(newTask);
    var title = popup.querySelector(".criarTarefa_content input");
    var description = document.getElementById("newTaskDescription");
    const listaTarefas = document.getElementById("listaTarefas");
    var tarefas = listaTarefas.querySelectorAll(".tarefa");

    var li = document.createElement("li");
    li.addEventListener("click", function() {
        TaskDesk(this);
    });
    li.className = "tarefa";

    var btn = document.createElement("button");
    var icon1 = document.createElement("i");
    icon1.className = "fa-solid fa-up-down-left-right";
    btn.appendChild(icon1);
    li.appendChild(btn);

    var div1 = document.createElement("div");
    div1.className = "tarefaDesk";
    //titulo
    var h4 = document.createElement("h4");
    h4.textContent = title.value;
    div1.appendChild(h4);
    //descrição
    var subDiv1 = document.createElement("div");
    var icon2 = document.createElement("i");
    icon2.className = "fa-solid fa-align-left";
    var p = document.createElement("p");
    p.textContent = description.value;
    subDiv1.appendChild(icon2);
    subDiv1.appendChild(p);
    div1.appendChild(subDiv1);
    li.appendChild(div1);

    var div2 = document.createElement("div");
    div2.className = "checkbox";
    //input
    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = "chk" + (tarefas.length + 1);
    input.className = "checkbox";
    input.name = "chk";
    div2.appendChild(input);
    //checkbox
    var check = document.createElement("label");
    check.setAttribute("for", "chk" + (tarefas.length + 1));
    div2.appendChild(check);
    li.appendChild(div2);

    listaTarefas.appendChild(li);
    title.value = "";
    description.value = "";
    pop_upAddTask();
}