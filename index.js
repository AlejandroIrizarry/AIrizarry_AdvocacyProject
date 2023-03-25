// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");


// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");
  document.getElementById("home").classList.toggle("header-container-dark-mode");
}


// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);