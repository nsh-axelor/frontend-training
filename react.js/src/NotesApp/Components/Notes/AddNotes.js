import React, { useState } from "react";

const charLimit = 200
function AddNote({ handleSaveNote }) {
  const [note, setNote] = useState("");
  const handleChange = (e) => {
      if(e.target.value.length <= charLimit){
        setNote(e.target.value)
      }
  }
  const handleClick = () => {
      if(note.trim().length > 0){
          handleSaveNote(note)
          setNote("")
      }
  }
  return (
    <div className="note new-note">
      <textarea
        onChange={handleChange}
        placeholder="Enter your new note here"
        rows="8"
        cols="10"
        value={note}
      />
      <div className="note-footer">
        <small>{charLimit - note.length} Remaining</small>
        <button
          className="save"
          onClick={handleClick}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
