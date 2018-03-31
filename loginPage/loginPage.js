var config = {
    apiKey: "AIzaSyB0dAgb7yuWMXudizarT0dvLIympmXmUAw",
    authDomain: "overtime-signup.firebaseapp.com",
    databaseURL: "https://overtime-signup.firebaseio.com",
    projectId: "overtime-signup",
    storageBucket: "overtime-signup.appspot.com",
    messagingSenderId: "94543825971"
};
firebase.initializeApp(config);



// Create a variable to reference the database.
var database = firebase.database()
// initial variables
var loginEmail;
var loginPassword;

$('#user-login').on('click',function(){
    event.preventDefault();
    loginEmail = $('#login-email-input').val()
    loginPassword = $('#login-password-input').val()
   
    console.log(loginEmail, loginPassword)
    
   
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Invalid Username\n" + errorMessage);
    });
   

})

 firebase.auth().onAuthStateChanged(function(user){
     console.log('not logged in')
       if(user != null){
       window.location = 'LandingPage/LandingPage.html'
        console.log('user logged in')
        
       }
   })

   $('#logout').on('click',function(){
       event.preventDefault();
       firebase.auth().signOut()
       .then(function() {
        window.location = '/index.html'
         console.log('sign out successful')
       })
       .catch(function(error) {
        console.log(error.message)
        console.log(error.code)
       });
   })
// test capture uid
 /*  $('#test-button').on('click',function (){
       var uid = firebase.auth().currentUser.uid
       event.preventDefault();
       console.log(uid)
   }) 
   */
  
   /// GOES ON EVERY SINGLE PAGE
   /*
   firebase.auth().onAuthStateChanged(function(user){
    
    if(user == null){
      console.log('not logged in')
    window.location = '/index.html'  
    }
    var CurrentUser=firebase.auth().currentUser.uid
console.log(CurrentUser)

})
*/