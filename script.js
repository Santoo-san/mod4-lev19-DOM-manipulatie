console.log("Beginning");

const buttonAction = () => {
  const buttons = document.querySelectorAll(".big-five-button");
  // console.log(buttons);
  // console.log(buttonAction);
  buttons.forEach(function (buttons) {
    buttons.addEventListener("click", clickedAnimal);
  });
};

const clickedAnimal = (event) => {
  console.log("clicked button:", event.target.textContent);
  const spottedAnimal = event.target.textContent;
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(spottedAnimal));
  const list = document.getElementById("spotted-animals-list");
  list.appendChild(listItem);
};

const removeButton = document.getElementById("remove-first-item-button");
// console.log(removeButton);

const removeFirst = () => {
  const firstListItem = document.getElementById("spotted-animals-list")
    .firstChild;
  firstListItem.remove();
  console.log("removeOneClickedy");
};

const removeAllButton = document.getElementById("remove-all-button");
// console.log(removeAllButton);

const removeAll = () => {
  removeAllButton.addEventListener("click", function () {
    const allListItems = document.getElementById("spotted-animals-list");
    allListItems.querySelectorAll("*").forEach((n) => n.remove());
    console.log("removeAllClickedy");
  });
};

buttonAction();
removeFirst();
removeButton.addEventListener("click", removeFirst);
removeAll();
console.log("The End");
