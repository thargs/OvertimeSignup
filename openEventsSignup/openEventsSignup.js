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
database.ref('events').on('child_added',function(snapshot){
    console.log('test1')
    console.log(snapshot.key)
    
    $('#event-table').append('<tr><td>'+ snapshot.val().addEvent +'</td>'+'<td>'+ snapshot.val().postTime + '</td>' + '<td>' + snapshot.val().eventDate + '</td>' +' <td>' + snapshot.val().eventTime + '</td>' + '<td>' + snapshot.val().endTime + '</td>' + '<td>' + snapshot.val().eventLocation + '</td>' + '<td>' + snapshot.val().eventDetails + '</td>' + '<td> <button value='+ snapshot.key +' class="btn btn-danger sign-up"> Sign-up </button> </td></tr>')  

    
});


$(document).on('click','.sign-up',function(){
   
    alert('Successfully signed-up!')
    // capturing event id
    var eventId = this.value
    // capture uid
    var uid = firebase.auth().currentUser.uid
    
    

    database.ref('sign-up log').push({
        user: uid,
        event: eventId
    })


    console.log(eventId,uid)
    $(this).text('Successfully signed up!')
    $(this).attr('class',' btn btn-secondary disabled')
   
})










