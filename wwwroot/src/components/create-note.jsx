import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {postNote} from "../api/note";
import './create-note.css';

const onSubmit = async (values) => {
    const success = await postNote(values.content, values.author);
    if (success) {
        alert("Successfully wrote note to db");
    } else {
        alert("Could not write note to db");
    }
}

const CreateNote = () => {
    const formik = useFormik({
        initialValues: {
            content: '',
            author: '',
        },
        validationSchema: 
            Yup.object({
                content: Yup.string()
                            .required('Required')
                            .min(3, 'Must be 3 characters or more')
                            .max(255, 'Must be 255 characters or less'),
                author: Yup.string()
                            .required('Required')
                            .min(3, 'Must be 3 characters or more')
                            .max(16, 'Must be 16 characters or less'),
            })
    });

    return (
        <form onSubmit={onSubmit(formik.values)}>
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

export default CreateNote;
