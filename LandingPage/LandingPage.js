$('#topLeft').click(function() {
    window.location.href = '../openEventsSignup/openeventsignup.html';
    return false;
});
$('#topRight').click(function() {
    window.location.href = '../some/new';
    return false;
});
$('#midLeft').click(function() {
    window.location.href = '../some/new';
    return false;
});
$('#midRight').click(function() {
    window.location.href = '../some/new';
    return false;
});
$('#botLeft').click(function() {
    window.location.href = '../some/new';
    return false;
});
$('#botRight').click(function() {
    window.location.href = '../some/new';
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

if (Basic) {
    $('#midRight').hide
} else {
    $('#midRight').show
};

if (Basic, Coordinator) {
    $('#botLeft').show
} else {
    $('#botLeft').hide
};

if (Basic, Coordinator) {
    $('#botRight').show
} else {
    $('#botRight').hide
};

