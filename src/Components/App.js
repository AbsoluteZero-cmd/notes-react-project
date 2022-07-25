import React, { useEffect, useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const App = () => {
    const [notes, setNotes] = useState([]);

    const onNoteDelete = (indexToDelete) => {
        setNotes(notes.filter((note, index) => index !== indexToDelete));
    };

    return (
        <div className='ui container'>
            <h1>Notes</h1>
            <NoteForm setNotes={setNotes} notes={notes} />
            <NoteList onNoteDelete={onNoteDelete} notes={notes} />
        </div>
    );
};

export default App;
