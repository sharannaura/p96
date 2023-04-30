
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyDaeUf4VcDExFwMLTRjORqVuJY2pTWa-bA",
  authDomain: "project94-3107b.firebaseapp.com",
  projectId: "project94-3107b",
  storageBucket: "project94-3107b.appspot.com",
  messagingSenderId: "935820597922",
  appId: "1:935820597922:web:41764b2ea8a5827a18d5fb",
  measurementId: "G-ZPDDT0Q0GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

user_name = localStorage.getitem("user_name");
room_name = localStorage.getItem("room_name");

var firebaseConfige
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addroom()
{
  room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});
   localStorage.setItem("room_name", room_name);
   window.loction = "kwitter_page.html";
  

}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name")
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   window.location = "kwitter_page.html";
}

