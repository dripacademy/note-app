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
                name={this.props.name}
                id={this.props.id}
                type="text"
                minlength="3"
                maxlength={this.props.maxlength}
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
            <InputField maxlength="255" name="note" id="note" placeholder="please enter your note here"/>
            <InputField maxlength="32" name="author" id="author" placeholder="please enter your note here"/>
            <input type="submit" value="write note."/>
        </form>
        );
    }
}

ReactDOM.render(
    <NoteForm/>,
  document.getElementById('root')
);