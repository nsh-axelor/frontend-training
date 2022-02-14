import React, { useContext, useState } from "react";
import Context from "../../Context/Context";

function AddNote({ handleSaveNote }) {
  const [note, setNote] = useState("");
  const appState = useContext(Context)
  const [categories] = appState.categories
  const [selectedCategory,setSelectedCategory] = useState("General")


  const handleChange = (e) => {
    setNote(e.target.value)
  }


  const handleClick = () => {
      if(note.trim().length > 0){
          handleSaveNote(note,selectedCategory)
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
      <br/> 
      <div className="note-footer">
      <select className="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {
          categories.map((category) => (
            category !== "All" ? <option key={category} value={category}>{category}</option> : ''
          ))
        }
      </select>
        {/* <small>{charLimit - note.length} Remaining</small> */}
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
