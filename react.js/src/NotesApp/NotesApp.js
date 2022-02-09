import React, { useContext, useMemo, useState } from "react";
import Notes from "./Components/Notes";
import "./NotesApp.css";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";
import Context from "./Context/Context";

function NotesApp() {

  const appState = useContext(Context)
    const [search,setSearch] = appState.search
    const [dark,setDark] = appState.dark
  const [notes,setNotes] = appState.notes
  const saveNote = (text) => {
    let date = new Date().toLocaleDateString();
    setNotes((prevNotes) => {
      let newNotes = [...prevNotes, { id: nanoid(), note: text, date }];
      return newNotes;
    });
  };

  let $notes = useMemo(() => {
      let allNotes = notes.filter((note) => note.note.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      return allNotes 
  },[search,notes])

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      let newNotes = prevNotes.filter((note) => {
        return note.id !== id;
      });
      return newNotes;
    });
  };
  return (
      <div className={dark && "dark-mode"}>
    <div className="container">
    <Header/>
      <Search/>
      <Notes
        notes={$notes}
        handleSaveNote={saveNote}
        handleDeleteNote={deleteNote}
      />
    </div>
    </div>
  );
}

export default NotesApp;
