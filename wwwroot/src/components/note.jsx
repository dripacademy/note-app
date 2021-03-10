import { useEffect, useState } from 'react';

import {getNotes} from "../api/note";
import "./note.css";


const Note = (content, author) => {
    return (
        <div class="note">
            <p class="content">
                {this.props.content}
            </p>
            <p class="author">{this.props.author}</p>
        </div>
    )
}

const Notes = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        const notes = getNotes();
        setData(notes);
        setLoading(false);
    }, []);

    if (isLoading) {
        return <h1 className="loading">Loading...</h1>
    } else {
        var notes = [];
        console.log(data);
        if (data != false) {
            data.forEach((note) => {
                notes.push(Note(note.content, note.author));
            })
        } else {
            notes = <h1>No notes found</h1>;
        }

        return (
            <div class="Notes">
                {notes}
            </div>
        )
    }
}

export default Notes;
