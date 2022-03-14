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
// initialize firebase
firebase.initializeApp(config);

var records = [];
var firebaseRef = firebase.database().ref("records");
firebaseRef.on("value", function (snapshot) {
  snapshot.forEach(function (element) {
    records.push(`
      <tr>
        <td>${element.val().name} </td>
        <td>${element.val().roll} </td>
        <td>${element.val().year} </td>
        <td>${element.val().part} </td>
        <td>${element.val().email} </td>
        <td>${element.val().phone} </td>
      </tr>`
    );
    console.log(element.val().email);
    console.log(element.val());
    var list = document.getElementById("content");
    list.innerHTML = records.join("");
  });
});

// var recordsRef = firebase.database().ref("records/");
// recordsRef.on("value", (snapshot) => {
//   const data = snapshot.val();
//     // updateStarCount(postElement, data);
//   console.log(data);
//   console.log(typeof data);
// });
