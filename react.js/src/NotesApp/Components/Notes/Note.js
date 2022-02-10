import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import Context from "../../Context/Context";

const charLimit = 200;
function Note({ id, note, date, handleDeleteNote, category }) {
  const appData = useContext(Context);
  const [showModal, setShowModal] = appData.modal;
  const [selectedNote, setSelectedNote] = appData.selectedNote;

  return (
    <div className="note">
      <div>
        <span style={{ overflowWrap: "break-word" }}>
          {note.substr(0, 195)}{" "}
          {note.length > charLimit && (
            <span
              className="view-more"
              onClick={() => {
                setShowModal(true);
                setSelectedNote({id,category,note,date})
              }}
            >
              View More
            </span>
          )}
        </span>
        <h3>{category}</h3>
      </div>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
}

export default Note;
