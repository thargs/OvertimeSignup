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
   firebase.auth().createUserWithEmailAndPassword(userEmail,userPassword).then(function(user){
    
    database.ref('users/' + user.uid).set({
        name: userName,
        email: userEmail,
        privilage: userPrivilage,
        phone:""

    })

  
    //Here if you want you can sign in the user
  })
   
   //documentation on .then or .done
   //overwrite firebase user keys with authentication user ID

   .catch(function (error){
       console.log(error.code)
       console.log(error.message)
   })

    
   
   alert('account successfully created')
   $('#user-name').val('')
   $('#user-email').val('')
   $('#user-password').val('')
   
 

})

// add users to page when accounts are created

database.ref('users').on('child_added',function(snapshot){
    userkey = snapshot.key
    console.log(snapshot.key)
    
    $('#user-table').append('<tr><td>'+ snapshot.val().name + '</td> <td>'+ snapshot.val().email +'</td>' + '<td>' + snapshot.val().privilage + '</td> </tr>')  

    
});

//prevents submission when hitting enter
$(document).ready(function() {
    $(document).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
    //finds next input box
    $('.form-control').keydown(function (e) {
        if (e.which === 13) {
            var index = $('.form-control').index(this) + 1;
            $('.form-control').eq(index).focus();
        }
    });
  });
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
