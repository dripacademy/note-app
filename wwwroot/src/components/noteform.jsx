import React from 'react';
import './noteform.css';

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
    /*
    constructor(props) {
        super(props);
        this.content = "";
        this.author = "";
    }
    */

    postData(content, author) {
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

    onChangeContent(element) {
        this.content = element.value
    }

    onChangeAuthor(element) {
        this.author = element.value
    }

    render() {

        return (
        <div class="NoteForm">
            <InputField maxLength="255" name="note" id="note" onChange={this.onChangeContent(this)} placeholder="please enter your note here"/>
            <InputField maxLength="32" name="author" id="author" onChange={this.onChangeAuthor(this)} placeholder="please enter thy name"/>
            <button onClick={this.postData(this.props.content, this.props.author)} value="write note."/>
        </div>
        );
    }
}

export default NoteForm;
