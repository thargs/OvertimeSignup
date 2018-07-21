// initialize firebase
var config = {
    apiKey: "AIzaSyB0dAgb7yuWMXudizarT0dvLIympmXmUAw",
    authDomain: "overtime-signup.firebaseapp.com",
    databaseURL: "https://overtime-signup.firebaseio.com",
    projectId: "overtime-signup",
    storageBucket: "overtime-signup.appspot.com",
    messagingSenderId: "94543825971"
};
firebase.initializeApp(config);

// creates a variable to reference firebase
var database = firebase.database();


//appends info to table when programs are pushed to 'events' tree in firebase
database.ref('events').on('child_added', function (snapshot) {
    //if officers needed is not 0, then display else, return null
    var needed = snapshot.val().ofcNeeded
    if (needed !== 0){
        $('#event-table').append('<tr><td>' + snapshot.val().addEvent + '</td>' + '<td>' + snapshot.val().postTime + '</td>' + '<td>' + snapshot.val().eventDate + '</td>' + ' <td>' + snapshot.val().eventTime + '</td>' + '<td>' + snapshot.val().endTime + '</td>' + '<td>' + snapshot.val().eventLocation + '</td>' + '<td>' + snapshot.val().eventDetails + '</td>' + '<td> <button id=' + snapshot.val().addEvent + ' class="btn btn-danger sign-up" data-key =' + snapshot.key + '> Sign-up </button> </td></tr>')
    }else{
        return null;
    }
        // console.log('test1')
        //console.log(snapshot.key)
        eventName = snapshot.val().eventName
    console.log(snapshot.key)
    


});


$(document).on('click', '.sign-up', function (event) {

    // alert('Successfully signed-up!')
    // capturing event id
    var eventKey = event.target.dataset.key
    var eventId = this.id
    var eventDate = this.value
    var key = this.key
    console.log(eventId)
    //console.log(eventDate)
    //console.log(key)



    // capture uid
    var uid = firebase.auth().currentUser.email




    database.ref('sign-up log').push({
        user: uid,
        event: eventId,
        date: eventDate
    })


    // decriment officers needed
    var ref = firebase.database().ref('events/' + eventKey + '/ofcNeeded');
    console.log(ref)
    ref.transaction(function (officersneeded) {
        var int = parseInt(officersneeded)
        var newValue = int - 1
        console.log(newValue)
        return newValue




    });



    $(this).text('Successfully signed up!')
    $(this).attr('class', ' btn btn-secondary disabled')

})

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
})





firebase.auth().onAuthStateChanged(function (user) {

    if (user == null) {
        console.log('not logged in')
        window.location = '../index.html'
    }

})









