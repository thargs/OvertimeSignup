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

//initial values
var userEmail;
var userpassword;
var userPrivilage;

$('#submit-new-user').on('click',function(){
    event.preventDefault();
    userEmail = $('#user-email').val()
    userPassword = $('#user-password').val()
    userPrivilage= $('.custom-select').val()
    console.log(userEmail,userPassword,userPrivilage)
    //firebase authentication
    var auth = firebase.auth();
    var promise = auth.createUserWithEmailAndPassword(userEmail,userPassword);
    promise.catch(e => console.log(e.message))
   
   alert('account successfully created')
   $('#user-email').val('')
   $('#user-password').val('')
   
 

})