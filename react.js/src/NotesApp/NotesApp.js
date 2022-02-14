import React, { useContext, useMemo } from "react";
import Notes from "./Components/Notes";
import "./NotesApp.css";
import Search from "./Components/Search";
import Header from "./Components/Header";
import Context from "./Context/Context";
import CategorySelector from "./Components/CategorySelector/CategorySelector";
import Modal from "./Components/Notes/Modal";


function NotesApp() {
  const appState = useContext(Context);
  const [search] = appState.search;
  const [dark] = appState.dark;
  const [notes] = appState.notes;
  const [category] = appState.category;
  const db = appState.db

  const saveNote = async (text,category) => {
    let date = new Date().toLocaleDateString();
    await db.notes.add({date:date,note:text,category})
  };

  const filterByCategory = (givenNotes) => {
    if(category === "All"){
      return givenNotes
    }
    let filteredNotes = givenNotes.filter((note) => note.category === category)
    return filteredNotes
  }

  let $notes = useMemo(() => {
    let allNotes = notes.filter((note) =>
      note.note.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    allNotes = filterByCategory(allNotes)
    return allNotes;
  }, [search, notes,category]);

  const deleteNote = (id) => {
    db.notes.where("id").equals(id).delete()
  };
  return (
    <div className={dark ? "dark-mode" : undefined}>
      <div className="notes-container">
        <Header />
        <Search />
        <CategorySelector />
        <Notes
          notes={$notes}
          handleSaveNote={saveNote}
          handleDeleteNote={deleteNote}
        />
      </div>
      <Modal />
    </div>
  );
}

export default NotesApp;
