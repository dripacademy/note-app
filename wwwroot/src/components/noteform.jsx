import React from 'react';
import './noteform.css';

function postNote(content, author) {
    const XHR = new XMLHttpRequest();
    let urlEncodedData = "",
        urlEncodedDataPairs = [];

    urlEncodedDataPairs.push(encodeURIComponent("author") + '=' + encodeURIComponent(author));
    urlEncodedDataPairs.push(encodeURIComponent("content") + '=' + encodeURIComponent(content));

    // Combine the pairs into a single string and replace all %-encoded spaces to 
    // the '+' character; matches the behaviour of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

    // Define what happens on successful data submission
    XHR.addEventListener('load', function(event) {
        alert('Yeah! Data sent and response loaded.');
    });

    // Define what happens in case of error
    XHR.addEventListener('error', function(event) {
        alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open('POST', window.$server + '/note');

    //XHR.setRequestHeader('Access-Control-Allow-Origin', '*');
    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Finally, send our data.
    XHR.send(urlEncodedData);
}

class NoteForm extends React.Component {
    render() {
        return (
        <div class="NoteForm">
            <input type="text" minLenght="3" maxLength="255" name="content" id="content" placeholder="please enter your note here"/>
            <input type="text" minLenght="3" maxLength="32" name="author" id="author" placeholder="please enter thy name"/>
            <button onClick={() => postNote(document.getElementById('content').value,document.getElementById('author').value)} value="write note.">ok</button>
        </div>
        );
    }
}

export default NoteForm;
