import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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

ReactDOM.render(
    <InputField/>,
  document.getElementById('root')
);