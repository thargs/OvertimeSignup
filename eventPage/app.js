var config = {
    apiKey: "AIzaSyB0dAgb7yuWMXudizarT0dvLIympmXmUAw",
    authDomain: "overtime-signup.firebaseapp.com",
    databaseURL: "https://overtime-signup.firebaseio.com",
    projectId: "overtime-signup",
    storageBucket: "overtime-signup.appspot.com",
    messagingSenderId: "94543825971"
};
firebase.initializeApp(config);
var functions = firebase.functions();

// Create a variable to reference the database.
var database = firebase.database();
// Initial Values
var addEvent;
var eventDate;
var postTime;
var eventTime;
var endTime;
var ofcNeeded
var eventLocation;
var eventDetails;
// Capture Button Click
$("#add-event").on("click", function (event) {
    event.preventDefault();
    // Grabbed values from text-boxes
    addEvent = $("#addEvent").val().trim();
    eventDate = $("#eventDate").val().trim();
    postTime = $("#postTime").val().trim();
    eventTime = $("#eventTime").val().trim();
    endTime = $("#endTime").val().trim();
    ofcNeeded = $("#ofcNeeded").val().trim();
    eventLocation = $("#eventLocation").val().trim();
    eventDetails = $("#eventDetails").val().trim();

    console.log(addEvent, eventDate, postTime, eventTime, endTime, ofcNeeded, eventLocation, eventDetails);

    //Setting values in the database
    database.ref('events').push({
        addEvent: addEvent,
        eventDate: eventDate,
        postTime: postTime,
        eventTime: eventTime,
        endTime: endTime,
        ofcNeeded: ofcNeeded,
        eventLocation: eventLocation,
        eventDetails: eventDetails
    }).then(function(){
        var emailAlert = firebase.functions().httpsCallable('emailAlert');
        emailAlert()
    });

        $("#addEvent").val("");
        $("#eventDate").val("");
        $("#postTime").val("");
        $("#eventTime").val("");
        $("#endTime").val("");
        $("#ofcNeeded").val("");
        $("#eventLocation").val("");
        $("#eventDetails").val("");



});

//logout button to log out of Firebase

$('#logout').on('click',function(){
    event.preventDefault();
    firebase.auth().signOut()
    .then(function() {
     window.location = '../index.html'
      console.log('sign out successful')
    })
    .catch(function(error) {
     console.log(error.message)
     console.log(error.code)
    });
}) 


firebase.auth().onAuthStateChanged(function(user){
   
   if(user == null){
     console.log('not logged in')
   window.location = '../index.html'  
   }
   var CurrentUser=firebase.auth().currentUser.uid
console.log(CurrentUser)

})
