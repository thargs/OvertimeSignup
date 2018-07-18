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

$('#reports').hide();
$('#addEvents').hide();
$('#addUsers').hide();
$('#openEvents').hide();

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

    if (privilage === "Admin") {
        $('#reports').show();
        $('#openEvents').show();
    }

    if (privilage === "Coordinator") {
        $('#reports').show();
        $('#addEvents').show();
        $('#addUsers').show();
        $('#openEvents').show();
    }


};


