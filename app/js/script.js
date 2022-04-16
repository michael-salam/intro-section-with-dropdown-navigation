// select all elements with class hover
const dropdownContainers = document.querySelectorAll(".has-dropdown");
// select dropdowns
const dropdown1 = document.querySelector("#dropdown1");
const dropdown2 = document.querySelector("#dropdown2");
// select arrows-icons
const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");

const body = document.querySelector("body");

body.addEventListener("click", handleCloseAllDropdowns);

// add hover event listener to all elements with class hover
dropdownContainers.forEach(function (element) {
  element.addEventListener("click", handleToggleDropdown);
});

function handleToggleDropdown(e) {
  if (e.target.id === "has-dropdown1") {
    if (!dropdown2.classList.contains("invisible")) {
      // if first dropdown is clicked, reset the styles for the other
      dropdown2.classList.add("invisible");
      arrow2.classList.replace("arrow-up", "arrow-down");
    }
    if (dropdown1.classList.contains("invisible")) {
      dropdown1.classList.remove("invisible");
      arrow1.classList.replace("arrow-down", "arrow-up");
    } else {
      dropdown1.classList.add("invisible");
      arrow1.classList.replace("arrow-up", "arrow-down");
    }
  } else if (e.target.id === "has-dropdown2") {
    if (!dropdown1.classList.contains("invisible")) {
      // if second dropdown is clicked, reset the styles for the other
      dropdown1.classList.add("invisible");
      arrow1.classList.replace("arrow-up", "arrow-down");
    }
    if (dropdown2.classList.contains("invisible")) {
      dropdown2.classList.remove("invisible");
      arrow2.classList.replace("arrow-down", "arrow-up");
    } else {
      dropdown2.classList.add("invisible");
      arrow2.classList.replace("arrow-up", "arrow-down");
    }
  }
}

function handleCloseAllDropdowns(e) {
  // use conditional to make sure what is being clicked is not either of the dropdowns
  if (e.target.id !== "has-dropdown1" && e.target.id !== "has-dropdown2") {
    // make both dropdowns disappear
    dropdown1.classList.add("invisible");
    dropdown2.classList.add("invisible");

    // make both arrows face down
    arrow1.classList.replace("arrow-up", "arrow-down");
    arrow2.classList.replace("arrow-up", "arrow-down");
  }
}
