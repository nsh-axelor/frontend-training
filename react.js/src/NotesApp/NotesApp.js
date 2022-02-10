import React, { useContext, useMemo } from "react";
import Notes from "./Components/Notes";
import "./NotesApp.css";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";
import Context from "./Context/Context";
import CategorySelector from "./Components/CategorySelector/CategorySelector";
import Modal from "./Components/Notes/Modal";


function NotesApp() {
  const appState = useContext(Context);
  const [search, setSearch] = appState.search;
  const [dark, setDark] = appState.dark;
  const [notes, setNotes] = appState.notes;
  const [categories, setCategories] = appState.categories;
  const [category,setCategory] = appState.category;

  const saveNote = (text,category) => {
    let date = new Date().toLocaleDateString();
    setNotes((prevNotes) => {
      let newNotes = [...prevNotes, { id: nanoid(), note: text, date, category }];
      return newNotes;
    });
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
    setNotes((prevNotes) => {
      let newNotes = prevNotes.filter((note) => {
        return note.id !== id;
      });
      return newNotes;
    });
  };
  return (
    <div className={dark && "dark-mode"}>
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
