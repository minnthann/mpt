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

// 4.new
$(".card .list-group").sortable({

    connectWith: $(".card .list-group"),
    scroll: false,
    tolerance: "pointer",
    helper: "clone",
    activate: function(event, ui) {
        console.log(ui);
    },
    deactivate: function(event, ui) {
        console.log(ui);
    },
    over: function(event) {
        console.log(event);
    },
    out: function(event) {
        console.log(event);
    },
    update: function() {
        var tempArr = [];

        $(this)
            .children()
            .each(function() {
                tempArr.push({
                    text: $(this)
                    .find("p")
                    .text()
                    .trim(),
                    date: $(this)
                    .find("span")
                    .text()
                    .trim()
                });
            });

            var arrName = $(this)
            .attr("id")
            .replace("list-", "");

            tasks[arrName] = tempArr;
            saveTasks();
    },
    stop: function(event) {
        $(this).removeClass("dropover");
    }
});


$("#trash").droppable({
    accept: ".card .list-group-item",
    tolerance: "touch",
    drop: function(event, ui) {
        ui.draggable.remove();
    },
    over: function(event, ui) {
        console.log(ui);
    },
    out: function(event, ui) {
        console.log(ui);
    }
});

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

$(".list-group").on("click", "p", function() {

    var text = $(this)
        .text()
        .trim();

        var textInput = $("<textarea>")
            .addClass("form-control")
            .val(text);
        $(this).replaceWith(textInput);

        textInput.trigger("focus");
});

$(".list-group").on("blur", "textarea", function() {
    var text = $(this).val();

    var status = $(this)
        .closest(".list-group")
        .attr("id")
        .replace("list-", "");
    var index = $(this)
        .closest(".list-group-item")
        .index();

    tasks[status][index].text = text;
    saveTasks();

    var taskP = $("<p>")
        .addClass("m-1")
        .text(text);

    $(this).replaceWith(taskP);
});

$(".list-group").on("click", "span", function() {
    var date = $(this)
        .text()
        .trim();

    var dateInput = $("<input>")
        .attr("type", "text")
        .addClass("form-control")
        .val(date);
    $(this).replaceWith(dateInput);

    dateInput.trigger("focus");
});

$(".list-group").on("change", "input[type='text']", function() {
    var date = $(this).val();

    var status = $(this)
        .closest(".list-group")
        .attr("id")
        .replace("list-", "");
    var index = $(this)
        .closest(".list-group-item")
        .index();

    tasks[status][index].date = date;
    saveTasks();

    var taskSpan = $("<span>")
        .addClass("badge badge-primary badge-pill")
        .text(date);
    $(this).replaceWith(taskSpan);
});

$("#remove-tasks").on("click", function() {
    for (var key in tasks) {
        tasks[key].length = 0;
        $("#list-" + key).empty();
    }
    console.log(tasks);
    saveTasks();
});


loadTasks();