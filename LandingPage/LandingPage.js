// Initialize Firebase
var config = {
    apiKey: "AIzaSyB0dAgb7yuWMXudizarT0dvLIympmXmUAw",
    authDomain: "overtime-signup.firebaseapp.com",
    databaseURL: "https://overtime-signup.firebaseio.com",
    projectId: "overtime-signup",
    storageBucket: "overtime-signup.appspot.com",
    messagingSenderId: "94543825971"
};
firebase.initializeApp(config);





$('#topLeft').click(function () {
    window.location.href = '../openEventsSignup/openeventsignup.html';
    return false;
});
$('#topRight').click(function () {
    window.location.href = '../';
    return false;
});
$('#midLeft').click(function () {
    window.location.href = '../AccountInfo/AccountInfo.html';
    return false;
});

$('#midRight').click(function() {
    window.location.href = '../reportsPage/reportsPage.html';
    return false;
});
$('#botLeft').click(function () {
    window.location.href = '../eventPage/eventPage.html';
    return false;
});
$('#botRight').click(function () {
    window.location.href = '../editUsers/editusers.html';
    return false;
});

//if (Admin, Coordinator, Basic) {
//$('#topLeft').show
//} else {
//$('#topLeft').hide
//};

//if (Admin, Coordinator, Basic) {
//$('#topRight').show
//} else {
//$('#topRight').hide
//};

//if (Admin, Coordinator, Basic) {
//$('#midLeft').show
//} else {
//$('#midLeft').hide
//};
firebase.auth().onAuthStateChanged(function(user){
      if(user != null){
        debugger;
        firebase.ref("users/" + user.uid).once(function(snapshot) {
            // if ((snapshot.child("privilage").getValue().equals("Basic"))){
            //     $('#midRight').hide
            // } else {
            //     $('#midRight').show
            // };
        });
          
            
      }
  })


/*if ((snapshot.child("privilage").getValue().equals("Basic"))) {
    $('#midRight').hide
} else {
    $('#midRight').show
};

if ((snapshot.child("privilage").getValue().equals("Basic" || "Admin"))) {
    $('#botLeft').hide
} else {
    $('#botLeft').show
};

if ((snapshot.child("privilage").getValue().equals("Basic" || "Admin"))) {
    $('#botRight').hide
} else {
    $('#botRight').show
};*/

$('#logout').on('click', function () {
    event.preventDefault();
    firebase.auth().signOut()
        .then(function () {
            window.location = '/index.html'
            console.log('sign out successful')
        })
        .catch(function (error) {
            console.log(error.message)
            console.log(error.code)
        });
});
var user = firebase.auth().currentUser;
var ref = firebase.database().ref(user);
ref.once("value")
    .then(function (snapshot) {
        if (snapshot.child("Basic").exists()) {
            $('#midRight').hide
        } else {
            $('#midRight').show
        }
    });
ref.once("value")
    .then(function (snapshot) {
        if (snapshot.child("Basic" || "Admin").exists()) {
            $('#botLeft').hide
        } else {
            $('#botLeft').show
        }
    });
ref.once("value")
    .then(function (snapshot) {
        if (snapshot.child("Basic" || "Admin").exists()) {
            $('#botRight').hide
        } else {
            $('#botRight').show
        }
    });
