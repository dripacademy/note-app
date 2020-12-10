import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// rust backend server
window.$server = "http://localhost:8080";

class InputField extends React.Component {
    render() {
        return (
            <input
                name={this.props.name}
                id={this.props.id}
                type="text"
                minLength="3"
                maxLength={this.props.maxlength}
                placeholder={this.props.placeholder}
            ></input>
        );
    }
}

class NoteForm extends React.Component {
    render() {
        // endpoint
        const address = window.$server + "/note";

        return (
        <form action={address} method="POST">
            <InputField maxLength="255" name="note" id="note" placeholder="please enter your note here"/>
            <InputField maxLength="32" name="author" id="author" placeholder="please enter your note here"/>
            <input type="submit" value="write note."/>
        </form>
        );
    }
}

class TestButton extends React.Component {

    sendData() {
        const XHR = new XMLHttpRequest();
        let urlEncodedData = "",
            urlEncodedDataPairs = [];

        urlEncodedDataPairs.push(encodeURIComponent("author") + '=' + encodeURIComponent("me"));
        urlEncodedDataPairs.push(encodeURIComponent("content") + '=' + encodeURIComponent("whatever you wish the content to be"));

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

        // Add the required HTTP header for form data POST requests
        XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Finally, send our data.
        XHR.send(urlEncodedData);
    }

    render() {
        return (
            <button onClick={this.sendData}>click me</button>
        );
    }
}

ReactDOM.render(
    <TestButton/>,
  document.getElementById('root')
);