// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const buttonList = document.querySelector("#btn-list");

const buttonClick = (e) => {
  const buttonId = e.target.id;
  const button = document.getElementById(buttonId);

  switch (buttonId) {
    case "btn-1":
      button.style.opacity = 0;
      break;

    case "btn-2":
      button.style.background = "crimson";
      break;

    case "btn-3":
      button.style.background = "lightblue";
      break;
    case "btn-4":
      button.classList.add("jitters");
      break;
    default:
      break;
  }
};

buttonList.addEventListener("click", buttonClick);
