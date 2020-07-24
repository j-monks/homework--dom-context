document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded");

    const form = $addEvent("#new-item-form", "submit", handleFormSubmit);
    const deleteAllButton = $addEvent("#delete-all", "click", handleDeleteClick);
});


const handleFormSubmit = function(event) {
    event.preventDefault();

    const name = this.name.value;
    const species = this.species.value;
    const continent = this.continent.value;
    const remaining = this.remaining.value;

    const endangeredAnimalsList = $select("#endangered-list");
    const newListItem = $createEle("li");
    newListItem.textContent = `Name: ${name} | Species: ${species} | Continent: ${continent} | ${remaining}`
    endangeredAnimalsList.appendChild(newListItem);

    this.reset();
};

const handleDeleteClick = function(event) {
    const endangeredAnimalsList = $select("#endangered-list");
    endangeredAnimalsList.innerHTML = "";
}

// selects a HTML element helper function
function $select(seletor) {
    return document.querySelector(seletor);
};

// creates a HTML element helper function
function $createEle(element) {
    return document.createElement("li");
};

// addEventListener to queried element
function $addEvent(selector, type, nameOfCallBack) {
    element = $select(selector);
    return element.addEventListener(type, nameOfCallBack);
}
