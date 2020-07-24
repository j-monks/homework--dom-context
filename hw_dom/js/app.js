document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded");

    const form = document.querySelector("#new-item-form");
    form.addEventListener("submit", handleFormSubmit);

    const deleteAllButton = document.querySelector("#delete-all");
    deleteAllButton.addEventListener("click", handleDeleteClick);
});

const handleFormSubmit = function(event) {
    event.preventDefault();

    const name = this.name.value;
    const species = this.species.value;
    const continent = this.continent.value;
    
    console.log("form values:", name, species, continent);

    const endangeredAnimalsList = document.querySelector("#endangered-list");
    const newListItem = document.createElement("li");
    newListItem.textContent = `${name} ${species} ${continent}`
    endangeredAnimalsList.appendChild(newListItem);
}

const handleDeleteClick = function(event) {

}