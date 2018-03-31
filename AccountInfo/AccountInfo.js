var config = {
    apiKey: "AIzaSyB0dAgb7yuWMXudizarT0dvLIympmXmUAw",
    authDomain: "overtime-signup.firebaseapp.com",
    databaseURL: "https://overtime-signup.firebaseio.com",
    projectId: "overtime-signup",
    storageBucket: "overtime-signup.appspot.com",
    messagingSenderId: "94543825971"
};
firebase.initializeApp(config);

var user = firebase.auth().currentUser;
var email, password, firstname, lastname

if (user != null) {
    firstname = user.fistname
    email = user.email;
    password = user.password
    lastname = user.lastname
}
console.log(currentUser)


$(document).ready(function () {
    $("Email").html(email);
    $("Password").html(password);
    $("First").html(firstname);
    $("Last").html(lastname);

});

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
