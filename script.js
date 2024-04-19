var txt = document.getElementById("state");
var x = document.getElementById("password").value;
var checkBox = document.getElementById("myCheck");


function upperletters() { 
  x = txt.upppercase(); 
  print(x)
}

  // If the checkbox is checked, display the output password
  function myFunction() {
    if (checkBox.checked == true) {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function clicksubmitted() {
    prompt("Your data have been submitted succesfully");
  }