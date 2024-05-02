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

function getStory(){
  var usEr = document.getElementById("usern").value;
  var stAte = document.getElementById("state").value;
  var zipCode = document.getElementById("zcode").value;
  var pHone = document.getElementById("phone").value;
  var emAiL = document.getElementById("myemail").value;
  var passW = document.getElementById("myInput").value;
  var storyName = document.getElementById("story").value;
  console.log("story name:"+storyName);
  document.getElementById("output").innerHTML= story;
  console.log("output :" +story );

  var storyData = {
    timestamp: Date.now(),
    username: usEr,
    state: stAte,
    zipcode: zipCode,
    phone: pHone,
    email: emAiL,
    password: passW,
    storyName: storyName,
    }
    return storyData;
  }
function createMadLibstory(){
  var storyData = getStory();
  console.log("storydata: " + storyData)
}

function saveMadLib() {
  console.log("saveMadLib called: ");
  var storyData = getStory();
  var storyName = document.getElementById("story").value;
  //this method saves the madllib to the database
  console.log("saveMadLib: " + storyData);
  // then, save the story and storyData to the database
  db.collection("ChessClubJuan").doc(storyData.storyName).set(storyData);
  alert(storyData.storyName + " has been saved to the database");
}

function retrieveMadLib(){
  //first, ask the used for the story name they want to retrieve
  var storyName = prompt("Enter the name of the story you want to retrieve (in console):"); db.collection("ChessClubJuan")
  .doc(storyName)
  .get()
  .then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      var storyData = doc.data();
      console.log("storyName: " + storyData.storyName);
      document.getElementById("usern").innerHTML  = storyData.username;
      document.getElementById("state").innerHTML = storyData.state;
      document.getElementById("zcode").innerHTML = storyData.zipcode;
      document.getElementById("phone").innerHTML = storyData.phone;
      document.getElementById("myemail").innerHTML = storyData.email;
      document.getElementById("myInput").innerHTML = storyData.password;
      document.getElementById("story").innerHTML = storyData.storyName;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      document.getElementById("story").value = "Story not found";
    }
    //this method retrieves an existing story from the database to the console , not the webpage
    console.log("retrieveMadLib: " + storyName);
  })
  .catch((error) => {
    console.log("Error getting document:", error);
    document.getElementById("story").innerHTML = "Story not found";
  });
}
function editMadLib() {
  //this method retrieves an existing story from the database to the webpage ( in the imput box)
  console.log("editMadLib: " + storyData);
  var storyData = prompt("Enter the name of the story you want to pop up in the form:"); db.collection("ChessClubJuan")
  .doc(storyData)
  .get()
  .then((doc) => {
      if (doc.exists) {
        console.log("Document data: ", doc.data());
        var storyData = doc.data();
        document.getElementById("usern").value  = storyData.username;
        document.getElementById("state").value = storyData.state;
        document.getElementById("zcode").value = storyData.zipcode;
        document.getElementById("phone").value  = storyData.phone;
        document.getElementById("myemail").value = storyData.email;
        document.getElementById("myInput").value = storyData.password;
        document.getElementById("story").value  = storyData.storyName;
    } else {
      // doc.data () will be undefined in this case
      console.log("No such document!");
      document.getElementById("story").value = "Story not found";
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
    document.getElementById("story").innerHTML = "Story not found";
  });
}
function deleteMadLib() {
  console.log("deleteMadLib() called : ");
  var storyData = prompt("Enter the name of the story you want to delete:");db.collection("ChessClubJuan")
  .doc(storyData)
  .get()
  .then((doc) => {
    if(doc.exists){
      console.log("Story Doc data: ", doc.data());
      var storyData = doc.data();
      document.getElementById("story").innerHTML= storyData.storyName + " has been deleted from the database"; db.collection("ChessClubJuan").doc(storyData.storyName).delete();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      document.getElementById("story").innerHTML  = "Story not found";
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
    document.getElementById("story").innerHTML = "Story not found";
  });
  }



