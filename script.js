var stateUp = document.getElementById("state").value;
var x = document.getElementById("myInput");
var checkBox = document.getElementById("myCheck");

function upperCase() {
  stateUp.value = state.value.toUpperCase();
}
// If the checkbox is checked, display the output password
function myFunction() {
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function clicksubmitted() {
  prompt("Your data have been submitted succesfully");
}