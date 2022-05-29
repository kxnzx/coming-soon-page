// This tells the browser to pay attention to the following elements:
const form = document.getElementById("form");

// This tells the browser to prevent the form from submitting by default:
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const small = form.querySelector("small");
  // The value attribute sets the specified value of the input element:
  const inputEmail = form["email"].value;

  if (!inputEmail) {
    // When the field is left empty, do this:
    email.classList.add("error");
    small.innerText = "Whoops! It looks like you forgot to add your email";
    small.style.display = "inline-block";
  } else if (!isValidEmail(inputEmail)) {
    // When the input is invalid, do this:
    email.classList.add("error");
    small.innerText = "Please provide a valid email address";
    small.style.display = "inline-block";
  } else {
    // When the input is valid, do this:
    email.classList.remove("error");
    small.innerText = "";
    small.style.display = "none";
  }
});
// REGEX = Regular Expression
function isValidEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
