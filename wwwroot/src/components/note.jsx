import React, { Component } from 'react';
import axios from 'axios';

import "./note.css";

async function getNotes() {
    const promise = axios({
        method: "get",
        url: window.$server + '/note',
    }).catch(err => console.log("Axios err: ", err));

    const dataPromise = promise.then(res => res.data)

    return dataPromise;
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
    /*
    constructor (props) {
        super(props);
        this.state = {
        }
    }
    */

    render() {
        var notes = getNotes().then(data => return JSON.parse(JSON.stringify(data)));
        console.log(notes);
        var notes = [{content: "yers", author: "meW"}, {content: "sod", author: "mauth"}]

        return (
            <div class="Notes">
                {notes.map(i => {
                    return <Note content={i.content} author={i.author}/>
                })
                }
            </div>
        )
    }
}

export default Notes;
