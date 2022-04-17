// CONSTANTS DEFINED BELOW
const body = document.querySelector("body");

// select all elements with class hover
const dropdownContainers = document.querySelectorAll(".has-dropdown");

// select dropdowns
const dropdown1 = document.getElementById("dropdown1");
const dropdown2 = document.getElementById("dropdown2");

// select arrows-icons
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");

// select the menu icon
const menu = document.getElementById("menu");

// select the menu icon
const menuIcon = document.getElementById("menu-icon");

// select the close icon
const closeIcon = document.getElementById("close-icon");

// select the overlay
const overlay = document.getElementById("overlay");

// EVENT LISTENERS ADDED BELOW
// add click event listener to body
body.addEventListener("click", handleCloseAllDropdowns);

// add hover event listener to all elements with class hover
dropdownContainers.forEach(function (element) {
  element.addEventListener("click", handleToggleDropdown);
});

// add click event listeners to each of the menu icon, close icon and overlay
menuIcon.addEventListener("click", handleOpenMobileMenu);
//you can close the mobile menu by either clicking the close icon or the overlay
closeIcon.addEventListener("click", handleCloseMobileMenu);
overlay.addEventListener("click", handleCloseMobileMenu);

// FUNCTIONS DEFINED BELOW
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

function handleOpenMobileMenu() {
  menu.style.left = "36.2vw";
  overlay.classList.remove("invisible");
  body.classList.add("no-scroll");
}
function handleCloseMobileMenu() {
  menu.style.left = "50rem";
  overlay.classList.add("invisible");
  body.classList.remove("no-scroll");
}
