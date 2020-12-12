import React, { Component } from 'react';

import "note.css";

class Note extends Component {
    constructor(props) {
        super(props);
    }

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
        return (

        )
    }
}

export default Note;
