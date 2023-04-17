// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");


// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");
  document.getElementById("home").classList.toggle("header-container-dark-mode");
  document.getElementById("petition").classList.toggle("petition-container-dark-mode");
}


// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);



// Add your query for the sign now button here
const signNowButton = document.getElementById("sign-now-button")

const addSignature = (event) => {
  // Write your code to manipulate the DOM here
  let name = document.getElementById("name").value;
  let town = document.getElementById("town").value;
  let email = document.getElementById("email").value;
  let signatures = document.querySelector(".signatures");

  const newP = document.createElement("p");
  const newContent = document.createTextNode("🖊️ " + name + " from " + town + " supports this.");
  newP.innerText = newContent.nodeValue;
  signatures.appendChild(newP);

}

// Add a click event listener to the sign now button here
//signNowButton.addEventListener("click", addSignature);




// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    // TODO: Validate the value of each input
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
  
  if(containsErrors == false) {
    // TODO: Call addSignature() and clear fields if no errors
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }


}

signNowButton.addEventListener('click', validateForm);