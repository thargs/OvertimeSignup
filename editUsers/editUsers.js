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
    userName = $('#user-name').val()
    userEmail = $('#user-email').val()
    userPassword = $('#user-password').val()
    userPrivilage= $('.custom-select').val()
    console.log(userName,userEmail,userPassword,userPrivilage)
    //firebase authentication
   firebase.auth().createUserWithEmailAndPassword(userEmail,userPassword)
   //documentation on .then or .done
   //overwrite firebase user keys with authentication user ID

   .catch(function (error){
       console.log(error.code)
       console.log(error.message)
   })

    database.ref('users').push({
        name: userName,
        email: userEmail,
        password: userPassword,
        privilage: userPrivilage
    })
   
   alert('account successfully created')
   $('#user-email').val('')
   $('#user-password').val('')
   
 

})

// add users to page when accounts are created

database.ref('users').on('child_added',function(snapshot){
    userkey = snapshot.key
    console.log(snapshot.key)
    
    $('#user-table').append('<tr><td>'+ snapshot.val().email+'</td>'+'<td>'+ snapshot.val().password + '</td>' + '<td>' + snapshot.val().privilage + '</td> </tr>')  

    
});