import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import Context from "../../Context/Context";
function Note({ id, note, date, handleDeleteNote,category }) {
  const appState = useContext(Context)
  // const [category,setCategory] = appState.category
  return (
    <div className="note">
    <div>
      <span>{note}</span>
      <h3>{category}</h3>
      </div>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever className="delete-icon" size="1.3em" onClick={() => handleDeleteNote(id)}/>
      </div>
    </div>
  );
}

export default Note;
