import React from 'react';
import axios from 'axios';
import qs from 'qs';
import {useFormik} from 'formik';
import * as Yup from 'yup';

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

/*
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
*/

const NoteForm = () => {
    const formik = useFormik({
        initialValues: {
            content: '',
            author: '',
        },
        validationSchema: 
            Yup.object({
                content: Yup.string()
                            .min(3, 'Must be 3 characters or more')
                            .max(255, 'Must be 255 characters or less')
                            .required('Required'),
                author: Yup.string()
                            .min(3, 'Must be 3 characters or more')
                            .max(16, 'Must be 16 characters or less')
                            .required('Required'),
            }),
        onSubmit: values => {
            postNote(values.content, values.author);
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="content">Content</label>
        <input
            id="content"
            name="content"
            type="content"
            onChange={formik.handleChange}
            value={formik.values.content}
        />
        <div>{formik.errors.content}</div>
        <label htmlFor="author">Author</label>
        <input
            id="author"
            name="author"
            type="author"
            onChange={formik.handleChange}
            value={formik.values.author}
        />
        <div>{formik.errors.author}</div>
        <button type="submit">Submit</button>
        </form>
    );
}

export default NoteForm;
