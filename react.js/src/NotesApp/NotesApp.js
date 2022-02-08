import React, { useMemo, useState } from "react";
import Notes from "./Components/Notes";
import "./NotesApp.css";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";

function NotesApp() {
    const [search,setSearch] = useState("")
    const [dark,setDark] = useState(false)
  const [notes, setNotes] = useState([
    { id: nanoid(), note: "This is my first note", date: "11/04/2021" },
    { id: nanoid(), note: "This is my second note", date: "19/05/2021" },
    { id: nanoid(), note: "This is my third note", date: "17/09/2021" },
  ]);

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
    <Header dark={dark} setDark={setDark} />
      <Search value={search} handleOnChange={setSearch}/>
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
