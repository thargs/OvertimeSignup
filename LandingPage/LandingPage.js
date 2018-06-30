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


firebase.auth().onAuthStateChanged(function (user) {

    if (user == null) {
        console.log('not logged in')
        window.location = '../index.html'
    }

    firebase.database().ref('users/' + user.uid).once('value').then(function (snapshot) {
        newFunction(snapshot.val().privilage);
    });
})


$('#openEvents').click(function () {
    window.location.href = '../openEventsSignup/openeventsignup.html';
    return false;
});

$('#reports').click(function () {
    window.location.href = '../reportsPage/index.html';
    return false;
});
$('#addEvents').click(function () {
    window.location.href = '../eventPage/eventPage.html';
    return false;
});
$('#addUsers').click(function () {
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
/*firebase.auth().onAuthStateChanged(function (user) {
    if (user != null) {
        debugger;
        firebase.ref("users/" + user.uid).once(function (snapshot) {
            // if ((snapshot.child("privilage").getValue().equals("Basic"))){
            //     $('#midRight').hide
            // } else {
            //     $('#midRight').show
            // };
        });


    }
})*/


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
            window.location = '../index.html'
            console.log('sign out successful')
        })
        .catch(function (error) {
            console.log(error.message)
            console.log(error.code)
        });
});




function newFunction(privilage) {


    if (privilage === "Basic") {
        $('#openEvents').show();
    }
    else {
        $('#reports').hide();
        $('#addEvents').hide();
        $('#addUsers').hide();
        $('#openEvents').hide();
    }
    if (privilage === "Admin") {
        $('#reports').show();
        $('#openEvents').show();
    }
    else {
        $('#reports').hide();
        $('#addEvents').hide();
        $('#addUsers').hide();
    }
    if (privilage === "Coordinator") {
        $('#reports').show();
        $('#addEvents').show();
        $('#addUsers').show();
        $('#openEvents').show();
    }


};


