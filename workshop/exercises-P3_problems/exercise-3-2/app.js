// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const buttonList = document.querySelector("#btn-list");

for (let id = 1; id < 5; id++) {
  const buttonTarget = document.getElementById(`btn-${id}`);
  buttonTarget.style.opacity = "100";
  buttonTarget.style.backgroundColor = "yellow";
}

const colorToggle = (id, color) => {
  const button = document.getElementById(id);
  button.style.backgroundColor =
    button.style.backgroundColor === "yellow" ? color : "yellow";
};

const buttonClick = (e) => {
  const buttonId = e.target.id;
  const button = document.getElementById(buttonId);

  switch (buttonId) {
    case "btn-1":
      button.style.opacity = 0;
      break;

    case "btn-2":
      turnYellow(buttonId, "crimson");
      break;

    case "btn-3":
      turnYellow(buttonId, "lightblue");
      break;
    case "btn-4":
      button.classList.toggle("jitters");
      break;
    default:
      break;
  }
};

buttonList.addEventListener("click", buttonClick);
