import React, { Component } from 'react';

import "./note.css";

function getNotes() {
    const XHR = new XMLHttpRequest();

    // Define what happens on successful data submission
    XHR.addEventListener('load', function(event) {
        alert('Yeah! Data sent and response loaded.');
    });

    // Define what happens in case of error
    XHR.addEventListener('error', function(event) {
        alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open('GET', window.$server + '/note');

    //XHR.setRequestHeader('Access-Control-Allow-Origin', '*');
    // Add the required HTTP header for form data POST requests
    //XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Finally, send our data.
    XHR.send();

    return XHR.responseText;
}

class Note extends Component {
    render() {
        return (
            <div class="note">
                <p class="content">
                    {this.props.content}
                </p>
                <p class="author">{this.props.author}</p>
            </div>

        )
    }
}

class Notes extends Component {
    render() {

        var notes = getNotes();
        console.log(notes);
        notes = JSON.parse(notes);
        var rendered = "";

        notes.forEach(element => {
            rendered += <Note content={element.content} author={element.author}/>
        });

        return (
            rendered
        )
    }
}

export default Notes;
