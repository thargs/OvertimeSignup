var config = {
    apiKey: "AIzaSyB0dAgb7yuWMXudizarT0dvLIympmXmUAw",
    authDomain: "overtime-signup.firebaseapp.com",
    databaseURL: "https://overtime-signup.firebaseio.com",
    projectId: "overtime-signup",
    storageBucket: "overtime-signup.appspot.com",
    messagingSenderId: "94543825971"
};
firebase.initializeApp(config);

var database = firebase.database();


   
    database.ref('sign-up log').on("child_added", function (childSnapshot) {

        var eventName
        var eventDate
        var ofcWorking
        console.log('2ndchild', childSnapshot.val());
        ofcWorking = childSnapshot.val().user;
        eventName = childSnapshot.val().event;
        eventDate = childSnapshot.val().date;
    
        $("#eventTable>tbody").append("<tr><td>" + eventName + "</td><td>" + eventDate + "</td><td>" + ofcWorking + "</td></tr>");
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
