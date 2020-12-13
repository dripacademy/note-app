import React from 'react';
import axios from 'axios';
import qs from 'qs';

import './noteform.css';

async function postNote(content, author) {
    axios({
        method: "post",
        url: window.$server + '/note',
        data: qs.stringify({content: content, author: author}),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(
        function (res) {
            //console.log(res.data);
        }
    ).catch(err => console.log("Axios err: ", err));

}

class NoteForm extends React.Component {
    render() {
        return (
        <div class="NoteForm">
            <input type="text" minLength="3" maxLength="255" name="content" id="content" placeholder="please enter your note here"/>
            <input type="text" minLength="3" maxLength="32" name="author" id="author" placeholder="please enter thy name"/>
            <button onClick={() => postNote(document.getElementById('content').value,document.getElementById('author').value)} value="write note.">ok</button>
        </div>
        );
    }
}

export default NoteForm;
