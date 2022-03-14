// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBbTtYajEvQIu1p7_F4qPAtedMsSAUcQgA",
  authDomain: "school-student-s-record.firebaseapp.com",
  databaseURL: "https://school-student-s-record-default-rtdb.firebaseio.com",
  projectId: "school-student-s-record",
  storageBucket: "school-student-s-record.appspot.com",
  messagingSenderId: "509371229066",
  appId: "1:509371229066:web:38c25145094e4f13fa1e73",
  measurementId: "G-NT4Z27P1NX",
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('records/');

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  // get all the values
  var name = getInputVal("name");
  var roll = getInputVal("roll");
  var year = getInputVal("year");
  var part = getInputVal("part");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  console.log(name);
  saveMessage(name, roll, year, part, email, phone);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, roll, year, part, email, phone) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    roll: roll,
    year: year,
    part: part,
    email: email,
    phone: phone,
  });
}
