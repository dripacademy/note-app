import { useEffect, useState } from 'react';

import {getNotes} from "../api/note";
import "./note.css";


const Note = async (content, author) => {
    return (
        <div class="note">
            <p class="content">
                {this.props.content}
            </p>
            <p class="author">{this.props.author}</p>
        </div>
    )
}

const Notes = async () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        setData(getNotes());
        setLoading(false);
    }, []);

    if (isLoading) {
        return <h1 className="loading">Loading...</h1>
    } else {
        var notes = [];
        data.forEach((note) => {
            notes.push(Note(note.content, note.author));
        })
        return (
            <div class="Notes">
                {notes}
            </div>
        )
    }
}

export default Notes;
