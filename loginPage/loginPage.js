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
    //firebase authentication
    var auth = firebase.auth();
    var promise = auth.signInWithEmailAndPassword(loginEmail,loginPassword);
    promise.catch(e => console.log(e.message))
   
   alert('successfully logged in')
   

})