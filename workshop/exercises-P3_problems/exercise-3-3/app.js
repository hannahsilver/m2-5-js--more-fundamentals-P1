// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.
const buttonList = document.querySelector("#btn-list");

const reset = () => {
  for (let id = 1; id < 5; id++) {
    const buttonTarget = document.getElementById(`btn-${id}`);
    buttonTarget.style.opacity = "100";
    buttonTarget.style.backgroundColor = "yellow";
    if (id === 4 && buttonTarget.classList === "jitters");
    {
      buttonTarget.classList.remove("jitters");
    }
  }
};

reset();

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
    case "reset":
      reset();
      break;
    default:
      break;
  }
};

buttonList.addEventListener("click", buttonClick);
