const firebaseConfig = {
  apiKey: "AIzaSyALse2PTTwh2QTpCq_vQKWhZBCZeOCwBH8",
  authDomain: "chessclubjuan.firebaseapp.com",
  projectId: "chessclubjuan",
  storageBucket: "chessclubjuan.appspot.com",
  messagingSenderId: "84526898536",
  appId: "1:84526898536:web:fcb5351806591f5b7b4add",
  measurementId: "G-Q37XVBQ42N"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("firebase setup complete!");


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

