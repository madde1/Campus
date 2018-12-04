// NOTE: If you run this file locally
// You will not get a server status
// You can comment out lines 9 and 26 to make it work locally

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
    // The following conditional check will not work locally - only on a server
    //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // Loop through object
        newContent += '<div class="event">';
        newContent += '<p><b>' + responseObject.events[i].rad1 + '</b><br>';
        if(responseObject.events[i].rad2) {
            newContent += responseObject.events[i].rad2 + '<br>';
        }
        if(responseObject.events[i].rad3) {
        newContent += responseObject.events[i].rad3 + '<br>';
        }
        if(responseObject.events[i].rad4) {
        newContent += responseObject.events[i].rad4 + '</p> ';
        }
        newContent += '</div>';
    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;

    //}
};

xhr.open('GET', '../java/json/data/datajavakontakt.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).