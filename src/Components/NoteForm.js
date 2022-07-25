import React, { useState } from 'react';
import getCurrentDate from '../getCurrentDate';

const NoteForm = ({ setNotes, notes }) => {
    const [note, setNote] = useState(['', null]);

    const onButtonClick = () => {
        if (note[0]) {
            setNotes([...notes, note]);
        }
        setNote(['', null]);
    };

    return (
        <div className='ui segment'>
            <form className='ui form' onSubmit={(e) => e.preventDefault()}>
                <div className='inline field'>
                    <div className='ui fluid action input'>
                        <input
                            type='text'
                            placeholder='Enter your note'
                            value={note[0]}
                            onChange={(e) =>
                                setNote([e.target.value, getCurrentDate()])
                            }
                        />
                        <div
                            className='ui primary button'
                            onClick={onButtonClick}
                        >
                            Add note
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NoteForm;
