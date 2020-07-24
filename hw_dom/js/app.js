document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded");

    const form = document.querySelector("#new-item-form");
    form.addEventListener("submit", handleFormSubmit);

    const deleteAllButton = document.querySelector("#delete-all");
    deleteAllButton.addEventListener("click", handleDeleteClick);
});

const handleFormSubmit = function(event) {
    event.preventDefault();
}

const handleDeleteClick = function(event) {
    
}