import { useState } from "react"
import Context from "./Context"
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

const State = (props) => {
    const db = new Dexie("NotesApp")
    db.version(1).stores({
        notes:"++id,note,category,date"
    })
    const [notes,setNotes]  = useState([])


    useLiveQuery(async () => {
        let x = await db.notes.toArray()
        setNotes(x)
    },[])
    
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
        selectedNote:[selectedNote,setSelectedNote],
        db
    }

    return <Context.Provider value={appState}>
        {props.children}
    </Context.Provider>
}

export default State