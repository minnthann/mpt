var tasks = {};

var createTask = function(taskText, taskDate, taskList) {
    var taskLi = $("<li>").addClass("list-group-item");
    var taskSpan = $("<span>")
        .addClass("badge badge-primary badge-pill")
        .text(taskDate);
    var taskP = $("<p>")
        .addClass("m-1")
        .text(taskText);

    taskLi.append(taskSpan, taskP);

    $("#list-" + taskList).append(taskLi);
};

var loadTasks = function(){
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = {
            toDo: [],
            inProgress: [],
            inReview: [],
            done: []
        };
    }
    
    $.each(tasks, function(list, arr) {
        console.log(list, arr);
        arr.forEach(function(task) {
            createTask(task.text, task.date, list);
        });
    });
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};


// modal was triggered

$("#task-form-modal").on("show.bs.modal", function(){
    $("#modalTaskDescription, #modalDueDate").val("");
});

$("#task-form-modal").on("shown.bs.modal", function() {
    $("#modalTaskDescription").trigger("focus");
});

$("#task-form-modal .btn-primary").click(function() {
    var taskText = $("#modalTaskDescription").val();
    var taskDate = $("#modalDueDate").val();

    if (taskText && taskDate) {
        createTask(taskText, taskDate, "toDo");

        $("#task-form-modal").modal("hide");
        tasks.toDo.push({
            text: taskText,
            date: taskDate
        });
        saveTasks();
    }
});


$("#remove-tasks").on("click", function() {
    for (var key in tasks) {
        tasks[key].length = 0;
        $("#list-" + key).empty();
    }
});

loadTasks();