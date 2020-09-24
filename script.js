console.log("Beginning");

const buttonAction = () => {
  const buttons = document.querySelectorAll(".big-five-button");
  console.log(buttons);
  buttons.addEventListener("click", function () {
    buttons.classList.add("red");
  });
};

buttonAction();
console.log("The End");
