import React from 'react';
import AddNote from './AddNotes';
import Note from './Note';

function Notes({notes,handleSaveNote,handleDeleteNote}) {
  return <div className='notes'>
    {
        notes.map(({id,note,date,category}) => (
            <Note note={note} key={id} date={date} id={id} handleDeleteNote={handleDeleteNote} category={category}/>
        ))
    }
    <AddNote handleSaveNote={handleSaveNote} />
  </div>;
}

export default Notes;
