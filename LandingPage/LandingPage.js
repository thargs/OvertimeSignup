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





$('#topLeft').click(function() {
    window.location.href = '../openEventsSignup/openeventsignup.html';
    return false;
});
$('#topRight').click(function() {
    window.location.href = '../';
    return false;
});
$('#midLeft').click(function() {
    window.location.href = '../AccountInfo/AccountInfo.html';
    return false;
});
$('#midRight').click(function() {
    window.location.href = '../eventPage/eventPage.html';
    return false;
});
$('#botLeft').click(function() {
    window.location.href = '../eventPage/eventPage.html';
    return false;
});
$('#botRight').click(function() {
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

if ((snapshot.child("privilage").getValue().equals("Basic"))){
    $('#midRight').hide
} else {
    $('#midRight').show
};

if ((snapshot.child("privilage").getValue().equals("Basic"||"Coordinator"))){
    $('#botLeft').show
} else {
    $('#botLeft').hide
};

if ((snapshot.child("privilage").getValue().equals("Basic"||"Coordinator"))){
    $('#botRight').show
} else {
    $('#botRight').hide
};

