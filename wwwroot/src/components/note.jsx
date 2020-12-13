import React, { Component } from 'react';
import axios from 'axios';

import "./note.css";

async function getNotes() {
    axios({
        method: "get",
        url: window.$server + '/note',
    }).then(
        function (res) {
            console.log(res.data);
            console.log(res.status);
            console.log(res.statusText);
            return res.data;
        }
    ).catch(err => console.log("Axios err: ", err));
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
        var rendered = "<h1>h1</h1>";

        notes.forEach(element => {
            rendered += <Note content={element.content} author={element.author}/>
        });

        return (
            rendered
        )
    }
}

export default Notes;
