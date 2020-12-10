import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// rust backend server
window.$server = "localhost:8080";

class Hello extends React.Component {
  render() {
    return (
        <h1>Hello World!</h1>
    );
  }
}

class InputField extends React.Component {
    render() {
        return (
            <input
                name="note"
                id="note"
                type="text"
                minlength="3"
                maxlength="255"
                size="16"
                placeholder="please enter your note here."
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
            <InputField/>
            <input type="submit" value="write note."/>
        </form>
        );
    }
}

ReactDOM.render(
    <NoteForm/>,
  document.getElementById('root')
);