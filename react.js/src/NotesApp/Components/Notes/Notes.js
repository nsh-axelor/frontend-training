import React from 'react';
import AddNote from './AddNotes';
import Note from './Note';

function Notes({notes,handleSaveNote,handleDeleteNote}) {
  return <div className='notes'>
    {
        notes.map(({id,note,date}) => (
            <Note note={note} key={id} date={date} id={id} handleDeleteNote={handleDeleteNote}/>
        ))
    }
    <AddNote handleSaveNote={handleSaveNote} />
  </div>;
}

export default Notes;
