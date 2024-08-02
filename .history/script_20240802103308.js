add_problem_button.addEventListener("click", function() {
    add-todo-problem.classList.add("show");
});

close_popup.addEventListener("click", function() {
    add-todo-problem.classList.remove("show");
});

window.addEventListener("click", function (event) {
    if (event.target == add-todo-problem) {
        add-todo-problem.classList.remove("show");
    }
});