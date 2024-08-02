add_problem_button.addEventListener("click", function() {
    popup.classList.add("show");
});

close_popup.addEventListener("click", function() {
    popup.classList.remove("show");
});

window.addEventListener("click", function (event) {
    if (event.target == popup) {
        popup.classList.remove("show");
    }
});