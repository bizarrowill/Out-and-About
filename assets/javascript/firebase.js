// Initialize Firebase
var config = {
  apiKey: "AIzaSyBpj78TUXM4dHQ60BxLpeB8VHcTsdwNQRc",
  authDomain: "project-1-c63b2.firebaseapp.com",
  databaseURL: "https://project-1-c63b2.firebaseio.com",
  projectId: "project-1-c63b2",
  storageBucket: "project-1-c63b2.appspot.com",
  messagingSenderId: "9690953747"
};
firebase.initializeApp(config);
// Create a variable to reference the database
var dataRef = firebase.database();
// Initial values
var zipcode = "";
// Capture Button Click
$("#submit").on("click", function(event) {
  event.preventDefault();
  // Coding logic for storing and retrieving the most current zip code
  zipcode = $("#address")
    .val()
    .trim();

  dataRef.ref().push({
    zipcode: zipcode
  });
});
// Firebase watcher + initial loader
// database.ref().on("value", function(snapshot) {
// This writes it into the h1
//   $("#display").html(snapshot.val().zipcode);
// });

dataRef.ref().on(
  "child_added",
  function(childSnapshot) {
    // console.log(childSnapshot.val().zipcode);

    // Full list of zipcodes

    $("#full-zipcode-list").append(childSnapshot.val().zipcode + " " + " | ");

    // Handle the errors
  },
  function(errorObject) {
    // console.log("Errors handled: " + errorObject.code);
  }
);
