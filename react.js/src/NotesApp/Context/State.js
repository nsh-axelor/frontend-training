import { useState } from "react"
import Context from "./Context"
import { nanoid } from "nanoid";

const State = (props) => {

    const [notes, setNotes] = useState([
        { id: nanoid(), note: "This is my first note", date: "11/04/2021" },
        { id: nanoid(), note: "This is my second note", date: "19/05/2021" },
        { id: nanoid(), note: "This is my third note", date: "17/09/2021" },
      ]);
    
    const [dark,setDark] = useState(false)
    const [search,setSearch] = useState("")

    const appState = {
        notes:[notes,setNotes],
        dark:[dark,setDark],
        search:[search,setSearch]
    }

    return <Context.Provider value={appState}>
        {props.children}
    </Context.Provider>
}

export default State