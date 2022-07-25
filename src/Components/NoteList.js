import React from 'react';

const NoteList = ({ onNoteDelete, notes }) => {
    const onButtonClick = (index) => {
        console.log(index);
        onNoteDelete(index);
    };

    const renderedNotes = notes.map((note, index) => {
        return (
            <div key={index}>
                <div className='ui attached segment'>
                    <div className='content'>
                        <div className='header'>{note[0]}</div>
                        <div className='meta'>{note[1]}</div>
                    </div>
                </div>
                <div
                    className='ui bottom attached blue button'
                    tabIndex='0'
                    onClick={() => onButtonClick(index)}
                >
                    Complete
                </div>
                <br />
            </div>
        );
    });

    return <div className=''>{renderedNotes}</div>;
};

export default NoteList;
