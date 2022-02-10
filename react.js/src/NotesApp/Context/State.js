import { useState } from "react"
import Context from "./Context"
import { nanoid } from "nanoid";
import { Modal } from "react-bootstrap";

const State = (props) => {

    const [notes, setNotes] = useState([
        { id: nanoid(), note: "This is my first note", date: "11/04/2021" , category:"Work"},
        { id: nanoid(), note: "This is my second note", date: "19/05/2021", category:"Work" },
        { id: nanoid(), note: "This is my third note", date: "17/09/2021" , category:"Work"},
      ]);
    
    const [dark,setDark] = useState(false)
    const [search,setSearch] = useState("")
    const [categories,setCategories] = useState(["All","General","Work","Home","React"])
    const [category,setCategory] = useState("All")
    const [showModal,setShowModal] = useState(false)
    const [selectedNote,setSelectedNote] = useState({})


    const appState = {
        notes:[notes,setNotes],
        dark:[dark,setDark],
        search:[search,setSearch],
        categories:[categories,setCategories],
        category:[category,setCategory],
        modal:[showModal,setShowModal],
        selectedNote:[selectedNote,setSelectedNote]
    }

    return <Context.Provider value={appState}>
        {props.children}
    </Context.Provider>
}

export default State