import React, { useContext, useState } from "react";
import Context from "../../Context/Context";

const charLimit = 200
function AddNote({ handleSaveNote }) {
  const [note, setNote] = useState("");
  const appState = useContext(Context)
  const [categories,setCategories] = appState.categories
  const [selectedCategory,setSelectedCategory] = useState("General")
  const handleChange = (e) => {
      if(e.target.value.length <= charLimit){
        setNote(e.target.value)
      }
  }
  const handleClick = () => {
      if(note.trim().length > 0){
          handleSaveNote(note,selectedCategory)
          setNote("")
      }
      console.log(selectedCategory);
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
      <select className="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="General" selected defaultValue >Select Any One Cateogry</option>
        {
          categories.map((category) => (
            category !== "All" ? <option value={category}>{category}</option> : ''
          ))
        }
      </select>
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
